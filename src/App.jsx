import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from 'components/Searchbar';
import FetchPictures from 'components/FetchPictures';
import Modal from 'components/Modal';

class App extends Component {
  state = {
    searchQuery: '',
    showModal: false,
    largeImageURL: '',
    imgTags: '',
    heightGallery: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const nextHeightGallery = this.state.heightGallery;
    const prevHeightGallery = prevState.heightGallery;

    if (nextHeightGallery !== prevHeightGallery && prevHeightGallery !== 0) {
      this.scrollTo(prevHeightGallery);
    }
  }

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  handleImageClick = (largeImageURL, imgTags) => {
    this.setState({ largeImageURL, imgTags });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  getHeightGallery = () => {
    const gallery = document.querySelector('#imageGallery');
    const heightGallery = gallery.clientHeight;
    this.setState({
      heightGallery,
    });
  };

  scrollTo(heightGallery) {
    window.scrollTo({
      top: heightGallery,
      behavior: 'smooth',
    });
  }

  render() {
    const { searchQuery, showModal, largeImageURL, imgTags } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <FetchPictures
          searchQuery={searchQuery}
          handleImageClick={this.handleImageClick}
          getHeightGallery={this.getHeightGallery}
        />
        <ToastContainer autoClose={3000} />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={imgTags} />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
