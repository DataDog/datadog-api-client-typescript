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
import { VercelConfigAttributes } from "./models/VercelConfigAttributes";
import { VercelConfigResponse } from "./models/VercelConfigResponse";
import { VercelTokenCreateRequest } from "./models/VercelTokenCreateRequest";
import { version } from "../version";

export class VercelApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("vercel", version);
    }
  }
  public async createVercelToken(
    body: VercelTokenCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createVercelToken");
    }

    // Path Params
    const localVarPath = "/api/v2/vercel/token";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "VercelApi.v2.createVercelToken",
      VercelApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "VercelTokenCreateRequest", ""),
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

  public async getVercelConfig(
    configurationId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'configurationId' is not null or undefined
    if (configurationId === null || configurationId === undefined) {
      throw new RequiredError("configurationId", "getVercelConfig");
    }

    // Path Params
    const localVarPath = "/api/v2/vercel/config/{configuration_id}".replace(
      "{configuration_id}",
      encodeURIComponent(String(configurationId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "VercelApi.v2.getVercelConfig",
      VercelApi.operationServers,
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

  public async updateVercelConfig(
    configurationId: string,
    body: VercelConfigAttributes,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'configurationId' is not null or undefined
    if (configurationId === null || configurationId === undefined) {
      throw new RequiredError("configurationId", "updateVercelConfig");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateVercelConfig");
    }

    // Path Params
    const localVarPath = "/api/v2/vercel/config/{configuration_id}".replace(
      "{configuration_id}",
      encodeURIComponent(String(configurationId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "VercelApi.v2.updateVercelConfig",
      VercelApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "VercelConfigAttributes", ""),
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

export class VercelApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createVercelToken
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createVercelToken(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      return;
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
   * @params response Response returned by the server for a request to getVercelConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getVercelConfig(
    response: ResponseContext,
  ): Promise<VercelConfigResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: VercelConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "VercelConfigResponse",
      ) as VercelConfigResponse;
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
      const body: VercelConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "VercelConfigResponse",
        "",
      ) as VercelConfigResponse;
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
   * @params response Response returned by the server for a request to updateVercelConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateVercelConfig(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
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
}

export interface VercelApiCreateVercelTokenRequest {
  /**
   * @type VercelTokenCreateRequest
   */
  body: VercelTokenCreateRequest;
}

export interface VercelApiGetVercelConfigRequest {
  /**
   * The Vercel configuration ID.
   * @type string
   */
  configurationId: string;
}

export interface VercelApiUpdateVercelConfigRequest {
  /**
   * The Vercel configuration ID.
   * @type string
   */
  configurationId: string;
  /**
   * @type VercelConfigAttributes
   */
  body: VercelConfigAttributes;
}

export class VercelApi {
  private requestFactory: VercelApiRequestFactory;
  private responseProcessor: VercelApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: VercelApiRequestFactory,
    responseProcessor?: VercelApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new VercelApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new VercelApiResponseProcessor();
  }

  /**
   * Exchange a Vercel marketplace authorization code for an access token and store it in Datadog so that the integration can call Vercel APIs on behalf of the customer. This endpoint is invoked once when a customer installs the Datadog integration from the Vercel marketplace.
   * @param param The request object
   */
  public createVercelToken(
    param: VercelApiCreateVercelTokenRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.createVercelToken(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createVercelToken(responseContext);
        });
    });
  }

  /**
   * Retrieve the Datadog Vercel integration configuration for a given Vercel configuration. The response contains the API key reference, logs forwarding settings, and tracing settings stored in Datadog for this configuration.
   * @param param The request object
   */
  public getVercelConfig(
    param: VercelApiGetVercelConfigRequest,
    options?: Configuration,
  ): Promise<VercelConfigResponse> {
    const requestContextPromise = this.requestFactory.getVercelConfig(
      param.configurationId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getVercelConfig(responseContext);
        });
    });
  }

  /**
   * Update the Datadog Vercel integration configuration for a given Vercel configuration. The provided payload replaces the existing API key reference, logs forwarding settings, and tracing settings stored in Datadog for this configuration.
   * @param param The request object
   */
  public updateVercelConfig(
    param: VercelApiUpdateVercelConfigRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.updateVercelConfig(
      param.configurationId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateVercelConfig(responseContext);
        });
    });
  }
}
