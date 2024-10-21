import placeholder from '../assets/placeholder.webp'
export const getCroppedImageUrl = (url: string) => {
  if(!url) return placeholder;
  const target = "media/";
  const source = url.indexOf(target) + target.length;
  return url.slice(0, source) + "crop/600/400/" + url.slice(source);
};
