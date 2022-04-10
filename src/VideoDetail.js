import { Component } from 'react';
import data from './data';

export default class VideoDetail extends Component {
	state = {
		video: data.find(video => video.id === this.props.currentVideo.id),
	};

	videoRef = null;

	render() {
		const { title, description, file, likes, dislikes } = this.state.video;
		return (
			<div className="videoDetail">
				<button onClick={() => this.props.navigate('list', null)} className="backButton">
					&lt; Retour
				</button>

				<video
					style={{ width: '100%', backgroundColor: 'black' }}
					height="400"
					controls
					src={'./uploads/' + file}
					ref= {el => this.videoRef = el}
				></video>
				<button onClick={ () => this.videoRef.play() }>play</button>
				<button onClick={ () => this.videoRef.pause() }>pause</button>
				<header>
					<h1>{title}</h1>
					<div className="likesContainer">
						<button className="like" onClick={() => this.handleLikeClick()}>
							{likes}
						</button>
						<button className="dislike" onClick={() => this.handleDislikeClick()}>
							{dislikes}
						</button>
					</div>
				</header>
				{description && <p>{description}</p>}
			</div>
		);
	}

	handleLikeClick() {
		this.setState({
			video: {
				...this.state.video,
				likes: this.state.video.likes + 1,
			},
		});
	}

	handleDislikeClick() {
		const { video } = this.state;
		this.setState({
			video: {
				...video,
				dislikes: video.dislikes + 1,
			},
		});
	}
}
