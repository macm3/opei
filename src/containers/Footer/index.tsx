import * as React from 'react';
import './index.css';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div > 
                    <div className="w3-row">
                        <div id="contact" className="w3-col w3-container m4 l4 ">
                            <div className="mui--text-title">Contato</div> 
                            <ul>
                                <li>
                                    <p className="mui--text-subhead">opei@cin.ufpe.br</p>
                                    <a 
                                        href="https://facebook.com/opeiPET/" 
                                        target="_blank" 
                                        className="white-text side_margin"
                                    >
                                        <i className="fa fa-facebook-square">
                                            <span>&nbsp;&nbsp;Facebook</span>
                                        </i>
                                    </a>
                                </li>
                            </ul>   
                        </div>
                        <div id="links" className="w3-col w3-container m4 l4">
                            <div className="mui--text-title">Links</div> 
                            <ul>
                                <li>
                                    <a 
                                        href="https://cin.ufpe.br/~pet" 
                                        target="_blank" 
                                    >
                                        <i className="fa fa-link">
                                            <span>&nbsp;&nbsp;PET-Informática</span>
                                        </i>
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="https://wiki.cin.ufpe.br/" 
                                        target="_blank" 
                                    >
                                        <i className="fa fa-link">
                                            <span>&nbsp;&nbsp;CInWiki</span>
                                        </i>
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="https://cin.ufpe.br/~pet/manual" 
                                        target="_blank" 
                                    >
                                        <i className="mui--text-title fa fa-file-pdf-o">
                                            <span>&nbsp;&nbsp;Manual do Calouro</span>
                                        </i>
                                    </a>
                                </li>
                            </ul> 
                        </div>
                        <div id="something" className="w3-col w3-container m4 l4 ">
                            {/* <div className="mui--text-title">Alguma coisa</div> 
                            <ul>
                                <li>
                                    <p>Não sei o que colocar</p>
                                </li>
                            </ul>  */}
                        </div>
                    </div>
                    {/* <Divider style={{marginLeft: '10%', marginRight: '10%'}}/> */}
                    <div className="w3-row">
                        <div className="w3-col w3-container m8 l8">
                            <div className="mui--text-body1" style={{textAlign: 'left'}}>
                                Made by PET-Informática
                            </div> 
                        </div>
                        <div className="w3-col w3-container m4 l4"/>
                    </div>
                </div>                    
            </footer>
        );
    }
}

export default Footer;