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
import { RumConfigCreateRequest } from "./models/RumConfigCreateRequest";
import { RumConfigResponse } from "./models/RumConfigResponse";
import { RumConfigUpdateRequest } from "./models/RumConfigUpdateRequest";
import { version } from "../version";

export class RumConfigApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("rum-config", version);
    }
  }
  public async createRumConfig(
    body: RumConfigCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["RumConfigApi.v2.createRumConfig"]) {
      throw new Error(
        "Unstable operation 'createRumConfig' is disabled. Enable it by setting `configuration.unstableOperations['RumConfigApi.v2.createRumConfig'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createRumConfig");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/config";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumConfigApi.v2.createRumConfig",
      RumConfigApi.operationServers,
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
      serialize(body, TypingInfo, "RumConfigCreateRequest", ""),
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

  public async getRumConfig(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["RumConfigApi.v2.getRumConfig"]) {
      throw new Error(
        "Unstable operation 'getRumConfig' is disabled. Enable it by setting `configuration.unstableOperations['RumConfigApi.v2.getRumConfig'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/rum/config";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumConfigApi.v2.getRumConfig",
      RumConfigApi.operationServers,
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

  public async updateRumConfig(
    body: RumConfigUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["RumConfigApi.v2.updateRumConfig"]) {
      throw new Error(
        "Unstable operation 'updateRumConfig' is disabled. Enable it by setting `configuration.unstableOperations['RumConfigApi.v2.updateRumConfig'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateRumConfig");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/config";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumConfigApi.v2.updateRumConfig",
      RumConfigApi.operationServers,
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
      serialize(body, TypingInfo, "RumConfigUpdateRequest", ""),
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

export class RumConfigApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createRumConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createRumConfig(
    response: ResponseContext,
  ): Promise<RumConfigResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: RumConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumConfigResponse",
      ) as RumConfigResponse;
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
      const body: RumConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumConfigResponse",
        "",
      ) as RumConfigResponse;
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
   * @params response Response returned by the server for a request to getRumConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRumConfig(
    response: ResponseContext,
  ): Promise<RumConfigResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumConfigResponse",
      ) as RumConfigResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
      const body: RumConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumConfigResponse",
        "",
      ) as RumConfigResponse;
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
   * @params response Response returned by the server for a request to updateRumConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateRumConfig(
    response: ResponseContext,
  ): Promise<RumConfigResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumConfigResponse",
      ) as RumConfigResponse;
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
      const body: RumConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumConfigResponse",
        "",
      ) as RumConfigResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface RumConfigApiCreateRumConfigRequest {
  /**
   * The definition of the RUM configuration to create.
   * @type RumConfigCreateRequest
   */
  body: RumConfigCreateRequest;
}

export interface RumConfigApiUpdateRumConfigRequest {
  /**
   * New definition of the RUM configuration.
   * @type RumConfigUpdateRequest
   */
  body: RumConfigUpdateRequest;
}

export class RumConfigApi {
  private requestFactory: RumConfigApiRequestFactory;
  private responseProcessor: RumConfigApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: RumConfigApiRequestFactory,
    responseProcessor?: RumConfigApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new RumConfigApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new RumConfigApiResponseProcessor();
  }

  /**
   * Create the RUM configuration for your organization.
   * Returns the RUM configuration object from the request body when the request is successful.
   * @param param The request object
   */
  public createRumConfig(
    param: RumConfigApiCreateRumConfigRequest,
    options?: Configuration,
  ): Promise<RumConfigResponse> {
    const requestContextPromise = this.requestFactory.createRumConfig(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createRumConfig(responseContext);
        });
    });
  }

  /**
   * Get the RUM configuration for your organization.
   * @param param The request object
   */
  public getRumConfig(options?: Configuration): Promise<RumConfigResponse> {
    const requestContextPromise = this.requestFactory.getRumConfig(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRumConfig(responseContext);
        });
    });
  }

  /**
   * Update the RUM configuration for your organization.
   * Returns the RUM configuration object from the request body when the request is successful.
   * @param param The request object
   */
  public updateRumConfig(
    param: RumConfigApiUpdateRumConfigRequest,
    options?: Configuration,
  ): Promise<RumConfigResponse> {
    const requestContextPromise = this.requestFactory.updateRumConfig(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateRumConfig(responseContext);
        });
    });
  }
}
