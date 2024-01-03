import React from 'react';
import { loadBlogPost as _loadBlogPost } from './file-helpers';

export const loadBlogPost = React.cache(_loadBlogPost);
