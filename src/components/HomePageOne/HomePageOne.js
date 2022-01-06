import React from 'react';
import './HomePageOne.css';
import logo from '../../images/logo.png'
import academic_img from '../../images/academic_image.png'
import box_icon from '../../images/box-icon.png'
import sales1 from '../../images/sales1.png'
import sales2 from '../../images/sales2.png'
import sales3 from '../../images/sales3.png'
import sales4 from '../../images/sales4.png'
import sales5 from '../../images/sales5.png'
import sales6 from '../../images/sales6.png'
import calibra from '../../images/calibra.png'
import calibra1 from '../../images/calibra1.png'
import l1 from '../../images/l1.png'
import l2 from '../../images/l2.png'
import l3 from '../../images/l3.png'
import l4 from '../../images/l4.png'
import l5 from '../../images/l5.png'



const tableData = [
    {
        td1: `ECONOMIC ENVIRONMENT & PUBLIC AFFAIRS`,
        td2: `STRATEGY`
    },
    {
        td1: `ENTREPRENEURSHIP`,
        td2: `DIGITAL TECHNOLOGIES & DATA SCIENCE`
    },
    {
        td1: `MARKETING & COMMUNICATIONS`,
        td2: `FINANCE`
    },
    {
        td1: `HUMAN RESOURCES`,
        td2: `FINANCIAL ACCOUNTING`
    },
    {
        td1: `OPERATIONS & SUPPLY CHAIN MANAGEMENT`,
        td2: `COST ACCOUNTING & MANAGEMENT CONTROL`
    },
    {
        td1: `INNOVATION`,
        td2: `ORGANISATIONAL BEHAVIOUR`
    },
    {
        td1: `NEGOTIATION`,
        td2: `ARCHITECTURE`
    },
    {
        td1: `LAW`,
        td2: `OTHERS`
    },
]

const salesData = [
    {
        sales_img: sales1,
        top_title: 'BASICS OF SALES MANAGEMENT',
        short_title: 'KS020188-U-ENG-HTM',
        box_bottom_title: 'Academic Area',
        box_bottom_title_span: 'Marketing & Communication',
        box_icon: box_icon,
        format: 'Multimedia & Interactive',
        language: 'English',
        hover_content: `His interactive tutorial introduces the
        student to the world of business
        management. The tutorial is divided into 4
        sections: trade, trading activity, the complex
        sale and the personal sale process, where
        the student is introduced to the basic
        concepts of the commercial world up to how
        to put the seller s activity into`

    },
    {
        sales_img: sales2,
        top_title: 'BASICS OF SALES MANAGEMENT',
        short_title: 'KS020188-U-ENG-HTM',
        box_bottom_title: 'Academic Area',
        box_bottom_title_span: 'Marketing & Communication',
        box_icon: box_icon,
        format: 'Multimedia & Interactive',
        language: 'English',
        hover_content: `His interactive tutorial introduces the
        student to the world of business
        management. The tutorial is divided into 4
        sections: trade, trading activity, the complex
        sale and the personal sale process, where
        the student is introduced to the basic
        concepts of the commercial world up to how
        to put the seller s activity into`

    },
    {
        sales_img: sales3,
        top_title: 'BASICS OF SALES MANAGEMENT',
        short_title: 'KS020188-U-ENG-HTM',
        box_bottom_title: 'Academic Area',
        box_bottom_title_span: 'Marketing & Communication',
        box_icon: box_icon,
        format: 'Multimedia & Interactive',
        language: 'English',
        hover_content: `His interactive tutorial introduces the
        student to the world of business
        management. The tutorial is divided into 4
        sections: trade, trading activity, the complex
        sale and the personal sale process, where
        the student is introduced to the basic
        concepts of the commercial world up to how
        to put the seller s activity into`

    },
    {
        sales_img: sales4,
        top_title: 'BASICS OF SALES MANAGEMENT',
        short_title: 'KS020188-U-ENG-HTM',
        box_bottom_title: 'Academic Area',
        box_bottom_title_span: 'Marketing & Communication',
        box_icon: box_icon,
        format: 'Multimedia & Interactive',
        language: 'English',
        hover_content: `His interactive tutorial introduces the
        student to the world of business
        management. The tutorial is divided into 4
        sections: trade, trading activity, the complex
        sale and the personal sale process, where
        the student is introduced to the basic
        concepts of the commercial world up to how
        to put the seller s activity into`

    },
    {
        sales_img: sales5,
        top_title: 'BASICS OF SALES MANAGEMENT',
        short_title: 'KS020188-U-ENG-HTM',
        box_bottom_title: 'Academic Area',
        box_bottom_title_span: 'Marketing & Communication',
        box_icon: box_icon,
        format: 'Multimedia & Interactive',
        language: 'English',
        hover_content: `His interactive tutorial introduces the
        student to the world of business
        management. The tutorial is divided into 4
        sections: trade, trading activity, the complex
        sale and the personal sale process, where
        the student is introduced to the basic
        concepts of the commercial world up to how
        to put the seller s activity into`

    },
    {
        sales_img: sales6,
        top_title: 'BASICS OF SALES MANAGEMENT',
        short_title: 'KS020188-U-ENG-HTM',
        box_bottom_title: 'Academic Area',
        box_bottom_title_span: 'Marketing & Communication',
        box_icon: box_icon,
        format: 'Multimedia & Interactive',
        language: 'English',
        hover_content: `His interactive tutorial introduces the
        student to the world of business
        management. The tutorial is divided into 4
        sections: trade, trading activity, the complex
        sale and the personal sale process, where
        the student is introduced to the basic
        concepts of the commercial world up to how
        to put the seller s activity into`

    },
]

const HomePageOne = () => {
    return (

        <>
            <header className="header fix">
                <a className="logo" href="#"><img src={logo} className="img-fluid" alt="" /></a>
                <input type="checkbox" id="menu-btn" className="menu-btn" />
                <label className="menu-icon" for="menu-btn">
                    <span className="nav-icon"></span>
                </label>
                <ul className="menu">
                    <li><a href="#" className="cool_link active">Home</a></li>
                    <li><a href="#" className="cool_link active">About</a></li>
                    <li><a href="#" className="cool_link active">Resource</a></li>
                    <li><a href="#" className="cool_link active">Contact Us</a></li>

                    <li><button onclick="location.href='#order-now';" className="btn_one">Login</button></li>
                    <li><button onclick="location.href='#order-now';" className="btn_two">Registration</button></li>
                </ul>
            </header>

            <main>
                <section className="academic-areas">
                    <div className="wrapper fix">
                        <div className="academic-box">
                            <div className="academic-left">
                                <img src={academic_img} alt="" srcset="" />
                            </div>
                            <div className="academic-right">
                                <h1>ACADEMIC AREAS</h1>
                                <div className="table-box">
                                    <table>
                                        {
                                            tableData.map(rowData => <tr>
                                                <td>{rowData.td1}</td>
                                                <td>{rowData.td2}</td>

                                            </tr>)
                                        }
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="business-cases-area">
                    <div className="wrapper">
                        <div className="section-title">
                            <h1>BUSINESS CASES AND SIMULATIONSVIEW</h1>
                        </div>

                        <div className="item-box-container">
                            {
                                salesData.map(singleSaleData => <div className="item-box">
                                    <div class="item-box-img">
                                        <img src={singleSaleData.sales_img} className="price-child-img" alt="" srcset="" />

                                        <div className="box-content-top">
                                            <span className="top-title">{singleSaleData.top_title}</span>
                                            <span className="short-title">{singleSaleData.short_title}</span>
                                        </div>
                                        <div className="box-content">
                                            <p className="box-bottom-title">{singleSaleData.box_bottom_title} <span>{singleSaleData.box_bottom_title_span}</span> </p>
                                            <div className="box-content-bottom">
                                                <div className="box-icon-img">
                                                    <img style={{ width: '50px' }} src={singleSaleData.box_icon} alt="" srcset="" />
                                                </div>
                                                <div className="box-bottom-text">
                                                    <p>Format: <span className='format'>{singleSaleData.format}</span></p>
                                                    <p>Language: <span className='language'>{singleSaleData.language}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="img-hover">
                                        <div class="contents">
                                            <p>{singleSaleData.hover_content}</p>

                                            <div className="read-more-btn-wrapper">
                                                <div className="read-more-btn">Read More</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>

                        <div className="see-more">
                            <button className="see-more-btn">See More</button>
                        </div>
                    </div>
                </section>

                <section className="calibra">
                    <div className="wrapper">
                        <div className="calibra-main-box">
                            <div className="calibra-left">
                                <img src={calibra} alt="" />
                            </div>
                            <div className="calibra-right">
                                <div className="calibra-title"><img src={calibra1} alt="" srcset="" /> <span>Games Zone</span></div>
                                <p>Teacher will use this panel to assign course universe to
                                    student to play the game. After Activeted the game from
                                    the teacher, Student will then can play the game.</p>
                                <div className="calibra-btn">
                                    <button className="see-more-btn">See More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="contact-area">
                    <div className="wrapper">
                        <div className="section-bg">
                            <div className="contact-box">
                                <div className="contact-title"><h1>To Know more <br />
                                    about CalibraX. <br />
                                    Contact Us.</h1></div>
                                <div className="email-subscription">
                                    <input type="text" placeholder="macc@gmail.com" />
                                    <button className="submit-btn">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="partners">
                    <div className="wrapper">
                        <div className="partner-area">
                            <div className="partner-box1">
                                <h1>USING THIS PRODUCT <span>Client with this product</span></h1>
                            </div>
                            <div className="partner-box">
                                <img src={l1} alt="" srcset="" />
                            </div>
                            <div className="partner-box">
                                <img src={l2} alt="" srcset="" />
                            </div>
                            <div className="partner-box">
                                <img src={l3} alt="" srcset="" />
                            </div>
                            <div className="partner-box">
                                <img src={l4} alt="" srcset="" />
                            </div>
                            <div className="partner-box">
                                <img src={l5} alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer-area">
                <div className="wrapper">
                    <div className="footer-main-box">
                        <div className="footer-box">
                            <img src={calibra1} alt="" />
                        </div>
                        <div className="footer-box">
                            <p className='box-title'>Course info</p>
                            <p className='footer-content'>Course: GlobalChallenge TEST</p>
                            <p className='footer-content'>Universe & Code: Universe 1, c_l2e9xMWt</p>
                            <p className='footer-content'>Instructor: Calibratex Instructo</p>
                        </div>
                        <div className="footer-box">
                            <p className='box-title'>Support and reading</p>
                            <p className='footer-content'>Decision-making guide</p>
                            <p className='footer-content'>Case description</p>
                            <p className='footer-content'>Support</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    );
};

export default HomePageOne;