import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { searchMediaAction, selectImageAction, selectVideoAction } from "../actions/mediaActions";
import PhotoPage from '../components/PhotoPage';
import VideoPage from '../components/VideoPage';
import '../style/styles.css';

class MediaGalleryPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(searchMediaAction(this.props.match.params.search || 'rain'));
    }

    handleSelectImage(selectedImage) {
        this.props.dispatch(selectImageAction(selectedImage));
    }

    handleSelectVideo(selectedVideo) {
        this.props.dispatch(selectVideoAction(selectedVideo));
    }

    handleSearch(e) {
        e.preventDefault();
        if (this.query !== null) {
            this.props.history.push(this.query.value);
            this.props.dispatch(searchMediaAction(this.query.value));
            this.query.value = '';
        }
    }

    render() {
        const {images, selectedImage, videos, selectedVideo} = this.props;
        return (
            <div className="container-fluid">
                {images && selectedImage && videos && selectedVideo ? (
                    <div>
                        <input type="text" ref={ref => (this.query = ref)}/>
                        <input type="submit" className="btn btn-primary" value="Search"
                               onClick={(e) => this.handleSearch(e)}/>
                        <div className="row">
                            <PhotoPage images={images} selectedImage={selectedImage}
                                       onHandleSelectImage={(img) => this.handleSelectImage(img)}/>
                            <VideoPage videos={videos} selectedVideo={selectedVideo}
                                       onHandleSelectVideo={(vid) => this.handleSelectVideo(vid)}/>
                        </div>
                    </div>
                ) : 'Loading...'}
            </div>
        )
    }
}

//
// MediaGalleryPage.propTypes = {
//
// };

const mapStateToProps = ({images, videos}) => ({
    images: images[0],
    selectedImage: images.selectedImage,
    videos: videos[0],
    selectedVideo: videos.selectedVideo
});

export default connect(mapStateToProps)(MediaGalleryPage);