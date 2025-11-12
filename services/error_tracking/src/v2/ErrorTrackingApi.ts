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
import { GetIssueIncludeQueryParameterItem } from "./models/GetIssueIncludeQueryParameterItem";
import { IssueResponse } from "./models/IssueResponse";
import { IssuesSearchRequest } from "./models/IssuesSearchRequest";
import { IssuesSearchResponse } from "./models/IssuesSearchResponse";
import { IssueUpdateAssigneeRequest } from "./models/IssueUpdateAssigneeRequest";
import { IssueUpdateStateRequest } from "./models/IssueUpdateStateRequest";
import { SearchIssuesIncludeQueryParameterItem } from "./models/SearchIssuesIncludeQueryParameterItem";
import { version } from "../version";

export class ErrorTrackingApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("error-tracking", version);
    }
  }
  public async deleteIssueAssignee(
    issueId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'issueId' is not null or undefined
    if (issueId === null || issueId === undefined) {
      throw new RequiredError("issueId", "deleteIssueAssignee");
    }

    // Path Params
    const localVarPath =
      "/api/v2/error-tracking/issues/{issue_id}/assignee".replace(
        "{issue_id}",
        encodeURIComponent(String(issueId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ErrorTrackingApi.v2.deleteIssueAssignee",
      ErrorTrackingApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getIssue(
    issueId: string,
    include?: Array<GetIssueIncludeQueryParameterItem>,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'issueId' is not null or undefined
    if (issueId === null || issueId === undefined) {
      throw new RequiredError("issueId", "getIssue");
    }

    // Path Params
    const localVarPath = "/api/v2/error-tracking/issues/{issue_id}".replace(
      "{issue_id}",
      encodeURIComponent(String(issueId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ErrorTrackingApi.v2.getIssue",
      ErrorTrackingApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(
          include,
          TypingInfo,
          "Array<GetIssueIncludeQueryParameterItem>",
          "",
        ),
        "csv",
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

  public async searchIssues(
    body: IssuesSearchRequest,
    include?: Array<SearchIssuesIncludeQueryParameterItem>,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "searchIssues");
    }

    // Path Params
    const localVarPath = "/api/v2/error-tracking/issues/search";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ErrorTrackingApi.v2.searchIssues",
      ErrorTrackingApi.operationServers,
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

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(
          include,
          TypingInfo,
          "Array<SearchIssuesIncludeQueryParameterItem>",
          "",
        ),
        "csv",
      );
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "IssuesSearchRequest", ""),
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

  public async updateIssueAssignee(
    issueId: string,
    body: IssueUpdateAssigneeRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'issueId' is not null or undefined
    if (issueId === null || issueId === undefined) {
      throw new RequiredError("issueId", "updateIssueAssignee");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateIssueAssignee");
    }

    // Path Params
    const localVarPath =
      "/api/v2/error-tracking/issues/{issue_id}/assignee".replace(
        "{issue_id}",
        encodeURIComponent(String(issueId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ErrorTrackingApi.v2.updateIssueAssignee",
      ErrorTrackingApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
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
      serialize(body, TypingInfo, "IssueUpdateAssigneeRequest", ""),
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

  public async updateIssueState(
    issueId: string,
    body: IssueUpdateStateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'issueId' is not null or undefined
    if (issueId === null || issueId === undefined) {
      throw new RequiredError("issueId", "updateIssueState");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateIssueState");
    }

    // Path Params
    const localVarPath =
      "/api/v2/error-tracking/issues/{issue_id}/state".replace(
        "{issue_id}",
        encodeURIComponent(String(issueId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ErrorTrackingApi.v2.updateIssueState",
      ErrorTrackingApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
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
      serialize(body, TypingInfo, "IssueUpdateStateRequest", ""),
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

export class ErrorTrackingApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteIssueAssignee
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteIssueAssignee(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
      return;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getIssue
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIssue(response: ResponseContext): Promise<IssueResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IssueResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IssueResponse",
      ) as IssueResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
      const body: IssueResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IssueResponse",
        "",
      ) as IssueResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to searchIssues
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchIssues(
    response: ResponseContext,
  ): Promise<IssuesSearchResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IssuesSearchResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IssuesSearchResponse",
      ) as IssuesSearchResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: IssuesSearchResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IssuesSearchResponse",
        "",
      ) as IssuesSearchResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateIssueAssignee
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIssueAssignee(
    response: ResponseContext,
  ): Promise<IssueResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IssueResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IssueResponse",
      ) as IssueResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
      const body: IssueResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IssueResponse",
        "",
      ) as IssueResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateIssueState
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIssueState(
    response: ResponseContext,
  ): Promise<IssueResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IssueResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IssueResponse",
      ) as IssueResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
      const body: IssueResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IssueResponse",
        "",
      ) as IssueResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface ErrorTrackingApiDeleteIssueAssigneeRequest {
  /**
   * The identifier of the issue.
   * @type string
   */
  issueId: string;
}

export interface ErrorTrackingApiGetIssueRequest {
  /**
   * The identifier of the issue.
   * @type string
   */
  issueId: string;
  /**
   * Comma-separated list of relationship objects that should be included in the response. Possible values are `assignee`, `case`, and `team_owners`.
   * @type Array<GetIssueIncludeQueryParameterItem>
   */
  include?: Array<GetIssueIncludeQueryParameterItem>;
}

export interface ErrorTrackingApiSearchIssuesRequest {
  /**
   * Search issues request payload.
   * @type IssuesSearchRequest
   */
  body: IssuesSearchRequest;
  /**
   * Comma-separated list of relationship objects that should be included in the response. Possible values are `issue`, `issue.assignee`, `issue.case`, and `issue.team_owners`.
   * @type Array<SearchIssuesIncludeQueryParameterItem>
   */
  include?: Array<SearchIssuesIncludeQueryParameterItem>;
}

export interface ErrorTrackingApiUpdateIssueAssigneeRequest {
  /**
   * The identifier of the issue.
   * @type string
   */
  issueId: string;
  /**
   * Update issue assignee request payload.
   * @type IssueUpdateAssigneeRequest
   */
  body: IssueUpdateAssigneeRequest;
}

export interface ErrorTrackingApiUpdateIssueStateRequest {
  /**
   * The identifier of the issue.
   * @type string
   */
  issueId: string;
  /**
   * Update issue state request payload.
   * @type IssueUpdateStateRequest
   */
  body: IssueUpdateStateRequest;
}

export class ErrorTrackingApi {
  private requestFactory: ErrorTrackingApiRequestFactory;
  private responseProcessor: ErrorTrackingApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: ErrorTrackingApiRequestFactory,
    responseProcessor?: ErrorTrackingApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new ErrorTrackingApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new ErrorTrackingApiResponseProcessor();
  }

  /**
   * Remove the assignee of an issue by `issue_id`.
   * @param param The request object
   */
  public deleteIssueAssignee(
    param: ErrorTrackingApiDeleteIssueAssigneeRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteIssueAssignee(
      param.issueId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteIssueAssignee(responseContext);
        });
    });
  }

  /**
   * Retrieve the full details for a specific error tracking issue, including attributes and relationships.
   * @param param The request object
   */
  public getIssue(
    param: ErrorTrackingApiGetIssueRequest,
    options?: Configuration,
  ): Promise<IssueResponse> {
    const requestContextPromise = this.requestFactory.getIssue(
      param.issueId,
      param.include,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIssue(responseContext);
        });
    });
  }

  /**
   * Search issues endpoint allows you to programmatically search for issues within your organization. This endpoint returns a list of issues that match a given search query, following the event search syntax. The search results are limited to a maximum of 100 issues per request.
   * @param param The request object
   */
  public searchIssues(
    param: ErrorTrackingApiSearchIssuesRequest,
    options?: Configuration,
  ): Promise<IssuesSearchResponse> {
    const requestContextPromise = this.requestFactory.searchIssues(
      param.body,
      param.include,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchIssues(responseContext);
        });
    });
  }

  /**
   * Update the assignee of an issue by `issue_id`.
   * @param param The request object
   */
  public updateIssueAssignee(
    param: ErrorTrackingApiUpdateIssueAssigneeRequest,
    options?: Configuration,
  ): Promise<IssueResponse> {
    const requestContextPromise = this.requestFactory.updateIssueAssignee(
      param.issueId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIssueAssignee(responseContext);
        });
    });
  }

  /**
   * Update the state of an issue by `issue_id`. Use this endpoint to move an issue between states such as `OPEN`, `RESOLVED`, or `IGNORED`.
   * @param param The request object
   */
  public updateIssueState(
    param: ErrorTrackingApiUpdateIssueStateRequest,
    options?: Configuration,
  ): Promise<IssueResponse> {
    const requestContextPromise = this.requestFactory.updateIssueState(
      param.issueId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIssueState(responseContext);
        });
    });
  }
}
