import React, { Component } from 'react'

// Images

import PortraitImage from '../img/portrait.jpg'
import CityImage from '../img/city.jpg'
import NatureImage from '../img/nature.jpg'
import StreetImage from '../img/street.jpg'
import StarsImage from '../img/stars.jpg'

class Home extends Component {

  render(){

    return (
      <div>

      <section className="container section scrollspy" id="photos">
        <div className="row">
          <div className="col s12 l4">
              <img src={PortraitImage} alt="" className="responsive-img materialboxed"></img>
          </div>
          <div className="col s12 l6 offset-l1">
            <h2 className="indigo-text text-darken-4">Portraits</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l4 offset-l1 push-l7">
              <img src={CityImage} alt="" className="responsive-img materialboxed"></img>
          </div>
          <div className="col s12 l6 offset-l1 pull-l5 right-align">
            <h2 className="indigo-text text-darken-4">Cityscapes</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l4">
              <img src={NatureImage} alt="" className="responsive-img materialboxed"></img>
          </div>
          <div className="col s12 l6 offset-l1">
            <h2 className="indigo-text text-darken-4">Nature</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
          </div>
        </div>
      </section>


      <div className="parallax-container">
        <div className="parallax">
          <img src={StreetImage} alt="" className="responsive-img"></img>
        </div>
      </div>


      <section className="section container scrollspy" id="services">
        <div className="row">
          <div className="col s12 l4">
            <h2 className="indigo-text text-darken-4">What I do..</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
            <p>Mauris dolor augue, vulputate in pharetra ac, facilisis nec libero. Fusce condimentum gravida urna, vitae scelerisque erat ornare nec.</p>
          </div>
          <div className="col s12 l6 offset-l2">

            <ul className="tabs">
              <li className="tab col s6">
                <a href="#photography" className="active indigo-text text-darken-4">Photography</a>
              </li>
              <li className="tab col s6">
                <a href="#editing" className="indigo-text text-darken-4">Editing</a>
              </li>
            </ul>
            <div id="photography" className="col s12">
                <p className="flow-text indigo-text text-darken-4">Photography</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
                <p>Mauris dolor augue, vulputate in pharetra ac, facilisis nec libero. Fusce condimentum gravida urna, vitae scelerisque erat ornare nec.</p>
            </div>
            <div id="editing" className="col s12">
                <p className="flow-text indigo-text text-darken-4">Editing</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
                <p>Mauris dolor augue, vulputate in pharetra ac, facilisis nec libero. Fusce condimentum gravida urna, vitae scelerisque erat ornare nec.</p>
            </div>
            </div>
          </div>
      </section>


      <div className="parallax-container">
        <div className="parallax">
          <img src={StarsImage} alt="" className="responsive-img"></img>
        </div>
      </div>




      </div>
    )
  }
}

export default Home