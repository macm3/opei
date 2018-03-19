import * as React from 'react';
import ViewPager from '../../components/ViewPager';
import './index.css';

interface S {
    index: number;
}

const styles: {
    [key: string]: React.CSSProperties;
} = {
    overflow: {
        overflow: 'hidden',
        height: 'auto',
        maxHeight: '600px',
        backgroundColor: '#333',
        position: 'relative',
    }
};

const logo = require('../../assets/logo.svg');

class Carousel extends React.Component<{}, S> {
    timerID: NodeJS.Timer;
    constructor(props: {}, context: {}) {
        super(props, context);
        
        this.state = {
            index: 0,
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.setState({
              index: (this.state.index + 1) % 4
          }),
          3000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }

    render(): JSX.Element | null | false {
        const imgs = [
            'https://res.cloudinary.com/dkbuneg9h/image/upload/v1492117901/opei_2_aayjbd.jpg',
            'https://res.cloudinary.com/dkbuneg9h/image/upload/v1521318977/IMG_0943_auz3o4.jpg',
            'https://res.cloudinary.com/dkbuneg9h/image/upload/v1521318977/IMG_0964_bs3zo8.jpg',
            'https://res.cloudinary.com/dkbuneg9h/image/upload/v1521318977/IMG_1070_roed5s.jpg',
        ];

        return (
            <div>
                <div style={styles.overflow}> 
                    <img src={logo} className="App-logo" alt=""/>
                    <ViewPager index={`${this.state.index}`}>
                        {imgs.map((value, index): React.ReactNode => (
                            <img 
                                key={index} 
                                style={{
                                    backgroundImage: `url(${value})`, 
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    opacity: 0.3,
                                    width: '100%',
                                    height: '600px',

                                }} 
                            />
                        ))}
                    </ViewPager>
                </div>
            </div>
        );
    }
}

export default Carousel;