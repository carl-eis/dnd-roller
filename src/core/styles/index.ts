import { css } from 'styled-components';

export const MEDIA_SIZES = {
  desktop: 992,
  tablet: 768,
  phone: 576,
};

interface IMediaQueries {
  desktop: (...args) => string;
  tablet: (...args) => string;
  phone: (...args) => string;
}

const initialAccumulator = {
  desktop: (...args) => '',
  tablet: (...args) => '',
  phone: (...args) => '',
};

// Iterate through the sizes and create a media template
export const media: IMediaQueries = Object.keys(MEDIA_SIZES).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${MEDIA_SIZES[label] / 16}em) {
      ${(css as any)(...args)}
    }
  `;
  return acc;
}, initialAccumulator);
