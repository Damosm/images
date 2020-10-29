import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID HGj5Cc8LmUi92tui4tB1dZzqLK7TF_7zFGKz8NxJDKQ',
  },
});
