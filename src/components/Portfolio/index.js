import './index.scss';


const Portfolio = ({wwwImg, wwwLink}) => {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <><a href={wwwLink}>
        <img src={wwwImg} alt="site"/>
        </a>
        </>
    )
}

export default Portfolio;
