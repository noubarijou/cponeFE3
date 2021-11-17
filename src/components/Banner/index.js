import './index.scss';

const banner = ({children} ) => {
    return (
        <section id="banner">
            <div class="banner-text">
                {children}
            </div>
        </section>
    )
}

export default banner;
