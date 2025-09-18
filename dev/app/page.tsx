import Image from "next/image";

export default function Home() {
  return (

    <div>


      <section className="bg-white text-black" >
        <div className="container" >
          <div className="flex" >
            <div className="w-1/2" >
              <img src="https://alumni.iiitkota.ac.in/assets/dhirajKushwaha-DT7b_YFB.png" alt="" />

            </div>
            <div className="w-1/2" >
              <h1>
                Hello there 👋
              </h1>

              <h1 className="fontA">
                I am Dhiraj Kushwaha
              </h1>
              <p>

                Currently a 2nd-year undergraduate student at IIIT Kota, specializing in Artificial Intelligence and Data Engineering.
                Passionate Full Stack Developer with expertise in the MERN stack, Next.js, Flutter, and Django.

                I work as a freelance developer <a href="./about">Know More</a> 
                
                I also manage the official website of IIIT Kota’s Alumni Cell <a href="https://alumni.iiitkota.ac.in/about"></a> Click Here to know more. 
              </p>

            </div>
          </div>

        </div>

      </section>


      <section>
        <div>

            <h1>Checkout my recently Shipped Projects: </h1>
            
            <div>
                <a href=""> 
                  <div>
                      TykePe
                  </div>
                </a>  

            </div>

            


        </div>

      </section>

    </div>

  );
}
