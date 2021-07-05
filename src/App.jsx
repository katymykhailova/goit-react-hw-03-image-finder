import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from 'components/Searchbar';
import FetchPictures from 'components/FetchPictures';
import Modal from 'components/Modal';

class App extends Component {
  state = {
    searchQuery: '',
    showModal: false,
    largeImageURL: null,
    imgTags: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const nextlargeImageURL = this.state.largeImageURL;
    const prevlargeImageURL = prevState.largeImageURL;

    if (nextlargeImageURL !== prevlargeImageURL) {
      this.toggleModal();
    }
  }

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  handleImageClick = (largeImageURL, imgTags) => {
    this.setState({ largeImageURL, imgTags });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { searchQuery, showModal, largeImageURL, imgTags } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <FetchPictures
          searchQuery={searchQuery}
          handleImageClick={this.handleImageClick}
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
