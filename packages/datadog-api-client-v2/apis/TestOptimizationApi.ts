import {
  BaseAPIRequestFactory,
  RequiredError,
} from "../../datadog-api-client-common/baseapi";
import {
  Configuration,
  applySecurityAuthentication,
} from "../../datadog-api-client-common/configuration";
import {
  RequestContext,
  HttpMethod,
  ResponseContext,
} from "../../datadog-api-client-common/http/http";

import { logger } from "../../../logger";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "../../datadog-api-client-common/exception";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { FlakyTest } from "../models/FlakyTest";
import { FlakyTestsSearchPageOptions } from "../models/FlakyTestsSearchPageOptions";
import { FlakyTestsSearchRequest } from "../models/FlakyTestsSearchRequest";
import { FlakyTestsSearchRequestAttributes } from "../models/FlakyTestsSearchRequestAttributes";
import { FlakyTestsSearchRequestData } from "../models/FlakyTestsSearchRequestData";
import { FlakyTestsSearchResponse } from "../models/FlakyTestsSearchResponse";
import { UpdateFlakyTestsRequest } from "../models/UpdateFlakyTestsRequest";
import { UpdateFlakyTestsResponse } from "../models/UpdateFlakyTestsResponse";

export class TestOptimizationApiRequestFactory extends BaseAPIRequestFactory {
  public async searchFlakyTests(
    body?: FlakyTestsSearchRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'searchFlakyTests'");
    if (!_config.unstableOperations["v2.searchFlakyTests"]) {
      throw new Error("Unstable operation 'searchFlakyTests' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/test/flaky-test-management/tests";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.TestOptimizationApi.searchFlakyTests")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "FlakyTestsSearchRequest", ""),
      contentType
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

  public async updateFlakyTests(
    body: UpdateFlakyTestsRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateFlakyTests'");
    if (!_config.unstableOperations["v2.updateFlakyTests"]) {
      throw new Error("Unstable operation 'updateFlakyTests' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateFlakyTests");
    }

    // Path Params
    const localVarPath = "/api/v2/test/flaky-test-management/tests";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.TestOptimizationApi.updateFlakyTests")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "UpdateFlakyTestsRequest", ""),
      contentType
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
    response: ResponseContext
  ): Promise<FlakyTestsSearchResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: FlakyTestsSearchResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FlakyTestsSearchResponse"
      ) as FlakyTestsSearchResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: FlakyTestsSearchResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FlakyTestsSearchResponse",
        ""
      ) as FlakyTestsSearchResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateFlakyTests
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateFlakyTests(
    response: ResponseContext
  ): Promise<UpdateFlakyTestsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: UpdateFlakyTestsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UpdateFlakyTestsResponse"
      ) as UpdateFlakyTestsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: UpdateFlakyTestsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UpdateFlakyTestsResponse",
        ""
      ) as UpdateFlakyTestsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface TestOptimizationApiSearchFlakyTestsRequest {
  /**
   * @type FlakyTestsSearchRequest
   */
  body?: FlakyTestsSearchRequest;
}

export interface TestOptimizationApiUpdateFlakyTestsRequest {
  /**
   * @type UpdateFlakyTestsRequest
   */
  body: UpdateFlakyTestsRequest;
}

export class TestOptimizationApi {
  private requestFactory: TestOptimizationApiRequestFactory;
  private responseProcessor: TestOptimizationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: TestOptimizationApiRequestFactory,
    responseProcessor?: TestOptimizationApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new TestOptimizationApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new TestOptimizationApiResponseProcessor();
  }

  /**
   * List endpoint returning flaky tests from Flaky Test Management. Results are paginated.
   *
   * The response includes comprehensive test information including:
   * - Test identification and metadata (module, suite, name)
   * - Flaky state and categorization
   * - First and last flake occurrences (timestamp, branch, commit SHA)
   * - Test execution statistics from the last 7 days (failure rate)
   * - Pipeline impact metrics (failed pipelines count, total lost time)
   * - Complete status change history (optional, ordered from most recent to oldest)
   *
   * Set `include_history` to `true` in the request to receive the status change history for each test.
   * History is disabled by default for better performance.
   *
   * Results support filtering by various facets including service, environment, repository, branch, and test state.
   * @param param The request object
   */
  public searchFlakyTests(
    param: TestOptimizationApiSearchFlakyTestsRequest = {},
    options?: Configuration
  ): Promise<FlakyTestsSearchResponse> {
    const requestContextPromise = this.requestFactory.searchFlakyTests(
      param.body,
      options
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
    options?: Configuration
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
        options
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

  /**
   * Update the state of multiple flaky tests in Flaky Test Management.
   * @param param The request object
   */
  public updateFlakyTests(
    param: TestOptimizationApiUpdateFlakyTestsRequest,
    options?: Configuration
  ): Promise<UpdateFlakyTestsResponse> {
    const requestContextPromise = this.requestFactory.updateFlakyTests(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateFlakyTests(responseContext);
        });
    });
  }
}
