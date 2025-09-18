import Image from "next/image";

export default function Home() {
  return (

    <div>


      <section className="bg-white text-black h-[80vh]" >
        <div className="container mx-auto" >
          <div className="flex items-center justify-between mx-auto max-w-5xl" >
            <div className="w-1/2 " >
              <img className="rounded-[10px] overflow-hidden" src="https://alumni.iiitkota.ac.in/assets/dhirajKushwaha-DT7b_YFB.png" alt="" />

            </div>
            <div className="w-1/2" >
              <h1 className="text-2xl" >
                Hello there 👋
              </h1>

              <h1 className="mt-2 fontA font-medium text-4xl">
                I am Dhiraj Kushwaha
              </h1>
              <p className="mt-2">

                Currently a 2nd-year undergraduate student at IIIT Kota, specializing in Artificial Intelligence and Data Engineering.
                Passionate Full Stack Developer with expertise in the MERN stack, Next.js, Flutter, and Django.
                
              </p>
              <p>
                I work as a freelance developer <a href="./about">Know More</a> 
              
              </p>

              <p>
                I also manage the official website of IIIT Kota’s Alumni Cell <a target="_blank" href="https://alumni.iiitkota.ac.in/about">Click Here to know more. </a> 
              </p>

            </div>
          </div>

        </div>

      </section>


      <section>
        <div className="container mx-auto" >

            <div className="max-w-5xl mx-auto" >
              <h1 className="text-center poppins font-medium text-4xl " >Checkout my recently Shipped Projects: </h1>
              
              <div>
                  <a  target="_blank" href="https://tykepe.vercel.app/"> 
                    <div className="bg-gray-200 p-2 rounded-[10px] w-xl" >
                        TykePe
                    </div>
                  </a>  

              </div>

            </div>



            


        </div>

      </section>

    </div>

  );
}
