import React from 'react';
import { notFound } from 'next/navigation';

import { loadBlogPost as _loadBlogPost } from './file-helpers';

export const loadBlogPost = React.cache(async function(slug) {
    try {
        return await _loadBlogPost(slug);
    }
    catch {
        notFound();
    }
});
