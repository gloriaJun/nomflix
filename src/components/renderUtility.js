import React from "react";
import Section from 'components/Section';
import Message from 'components/Message';

export const renderMovieSection = (title, items, Component) => (
  items && items.length > 0 && (
    <Section title={title}>
      {items.map(item =>
        <Component
          key={item.id}
          id={item.id}
          imageUrl={item.poster_path}
          title={item.original_title}
          rating={item.vote_average}
          year={item.release_date.substring(0, 4)}
          isMovie={true}
        />
      )}
    </Section>
  )
);

export const renderTvSection = (title, items, Component) => (
  items && items.length > 0 && (
    <Section title={title}>
      {items.map(item =>
        <Component
          key={item.id}
          id={item.id}
          imageUrl={item.poster_path}
          title={item.original_name}
          rating={item.vote_average}
          year={item.first_air_date.substring(0, 4)}
          isMovie={false}
        />
      )}
    </Section>
  )
);

export const renderNFoundError = (arr) => (
  arr.every(item => item && item.length === 0)
  && <Message text="Nothing found" color="#95a5a6" />
);