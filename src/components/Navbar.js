import _ from "lodash";
import './Navbar.css';
import React, { Component } from "react";
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
		<Menu.Item href="/">
			<Image size="tiny" src="http://res.cloudinary.com/dkbuneg9h/image/upload/v1494354222/ss_wjjd8u.png" />
    </Menu.Item>
  		{_.map(leftItems, item => <Menu.Item {...item}/>)}
    <Menu.Menu position="right">
      {_.map(rightItems, item => <Menu.Item {...item} />)}
    </Menu.Menu>
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
		const leftItems = [
			{ key: 'about', content:'Sobre', name:'about', href: 'sobre'},		
			{ key: 'rules', content:'Regulamento', name:'rules', href: 'regulamento'},			
			{ key: 'dates', content:'Calendário', name:'dates', href: 'calendario'},			
			{ key: 'winners', content:'Premiações', name:'winners', href: 'premiacoes'},			
			{ key: 'learn', content:'Material Didático', name:'learn', href: 'material-didatico'},			
			{ key: 'share', content:'Divulgação', name:'share', href: 'divulgacao'},			
			{ key: 'faq', content:'FAQ', name:'faq', href: 'faq'}	
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
            <NavBarChildren clas='mobile'>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
          <NavBarChildren clas='desktop'>{children}</NavBarChildren>
        </Responsive>
      </div>
    );
  }
}