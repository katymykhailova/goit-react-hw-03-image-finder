import { Component } from 'react';
import ImageGallery from 'components/ImageGallery';
import apiService from 'services/apiService';
import Button from 'components/Button';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class FetchPictures extends Component {
  state = {
    pictures: [],
    error: null,
    status: Status.IDLE,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearchQuery = prevProps.searchQuery;
    const nextSearchQuery = this.props.searchQuery;

    if (prevSearchQuery !== nextSearchQuery) {
      this.setState({ pictures: [], page: 1, status: Status.PENDING });
      this.fetchPictures();
    }
  }

  onLoadMore = e => {
    e.preventDefault();
    this.fetchPictures();
  };

  async fetchPictures() {
    const { searchQuery } = this.props;
    const { page } = this.state;
    try {
      const pictures = await apiService.ApiService(searchQuery, page);
      if (pictures.length !== 0) {
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...pictures],
          page: prevState.page + 1,
          status: Status.RESOLVED,
        }));
      } else {
        this.setState({
          error: `Нет изображений по ключевому слову ${searchQuery}`,
          status: Status.REJECTED,
        });
      }
    } catch (error) {
      this.setState({ error, status: Status.REJECTED });
    }
  }

  render() {
    const { status, pictures } = this.state;
    const { handleImageClick } = this.props;

    if (status === 'idle') {
      return <ImageGallery pictures={pictures} />;
    }

    if (status === 'pending') {
      return <div></div>;
      // return <PokemonPendingView pokemonName={pokemonName} />;
    }

    if (status === 'rejected') {
      return <div></div>;

      // return <PokemonErrorView message={error.message} />;
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGallery
            pictures={pictures}
            handleImageClick={handleImageClick}
          />
          <Button onClick={this.onLoadMore} aria-label="add contact">
            Load more
          </Button>
        </>
      );
    }
  }
}
