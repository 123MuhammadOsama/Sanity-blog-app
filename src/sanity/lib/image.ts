import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { dataset, projectId } from '../env';

// Create the image URL builder
const builder = createImageUrlBuilder({ projectId, dataset });

// Ensure `urlFor` returns a string URL
export const urlFor = (source: SanityImageSource) => {
  return builder.image(source).url(); // `.url()` generates the string URL
};
