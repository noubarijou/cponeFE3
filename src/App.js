import {Fragment} from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Holler from './components/Holler';
import './App.scss';
import Mail from '../src/images/mail.png';
import Github from '../src/images/github.png';
import Linkedin from '../src/images/linkedin.png';
import Url from '../src/images/www.png';
import Githuby from './images/hero_github.png';


function App() {
  const myName = "Pulo's Crap";
  const listaDeProjetos = [
    {id: 0, title: 'JS Blackjack', url: 'https://noubarijou.github.io/blackjackjs/', repo: 'https://github.com/noubarijou/blackjackjs'},
    {id: 1, title: 'Netflix Clone', url: 'https://noubarijou.github.io/netflixlandingpageclone/', repo: 'https://github.com/noubarijou/netflixlandingpageclone'},
    {id: 2, title: 'Microsoft Clone', url: 'https://noubarijou.github.io/Microsofthomeclone/', repo: 'https://github.com/noubarijou/Microsofthomeclone'},
    {id: 3, title: 'Landing Page', url: 'https://github.com/noubarijou/Generic-Landing-Page', repo: 'https://noubarijou.github.io/Generic-Landing-Page/'},
    {id: 4, title: 'Pluralsight Clone', url: 'https://noubarijou.github.io/Pluralsight-login-page-clone/', repo: 'https://github.com/noubarijou/Pluralsight-login-page-clone'},
    {id: 5, title: 'Landing Page', url: 'https://noubarijou.github.io/Easy-Landing-Page-with-Blur-Effect/', repo: 'https://github.com/noubarijou/Easy-Landing-Page-with-Blur-Effect'},
    {id: 6, title: 'Calories Tracker', url: 'https://noubarijou.github.io/CaloriesTracker/', repo: 'https://github.com/noubarijou/CaloriesTracker'},
    {id: 7, title: 'Profile Scroller', url: 'https://noubarijou.github.io/IteratorProfileScroller/', repo: 'https://github.com/noubarijou/IteratorProfileScroller'},
    {id: 8, title: 'Form Validation-RegEx', url: 'https://github.com/noubarijou/UserFormValidationWithRegularExpression', repo: 'https://github.com/noubarijou/UserFormValidationWithRegularExpression'},
    {id: 9, title: 'JS Github Repo Search', url: 'https://noubarijou.github.io/GitHubSearchThingy/', repo: 'https://github.com/noubarijou/GitHubSearchThingy'},
    {id: 10, title: 'Chuck Norris Jokes', url: 'https://noubarijou.github.io/ChuckNorrisJokeGenerator/', repo: 'https://github.com/noubarijou/ChuckNorrisJokeGenerator'},
    {id: 11, title: 'Book List', url: 'https://noubarijou.github.io/BookList/', repo: 'https://github.com/noubarijou/BookList'},
    {id: 12, title: 'Number Guesser', url: 'https://noubarijou.github.io/NumberGuesser/', repo: 'https://github.com/noubarijou/NumberGuesser'},
    {id: 13, title: 'Loan Calculator', url: 'https://noubarijou.github.io/LoanCalculator/', repo: 'https://github.com/noubarijou/LoanCalculator'},
    {id: 14, title: 'Avaliação CTD', url: 'https://noubarijou.github.io/2oCheckPointFE2/', repo: 'https://github.com/noubarijou/2oCheckPointFE2'},
    {id: 15, title: 'Avaliação CTD', url: 'https://noubarijou.github.io/1oCheckPointDeFront2/', repo: 'https://github.com/noubarijou/1oCheckPointDeFront2'},
    {id: 16, title: 'React Task Tracker', url: 'https://reactnoobatworkagain.netlify.app/', repo: 'https://github.com/noubarijou/'},
    {id: 17, title: 'React GitHub Repo Search', url: 'https://reactnoobatwork.netlify.app/', repo: 'https://github.com/noubarijou/'}
  ]
    return (
      
      <>
      <Header name={myName}/>
      <main className="main-banner">
        <Banner>
          <h2 className="mt-5">Welcome to {myName} Collection</h2>
          <p>English Teacher and Translator tryin'a do something else, or the same, but in a different way. Here's a list of all the shyte I've put together so far.</p>
        </Banner>
        <div className=""></div>
      </main>
      <div id="map" className="d-grid gap-5">
        {listaDeProjetos.map((projeto) => {return(
          <div className="d-flex flex-column text-center h2">
          <Fragment key={projeto.id}>
            {projeto.title}
            <div className="d-flex justify-content-around">
            <Portfolio wwwImg={Url} wwwLink={projeto.url} logo={Github} repoLink={projeto.repo} />
            </div>
          </Fragment>
          </div>
        )})}
      </div>
      <div className="text-center mt-5 mb-3 " id="contact">
        <h2>Get in touch won't ya</h2>
        <div className="d-flex  justify-content-around">
      <Holler holler={Mail} urlContact="mailto:noubarijou@live.com"/>
      <Holler holler={Githuby} urlContact="https://github.com/noubarijou"/>
      <Holler holler={Linkedin} urlContact="https://www.linkedin.com/in/paulo-ventura-50079913/"/>
      </div>
      </div>
      <Footer name={myName}/>
      </>
    );
  }

  export default App;