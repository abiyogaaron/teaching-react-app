import React from 'react';
import { Header, Icon, Container, Menu, Segment, Sidebar, Dropdown, Table } from 'semantic-ui-react'
import APIService from './service';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import { IGETUsersResponse } from './interface';

interface IAppState {
  showSidebar: boolean;
  isLoading: boolean;
  users: any;
}

class App extends React.Component<{}, IAppState> {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false,
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

  public toggleSidebar = () => {
    this.setState({showSidebar: !this.state.showSidebar });
  }

  public contentClick = () => {
    if (this.state.showSidebar) {
      this.setState({showSidebar: !this.state.showSidebar });
    }
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
    const { showSidebar, isLoading } = this.state;
    return (
      <Sidebar.Pushable as={Segment} className="app-wrapper">
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          inverted
          vertical
          visible={showSidebar}
          width='thin'
        >
          <Menu.Item as='a'>
            <Icon name='home' />
            Home
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='gamepad' />
            Games
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='camera' />
            Channels
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher
          dimmed={showSidebar}
          onClick={this.contentClick}
        >
          <Menu className="navbar">
            <Container className="navbar-top">
              <Menu.Item onClick={this.toggleSidebar}>
                <Icon name="bars" />
              </Menu.Item>
              <Dropdown
                item
                simple
                text={'menu dropdown'}
              >
                <Dropdown.Menu>
                  <Dropdown.Item
                    icon="settings"
                    text="settings"
                  />
                  <Dropdown.Item icon="sign out" text="Sign out"/>
                </Dropdown.Menu>
              </Dropdown>
            </Container>
          </Menu>
          <Container>
            <Segment loading={isLoading}>
              <Header as='h3'>Application Content</Header>

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
          </Container>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}

export default App;
