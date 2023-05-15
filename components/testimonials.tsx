import { Carousel } from "@material-tailwind/react";
export default function Testimonial() {

  const testimonials = [{
    "content":"As an educational institution in India, we were blown away by the efficiency and accuracy of this online examination system. It has transformed the way we conduct exams, making the process seamless and secure. Our students appreciate the quick evaluation feature, which provides instant feedback, enabling them to improve their performance. With advanced analytics, we can easily track student progress and identify areas for targeted intervention. This system has truly revolutionized assessments in our school",
    "author":"Principal",
    "organisation":"St. Xavier's School"
  },

  {
    "content":"Implementing this online examination system powered by machine learning has been a game-changer for our school. The configurable exam feature allows us to create tailored assessments that align perfectly with our curriculum and teaching methods. The security measures have given us peace of mind, ensuring a fair and cheat-proof testing environment. With the premium plan, our students have access to advanced features that enhance their learning experience. We highly recommend this system to all Indian schools seeking to modernize their examination processes.",
    "author":"Headmistress",
    "organisation":"Holy Angels"
  },

  {
    "content":"We are extremely impressed with the online examination system and its ability to provide accurate results in real-time. The quick evaluation feature has drastically reduced our teachers' workload, allowing them to focus more on individual student support. The advanced analytics feature provides valuable insights into student performance, helping us identify areas of improvement and devise targeted interventions. This system has elevated the quality of assessments in our school, and we are delighted with the positive impact it has made on our students' learning journey.",
    "author":"Principal",
    "organisation":" Sacred Heart School"
  },

  {
    "content":"The convenience and effectiveness of this online examination system have exceeded our expectations. Our students find the user-friendly interface easy to navigate, and the configurable exam feature allows us to design exams that cater to different subjects and grade levels. The security measures ensure a fair and transparent evaluation process, maintaining the credibility of assessments. With the premium plan, our school has access to a comprehensive set of features that have elevated the overall exam experience. We are grateful to have found such a robust and reliable system.",
    "author":"Director",
    "organisation":" Modern Indian School"
  },



]
    return (
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Few word from our Users</h2>
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <Carousel autoplay={true} loop={true}>

        {testimonials.map(testimonial=><>
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
         
          <figure className="mt-10">
            <blockquote className="text-center   leading-8 text-gray-700">
              <p>
               {testimonial.content}
              </p>
            </blockquote>
            <figcaption className="mt-10">
          
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">{'- ' + testimonial.author}</div>
                
                <div className="text-gray-900">{', '+testimonial.organisation}</div>
              </div>
            </figcaption>
          </figure>
        </div>
        </>)}

        </Carousel>
        
      </section>
    )
  }
  

 
