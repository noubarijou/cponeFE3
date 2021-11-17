import './index.scss';




const Repos = ({logo, repoLink}) => {
    return (
        <><a href={repoLink}>
        <img src={logo} alt="repo"/>
        </a>
        </>
    )
}

export default Repos;
