import './Navbar.css';
import React, { Component } from "react";
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive,
  Dropdown
} from "semantic-ui-react";

const NavBarMobile = ({
  children,
  onPusherClick,
  onToggle,
  visible
}) => (
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      vertical
      visible={visible}
    >
      <Menu.Item content="Sobre" href="/sobre"/>
      <Menu.Item content="Como Participar" href="/como-participar"/>
      <Menu.Item content='Premiações' name='winners' href='/premiacoes'/>
      <Menu.Item content='Material Didático' name='learn' href='/material-didatico'/>
      <Menu.Item content='Divulgação' name='share' href='/divulgacao'/>
      <Menu.Item content='FAQ' name='faq' href='/faq'/>
    </Sidebar>
    <Sidebar.Pusher
      dimmed={visible}
      onClick={onPusherClick}
      style={{ minHeight: "100vh" }}
    >
      <Menu fixed="top" inverted>
				<Menu.Item onClick={onToggle}>
          <Icon name="sidebar" />
        </Menu.Item>
				<Menu.Item href="/">
					<Image size="tiny" src="http://res.cloudinary.com/dkbuneg9h/image/upload/v1494354222/ss_wjjd8u.png" />
    		</Menu.Item>
      </Menu>
      {children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

const NavBarDesktop = () => (
  <Menu fixed="top" inverted>
		<Menu.Item href="/">
			<Image size="tiny" src="http://res.cloudinary.com/dkbuneg9h/image/upload/v1494354222/ss_wjjd8u.png" />
    </Menu.Item>
    <Menu.Item content='Sobre' href="/sobre" name="about"/>
    <Dropdown text='Como Participar' pointing="top" className='link item'>
      <Dropdown.Menu>
        <Dropdown.Item href="/como-participar#regulamento">Regulamento</Dropdown.Item>
        <Dropdown.Item href="/como-participar#categorias">Categorias</Dropdown.Item>
        <Dropdown.Item href="/como-participar#calendario">Calendário</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Item content='Premiações' name='winners' href='/premiacoes'/>
    <Menu.Item content='Material Didático' name='learn' href='/material-didatico'/>
    <Menu.Item content='Divulgação' name='share' href='/divulgacao'/>
    <Menu.Item content='FAQ' name='faq' href='/faq'/>
  </Menu>
);

const NavBarChildren = ({ clas, children }) => (
  <Container fluid className={"inv-lat-marg "+clas} style={{marginTop: "4em"}}>{children}</Container>
);

export default class Navbar extends Component {

  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            visible={visible}
          >
            <NavBarChildren clas='mobile'>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop />
          <NavBarChildren clas='desktop'>{children}</NavBarChildren>
        </Responsive>
      </div>
    );
  }
}