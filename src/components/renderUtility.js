import React from "react";
import Section from 'components/Section';
import Message from 'components/Message';

const renderSection = (title, items, key) => (
  items && items.length > 0 && (
    <Section title={title}>
      {items.map(item => <span key={item.id}>{item[key]}</span>)}
    </Section>
));

export const renderMovieSection = (title, items) => renderSection(title, items, 'title');
export const renderTvSection = (title, items) => renderSection(title, items, 'name');

export const renderNFoundError = (arr) => (
  arr.every(item => item && item.length === 0)
  && <Message text="Nothing found" color="#95a5a6" />
)