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
import { IncidentRelatedObject } from "./models/IncidentRelatedObject";
import { IncidentServiceCreateRequest } from "./models/IncidentServiceCreateRequest";
import { IncidentServiceResponse } from "./models/IncidentServiceResponse";
import { IncidentServicesResponse } from "./models/IncidentServicesResponse";
import { IncidentServiceUpdateRequest } from "./models/IncidentServiceUpdateRequest";
import { version } from "../version";

export class IncidentServicesApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("incident-services", version);
    }
  }
  public async createIncidentService(
    body: IncidentServiceCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IncidentServicesApi.v2.createIncidentService"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createIncidentService' is disabled. Enable it by setting `configuration.unstableOperations['IncidentServicesApi.v2.createIncidentService'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createIncidentService");
    }

    // Path Params
    const localVarPath = "/api/v2/services";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentServicesApi.v2.createIncidentService",
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
      serialize(body, TypingInfo, "IncidentServiceCreateRequest", ""),
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

  public async deleteIncidentService(
    serviceId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IncidentServicesApi.v2.deleteIncidentService"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteIncidentService' is disabled. Enable it by setting `configuration.unstableOperations['IncidentServicesApi.v2.deleteIncidentService'] = true`",
      );
    }

    // verify required parameter 'serviceId' is not null or undefined
    if (serviceId === null || serviceId === undefined) {
      throw new RequiredError("serviceId", "deleteIncidentService");
    }

    // Path Params
    const localVarPath = "/api/v2/services/{service_id}".replace(
      "{service_id}",
      encodeURIComponent(String(serviceId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentServicesApi.v2.deleteIncidentService",
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
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getIncidentService(
    serviceId: string,
    include?: IncidentRelatedObject,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["IncidentServicesApi.v2.getIncidentService"]
    ) {
      throw new Error(
        "Unstable operation 'getIncidentService' is disabled. Enable it by setting `configuration.unstableOperations['IncidentServicesApi.v2.getIncidentService'] = true`",
      );
    }

    // verify required parameter 'serviceId' is not null or undefined
    if (serviceId === null || serviceId === undefined) {
      throw new RequiredError("serviceId", "getIncidentService");
    }

    // Path Params
    const localVarPath = "/api/v2/services/{service_id}".replace(
      "{service_id}",
      encodeURIComponent(String(serviceId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentServicesApi.v2.getIncidentService",
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
        serialize(include, TypingInfo, "IncidentRelatedObject", ""),
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

  public async listIncidentServices(
    include?: IncidentRelatedObject,
    pageSize?: number,
    pageOffset?: number,
    filter?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["IncidentServicesApi.v2.listIncidentServices"]
    ) {
      throw new Error(
        "Unstable operation 'listIncidentServices' is disabled. Enable it by setting `configuration.unstableOperations['IncidentServicesApi.v2.listIncidentServices'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/services";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentServicesApi.v2.listIncidentServices",
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
        serialize(include, TypingInfo, "IncidentRelatedObject", ""),
        "",
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        serialize(pageSize, TypingInfo, "number", "int64"),
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
    if (filter !== undefined) {
      requestContext.setQueryParam(
        "filter",
        serialize(filter, TypingInfo, "string", ""),
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

  public async updateIncidentService(
    serviceId: string,
    body: IncidentServiceUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "IncidentServicesApi.v2.updateIncidentService"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateIncidentService' is disabled. Enable it by setting `configuration.unstableOperations['IncidentServicesApi.v2.updateIncidentService'] = true`",
      );
    }

    // verify required parameter 'serviceId' is not null or undefined
    if (serviceId === null || serviceId === undefined) {
      throw new RequiredError("serviceId", "updateIncidentService");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateIncidentService");
    }

    // Path Params
    const localVarPath = "/api/v2/services/{service_id}".replace(
      "{service_id}",
      encodeURIComponent(String(serviceId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "IncidentServicesApi.v2.updateIncidentService",
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
      serialize(body, TypingInfo, "IncidentServiceUpdateRequest", ""),
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
}

export class IncidentServicesApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createIncidentService
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createIncidentService(
    response: ResponseContext,
  ): Promise<IncidentServiceResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: IncidentServiceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentServiceResponse",
      ) as IncidentServiceResponse;
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
      const body: IncidentServiceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentServiceResponse",
        "",
      ) as IncidentServiceResponse;
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
   * @params response Response returned by the server for a request to deleteIncidentService
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteIncidentService(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to getIncidentService
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIncidentService(
    response: ResponseContext,
  ): Promise<IncidentServiceResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentServiceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentServiceResponse",
      ) as IncidentServiceResponse;
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
      const body: IncidentServiceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentServiceResponse",
        "",
      ) as IncidentServiceResponse;
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
   * @params response Response returned by the server for a request to listIncidentServices
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIncidentServices(
    response: ResponseContext,
  ): Promise<IncidentServicesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentServicesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentServicesResponse",
      ) as IncidentServicesResponse;
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
      const body: IncidentServicesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentServicesResponse",
        "",
      ) as IncidentServicesResponse;
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
   * @params response Response returned by the server for a request to updateIncidentService
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIncidentService(
    response: ResponseContext,
  ): Promise<IncidentServiceResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IncidentServiceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentServiceResponse",
      ) as IncidentServiceResponse;
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
      const body: IncidentServiceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IncidentServiceResponse",
        "",
      ) as IncidentServiceResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface IncidentServicesApiCreateIncidentServiceRequest {
  /**
   * Incident Service Payload.
   * @type IncidentServiceCreateRequest
   */
  body: IncidentServiceCreateRequest;
}

export interface IncidentServicesApiDeleteIncidentServiceRequest {
  /**
   * The ID of the incident service.
   * @type string
   */
  serviceId: string;
}

export interface IncidentServicesApiGetIncidentServiceRequest {
  /**
   * The ID of the incident service.
   * @type string
   */
  serviceId: string;
  /**
   * Specifies which types of related objects should be included in the response.
   * @type IncidentRelatedObject
   */
  include?: IncidentRelatedObject;
}

export interface IncidentServicesApiListIncidentServicesRequest {
  /**
   * Specifies which types of related objects should be included in the response.
   * @type IncidentRelatedObject
   */
  include?: IncidentRelatedObject;
  /**
   * Size for a given page. The maximum allowed value is 100.
   * @type number
   */
  pageSize?: number;
  /**
   * Specific offset to use as the beginning of the returned page.
   * @type number
   */
  pageOffset?: number;
  /**
   * A search query that filters services by name.
   * @type string
   */
  filter?: string;
}

export interface IncidentServicesApiUpdateIncidentServiceRequest {
  /**
   * The ID of the incident service.
   * @type string
   */
  serviceId: string;
  /**
   * Incident Service Payload.
   * @type IncidentServiceUpdateRequest
   */
  body: IncidentServiceUpdateRequest;
}

export class IncidentServicesApi {
  private requestFactory: IncidentServicesApiRequestFactory;
  private responseProcessor: IncidentServicesApiResponseProcessor;
  private configuration: Configuration;

  private operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: IncidentServicesApiRequestFactory,
    responseProcessor?: IncidentServicesApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new IncidentServicesApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new IncidentServicesApiResponseProcessor();

    // Add operation servers to the configuration
    if (Object.keys(this.operationServers).length > 0) {
      this.configuration.addOperationServers(this.operationServers);
    }
  }

  /**
   * Creates a new incident service.
   * @param param The request object
   */
  public createIncidentService(
    param: IncidentServicesApiCreateIncidentServiceRequest,
    options?: Configuration,
  ): Promise<IncidentServiceResponse> {
    const requestContextPromise = this.requestFactory.createIncidentService(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createIncidentService(responseContext);
        });
    });
  }

  /**
   * Deletes an existing incident service.
   * @param param The request object
   */
  public deleteIncidentService(
    param: IncidentServicesApiDeleteIncidentServiceRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteIncidentService(
      param.serviceId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteIncidentService(responseContext);
        });
    });
  }

  /**
   * Get details of an incident service. If the `include[users]` query parameter is provided,
   * the included attribute will contain the users related to these incident services.
   * @param param The request object
   */
  public getIncidentService(
    param: IncidentServicesApiGetIncidentServiceRequest,
    options?: Configuration,
  ): Promise<IncidentServiceResponse> {
    const requestContextPromise = this.requestFactory.getIncidentService(
      param.serviceId,
      param.include,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIncidentService(responseContext);
        });
    });
  }

  /**
   * Get all incident services uploaded for the requesting user's organization. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident services.
   * @param param The request object
   */
  public listIncidentServices(
    param: IncidentServicesApiListIncidentServicesRequest = {},
    options?: Configuration,
  ): Promise<IncidentServicesResponse> {
    const requestContextPromise = this.requestFactory.listIncidentServices(
      param.include,
      param.pageSize,
      param.pageOffset,
      param.filter,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listIncidentServices(responseContext);
        });
    });
  }

  /**
   * Updates an existing incident service. Only provide the attributes which should be updated as this request is a partial update.
   * @param param The request object
   */
  public updateIncidentService(
    param: IncidentServicesApiUpdateIncidentServiceRequest,
    options?: Configuration,
  ): Promise<IncidentServiceResponse> {
    const requestContextPromise = this.requestFactory.updateIncidentService(
      param.serviceId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIncidentService(responseContext);
        });
    });
  }
}
