import React , { Component } from 'react';
import './App.css';
import { Link } from 'react-router';
import anko from './anko.jpg';
import career from './careeradvice.jpg';
import bapspatil from './bapspatil.png';
import resume from './resume.pdf';

class Media extends Component{
    render(){
        return(
            <div className="App">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-lg-3 about">  
                            <div className="about-left">
                                <h5 className="about-h5" id="about-h5">ABOUT ME</h5>
                                <p>
                                    <img src={bapspatil} alt="bapspatil" align="center" width="45%" height="45%"/>
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
                                    <Link to={'/media'} className="btn btn-outline-dark activated">MEDIA</Link>
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
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="thumbnail art">
                                                <img src={anko} alt="BlrKotlin-talk" className="article-img"/>
                                                <h6 className="article-h">Anko &amp; Karamba in Kotlin by Bapusaheb Patil.</h6>
                                                <a className="btn btn-outline-secondary" href="https://www.slideshare.net/BapusahebPatil/anko-karamba-in-kotlin-by-bapusaheb-patil">view here</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="thumbnail art">
                                                <img src={career} alt="career advice" className="article-img"/>
                                                <h6 className="article-h">Career Advice from a twenty year old – A roadmap to App development.</h6>
                                                <a className="btn btn-outline-secondary" href="https://appachhi.com/blog/career-advice-twenty-year-old-roadmap-app-development/">view here</a>
                                            </div>
                                        </div>
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

export default Media;