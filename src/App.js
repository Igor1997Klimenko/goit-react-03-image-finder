import './App.css';
import imagesCard from './api';
import { Component } from 'react'
import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    isModal: false,
    largeUrl: '',
    isPending: false,
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ isPending: true, page: 1 });
    if (this.state.query.trim() === '') {
      toast.error("Error!");
    }
  };
  
  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value })
  };

  handleModal = (largeUrl) => {
      this.setState(({ isModal }) => ({
        isModal: !isModal,
        largeUrl: largeUrl ? largeUrl : '',
      }))
  };

  handleLoadMore = () => {
    this.setState(prevState=>({page: prevState.page + 1, isPending: true}))
  }

  async componentDidUpdate( prevProps,prevState) {
    if (this.state.isPending) {
      const images = await imagesCard(this.state.query, this.state.page);
      this.setState((prevState) => ({
        images: this.state.page > 1 ? [...prevState.images, ...images] : images,
        isPending: false,
      }));
    }
  }


  render() {
    const { query,images,isModal,largeUrl,isPending } = this.state;
      return (
        <div className="box">
          <SearchBar onSubmit={this.handleSubmit} onChange={this.handleChange} value={query} />
          <ToastContainer />
          {!!images.length && <ImageGallery handleModal={this.handleModal} images={images} />}
          {!!images.lenght > 0 ? null : !isPending ? null : <Loader />}
          {!!images.length > 0 && <Button handleLoadMore={this.handleLoadMore}/>}
          {!!isModal && <Modal handleModal={this.handleModal} largeUrl={largeUrl}/>}
        </div>
    );
  };
};

export default App;
