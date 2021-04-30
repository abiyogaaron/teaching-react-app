import React from 'react';
import { Table, Segment, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { IUsersPageState, IAppState } from '../interface/state';
import { IGETUsersResponse } from '../interface';
import {
  resetStateData,
  getUsers,
} from '../redux/action/userPageAction';
 
interface IUserPageProps {
  usersPage: IUsersPageState;
  resetStateData(): void;
  getUsers(): void;
}

class UsersPage extends React.PureComponent<IUserPageProps> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUsers()
  }

  componentWillUnmount() {
    this.props.resetStateData();
  }

  public renderUsers = () => {
    const { data } = this.props.usersPage;
    return data.map((user: IGETUsersResponse) => {
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
    const { isLoading } = this.props.usersPage;
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

const mapStateToProps = ({ usersPage }: IAppState) => ({
  usersPage,
});

const mapDispatchToProps = {
  resetStateData,
  getUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersPage);