import React from 'react';
import { Icon, Container, Menu, Segment, Sidebar, Dropdown } from 'semantic-ui-react';

interface IAppState {
  showSidebar: boolean;
}

class BigWrapper extends React.PureComponent<{}, IAppState> {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false,
    }
  }

  public toggleSidebar = () => {
    this.setState({showSidebar: !this.state.showSidebar });
  }

  public contentClick = () => {
    if (this.state.showSidebar) {
      this.setState({showSidebar: !this.state.showSidebar });
    }
  }
  public renderChildren = () => {
    return (
      this.props.children
    );
  }

  public render() {
    const { showSidebar } = this.state;
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
            {this.renderChildren()}
          </Container>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}

export default BigWrapper;