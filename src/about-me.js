import React from 'react';

function AboutMe() {
  return (
    <div id="about-me">
        <h1>{'About Me'}</h1>
        <p>{'I ostensibly live in St Louis, Missouri, but I really just live on the Internet. You can find me in the following places:'}</p>
        <ul>
            <li><a href="https://www.reddit.com/user/diablomarcus">{'Reddit'}</a></li>
            <li><a href="https://github.com/katerberg">{'GitHub'}</a></li>
            <li><a href="https://twitter.com/MisterNeem">{'Twitter'}</a></li>
        </ul>
        <p>{'I am on most other sites as well. Look for me as '}<strong>{'/u/katerberg'}</strong>{' or '}<strong>{'/u/diablomarcus'}</strong>{'. Isn\'t it amazing how those usernames we chose when we were 12 years old have followed us around ever since?'}</p>
        <p>{'Some people like to use '}<a href="mailto:katerberg@fastmail.fm">{'emails'}</a>{' or '}<a href="tel:19203456775">{'phone numbers'}</a>{' to contact as well.'}</p>
    </div>

  );
}

export default AboutMe;
