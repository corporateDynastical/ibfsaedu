import { Mail, Phone } from 'lucide-react'
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link'
import { motion } from "framer-motion"
import React from 'react'



import CourseTitle from "./course-title"
import Courses from "./courses"
import { Button } from "./ui/button"
import Container from "./ui/container"

const growthnow = () => {
  return (

    <>

      <Container>
        <br></br><br></br>
        <div className="space-y-2 w-full text-center">
          <CourseTitle title={'growthpath'} tagline={''} />
        </div>


        {/*--  Growth path  SECTION  */}
        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
          <div className="container-fluid py-5">
            <h4 className="text-white bg-success p-3">Growth Path </h4>
            <div className="row">
              <div className="col-sm-12 mb-3 mb-sm-0">
                <div className="card">
                  <div className="card-body ">
                    <div className="container">
                      <div className="row ">
                        {/* Regional Head */}
                        <div>
                          <h4 style={{ marginLeft: '10 00px', textDecoration: 'underline' }}> <img src="img/img.png" alt="image here" className="img-fluid p-3" /></h4>
                        </div>
                        {/* Regional Head */}
                        <div>
                          <h5 style={{ marginLeft: '800px', textDecoration: 'underline' }}>Regional Head <b>20 LPA to 30 LPA</b>
                          </h5><br />
                        </div>
                        {/* Cluster Head */}
                        <div>
                          <h5 style={{ marginLeft: '700px', textDecoration: 'underline' }}>Cluster Head <b>15 LPA to 20 LPA</b>
                          </h5><br />
                        </div>
                        {/* Branch Manager */}
                        <div>
                          <h5 style={{ marginLeft: '600px', textDecoration: 'underline' }}>Branch Manager <b>09 LPA to 15 LPA</b>
                          </h5><br />
                        </div>
                        {/* Deputy Manager */}
                        <div>
                          <h5 style={{ marginLeft: '500px', textDecoration: 'underline' }}>Deputy Manager <b>05 LPA to 09 LPA</b>
                          </h5><br />
                        </div>
                      </div>
                      <div className="row">
                        {/* Assistant Manager */}
                        <div>
                          <h5 style={{ marginLeft: '400px', textDecoration: 'underline' }}>Assistant Manager <b>3.6 LPA to 05
                            LPA</b></h5><br />
                        </div>
                        {/* Senior Officer - BDM */}
                        <div>
                          <h5 style={{ marginLeft: '300px', textDecoration: 'underline' }}>Senior Officer - BDM <b>BDM 2.5 LPA to
                            3.6 LPA </b> </h5><br />
                        </div>
                        {/* Sales Officer - BDE */}
                        <div>
                          <h5 style={{ marginLeft: '200px', textDecoration: 'underline' }}>Sales Officer - BDE <b>1.8 LPA to 2.4
                            LPA</b></h5><br />
                        </div>
                        <p className="p-3 mb-2  text-success">RECRUITMENT PARTNERS</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*--  End Growth path  SECTION  */}


      </Container>

    </>

  )


}






export default growthnow
