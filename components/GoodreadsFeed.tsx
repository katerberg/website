import React from 'react';
import styles from '../styles/GoodreadsFeed.module.scss';
import { GOODREADS_PROFILE_URL } from '../lib/getGoodreadsBooks';
import type { GoodreadsBook, GoodreadsBooks } from '../lib/getGoodreadsBooks';

// Goodreads stores read dates as UTC midnight, so format in UTC to keep the day.
const dateFormat = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'medium',
  timeZone: 'UTC',
});

type GoodreadsFeedProperties = {
  books: GoodreadsBooks;
};

function Book({ book }: { book: GoodreadsBook }) {
  return (
    <li className={styles.book}>
      <a href={book.url}>
        {/* eslint-disable-next-line @next/next/no-img-element -- Remote images, static export */}
        <img alt="" src={book.coverUrl} />
      </a>
      <div>
        <a className={styles.title} href={book.url}>
          {book.title}
        </a>
        <div>{book.author}</div>
        {book.rating > 0 ? (
          <div
            aria-label={`Rated ${book.rating} out of 5`}
            className={styles.rating}
            role="img"
          >
            {'★'.repeat(book.rating) + '☆'.repeat(5 - book.rating)}
          </div>
        ) : null}
        {book.readAt ? (
          <div className={styles.date}>
            {`Finished ${dateFormat.format(new Date(book.readAt))}`}
          </div>
        ) : null}
      </div>
    </li>
  );
}

function Shelf({ title, books }: { title: string; books: GoodreadsBook[] }) {
  if (books.length === 0) {
    return null;
  }
  return (
    <>
      <h3>{title}</h3>
      <ul>
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </ul>
    </>
  );
}

function GoodreadsFeed({ books }: GoodreadsFeedProperties) {
  if (books.currentlyReading.length === 0 && books.recentlyRead.length === 0) {
    return null;
  }

  return (
    <section className={styles.feed}>
      <h2>{'Reading'}</h2>
      <Shelf title={'Currently reading'} books={books.currentlyReading} />
      <Shelf title={'Recently finished'} books={books.recentlyRead} />
      <a href={GOODREADS_PROFILE_URL}>{'More on Goodreads →'}</a>
    </section>
  );
}

export default GoodreadsFeed;
