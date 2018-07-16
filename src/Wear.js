import React,{ Component } from 'react';
import './App.css';
import { Link } from 'react-router';
// import Apps from './Apps';
// import article from './article';
import baps from './bapspatil.png';
import hindsight from './hindsight.jpg';
import xoxo from './xoxo.jpg';
import eclectic from './eclectic.jpg';
import resume from './resume.pdf';



class AndroidWear extends Component{
    render(){
        return(
            <div className="App">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-lg-3 about">  
                            <div className="about-left">
                                <h5 className="about-h5" id="about-h5">ABOUT ME</h5>
                                <p>
                                    <img src={baps} alt="bapspatil" align="center" width="45%" height="45%"/>
                                </p>
                                <h3 className="logo">Bapusaheb Patil</h3>
                                <p className="about-left-p">I make apps, watchfaces and memes. Not necessarily in that order. Also, I'm a Google-certified Android Developer.</p>
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
                                <div className="navbtn">
                                    <Link to={'/media'} className="btn btn-outline-dark">MEDIA</Link>
                                    <a href={resume} className="btn btn-outline-dark">RESUME</a>
                                    <Link to={'/androidapps'} className="btn btn-outline-dark activated">WORK</Link>
                                </div>
                                <div className="animated fadeOutDown infinite down">
                                    <i className="fa fa-angle-double-down"></i>
                                </div>
                            </div>    
                        </div>
                        <div className="col-sm-12 col-lg-9 about-right">
                            <div className="about-right-inside">
                                <div className="container fixed">
                                    <div className="navbarcontainer">
                                        <div className="navbar">
                                            <Link to={'/androidapps'} className="linkandroidapp">ANDROID APPS</Link>
                                        </div>
                                        <div className="navbar navact">
                                            <Link to={'/androidwear'} className="linkandroidwear">ANDROID WEAR</Link>
                                        </div>
                                        <br/>
                                        <div className="thumbnail">
                                            <img className="wear-img" src={eclectic} alt="eclectic collection"/>
                                            <h5 className="wear-h5">THE ECLECTIC COLLECTION</h5>
                                            <p className="wear-p">My first shot at making my own watchfaces for my Misfit Vapor, based on Android Wear.</p>
                                            <a className="btn btn-outline-secondary" href="https://www.getwatchmaker.com/user/rkdAXHkNM">view here</a>
                                        </div>
                                        <hr/>  
                                        <div className="thumbnail">
                                            <img className="wear-img" src={xoxo} alt="xoxo collection"/>
                                            <h5 className="wear-h5">THE XOXO COLLECTION</h5>
                                            <p className="wear-p">My 2nd shot at making watchfaces for Android Wear. Bundle of 5 watchfaces.</p>
                                            <a className="btn btn-outline-secondary" href="https://www.getwatchmaker.com/user/rkdAXHkNM">view here</a>
                                        </div>
                                        <hr/>
                                        <div className="thumbnail">
                                            <img className="wear-img" src={hindsight} alt="Hindsight collection"/>
                                            <h5 className="wear-h5">THE HINDSIGHT COLLECTION</h5>
                                            <p className="wear-p">My 3rd shot at making watchfaces for Android Wear. Collection of 6 watchfaces.</p>
                                            <a className="btn btn-outline-secondary" href="https://www.getwatchmaker.com/user/rkdAXHkNM">view here</a>
                                        </div>   
                                        <br/>
                                    </div>                                  
                                </div>
                                <div className="footer">
                                    <p>Website designed &amp; developed by <a href="https://adithyabhat.com/">Adithya NR</a> | © 2018,Apache License 2.0</p>
                                </div>
                            </div>                
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AndroidWear;

