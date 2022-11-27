import FollowIcon from '../components/FollowIcon';
import styles from '../styles/AboutMe.module.scss';

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
        <FollowIcon
          alt="Reddit Logo"
          link="https://www.reddit.com/user/diablomarcus"
          src="./reddit-logo.svg"
        />
        <FollowIcon
          alt="Github Logo"
          link="https://github.com/katerberg"
          src="./github-logo.svg"
        />
        <FollowIcon
          alt="Mastodon Logo"
          link="https://mastodonapp.uk/@katerberg"
          src="./mastodon-logo.svg"
        />
        <FollowIcon
          alt="Twitter Logo"
          link="https://twitter.com/MisterNeem"
          src="./twitter-logo.svg"
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
