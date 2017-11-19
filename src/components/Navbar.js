import _ from "lodash";
import React, { Component } from "react";
import {Link} from 'react-router-dom';
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive
} from "semantic-ui-react";

const NavBarMobile = ({
  children,
  leftItems,
  onPusherClick,
  onToggle,
  rightItems,
  visible
}) => (
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      items={leftItems}
      vertical
      visible={visible}
    />
    <Sidebar.Pusher
      dimmed={visible}
      onClick={onPusherClick}
      style={{ minHeight: "100vh" }}
    >
      <Menu fixed="top" inverted>
				<Menu.Item onClick={onToggle}>
          <Icon name="sidebar" />
        </Menu.Item>
				<Menu.Item as="a" href="/">
					<Image size="tiny" src="http://res.cloudinary.com/dkbuneg9h/image/upload/v1494354222/ss_wjjd8u.png" />
    		</Menu.Item>
        <Menu.Menu position="right">
          {_.map(rightItems, item => <a href={item.link}><Menu.Item {...item} /></a>)}
        </Menu.Menu>
      </Menu>
      {children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

const NavBarDesktop = ({ leftItems, rightItems }) => (
  <Menu fixed="top" inverted>
		<Menu.Item as="a" href="/">
			<Image size="tiny" src="http://res.cloudinary.com/dkbuneg9h/image/upload/v1494354222/ss_wjjd8u.png" />
    </Menu.Item>
  		{_.map(leftItems, item => <Menu.Item {...item}></Menu.Item>)}
    <Menu.Menu position="right">
      {_.map(rightItems, item => <a href={item.link}><Menu.Item {...item} /></a>)}
    </Menu.Menu>
  </Menu>
);

const NavBarChildren = ({ children }) => (
  <Container style={{ marginTop: "5em" }}>{children}</Container>
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
		const leftItems = [
			{ as: 'a', content:'Sobre', name:'about', href: 'sobre'},		
			{ as: 'a', content:'Regulamento', name:'rules', href: 'regulamento'},			
			{ as: 'a', content:'Calendário', name:'dates', href: 'calendario'},			
			{ as: 'a', content:'Premiações', name:'winners', href: 'premiacoes'},			
			{ as: 'a', content:'Material Didático', name:'learn', href: 'material-didatico'},			
			{ as: 'a', content:'Divulgação', name:'share', href: 'divulgacao'},			
			{ as: 'a', content:'FAQ', name:'faq', href: 'faq'}	
		];
		const rightItems = [];
    const { children } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            visible={visible}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
          <NavBarChildren>{children}</NavBarChildren>
        </Responsive>
      </div>
    );
  }
}