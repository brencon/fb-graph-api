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
  const options = {
    url: `${fbURL}/${pageId}/posts?fields=likes.summary(true),message,story,created_time&access_token=${pageAccessToken}`,
    method: 'GET',
    rejectUnauthorized: false,
    insecure: true
  };
  const data = await rp.get(options, function(err, res, body) {
    if (err) return err;
    else return body;
  });
  return { page: { posts: JSON.parse(data).data } };
}

async function getRatings(pageAccessToken, pageId) {
  const options = {
    url: `${fbURL}/${pageId}/ratings?fields=reviewer,review_text,recommendation_type,rating,has_review,has_rating,created_time&access_token=${pageAccessToken}`,
    method: 'GET',
    rejectUnauthorized: false,
    insecure: true
  };
  const data = await rp.get(options, function(err, res, body) {
    if (err) return err;
    else return body;
  });
  return { page: { ratings: JSON.parse(data).data } };
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