'use strict';
const rp = require('request-promise');

const fbURL = 'https://graph.facebook.com';

const _PAGE_ACCESS_TOKEN = 'EAAUggZAfCJdcBAArrTyMt6wRbGy4g9GFuhEtOJvowoAAaBoOounsV7HcQCsq67bhOFZCAv6o2es1aIHPcdrl8vpq7bDnc5SPXFr341VZAM8U6lYACtZAtfa7y2ZBtLy8JD1BNwAkCaQ8qn0fVirXWxHtdaQX76WHfMqdCWnCvG6nacCmWQV9zWZAfZAnifxmsTeDXFVDVn67wZDZD';
const _PAGE_ID = '1618039481631017';

async function getPosts(pageAccessToken, pageId) {
  const options = {
    url: `${fbURL}/${pageId}/posts?fields=likes.summary(true),message,created_time&access_token=${pageAccessToken}`,
    method: 'GET'
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
    method: 'GET'
  };
  const data = await rp.get(options, function(err, res, body) {
    if (err) return err;
    else return body;
  });
  return { page: { ratings: JSON.parse(data).data } };
};

module.exports = {
  getPosts: async function(pageAccessToken, pageId) {
    const data = await getPosts(pageAccessToken, pageId);
    return data;
  },
  getRatings: async function(pageAccessToken, pageId) {
    const data = await getRatings(pageAccessToken, pageId);
    return data;
  }
};