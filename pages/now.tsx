import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import styles from '../styles/Now.module.scss';
import familyPhoto from '../images/now/2025-10-family-photo.png';
import miniMouse from '../images/now/2025-10-mini-mouse.png';

const NowHistory = dynamic(() => import('../components/NowHistory'), {
  ssr: false,
});

function Now() {
  return (
    <>
      <h1>{'What I am up to now'}</h1>
      <p>
        <a href="https://nownownow.com/about">
          {'This is a “now page”, and you should make one too.'}
        </a>
      </p>
      <div>
        <p className={styles.lastUpdated}>{'Updated 2025-10-22'}</p>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'👨‍👩‍👧‍👦 Family'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              It has been a busy summer, with family trips to Michigan and
              Louisville, and with individual trips all over the place. It is
              now nice to just be home for a bit.
            </li>
            <li className={styles.sectionContentItem}>
              Lots of big purchases have happened this quarter, such as a new
              minivan which the children have dubbed Mini Mouse, as well as less
              fun, but still helpful purchases, like a fridge, new basement
              flooring/walls, and new paint in the kitchen.
            </li>
            <li className={styles.sectionContentItem}>
              The kids are back in school and loving it as always. Somehow
              Forsyth has been a perfect match for them, and while they have
              tough days occasionally, we could not ask for better support from
              the staff there.
            </li>
            <div className={styles.familyImages}>
              <Image
                alt="Our family all standing behind each other"
                height={300}
                src={familyPhoto}
              />
              <Image
                alt="The kids hopping out of the mini-van"
                height={300}
                src={miniMouse}
              />
            </div>
          </ul>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🧑‍💻 Work'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              Start-up life has been intense in a way that my previous start-ups
              have not been. I am not sure if it is due to the rise of AI which
              pushes expectations higher, or that the culture of a hungry NYC
              start-up is just different than West Coast versions, but I am
              definitely learning a lot!
            </li>
            <li className={styles.sectionContentItem}>
              Unlike my last few jobs where I essentially did nothing except
              front-end development, here I am spending about a third of my time
              writing Node API code, which has been mostly nice. While I still
              do not want to go back to full-stack all day, being able to flex
              those muscles again is nice primarily because it feels like riding
              a bike instead of being a struggle.
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🍿 Media Consumption'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              Neem and I watched the first season of{' '}
              <a href="https://www.imdb.com/title/tt26933824/">
                Nobody Wants This
              </a>{' '}
              to my great joy. It has enough romance and comedy (amazing combo
              of Bell and Brody) to keep us both engaged in the story drama, but
              also enough meat on it with the difficult topics of family and
              religion to feel like it is not just puff fiction.
            </li>
            <li className={styles.sectionContentItem}>
              None of the movies that I have seen have been huge hits for me,
              largely because we have been watching lighter things at movie
              night. Luckily, I was able to see{' '}
              <a href="https://www.imdb.com/title/tt0055630/">Yojimbo</a> in the
              theater and that was a fantastic experience.
            </li>
            <li className={styles.sectionContentItem}>
              My reading has been very puffy recently, given that I am about 25
              books through the{' '}
              <a href="https://en.wikipedia.org/wiki/Animorphs">
                Animorphs series
              </a>
              . It has been a great time and a nice reprieve from an otherwise
              pretty taxing schedule.
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🎲 Games'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              <a href="https://store.steampowered.com/app/1145350/Hades_II/">
                Hades II
              </a>{' '}
              came out and has eaten pretty much all of my gaming time. Because
              I can play it on a handheld device, it is easy to get an hour or
              two in during an evening after bedtime. I am not loving it as much
              as the first one, but it is still a fantastic experience and a
              great core loop.
            </li>
            <li className={styles.sectionContentItem}>
              Because spending time with friends can be hard while also watching
              children,{' '}
              <a href="https://store.steampowered.com/app/2001120/Split_Fiction/">
                Split Fiction
              </a>{' '}
              has been my co-op game of choice. It is pretty much just a
              narrative movie, but it provides a fun backdrop to a conversation
              while playing it with a friend.
            </li>
            <li className={styles.sectionContentItem}>
              At BenCon, I played all sorts of board games (and pinball), but
              none really stuck out as being particularly memorable. Being able
              to play with friends is fun even if the games are not great, but
              it would have been nice to get a new favorite.
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🎨 Creation'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              The purchase of a{' '}
              <a href="https://us.store.bambulab.com/products/x1-carbon">
                3D printer
              </a>{' '}
              has been fun since it is a toy that is purely a hobby for me. Most
              things I have gotten into feel like they become chores eventually,
              but this is just pure fun and not really any kind of temptation to
              turn it into more. Being able to make Halloween costumes for
              friends or board game inserts has been a treat.
            </li>
            <li className={styles.sectionContentItem}>
              Years ago, I created a Dungeons and Dragons kingdom called{' '}
              <a href="https://drive.google.com/file/d/1nzLqXZIODseb_NLOxtgzek_tf6yCYXqL/view?usp=sharing">
                Galeduhr
              </a>{' '}
              which we played in for a little while but set down. Recently a
              group reached out to me and we are running another game in it. The
              conceit of the game is that players schedule time to play and tell
              me what they want to go explore, but the world is large enough and
              fleshed out already, so the prep work for me is fairly minimal.
              This has made it so much more fun to DM since I am largely not
              scrambling to come up with something and can instead focus on
              making the session fun.
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🧠 Thinking About'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              Figuring out what I want to get out of therapy has been a
              consideration. I originally went because I wanted to get better
              control of ADHD symptoms, but since going, I think they are better
              handled than I thought (particularly after finishing{' '}
              <a href="https://www.goodreads.com/book/show/125227576-how-to-adhd">
                How to ADHD
              </a>
              , which was amazing) even if there is still room to stretch. I am
              still aiming to find ways to be more productive, but think that a
              lot of that starts with getting better in touch with my own energy
              levels and emotions.
            </li>
          </ul>
        </section>
      </div>

      <NowHistory />
    </>
  );
}

export default Now;
