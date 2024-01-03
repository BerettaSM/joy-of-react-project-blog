import RSS from 'rss';
import fs from 'fs/promises';

import { loadBlogPost, readDirectory } from './src/helpers/file-helpers.js';

import { BLOG_TITLE, BLOG_DESCRIPTION } from './src/constants.js';

(async function () {
    const feed = new RSS({
        title: BLOG_TITLE,
        description: BLOG_DESCRIPTION,
        site_url: 'http://localhost:3000/',
        feed_url: 'http://localhost:3000/rss.xml',
    });
    const posts = [];
    const filenames = await readDirectory('content');
    for (const filename of filenames) {
        const slug = filename.slice(0, -4);
        const post = await loadBlogPost(slug);
        posts.push({ ...post, slug });
    }
    posts.sort((p1, p2) => (p1.publishedOn < p2.publishedOn ? 1 : -1));
    for (const post of posts) {
        feed.item({
            title: post.frontmatter.title,
            description: post.frontmatter.abstract,
            url: `http://localhost:3000/${post.slug}`,
            guid: `http://localhost:3000/${post.slug}`,
            date: post.frontmatter.publishedOn,
        });
    }
    await fs.writeFile('./public/rss.xml', feed.xml(), { encoding: 'utf-8' });
    console.log('RSS XML files generated.');
})();
