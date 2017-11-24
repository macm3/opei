import React, {Component} from 'react';
import {Image, Embed} from 'semantic-ui-react';
import HistoryFeed from './../components/HistoryFeed';
import Section from './../components/Section';

export default class About extends Component{
	render(){
		return(
			<div>
				<Image id="motivacao" src="http://res.cloudinary.com/dkbuneg9h/image/upload/c_crop,h_800,w_2480,y_320/v1492118391/Prepare-se2_q5eozu.png"/>
				<Section title="SOBRE" icon="bookmark">
					<p style={{textAlign:"justify"}}>A Olimpíada Pernambucana de Informática (OPEI) é uma competição para os estudantes de Ensinos Fundamental e Médio das instituições públicas e privadas de todo o estado de Pernambuco. Ela possui modalidades de programação práticas, onde os alunos de Ensino Médio podem participar resolvendo questões de raciocínio algorítmico, com problemas similar aos de competições como a <a href="https://icpc.baylor.edu/">ACM/ICPC</a> e a <a href="http://olimpiada.ic.unicamp.br/">Olimpíada Brasileira de Informática (OBI)</a>, assim como modalidades teóricas, onde alunos dos Ensinos Fundamental e Médio sem nenhum conhecimento prévio na área de informática podem resolver desafios de lógica, raciocínio e matemática. A OPEI é uma iniciativa do <a href="https://pet-informatica.github.io/">PET-Informática</a>, e é uma olimpíada completamente organizada por alunos do curso de Ciência da Computação, em conjunto com a Universidade Federal de Pernambuco (UFPE) e empresas parceiras.</p>
				</Section>
				<Section title="OBJETIVO" icon="pie chart">
					<p style={{textAlign:"justify"}}>A OPEI procura despertar nos alunos o interesse pela computação, imprescindível na formação básica dos estudantes atualmente, através de uma atividade que envolve desafio, engenhosidade e uma saudável dose de competição. Ela também permite que os competidores possam conhecer de forma mais abrangente a carreira na área, procurando engajar os participantes em ações após a competição, como visitas guiadas no <a href="https://www.ufpe.br/cin">Centro de Informática (CIn)</a> e oferecimento de <a href="https://pet-informatica.github.io/programa-de-ferias/">cursos de computação</a>. Por fim, a olimpíada almeja preparar melhor e despertar o interesse de alunos pernambucanos para as competições nacionais e internacionais de programação, como a OBI, e a ACM/ICPC.</p>
					<Embed id="mHW1Hsqlp6A" source='youtube' placeholder="http://res.cloudinary.com/dkbuneg9h/image/upload/v1511325108/Ruchi-facebook-first-female-enginer_min_r2pssr.jpg"/>
				</Section>
				<Section title="HISTÓRICO" icon="book">
					<p style={{textAlign:"justify"}}>A OPEI é uma olimpíada recente. Sua história começa em 2015, quando o PET-Informática decide incentivar o estudo de computação em âmbito estadual. Desde então, ela vem crescendo muito rapidamente a cada edição! </p>
					<br/><br/><HistoryFeed/>
				</Section>
			</div>
		);
	}
}