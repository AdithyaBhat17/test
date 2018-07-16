import React,{ Component } from 'react';
import './App.css';
import { Link } from 'react-router';
import baps from './bapspatil.png';
import flickOff from './flickOff.jpeg';
import SilverScreener from './SilverScreener.jpeg';
import CaptainChef from './CaptainChef.jpeg';
import resume from './resume.pdf';

class AndroidApps extends Component{
    render(){
        return(
            <div className="App">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-lg-3 about">  
                            <div className="about-left">
                                <h5 className="about-h5" id="about-h5">ABOUT ME</h5>
                                <p>
                                    <img src={ baps } alt="bapspatil" align="center" width="45%" height="45%"/>
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
                                        <div className="navbar navact">
                                            <Link to={'/androidapps'} className="linkandroidapp">ANDROID APPS</Link>
                                        </div>
                                        <div className="navbar">
                                            <Link to={'/androidwear'} className="linkandroidwear">ANDROID WEAR</Link>
                                        </div>
                                        <div className="thumbnail">
                                            <img src={SilverScreener} alt="Silver Screener"/>
                                            <h5>SILVER SCREENER</h5>
                                            <h6>SilverScreener is a dark-themed movie discovery app.</h6>
                                            <p>It shows you a list of movies from The Movie Database, a popular movies site. And their details.</p>
                                            <details>
                                                <summary>READ MORE</summary>
                                                <p>You can choose to see:</p>
                                                <ul>
                                                    <li>- Highest-rated movies</li>
                                                    <li>- Most popular movies</li>
                                                    <li>- Upcoming movies</li>
                                                    <li>- Now playing movies</li>
                                                    <li>- Your favorite movies</li>
                                                </ul>
                                                <p>Other features include:</p>
                                                <ul>
                                                    <li>- Add a movie to your Favorites</li>
                                                    <li>- IMDb link takes you right to the IMDb page of the movie</li>
                                                    <li>- See movie genres</li>
                                                    <li>- Offline access to details of movies that you favorite </li>
                                                    <li>- Trailers</li>
                                                    <li>- User reviews</li>
                                                    <li>- See similar movies</li>
                                                </ul>
                                                <a href="https://play.google.com/store/apps/details?id=bapspatil.silverscreener" className="btn btn-outline-primary">DOWNLOAD</a>
                                            </details>
                                            <hr/>
                                        </div>
                                        <div className="thumbnail">
                                            <img src={ flickOff } alt="Flick Off"/>
                                            <h5>FLICK OFF</h5>
                                            <h6>FlickOff is a light-weight movie discovery app.</h6>
                                            <p>It shows you a list of movies from The Movie Database, a popular movies site.</p>
                                            <details>
                                                <summary>READ MORE</summary>
                                                <p>You can choose to see:</p>
                                                <ul>
                                                    <li>- Top-rated movies</li>
                                                    <li>- Most popular movies</li>
                                                    <li>- Upcoming movies</li>
                                                    <li>- Now playing movies</li>
                                                </ul>                                                
                                                <a href="https://play.google.com/store/apps/details?id=bapspatil.flickoff" className="btn btn-outline-primary">DOWNLOAD</a>
                                            </details>
                                            <hr/> 
                                        </div>
                                        <div className="thumbnail">
                                            <img src={ CaptainChef } alt="Captain Chef"/>
                                            <h5>CAPTAIN CHEF</h5>
                                            <h6>CaptainChef is an app that teaches you how to bake a bunch of delicious desserts!</h6>
                                            <p>It shows you a list of movies from The Movie Database, a popular movies site. And their details.</p>
                                            <details>
                                                <summary>READ MORE</summary>
                                                <p>It is fairly simple to use and the recipe instructions are easy to follow.</p>
                                                <p>It shows you a list of ingredients required for the dessert you want to bake.</p>
                                                <p>And a list of steps that are needed to follow in order to bake it. Each recipe step has a video that you can watch to follow along with our expert chef.</p>
                                                <p>When watching a video, just rotate your device to go into full screen mode.</p>
                                                <p>Also add your favorite dessert's ingredients to your homescreen as a widget!</p>
                                                <p>App looks great on tablet devices too!</p>
                                                <p>Learn how to cook:</p>
                                                <ul>
                                                <li>- Cheesecakes</li>
                                                    <li>- Brownies</li>
                                                    <li>- Nutella Pie</li>
                                                    <li>- Yellow Cake</li>
                                                </ul>
                                                <p>Other features include:</p>
                                                <ul>
                                                    <li>- Add a movie to your Favorites</li>
                                                    <li>- IMDb link takes you right to the IMDb page of the movie</li>
                                                    <li>- See movie genres</li>
                                                    <li>- Offline access to details of movies that you favorite </li>
                                                    <li>- Trailers</li>
                                                    <li>- User reviews</li>
                                                    <li>- See similar movies</li>
                                                </ul>
                                                <a href="https://play.google.com/store/apps/details?id=bapspatil.silverscreener" className="btn btn-outline-primary">DOWNLOAD</a>
                                            </details>
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

export default AndroidApps;



