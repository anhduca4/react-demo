import React from 'react';
import { Button } from 'reactstrap';
import SweetAlert from 'sweetalert2-react';
import BounceLoader from 'react-spinners/BounceLoader';
import './style.css';

class Dialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSuccess: false,
      showError: false,
      loader: false,
    };
  }

  setShowSuccess = (showSuccess) => {
    this.setState({
      showSuccess
    });
  }

  handleShowSuccess = () => {
    this.setState({
      loader: true,
    });
    this.setLoader = setTimeout(() => {
      this.setState({
        showSuccess: true,
        loader: false,
      });
    }, 1000);
    this.showSuccessTimeOut = setTimeout(() => {
      this.setState({ showSuccess: false });
    }, 11000);
  }

  setShowError = (showError) => {
    this.setState({
      showError
    });
  }

  handleShowError = () => {
    this.setState({
      loader: true,
    });
    this.setLoader = setTimeout(() => {
      this.setState({
        showError: true,
        loader: false,
      });
    }, 1000);
    this.showErrorTimeOut = setTimeout(this.setState({ showError: false }), 11000);
  }

  componentWillUnmount = () => {
    clearTimeout(this.showSuccessTimeOut);
    clearTimeout(this.setLoader);
    clearTimeout(this.showErrorTimeOut);
  }

  render() {
    const {
      showSuccess,
      showError,
      loader,
    } = this.state;

    return (
      <React.Fragment>
      <Button color="danger" onClick={() => this.handleShowError()}>Faild!</Button>
      <Button color="success" onClick={() => this.handleShowSuccess()}>Sucsess!</Button>
      <SweetAlert
        show={showSuccess}
        title="Sucsess"
        text="Payment success"
        type="success"
        onConfirm={() => this.setShowSuccess(false)}
      />
      <SweetAlert
        show={showError}
        title="Error"
        text="Payment error"
        type="error"
        onConfirm={() => this.setShowError(false)}
      />
      {loader && (
        <div className="loading">
          <div className="centered">
            <BounceLoader color={'rgb(54, 215, 183)'}/>
          </div>
        </div>
      )}
    </React.Fragment>
    )
  }
}

export default Dialog;
