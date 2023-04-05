import '../styles/presentation_section.css';
import Spline from '@splinetool/react-spline';

const PresentationSection = () => (
    <div className="presentationSection">

        <div className="presentationContainer">
            <div className="presentationImage">
                <Spline scene="https://prod.spline.design/aaK8jBxKq7wYAPMN/scene.splinecode" />
                {/* <img className="imageBob" src="https://casoar.org/wp-content/uploads/2020/10/Bob-leponge.png" alt=""/> */}
            </div>
            <div className="presentationDescription">
                <p>Vivez les meilleurs moments du film et aidez Bob et Patrick à récupérer la couronne de Neptune volée par Plankton !</p>
            </div>
        </div>

        <div className="presentationContainerVariant">
            <div className="presentationDescription">
                <p>Bob se refait un nouveau look et débarque avec de nouvelles tenues !</p>
            </div>
            <div className="presentationImage">
                <Spline scene="https://prod.spline.design/ToYE5MokRr9VtZkW/scene.splinecode" />
                {/* <img className="imageBob" src="https://casoar.org/wp-content/uploads/2020/10/Bob-leponge.png" alt=""/> */}
            </div>
        </div>

    </div>
);

export default PresentationSection;