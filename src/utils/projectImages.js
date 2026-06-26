const images = import.meta.glob("../assets/projets/*.{jpg,jpeg,png,svg,webp}", {
  eager: true,
  import: "default",
});

export function getProjectImage(filename) {
  return images[`../assets/projets/${filename}`];
}
