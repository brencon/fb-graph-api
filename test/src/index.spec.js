'use strict';

const chance = require('chance').Chance();
const expect = require('chai').expect;
const npmms = require('../../index');

const _PAGE_ACCESS_TOKEN = 'EAAUggZAfCJdcBAP8WWwL8mQqpQZCO2zpj7H0YitJQIQZAjkKRctVcVTYszqnn9NWqs3GiRott10ZAoHbwyOpBumEhdQPjppAF787Annz5t5rLT8xwz65gr4qvWgUQcE0ZBMRQWgiiByaZBpYKLE8Dj7ZAVWoSLPtT1F0oSP1hlTfQZDZD';
const _PAGE_ID = '1618039481631017';

const _PAGE_ACCESS_TOKEN_INVALID = chance.apple_token();
const _PAGE_ID_INVALID = chance.string({ length: 16, pool: '0123456789' });

describe('node-fb-graph', function() {
  it('return business page details', async function() {
    const result = await npmms.getPage(_PAGE_ACCESS_TOKEN, _PAGE_ID);
    expect(result.page.id).to.not.be.undefined;
    expect(result.page.name).to.not.be.undefined;
  });
  it('return error for business page details', async function() {
    const result = await npmms.getPage(_PAGE_ACCESS_TOKEN_INVALID, _PAGE_ID_INVALID);
    expect(result.page.error).to.not.be.undefined;
    expect(result.page.error.message).to.not.be.undefined;
  });  
  it('return all posts for a given business page', async function() {
    const result = await npmms.getPosts(_PAGE_ACCESS_TOKEN, _PAGE_ID);
    expect(result.page.posts.length).to.be.greaterThan(0);
    expect(result.page.posts[0].likes.summary.total_count).to.be.greaterThan(-1);
  });
  it('return error for all posts for a given business page', async function() {
    const result = await npmms.getPosts(_PAGE_ACCESS_TOKEN_INVALID, _PAGE_ID_INVALID);
    expect(result.page.error).to.not.be.undefined;
    expect(result.page.error.message).to.not.be.undefined;
  });  
  it('return all ratings for a given business page', async function() {
    const result = await npmms.getRatings(_PAGE_ACCESS_TOKEN, _PAGE_ID);
    expect(result.page.ratings.length).to.be.greaterThan(0);
  });
  it('return error for all ratings for a given business page', async function() {
    const result = await npmms.getRatings(_PAGE_ACCESS_TOKEN_INVALID, _PAGE_ID_INVALID);
    expect(result.page.error).to.not.be.undefined;
    expect(result.page.error.message).to.not.be.undefined;
  });  
});