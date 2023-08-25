import nock from "nock";
import { IsomorphicFetchHttpLibrary } from "../../packages/datadog-api-client-common/http/isomorphic-fetch";
import {
    RequestContext,
    HttpMethod,
  } from "../../packages/datadog-api-client-common/";


describe("IsomorphicFetchHttpLibrary Retry Test", () => {

    const fakeRequestContext = new RequestContext("https://retry.test.com",HttpMethod.GET);

  beforeAll(() => {
    nock.disableNetConnect();
  });

  afterAll(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });

  it("should retry based on response code and retry settings", async () => {
    nock("https://retry.test.com")
      .get("/")
      .reply(429, 'Too Many Requests', { 'x-ratelimit-reset' : '1' })

      .get("/")
      .reply(429, 'Too Many Requests', { 'x-ratelimit-reset': '1' }) 

      .get("/")
      .reply(429, 'Too Many Requests', { 'x-ratelimit-reset': '1' })

      .get("/")
      .reply(200, 'OK'); 
    const httpLibrary = new IsomorphicFetchHttpLibrary();
    httpLibrary['sleep'] = jest.fn(() => Promise.resolve());

    httpLibrary.enableRetry = true;
    httpLibrary.maxRetries = 3;
    httpLibrary.backoffBase = 2;
    httpLibrary.backoffMultiplier = 2;

    const response = await httpLibrary.send(fakeRequestContext);

    expect(response.httpStatusCode).toBe(200);
    expect(httpLibrary['sleep']).toHaveBeenCalledTimes(3);
    expect(httpLibrary['sleep']).toHaveBeenCalledWith(2000);
    expect(httpLibrary['sleep']).toHaveBeenCalledWith(4000);
    expect(httpLibrary['sleep']).toHaveBeenCalledWith(8000);
    expect(nock.isDone()).toBe(true); // Ensure all expected requests were made
  });
});
