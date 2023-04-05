import '../styles/contact_section.css';

const ContactSection = () => (
    <div className="contactSection">
        <h1>Contactez notre éponge préférée</h1>
        <form action="">
            <input type="text" placeholder="Mail"/>
            <textarea type="text" placeholder="Message"/>
            <button>Envoyer</button>
        </form>
    </div>
);

export default ContactSection;