/**
 * Created by f on 2022/8/12.
 */
import React, {Component} from 'react';
import arrowDownImg from "../../../assets/img/arrow-down.svg";
import { Link } from 'react-router-dom';
export default class ChildNavs  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      navName:''
    };
  }

  componentDidMount(){
    //可以查看参数
    // console.log('props',this.props)
  }

  foldDetails(nav, item = null) {
    if (this.state.navName === nav.title) this.setState({
      navName: ''
    });
    else if(nav.childs && nav.childs.length > 0) this.setState({
      navName: nav.title
    });
    this.props.emitClick(nav,item);
   /* 子组件通过props获取父组件传递过来的值*/
  }


  render() {

    return (
      <div>
      {this.state.data.map((item,index) => {
        let arrowDown;
        if (item.childs && item.childs.length > 0) {
          arrowDown = (
            <img src={arrowDownImg}
                 className={`${this.state.navName === item.title ? "transform-180" : ""}`} alt=" "/>
          )
        }
        let childsItems;
        if (item.childs && item.childs.length > 0) {
          let childsItemHeight = {
            height: `${45 * item.childs.length}px`,
          };
          childsItems = (
            <div className={`${this.state.isFold ? "hover-details" : "childs-box"} ${(this.state.navName !== item.title && !this.state.isFold) ? "show-childs" : ""}`}
              style={childsItemHeight}>
              <div className={`${this.state.isFold ? "hover-details-box" : ""}`}>
                {
                  item.childs.map((nav, index) => {
                    return (
                      <div  key={index} className={`${this.state.isFold ? "hover-details-item" : "child-item"}`} onClick={this.foldDetails.bind(this, nav, item)}>
                        <div className="line"></div>
                        <Link  className="text but-t1" to={nav.path}>{nav.title}</Link>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        }
        return <div className="item_connect" key={index}>

          <div className={`item_box ${this.state.navName === item.title ? 'active' : ''}`}
               onClick={this.foldDetails.bind(this, item)}>
            <div className="img-box">
              <img src={item.icon} alt=""/>
            </div>
            <div className="pro-ab">
              <div className="text-box">

                <div className="unis-a">
                  <div className="text but-t1">{item.title}</div>

                  {/*<Link  className="text but-t1" to={item.path}>{item.title}</Link>*/}

                </div>
                {arrowDown}
              </div>
            </div>
          </div>
          {childsItems}
        </div>
      })}
      </div>
    );
  }
}
