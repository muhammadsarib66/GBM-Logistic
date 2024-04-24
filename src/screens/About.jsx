import aboutImg1 from "../assets/aboutImg1.png";
import aboutImg2 from "../assets/aboutImg2.png";

const About = () => {

    const dummylink = ["Aerospace & Defense",
        'Automotive',
        "Cloud Computing",
        "Fashion & Retail"]
        
  

  return (
    <section className="p-4 w-full h-fit grid grid-cols-1 md:grid-cols-2 place-items-center">
      <div data-aos="fade-up" className="relative flex p-2 w-[100%] pt-20  md:justify-center md:items-center h-screen">
        <div className=" absolute top-28 right-0 lg:right-40 md:right-28 sm:right-[4rem]     ">
          <img
            src={aboutImg2}
            alt="aboutImg2"
            className="h-[400px] w-[200px] object-cover rounded-full"
          />
        </div>
        <div className="absolute 
                              
       
    ">
          <img
            src={aboutImg1}
            alt="aboutImg1"
            className="h-[400px] w-[200px] object-cover rounded-full"
          />
        </div>
      </div>
      <div data-aos="fade-right" className=" text-secondary flex flex-col justify-center gap-8  p-2 w-full h-full ">
        <div className="md:w-[75%] flex flex-col gap-8">
          <h3 className="text-primary uppercase font-semibold font-DmSans">
            WE SPECIALISE IN THE TRANSPORTATION
          </h3>
          <h2 className="font-bold text-3xl md:text-5xl font-Outfit">
            Manage your Complex Logistics as can Focus
          </h2>
          <p className="text-gray-600 leading-snug tracking-wide">Transmax is the world’s driving worldwide coordinations supplier
we uphold industry and exchange the worldwide trade of about
dummy merchandise through land transport.</p>

        </div>
        <div className="flex text-secondary font-semibold">

        <div>
            {dummylink.map((item, ind) => (
                <div key={ind} className="p-2 flex items-center  gap-4"> <div className="rounded-full p-1 h-2 w-2 bg-gray-500"> </div>  {item}</div>
                // <a href="#" key={ind} className="text-primary font-semibold font-DmSans">{item}</a>
                
            ))}
        </div>
        <div>
            {dummylink.map((item, ind) => (
                    <div key={ind} className="p-2 flex items-center  gap-4"> <div className="rounded-full p-1 h-2 w-2 bg-gray-500"> </div>  {item}</div>
            // <a href="#" key={ind} className="text-primary font-semibold font-DmSans">{item}</a>

            ))}
        </div>
            </div>
      </div>
    </section>
  );
};

export default About;
