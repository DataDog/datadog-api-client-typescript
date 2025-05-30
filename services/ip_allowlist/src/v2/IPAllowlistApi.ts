import {
  BaseAPIRequestFactory,
  Configuration,
  applySecurityAuthentication,
  RequestContext,
  HttpMethod,
  ResponseContext,
  logger,
  RequiredError,
  ApiException,
  createConfiguration,
  getPreferredMediaType,
  stringify,
  serialize,
  deserialize,
  parse,
  normalizeMediaType,
  buildUserAgent,
  isBrowser,
} from "@datadog/datadog-api-client";

import { TypingInfo } from "./models/TypingInfo";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { IPAllowlistResponse } from "./models/IPAllowlistResponse";
import { IPAllowlistUpdateRequest } from "./models/IPAllowlistUpdateRequest";
import { version } from "../version";

export class IPAllowlistApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("ip-allowlist", version);
    }
  }
  public async getIPAllowlist(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/ip_allowlist";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IPAllowlistApi.getIPAllowlist")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
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

  public async updateIPAllowlist(
    body: IPAllowlistUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateIPAllowlist");
    }

    // Path Params
    const localVarPath = "/api/v2/ip_allowlist";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.IPAllowlistApi.updateIPAllowlist")
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
      serialize(body, TypingInfo, "IPAllowlistUpdateRequest", ""),
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

export class IPAllowlistApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getIPAllowlist
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIPAllowlist(
    response: ResponseContext,
  ): Promise<IPAllowlistResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IPAllowlistResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IPAllowlistResponse",
      ) as IPAllowlistResponse;
      return body;
    }
    if (
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
      const body: IPAllowlistResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IPAllowlistResponse",
        "",
      ) as IPAllowlistResponse;
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
   * @params response Response returned by the server for a request to updateIPAllowlist
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateIPAllowlist(
    response: ResponseContext,
  ): Promise<IPAllowlistResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IPAllowlistResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IPAllowlistResponse",
      ) as IPAllowlistResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: IPAllowlistResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IPAllowlistResponse",
        "",
      ) as IPAllowlistResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface IPAllowlistApiUpdateIPAllowlistRequest {
  /**
   * @type IPAllowlistUpdateRequest
   */
  body: IPAllowlistUpdateRequest;
}

export class IPAllowlistApi {
  private requestFactory: IPAllowlistApiRequestFactory;
  private responseProcessor: IPAllowlistApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: IPAllowlistApiRequestFactory,
    responseProcessor?: IPAllowlistApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new IPAllowlistApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new IPAllowlistApiResponseProcessor();
  }

  /**
   * Returns the IP allowlist and its enabled or disabled state.
   * @param param The request object
   */
  public getIPAllowlist(options?: Configuration): Promise<IPAllowlistResponse> {
    const requestContextPromise = this.requestFactory.getIPAllowlist(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIPAllowlist(responseContext);
        });
    });
  }

  /**
   * Edit the entries in the IP allowlist, and enable or disable it.
   * @param param The request object
   */
  public updateIPAllowlist(
    param: IPAllowlistApiUpdateIPAllowlistRequest,
    options?: Configuration,
  ): Promise<IPAllowlistResponse> {
    const requestContextPromise = this.requestFactory.updateIPAllowlist(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateIPAllowlist(responseContext);
        });
    });
  }
}
