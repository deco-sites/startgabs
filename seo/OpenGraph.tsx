
export function OpenGraph(title: string, description: string, image: string, url: string) {
  return (
    <div>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
    </div>
  );
}
