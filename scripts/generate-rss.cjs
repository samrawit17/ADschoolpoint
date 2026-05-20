const fs = require('fs');
const path = require('path');

const blogFilePath = path.join(__dirname, '../src/pages/Blog.tsx');
const rssFilePath = path.join(__dirname, '../public/rss.xml');

// Read Blog.tsx to extract the array
const blogContent = fs.readFileSync(blogFilePath, 'utf-8');

// Use a simple regex to match the blogPosts array
const arrayMatch = blogContent.match(/const blogPosts = (\[[\s\S]*?\]);/);

if (!arrayMatch) {
  console.error("Could not find blogPosts array in Blog.tsx");
  process.exit(1);
}

try {
  // Safe evaluation since it's our own code
  const blogPosts = eval(arrayMatch[1]);
  
  const siteUrl = 'https://afrodigital.co'; // Update with your actual domain
  
  const rssItems = blogPosts.map(post => {
    // Basic date parsing (e.g., "March 5, 2026")
    const pubDate = new Date(post.date).toUTCString();
    
    return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${pubDate}</pubDate>
      <category>${post.category}</category>
      <author>${post.author}</author>
    </item>`;
  }).join('');
  
  const pubDateRSS = new Date().toUTCString();
  
  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AfroDigital Blog</title>
    <link>${siteUrl}</link>
    <description>Empowering Your Digital Presence through expert insights, web development tutorials, and tech news in Ethiopia.</description>
    <language>en-us</language>
    <lastBuildDate>${pubDateRSS}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    ${rssItems}
  </channel>
</rss>`;

  fs.writeFileSync(rssFilePath, rssFeed);
  console.log(`Successfully generated RSS feed with ${blogPosts.length} items to ${rssFilePath}`);
} catch (error) {
  console.error("Error generating RSS feed:", error);
}