import React from 'react';
import { Table, Segment, Header, Button } from 'semantic-ui-react';
import APIService from '../service';
import { IGETUsersResponse } from '../interface';
import { Link } from 'react-router-dom';

interface IUsersPageState {
  users: any;
  isLoading: boolean;
}

class UsersPage extends React.PureComponent<{}, IUsersPageState> {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      users: [],
    }
  }

  componentDidMount() {
    this.setState({isLoading: true})
    APIService.request('GET', 'users')
      .then(res => {
        this.setState({users: res})
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        this.setState({isLoading: false})
      })
  }

  public renderUsers = () => {
    const { users } = this.state;
    return users.map((user: IGETUsersResponse) => {
      return (
        <Table.Row key={user.id}>
          <Table.Cell>
            {user.id}
          </Table.Cell>
          <Table.Cell>
            {`${user.first_name} ${user.last_name}`}
          </Table.Cell>
          <Table.Cell>
            {`${user.email}`}
          </Table.Cell>
          <Table.Cell>
            {`${user.city} ${user.street_address}`}
          </Table.Cell>
        </Table.Row>
      )
    })
  }

  public render() {
    const { isLoading } = this.state;
    return (
      <Segment loading={isLoading}>
        <Header as='h3'>Application Content</Header>
        <Button color="teal" as={Link} to="/teaching-react-app/new">
          New Users
        </Button>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>Full name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.renderUsers()}
          </Table.Body>
        </Table>
      </Segment>
    );
  }
}

export default UsersPage;