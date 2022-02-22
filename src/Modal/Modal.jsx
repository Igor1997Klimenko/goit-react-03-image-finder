import '../App.css';
import {Component} from 'react';
class Modal extends Component {
    onModalClose = e => {
        if (e.keyCode === 27) {
            this.props.handleModal();
        }
    }
    componentDidMount() {
        window.addEventListener('keydown', this.onModalClose);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onModalClose);
    }
    render() {
        const { largeUrl, handleModal } = this.props;
        return (
            <div className="Overlay" onClick={(e) => {
                if (e.target === e.currentTarget) {
                    handleModal();
                }
            }}>
                <div className="Modal">
                    <img src={largeUrl} alt="" />
                </div>
            </div>
        )
    }
}
export default Modal