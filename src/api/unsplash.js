import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      // 'Client-ID 2b98c1afb0aed3b3d94a1866bdc3ac013d21a0c86d236a0fee32355c331c0296',
      'Client-ID HGj5Cc8LmUi92tui4tB1dZzqLK7TF_7zFGKz8NxJDKQ',
  },
});
