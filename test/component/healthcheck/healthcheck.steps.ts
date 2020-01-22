import chai from 'chai';
import rp from 'request-promise';
import { v4 } from 'uuid';
import { Before, BeforeAll, Then, When } from 'cucumber';
import { startApp } from '../../../src/app';
import config from '../../../src/config';

chai.should();

BeforeAll(async () => {
  try {
    await startApp();
  } catch (err) {
    throw err;
  }
});

Before(async function(scenario) {
  const corrId = v4();
  console.log('\nScenario: ', scenario.pickle.name);
  console.log('Correlation ID: ', corrId);
  this.headers = { ['x-correlation-id']: corrId };
});

When('I call {string} {string}', async function(method, path) {
  this.response = await requestGenerator(this, method, path);
});

Then('I should get the expected status code {int}', async function(statusCode) {
  await this.response.statusCode.should.equal(statusCode);
});

export async function requestGenerator(thys: any, method: string, path: string) {
  const response = await rp({
    body: thys.body,
    form: thys.form,
    headers: { ...thys.headers },
    json: true,
    method,
    qs: thys.qs,
    resolveWithFullResponse: true,
    simple: false,
    url: `${config.baseUrl}:${config.port}${path}`,
  });
  return response;
}
