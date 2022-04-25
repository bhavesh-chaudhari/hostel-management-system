import Head from "next/head";
import style from "../../client/styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";

import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
  {
    url: "/nighthostel.jpeg",
    caption: "Slide 1",
  },
  {
    url: "/ampi.jpeg",
    caption: "Slide 2",
  },
  {
    url: "morninghostel.jpeg",
    caption: "Slide 3",
  },
];

const index = () => {
  return (
    <>
      <Head>
        <title>Hostel Management System | IIITN</title>
      </Head>

      <div className="slide-container">
        <Fade>
          {fadeImages.map((FadeImage, index) => (
            <div
              className="each-slide"
              key={index}
              style={{ alignContent: "center" }}
            >
              <div
                style={{
                  backgroundImage: `url(${FadeImage.url})`,
                  height: "615px",
                  width: "1035px",
                  marginLeft: "300px",
                }}
              >
                {/* <span> <h1 style={{marginLeft:"600px"}}>IIITN - Hostel Management System</h1> </span> */}
              </div>
            </div>
          ))}
        </Fade>
      </div>

      <div style={{ marginTop: "100px", textAlign: "center" }}>
        <h2>Description</h2>
        <br></br>
        <p style={{ width: "600px", marginLeft: "520px" }}>
          Indian Institute of Information Technology, Nagpur (IIITN) is one of
          the 20 Indian Institutes of Information Technology established under
          the Public-Private Partnership Scheme by the Ministry of Education
          (erstwhile Ministry of Human Resource Development), Government of
          India. IIITN has been declared as an “Institution of National
          Importance” under the provisions of the Indian Institute of
          Information Technology (Public-Private Partnership) Act, 2017. The
          Institute started functioning during the year 2016-17 and Shifted to
          its Permanent Campus in Butibori Nagpur under the Department of Higher
          Education, Ministry of Education, and is supported by the Department
          of Higher Education, Government of Maharashtra, and Tata Consultancy
          Services, Mumbai as Industry Partner.
        </p>
      </div>
      <br></br>

      {/* <div className="cra_box"  style={{display:"flex" , alignItems:"center"}}>
        <div className="cra_title">ABOUT CRA</div>
        <p>
          The CRA provides a welcoming home where
          students create memories, share ideas, and grow alongside friends. It
          coordinates the working of all the hostels and takes decisions on all
          policies of common interest. The Dean of Students, in his capacity as
          the President of the Board for Hostel Management, is the head of the
          hostel organisation.
        </p>
      </div> */}

      <br></br>
      <br></br>
      <br></br>

      <h1 style={{ textAlign: "center" }}>OUR CHEIFS</h1>

      <br></br>
      <br></br>


      <div className="head_img">
        <div className="img_h">
          <Image src="/harshwarden.jpg" height="300px" width="400px" />
          <Link href="https://www.iiitn.ac.in/profile.php?alias=electronics-&-communication-engg&id=87">
            <a>
              <h3>HARSH GOUD</h3>
            </a>
          </Link>
          <h4>Warden </h4>
        </div>

        <div className="img_h">
          <Image src="/suildholes.jpeg" height="300px" width="400px" />
          <Link href="https://www.iiitn.ac.in/profile.php?alias=electronics-&-communication-engg&id=87">
            <a>
              <h3>SUNIL DHOLE </h3>
            </a>
          </Link>
          <h4>SPORTS CHIEF </h4>
        </div>
      </div>

      <br></br>

      {/* footer starts */}

      <div className="fbody">
        <footer className="footer">
          <div className="fcontainer">
            <div className="row">
              <div className="footer-col">
                <h4>IIITN</h4>
                <ul>
                  <li>
                    <a href="about.html">About us</a>
                  </li>
                  <li>
                    <a href="#">Our Events</a>
                  </li>
                  <li>
                    <a href="#">Student Policy</a>
                  </li>
                  <li>
                    <a href="#">Scholarship Program</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Team</h4>
                <ul>
                  <li>
                    <a href="#">Bhavesh Chaudhari (BT20CSE006)</a>
                  </li>
                  <li>
                    <a href="#">Vishal Goyal (BT20CSE134)</a>
                  </li>
                  <li>
                    <a href="#">Maitreya Zalte (BT20CSE166)</a>
                  </li>
                  <li>
                    <a href="#">Ayush PratapSingh (BT20CSE212)</a>
                  </li>
                  <li>
                    <a href="#">Hem Mahimkar (BT20CSE174)</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Our Offerings</h4>
                <ul>
                  <li>
                    <a href="goa.html">ECE </a>
                  </li>
                  <li>
                    <a href="kashmir.html">CSE</a>
                  </li>
                  <li>
                    <a href="shimla.html">CS(Specialization in Gaming)</a>
                  </li>
                  <li>
                    <a href="nycity.html">AI </a>
                  </li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Contact us</h4>
                {/* <div className="social-links"> */}
                <ul>
                  <li>
                  <a href="#">
                    Permanent Address: Survey No. 140,141/1 behind Br. Sheshrao
                    Wankhade Shetkari Sahkari Soot Girni, Village - Waranga, PO
                    - Dongargaon(Butibori), Tahsil- Nagpur (Rural), District
                    Nagpur, Maharashtra- 441108
                  </a></li>
                  <li><a href="#">9405215010</a></li>
                  <li><a href="#"> registrar@iiitn.ac.in </a></li>
                  </ul>
                
                {/* <div className="footer-col">
                            {/* <div id="txt" style="text-align: center; font-size: 30px; color: white;"></div> */}
                {/* </div>  */}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>

    // {/* <div classNameName={styles["home-container"]}>
    //   <div className={styles["home-content"]}>
    //     <div className={styles["heading"]}>
    // <Image src='/IIITN_hostel.jpg' layout="responsive"/>

    //       <h1>IIITN - Hostel Management System</h1>
    //     </div>
    //   </div>
    // </div> */}
  );
};

export default index;
