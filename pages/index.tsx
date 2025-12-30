import FollowIcon from '../components/FollowIcon';
import styles from '../styles/AboutMe.module.scss';
import rssLogo from '../images/logos/rss-logo.svg';
import githubLogo from '../images/logos/github-logo.svg';
import mastodonLogo from '../images/logos/mastodon-logo.svg';
import goodReadsLogo from '../images/logos/good-reads-logo.svg';

const Home = () => {
  return (
    <div>
      <h1>{'About Me'}</h1>
      <p>
        {
          'I live in St Louis, Missouri, but like all of us, I really just live on the Internet. You can find me in the following places:'
        }
      </p>
      <div className={styles.followIcons}>
        <FollowIcon alt="RSS Logo" link="/feed.atom" src={rssLogo} />
        <FollowIcon
          alt="Github Logo"
          link="https://github.com/katerberg"
          src={githubLogo}
        />
        <FollowIcon
          alt="Mastodon Logo"
          link="https://mastodonapp.uk/@katerberg"
          src={mastodonLogo}
        />
        <FollowIcon
          alt="GoodReads Logo"
          link="https://www.goodreads.com/user/show/55606019"
          src={goodReadsLogo}
        />
      </div>
      <p>
        {'I am on most other sites as well. Look for me as '}
        <strong>{'/u/katerberg'}</strong>
        {', '}
        <strong>{'/u/MisterNeem'}</strong>
        {', or '}
        <strong>{'/u/diablomarcus'}</strong>
        {
          ". Isn't it amazing how those usernames we chose when we were 12 years old have followed us around ever since?"
        }
      </p>
      <p>
        {'Some people like to use '}
        <a href="mailto:katerberg@fastmail.fm">{'emails'}</a>
        {' or '}
        <a href="tel:19203456775">{'phone numbers'}</a>
        {' to contact as well.'}
      </p>
    </div>
  );
};

export default Home;
