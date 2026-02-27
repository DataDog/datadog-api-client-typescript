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
import { EventCreateRequestPayload } from "./models/EventCreateRequestPayload";
import { EventCreateResponsePayload } from "./models/EventCreateResponsePayload";
import { EventEmailAddressCreateRequest } from "./models/EventEmailAddressCreateRequest";
import { EventEmailAddressesResponse } from "./models/EventEmailAddressesResponse";
import { EventEmailAddressSingleResponse } from "./models/EventEmailAddressSingleResponse";
import { EventEmailAddressUpdateRequest } from "./models/EventEmailAddressUpdateRequest";
import { EventResponse } from "./models/EventResponse";
import { EventsListRequest } from "./models/EventsListRequest";
import { EventsListResponse } from "./models/EventsListResponse";
import { EventsRequestPage } from "./models/EventsRequestPage";
import { EventsSort } from "./models/EventsSort";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { OnCallEventEmailAddressCreateRequest } from "./models/OnCallEventEmailAddressCreateRequest";
import { V2EventResponse } from "./models/V2EventResponse";
import { version } from "../version";

export class EventsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("events", version);
    }
  }
  public async createEvent(
    body: EventCreateRequestPayload,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createEvent");
    }

    // Path Params
    const localVarPath = "/api/v2/events";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "EventsApi.v2.createEvent",
      EventsApi.operationServers,
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
      serialize(body, TypingInfo, "EventCreateRequestPayload", ""),
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

  public async createEventEmailAddress(
    body: EventEmailAddressCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["EventsApi.v2.createEventEmailAddress"]) {
      throw new Error(
        "Unstable operation 'createEventEmailAddress' is disabled. Enable it by setting `configuration.unstableOperations['EventsApi.v2.createEventEmailAddress'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createEventEmailAddress");
    }

    // Path Params
    const localVarPath = "/api/v2/events/mail";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "EventsApi.v2.createEventEmailAddress",
      EventsApi.operationServers,
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
      serialize(body, TypingInfo, "EventEmailAddressCreateRequest", ""),
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

  public async createOnCallEventEmailAddress(
    body: OnCallEventEmailAddressCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["EventsApi.v2.createOnCallEventEmailAddress"]
    ) {
      throw new Error(
        "Unstable operation 'createOnCallEventEmailAddress' is disabled. Enable it by setting `configuration.unstableOperations['EventsApi.v2.createOnCallEventEmailAddress'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createOnCallEventEmailAddress");
    }

    // Path Params
    const localVarPath = "/api/v2/events/mail/on-call";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "EventsApi.v2.createOnCallEventEmailAddress",
      EventsApi.operationServers,
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
      serialize(body, TypingInfo, "OnCallEventEmailAddressCreateRequest", ""),
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

  public async deleteEventEmailAddress(
    emailUuid: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["EventsApi.v2.deleteEventEmailAddress"]) {
      throw new Error(
        "Unstable operation 'deleteEventEmailAddress' is disabled. Enable it by setting `configuration.unstableOperations['EventsApi.v2.deleteEventEmailAddress'] = true`",
      );
    }

    // verify required parameter 'emailUuid' is not null or undefined
    if (emailUuid === null || emailUuid === undefined) {
      throw new RequiredError("emailUuid", "deleteEventEmailAddress");
    }

    // Path Params
    const localVarPath = "/api/v2/events/mail/{email_uuid}".replace(
      "{email_uuid}",
      encodeURIComponent(String(emailUuid)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "EventsApi.v2.deleteEventEmailAddress",
      EventsApi.operationServers,
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
    ]);

    return requestContext;
  }

  public async deleteOnCallEventEmailAddress(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["EventsApi.v2.deleteOnCallEventEmailAddress"]
    ) {
      throw new Error(
        "Unstable operation 'deleteOnCallEventEmailAddress' is disabled. Enable it by setting `configuration.unstableOperations['EventsApi.v2.deleteOnCallEventEmailAddress'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "deleteOnCallEventEmailAddress");
    }

    // Path Params
    const localVarPath = "/api/v2/events/mail/on-call/{id}".replace(
      "{id}",
      encodeURIComponent(String(id)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "EventsApi.v2.deleteOnCallEventEmailAddress",
      EventsApi.operationServers,
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
    ]);

    return requestContext;
  }

  public async getEvent(
    eventId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'eventId' is not null or undefined
    if (eventId === null || eventId === undefined) {
      throw new RequiredError("eventId", "getEvent");
    }

    // Path Params
    const localVarPath = "/api/v2/events/{event_id}".replace(
      "{event_id}",
      encodeURIComponent(String(eventId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "EventsApi.v2.getEvent",
      EventsApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getEventEmailAddress(
    emailUuid: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["EventsApi.v2.getEventEmailAddress"]) {
      throw new Error(
        "Unstable operation 'getEventEmailAddress' is disabled. Enable it by setting `configuration.unstableOperations['EventsApi.v2.getEventEmailAddress'] = true`",
      );
    }

    // verify required parameter 'emailUuid' is not null or undefined
    if (emailUuid === null || emailUuid === undefined) {
      throw new RequiredError("emailUuid", "getEventEmailAddress");
    }

    // Path Params
    const localVarPath = "/api/v2/events/mail/{email_uuid}".replace(
      "{email_uuid}",
      encodeURIComponent(String(emailUuid)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "EventsApi.v2.getEventEmailAddress",
      EventsApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getOnCallEventEmailAddresses(
    filterTeamHandle: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["EventsApi.v2.getOnCallEventEmailAddresses"]
    ) {
      throw new Error(
        "Unstable operation 'getOnCallEventEmailAddresses' is disabled. Enable it by setting `configuration.unstableOperations['EventsApi.v2.getOnCallEventEmailAddresses'] = true`",
      );
    }

    // verify required parameter 'filterTeamHandle' is not null or undefined
    if (filterTeamHandle === null || filterTeamHandle === undefined) {
      throw new RequiredError(
        "filterTeamHandle",
        "getOnCallEventEmailAddresses",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/events/mail/on-call";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "EventsApi.v2.getOnCallEventEmailAddresses",
      EventsApi.operationServers,
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
    if (filterTeamHandle !== undefined) {
      requestContext.setQueryParam(
        "filter[team_handle]",
        serialize(filterTeamHandle, TypingInfo, "string", ""),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listEventEmailAddresses(
    active?: boolean,
    include?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["EventsApi.v2.listEventEmailAddresses"]) {
      throw new Error(
        "Unstable operation 'listEventEmailAddresses' is disabled. Enable it by setting `configuration.unstableOperations['EventsApi.v2.listEventEmailAddresses'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/events/mail";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "EventsApi.v2.listEventEmailAddresses",
      EventsApi.operationServers,
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
    if (active !== undefined) {
      requestContext.setQueryParam(
        "active",
        serialize(active, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "string", ""),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listEvents(
    filterQuery?: string,
    filterFrom?: string,
    filterTo?: string,
    sort?: EventsSort,
    pageCursor?: string,
    pageLimit?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/events";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "EventsApi.v2.listEvents",
      EventsApi.operationServers,
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
        serialize(filterFrom, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterTo !== undefined) {
      requestContext.setQueryParam(
        "filter[to]",
        serialize(filterTo, TypingInfo, "string", ""),
        "",
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "EventsSort", ""),
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
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async searchEvents(
    body?: EventsListRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/events/search";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "EventsApi.v2.searchEvents",
      EventsApi.operationServers,
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
      serialize(body, TypingInfo, "EventsListRequest", ""),
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

  public async updateEventEmailAddress(
    emailUuid: string,
    body: EventEmailAddressUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["EventsApi.v2.updateEventEmailAddress"]) {
      throw new Error(
        "Unstable operation 'updateEventEmailAddress' is disabled. Enable it by setting `configuration.unstableOperations['EventsApi.v2.updateEventEmailAddress'] = true`",
      );
    }

    // verify required parameter 'emailUuid' is not null or undefined
    if (emailUuid === null || emailUuid === undefined) {
      throw new RequiredError("emailUuid", "updateEventEmailAddress");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateEventEmailAddress");
    }

    // Path Params
    const localVarPath = "/api/v2/events/mail/{email_uuid}".replace(
      "{email_uuid}",
      encodeURIComponent(String(emailUuid)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "EventsApi.v2.updateEventEmailAddress",
      EventsApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
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
      serialize(body, TypingInfo, "EventEmailAddressUpdateRequest", ""),
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

export class EventsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createEvent
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createEvent(
    response: ResponseContext,
  ): Promise<EventCreateResponsePayload> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 202) {
      const body: EventCreateResponsePayload = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "EventCreateResponsePayload",
      ) as EventCreateResponsePayload;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: EventCreateResponsePayload = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "EventCreateResponsePayload",
        "",
      ) as EventCreateResponsePayload;
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
   * @params response Response returned by the server for a request to createEventEmailAddress
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createEventEmailAddress(
    response: ResponseContext,
  ): Promise<EventEmailAddressSingleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: EventEmailAddressSingleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "EventEmailAddressSingleResponse",
      ) as EventEmailAddressSingleResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: EventEmailAddressSingleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "EventEmailAddressSingleResponse",
        "",
      ) as EventEmailAddressSingleResponse;
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
   * @params response Response returned by the server for a request to createOnCallEventEmailAddress
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createOnCallEventEmailAddress(
    response: ResponseContext,
  ): Promise<EventEmailAddressSingleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: EventEmailAddressSingleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "EventEmailAddressSingleResponse",
      ) as EventEmailAddressSingleResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: EventEmailAddressSingleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "EventEmailAddressSingleResponse",
        "",
      ) as EventEmailAddressSingleResponse;
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
   * @params response Response returned by the server for a request to deleteEventEmailAddress
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteEventEmailAddress(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
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
   * @params response Response returned by the server for a request to deleteOnCallEventEmailAddress
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteOnCallEventEmailAddress(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
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
   * @params response Response returned by the server for a request to getEvent
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getEvent(response: ResponseContext): Promise<V2EventResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: V2EventResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "V2EventResponse",
      ) as V2EventResponse;
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
      const body: V2EventResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "V2EventResponse",
        "",
      ) as V2EventResponse;
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
   * @params response Response returned by the server for a request to getEventEmailAddress
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getEventEmailAddress(
    response: ResponseContext,
  ): Promise<EventEmailAddressSingleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: EventEmailAddressSingleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "EventEmailAddressSingleResponse",
      ) as EventEmailAddressSingleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: EventEmailAddressSingleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "EventEmailAddressSingleResponse",
        "",
      ) as EventEmailAddressSingleResponse;
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
   * @params response Response returned by the server for a request to getOnCallEventEmailAddresses
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getOnCallEventEmailAddresses(
    response: ResponseContext,
  ): Promise<EventEmailAddressesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: EventEmailAddressesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "EventEmailAddressesResponse",
      ) as EventEmailAddressesResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: EventEmailAddressesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "EventEmailAddressesResponse",
        "",
      ) as EventEmailAddressesResponse;
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
   * @params response Response returned by the server for a request to listEventEmailAddresses
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listEventEmailAddresses(
    response: ResponseContext,
  ): Promise<EventEmailAddressesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: EventEmailAddressesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "EventEmailAddressesResponse",
      ) as EventEmailAddressesResponse;
      return body;
    }
    if (response.httpStatusCode === 403) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: EventEmailAddressesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "EventEmailAddressesResponse",
        "",
      ) as EventEmailAddressesResponse;
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
   * @params response Response returned by the server for a request to listEvents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listEvents(
    response: ResponseContext,
  ): Promise<EventsListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: EventsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "EventsListResponse",
      ) as EventsListResponse;
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
      const body: EventsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "EventsListResponse",
        "",
      ) as EventsListResponse;
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
   * @params response Response returned by the server for a request to searchEvents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchEvents(
    response: ResponseContext,
  ): Promise<EventsListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: EventsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "EventsListResponse",
      ) as EventsListResponse;
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
      const body: EventsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "EventsListResponse",
        "",
      ) as EventsListResponse;
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
   * @params response Response returned by the server for a request to updateEventEmailAddress
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateEventEmailAddress(
    response: ResponseContext,
  ): Promise<EventEmailAddressSingleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: EventEmailAddressSingleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "EventEmailAddressSingleResponse",
      ) as EventEmailAddressSingleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: EventEmailAddressSingleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "EventEmailAddressSingleResponse",
        "",
      ) as EventEmailAddressSingleResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface EventsApiCreateEventRequest {
  /**
   * Event creation request payload.
   * @type EventCreateRequestPayload
   */
  body: EventCreateRequestPayload;
}

export interface EventsApiCreateEventEmailAddressRequest {
  /**
   * @type EventEmailAddressCreateRequest
   */
  body: EventEmailAddressCreateRequest;
}

export interface EventsApiCreateOnCallEventEmailAddressRequest {
  /**
   * @type OnCallEventEmailAddressCreateRequest
   */
  body: OnCallEventEmailAddressCreateRequest;
}

export interface EventsApiDeleteEventEmailAddressRequest {
  /**
   * The UUID of the event email address.
   * @type string
   */
  emailUuid: string;
}

export interface EventsApiDeleteOnCallEventEmailAddressRequest {
  /**
   * The UUID of the on-call event email address.
   * @type string
   */
  id: string;
}

export interface EventsApiGetEventRequest {
  /**
   * The UID of the event.
   * @type string
   */
  eventId: string;
}

export interface EventsApiGetEventEmailAddressRequest {
  /**
   * The UUID of the event email address.
   * @type string
   */
  emailUuid: string;
}

export interface EventsApiGetOnCallEventEmailAddressesRequest {
  /**
   * The team handle to filter on-call event email addresses.
   * @type string
   */
  filterTeamHandle: string;
}

export interface EventsApiListEventEmailAddressesRequest {
  /**
   * When set to `true`, returns only active (non-revoked) email addresses.
   * @type boolean
   */
  active?: boolean;
  /**
   * Comma-separated list of related resources to include in the response.
   * Supported values are `created_by` and `revoked_by`.
   * @type string
   */
  include?: string;
}

export interface EventsApiListEventsRequest {
  /**
   * Search query following events syntax.
   * @type string
   */
  filterQuery?: string;
  /**
   * Minimum timestamp for requested events, in milliseconds.
   * @type string
   */
  filterFrom?: string;
  /**
   * Maximum timestamp for requested events, in milliseconds.
   * @type string
   */
  filterTo?: string;
  /**
   * Order of events in results.
   * @type EventsSort
   */
  sort?: EventsSort;
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

export interface EventsApiSearchEventsRequest {
  /**
   * @type EventsListRequest
   */
  body?: EventsListRequest;
}

export interface EventsApiUpdateEventEmailAddressRequest {
  /**
   * The UUID of the event email address.
   * @type string
   */
  emailUuid: string;
  /**
   * @type EventEmailAddressUpdateRequest
   */
  body: EventEmailAddressUpdateRequest;
}

export class EventsApi {
  private requestFactory: EventsApiRequestFactory;
  private responseProcessor: EventsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {
    "EventsApi.v2.createEvent": [
      new ServerConfiguration<{
        site:
          | "datadoghq.com"
          | "us3.datadoghq.com"
          | "us5.datadoghq.com"
          | "ap1.datadoghq.com"
          | "ap2.datadoghq.com"
          | "datadoghq.eu"
          | "ddog-gov.com";
        subdomain: string;
      }>("https://{subdomain}.{site}", {
        site: "datadoghq.com",
        subdomain: "event-management-intake",
      }),
      new ServerConfiguration<{
        name: string;
        protocol: string;
      }>("{protocol}://{name}", {
        name: "event-management-intake.datadoghq.com",
        protocol: "https",
      }),
      new ServerConfiguration<{
        site: string;
        subdomain: string;
      }>("https://{subdomain}.{site}", {
        site: "datadoghq.com",
        subdomain: "event-management-intake",
      }),
    ],
  };

  public constructor(
    configuration?: Configuration,
    requestFactory?: EventsApiRequestFactory,
    responseProcessor?: EventsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new EventsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new EventsApiResponseProcessor();
  }

  /**
   * This endpoint allows you to publish events.
   *
   * **Note:** To utilize this endpoint with our client libraries, please ensure you are using the latest version released on or after July 1, 2025. Earlier versions do not support this functionality.
   *
   * **Important:** Upgrade to the latest client library version to use the updated endpoint at `https://event-management-intake.{site}/api/v2/events`. Older client library versions of the Post an event (v2) API send requests to a deprecated endpoint (`https://api.{site}/api/v2/events`).
   *
   * ✅ **Only events with the `change` or `alert` category** are in General Availability. For change events, see [Change Tracking](https://docs.datadoghq.com/change_tracking) for more details.
   *
   * ❌ For use cases involving other event categories, use the V1 endpoint or reach out to [support](https://www.datadoghq.com/support/).
   * @param param The request object
   */
  public createEvent(
    param: EventsApiCreateEventRequest,
    options?: Configuration,
  ): Promise<EventCreateResponsePayload> {
    const requestContextPromise = this.requestFactory.createEvent(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createEvent(responseContext);
        });
    });
  }

  /**
   * Create a new API email address to use in an event email integration rule.
   * @param param The request object
   */
  public createEventEmailAddress(
    param: EventsApiCreateEventEmailAddressRequest,
    options?: Configuration,
  ): Promise<EventEmailAddressSingleResponse> {
    const requestContextPromise = this.requestFactory.createEventEmailAddress(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createEventEmailAddress(
            responseContext,
          );
        });
    });
  }

  /**
   * Create a new on-call event email address associated with a team handle.
   * @param param The request object
   */
  public createOnCallEventEmailAddress(
    param: EventsApiCreateOnCallEventEmailAddressRequest,
    options?: Configuration,
  ): Promise<EventEmailAddressSingleResponse> {
    const requestContextPromise =
      this.requestFactory.createOnCallEventEmailAddress(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createOnCallEventEmailAddress(
            responseContext,
          );
        });
    });
  }

  /**
   * Revoke an existing API email address in your organization.
   * @param param The request object
   */
  public deleteEventEmailAddress(
    param: EventsApiDeleteEventEmailAddressRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteEventEmailAddress(
      param.emailUuid,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteEventEmailAddress(
            responseContext,
          );
        });
    });
  }

  /**
   * Revoke an existing on-call event email address in your organization.
   * @param param The request object
   */
  public deleteOnCallEventEmailAddress(
    param: EventsApiDeleteOnCallEventEmailAddressRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteOnCallEventEmailAddress(param.id, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteOnCallEventEmailAddress(
            responseContext,
          );
        });
    });
  }

  /**
   * Get the details of an event by `event_id`.
   * @param param The request object
   */
  public getEvent(
    param: EventsApiGetEventRequest,
    options?: Configuration,
  ): Promise<V2EventResponse> {
    const requestContextPromise = this.requestFactory.getEvent(
      param.eventId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getEvent(responseContext);
        });
    });
  }

  /**
   * Get a single API email address for your organization.
   * @param param The request object
   */
  public getEventEmailAddress(
    param: EventsApiGetEventEmailAddressRequest,
    options?: Configuration,
  ): Promise<EventEmailAddressSingleResponse> {
    const requestContextPromise = this.requestFactory.getEventEmailAddress(
      param.emailUuid,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getEventEmailAddress(responseContext);
        });
    });
  }

  /**
   * List all on-call event email addresses for a given team handle.
   * @param param The request object
   */
  public getOnCallEventEmailAddresses(
    param: EventsApiGetOnCallEventEmailAddressesRequest,
    options?: Configuration,
  ): Promise<EventEmailAddressesResponse> {
    const requestContextPromise =
      this.requestFactory.getOnCallEventEmailAddresses(
        param.filterTeamHandle,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getOnCallEventEmailAddresses(
            responseContext,
          );
        });
    });
  }

  /**
   * List all API email addresses for your organization.
   * @param param The request object
   */
  public listEventEmailAddresses(
    param: EventsApiListEventEmailAddressesRequest = {},
    options?: Configuration,
  ): Promise<EventEmailAddressesResponse> {
    const requestContextPromise = this.requestFactory.listEventEmailAddresses(
      param.active,
      param.include,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listEventEmailAddresses(
            responseContext,
          );
        });
    });
  }

  /**
   * List endpoint returns events that match an events search query.
   * [Results are paginated similarly to logs](https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination).
   *
   * Use this endpoint to see your latest events.
   * @param param The request object
   */
  public listEvents(
    param: EventsApiListEventsRequest = {},
    options?: Configuration,
  ): Promise<EventsListResponse> {
    const requestContextPromise = this.requestFactory.listEvents(
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
          return this.responseProcessor.listEvents(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listEvents returning a generator with all the items.
   */
  public async *listEventsWithPagination(
    param: EventsApiListEventsRequest = {},
    options?: Configuration,
  ): AsyncGenerator<EventResponse> {
    let pageSize = 10;
    if (param.pageLimit !== undefined) {
      pageSize = param.pageLimit;
    }
    param.pageLimit = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listEvents(
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

      const response = await this.responseProcessor.listEvents(responseContext);
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
   * List endpoint returns events that match an events search query.
   * [Results are paginated similarly to logs](https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination).
   *
   * Use this endpoint to build complex events filtering and search.
   * @param param The request object
   */
  public searchEvents(
    param: EventsApiSearchEventsRequest = {},
    options?: Configuration,
  ): Promise<EventsListResponse> {
    const requestContextPromise = this.requestFactory.searchEvents(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchEvents(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of searchEvents returning a generator with all the items.
   */
  public async *searchEventsWithPagination(
    param: EventsApiSearchEventsRequest = {},
    options?: Configuration,
  ): AsyncGenerator<EventResponse> {
    let pageSize = 10;
    if (param.body === undefined) {
      param.body = new EventsListRequest();
    }
    if (param.body.page === undefined) {
      param.body.page = new EventsRequestPage();
    }
    if (param.body.page.limit !== undefined) {
      pageSize = param.body.page.limit;
    }
    param.body.page.limit = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.searchEvents(
        param.body,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.searchEvents(responseContext);
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
   * Update an existing API email address in your organization.
   * @param param The request object
   */
  public updateEventEmailAddress(
    param: EventsApiUpdateEventEmailAddressRequest,
    options?: Configuration,
  ): Promise<EventEmailAddressSingleResponse> {
    const requestContextPromise = this.requestFactory.updateEventEmailAddress(
      param.emailUuid,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateEventEmailAddress(
            responseContext,
          );
        });
    });
  }
}
