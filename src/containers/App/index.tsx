import * as React from 'react';
import './index.css';
import Carousel from '../../containers/Carousel';
import About from '../../containers/About';
import Footer from '../../containers/Footer';
import Events from '../../containers/Events';
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
    }
};

// const logo = require('../../assets/opeisquare.png');

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <MuiThemeProvider muiTheme={getMuiTheme(muitheme)}>
                    <AppBar showMenuIconButton={false} >
                        <FlatButton href="#about" label="Sobre" style={styles.buttonStyle}/>
                        <FlatButton href="#events" label="Cronograma" style={styles.buttonStyle} />
                        <FlatButton href="#contact" label="Contato" style={styles.buttonStyle} />
                    </AppBar>
                </MuiThemeProvider>
                <Carousel />
                {/* <Card 
                    style={{
                        width: '70%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: '20px',
                        marginBottom: '20px'
                    }}
                > */}
                    <About />
                {/* </Card> */}
                
                <Events />
                <Footer />
            </div>
        );
    }
}

export default App;
