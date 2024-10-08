import React, { useState, useEffect, useRef } from 'react';
import logo from "../../images/logo.png";
import london from "../../images/london.png";
import newyork from "../../images/newyork.png";
import washington from "../../images/washington.png";
import basketball from "../../images/basketball.png";
import library from "../../images/library.png";
import cafeteria from "../../images/cafeteria.png";
import "./Homepagecss.scss";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import StarBorderIcon from '@mui/icons-material/StarBorder';



export default function Homepagecss() {
    const [openMenu, setOpenMenu] = useState(false);
    const menuRef = useRef(200); // Reference to the menu container

    // Function to toggle the menu
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    // Detect click outside the menu to close it
    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         debugger
    //         if (menuRef.current && !menuRef.current.contains(event.target)) {
    //             // If the clicked element is outside the menu, close the menu
    //             setOpenMenu(false);
    //         }
    //     };

    //     // Add event listener to the document to capture all clicks
    //     document.addEventListener("click", handleClickOutside);

    //     // Cleanup the event listener when the component unmounts
    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, [menuRef]);

    return (
        <div ref={menuRef} className='Homepage_component'>
            <section className='header container'>
               
                <nav className='row_direction'>
                    <div className='d-flex align-items-center'>
                        <a href=""><img style={{ height: "44px" }} src={logo} alt="logo" /></a>
                    </div>

                    {/* Menu icon for small screens */}
                    <span className='menu' onClick={toggleMenu}>
                        <MenuIcon />
                    </span>

                    {/* Navigation links//ref={menuRef} */}
                    <div  className={`row_direction links ${openMenu ? 'active' : ''}`}>
                        <span className='close' onClick={toggleMenu}>
                            <CloseIcon />
                        </span>
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Contact Us</a>
                        <a href="">Blog</a>
                        <a href="">Contact</a>
                    </div>
                </nav>

                <div className="row_header_section column_direction mt-5">
                    <h1 className='reading_text'>
                        Visit this institute to gain knowledge through practical experience
                    </h1>
                    <p className='reading_text text-center'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, debitis minus officia blanditiis a vitae corrupti eveniet vel aliquam architecto, officiis quas magnam? Fuga hic exercitationem totam illo sapiente necessitatibus!
                    </p>
                    <button onClick={()=>{
                        console.log(menuRef)
                    }}className='button_component'>Click here to know more</button>
                </div>
            </section>
            <div className="row_course_section column_direction mt-3 mt-md-4 mt-lg-5 flex-wrap ">
              
                <h2>Course we will offer</h2>
                <p>this different course we will provide with very less cost</p>
                <div className="col_section row_direction">
                    <div className="col_course_section card p-2 ">
                    <h5>SSC</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dicta.</p>
                </div>
                <div className="col_course_section card p-2">
                    <h5>Degree</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dicta.</p>
                </div>
                <div className="col_course_section card p-2">
                    <h5>Post Gradutation</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dicta.</p>
                </div>
                </div>
            </div>
            <div className="row_campus_section row d-flex px-4  ps-lg-5 mt-4 mt-lg-5 justify-content-center">

                <h3 className='text-sm-center'>our campus list</h3>
                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum pariatur labore autem mollitia placeat fuga suscipit repellendus nostrum consequatur? Tempore.</p>
                <div className="campus_col_section d-flex flex-column col-sm-6 col-md-4 col-lg-2">
                    <img src={london} className="w-100" alt="london png" />
                    <h4>London</h4>
                </div>
                <div className="campus_col_section d-flex flex-column col-sm-6 col-md-4 col-lg-2">
                    <img src={newyork} className="w-100"  alt="london png" />
                    <h4>newyork</h4>
                </div>
                <div className="campus_col_section d-flex flex-column col-sm-6 col-md-4 col-lg-2">
                    <img src={washington} className="w-100"  alt="london png" />
                    <h4>washington</h4>
                </div>
            </div>
            <div className="faculty_section d-flex flex-column align-item-center justify-content-center px-3 px-md-5 mt-3 mt-md-5 ">
                <h2 className='text-center'>our Facilities</h2>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, inventore.</p>
                <div className="row g-md-3 g-2 g-lg-4 justify-content-center">
                    <div className=" col-md-3 col-sm-4 clo-12 facilities_images ">
                        <img className="w-100 rounded-3 border" src={basketball} />
                        <p className='text-center'>basketball</p>
                    </div>
                    <div className=" col-md-3 col-sm-4 clo-12 facilities_images">
                        <img className="w-100 rounded-3 border" src={library} alt="" />
                        <p className='text-center'>library</p>
                    </div>
                    <div className=" col-md-3 col-sm-4 clo-12 facilities_images ">
                        <img className="w-100 rounded-3 border" src={cafeteria} alt="" />
                        <p className='text-center'>cafeteria</p>
                    </div>
                </div>
            </div>
            {/* for closing and openinf convinent comment with sectrion testimonal section */}
            <div className="testimonal_section d-flex flex-column align-item-center justify-content-center px-3 px-md-5 mt-3 mt-md-5 ">
                <h2 className='text-center'>our students response</h2>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, inventore.</p>
                <div className="row g-md-3 g-2 g-lg-4 justify-content-center ">
                    <div className="gap-3 col-md-3 col-sm-4 clo-12 facilities_images d-flex m-0 ">
                        <img className="rounded-3 border" src={basketball} />
                        <div>
                            <p className='text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, consequatur.</p>
                            <strong>jegini</strong>
                            <span><StarBorderIcon />
                                <StarBorderIcon />
                                <StarBorderIcon />
                                <StarBorderIcon />
                                <StarBorderIcon />

                            </span>
                        </div>
                    </div>
                    <div className=" gap-3 col-md-3 col-sm-4 clo-12 facilities_images d-flex m-0">
                        <img className=" rounded-3 border" src={library} alt="" />
                          <div>
                        <p className='text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, consequatur.</p>
                        <strong>jegini</strong>
                            <span><StarBorderIcon />
                                <StarBorderIcon />
                                <StarBorderIcon />
                                <StarBorderIcon />
                                <StarBorderIcon />

                            </span>
                        </div>
                    </div>
                    <div className=" gap-3 col-md-3 col-sm-4 clo-12 facilities_images d-flex m-0">
                        <img className="rounded-3 border" src={cafeteria} alt="" />
                        <div>
                            <p className='text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, consequatur.</p>
                            <strong>jegini</strong>
                            <span><StarBorderIcon/>
                                <StarBorderIcon />
                                <StarBorderIcon />
                                <StarBorderIcon />
                                <StarBorderIcon />
                            
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* contactus section */}
            <div className="contactus_section px-3 px-md-5 d-flex justify-content-center mt-3">
                <h2>enrole our online course from any where from the word</h2>
                <a href="#href">
                    <button>click here to communicate with us</button>
                </a>
                
            </div>
            <div className='container'>

                <div className='container'>
                    <span>jegini lokesh</span>
                </div>
            </div>
        </div>
    );
}

// row vs col with break points (topic -1)

//break point
//col-lg-2
//col-2 (1-12)

//text align topic-2
//margin topic -3
//padding topic 4
//bg color with opactity
//position aboutelu layer seperation 
// zindex


// div {
//     margin: 150px;
//     width: 200px;
//     height: 100px;
//     background - color: yellow;
//     border: 1px solid black;
//     transform: scale(1, 1);
//     transition: transform 3s ease; /* Fixed typo here */
// }

// div:hover {
//     transform: scale(2, 3);
// }