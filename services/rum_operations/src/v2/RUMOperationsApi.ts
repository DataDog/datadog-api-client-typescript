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
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { RUMOperationCreateRequest } from "./models/RUMOperationCreateRequest";
import { RUMOperationResponse } from "./models/RUMOperationResponse";
import { RUMOperationsListResponse } from "./models/RUMOperationsListResponse";
import { RUMOperationStrongLinkCreateRequest } from "./models/RUMOperationStrongLinkCreateRequest";
import { RUMOperationStrongLinkResponse } from "./models/RUMOperationStrongLinkResponse";
import { RUMOperationStrongLinksListResponse } from "./models/RUMOperationStrongLinksListResponse";
import { RUMOperationStrongLinkUpdateRequest } from "./models/RUMOperationStrongLinkUpdateRequest";
import { RUMOperationUpdateRequest } from "./models/RUMOperationUpdateRequest";
import { version } from "../version";

export class RUMOperationsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("rum-operations", version);
    }
  }
  public async createRUMOperation(
    body: RUMOperationCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["RUMOperationsApi.v2.createRUMOperation"]) {
      throw new Error(
        "Unstable operation 'createRUMOperation' is disabled. Enable it by setting `configuration.unstableOperations['RUMOperationsApi.v2.createRUMOperation'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createRUMOperation");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/operations";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMOperationsApi.v2.createRUMOperation",
      RUMOperationsApi.operationServers,
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
      serialize(body, TypingInfo, "RUMOperationCreateRequest", ""),
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

  public async createRUMOperationStrongLink(
    body: RUMOperationStrongLinkCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "RUMOperationsApi.v2.createRUMOperationStrongLink"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createRUMOperationStrongLink' is disabled. Enable it by setting `configuration.unstableOperations['RUMOperationsApi.v2.createRUMOperationStrongLink'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createRUMOperationStrongLink");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/operations/strong_links";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMOperationsApi.v2.createRUMOperationStrongLink",
      RUMOperationsApi.operationServers,
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
      serialize(body, TypingInfo, "RUMOperationStrongLinkCreateRequest", ""),
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

  public async deleteRUMOperation(
    operationId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["RUMOperationsApi.v2.deleteRUMOperation"]) {
      throw new Error(
        "Unstable operation 'deleteRUMOperation' is disabled. Enable it by setting `configuration.unstableOperations['RUMOperationsApi.v2.deleteRUMOperation'] = true`",
      );
    }

    // verify required parameter 'operationId' is not null or undefined
    if (operationId === null || operationId === undefined) {
      throw new RequiredError("operationId", "deleteRUMOperation");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/operations/{operation_id}".replace(
      "{operation_id}",
      encodeURIComponent(String(operationId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMOperationsApi.v2.deleteRUMOperation",
      RUMOperationsApi.operationServers,
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

  public async deleteRUMOperationStrongLink(
    operationId: string,
    featureId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "RUMOperationsApi.v2.deleteRUMOperationStrongLink"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteRUMOperationStrongLink' is disabled. Enable it by setting `configuration.unstableOperations['RUMOperationsApi.v2.deleteRUMOperationStrongLink'] = true`",
      );
    }

    // verify required parameter 'operationId' is not null or undefined
    if (operationId === null || operationId === undefined) {
      throw new RequiredError("operationId", "deleteRUMOperationStrongLink");
    }

    // verify required parameter 'featureId' is not null or undefined
    if (featureId === null || featureId === undefined) {
      throw new RequiredError("featureId", "deleteRUMOperationStrongLink");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/operations/strong_links/{operation_id}/{feature_id}"
        .replace("{operation_id}", encodeURIComponent(String(operationId)))
        .replace("{feature_id}", encodeURIComponent(String(featureId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMOperationsApi.v2.deleteRUMOperationStrongLink",
      RUMOperationsApi.operationServers,
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

  public async getRUMOperation(
    operationId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["RUMOperationsApi.v2.getRUMOperation"]) {
      throw new Error(
        "Unstable operation 'getRUMOperation' is disabled. Enable it by setting `configuration.unstableOperations['RUMOperationsApi.v2.getRUMOperation'] = true`",
      );
    }

    // verify required parameter 'operationId' is not null or undefined
    if (operationId === null || operationId === undefined) {
      throw new RequiredError("operationId", "getRUMOperation");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/operations/{operation_id}".replace(
      "{operation_id}",
      encodeURIComponent(String(operationId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMOperationsApi.v2.getRUMOperation",
      RUMOperationsApi.operationServers,
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

  public async getRUMOperationByName(
    name: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["RUMOperationsApi.v2.getRUMOperationByName"]
    ) {
      throw new Error(
        "Unstable operation 'getRUMOperationByName' is disabled. Enable it by setting `configuration.unstableOperations['RUMOperationsApi.v2.getRUMOperationByName'] = true`",
      );
    }

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError("name", "getRUMOperationByName");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/operations/by-name/{name}".replace(
      "{name}",
      encodeURIComponent(String(name)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMOperationsApi.v2.getRUMOperationByName",
      RUMOperationsApi.operationServers,
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

  public async listRUMOperations(
    query?: string,
    pageOffset?: number,
    pageLimit?: number,
    creator?: string,
    team?: string,
    featureId?: string,
    applicationId?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["RUMOperationsApi.v2.listRUMOperations"]) {
      throw new Error(
        "Unstable operation 'listRUMOperations' is disabled. Enable it by setting `configuration.unstableOperations['RUMOperationsApi.v2.listRUMOperations'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/rum/operations/search";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMOperationsApi.v2.listRUMOperations",
      RUMOperationsApi.operationServers,
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
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        serialize(query, TypingInfo, "string", ""),
        "",
      );
    }
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        serialize(pageOffset, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        serialize(pageLimit, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (creator !== undefined) {
      requestContext.setQueryParam(
        "creator",
        serialize(creator, TypingInfo, "string", ""),
        "",
      );
    }
    if (team !== undefined) {
      requestContext.setQueryParam(
        "team",
        serialize(team, TypingInfo, "string", ""),
        "",
      );
    }
    if (featureId !== undefined) {
      requestContext.setQueryParam(
        "feature_id",
        serialize(featureId, TypingInfo, "string", ""),
        "",
      );
    }
    if (applicationId !== undefined) {
      requestContext.setQueryParam(
        "application_id",
        serialize(applicationId, TypingInfo, "string", "uuid"),
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

  public async listRUMOperationStrongLinks(
    operationId?: string,
    featureId?: string,
    pageOffset?: number,
    pageLimit?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "RUMOperationsApi.v2.listRUMOperationStrongLinks"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listRUMOperationStrongLinks' is disabled. Enable it by setting `configuration.unstableOperations['RUMOperationsApi.v2.listRUMOperationStrongLinks'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/rum/operations/strong_links";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMOperationsApi.v2.listRUMOperationStrongLinks",
      RUMOperationsApi.operationServers,
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
    if (operationId !== undefined) {
      requestContext.setQueryParam(
        "operation_id",
        serialize(operationId, TypingInfo, "string", ""),
        "",
      );
    }
    if (featureId !== undefined) {
      requestContext.setQueryParam(
        "feature_id",
        serialize(featureId, TypingInfo, "string", ""),
        "",
      );
    }
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        serialize(pageOffset, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        serialize(pageLimit, TypingInfo, "number", "int64"),
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

  public async updateRUMOperation(
    operationId: string,
    body: RUMOperationUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["RUMOperationsApi.v2.updateRUMOperation"]) {
      throw new Error(
        "Unstable operation 'updateRUMOperation' is disabled. Enable it by setting `configuration.unstableOperations['RUMOperationsApi.v2.updateRUMOperation'] = true`",
      );
    }

    // verify required parameter 'operationId' is not null or undefined
    if (operationId === null || operationId === undefined) {
      throw new RequiredError("operationId", "updateRUMOperation");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateRUMOperation");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/operations/{operation_id}".replace(
      "{operation_id}",
      encodeURIComponent(String(operationId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMOperationsApi.v2.updateRUMOperation",
      RUMOperationsApi.operationServers,
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
      serialize(body, TypingInfo, "RUMOperationUpdateRequest", ""),
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

  public async updateRUMOperationStrongLink(
    operationId: string,
    featureId: string,
    body: RUMOperationStrongLinkUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "RUMOperationsApi.v2.updateRUMOperationStrongLink"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateRUMOperationStrongLink' is disabled. Enable it by setting `configuration.unstableOperations['RUMOperationsApi.v2.updateRUMOperationStrongLink'] = true`",
      );
    }

    // verify required parameter 'operationId' is not null or undefined
    if (operationId === null || operationId === undefined) {
      throw new RequiredError("operationId", "updateRUMOperationStrongLink");
    }

    // verify required parameter 'featureId' is not null or undefined
    if (featureId === null || featureId === undefined) {
      throw new RequiredError("featureId", "updateRUMOperationStrongLink");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateRUMOperationStrongLink");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/operations/strong_links/{operation_id}/{feature_id}"
        .replace("{operation_id}", encodeURIComponent(String(operationId)))
        .replace("{feature_id}", encodeURIComponent(String(featureId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMOperationsApi.v2.updateRUMOperationStrongLink",
      RUMOperationsApi.operationServers,
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
      serialize(body, TypingInfo, "RUMOperationStrongLinkUpdateRequest", ""),
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

export class RUMOperationsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createRUMOperation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createRUMOperation(
    response: ResponseContext,
  ): Promise<RUMOperationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMOperationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMOperationResponse",
      ) as RUMOperationResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 409) {
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
      const body: RUMOperationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMOperationResponse",
        "",
      ) as RUMOperationResponse;
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
   * @params response Response returned by the server for a request to createRUMOperationStrongLink
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createRUMOperationStrongLink(
    response: ResponseContext,
  ): Promise<RUMOperationStrongLinkResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: RUMOperationStrongLinkResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMOperationStrongLinkResponse",
      ) as RUMOperationStrongLinkResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409
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
      const body: RUMOperationStrongLinkResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMOperationStrongLinkResponse",
        "",
      ) as RUMOperationStrongLinkResponse;
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
   * @params response Response returned by the server for a request to deleteRUMOperation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteRUMOperation(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 404) {
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
   * @params response Response returned by the server for a request to deleteRUMOperationStrongLink
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteRUMOperationStrongLink(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 404) {
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
   * @params response Response returned by the server for a request to getRUMOperation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRUMOperation(
    response: ResponseContext,
  ): Promise<RUMOperationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMOperationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMOperationResponse",
      ) as RUMOperationResponse;
      return body;
    }
    if (response.httpStatusCode === 404) {
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
      const body: RUMOperationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMOperationResponse",
        "",
      ) as RUMOperationResponse;
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
   * @params response Response returned by the server for a request to getRUMOperationByName
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRUMOperationByName(
    response: ResponseContext,
  ): Promise<RUMOperationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMOperationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMOperationResponse",
      ) as RUMOperationResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
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
      const body: RUMOperationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMOperationResponse",
        "",
      ) as RUMOperationResponse;
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
   * @params response Response returned by the server for a request to listRUMOperations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listRUMOperations(
    response: ResponseContext,
  ): Promise<RUMOperationsListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMOperationsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMOperationsListResponse",
      ) as RUMOperationsListResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: RUMOperationsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMOperationsListResponse",
        "",
      ) as RUMOperationsListResponse;
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
   * @params response Response returned by the server for a request to listRUMOperationStrongLinks
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listRUMOperationStrongLinks(
    response: ResponseContext,
  ): Promise<RUMOperationStrongLinksListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMOperationStrongLinksListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMOperationStrongLinksListResponse",
      ) as RUMOperationStrongLinksListResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: RUMOperationStrongLinksListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMOperationStrongLinksListResponse",
        "",
      ) as RUMOperationStrongLinksListResponse;
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
   * @params response Response returned by the server for a request to updateRUMOperation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateRUMOperation(
    response: ResponseContext,
  ): Promise<RUMOperationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMOperationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMOperationResponse",
      ) as RUMOperationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409
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
      const body: RUMOperationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMOperationResponse",
        "",
      ) as RUMOperationResponse;
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
   * @params response Response returned by the server for a request to updateRUMOperationStrongLink
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateRUMOperationStrongLink(
    response: ResponseContext,
  ): Promise<RUMOperationStrongLinkResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RUMOperationStrongLinkResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMOperationStrongLinkResponse",
      ) as RUMOperationStrongLinkResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
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
      const body: RUMOperationStrongLinkResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RUMOperationStrongLinkResponse",
        "",
      ) as RUMOperationStrongLinkResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface RUMOperationsApiCreateRUMOperationRequest {
  /**
   * @type RUMOperationCreateRequest
   */
  body: RUMOperationCreateRequest;
}

export interface RUMOperationsApiCreateRUMOperationStrongLinkRequest {
  /**
   * @type RUMOperationStrongLinkCreateRequest
   */
  body: RUMOperationStrongLinkCreateRequest;
}

export interface RUMOperationsApiDeleteRUMOperationRequest {
  /**
   * The unique identifier of the RUM operation to delete.
   * @type string
   */
  operationId: string;
}

export interface RUMOperationsApiDeleteRUMOperationStrongLinkRequest {
  /**
   * The unique identifier of the RUM operation.
   * @type string
   */
  operationId: string;
  /**
   * The unique identifier of the feature.
   * @type string
   */
  featureId: string;
}

export interface RUMOperationsApiGetRUMOperationRequest {
  /**
   * The unique identifier of the RUM operation.
   * @type string
   */
  operationId: string;
}

export interface RUMOperationsApiGetRUMOperationByNameRequest {
  /**
   * The unique name of the RUM operation.
   * @type string
   */
  name: string;
}

export interface RUMOperationsApiListRUMOperationsRequest {
  /**
   * A search query to filter operations by name.
   * @type string
   */
  query?: string;
  /**
   * Offset for pagination.
   * @type number
   */
  pageOffset?: number;
  /**
   * Number of items per page. Maximum of 100.
   * @type number
   */
  pageLimit?: number;
  /**
   * Filter operations by the email of their creator.
   * @type string
   */
  creator?: string;
  /**
   * Filter operations by team. Accepts a comma-separated list of teams.
   * @type string
   */
  team?: string;
  /**
   * Filter operations by feature ID. Accepts a comma-separated list of feature IDs.
   * @type string
   */
  featureId?: string;
  /**
   * Filter operations by RUM application ID.
   * @type string
   */
  applicationId?: string;
}

export interface RUMOperationsApiListRUMOperationStrongLinksRequest {
  /**
   * Filter strong links by RUM operation ID.
   * @type string
   */
  operationId?: string;
  /**
   * Filter strong links by feature ID.
   * @type string
   */
  featureId?: string;
  /**
   * Offset for pagination.
   * @type number
   */
  pageOffset?: number;
  /**
   * Number of items per page. Maximum of 200.
   * @type number
   */
  pageLimit?: number;
}

export interface RUMOperationsApiUpdateRUMOperationRequest {
  /**
   * The unique identifier of the RUM operation to update.
   * @type string
   */
  operationId: string;
  /**
   * @type RUMOperationUpdateRequest
   */
  body: RUMOperationUpdateRequest;
}

export interface RUMOperationsApiUpdateRUMOperationStrongLinkRequest {
  /**
   * The unique identifier of the RUM operation.
   * @type string
   */
  operationId: string;
  /**
   * The unique identifier of the feature.
   * @type string
   */
  featureId: string;
  /**
   * @type RUMOperationStrongLinkUpdateRequest
   */
  body: RUMOperationStrongLinkUpdateRequest;
}

export class RUMOperationsApi {
  private requestFactory: RUMOperationsApiRequestFactory;
  private responseProcessor: RUMOperationsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: RUMOperationsApiRequestFactory,
    responseProcessor?: RUMOperationsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new RUMOperationsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new RUMOperationsApiResponseProcessor();
  }

  /**
   * Create a new RUM operation, defining the journey used to detect it from RUM events.
   * @param param The request object
   */
  public createRUMOperation(
    param: RUMOperationsApiCreateRUMOperationRequest,
    options?: Configuration,
  ): Promise<RUMOperationResponse> {
    const requestContextPromise = this.requestFactory.createRUMOperation(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createRUMOperation(responseContext);
        });
    });
  }

  /**
   * Create a strong link between a RUM operation and a feature, confirming that the feature
   * belongs to the operation. The operation can be identified by `operation_id` or `operation_name`;
   * if `operation_name` does not match an existing operation, a stub operation is created.
   * @param param The request object
   */
  public createRUMOperationStrongLink(
    param: RUMOperationsApiCreateRUMOperationStrongLinkRequest,
    options?: Configuration,
  ): Promise<RUMOperationStrongLinkResponse> {
    const requestContextPromise =
      this.requestFactory.createRUMOperationStrongLink(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createRUMOperationStrongLink(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a RUM operation.
   * @param param The request object
   */
  public deleteRUMOperation(
    param: RUMOperationsApiDeleteRUMOperationRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteRUMOperation(
      param.operationId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteRUMOperation(responseContext);
        });
    });
  }

  /**
   * Delete the strong link between a RUM operation and a feature.
   * @param param The request object
   */
  public deleteRUMOperationStrongLink(
    param: RUMOperationsApiDeleteRUMOperationStrongLinkRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteRUMOperationStrongLink(
        param.operationId,
        param.featureId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteRUMOperationStrongLink(
            responseContext,
          );
        });
    });
  }

  /**
   * Retrieve a specific RUM operation by its unique identifier.
   * @param param The request object
   */
  public getRUMOperation(
    param: RUMOperationsApiGetRUMOperationRequest,
    options?: Configuration,
  ): Promise<RUMOperationResponse> {
    const requestContextPromise = this.requestFactory.getRUMOperation(
      param.operationId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRUMOperation(responseContext);
        });
    });
  }

  /**
   * Retrieve a specific RUM operation by its unique name.
   * @param param The request object
   */
  public getRUMOperationByName(
    param: RUMOperationsApiGetRUMOperationByNameRequest,
    options?: Configuration,
  ): Promise<RUMOperationResponse> {
    const requestContextPromise = this.requestFactory.getRUMOperationByName(
      param.name,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRUMOperationByName(responseContext);
        });
    });
  }

  /**
   * Search RUM operations for your organization. Supports filtering by query, creator, team, feature, and application.
   * @param param The request object
   */
  public listRUMOperations(
    param: RUMOperationsApiListRUMOperationsRequest = {},
    options?: Configuration,
  ): Promise<RUMOperationsListResponse> {
    const requestContextPromise = this.requestFactory.listRUMOperations(
      param.query,
      param.pageOffset,
      param.pageLimit,
      param.creator,
      param.team,
      param.featureId,
      param.applicationId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listRUMOperations(responseContext);
        });
    });
  }

  /**
   * List strong links between RUM operations and features. A strong link confirms that a feature
   * belongs to an operation. Provide `operation_id`, `feature_id`, or both to filter results;
   * at least one is required.
   * @param param The request object
   */
  public listRUMOperationStrongLinks(
    param: RUMOperationsApiListRUMOperationStrongLinksRequest = {},
    options?: Configuration,
  ): Promise<RUMOperationStrongLinksListResponse> {
    const requestContextPromise =
      this.requestFactory.listRUMOperationStrongLinks(
        param.operationId,
        param.featureId,
        param.pageOffset,
        param.pageLimit,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listRUMOperationStrongLinks(
            responseContext,
          );
        });
    });
  }

  /**
   * Update an existing RUM operation. Fields omitted from the request body keep their existing value,
   * with the exception of `journey_rum`, which is required and fully replaced on every update.
   * @param param The request object
   */
  public updateRUMOperation(
    param: RUMOperationsApiUpdateRUMOperationRequest,
    options?: Configuration,
  ): Promise<RUMOperationResponse> {
    const requestContextPromise = this.requestFactory.updateRUMOperation(
      param.operationId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateRUMOperation(responseContext);
        });
    });
  }

  /**
   * Update the status of a strong link between a RUM operation and a feature.
   * @param param The request object
   */
  public updateRUMOperationStrongLink(
    param: RUMOperationsApiUpdateRUMOperationStrongLinkRequest,
    options?: Configuration,
  ): Promise<RUMOperationStrongLinkResponse> {
    const requestContextPromise =
      this.requestFactory.updateRUMOperationStrongLink(
        param.operationId,
        param.featureId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateRUMOperationStrongLink(
            responseContext,
          );
        });
    });
  }
}
