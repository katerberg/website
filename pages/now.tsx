import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import styles from '../styles/Now.module.scss';
import halloween from '../images/now/2023-11-halloween.png';
import biking from '../images/now/2023-11-biking.png';
import rory from '../images/now/2023-05-rory.png';
import neemLogan from '../images/now/2023-05-neem-logan.png';
import kittyWave from '../images/now/2023-08-kitty-wave.png';
import arch from '../images/now/2023-12-arch.png';
import shoes from '../images/now/2023-12-shoes.png';
import eclipse from '../images/now/2024-04-eclipse.png';
import bike from '../images/now/2024-04-bike.png';
import xmen from '../images/now/2024-07-xmen.png';
import cousins from '../images/now/2024-07-cousins.png';
import desserts from '../images/now/2024-09-desserts.png';
import london from '../images/now/2024-09-london.png';
import christmas from '../images/now/2025-02-christmas.png';
import airplaneBed from '../images/now/2025-02-airplane-bed.png';
import schoolShirts from '../images/now/2025-05-school-shirts.png';
import scoutsLifeJackets from '../images/now/2025-05-scouts.png';

function Now() {
  return (
    <>
      <h1>{'What I am up to now'}</h1>
      <p>
        <a href="https://nownownow.com/about">
          {'This is a ”now page“, and you should make one too.'}
        </a>
      </p>
      <div>
        <p className={styles.lastUpdated}>{'Updated 2025-05-14'}</p>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'👨‍👩‍👧‍👦 Family'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              The kids got to spend time with their cousins since we went on a
              trip to the{' '}
              <a href="https://crownridgetigers.com/">
                Crown Ridge Tiger Sanctuary
              </a>{' '}
              for Bethany and my birthday. Seeing the Tigers from 4 feet away
              and learning about them was great, but the time together (with a
              surprise visit by Tim and his family) was the true magic.
            </li>
            <li className={styles.sectionContentItem}>
              Neem went on a bunch of trips for work, but Logan and I went on a
              Cub Scouts Camporee at{' '}
              <a href="https://stlbsa.org/properties/s-bar-f-scout-ranch/">
                S-F Scout Ranch
              </a>
              . It involved fishing, canoeing, sleeping on the ground, and
              learning safety techniques of all sorts.
            </li>
            <li className={styles.sectionContentItem}>
              We went to the Red Wings vs Blues game, per a somewhat annual
              tradition, and this time, instead of going with Neem, I went with
              Logan and a few friends. It was a great time that ended with Logan
              nearly falling asleep on the MetroLink and talking about it for
              days.
            </li>
          </ul>
          <div className={styles.familyImages}>
            <Image
              alt="Mark and Logan wearing Cub Scouts life jackets"
              height={400}
              src={scoutsLifeJackets}
            />
            <Image
              alt="Ororo and Logan outside of their school"
              height={400}
              src={schoolShirts}
            />
          </div>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🧑‍💻 Work'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              I made a tough decision to leave{' '}
              <a href="https://www.opslevel.com/">OpsLevel</a> to go to{' '}
              <a href="https://www.maestroqa.com/">Maestro QA</a>. It is a
              start-up that is focused on making call centers and customer
              support better. Since all of the funding in the world is currently
              only going to AI-focused areas, I wanted to be in that space, but
              most of the use-cases are pretty suspect to me. This company has
              actually compelling use-cases that are focused on the problems
              instead of on the technology.
            </li>
            <li className={styles.sectionContentItem}>
              It sounds like I will be going to to be traveling about once a
              quarter for meet-ups with the team, which I am hoping will really
              help me stay engaged, since I thrive on the uplifting energy in my
              workplace, and that is a tricky thing to do purely remotely.
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🍿 Media Consumption'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              Movie Night every week is still a high-point of my week, with more
              silly films this quarter like{' '}
              <a href="https://www.imdb.com/title/tt0106697/">Demolition Man</a>{' '}
              and{' '}
              <a href="https://www.imdb.com/title/tt0029947">
                Bringing Up Baby
              </a>
              , but also with harder hitting films like{' '}
              <a href="https://www.imdb.com/title/tt0056801/">8½</a>.
            </li>
            <li className={styles.sectionContentItem}>
              I am always reading 2-3 books at once, but the most impactful so
              far this quarter has been{' '}
              <a href="https://www.goodreads.com/book/show/24800.House_of_Leaves">
                House of Leaves
              </a>
              , which is a strange-horror book that is the most ambitious
              non-religious text I have encountered. I am looking forward to
              finishing it to have more thoughts, but you can always track what
              I am reading at my{' '}
              <a href="https://www.goodreads.com/user/show/55606019">
                GoodReads
              </a>
              .
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🎲 Games'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              I was gifted a{' '}
              <a href="https://www.msi.com/Handhelds/Claw-7-AI-Plus-A2VMX">
                MSI Claw
              </a>{' '}
              handheld gaming computer which has re-sparked my interest in a
              bunch of games I have been unable to play on Mac computers, so my{' '}
              <a href="https://steamcommunity.com/profiles/76561198049021576/">
                Steam
              </a>{' '}
              profile has been more active than usual.
            </li>
            <li className={styles.sectionContentItem}>
              <a href="https://store.steampowered.com/app/1835240/Spiritfall/">
                Spiritfall
              </a>{' '}
              (Super Smash Bros mixed with Hades) has probably been the biggest
              winner of my time recently, but there have just been a lot of new
              games that I’ve been able to try and I am enjoying the
              exploration.
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🎨 Creation'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              This year I opted to skip the{' '}
              <a href="https://itch.io/jam/7drl-challenge-2025">
                7 Day Roguelike
              </a>{' '}
              since life was just a bit too chaotic. I really missed out on it
              and there are a few game ideas that are spinning in my head even
              though none of them fit cleanly in the “Roguelike” genre.
            </li>
            <li className={styles.sectionContentItem}>
              One of the biggest ideas I have had is just to clean up some of my
              previous 7DRLs into releasable Steam games that are $5. It would
              require some time, and require learning how to publish things, but
              it would be nice to have them available for people to play as more
              than just tech demos. The thing holding me back is the lack of
              time constraint on the process. Since it is not a one-week
              project, the games feel like they are likely to seem incomplete
              rather than a nice example of what is doable in 7 days.
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🧠 Thinking About'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              How to function with ADHD. I have gone to therapy for a month or
              so, but feel like most of the therapy has been intellectualizing
              the experiences rather than trying new strategies to be better
              able to accomplish goals. Some of this certainly comes from the
              lack of concrete goals, but it is all connected since the lack of
              goal-setting comes from the likely inability to achieve them to
              the level that makes me happy (all-or-nothing thinking, which is
              deeply common in ADHD).
            </li>
            <li className={styles.sectionContentItem}>
              What do to after school for the kiddos. There is a about a
              two-hour window of time after pick up where they need to eat, get
              ready for bed, and ideally have some family experiences that are
              positive. It is hard to find the right things to fit in the 30-60
              minute window of time to help them feel like a part of the family
              without making the necessary activities fall through the cracks.
            </li>
          </ul>
        </section>
      </div>

      <hr />
      <h2>{'History'}</h2>
      <div className={styles.history}>
        <div>
          <p className={styles.lastUpdated}>{'Updated 2025-02-16'}</p>
          <section className={styles.section}>
            <h3 className={styles.sectionHeader}>{'👨‍👩‍👧‍👦 Family'}</h3>
            <ul className={styles.sectionContent}>
              <li className={styles.sectionContentItem}>
                So much traveling! We went to Hong Kong to visit Craig,
                Cristina, Gabri, and Mateo, with a brief stop in Japan since it
                is a short stop over. Neem and Logan went to Austin to visit
                family, and had two canceled trips as well, including one that
                was canceled while it was trying to land resulting in a long
                trip that ended up in the same airport (STL).
              </li>
              <li className={styles.sectionContentItem}>
                Logan has been enjoying{' '}
                <a href="https://www.scouting.org/">Cub Scouts</a>, with a
                completed pinewood derby car to show for it as well as a lot of
                badges from the events we did last Autumn. We are both looking
                forward to hiking more in the Spring.
              </li>
              <li className={styles.sectionContentItem}>
                As a family, we saw the{' '}
                <a href="https://aoh.org/">Ambassadors of Harmony</a> concert
                which was run by his former teacher, and Logan and I went to see{' '}
                <a href="https://www.fabulousfox.com/events/detail/grinch">
                  How The Grinch Stole Christmas
                </a>{' '}
                at the Fox Theater as well. Doing events like this are always a
                big investment in energy, time, and money, but still feel worth
                it.
              </li>
            </ul>
            <div className={styles.familyImages}>
              <Image
                alt="All the family visiting for Christmas"
                height={300}
                src={christmas}
              />
              <Image
                alt="Ororo and Logan sleeping on a plane to Hong Kong"
                height={300}
                src={airplaneBed}
              />
            </div>
          </section>
          <section className={styles.section}>
            <h3 className={styles.sectionHeader}>{'🧑‍💻 Work'}</h3>
            <ul className={styles.sectionContent}>
              <li className={styles.sectionContentItem}>
                I am still at <a href="https://www.opslevel.com/">OpsLevel</a>.
                We recently launched{' '}
                <a href="https://docs.opslevel.com/docs/ui-customization">
                  UI Customization
                </a>{' '}
                to much excitement, and I did most of the fighting for a
                widgetized layout that was well received.
              </li>
              <li className={styles.sectionContentItem}>
                Not seeing my co-workers has been pretty draining emotionally,
                but I have come more to peace with it given how flexible the
                role is, both in terms of time as well as in the amount of
                latitude I am given to build what makes sense in this crazy
                start up world.
              </li>
            </ul>
          </section>
          <section className={styles.section}>
            <h3 className={styles.sectionHeader}>{'🍿 Media Consumption'}</h3>
            <ul className={styles.sectionContent}>
              <li className={styles.sectionContentItem}>
                <a href="https://www.imdb.com/title/tt0112178/">
                  Star Trek: Voyager
                </a>{' '}
                has been my comfort watch, but I probably watch one episode a
                month given how much I have been reading and watching of films
                that require more focus.{' '}
              </li>
              <li className={styles.sectionContentItem}>
                I watched a 12 hour viewing of{' '}
                <a href="https://www.imdb.com/title/tt0120737/">
                  Lord of the Rings
                </a>{' '}
                at the{' '}
                <a href="https://hipointetheatre.org/movies/the-lord-of-the-rings-extended-edition-trilogy-marathon/">
                  Hi-Pointe Theater
                </a>{' '}
                with some friends which was really fun but also very long.
              </li>
            </ul>
          </section>
          <section className={styles.section}>
            <h3 className={styles.sectionHeader}>{'🎲 Games'}</h3>
            <ul className={styles.sectionContent}>
              <li className={styles.sectionContentItem}>
                <a href="https://store.steampowered.com/app/1253920/Rogue_Legacy_2/">
                  Rogue Legacy 2
                </a>{' '}
                is a good one that Logan enjoys watching me play, and it is
                scratching my desire for a Rogue-lite while still being easy
                enough that I am not stressed when I have to set it down to help
                with something.
              </li>
              <li className={styles.sectionContentItem}>
                Despite <a href="https://stlotus.org">St Lotus</a> streaming
                slowing down, I have still been playing more Magic, and even got
                to play in a couple VRDs recently. My performance has not been
                where I want it to be, but it is still fun and I am trying to
                get myself more comfortable at doing things sub-optimally.
              </li>
            </ul>
          </section>
          <section className={styles.section}>
            <h3 className={styles.sectionHeader}>{'🎨 Creation'}</h3>
            <ul className={styles.sectionContent}>
              <li className={styles.sectionContentItem}>
                Not much creation happening recently other than putting together
                some Lego sets (such as the{' '}
                <a href="https://www.lego.com/en-us/product/nasa-mars-rover-perseverance-42158">
                  Perseverance Rover
                </a>
                ) that I got for Christmas, but we are in the thick of family
                time, so much of my creation has been on bonds with family.
              </li>
              <li className={styles.sectionContentItem}>
                While not really focusing on it, I still enjoy spending 30
                seconds each morning improving my Latte Art. I am wildly
                inconsistent, but occasionally{' '}
                <a href="https://mastodonapp.uk/@katerberg/113204276529023630">
                  things work out the way they should
                </a>
                . Most of my problem is that the time between creations is about
                24 hours, so it is hard to remember what I am trying to improve.
              </li>
            </ul>
          </section>
          <section className={styles.section}>
            <h3 className={styles.sectionHeader}>{'🧠 Thinking About'}</h3>
            <ul className={styles.sectionContent}>
              <li className={styles.sectionContentItem}>
                I had a surgery to improve my sinuses that went well, but I have
                a sleep study coming up that will likely diagnose me with sleep
                apnea as well. Getting old is tiring and I hope that focusing on
                my physical and mental health will pay dividends in forty years,
                even if it is annoying now.
              </li>
              <li className={styles.sectionContentItem}>
                How to be a better husband. The more I learn about how my brain
                works, the more I am aware of the ways that I want to be more in
                control of how it functions. Like everyone, I look back at past
                me and realize the ways in which I have been just vaguely
                inconsiderate without intention. Similar to last quarter’s goal
                of focusing energy on time with children, I am thinking of ways
                to ensure that I can be more kind to Neem.
              </li>
            </ul>
          </section>
        </div>

        <div>
          <p className={styles.lastUpdated}>{'Updated 2024-09-02'}</p>
          <section className={styles.section}>
            <h3 className={styles.sectionHeader}>{'👨‍👩‍👧‍👦 Family'}</h3>
            <ul className={styles.sectionContent}>
              <li className={styles.sectionContentItem}>
                We’ve made a tradition of going out for a meal together as a
                family on one day per weekend, and it has been a blast to see
                the kiddos grow into polite restaurant children even if they can
                still be monsters sometimes.
              </li>
              <li className={styles.sectionContentItem}>
                Neem and I went to London for a trip to see Taylor Swift, but
                she was kind enough to let me see a bunch of historical sites as
                well. Stonehenge was a bore, but the inside of Parliament and
                Windsor were huge highlights. The concert was very cool as well,
                both from a vibes-aspect as well as the sheer technical
                achievement of it.
              </li>
            </ul>
            <div className={styles.familyImages}>
              <Image
                alt="Logan and Mark making a silly face in front of two tiny sundaes."
                height={400}
                src={desserts}
              />
              <Image
                alt="Neem and Mark in front of Big Ben"
                height={400}
                src={london}
              />
            </div>
          </section>
          <section className={styles.section}>
            <h3 className={styles.sectionHeader}>{'🧑‍💻 Work'}</h3>
            <ul className={styles.sectionContent}>
              <li className={styles.sectionContentItem}>
                I am still at <a href="https://www.opslevel.com/">OpsLevel</a>{' '}
                and having fun with lots of little learnings, such as
                drag-and-drop libraries. Still looking forward to the future,
                but it is nice to see technical investments that and
                re-organizations to support it.
              </li>
              <li className={styles.sectionContentItem}>
                The biggest challenge has been trying to move quickly with
                experimental items (which is very fun) while also making sure
                they are built in a way to be supported by others, which is
                tricky given the lack of time to productionize them. It largely
                feels like being a sales engineer.
              </li>
            </ul>
          </section>
          <section className={styles.section}>
            <h3 className={styles.sectionHeader}>{'🍿 Media Consumption'}</h3>
            <ul className={styles.sectionContent}>
              <li className={styles.sectionContentItem}>
                On family movie night, we have been watching{' '}
                <a href="https://www.imdb.com/title/tt10285320/">
                  Lego Masters Australia
                </a>{' '}
                which I fully admit is not a movie, but I will not complain. I
                am also re-watching{' '}
                <a href="https://www.imdb.com/title/tt0200276">The West Wing</a>{' '}
                as is a semi-yearly tradition.
              </li>
              <li className={styles.sectionContentItem}>
                While we were in London, Neem and I spent most of the time
                reading books, which was delightful. The stand-out was a{' '}
                <a href="https://www.goodreads.com/book/show/40864002-a-psalm-for-the-wild-built">
                  meditation on being disguised as a sci-fi novel
                </a>
                .
              </li>
            </ul>
          </section>
          <section className={styles.section}>
            <h3 className={styles.sectionHeader}>{'🎲 Games'}</h3>
            <ul className={styles.sectionContent}>
              <li className={styles.sectionContentItem}>
                <a href="https://store.steampowered.com/app/1868140/DAVE_THE_DIVER/">
                  Dave the Diver
                </a>{' '}
                has been a fun game that is playable in small chunks and is
                great to play with the kiddos in the room. When they’re not
                around, I have found{' '}
                <a href="https://store.steampowered.com/app/1313140/Cult_of_the_Lamb/">
                  Cult of the Lamb
                </a>{' '}
                to be a fun Binding of Isaac clone that is definitely not
                child-appropriate.
              </li>
              <li className={styles.sectionContentItem}>
                Physical games have been tough to get to the table, but{' '}
                <a href="https://boardgamegeek.com/boardgame/162886/spirit-island">
                  Spirit Island
                </a>{' '}
                is a great one that and it’s been an easy one to play in 2-3
                hours after kid bedtime
              </li>
            </ul>
          </section>
          <section className={styles.section}>
            <h3 className={styles.sectionHeader}>{'🎨 Creation'}</h3>
            <ul className={styles.sectionContent}>
              <li className={styles.sectionContentItem}>
                We played another Vintage Rotisserie Draft and it was fun with
                less stress about making the stream perfect. I didn’t do great,
                but it was still relaxed. I’m trying to do some{' '}
                <a href="https://www.youtube.com/watch?v=Rd74cqqCrqA">
                  content afterwards
                </a>
                .
              </li>
              <li className={styles.sectionContentItem}>
                Despite not really knowing what I am doing with art at all, I
                have been playing around with making some{' '}
                <a href="https://mastodonapp.uk/@katerberg/112933568574664906">
                  pixel art
                </a>
                . It is interesting to learn about how deep it goes, and I
                mostly just wish that I had the mental endurance to be able to
                tackle them after a full day of work. Context switching is hard!
              </li>
            </ul>
          </section>
          <section className={styles.section}>
            <h3 className={styles.sectionHeader}>{'🧠 Thinking About'}</h3>
            <ul className={styles.sectionContent}>
              <li className={styles.sectionContentItem}>
                It is really hard to find the energy to do things after work and
                bedtime for the kids. It seems like there’s a narrow window
                where I have time to do side-projects but before I start winding
                down (since my brain goes buzz while I need to sleep if I write
                code after 10pm) and I can’t use it effectively.
              </li>
              <li className={styles.sectionContentItem}>
                Spending quality time with the kiddos. Knowing that my phone
                will always be small but my children won’t be is incredibly
                true, but in the moments where I feel brain-dead or annoyed, it
                is hard to muster the self-control to still engage with them in
                the way they deserve.
              </li>
            </ul>
          </section>
        </div>

        <div>
          <p className={styles.lastUpdated}>{'Updated 2024-07-13'}</p>
          <section className={styles.section}>
            <h3 className={styles.sectionHeader}>{'👨‍👩‍👧‍👦 Family'}</h3>
            <ul className={styles.sectionContent}>
              <li className={styles.sectionContentItem}>
                Our family is wonderful, with many trips to see the extended
                family (two to Austin and two to Chicago this quarter!) and it
                is wonderful to see the kiddos building great memories with
                their cousins.
              </li>
              <li className={styles.sectionContentItem}>
                Logan has been riding his bike often, while Ororo is far more
                nervous around her trike, but is still a good sport because she
                wants to keep up with her brother. Neem has been venturing out
                more on family walks and it is good to be able to spend time
                outdoors as a family, including an aborted camping trip that got
                flash-flooded.
              </li>
              <li>
                Despite the ridiculousness of the situation, we all went to the
                UFL Championship Football Game hosted in STL.
              </li>
            </ul>
            <div className={styles.familyImages}>
              <Image
                alt="Logan, Ororo, and me standing in front of a X-Men sign dressed up at the Science Center."
                height={300}
                src={xmen}
              />
              <Image
                alt="Cousins, Neem, and Bethany at an impromptu photoshoot"
                height={300}
                src={cousins}
              />
            </div>
          </section>
          <section className={styles.section}>
            <h3 className={styles.sectionHeader}>{'🧑‍💻 Work'}</h3>
            <ul className={styles.sectionContent}>
              <li className={styles.sectionContentItem}>
                I am still at <a href="https://www.opslevel.com/">OpsLevel</a>{' '}
                and enjoying it. There is much more dreaming about the future
                and hoping that things are set up to make those dreams a
                possibility. Assuming that the company can deliver on some big
                initiatives that we are aiming for, it would be really cool to
                be able to help level up the product in a bunch of ways that we
                know we want to do.
              </li>
              <li className={styles.sectionContentItem}>
                I have been spending more time doing back-end Rails work, which
                I really do not generally enjoy, but being able to help with
                stuff that needs to get done regardless of skill-set is a nice
                feeling.
              </li>
            </ul>
          </section>
          <section className={styles.section}>
            <h3 className={styles.sectionHeader}>{'🍿 Media Consumption'}</h3>
            <ul className={styles.sectionContent}>
              <li className={styles.sectionContentItem}>
                Movie night is great, largely leaning more towards fun movies
                like{' '}
                <a href="https://www.imdb.com/title/tt0116629/">
                  Independence Day
                </a>{' '}
                rather than hard-hitting dramas.
              </li>
              <li className={styles.sectionContentItem}>
                I finished the last books of Octavia Butler’s, and can now
                confirm her as my favorite author.{' '}
                <a href="https://www.goodreads.com/book/show/60932.Parable_of_the_Talents">
                  Parable of the Talents
                </a>{' '}
                hit me really hard, and possibly due to the election, and
                possibly just due to being more in tune with my own mortality
                due to my children, it’s been in my thoughts a lot.
              </li>
            </ul>
          </section>
          <section className={styles.section}>
            <h3 className={styles.sectionHeader}>{'🎲 Games'}</h3>
            <ul className={styles.sectionContent}>
              <li className={styles.sectionContentItem}>
                Traditional rogue-likes have been more in my focus recently,
                with{' '}
                <a href="https://store.steampowered.com/app/811320/Jupiter_Hell/">
                  Jupiter Hell
                </a>{' '}
                being the most addictive. I am not at the point in my life when
                I can dive really deep into wikis or even into perfecting
                game-play, but it is a nice step back into challenge while
                allowing me to step out of the game if I need to handle the
                kids.
              </li>
              <li className={styles.sectionContentItem}>
                The physical copy of{' '}
                <a href="https://boardgamegeek.com/boardgame/338960/slay-the-spire-the-board-game">
                  Slay the Spire
                </a>{' '}
                was a nice addition to my board game collection, as well as the
                first single-player board game that I had fun with.
              </li>
            </ul>
          </section>
          <section className={styles.section}>
            <h3 className={styles.sectionHeader}>{'🎨 Creation'}</h3>
            <ul className={styles.sectionContent}>
              <li className={styles.sectionContentItem}>
                Vintage Rotisserie Draft went well this quarter, but I have put
                the quarterly cadence on a hiatus after over 5 years. We are
                still going to play the events, but trying to get the Twitch
                streaming working and not being able to audible if people cannot
                make it was just very stressful.
              </li>
              <li className={styles.sectionContentItem}>
                <a href="https://apps.apple.com/us/app/friends-builder/id1529389123">
                  Friends Builder
                </a>{' '}
                was my first app release! While I enjoyed the experience of
                getting an app out there and able to be used, I feel like the
                end of the experience left me mostly disappointed in all the
                things I could not do rather than happy about having finished
                it. There is still plenty I could add to it, but the effort
                versus the benefit feels like it hard to justify.
              </li>
              <li className={styles.sectionContentItem}>
                I am spending some time making a base for building traditional
                roguelikes (previously I was working on a much more ambitious
                project with a similar ethos called Splinter) that hopefully
                will let me prototype roguelike ideas much faster.
              </li>
            </ul>
          </section>
          <section className={styles.section}>
            <h3 className={styles.sectionHeader}>{'🧠 Thinking About'}</h3>
            <ul className={styles.sectionContent}>
              <li className={styles.sectionContentItem}>
                How to stay focused on projects after the initial luster wears
                off. Whether it is a game I am making, a hobby, or even a video
                game that I want to play, I find that my lack of{' '}
                <a href="https://www.goodreads.com/book/show/27213329-grit">
                  Grit
                </a>{' '}
                has really been holding me back and I want to get better at it.
              </li>
              <li className={styles.sectionContentItem}>
                Continuing my focus on time with the children, particularly
                Rory. It is easy to make sure to go on adventures with Logan
                because he wants to and gives me actual feedback afterwards, but
                it is equally important with Rory even though she is too little
                to be able to express herself.
              </li>
            </ul>
          </section>
        </div>
        <div>
          <p className={styles.lastUpdated}>{'Updated 2024-04-10'}</p>
          <section className={styles.section}>
            <h3 className={styles.sectionHeader}>{'👨‍👩‍👧‍👦 Family'}</h3>
            <ul className={styles.sectionContent}>
              <li className={styles.sectionContentItem}>
                Our family is full of so much excitement and busyness. It feels
                like every day of the week we are getting the kiddos at five
                after their activities, getting dinner, and then rushing to bed.
                I wish I could be spending more chill time with them.
              </li>
              <li className={styles.sectionContentItem}>
                Logan has taken to bike-riding like a fish to water after
                getting a big-kid bike for his fifth birthday. He followed his
                Uncle Tim’s training guide and is flying around parking lots.
                There are still some control issues that make me leery of
                sidewalks, but we are on our way.
              </li>
              <li className={styles.sectionContentItem}>
                We had a wonderful journey out to Valier, IL to view the Solar
                Eclipse this year. My parents, sister with family, and brother
                came down to the home of my friend and we were able to see the
                eclipse from totality. It is truly breathtaking and a
                once-in-a-lifetime event that we have managed to see twice so
                far.
              </li>
            </ul>
            <div className={styles.familyImages}>
              <Image
                alt="Standing in front of a projection of the total solar eclipse"
                height={400}
                src={eclipse}
              />
              <Image
                alt="Logan looking pleased with himself as he rides a bike"
                height={400}
                src={bike}
              />
            </div>
          </section>
          <section className={styles.section}>
            <h3 className={styles.sectionHeader}>{'🧑‍💻 Work'}</h3>
            <ul className={styles.sectionContent}>
              <li className={styles.sectionContentItem}>
                I hit my one-year anniversary at{' '}
                <a href="https://www.opslevel.com/">OpsLevel</a>. It’s going
                well and the constant battle of what is worth doing to make the
                future easier is much harder to make decisions about when you’re
                a Series A start-up. Finding the trade-offs and defaulting to
                trying things with the assumption that a partial feature is
                better than a perfectly scalable feature is a new experience
                that still feels fun.
              </li>
              <li className={styles.sectionContentItem}>
                Tech still feels like the right fit for now, but basically all
                of my interest is either in game-development (which isn’t
                tenable for financial reasons), or in other arenas. There is no
                itch for me to jump careers at the moment, and I don’t even feel
                like I am burnt out, but work has never felt more like a job. My
                default assumption is that this is largely driven by
                remote-culture, since I really struggle to self-fund my
                motivation and generally receive energy from others in the
                workplace.
              </li>
            </ul>
          </section>
          <section className={styles.section}>
            <h3 className={styles.sectionHeader}>{'🍿 Media Consumption'}</h3>
            <ul className={styles.sectionContent}>
              <li className={styles.sectionContentItem}>
                Movie night is going strong, with the highest point for me being{' '}
                <a href="https://www.imdb.com/title/tt14849194/">
                  The Holdovers
                </a>
                , but I have been making a point of watching all of the movies
                from{' '}
                <a href="https://www.orphanedentertainment.com/">
                  Orphaned Entertainment
                </a>{' '}
                as well, which has exposed me to many more old films that are
                largely not great, but are always interesting.
              </li>
              <li className={styles.sectionContentItem}>
                Tons of books have been read, but nothing really stood out as
                incredible so far.{' '}
                <a href="https://www.goodreads.com/challenges/11634">
                  GoodReads
                </a>{' '}
                says that I have read 28 so far this year, but very few five
                stars. Some high school classics that I had never read did
                manage to break through however:{' '}
                <a href="https://www.goodreads.com/book/show/76620.Watership_Down">
                  Watership Down
                </a>
                , and{' '}
                <a href="https://www.goodreads.com/book/show/2165.The_Old_Man_and_the_Sea">
                  The Old Man and the Sea
                </a>
                .
              </li>
            </ul>
          </section>
          <section className={styles.section}>
            <h3 className={styles.sectionHeader}>{'🎲 Games'}</h3>
            <ul className={styles.sectionContent}>
              <li className={styles.sectionContentItem}>
                <a href="https://www.marvelsnap.com/">Marvel Snap</a> is
                probably still my primary game at this point, which still
                carries the same feeling of obligation rather than true
                immersion that often comes in mobile games. I did fall deeply in
                love with the casual game{' '}
                <a href="https://store.steampowered.com/app/1161580/Hardspace_Shipbreaker/">
                  Hardspace: Shipbreaker
                </a>{' '}
                as well, and got all the trophies before setting it down.
              </li>
              <li className={styles.sectionContentItem}>
                Lego has been a good time, both individually (doing a big Star
                Trek set) and working with Logan on it, since he likes the
                parallel play and doing a big set ”together”.
              </li>
            </ul>
          </section>
          <section className={styles.section}>
            <h3 className={styles.sectionHeader}>{'🎨 Creation'}</h3>
            <ul className={styles.sectionContent}>
              <li className={styles.sectionContentItem}>
                I finished the series of{' '}
                <a href="https://www.youtube.com/@stlotus/shorts">
                  YouTube Shorts
                </a>{' '}
                for Vintage Rotisserie Draft, which was fun, but definitely
                burnt me out in the end. We have another big event coming up in
                May, so that will be a good time, but trying to get the daily
                content out is such a chore.
              </li>
              <li className={styles.sectionContentItem}>
                I succumbed to temptation and threw together a game for the{' '}
                <a href="https://7drl.com/">7 Day RogueLike</a> after saying
                that I probably would not do it.{' '}
                <a href="https://katerberg.github.io/ric-rac-rogue/">
                  Ric-Rac-Rogue
                </a>{' '}
                was a lot of fun to build, and even though people are in
                conflict over whether it is a roguelike, I still love it. I wish
                I had more time for it like always, but it is probably the one I
                feel I should be most proud of finishing.
              </li>
            </ul>
          </section>
          <section className={styles.section}>
            <h3 className={styles.sectionHeader}>{'🧠 Thinking About'}</h3>
            <ul className={styles.sectionContent}>
              <li className={styles.sectionContentItem}>
                Due to weird health stuff with my sinuses, most of my time has
                been more about surviving than actually contemplating life. I
                look forward to having a healthy body that lets me go to bed
                without feeling completely exhausted, and hopefully by then,
                life will stay at the same slower pace where I can do things
                more mindfully.
              </li>
              <li className={styles.sectionContentItem}>
                The biggest focus of my past quarter has been about being
                intentional with the kids. Finding a way to ensure that every
                night we do something together and that I am not just dropping
                them to their own things while I am on my phone near them, but
                instead spending time engaging with them has been my goal. This
                particularly matters with Rory, since she is little and it is
                much easier to play with Logan since he engages more.
              </li>
            </ul>
          </section>
        </div>
        <div>
          <p className={styles.lastUpdated}>{'Updated 2023-12-25'}</p>
          <section className={styles.section}>
            <h3 className={styles.sectionHeader}>{'👨‍👩‍👧‍👦 Family'}</h3>
            <ul className={styles.sectionContent}>
              <li className={styles.sectionContentItem}>
                Everyone is back to relatively good health and we are exploring
                the world together. I’ve been trying to prioritize going outside
                with the kiddos more while we have the opportunity, which led us
                to going up in the Arch.
              </li>
              <li className={styles.sectionContentItem}>
                One of the things I try to focus on with little kiddos is how to
                ensure that we don’t just get focused on the day to day, but can
                actually build traditions that they will remember. One of the
                biggest for me is cultural heritage, particularly around St
                Nicholas Day, where we put out wooden shoes and fill them with
                oranges and treats for the kids.
              </li>
              <li className={styles.sectionContentItem}>
                For Christmas this year, we were separated from each other since
                Neem and Ororo hung back in St Louis, while Logan and I went to
                Grand Rapids to spend the holiday with my parents. It was so
                nice to share some of my holiday traditions with him, but also
                sad to miss Christmas with the girls.
              </li>
            </ul>
            <div className={styles.familyImages}>
              <Image
                alt="All of us crowded into the Arch Pod"
                height={300}
                src={arch}
              />
              <Image
                alt="Rory looking contemplatively at wooden shoes with carrots in them"
                height={300}
                src={shoes}
              />
            </div>
          </section>
          <section className={styles.section}>
            <h3 className={styles.sectionHeader}>{'🧑‍💻 Work'}</h3>
            <ul className={styles.sectionContent}>
              <li className={styles.sectionContentItem}>
                I am working at OpsLevel, where it’s a pretty relaxed culture
                while still exposing me to enough new things that I am having a
                good time. Since we don’t have a lot of the other things I am
                used to, such as a design department a strong engineering
                culture of design-focus, it has been a fun journey trying to
                identify what things are actually useful to fight for, and what
                things are not needed yet. Series A start-ups are hard!
              </li>
              <li className={styles.sectionContentItem}>
                The longer I spend doing front-end focused work in start-up
                culture, the more I wonder if I would be better suited to either
                diversify into a more generic skill-set (which would probably be
                better if I want to be a first-four engineer) or slide back
                towards Fortune 500 companies. It is hard to feel like you are
                helping your co-workers as much as you could be while still
                staying specialized.
              </li>
            </ul>
          </section>
          <section className={styles.section}>
            <h3 className={styles.sectionHeader}>{'🍿 Media Consumption'}</h3>
            <ul className={styles.sectionContent}>
              <li className={styles.sectionContentItem}>
                Movies have still had a hold on my heart, with weekly movie
                nights which range from the silly with{' '}
                <a href="https://www.imdb.com/title/tt0091064/">The Fly</a>, to
                the serious with{' '}
                <a href="https://www.imdb.com/title/tt0054997/">The Hustler</a>.
              </li>
              <li className={styles.sectionContentItem}>
                Reading snuck up on me, which I discovered when I realized that
                I have{' '}
                <a href="https://www.goodreads.com/user/show/55606019-mark-katerberg">
                  read seventy books this year
                </a>
                . Some of the stand-outs were{' '}
                <a href="https://www.goodreads.com/book/show/55660735-hero-of-two-worlds">
                  a biography of Lafayette
                </a>
                , a{' '}
                <a href="https://www.goodreads.com/book/show/40109367-dare-to-lead">
                  leadership book
                </a>
                , and{' '}
                <a href="https://www.goodreads.com/book/show/60531406-tress-of-the-emerald-sea">
                  one of the latest by Sanderson
                </a>
                .
              </li>
            </ul>
          </section>
          <section className={styles.section}>
            <h3 className={styles.sectionHeader}>{'🎲 Games'}</h3>
            <ul className={styles.sectionContent}>
              <li className={styles.sectionContentItem}>
                I have largely been spending my time gaming on casual mobile
                games, such as Marvel Snap and Pokemon Go. Although I have done
                well with them, they alternate between boredom-fillers and
                chores. I look forward to the kiddos being old enough to spend
                more time without direct involvement so I can play games that
                require more continual focus, but I genuinely love that I am
                choosing to spend my time focusing on them instead of trying to
                play games.
              </li>
              <li className={styles.sectionContentItem}>
                Table-top role playing games are even more of a time commitment,
                but I recently ran{' '}
                <a href="https://www.pennydragon.games/product/the-fight-before-christmas-pdf/">
                  a holiday one-off
                </a>{' '}
                that was fun because it was low-stakes and let me still get a
                little invested with a group of friends.
              </li>
            </ul>
          </section>
          <section className={styles.section}>
            <h3 className={styles.sectionHeader}>{'🎨 Creation'}</h3>
            <ul className={styles.sectionContent}>
              <li className={styles.sectionContentItem}>
                My free time creating has been largely focused on{' '}
                <a href="https://stlotus.org">St Lotus</a> this quarter. Not
                only did I play in an event in Chicago (where we soundly
                defeated them), but I also ran another event in St Louis. On top
                of all of that, I have started creating{' '}
                <a href="https://www.youtube.com/@stlotus/shorts">
                  YouTube Shorts
                </a>{' '}
                in consumable one minute videos talking about Vintage Rotisserie
                Draft which has recaptured some of the fun for it for me.
              </li>
              <li className={styles.sectionContentItem}>
                Since I know that the next{' '}
                <a href="https://7drl.com/">7 Day RogueLike</a> is happening in
                March, I’ve been toying around with a framework for making a
                traditional roguelike. It’s still more chore than fun at this
                point, but my hope is that if I get it to a useable state, it
                will make the game development during the game-jam more focused
                on mechanics and fun than on rote-coding.
              </li>
            </ul>
          </section>
          <section className={styles.section}>
            <h3 className={styles.sectionHeader}>{'🧠 Thinking About'}</h3>
            <ul className={styles.sectionContent}>
              <li className={styles.sectionContentItem}>
                How to keep energy more consistent with the kids. I love that I
                can spend time with them and devote my life to making theirs as
                good as I can, but in my worst moments, I know that I am being
                dismissive. I don’t want to flood them with affection one moment
                and stand-off the next, so I’m thinking of ways to remind them
                that I love them even when I can’t deal with them in those
                moments.
              </li>
              <li className={styles.sectionContentItem}>
                What work means when it isn’t something I want to be the focal
                point for my life. I still care about helping others, but it
                isn’t something that I want to spend the majority of my waking
                day thinking about, and finding a way to accept that it likely
                means letting some aspirations go is a thing I am dealing with.
              </li>
            </ul>
          </section>
        </div>
        <p className={styles.lastUpdated}>{'Updated 2023-08-06'}</p>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'👨‍👩‍👧‍👦 Family'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              Our family has had a lot of sickness, but nothing critical. As I
              write this, I am on antibiotics and steroids for some kind of
              tonsil infection, Logan is on antibiotics for strep, and Rory is
              on antibiotics for an ear infection. Neem is healthy as a change
              of pace.
            </li>
            <li className={styles.sectionContentItem}>
              Rory loves exploring and has been insistent on having books read
              to her, which is adorable. Her favorite is{' '}
              <a href="https://www.goodreads.com/book/show/18812587-the-itsy-bitsy-pumpkin">
                The Itsy Bitsy Pumpkin
              </a>
              .
            </li>
          </ul>
          <div className={styles.familyImages}>
            <Image
              alt="Mark and Logan on a tandem bike"
              height={300}
              src={biking}
            />
            <Image
              alt="The whole family in our pokemon-themed halloween costumes"
              height={300}
              src={halloween}
            />
          </div>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🧑‍💻 Work'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              I am still working at{' '}
              <a href="https://opslevel.com">{'OpsLevel'}</a>. It’s been a good
              experience and although start-ups are chaotic, I feel like I’m
              finding a solid balance that lets me leave work after work.
            </li>
            <li className={styles.sectionContentItem}>
              The struggle to upgrade old libraries is still ongoing, but I have
              merged over 60 upgrades so far, and there are only a few more big
              ones left before we are fully caught up.
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🍿 Media Consumption'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              We are struggling to keep up with all of the Marvel and Star Wars
              shows and movies, but so far have managed to do so. None of them
              have stood out enough to mention, but all are still enjoyable
              enough.
            </li>
            <li className={styles.sectionContentItem}>
              The weekly movie night has been helpful in expanding tastes and I
              have found a few that I really enjoyed, including{' '}
              <a href="https://www.imdb.com/title/tt0027125/">Top Hat</a>, which
              has moments that are on-par with the Marx Brothers, as well as
              more serious films like{' '}
              <a href="https://www.imdb.com/title/tt11813216">
                The Banshees of Inisherin
              </a>
              .
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🎲 Games'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              <a href="https://en.wikipedia.org/wiki/Spider-Man_2_(2023_video_game)">
                Spider-Man 2
              </a>{' '}
              came out! It was exactly what I wanted from the game, which added
              enough interesting pieces from the first two without losing the
              core fun of the game. I finished it in about 16 hours and then hit
              100% achievements by 26 hours. It was a little shorter than I
              hoped for, but I expect DLCs to add more soon.
            </li>
            <li className={styles.sectionContentItem}>
              Marvel Snap has ramped up a little, but it’s more of a time-filler
              now that I removed TikTok from my phone. That has been a really
              nice trade-off and I feel like I am spending more of my time
              fully-conscious.
            </li>
            <li className={styles.sectionContentItem}>
              <a href="https://stlotus.org">St Lotus</a> has our yearly city
              championship against Chicago, and we managed to pull out a 10-6
              victory to claim the title. This was a fun experience for a few
              reasons:
              <ul>
                <li className={styles.sectionContentItem}>
                  We got to travel to Chicago to play on their turf.
                </li>
                <li className={styles.sectionContentItem}>
                  I actually got to play because I was not just focused on
                  hosting.
                </li>
                <li className={styles.sectionContentItem}>
                  We played a team-draft, which is a format that has largely
                  been unexplored in the rotisserie sphere.
                </li>
                <li className={styles.sectionContentItem}>
                  We put in a lot of preparation time to get ready for the
                  tournament, and it payed off with a win!
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🎨 Creation'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              I spent a lot of time building tooling for St Lotus, including
              migrating the website to <a href="https://nextjs.org/">Next JS</a>{' '}
              and adding a few sections for top cards and bulk deck builder.
            </li>
            <li className={styles.sectionContentItem}>
              My brain is already spinning on what to build for the next 7-Day
              Roguelike. I want to build a more traditional roguelike, but don’t
              want to spend as much time on the tooling and boring things as I
              did the first time. This has led to me getting some thoughts down
              into a repository called{' '}
              <a href="https://github.com/katerberg/splinter">Splinter</a> that
              hopefully can make the process less painful.
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🧠 Thinking About'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              How to function when it seems like our family is always in some
              stage of sickness.
            </li>
            <li className={styles.sectionContentItem}>
              I really value family, both extended and immediate. I have been
              feeling incredibly grateful to be close with my immediate family
              and want to make sure my kids feel the same way. My parents are
              coming to visit for Thanksgiving and we get to go visit Michigan
              for Christmas, so my cup is feeling very full with love right now.
            </li>
          </ul>
        </section>
        <p className={styles.lastUpdated}>{'Updated 2023-08-06'}</p>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'👨‍👩‍👧‍👦 Family'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              Rory is getting bigger by the day. She loves eating more than any
              kid I’ve seen, and she just took her first steps at 13 months.
            </li>
            <li className={styles.sectionContentItem}>
              Logan is so full of love and excitement. He is really proud of
              biking on his balance bike and he loves giving advice on how to
              best play{' '}
              <a href="https://store.steampowered.com/app/646570/Slay_the_Spire/">
                Slay the Spire
              </a>
              .
            </li>
            <li className={styles.sectionContentItem}>
              Neem is still loving her job and is doing her best to live in the
              moment. It has been amazing for us to take trips, some together
              and some separate which have helped us remember that work isn’t
              everything.
            </li>
          </ul>
          <div className={styles.familyImages}>
            <Image
              alt="Neem and the kids smiling while Logan waves with his stuffed animal and Rory stands."
              height={400}
              src={kittyWave}
            />
          </div>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🧑‍💻 Work'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              I am still working at{' '}
              <a href="https://opslevel.com">{'OpsLevel'}</a>, which has a great
              balance of passion for delivering features quickly (driven by
              actually being in a competitive market, which is something new to
              me compared to previous companies) and ensuring that the company
              has enough stability in people and product to be able to exist in
              five years.
            </li>
            <li className={styles.sectionContentItem}>
              After getting my feet under me by doing some basic feature work, I
              have largely been hopping in to help speed big time-sensitive
              feature lifts across the line, or upgrading long-neglected
              libraries that have been slowing the team down for years.
            </li>
            <li className={styles.sectionContentItem}>
              There was a fun journey about{' '}
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP">
                Content Security Policies
              </a>{' '}
              that I should probably write a blog post about. It started with a
              simple request to pass a security audit and ended up yak-shaving
              into a month long debacle where I learned a ton.
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🍿 Media Consumption'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              I was saddened to finish{' '}
              <a href="https://www.imdb.com/title/tt5788792/">
                The Marvelous Mrs. Maisel
              </a>
              , which was such an immersive visual time capsule. I don’t think
              it was the greatest show of all time, but it is such a fun watch
              for people into comedy or who enjoyed the aesthetics of{' '}
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP">
                Mad Men
              </a>
              .
            </li>
            <li className={styles.sectionContentItem}>
              I went to Barbenheimer, which was like Peanut Butter and
              Chocolate, two great tastes that get better due to fantastic
              advertising. Because it’s likely the last big blockbuster due to
              the WGA/SAG-AFTRA strike (which is a well-warranted strike), I
              wanted to see these in theaters and it was well worth it.
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🎲 Games'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              With the pending release of{' '}
              <a href="https://en.wikipedia.org/wiki/Spider-Man_2_(2023_video_game)">
                Spider-Man 2
              </a>
              , I went back and finished getting 100% of the trophies for the
              previous two games. They are such immersive wonderful games that I
              hope the new one can live up to.
            </li>
            <li className={styles.sectionContentItem}>
              Magic: the Gathering Arena and Marvel Snap still have a little bit
              of time on my mobile game rotation, but there hasn’t been anything
              that has really bitten me recently so I’m hoping that I can find
              an RPG to fall into. Gaming with children requires such short
              attention spans that anything complex seems impossible right now.
            </li>
            <li className={styles.sectionContentItem}>
              Slightly different than my normal games, but a group of us have
              been meeting up to play outdoor Racquetball every week and it has
              been a wonderful reminder than physical activity can actually be
              fun and competitive without being emotionally exhausting.
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🎨 Creation'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              Neem got me a gift of a solo hotel for Father’s Day (after I did
              the same for Mother’s Day (it’s probably a new tradition)), and in
              the hotel, I built a{' '}
              <a href="https://files.mastodonapp.uk/media_attachments/files/110/640/029/438/880/795/original/8d1fa48889cdc3b5.jpeg">
                large Voyager set
              </a>{' '}
              that is trying to find a permanent home on our shelves at home.
            </li>
            <li className={styles.sectionContentItem}>
              There’s a game-like concept I’m toying around with around
              Tessellations, but most of my off-work development time has been
              beefing up a lot of things for{' '}
              <a href="https://stlotus.org">St Lotus</a> recently.
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🧠 Thinking About'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              What is family and how to keep engaged with it without spiraling
              into a cycle of over-investment and then frustration and
              exhaustion. Parenting either feels like a race to the bottom or a
              massive set of impossible expectations a lot of the time.
            </li>
            <li className={styles.sectionContentItem}>
              How to compress more things into digestible chunks. Life feels
              like it operates in 10 minute increments, so I am trying to think
              about how to make things I want to do fall into those chunks. This
              largely means that I tend to stop doing creative endeavors because
              those are things that I need “mulling” time for.
            </li>
          </ul>
        </section>
        <p className={styles.lastUpdated}>{'Updated 2023-02-13'}</p>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'👨‍👩‍👧‍👦 Family'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              {
                'Logan has been in “Magic Class” which means that we are seeing lots of cute magic tricks, like 3-Card Monte.'
              }
            </li>
            <li className={styles.sectionContentItem}>
              Rory is pulling herself up on furniture and is eating up a storm.
              She loves calling Logan “bra-bra” and getting tossed in the air.
            </li>
            <li className={styles.sectionContentItem}>
              {
                'Neem is happy at work, but has been going through a lot of breathing difficulties including a partially collapsed lung and four cases of bronchitis this year so far.'
              }
            </li>
          </ul>
          <div className={styles.familyImages}>
            <Image
              alt="Neem and Logan reading a Spider-Man book in his room"
              height={400}
              src={neemLogan}
            />
            <Image
              alt="Rory smiling and being adorable outside"
              height={400}
              src={rory}
            />
          </div>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🧑‍💻 Work'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              {'I started a new job at '}
              <a href="https://opslevel.com">{'OpsLevel'}</a>
              {
                ', a dev-ops start-up that helps companies manage micro-services by creating a developer portal with visibility into architecture.'
              }
            </li>
            <li className={styles.sectionContentItem}>
              {
                'I’m primarily spinning up on the existing application, but starting to do my traditional task of adding all of the linting rules.'
              }
            </li>
            <li className={styles.sectionContentItem}>
              {'This company uses '}
              <a href="https://vuejs.org/">Vue</a>
              {
                ', so while I am spinning up on that right now for the first time, I anticipate helping with an upgrade to the latest version in the next few months.'
              }
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🍿 Media Consumption'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              {'My comfort television is re-runs of '}
              <a href="https://www.imdb.com/title/tt0112178/">
                {'Star Trek: Voyager'}
              </a>
              {' and it’s a common post-child-bedtime event recently.'}
            </li>
            <li className={styles.sectionContentItem}>
              {'I rated a book as 5⭐️ on '}
              <a href="https://www.goodreads.com/user/show/55606019-mark-katerberg">
                {'Good Reads'}
              </a>
              {' which is quite rare for me. '}
              <a href="https://www.goodreads.com/book/show/55660735-hero-of-two-worlds">
                {'Hero of Two Worlds'}
              </a>
              {
                ' was a great dive into the life of Lafayette which I would heartily recommend to anyone who enjoyed Hamilton and wants to know more about the life of a legend of two revolutions.'
              }
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🎲 Games'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              {'I am nearing the end of '}
              <a href="https://www.playstation.com/en-us/games/the-last-of-us-part-ii/">
                {'The Last of Us Part Two'}
              </a>
              {
                '. It’s brutally violent, but some of the best storytelling I’ve ever seen. I am loving it and feel so conflicted about all of the characters.'
              }
            </li>
            <li className={styles.sectionContentItem}>
              {
                'Board games have been on the back burner mostly, but I am excited about a few Kickstarters that are finishing up soon, including Slay the Spire.'
              }
            </li>
            <li className={styles.sectionContentItem}>
              {
                'I finally managed to get a lead on my MTG White Whale: a Summer Magic version of Serra Angel, which would complete my collection of every printing of this card.'
              }
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🎨 Creation'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              <a href="https://swordswithfriends.org">
                {'Swords With Friends'}
              </a>
              {
                ' was my entry to the 7 Day Roguelike contest. It is far from a perfect game, but I’m happy that I was able to get a mobile game working in that amount of time, particularly with the difficulty of multi-player.'
              }
            </li>
            <li className={styles.sectionContentItem}>
              {'I built '}
              <a href="https://katerberg.github.io/Ormos">{'Ormos'}</a>
              {
                ' as a fun challenge to build a tool for a local MTG shop owner who wanted a tool to help identify which binders to look through for a list of cards. It wasn’t the most technically challenging project, but it was fun to have an easy one just come together relatively easily. It was written entirely without frameworks, which made it a special challenge as well.'
              }
            </li>
            <li className={styles.sectionContentItem}>
              {
                'Logan and I have been building Lego, recently has worked on a NASA '
              }
              <a href="https://www.lego.com/en-us/product/olivia-s-space-academy-41713">
                {'Space Academy'}
              </a>
              {'.'}
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🧠 Thinking About'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              {
                'How to stay connected with friends without seeing them all of the time? It is pretty easy for me to feel close to people while spending lots of time with people, but harder with long-distance or just busy-life folks.'
              }
            </li>
            <li className={styles.sectionContentItem}>
              {
                'What parts of fitness are exciting for me? Since my bicycle accident, I’ve been biking again and really enjoy commuting places, but have a hard time exercising for the sake of exercise. I want to be healthy but know myself well enough to not try to do things I don’t enjoy since I don’t maintain them.'
              }
            </li>
          </ul>
        </section>
        <p className={styles.lastUpdated}>{'Updated 2023-02-13'}</p>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'👨‍👩‍👧‍👦 Family'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              {
                'Neem is at Stitch Fix and survived the recent lay-offs. Everyone has been sick a lot, so she has been spending time as the comfort parent more than we would like.'
              }
            </li>
            <li className={styles.sectionContentItem}>
              {
                'Rory is getting huge. It is wild to see her grown and develop a personality. She can sit up and play, and is resisting our encouragement to crawl.'
              }
            </li>
            <li className={styles.sectionContentItem}>
              {
                'Logan is almost 4 and is pumped for his Lego birthday party. He loves Forsyth School and constantly asks for play dates.'
              }
            </li>
            <li className={styles.sectionContentItem}>
              {
                'Neem is going to Cancun twice in a month, once on a girls’ trip and once with the family. We’re going on a trip together to DC in a few weeks too.'
              }
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🧑‍💻 Work'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              {
                'I got hit by the lay-offs at Stitch Fix so I’m spending time taking care of kids while figuring out longer term plans.'
              }
            </li>
            <li className={styles.sectionContentItem}>
              {
                'Interviewing is exhausting, and doubly so because I am mostly just responding to people reaching out to me rather than looking for a company I really want so far.'
              }
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🍿 Media Consumption'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              {
                'The Last Of Us has been amazing. I really think it is better than the game so far, which is surprising since that one is the best narrative game I have played.'
              }
            </li>
            <li className={styles.sectionContentItem}>
              {'Movie Night on Thursdays have been really rewarding. '}
              <a href="https://www.imdb.com/title/tt7653254/">
                {'Marriage Story'}
              </a>
              {
                ' was one of the best films I have seen and it was so painful to watch that I never want to think of it again.'
              }
            </li>
            <li className={styles.sectionContentItem}>
              {'My '}
              <a href="https://www.goodreads.com/user/show/55606019-mark-katerberg">
                {'GoodReads'}
              </a>
              {
                ' shows that I am 7 books ahead of my goal of 30 books for the year. Audiobooks have been amazing to let me read things I would not normally find the time for but value.'
              }
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🎲 Games'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              <a href="https://stlotus.org">
                {'Vintage Rotisserie Draft at St Lotus'}
              </a>
              {
                ' came back and went really well. We have a “Friends and Family” one in a week that will be lower stakes but more fun since I get to play in it.'
              }
            </li>
            <li className={styles.sectionContentItem}>
              {'I got to play '}
              <a href="https://boardgamegeek.com/boardgame/90137/blood-bowl-team-manager-card-game">
                {'Blood Bowl Team Manager'}
              </a>
              {
                ' at the Super Bowl and it was a fun quick deck builder. I want to dig more into that genre since it feels like it is less awkward than drafting while still having variance I enjoy.'
              }
            </li>
            <li className={styles.sectionContentItem}>
              {
                'The PS5 is still for Fortnite, but at least I am replaying The Last Of Us.'
              }
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🎨 Creation'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              {
                '7 Day RogueLike is coming up fast. We are ditching the social media game since it was too hard to make a Roguelike and we are just going to try a mobile multiplayer Rogue instead.'
              }
            </li>
            <li className={styles.sectionContentItem}>
              {
                'I have been doing a few little games that are mostly to try out things I don’t know well such as mobile interfaces, but '
              }
              <Link href="/web-dev">{'Sigils'}</Link>
              {' has been fun to build so far.'}
            </li>
            <li className={styles.sectionContentItem}>
              {
                'Logan and I wrote a tiny book from stapled paper this weekend. It is fun to watch him create and be a part of that process with him, even if it is for little stuff that won’t last other than in memories.'
              }
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🧠 Thinking About'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              {
                'What work success means to me still. Money is feeling like a constraint to my career right now, since most of the interesting companies pay worse than the amount that I set as my lower-bound. I am worried that I am boxing myself out of work happiness.'
              }
            </li>
            <li className={styles.sectionContentItem}>
              {
                'How to do more than survive with kids. When they are sick or in crisis, it is easy to constantly tell myself that “I just need to get through this” but I realize that I am sleepwalking through life with that defense.'
              }
            </li>
          </ul>
        </section>

        <p className={styles.lastUpdated}>{'Updated 2022-11-21'}</p>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'👨‍👩‍👧‍👦 Family'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              {
                'Neem is doing great, but none of us are sleeping well with all the life transitions. She is still doing iOS dev at Stitch Fix.'
              }
            </li>
            <li className={styles.sectionContentItem}>
              {
                'Rory was born on June 19. Everything went great and we are learning to deal with a little less sleep.'
              }
            </li>
            <li className={styles.sectionContentItem}>
              {
                'Logan is 3 (and a half according to him) and loving his time at Forsyth School.'
              }
            </li>
            <li className={styles.sectionContentItem}>
              {
                'We are stopping at 2 kids, but cannot wait to go on adventures together. Next big one is Cancun in March.'
              }
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🧑‍💻 Work'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              {'I am doing front-end platform work at Stitch Fix.'}
            </li>
            <li className={styles.sectionContentItem}>
              {
                'My primary focus is on the design system, but I am playing with NextJS quite a bit too.'
              }
            </li>
            <li className={styles.sectionContentItem}>
              {
                'We are spending time on migrating to a monorepo using TurboRepo.'
              }
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🍿 Media Consumption'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              {
                'We are mostly keeping up on all the Marvel and Star Wars shows. Andor has been lagging a little, but we will catch up.'
              }
            </li>
            <li className={styles.sectionContentItem}>
              <a href="https://www.imdb.com/title/tt1751634">{'The Sandman'}</a>
              {' was fascinating and a great adaptation of the book.'}
            </li>
            <li className={styles.sectionContentItem}>
              {
                'I have been posting all of my movie reviews on Mastodon. The one I think is a must-watch is '
              }
              <a href="https://www.imdb.com/title/tt0025748/">
                {'The Scarlet Pimpernel (1934).'}
              </a>
            </li>
            <li className={styles.sectionContentItem}>
              {
                'TikTok and Youtube take up too much time in my life and I am actively working on replacing them with things like podcasts.'
              }
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🎲 Games'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              <a href="https://stlotus.org">
                {'Vintage Rotisserie Draft at St Lotus'}
              </a>
              {
                ' has gotten bumped a few times due to my health, but is hopefully coming back in 2023.'
              }
            </li>
            <li className={styles.sectionContentItem}>
              <a href="https://www.marvelsnap.com/">{'Marvel Snap'}</a>
              {
                ' has been dominating my phone gaming time. It is addictive and quick, with a good progression system.'
              }
            </li>
            <li className={styles.sectionContentItem}>
              {
                'Board games haven’t been much of a focus recently, but I am probably going to spend some time on '
              }
              <a href="https://www.fantasyflightgames.com/en/products/marvel-champions-the-card-game/">
                {'Marvel Champions LCG'}
              </a>
              {' as winter comes.'}
            </li>
            <li className={styles.sectionContentItem}>
              {
                'I got a PS5 and mostly use it to play Fortnite, but I was pretty excited to get the Spider-Gwen outfit.'
              }
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🎨 Creation'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              {
                'Planning is already happening for the next 7 Day RogueLike. Very likely it will be out of zeitgeist by then, but a game where you run a social media company sounds like fun.'
              }
            </li>
            <li className={styles.sectionContentItem}>
              {
                'My lack of SQL knowledge is really stalling some work I want to do on St Lotus card rankings.'
              }
            </li>
            <li className={styles.sectionContentItem}>
              {
                'Logan and I have been building Legos together. We have completed a Saturn V rocket and the Space Shuttle Discovery. Also many Logan-designed cars that he loves.'
              }
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionHeader}>{'🧠 Thinking About'}</h3>
          <ul className={styles.sectionContent}>
            <li className={styles.sectionContentItem}>
              {
                'What work success means to me. Moving up a career ladder or down in hours is no longer my goal at work, so figuring out what it is has been taking time.'
              }
            </li>
            <li className={styles.sectionContentItem}>
              {
                'How to raise children. I know a lot of my personal values, but finding what to pass on to my children and how takes a lot of thought and planning.'
              }
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default Now;
