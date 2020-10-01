import React from 'react';
import { useContent } from '../hooks';

export default function Browse() {
  // Stories and Films.
  const { series } = useContent('series');
  const { films } = useContent('films');
  // Slideshare.

  return <p>test</p>;
}
