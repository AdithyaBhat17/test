import React, { Component } from 'react';
import './App.css';
import './circle.css';
import { Link } from 'react-router';
import baps from './bapspatil.png';
import resume from './resume.pdf';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-lg-3 about">  
              <div className="about-left">
                <h5 className="about-h5 animated fadeIn" id="about-h5">ABOUT ME</h5>
                <p className="about-image animated bounceInDown">
                  <img src={baps} alt="bapspatil" align="center" width="45%" height="45%"/>
                </p>
                <h3 className="logo animated fadeInRight">Bapusaheb Patil</h3>
                <p className="about-left-p animated fadeInLeft">I make apps, watchfaces and memes. Not necessarily in that order. Also, I'm a Google-certified Android Developer.</p>
                <div>
                  <a href="https://bit.do/bapswat">
                    <i className="far fa-clock animated pulse infinite"></i>
                  </a>&nbsp;
                  <a href="https://www.github.com/bapspatil">
                    <i className="fab fa-github animated pulse infinite"></i>
                  </a>&nbsp;
                  <a href="https://www.linkedin.com/in/bapspatil/">
                    <i className="fab fa-linkedin animated pulse infinite"></i>
                  </a>&nbsp;
                  <a href="https://play.google.com/store/apps/dev?id=7368032842071222295">
                    <i className="fab fa-google-play animated pulse infinite"></i>
                  </a>&nbsp;
                  <a href="https://medium.com/@bapspatil">
                    <i className="fab fa-medium animated pulse infinite"></i>
                  </a>&nbsp;
                  <a href="https://www.twitter.com/baps_patil">
                    <i className="fab fa-twitter animated pulse infinite"></i>
                  </a>&nbsp;
                  <a href="https://www.pinterest.com/bapspatil/android/">
                    <i className="fab fa-pinterest animated pulse infinite"></i>
                  </a>&nbsp;
                </div>
                <div className="navbtn animated fadeInUp">
                  <Link to={'/media'} className="btn btn-outline-dark">MEDIA</Link>
                  <a href={resume} className="btn btn-outline-dark">RESUME</a>
                  <Link to={'/androidapps'} className="btn btn-outline-dark">WORK</Link>
                </div>
                <div className="animated fadeOutDown infinite down">
                  <i className="fa fa-angle-double-down"></i>
                </div>
              </div>    
            </div>
            <div className="col-sm-12 col-lg-9 about-right">
              <div className="about-right-inside">
                <h3>MOBILE APP DEVELOPER, UX DESIGNER</h3>
                  <p>Hey, there!</p>
                  <p>I'm 20 years old and I build stuff.<br/>I love using my Android and UX design skills to build products for businesses and solve real-world problems.</p>
                  <p>I'm a
                  <a href="https://www.credential.net/jj0o9bsc" className="bold"> Google-certified Android Developer
                  </a>, an IDF-certified UX Designer and a
                  <a href="http://bit.do/bapsand" className="bold"> Udacity Android Developer Nanodegree Graduate
                  </a>.</p>
                  <p>I also love designing watchfaces for Android Wear.<br/>This website is my personal/professional website and will house all my work.</p>
                  
                  <h5>SKILLS</h5>
                  <br/>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-3  col-sm-6 col-6 skills">
                        <div className="inner-content">
                          <div className="c100 p90 center">
                            <span>9/10</span>
                            <div className="slice">
                              <div className="bar"></div>
                              <div className="fill"></div>
                            </div>
                          </div>
                          <p>Android</p>
                        </div>
                      </div>
                      <div className="col-lg-3  col-sm-6 col-6">
                        <div className="inner-content">
                          <div className="c100 p100 center">
                            <span>10/10</span>
                            <div className="slice">
                              <div className="bar"></div>
                              <div className="fill"></div>
                            </div>
                          </div>
                          <p>JAVA</p>
                        </div>
                      </div>
                      <div className="col-lg-3  col-sm-6 col-6">
                        <div className="inner-content">
                          <div className="c100 p90 center">
                            <span>9/10</span>
                            <div className="slice">
                              <div className="bar"></div>
                              <div className="fill"></div>
                            </div>
                          </div>
                          <p>Kotlin</p>
                        </div>
                      </div>
                      <div className="col-lg-3  col-sm-6 col-6">
                        <div className="inner-content">
                          <div className="c100 p80 center">
                            <span>8/10</span>
                            <div className="slice">
                              <div className="bar"></div>
                              <div className="fill"></div>
                            </div>
                          </div>
                          <p>UX Design</p>
                        </div>
                      </div>
                      <div className="col-lg-3  col-sm-6 col-6">
                        <div className="inner-content">
                          <div className="c100 p70 center">
                            <span>7/10</span>
                            <div className="slice">
                              <div className="bar"></div>
                              <div className="fill"></div>
                            </div>
                          </div>
                          <p>Product Design</p>
                        </div>
                      </div>
                      <div className="col-lg-3  col-sm-6 col-6">
                        <div className="inner-content">
                          <div className="c100 p60 center">
                            <span>6/10</span>
                            <div className="slice">
                              <div className="bar"></div>
                              <div className="fill"></div>
                            </div>
                          </div>
                          <p>Flutter</p>
                        </div>
                      </div>
                      <div className="col-lg-3  col-sm-6 col-6">
                        <div className="inner-content">
                          <div className="c100 p70 center">
                            <span>7/10</span>
                            <div className="slice">
                              <div className="bar"></div>
                              <div className="fill"></div>
                            </div>
                          </div>
                          <p>Information Architecture</p>
                        </div>
                      </div>
                      <div className="col-lg-3  col-sm-6 col-6">
                        <div className="inner-content">
                          <div className="c100 p90 center">
                            <span>9/10</span>
                            <div className="slice">
                              <div className="bar"></div>
                              <div className="fill"></div>
                            </div>
                          </div>
                          <p>Android Wear</p>
                        </div>
                      </div>
                  </div>
                </div>                
              </div> 
              <br/>
              <div className="footer">
                <p>Website designed &amp; developed by <a href="https://adithyabhat.com/">Adithya NR</a> | © 2018,Apache License 2.0</p>
              </div>               
            </div>            
          </div>
        </div>
      </div>
    );
  }
}

export default App;



