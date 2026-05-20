import { Helmet } from "react-helmet-async";

const SITE_NAME = "SchoolPoint";
const SITE_URL = "https://schoolpoint.com";
const DEFAULT_IMAGE = `${SITE_URL}/PRAD.png`;

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string[];
  noindex?: boolean;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const toAbsoluteUrl = (value?: string) => {
  if (!value) return SITE_URL;
  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  return `${SITE_URL}${value.startsWith("/") ? value : `/${value}`}`;
};

const Seo = ({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  keywords,
  noindex = false,
  schema,
}: SeoProps) => {
  const canonical = toAbsoluteUrl(path);
  const imageUrl = toAbsoluteUrl(image);
  const fullTitle = `${title} | ${SITE_NAME}`;
  const schemaItems = Array.isArray(schema) ? schema : schema ? [schema] : [];

  return (
    <Helmet>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={canonical} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {keywords?.length ? <meta name="keywords" content={keywords.join(", ")} /> : null}
      {schemaItems.map((item, index) => (
        <script
          key={`${canonical}-schema-${index}`}
          type="application/ld+json"
        >
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;