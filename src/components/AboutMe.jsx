import { useContext } from "react";
import DownloadButton from "./DownloadButton";
import { AppContext } from "./context/AppContext";
import stephenCVLink from "../assets/docs/stephen-ojeogwu-CV.pdf";



// eslint-disable-next-line react/prop-types
const AboutMe = () => {
  
  const { aboutRef } = useContext(AppContext);


  return (
    <section id="aboutme" ref={aboutRef}
      className="skill w-full relative flex flex-col justify-center items-center md:h-[700px] sm:h-[800px] 
        xs:h-[770px] h-[650px] sm:mb-[70px] xs:mb-0 mb-[10px]">

      <div className="flex flex-col justify-center items-center sm:rounded-[64px] xs:rounded-[50px] rounded-[30px] 
        bg-black/95 absolute z-[1] sm:top-0 xs:-top-[11%] -top-[15%] sm:py-[10%] py-[8%] sm:w-[80%] xs:w-[90%] 
        w-[95%]">

          <div className="flex flex-col justify-center items-center sm:w-[70%] xs:w-[80%] w-[92%]">

            <div className="flex flex-col justify-center items-center w-full">

              <div className="flex justify-start items-center sm:mb-10 mb-4 w-full">
                <div className="font-poppins text-center font-bold text-white md:text-[45px] 
                  sm:text-[40px] xs:text-[35px] text-[27px] xs:ml-4 ml-2">
                  About me
                </div>
              </div>

              <div className="w-full">
                <div className="font-poppins w-full text-gray-300 text-start md:text-[19px] sm:text-[17px] 
                  xs:text-[15px] xxs:text-[14px] text-[12px] sm:mb-1 mb-3 md:leading-[28px] xs:leading-[25px] 
                  leading-[20px]">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My name is Stephen Ojeogwu and I am a Public health 
                  professional, Health Educator, Public Health Consultant and a Provider Relations Manager in 
                  the Health Insurance business. I have been in the Healthcare space for over a decade now. Some little 
                  details of my speciality for the last ten &#40;10&#41; years are as follows:<br/><br/>
                  As a Health Educator, I Promote wellness in the community through classes, outreaches, and advocacy.
                  <br/><br/>
                  As a Public Health Consultant, I&apos;m involved in, and I pioneer creating, implementing, and 
                  managing health policies and programs.
                  <br/><br/>
                  As a Provider Relations Manager, I am responsible for maintaining and developing relationships 
                  with healthcare providers, such as hospitals and physicians, who participate in a 
                  healthcare network. I work with program directors and senior leadership to ensure that the 
                  network of providers serves the needs of insured members.
                </div>
              </div>

            </div>

            <div className="w-full md:mt-6 sm:mt-4 mt-2">
              <DownloadButton resumeLink={stephenCVLink} />
            </div>

          </div>

      </div>

    </section>
  )
}

export default AboutMe

