import * as React from 'react';
import ViewPager from '../../components/ViewPager';
import './index.css';

// interface State {
//     index: number;
// }

// interface Props {
//     imgs: string[];
// }

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

// tslint:disable-next-line:no-any
class Carousel extends React.Component<any, any> {
    timerID: NodeJS.Timer;

    // tslint:disable-next-line:no-any
    constructor(props: any, context: any) {
        super(props, context);
        
        this.state = {
            index: 0,
        };
    }
    
    componentDidMount() {
        this.timerID = setInterval(
          () => this.setState({
              index: (this.state.index + 1) % this.props.imgs.length
          }),
          3000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render(): JSX.Element | null | false {
        const { imgs } = this.props;
        return (
            <div>
                <div style={styles.overflow}> 
                    <img src={logo} className="App-logo" alt=""/>
                    <ViewPager index={`${this.state.index}`}>
                        {imgs.map((value: string, index: number): React.ReactNode => (
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