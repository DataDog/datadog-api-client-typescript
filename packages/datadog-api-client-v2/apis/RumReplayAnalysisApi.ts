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
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { ReplayAnalysisIssueResponse } from "../models/ReplayAnalysisIssueResponse";
import { ReplayAnalysisIssueSessionsResponse } from "../models/ReplayAnalysisIssueSessionsResponse";
import { ReplayAnalysisIssuesResponse } from "../models/ReplayAnalysisIssuesResponse";

export class RumReplayAnalysisApiRequestFactory extends BaseAPIRequestFactory {
  public async getReplayAnalysisIssue(
    issueId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getReplayAnalysisIssue'");
    if (!_config.unstableOperations["v2.getReplayAnalysisIssue"]) {
      throw new Error(
        "Unstable operation 'getReplayAnalysisIssue' is disabled"
      );
    }

    // verify required parameter 'issueId' is not null or undefined
    if (issueId === null || issueId === undefined) {
      throw new RequiredError("issueId", "getReplayAnalysisIssue");
    }

    // Path Params
    const localVarPath = "/api/v2/replay/analysis/issues/{issue_id}".replace(
      "{issue_id}",
      encodeURIComponent(String(issueId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumReplayAnalysisApi.getReplayAnalysisIssue")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listReplayAnalysisIssues(
    filterApplicationId?: string,
    filterSeverity?: string,
    filterViewName?: string,
    filterIssueCategory?: string,
    sort?: string,
    pageNumber?: number,
    pageSize?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listReplayAnalysisIssues'");
    if (!_config.unstableOperations["v2.listReplayAnalysisIssues"]) {
      throw new Error(
        "Unstable operation 'listReplayAnalysisIssues' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/replay/analysis/issues";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumReplayAnalysisApi.listReplayAnalysisIssues")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filterApplicationId !== undefined) {
      requestContext.setQueryParam(
        "filter[application_id]",
        ObjectSerializer.serialize(filterApplicationId, "string", ""),
        ""
      );
    }
    if (filterSeverity !== undefined) {
      requestContext.setQueryParam(
        "filter[severity]",
        ObjectSerializer.serialize(filterSeverity, "string", ""),
        ""
      );
    }
    if (filterViewName !== undefined) {
      requestContext.setQueryParam(
        "filter[view_name]",
        ObjectSerializer.serialize(filterViewName, "string", ""),
        ""
      );
    }
    if (filterIssueCategory !== undefined) {
      requestContext.setQueryParam(
        "filter[issue_category]",
        ObjectSerializer.serialize(filterIssueCategory, "string", ""),
        ""
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "string", ""),
        ""
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        ObjectSerializer.serialize(pageNumber, "number", ""),
        ""
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", ""),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listReplayAnalysisIssueSessions(
    issueId: string,
    sort?: string,
    pageNumber?: number,
    pageSize?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listReplayAnalysisIssueSessions'");
    if (!_config.unstableOperations["v2.listReplayAnalysisIssueSessions"]) {
      throw new Error(
        "Unstable operation 'listReplayAnalysisIssueSessions' is disabled"
      );
    }

    // verify required parameter 'issueId' is not null or undefined
    if (issueId === null || issueId === undefined) {
      throw new RequiredError("issueId", "listReplayAnalysisIssueSessions");
    }

    // Path Params
    const localVarPath =
      "/api/v2/replay/analysis/issues/{issue_id}/sessions".replace(
        "{issue_id}",
        encodeURIComponent(String(issueId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumReplayAnalysisApi.listReplayAnalysisIssueSessions")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "string", ""),
        ""
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        ObjectSerializer.serialize(pageNumber, "number", ""),
        ""
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", ""),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }
}

export class RumReplayAnalysisApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getReplayAnalysisIssue
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getReplayAnalysisIssue(
    response: ResponseContext
  ): Promise<ReplayAnalysisIssueResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ReplayAnalysisIssueResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ReplayAnalysisIssueResponse"
      ) as ReplayAnalysisIssueResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: ReplayAnalysisIssueResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ReplayAnalysisIssueResponse",
        ""
      ) as ReplayAnalysisIssueResponse;
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
   * @params response Response returned by the server for a request to listReplayAnalysisIssues
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listReplayAnalysisIssues(
    response: ResponseContext
  ): Promise<ReplayAnalysisIssuesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ReplayAnalysisIssuesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ReplayAnalysisIssuesResponse"
      ) as ReplayAnalysisIssuesResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: ReplayAnalysisIssuesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ReplayAnalysisIssuesResponse",
        ""
      ) as ReplayAnalysisIssuesResponse;
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
   * @params response Response returned by the server for a request to listReplayAnalysisIssueSessions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listReplayAnalysisIssueSessions(
    response: ResponseContext
  ): Promise<ReplayAnalysisIssueSessionsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ReplayAnalysisIssueSessionsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ReplayAnalysisIssueSessionsResponse"
        ) as ReplayAnalysisIssueSessionsResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: ReplayAnalysisIssueSessionsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ReplayAnalysisIssueSessionsResponse",
          ""
        ) as ReplayAnalysisIssueSessionsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface RumReplayAnalysisApiGetReplayAnalysisIssueRequest {
  /**
   * Unique identifier of the issue.
   * @type string
   */
  issueId: string;
}

export interface RumReplayAnalysisApiListReplayAnalysisIssuesRequest {
  /**
   * Filter issues by application UUID.
   * @type string
   */
  filterApplicationId?: string;
  /**
   * Filter issues by comma-separated severity values. Valid values are `high`, `medium`, and `low`.
   * @type string
   */
  filterSeverity?: string;
  /**
   * Filter issues by comma-separated view names.
   * @type string
   */
  filterViewName?: string;
  /**
   * Filter issues by comma-separated issue categories.
   * @type string
   */
  filterIssueCategory?: string;
  /**
   * Sort order for the results. Valid values are `created_at`, `-created_at`, `severity`, `-severity`, `session_count`, and `-session_count`. Defaults to `-created_at`.
   * @type string
   */
  sort?: string;
  /**
   * Page number for pagination (0-indexed).
   * @type number
   */
  pageNumber?: number;
  /**
   * Number of items per page. Must be between 1 and 100.
   * @type number
   */
  pageSize?: number;
}

export interface RumReplayAnalysisApiListReplayAnalysisIssueSessionsRequest {
  /**
   * Unique identifier of the issue.
   * @type string
   */
  issueId: string;
  /**
   * Sort order for the results. Valid values are `last_seen_at`, `-last_seen_at`, `proximity`, and `-proximity`. Defaults to `-last_seen_at`.
   * @type string
   */
  sort?: string;
  /**
   * Page number for pagination (0-indexed).
   * @type number
   */
  pageNumber?: number;
  /**
   * Number of items per page. Must be between 1 and 100.
   * @type number
   */
  pageSize?: number;
}

export class RumReplayAnalysisApi {
  private requestFactory: RumReplayAnalysisApiRequestFactory;
  private responseProcessor: RumReplayAnalysisApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: RumReplayAnalysisApiRequestFactory,
    responseProcessor?: RumReplayAnalysisApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new RumReplayAnalysisApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new RumReplayAnalysisApiResponseProcessor();
  }

  /**
   * Retrieve details of a specific RUM replay analysis issue by its identifier.
   * @param param The request object
   */
  public getReplayAnalysisIssue(
    param: RumReplayAnalysisApiGetReplayAnalysisIssueRequest,
    options?: Configuration
  ): Promise<ReplayAnalysisIssueResponse> {
    const requestContextPromise = this.requestFactory.getReplayAnalysisIssue(
      param.issueId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getReplayAnalysisIssue(responseContext);
        });
    });
  }

  /**
   * Retrieve a paginated list of RUM replay analysis issues, optionally filtered by application, severity, view name, or issue category.
   * @param param The request object
   */
  public listReplayAnalysisIssues(
    param: RumReplayAnalysisApiListReplayAnalysisIssuesRequest = {},
    options?: Configuration
  ): Promise<ReplayAnalysisIssuesResponse> {
    const requestContextPromise = this.requestFactory.listReplayAnalysisIssues(
      param.filterApplicationId,
      param.filterSeverity,
      param.filterViewName,
      param.filterIssueCategory,
      param.sort,
      param.pageNumber,
      param.pageSize,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listReplayAnalysisIssues(
            responseContext
          );
        });
    });
  }

  /**
   * Retrieve a paginated list of sessions related to a specific RUM replay analysis issue.
   * @param param The request object
   */
  public listReplayAnalysisIssueSessions(
    param: RumReplayAnalysisApiListReplayAnalysisIssueSessionsRequest,
    options?: Configuration
  ): Promise<ReplayAnalysisIssueSessionsResponse> {
    const requestContextPromise =
      this.requestFactory.listReplayAnalysisIssueSessions(
        param.issueId,
        param.sort,
        param.pageNumber,
        param.pageSize,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listReplayAnalysisIssueSessions(
            responseContext
          );
        });
    });
  }
}
