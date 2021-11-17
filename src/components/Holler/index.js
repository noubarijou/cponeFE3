import './index.scss';

const Holler = ({holler, urlContact}) => {
    return (
        <div id="holler"><a href={urlContact}>
            <img src={holler} alt="contact" />
            </a>
        </div>
    )
}

export default Holler
