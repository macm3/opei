import * as React from 'react';
import './index.css';

class About extends React.Component {
    render() {
        return(
            <div>
                <div id="about" className="Description">
                    <h2 className="mui--text-dark-secondary mui--text-headline">
                        A OPEI tem como principal objetivo despertar o interesse dos estudantes dos ensinos 
                        fundamental e médio por uma área que está crescendo cada vez mais, a computação. 
                        Além desse objetivo imprescindível, a OPEI busca: estimular os alunos a praticarem 
                        atividades que envolvem o raciocínio lógico-matemático; introduzir disciplinas iniciais 
                        de técnicas de programação e raciocínio computacional; identificar novos talentos e 
                        vocações na área de computação.
                    </h2>
                </div>
                <div className="intrinsic-container intrinsic-container-16x9">
                    <iframe 
                        src="https://www.youtube.com/embed/7ubYlXGk7KY"
                        allowFullScreen={true}
                        frameBorder={0}
                    />
                </div>
            </div>
        );
    }
}

export default About;