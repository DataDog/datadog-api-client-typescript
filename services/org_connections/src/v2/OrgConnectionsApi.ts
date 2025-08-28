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
import { OrgConnectionCreateRequest } from "./models/OrgConnectionCreateRequest";
import { OrgConnectionListResponse } from "./models/OrgConnectionListResponse";
import { OrgConnectionResponse } from "./models/OrgConnectionResponse";
import { OrgConnectionUpdateRequest } from "./models/OrgConnectionUpdateRequest";
import { version } from "../version";

export class OrgConnectionsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("org-connections", version);
    }
  }
  public async createOrgConnections(
    body: OrgConnectionCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createOrgConnections");
    }

    // Path Params
    const localVarPath = "/api/v2/org_connections";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OrgConnectionsApi.v2.createOrgConnections",
      OrgConnectionsApi.operationServers,
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
      serialize(body, TypingInfo, "OrgConnectionCreateRequest", ""),
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

  public async deleteOrgConnections(
    connectionId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'connectionId' is not null or undefined
    if (connectionId === null || connectionId === undefined) {
      throw new RequiredError("connectionId", "deleteOrgConnections");
    }

    // Path Params
    const localVarPath = "/api/v2/org_connections/{connection_id}".replace(
      "{connection_id}",
      encodeURIComponent(String(connectionId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OrgConnectionsApi.v2.deleteOrgConnections",
      OrgConnectionsApi.operationServers,
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

  public async listOrgConnections(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/org_connections";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OrgConnectionsApi.v2.listOrgConnections",
      OrgConnectionsApi.operationServers,
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

  public async updateOrgConnections(
    connectionId: string,
    body: OrgConnectionUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'connectionId' is not null or undefined
    if (connectionId === null || connectionId === undefined) {
      throw new RequiredError("connectionId", "updateOrgConnections");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateOrgConnections");
    }

    // Path Params
    const localVarPath = "/api/v2/org_connections/{connection_id}".replace(
      "{connection_id}",
      encodeURIComponent(String(connectionId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "OrgConnectionsApi.v2.updateOrgConnections",
      OrgConnectionsApi.operationServers,
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
      serialize(body, TypingInfo, "OrgConnectionUpdateRequest", ""),
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

export class OrgConnectionsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createOrgConnections
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createOrgConnections(
    response: ResponseContext,
  ): Promise<OrgConnectionResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OrgConnectionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgConnectionResponse",
      ) as OrgConnectionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409 ||
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
      const body: OrgConnectionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgConnectionResponse",
        "",
      ) as OrgConnectionResponse;
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
   * @params response Response returned by the server for a request to deleteOrgConnections
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteOrgConnections(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
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
   * @params response Response returned by the server for a request to listOrgConnections
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listOrgConnections(
    response: ResponseContext,
  ): Promise<OrgConnectionListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OrgConnectionListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgConnectionListResponse",
      ) as OrgConnectionListResponse;
      return body;
    }
    if (
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
      const body: OrgConnectionListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgConnectionListResponse",
        "",
      ) as OrgConnectionListResponse;
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
   * @params response Response returned by the server for a request to updateOrgConnections
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateOrgConnections(
    response: ResponseContext,
  ): Promise<OrgConnectionResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OrgConnectionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgConnectionResponse",
      ) as OrgConnectionResponse;
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
      const body: OrgConnectionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OrgConnectionResponse",
        "",
      ) as OrgConnectionResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface OrgConnectionsApiCreateOrgConnectionsRequest {
  /**
   * @type OrgConnectionCreateRequest
   */
  body: OrgConnectionCreateRequest;
}

export interface OrgConnectionsApiDeleteOrgConnectionsRequest {
  /**
   * The unique identifier of the org connection.
   * @type string
   */
  connectionId: string;
}

export interface OrgConnectionsApiUpdateOrgConnectionsRequest {
  /**
   * The unique identifier of the org connection.
   * @type string
   */
  connectionId: string;
  /**
   * @type OrgConnectionUpdateRequest
   */
  body: OrgConnectionUpdateRequest;
}

export class OrgConnectionsApi {
  private requestFactory: OrgConnectionsApiRequestFactory;
  private responseProcessor: OrgConnectionsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: OrgConnectionsApiRequestFactory,
    responseProcessor?: OrgConnectionsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new OrgConnectionsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new OrgConnectionsApiResponseProcessor();
  }

  /**
   * Create a new org connection between the current org and a target org.
   * @param param The request object
   */
  public createOrgConnections(
    param: OrgConnectionsApiCreateOrgConnectionsRequest,
    options?: Configuration,
  ): Promise<OrgConnectionResponse> {
    const requestContextPromise = this.requestFactory.createOrgConnections(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createOrgConnections(responseContext);
        });
    });
  }

  /**
   * Delete an existing org connection.
   * @param param The request object
   */
  public deleteOrgConnections(
    param: OrgConnectionsApiDeleteOrgConnectionsRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteOrgConnections(
      param.connectionId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteOrgConnections(responseContext);
        });
    });
  }

  /**
   * Returns a list of org connections.
   * @param param The request object
   */
  public listOrgConnections(
    options?: Configuration,
  ): Promise<OrgConnectionListResponse> {
    const requestContextPromise =
      this.requestFactory.listOrgConnections(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listOrgConnections(responseContext);
        });
    });
  }

  /**
   * Update an existing org connection.
   * @param param The request object
   */
  public updateOrgConnections(
    param: OrgConnectionsApiUpdateOrgConnectionsRequest,
    options?: Configuration,
  ): Promise<OrgConnectionResponse> {
    const requestContextPromise = this.requestFactory.updateOrgConnections(
      param.connectionId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateOrgConnections(responseContext);
        });
    });
  }
}
