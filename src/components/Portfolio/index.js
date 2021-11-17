import './index.scss';


const Portfolio = ({wwwImg, wwwLink, repoLink, logo}) => {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <>
        <a href={wwwLink}>
        <img src={wwwImg} alt="site"/>
        </a>
        <a href={repoLink}>
        <img src={logo} alt="repo"/>
        </a>
        </>
    )
}

export default Portfolio;
