import { Component } from 'react';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';


export default class Navigator extends Component {
	state = {
		currentPage: 'list',
        currentVideo: null
	};

    constructor(props) {
        super(props);
        this.navigate = this.navigate.bind(this);
    }

    navigate(pageType, idVideo) {
        this.setState({currentPage: pageType, currentVideo: idVideo});
    }

	render() {
		
        switch (this.state.currentPage) {
            case 'list':
                return (<VideoList navigate={this.navigate}/>);
            case 'details':
                return (<VideoDetail currentVideo={this.state.currentVideo} navigate={this.navigate}/>);
            default:
                return (<div>ERREUR</div>);
        }
	}
}
