import img1 from "./img2.jfif"

const Navbar = () => {
    return ( 
        <div className="navbar">
           <div className="left">
            <br />
           <marquee behavior="slide" direction="" scrollamount="30">
                <h1>Do not forget to </h1> <marquee behavior="slide" direction="" scrollamount="55" >
                <h1>do the below remaning tasks</h1>
            </marquee>
                
            </marquee>
           </div>
           <div className="img">
            <img src={img1} alt="" />
           </div>
            
            <div className="right">
                <br />
                <marquee behavior="slide" direction="right" scrollamount="30">
                    <h1>What are you waiting for</h1>
                     <marquee behavior="slide" direction="right" scrollamount="55">
                        <h1>Get on with it</h1>
                    </marquee>
                </marquee>

            </div>

            
        </div>
     );
}
 
export default Navbar;