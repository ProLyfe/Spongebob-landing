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
                <h1>Une nouvelle aventure !</h1>
                <p>Vivez les meilleurs moments du film et aidez Bob et Patrick à récupérer la couronne de Neptune volée par Plankton ! Cette dernière se trouve à Shell City, un endroit terrible, pire que le RER D...</p>
            </div>
        </div>

        <div className="presentationContainerVariant">
            <div className="presentationDescription">
                <h1>Des nouveaux costumes !</h1>
                <p>Bob se refait un nouveau look et débarque avec de nouvelles tenues ! Notre petite éponge a connu biend des tenues lors de ses différentes aventures. Si vous n'êtes pas peureux, vous pourrez prendre son costume d'Halloween qui a réussi à effrayé le Holandais Volant... C'est dire à quel point il est effrayant !</p>
            </div>
            <div className="presentationImage">
                <Spline scene="https://prod.spline.design/ToYE5MokRr9VtZkW/scene.splinecode" />
                {/* <img className="imageBob" src="https://casoar.org/wp-content/uploads/2020/10/Bob-leponge.png" alt=""/> */}
            </div>
        </div>

    </div>
);

export default PresentationSection;