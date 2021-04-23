import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Segment, Header, Form, Button, Select, DropdownProps } from 'semantic-ui-react';
import { GENDER_OPT, CREDIT_CARD_TYPE } from '../constants';
import { TGENDER, ECREDIT_CARD_TYPE } from '../interface';
import APIService from '../service';

interface IUsersConfigPageProps extends RouteComponentProps {

}

interface IUsersConfigPageState {
  isLoading: boolean;
  users: {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    gender: TGENDER;
    city: string;
    street_address: string;
    credit_card_type: ECREDIT_CARD_TYPE;
    credit_card_no: string;
  }
}

class UsersConfigPage extends React.PureComponent<IUsersConfigPageProps, IUsersConfigPageState> {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      users: {
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        gender: 'male',
        city: '',
        street_address: '',
        credit_card_type: ECREDIT_CARD_TYPE.AMERICAN_EXPRESS,
        credit_card_no: '',
      }
    }
  }

  public handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newForm = { ...this.state.users };
    newForm[name] = value;

    this.setState({users: newForm });
  };

  public handleSelectionChange = (e: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => {
    const { name, value } = data;
    const newForm = { ...this.state.users };
    newForm[name] = value;

    this.setState({users: newForm });
  };

  public handleSubmit = () => {
    this.setState({isLoading: true})
    APIService.request('POST', 'users', this.state.users)
      .then(res => {
        if (res) {
          alert("new user succesfully added !")
        }
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        this.setState({isLoading: false})
      })
  }

  public render() {
    const { isLoading, users } = this.state;
    return (
      <Segment loading={isLoading} size="small">
        <Header as='h3'>New Users</Header>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input 
              placeholder='Your First Name'
              name="first_name"
              value={users.first_name}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input 
              placeholder='Your Last Name'
              name="last_name"
              value={users.last_name}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input 
              placeholder='Your Email'
              type="email" name="email"
              value={users.email}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Phone Number</label>
            <input 
              placeholder='Your Phone number'
              type="text" name="phone_number"
              value={users.phone_number}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Gender</label>
            <Select
              placeholder="select your gender"
              options={GENDER_OPT}
              name="gender"
              value={users.gender}
              onChange={this.handleSelectionChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Credit Card Type</label>
            <Select 
              placeholder="select your credit card type" 
              options={CREDIT_CARD_TYPE}
              name="credit_card_type"
              value={users.credit_card_type}
              onChange={this.handleSelectionChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Credit Card No</label>
            <input
              placeholder='your credit card number'
              type="text"
              name="credit_card_no"
              value={users.credit_card_no}
              onChange={this.handleChange} 
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input 
              placeholder='Your City'
              type="text"
              name="city"
              value={users.city}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Address</label>
            <input
              placeholder='Your Address'
              type="text"
              name="street_address"
              value={users.street_address}
              onChange={this.handleChange}
              />
          </Form.Field>
          <Button type='submit' color="teal" onClick={this.handleSubmit}>Submit</Button>
        </Form>
      </Segment>
    )
  }
}

export default UsersConfigPage;