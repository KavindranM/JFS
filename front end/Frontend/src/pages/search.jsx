import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import SideBar from "../components/sidebar";

const Search = () =>{
  return (
   
    <div className="search">
            <div className="searchBar">

           <FaSearch /> < input type="text"  placeholder="Search..." ></input>
            </div>
            <div className="music-panels">
        <a href="">For You!</a>
        <br /><br />
        <Link to="/playlist">
          <img
            src="https://res.cloudinary.com/dloadmcdu/image/upload/v1689215685/music/Kurumugil-From-Sita-Ramam_co83bb.jpg"
            alt="s"
          />
        </Link>
        <Link to="/playlist1">
          <img
            src="https://res.cloudinary.com/dloadmcdu/image/upload/v1689215679/music/Good-Night_gpu6rk.jpg"
            alt="s"
          />
        </Link>
        <Link to="/playlist2">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1689215672/music/b_t83wpf.jpg" />
        </Link>
        <Link to="/playlist3">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1689215683/music/i_we5n2z.jpg" />
        </Link>
        <Link to="/playlist4">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1689216043/music/p_i40res.jpg" />
        </Link>
        <Link to="/playlist5">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1689216037/music/artworks-yspyugkMKTDY-0-t500x500_ysscgg.jpg" />
        </Link>
        <Link to="/playlist6">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1689216165/music/crop_480x480_1687451320_7560380_eodddt.jpg" />
        </Link>
        <br />
        <a href="">Trending Song</a>
        <br /><br />
        <Link to="/music2">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669137921/poster/karnan_apxihj.jpg" />
        </Link>
        <Link to="/music3">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669133145/poster/Don_nndlux.jpg" />
        </Link>
        <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669133165/poster/sangam_xauqqf.jpg" />
        <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669133164/poster/ddlj_quaskb.webp" />
        <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669133162/poster/MV5BOGQ0NzRkMGMtNjViZC00MWZhLWJhOTgtMzQ3ZTI4NDEwZDdlXkEyXkFqcGdeQXVyMjkxNzQ1NDI_._V1__uklb2x.jpg" />
        <Link to="/music7">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669138380/poster/Parasakthi_1_umphja.jpg" />
        </Link>
        <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669133171/poster/thiru_h4qfn4.jpg" />
        <br />
        <a href="">Evergreen Song</a>
        <br/><br />
        <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669133170/poster/mayabazar_e6cdbg.jpg" />
        <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669138090/poster/SHREE420_fywi8h.webp" />
        <Link to="/music9">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669133140/poster/Adimai_Penn_p04vi7.jpg" />
        </Link>
        <Link to="/music">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669138380/poster/Parasakthi_1_umphja.jpg" />
        </Link>
        <Link to="/music">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669133158/poster/server_db2irf.jpg" />
        </Link>
        <Link to="/music2">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669137921/poster/karnan_apxihj.jpg" />
        </Link>
      </div> 
        </div>
        
    )
}
export default Search;