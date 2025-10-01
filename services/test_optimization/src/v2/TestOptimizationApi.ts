import {
  ApiException,
  BaseAPIRequestFactory,
  BaseServerConfiguration,
  buildUserAgent,
  Configuration,
  createConfiguration,
  deserialize,
  getPreferredMediaType,
  HttpMethod,
  isBrowser,
  logger,
  normalizeMediaType,
  parse,
  RequiredError,
  RequestContext,
  ResponseContext,
  serialize,
  ServerConfiguration,
  stringify,
  applySecurityAuthentication,
} from "@datadog/datadog-api-client";

import { TypingInfo } from "./models/TypingInfo";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { FlakyTest } from "./models/FlakyTest";
import { FlakyTestsSearchPageOptions } from "./models/FlakyTestsSearchPageOptions";
import { FlakyTestsSearchRequest } from "./models/FlakyTestsSearchRequest";
import { FlakyTestsSearchRequestAttributes } from "./models/FlakyTestsSearchRequestAttributes";
import { FlakyTestsSearchRequestData } from "./models/FlakyTestsSearchRequestData";
import { FlakyTestsSearchResponse } from "./models/FlakyTestsSearchResponse";
import { version } from "../version";

export class TestOptimizationApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("test-optimization", version);
    }
  }
  public async searchFlakyTests(
    body?: FlakyTestsSearchRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["TestOptimizationApi.v2.searchFlakyTests"]
    ) {
      throw new Error(
        "Unstable operation 'searchFlakyTests' is disabled. Enable it by setting `configuration.unstableOperations['TestOptimizationApi.v2.searchFlakyTests'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/test/flaky-test-management/tests";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "TestOptimizationApi.v2.searchFlakyTests",
      TestOptimizationApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "FlakyTestsSearchRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }
}

export class TestOptimizationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to searchFlakyTests
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchFlakyTests(
    response: ResponseContext,
  ): Promise<FlakyTestsSearchResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: FlakyTestsSearchResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FlakyTestsSearchResponse",
      ) as FlakyTestsSearchResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: FlakyTestsSearchResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "FlakyTestsSearchResponse",
        "",
      ) as FlakyTestsSearchResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface TestOptimizationApiSearchFlakyTestsRequest {
  /**
   * @type FlakyTestsSearchRequest
   */
  body?: FlakyTestsSearchRequest;
}

export class TestOptimizationApi {
  private requestFactory: TestOptimizationApiRequestFactory;
  private responseProcessor: TestOptimizationApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: TestOptimizationApiRequestFactory,
    responseProcessor?: TestOptimizationApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new TestOptimizationApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new TestOptimizationApiResponseProcessor();
  }

  /**
   * List endpoint returning flaky tests from Flaky Test Management. Results are paginated.
   * @param param The request object
   */
  public searchFlakyTests(
    param: TestOptimizationApiSearchFlakyTestsRequest = {},
    options?: Configuration,
  ): Promise<FlakyTestsSearchResponse> {
    const requestContextPromise = this.requestFactory.searchFlakyTests(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchFlakyTests(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of searchFlakyTests returning a generator with all the items.
   */
  public async *searchFlakyTestsWithPagination(
    param: TestOptimizationApiSearchFlakyTestsRequest = {},
    options?: Configuration,
  ): AsyncGenerator<FlakyTest> {
    let pageSize = 10;
    if (param.body === undefined) {
      param.body = new FlakyTestsSearchRequest();
    }
    if (param.body.data === undefined) {
      param.body.data = new FlakyTestsSearchRequestData();
    }
    if (param.body.data.attributes === undefined) {
      param.body.data.attributes = new FlakyTestsSearchRequestAttributes();
    }
    if (param.body.data.attributes.page === undefined) {
      param.body.data.attributes.page = new FlakyTestsSearchPageOptions();
    }
    if (param.body.data.attributes.page.limit !== undefined) {
      pageSize = param.body.data.attributes.page.limit;
    }
    param.body.data.attributes.page.limit = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.searchFlakyTests(
        param.body,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.searchFlakyTests(responseContext);
      const responseData = response.data;
      if (responseData === undefined) {
        break;
      }
      const results = responseData;
      for (const item of results) {
        yield item;
      }
      if (results.length < pageSize) {
        break;
      }
      const cursorMeta = response.meta;
      if (cursorMeta === undefined) {
        break;
      }
      const cursorMetaPagination = cursorMeta.pagination;
      if (cursorMetaPagination === undefined) {
        break;
      }
      const cursorMetaPaginationNextPage = cursorMetaPagination.nextPage;
      if (cursorMetaPaginationNextPage === undefined) {
        break;
      }

      param.body.data.attributes.page.cursor = cursorMetaPaginationNextPage;
    }
  }
}
