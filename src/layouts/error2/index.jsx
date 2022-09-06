import React, {Component} from 'react';

export default class  Error extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div className="d-flex flex-column">
          <div className="col-12 mt-4 pt-4 pb-4 d-flex "
               style={{color:'white',paddingLeft:'114px',fontWeight:'500',fontSize:'18px',background:'rgb(68, 69, 69)',lineHeight:'24px',}}>
            UNIS uses an 8pt grid with a 12 column grid system: 12 columns / 112px width / 24px gutter width<br/>
            Every size, padding, and space between objects or modules is a multiple of 8px within 12 columns.<br/> <br/>
            This is to keep horizontal and vertical rhythm.
          </div>
          <div className="col-12 mt-4 p-0 d-flex " style={{color: 'white'}}>
            <div className="col-12 p-4 cole" style={{background: 'rgb(68, 69, 69)'}}>col-12</div>
          </div>
          <div className="col-12 mt-4 p-0  d-flex " style={{color: 'white'}}>
            <div className="col-6 p-4 cole" style={{background: 'rgb(119, 120, 121)'}}>col-6</div>
            <div className="col-6 p-4 cole" style={{background: 'rgb(119, 120, 121)'}}>col-6</div>
          </div>
          <div className="col-12 mt-4 p-0  d-flex " style={{color: 'white'}}>
            <div className="col-4 p-4 cole" style={{background: 'rgb(109, 157, 168)'}}>col-4</div>
            <div className="col-4 p-4 cole" style={{background: 'rgb(109, 157, 168)'}}>col-4</div>
            <div className="col-4 p-4 cole" style={{background: 'rgb(109, 157, 168)'}}>col-4</div>
          </div>
          <div className="col-12 mt-4 p-0  d-flex ">
            <div className="col-3 p-4 cole" style={{background: 'rgb(82, 171, 152)'}}>col-3</div>
            <div className="col-3 p-4 cole" style={{background: 'rgb(82, 171, 152)'}}>col-3</div>
            <div className="col-3 p-4 cole" style={{background: 'rgb(82, 171, 152)'}}>col-3</div>
            <div className="col-3 p-4 cole" style={{background: 'rgb(82, 171, 152)'}}>col-3</div>
          </div>
          <div className="col-12 mt-4 p-0  d-flex ">
            <div className="col-2 p-4 cole" style={{background: 'rgb(200, 216, 228)'}}>col-2</div>
            <div className="col-2 p-4 cole" style={{background: 'rgb(200, 216, 228)'}}>col-2</div>
            <div className="col-2 p-4 cole" style={{background: 'rgb(200, 216, 228)'}}>col-2</div>
            <div className="col-2 p-4 cole" style={{background: 'rgb(200, 216, 228)'}}>col-2</div>
            <div className="col-2 p-4 cole" style={{background: 'rgb(200, 216, 228)'}}>col-2</div>
            <div className="col-2 p-4 cole" style={{background: 'rgb(200, 216, 228)'}}>col-2</div>
          </div>
          <div className="col-12 mt-4 p-0  d-flex ">
            <div className="col-1 p-4 cole" style={{background: 'rgb(229, 38, 40)'}}>col-1</div>
            <div className="col-1 p-4 cole" style={{background: 'rgb(229, 38, 40)'}}>col-1</div>
            <div className="col-1 p-4 cole" style={{background: 'rgb(229, 38, 40)'}}>col-1</div>
            <div className="col-1 p-4 cole" style={{background: 'rgb(229, 38, 40)'}}>col-1</div>
            <div className="col-1 p-4 cole" style={{background: 'rgb(229, 38, 40)'}}>col-1</div>
            <div className="col-1 p-4 cole" style={{background: 'rgb(229, 38, 40)'}}>col-1</div>
            <div className="col-1 p-4 cole" style={{background: 'rgb(229, 38, 40)'}}>col-1</div>
            <div className="col-1 p-4 cole" style={{background: 'rgb(229, 38, 40)'}}>col-1</div>
            <div className="col-1 p-4 cole" style={{background: 'rgb(229, 38, 40)'}}>col-1</div>
            <div className="col-1 p-4 cole" style={{background: 'rgb(229, 38, 40)'}}>col-1</div>
            <div className="col-1 p-4 cole" style={{background: 'rgb(229, 38, 40)'}}>col-1</div>
            <div className="col-1 p-4 cole" style={{background: 'rgb(229, 38, 40)'}}>col-1</div>
          </div>
          <div className="col-12 mt-4 p-0  d-flex " style={{color: 'white', paddingLeft: '12px !important'}}>
            <div className="cole p-4 "  style={{background: 'rgb(59, 205, 153)', width: '98px'}}> 98px</div>
          </div>
        </div>
  )
  }
  }