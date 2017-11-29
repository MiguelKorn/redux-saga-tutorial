import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { searchMediaAction, selectImageAction, selectVideoAction } from "../actions/mediaActions";
import PhotoPage from '../components/PhotoPage';
import VideoPage from '../components/VideoPage';
import '../style/styles.css';

class MediaGalleryPage extends React.Component {
    componentWillMount() {
        this.refreshSearch(this.props.match.params.search);
    }

    componentWillReceiveProps(nextProps) {
        const {search} = nextProps.match.params;
        if (search !== this.props.match.params.search) {
            this.refreshSearch(search);
        }
    }

    refreshSearch(searchValue) {
        this.props.dispatch(searchMediaAction(searchValue || 'rain'));
    }

    handleSelectImage(selectedImage) {
        this.props.dispatch(selectImageAction(selectedImage));
    }

    handleSelectVideo(selectedVideo) {
        this.props.dispatch(selectVideoAction(selectedVideo));
    }

    handleSearch(e) {
        e.preventDefault();
        const {history} = this.props;
        let queryValue = this.query.value;
        if (queryValue !== '') {
            this.props.match.params.search ? history.push(queryValue) : history.push('library/' + queryValue);
            this.refreshSearch(queryValue);
            this.query.value = '';
        }
    }

    render() {
        const {images, selectedImage, videos, selectedVideo} = this.props;
        return (
            <div className="container-fluid">
                { images && selectedImage && videos && selectedVideo ? (
                    <div>
                        <input type="text" ref={ ref => (this.query = ref) }/>
                        <input type="submit" className="btn btn-primary" value="Search"
                               onClick={ (e) => this.handleSearch(e) }/>
                        <div className="row">
                            <PhotoPage images={ images } selectedImage={ selectedImage }
                                       onHandleSelectImage={ (img) => this.handleSelectImage(img) }/>
                            <VideoPage videos={ videos } selectedVideo={ selectedVideo }
                                       onHandleSelectVideo={ (vid) => this.handleSelectVideo(vid) }/>
                        </div>
                    </div>
                ) : 'Loading...' }
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