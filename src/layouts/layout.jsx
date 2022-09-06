/**
 * Created by f on 2022/8/22.
 */
import React, { Component } from "react";
import { Route, Redirect, Switch } from 'react-router-dom';
import Navigation from "./navigation/navigation";
import TopNavigation from "./top-navigation/topNavigation";

import { map, flattenDeep } from 'lodash';
export default class  App extends Component{
  constructor(props){
    super(props);
    this.state = {
      route: props.route,
      navLeft: '15rem'
    };
  }

  togoaside(isSmall) {
    this.setState({
      navLeft: isSmall ? '15rem' : '4.375rem',
    });
  }

  goRouter(path) {
     this.props.history.push({pathname:path});
  }

  mapPathComponent(childs){
    let mapChildsroute = [];
    map(childs, (child) => {
      if(child.length>0) mapChildsroute = [mapChildsroute,...this.mapPathComponent(child)]  ;
      else if(child.childs ) mapChildsroute = [mapChildsroute,...this.mapPathComponent(child.childs)] ;
      else if (child.path && child.component) mapChildsroute.push( {
        path: child.path,
        component: child.component
      });
    });
    return mapChildsroute;
  }

  RouteArr(route) {
    return route.map(route => {
      return (<Route path={route.path} component={route.component} exact={route.exact} key={route.path} />)
    })
  }

  render() {
    const route = this.state.route;
    window.router = this.props.history;
    const childrenRoute =flattenDeep(this.mapPathComponent(map(route.children, 'childs')));
    return (
      <div style={{width:'100%', height:'100%'}}>
       <TopNavigation left={this.state.navLeft}/>
        <Navigation navLink={route.children} navClick={this.togoaside.bind(this)}  emitRouter={this.goRouter.bind(this)} />
        <div  style={{position: 'absolute',left:this.state.navLeft, top:"60px",right:'0', bottom:'0', transition: 'left 0.5s',height:'calc(100% - 60px)', background:'#e8e3ef',padding:'25px 60px'}}>
          <Switch>
            <Redirect exact from="/home" to="/home/dashboard" />
            {this.RouteArr(childrenRoute)}
            <Redirect to="/TMS/404" />
          </Switch>
          {/*{renderRoutes(childrenRoute)}*/}
        </div>
      </div>
    )
  }
}
