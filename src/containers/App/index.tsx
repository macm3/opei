import * as React from 'react';
import './index.css';
import Carousel from '../../containers/Carousel';
import About from '../../containers/About';
import Footer from '../../containers/Footer';
import Events from '../../containers/Events';
import Contact from '../../containers/Contact';
import Sponsors from '../../containers/Sponsors';
import { AppBar, FlatButton } from 'material-ui';
import { getMuiTheme, MuiThemeProvider, colors } from 'material-ui/styles';

const muitheme = getMuiTheme({
    palette: {
        textColor: colors.darkBlack,
        primary1Color: '#222',
        primary2Color: colors.indigo700,
        accent1Color: colors.redA200,
        pickerHeaderColor: colors.darkBlack,
        alternateTextColor: colors.redA200
      },
});

const styles: {
    [key: string]: React.CSSProperties;
} = {
    buttonStyle: {
        backgroundColor: 'transparent',
        color: 'white',
        marginTop: '10px',
    },
};

interface S {
    url: string;
    width: number;
    height: number | string;
}

const logo = require('../../assets/logo-h.svg');
const logoSquare = require('../../assets/logosquare.svg');

class App extends React.Component<{}, S> {
    constructor(props: {}) {
        super(props);

        this.state = {
            url: window.innerWidth < 850 ? logoSquare : logo,
            width: window.innerWidth < 850 ? 36 : 100,
            height: 'auto',
        };
    }

    updateLogo = () => {
        this.setState({
            url: window.innerWidth < 850 ? logoSquare : logo,
            width: window.innerWidth < 850 ? 36 : 100,
        });
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateLogo);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateLogo);
    }
    
    render() {
        const imgs = [
            'https://res.cloudinary.com/dkbuneg9h/image/upload/v1492117901/opei_2_aayjbd.jpg',
            'https://res.cloudinary.com/dkbuneg9h/image/upload/v1521318977/IMG_0943_auz3o4.jpg',
            'https://res.cloudinary.com/dkbuneg9h/image/upload/v1521318977/IMG_0964_bs3zo8.jpg',
            'https://res.cloudinary.com/dkbuneg9h/image/upload/v1521318977/IMG_1070_roed5s.jpg',
        ];

        return (
            <div className="App">
                <MuiThemeProvider muiTheme={getMuiTheme(muitheme)}>
                    <AppBar 
                        showMenuIconButton={true} 
                        style={{
                            position: 'fixed',
                        }}
                        iconElementLeft={
                            <img src={this.state.url} width={this.state.width} height={this.state.height}/>}
                        iconStyleLeft={{
                            height: `url(${Number.parseInt(this.state.height + '') + 8})`,
                            width: `url(${this.state.width + 8})`,
                            margin: 'auto auto'
                        }}
                    >
                        <FlatButton href="#about" label="Sobre" style={styles.buttonStyle}/>
                        <FlatButton href="#events" label="Cronograma" style={styles.buttonStyle} />
                        <FlatButton href="#contact" label="Contato" style={styles.buttonStyle} />
                    </AppBar>
                </MuiThemeProvider>
                <Carousel imgs={imgs}/>
                <About />
                <Events />
                <Contact />
                <Sponsors />
                <Footer />
            </div>
        );
    }
}

export default App;
