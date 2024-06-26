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

function Now() {
  return (
    <>
      <h1>{'What I am up to now'}</h1>
      <p>
        <a href="https://nownownow.com/about">
          {'This is a ”now page“, and you should make one too.'}
        </a>
      </p>
      <p className={styles.lastUpdated}>{'Updated 2024-04-10'}</p>
      <section className={styles.section}>
        <h3 className={styles.sectionHeader}>{'👨‍👩‍👧‍👦 Family'}</h3>
        <ul className={styles.sectionContent}>
          <li className={styles.sectionContentItem}>
            Our family is full of so much excitement and busyness. It feels like
            every day of the week we are getting the kiddos at five after their
            activities, getting dinner, and then rushing to bed. I wish I could
            be spending more chill time with them.
          </li>
          <li className={styles.sectionContentItem}>
            Logan has taken to bike-riding like a fish to water after getting a
            big-kid bike for his fifth birthday. He followed his Uncle Tim’s
            training guide and is flying around parking lots. There are still
            some control issues that make me leery of sidewalks, but we are on
            our way.
          </li>
          <li className={styles.sectionContentItem}>
            We had a wonderful journey out to Valier, IL to view the Solar
            Eclipse this year. My parents, sister with family, and brother came
            down to the home of my friend and we were able to see the eclipse
            from totality. It is truly breathtaking and a once-in-a-lifetime
            event that we have managed to see twice so far.
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
            <a href="https://www.opslevel.com/">OpsLevel</a>. It’s going well
            and the constant battle of what is worth doing to make the future
            easier is much harder to make decisions about when you’re a Series A
            start-up. Finding the trade-offs and defaulting to trying things
            with the assumption that a partial feature is better than a
            perfectly scalable feature is a new experience that still feels fun.
          </li>
          <li className={styles.sectionContentItem}>
            Tech still feels like the right fit for now, but basically all of my
            interest is either in game-development (which isn’t tenable for
            financial reasons), or in other arenas. There is no itch for me to
            jump careers at the moment, and I don’t even feel like I am burnt
            out, but work has never felt more like a job. My default assumption
            is that this is largely driven by remote-culture, since I really
            struggle to self-fund my motivation and generally receive energy
            from others in the workplace.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h3 className={styles.sectionHeader}>{'🍿 Media Consumption'}</h3>
        <ul className={styles.sectionContent}>
          <li className={styles.sectionContentItem}>
            Movie night is going strong, with the highest point for me being{' '}
            <a href="https://www.imdb.com/title/tt14849194/">The Holdovers</a>,
            but I have been making a point of watching all of the movies from{' '}
            <a href="https://www.orphanedentertainment.com/">
              Orphaned Entertainment
            </a>{' '}
            as well, which has exposed me to many more old films that are
            largely not great, but are always interesting.
          </li>
          <li className={styles.sectionContentItem}>
            Tons of books have been read, but nothing really stood out as
            incredible so far.{' '}
            <a href="https://www.goodreads.com/challenges/11634">GoodReads</a>{' '}
            says that I have read 28 so far this year, but very few five stars.
            Some high school classics that I had never read did manage to break
            through however:{' '}
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
            <a href="https://www.marvelsnap.com/">Marvel Snap</a> is probably
            still my primary game at this point, which still carries the same
            feeling of obligation rather than true immersion that often comes in
            mobile games. I did fall deeply in love with the casual game{' '}
            <a href="https://store.steampowered.com/app/1161580/Hardspace_Shipbreaker/">
              Hardspace: Shipbreaker
            </a>{' '}
            as well, and got all the trophies before setting it down.
          </li>
          <li className={styles.sectionContentItem}>
            Lego has been a good time, both individually (doing a big Star Trek
            set) and working with Logan on it, since he likes the parallel play
            and doing a big set ”together”.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h3 className={styles.sectionHeader}>{'🎨 Creation'}</h3>
        <ul className={styles.sectionContent}>
          <li className={styles.sectionContentItem}>
            I finished the series of{' '}
            <a href="https://www.youtube.com/@stlotus/shorts">YouTube Shorts</a>{' '}
            for Vintage Rotisserie Draft, which was fun, but definitely burnt me
            out in the end. We have another big event coming up in May, so that
            will be a good time, but trying to get the daily content out is such
            a chore.
          </li>
          <li className={styles.sectionContentItem}>
            I succumbed to temptation and threw together a game for the{' '}
            <a href="https://7drl.com/">7 Day RogueLike</a> after saying that I
            probably would not do it.{' '}
            <a href="https://katerberg.github.io/ric-rac-rogue/">
              Ric-Rac-Rogue
            </a>{' '}
            was a lot of fun to build, and even though people are in conflict
            over whether it is a roguelike, I still love it. I wish I had more
            time for it like always, but it is probably the one I feel I should
            be most proud of finishing.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h3 className={styles.sectionHeader}>{'🧠 Thinking About'}</h3>
        <ul className={styles.sectionContent}>
          <li className={styles.sectionContentItem}>
            Due to weird health stuff with my sinuses, most of my time has been
            more about surviving than actually contemplating life. I look
            forward to having a healthy body that lets me go to bed without
            feeling completely exhausted, and hopefully by then, life will stay
            at the same slower pace where I can do things more mindfully.
          </li>
          <li className={styles.sectionContentItem}>
            The biggest focus of my past quarter has been about being
            intentional with the kids. Finding a way to ensure that every night
            we do something together and that I am not just dropping them to
            their own things while I am on my phone near them, but instead
            spending time engaging with them has been my goal. This particularly
            matters with Rory, since she is little and it is much easier to play
            with Logan since he engages more.
          </li>
        </ul>
      </section>
      <hr />
      <h2>{'History'}</h2>
      <div className={styles.history}>
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
              Grand Rapids to spend the holiday with my parents. It was so nice
              to share some of my holiday traditions with him, but also sad to
              miss Christmas with the girls.
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
              good time. Since we don’t have a lot of the other things I am used
              to, such as a design department a strong engineering culture of
              design-focus, it has been a fun journey trying to identify what
              things are actually useful to fight for, and what things are not
              needed yet. Series A start-ups are hard!
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
              Movies have still had a hold on my heart, with weekly movie nights
              which range from the silly with{' '}
              <a href="https://www.imdb.com/title/tt0091064/">The Fly</a>, to
              the serious with{' '}
              <a href="https://www.imdb.com/title/tt0054997/">The Hustler</a>.
            </li>
            <li className={styles.sectionContentItem}>
              Reading snuck up on me, which I discovered when I realized that I
              have{' '}
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
              well with them, they alternate between boredom-fillers and chores.
              I look forward to the kiddos being old enough to spend more time
              without direct involvement so I can play games that require more
              continual focus, but I genuinely love that I am choosing to spend
              my time focusing on them instead of trying to play games.
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
              <a href="https://stlotus.org">St Lotus</a> this quarter. Not only
              did I play in an event in Chicago (where we soundly defeated
              them), but I also ran another event in St Louis. On top of all of
              that, I have started creating{' '}
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
              point, but my hope is that if I get it to a useable state, it will
              make the game development during the game-jam more focused on
              mechanics and fun than on rote-coding.
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
              point for my life. I still care about helping others, but it isn’t
              something that I want to spend the majority of my waking day
              thinking about, and finding a way to accept that it likely means
              letting some aspirations go is a thing I am dealing with.
            </li>
          </ul>
        </section>
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
