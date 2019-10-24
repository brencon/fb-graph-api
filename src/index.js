'use strict';
const rp = require('request-promise');

const fbURL = 'https://graph.facebook.com';

const _OPTIONS = {
  method: 'GET',
  rejectUnauthorized: false,
  insecure: true
};

async function getPage(pageAccessToken, pageId) {
  _OPTIONS.url = `${fbURL}/${pageId}?fields=rating_count,id,name,picture,about,privacy_info_url,cover&access_token=${pageAccessToken}`;
  const data = await rp(_OPTIONS)
    .then(function(res) {
      return res;
    })
    .catch(function(err) {
      return err.response.body;
    });
  return { page: JSON.parse(data) };
}


async function getPosts(pageAccessToken, pageId) {
  _OPTIONS.url = `${fbURL}/${pageId}/posts?fields=likes.summary(true),message,story,created_time&access_token=${pageAccessToken}`;
  const data = await rp(_OPTIONS)
    .then(function(res) {
      return { page: { posts: JSON.parse(res).data } };
    })
    .catch(function(err) {
      return { page: JSON.parse(err.response.body) };
    });
  return data;
}

async function getRatings(pageAccessToken, pageId) {
  _OPTIONS.url = `${fbURL}/${pageId}/ratings?fields=reviewer,review_text,recommendation_type,rating,has_review,has_rating,created_time&access_token=${pageAccessToken}`;
  const data = await rp(_OPTIONS)
    .then(function(res) {
      return { page: { ratings: JSON.parse(res).data } };
    })
    .catch(function(err) {
      return { page: JSON.parse(err.response.body) };
    });
  return data;
};

module.exports = {
  getPage: async function(pageAccessToken, pageId) {
    const data = await getPage(pageAccessToken, pageId);
    return data;
  },
  getPosts: async function(pageAccessToken, pageId) {
    const data = await getPosts(pageAccessToken, pageId);
    return data;
  },
  getRatings: async function(pageAccessToken, pageId) {
    const data = await getRatings(pageAccessToken, pageId);
    return data;
  }
};