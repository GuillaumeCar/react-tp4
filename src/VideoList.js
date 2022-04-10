import { Component } from 'react';
import data from './data';
import VideoThumbnail from './VideoThumbnail';

export default class VideoList extends Component {
	state = {
		videos: [],
	};
	componentDidMount() {
		setTimeout(() => this.setState({ videos: data }), 500);
	}
	render() {
		const { videos } = this.state,
			classNames = `videoList ${videos?.length ? '' : 'is-loading'}`;

		return (
			<div className="container">
				<header>
					<h1>Recommandations</h1>
				</header>
				<div className={classNames}>
					{this.renderThumbList()}
				</div>
			</div>
		);
	}

	renderThumbList() {
		return this.state.videos.map(
			({ id, title, description, thumbnail, file }) => (
				<VideoThumbnail 
					key={id} 
					id={id}
					title={title}
					description={description} 
					thumbnail={thumbnail} 
					file={file}
					navigate={this.props.navigate} 
				/>
			)
		);
	}
}
