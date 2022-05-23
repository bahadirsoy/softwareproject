//import styles
import './navbar.styles.css'

//import fontawesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Navbar(){
    return(
        <nav>
            <div className="topNav">
                <span className="brandName">
                    <a href="MainPage.html">gezio</a>
                </span>
        
                <span className="searchBar">
                    <input type="text" placeholder="Search.." name="search"/>
                    <button type="submit">
                        <FontAwesomeIcon icon={faSearch} ></FontAwesomeIcon>
                    </button>
                </span>
        
                <span className="help">
                    <a href="https://www.youtube.com/watch?v=wXd_BFZvaQc&ab_channel=DilaraAKSOY" className="fas fa-question-circle"></a>
                </span>
        
                <span className="country">
                    <select>
                        <option value="Antalya">Antalya</option>
                        <option value="Ankara">Ankara</option>
                        <option value="İstanbul">İstanbul</option>
                        <option value="İzmir">İzmir</option>
                    </select>
                </span>
        
                <span className="user">
                    <a href="LoginPage.html">
                        <i className="fas fa-user"> </i>
                        <p>Login</p>
                    </a>
                </span>
            </div>
        
            <div className="bottomNav">
                <span id="Music" className="dropdown">
                    <button className="dropbtn">Music</button>
                    <div className="dropdown-content">
                        <a href="#">Concert</a>
                        <a href="#">Live Music</a>
                        <a href="#">Opera</a>
                    </div>
                </span>
        
                <span id="Art" className="dropdown">
                    <button className="dropbtn">Art</button>
                    <div className="dropdown-content">
                        <a href="CategoryMovies.html">Movies</a>
                        <a href="#">Museums</a>
                        <a href="#">Theatre</a>
                        <a href="#">Dance</a>
                    </div>
                </span>
        
                <span id="Entertainment" className="dropdown">
                    <button className="dropbtn">Entertainment</button>
                    <div className="dropdown-content">
                        <a href="#">Video Games</a>
                        <a href="#">Stand-Up</a>
                        <a href="#">Disco</a>
                    </div>
                </span>
        
                <span id="Technology" className="dropdown">
                    <button className="dropbtn">Technology</button>
                    <div className="dropdown-content">
                        <a href="#">E-Sport</a>
                        <a href="#">Software</a>
                        <a href="#">Technology Fair</a>
                    </div>
                </span>
        
                <span id="Others" className="dropdown">
                    <button id="btnOthers" className="dropbtn">Others</button>
                    <div className="dropdown-content">
                        <a href="#">Festival</a>
                        <a href="#">Sport</a>
                        <a href="#">Cooking</a>
                        <a href="#">History</a>
                    </div>
                </span>
            </div>
        </nav>
    )
}

export default Navbar;