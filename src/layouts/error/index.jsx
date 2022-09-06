import React, {Component} from 'react';

export default class Error extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

/*  componentDidMount() {
    console.log(this.props.location.state.XXX);   //xxx指state对象中的键名
  }*/

  render() {
    //const route = this.state.route;
    // window.router = this.props.history;
    // console.log(window.router);
    /*const onFinish = () => {
        this.props.history.push('/dashboard')
    };*/
    return (
      <div>
        <h3 >404ssssssssssssssssssssssssssssssssssssssssssssssssss</h3>
       {/* <button type="primary" htmlType="submit"  onClick={onFinish}>
          登录
        </button>*/}

      </div>
    )
  }
}