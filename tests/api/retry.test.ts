import nock from "nock";
import { IsomorphicFetchHttpLibrary } from "../../packages/datadog-api-client-common/http/isomorphic-fetch";
import {
    RequestContext,
    HttpMethod,
  } from "../../packages/datadog-api-client-common/";


describe("IsomorphicFetchHttpLibrary Retry Test", () => {

    const fakeRequestContext = new RequestContext("https://retry.test.com",HttpMethod.GET);

  beforeAll(() => {
    nock.disableNetConnect(); // Prevent actual network requests
  });

  afterAll(() => {
    nock.cleanAll();
    nock.enableNetConnect(); // Re-enable network connections
  });

  it("should retry based on response code and retry settings", async () => {
    // Set up your mock responses
    nock("https://retry.test.com")
      .get("/")
      .reply(429, {}, { 'x-ratelimit-reset': '1' })

      .get("/")
      .reply(429, {}, { 'x-ratelimit-reset': '1' }) 

      .get("/")
      .reply(429, {}, { 'x-ratelimit-reset': '1' })

      .get("/")
      .reply(200, { data: "success" }); // Simulate successful response

    const httpLibrary = new IsomorphicFetchHttpLibrary();
    httpLibrary['sleep'] = jest.fn(() => Promise.resolve());

    httpLibrary.enableRetry = true;
    httpLibrary.maxRetries = 3;
    httpLibrary.backoffBase = 2;
    httpLibrary.backoffMultiplier = 2;

    const response = await httpLibrary.send(fakeRequestContext);

    expect(response.httpStatusCode).toBe(200);

    expect(nock.isDone()).toBe(true); // Ensure all expected requests were made
  });
});
