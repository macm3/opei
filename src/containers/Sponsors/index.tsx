import * as React from 'react';
import { Card, CardTitle } from 'material-ui';
import './index.css';
import { GridList, GridTile } from 'material-ui';

const sponsors = [
    {
        img: 'http://res.cloudinary.com/dkbuneg9h/image/upload/v1521679374/logo_Cin_aqfbje.png',
        title: 'CIn',
        site: 'https://cin.ufpe.br',
    },
    {
        img: 'http://res.cloudinary.com/dkbuneg9h/image/upload/v1521674491/Logo-PET-Simbolo_qagowa.png',
        title: 'PET-Informática',
        site: 'https://cin.ufpe.br/~pet',
    },
];

const styles: {
    [key: string]: React.CSSProperties;
} = {
    gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
    },
};

interface S {
    cols: number;
}

class Sponsors extends React.Component<{}, S> {
    constructor(props: {}) {
        super(props);

        this.state = {
            cols : window.innerWidth < 850 ? 2 : 5
        };
    }

    updateDimensions = () => {
        this.setState({cols: window.innerWidth < 850 ? 2 : 5});
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    render() {
        return (
            <Card className="Sponsors" >
                <CardTitle
                    title="Patrocinadores" 
                    style={{
                        textAlign: 'left',
                    }}
                />
                <GridList style={styles.gridList} cols={this.state.cols}>
                    {sponsors.map((tile) => (
                        <a href={tile.site} target="_blank">
                            <GridTile
                                cols={1}
                                key={tile.img}
                                title={tile.title}
                                titleStyle={{
                                    color: 'white',
                                }}
                                titleBackground="#222222BB"
                            >   
                            <img 
                                src={tile.img} 
                                style={{
                                    left: 0,
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    padding: '20%',
                                    width: '80%',
                                }}
                            />
                                
                            </GridTile>
                        </a>
                    ))}
                </GridList>
            </Card>
        );
    }
}

export default Sponsors;