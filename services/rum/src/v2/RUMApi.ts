import {
  ApiException,
  BaseAPIRequestFactory,
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
import { RUMAggregateRequest } from "./models/RUMAggregateRequest";
import { RUMAnalyticsAggregateResponse } from "./models/RUMAnalyticsAggregateResponse";
import { RUMApplicationCreateRequest } from "./models/RUMApplicationCreateRequest";
import { RUMApplicationResponse } from "./models/RUMApplicationResponse";
import { RUMApplicationsResponse } from "./models/RUMApplicationsResponse";
import { RUMApplicationUpdateRequest } from "./models/RUMApplicationUpdateRequest";
import { RUMEvent } from "./models/RUMEvent";
import { RUMEventsResponse } from "./models/RUMEventsResponse";
import { RUMQueryPageOptions } from "./models/RUMQueryPageOptions";
import { RUMSearchEventsRequest } from "./models/RUMSearchEventsRequest";
import { RUMSort } from "./models/RUMSort";
import { version } from "../version";

export class RUMApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("rum", version);
    }
  }
  public async aggregateRUMEvents(
    body: RUMAggregateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "aggregateRUMEvents");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/analytics/aggregate";

    // Make Request Context
    const requestContext = _config
      .getServer("RUMApi.v2.aggregateRUMEvents")
      .makeRequestContext(localVarPath, HttpMethod.POST);
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
      serialize(body, TypingInfo, "RUMAggregateRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async createRUMApplication(
    body: RUMApplicationCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createRUMApplication");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/applications";

    // Make Request Context
    const requestContext = _config
      .getServer("RUMApi.v2.createRUMApplication")
      .makeRequestContext(localVarPath, HttpMethod.POST);
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
      serialize(body, TypingInfo, "RUMApplicationCreateRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteRUMApplication(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "deleteRUMApplication");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/applications/{id}".replace(
      "{id}",
      encodeURIComponent(String(id)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("RUMApi.v2.deleteRUMApplication")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
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
    ]);

    return requestContext;
  }

  public async getRUMApplication(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getRUMApplication");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/applications/{id}".replace(
      "{id}",
      encodeURIComponent(String(id)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("RUMApi.v2.getRUMApplication")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getRUMApplications(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/rum/applications";

    // Make Request Context
    const requestContext = _config
      .getServer("RUMApi.v2.getRUMApplications")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listRUMEvents(
    filterQuery?: string,
    filterFrom?: Date,
    filterTo?: Date,
    sort?: RUMSort,
    pageCursor?: string,
    pageLimit?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/rum/events";

    // Make Request Context
    const requestContext = _config
      .getServer("RUMApi.v2.listRUMEvents")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (filterQuery !== undefined) {
      requestContext.setQueryParam(
        "filter[query]",
        serialize(filterQuery, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterFrom !== undefined) {
      requestContext.setQueryParam(
        "filter[from]",
        serialize(filterFrom, TypingInfo, "Date", "date-time"),
        "",
      );
    }
    if (filterTo !== undefined) {
      requestContext.setQueryParam(
        "filter[to]",
        serialize(filterTo, TypingInfo, "Date", "date-time"),
        "",
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "RUMSort", ""),
        "",
      );
    }
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        serialize(pageCursor, TypingInfo, "string", ""),
        "",
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        serialize(pageLimit, TypingInfo, "number", "int32"),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async searchRUMEvents(
    body: RUMSearchEventsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "searchRUMEvents");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/events/search";

    // Make Request Context
    const requestContext = _config
      .getServer("RUMApi.v2.searchRUMEvents")
      .makeRequestContext(localVarPath, HttpMethod.POST);
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
      serialize(body, TypingInfo, "RUMSearchEventsRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateRUMApplication(
    id: string,
    body: RUMApplicationUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "updateRUMApplication");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateRUMApplication");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/applications/{id}".replace(
      "{id}",
      encodeURIComponent(String(id)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("RUMApi.v2.updateRUMApplication")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
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
      serialize(body, TypingInfo, "RUMApplicationUpdateRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class RUMApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to aggregateRUMEvents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async aggregateRUMEvents(
    response: ResponseContext,
  ): Promise<RUMAnalyticsAggregateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMAnalyticsAggregateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMAnalyticsAggregateResponse",
      ) as RUMAnalyticsAggregateResponse;
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
      const body: RUMAnalyticsAggregateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMAnalyticsAggregateResponse",
        "",
      ) as RUMAnalyticsAggregateResponse;
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
   * @params response Response returned by the server for a request to createRUMApplication
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createRUMApplication(
    response: ResponseContext,
  ): Promise<RUMApplicationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMApplicationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMApplicationResponse",
      ) as RUMApplicationResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
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
      const body: RUMApplicationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMApplicationResponse",
        "",
      ) as RUMApplicationResponse;
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
   * @params response Response returned by the server for a request to deleteRUMApplication
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteRUMApplication(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
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
   * @params response Response returned by the server for a request to getRUMApplication
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRUMApplication(
    response: ResponseContext,
  ): Promise<RUMApplicationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMApplicationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMApplicationResponse",
      ) as RUMApplicationResponse;
      return body;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
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
      const body: RUMApplicationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMApplicationResponse",
        "",
      ) as RUMApplicationResponse;
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
   * @params response Response returned by the server for a request to getRUMApplications
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRUMApplications(
    response: ResponseContext,
  ): Promise<RUMApplicationsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMApplicationsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMApplicationsResponse",
      ) as RUMApplicationsResponse;
      return body;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
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
      const body: RUMApplicationsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMApplicationsResponse",
        "",
      ) as RUMApplicationsResponse;
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
   * @params response Response returned by the server for a request to listRUMEvents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listRUMEvents(
    response: ResponseContext,
  ): Promise<RUMEventsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMEventsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMEventsResponse",
      ) as RUMEventsResponse;
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
      const body: RUMEventsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMEventsResponse",
        "",
      ) as RUMEventsResponse;
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
   * @params response Response returned by the server for a request to searchRUMEvents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchRUMEvents(
    response: ResponseContext,
  ): Promise<RUMEventsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMEventsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMEventsResponse",
      ) as RUMEventsResponse;
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
      const body: RUMEventsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMEventsResponse",
        "",
      ) as RUMEventsResponse;
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
   * @params response Response returned by the server for a request to updateRUMApplication
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateRUMApplication(
    response: ResponseContext,
  ): Promise<RUMApplicationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMApplicationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMApplicationResponse",
      ) as RUMApplicationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 422 ||
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
      const body: RUMApplicationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMApplicationResponse",
        "",
      ) as RUMApplicationResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface RUMApiAggregateRUMEventsRequest {
  /**
   * @type RUMAggregateRequest
   */
  body: RUMAggregateRequest;
}

export interface RUMApiCreateRUMApplicationRequest {
  /**
   * @type RUMApplicationCreateRequest
   */
  body: RUMApplicationCreateRequest;
}

export interface RUMApiDeleteRUMApplicationRequest {
  /**
   * RUM application ID.
   * @type string
   */
  id: string;
}

export interface RUMApiGetRUMApplicationRequest {
  /**
   * RUM application ID.
   * @type string
   */
  id: string;
}

export interface RUMApiListRUMEventsRequest {
  /**
   * Search query following RUM syntax.
   * @type string
   */
  filterQuery?: string;
  /**
   * Minimum timestamp for requested events.
   * @type Date
   */
  filterFrom?: Date;
  /**
   * Maximum timestamp for requested events.
   * @type Date
   */
  filterTo?: Date;
  /**
   * Order of events in results.
   * @type RUMSort
   */
  sort?: RUMSort;
  /**
   * List following results with a cursor provided in the previous query.
   * @type string
   */
  pageCursor?: string;
  /**
   * Maximum number of events in the response.
   * @type number
   */
  pageLimit?: number;
}

export interface RUMApiSearchRUMEventsRequest {
  /**
   * @type RUMSearchEventsRequest
   */
  body: RUMSearchEventsRequest;
}

export interface RUMApiUpdateRUMApplicationRequest {
  /**
   * RUM application ID.
   * @type string
   */
  id: string;
  /**
   * @type RUMApplicationUpdateRequest
   */
  body: RUMApplicationUpdateRequest;
}

export class RUMApi {
  private requestFactory: RUMApiRequestFactory;
  private responseProcessor: RUMApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: RUMApiRequestFactory,
    responseProcessor?: RUMApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new RUMApiRequestFactory(this.configuration);
    this.responseProcessor = responseProcessor || new RUMApiResponseProcessor();
  }

  /**
   * The API endpoint to aggregate RUM events into buckets of computed metrics and timeseries.
   * @param param The request object
   */
  public aggregateRUMEvents(
    param: RUMApiAggregateRUMEventsRequest,
    options?: Configuration,
  ): Promise<RUMAnalyticsAggregateResponse> {
    const requestContextPromise = this.requestFactory.aggregateRUMEvents(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.aggregateRUMEvents(responseContext);
        });
    });
  }

  /**
   * Create a new RUM application in your organization.
   * @param param The request object
   */
  public createRUMApplication(
    param: RUMApiCreateRUMApplicationRequest,
    options?: Configuration,
  ): Promise<RUMApplicationResponse> {
    const requestContextPromise = this.requestFactory.createRUMApplication(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createRUMApplication(responseContext);
        });
    });
  }

  /**
   * Delete an existing RUM application in your organization.
   * @param param The request object
   */
  public deleteRUMApplication(
    param: RUMApiDeleteRUMApplicationRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteRUMApplication(
      param.id,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteRUMApplication(responseContext);
        });
    });
  }

  /**
   * Get the RUM application with given ID in your organization.
   * @param param The request object
   */
  public getRUMApplication(
    param: RUMApiGetRUMApplicationRequest,
    options?: Configuration,
  ): Promise<RUMApplicationResponse> {
    const requestContextPromise = this.requestFactory.getRUMApplication(
      param.id,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRUMApplication(responseContext);
        });
    });
  }

  /**
   * List all the RUM applications in your organization.
   * @param param The request object
   */
  public getRUMApplications(
    options?: Configuration,
  ): Promise<RUMApplicationsResponse> {
    const requestContextPromise =
      this.requestFactory.getRUMApplications(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRUMApplications(responseContext);
        });
    });
  }

  /**
   * List endpoint returns events that match a RUM search query.
   * [Results are paginated][1].
   *
   * Use this endpoint to see your latest RUM events.
   *
   * [1]: https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination
   * @param param The request object
   */
  public listRUMEvents(
    param: RUMApiListRUMEventsRequest = {},
    options?: Configuration,
  ): Promise<RUMEventsResponse> {
    const requestContextPromise = this.requestFactory.listRUMEvents(
      param.filterQuery,
      param.filterFrom,
      param.filterTo,
      param.sort,
      param.pageCursor,
      param.pageLimit,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listRUMEvents(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listRUMEvents returning a generator with all the items.
   */
  public async *listRUMEventsWithPagination(
    param: RUMApiListRUMEventsRequest = {},
    options?: Configuration,
  ): AsyncGenerator<RUMEvent> {
    let pageSize = 10;
    if (param.pageLimit !== undefined) {
      pageSize = param.pageLimit;
    }
    param.pageLimit = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listRUMEvents(
        param.filterQuery,
        param.filterFrom,
        param.filterTo,
        param.sort,
        param.pageCursor,
        param.pageLimit,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.listRUMEvents(responseContext);
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
      const cursorMetaPage = cursorMeta.page;
      if (cursorMetaPage === undefined) {
        break;
      }
      const cursorMetaPageAfter = cursorMetaPage.after;
      if (cursorMetaPageAfter === undefined) {
        break;
      }

      param.pageCursor = cursorMetaPageAfter;
    }
  }

  /**
   * List endpoint returns RUM events that match a RUM search query.
   * [Results are paginated][1].
   *
   * Use this endpoint to build complex RUM events filtering and search.
   *
   * [1]: https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination
   * @param param The request object
   */
  public searchRUMEvents(
    param: RUMApiSearchRUMEventsRequest,
    options?: Configuration,
  ): Promise<RUMEventsResponse> {
    const requestContextPromise = this.requestFactory.searchRUMEvents(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchRUMEvents(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of searchRUMEvents returning a generator with all the items.
   */
  public async *searchRUMEventsWithPagination(
    param: RUMApiSearchRUMEventsRequest,
    options?: Configuration,
  ): AsyncGenerator<RUMEvent> {
    let pageSize = 10;
    if (param.body.page === undefined) {
      param.body.page = new RUMQueryPageOptions();
    }
    if (param.body.page.limit === undefined) {
      param.body.page.limit = pageSize;
    } else {
      pageSize = param.body.page.limit;
    }
    while (true) {
      const requestContext = await this.requestFactory.searchRUMEvents(
        param.body,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.searchRUMEvents(responseContext);
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
      const cursorMetaPage = cursorMeta.page;
      if (cursorMetaPage === undefined) {
        break;
      }
      const cursorMetaPageAfter = cursorMetaPage.after;
      if (cursorMetaPageAfter === undefined) {
        break;
      }

      param.body.page.cursor = cursorMetaPageAfter;
    }
  }

  /**
   * Update the RUM application with given ID in your organization.
   * @param param The request object
   */
  public updateRUMApplication(
    param: RUMApiUpdateRUMApplicationRequest,
    options?: Configuration,
  ): Promise<RUMApplicationResponse> {
    const requestContextPromise = this.requestFactory.updateRUMApplication(
      param.id,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateRUMApplication(responseContext);
        });
    });
  }
}
