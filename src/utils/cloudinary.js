export function getCloudinaryImageURL({
  cloudName = "djqwbrus3",
  publicId,
  width = null,
  height = null,
  quality = "auto",
  format = "auto",
  crop = "scale",
  transformations = "",
}) {
  const base = `https://res.cloudinary.com/${cloudName}/image/upload`;

  const parts = [];
  if (width) parts.push(`w_${width}`);
  if (height) parts.push(`h_${height}`);
  if (quality) parts.push(`q_${quality}`);
  if (format) parts.push(`f_${format}`);
  if (crop) parts.push(`c_${crop}`);
  if (transformations) parts.push(transformations);

  const transformString = parts.join(",");

  return `${base}/${transformString}/${publicId}`;
}
