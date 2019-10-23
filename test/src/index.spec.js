'use strict';

const expect = require('chai').expect;
const npmms = require('../../index');

const _PAGE_ACCESS_TOKEN = 'EAAUggZAfCJdcBAP8WWwL8mQqpQZCO2zpj7H0YitJQIQZAjkKRctVcVTYszqnn9NWqs3GiRott10ZAoHbwyOpBumEhdQPjppAF787Annz5t5rLT8xwz65gr4qvWgUQcE0ZBMRQWgiiByaZBpYKLE8Dj7ZAVWoSLPtT1F0oSP1hlTfQZDZD';
const _PAGE_ID = '1618039481631017';

describe('node-fb-graph', function() {
  it('return all posts for a given business page', async function() {
    const result = await npmms.getPosts(_PAGE_ACCESS_TOKEN, _PAGE_ID);
    console.log(JSON.stringify(result.page.posts));
    expect(result.page.posts.length).to.be.greaterThan(0);
    expect(result.page.posts[0].likes.summary.total_count).to.be.greaterThan(-1);
  });
  it('return all ratings for a given business page', async function() {
    const result = await npmms.getRatings(_PAGE_ACCESS_TOKEN, _PAGE_ID);
    expect(result.page.ratings.length).to.be.greaterThan(0);
  });
});