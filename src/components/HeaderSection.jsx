import '../styles/header_section.css';

const HeaderSection = () => (
    <div className="headerSection">
        <spline-viewer className="splineFrame" url="https://prod.spline.design/XUIQEHRuUGWdpwAR/scene.splinecode"></spline-viewer>
        <div className="headerContainer">
            <div className="header">
                <img src="logo-bob.png" alt=""className="bobLogo"/>
            </div>
            {/* <h1></h1> */}
            <div className="headerSubContainer">
                <h1>Bob l'éponge le film débarque sur console !</h1>
                <img src="game.jpg" alt=""/>
            </div>
        </div>
        {/* <Spline scene="https://prod.spline.design/XUIQEHRuUGWdpwAR/scene.splinecode" /> */}
    </div>
);

export default HeaderSection;