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
import { DomainAllowlistRequest } from "./models/DomainAllowlistRequest";
import { DomainAllowlistResponse } from "./models/DomainAllowlistResponse";
import { version } from "../version";

export class DomainAllowlistApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("domain-allowlist", version);
    }
  }
  public async getDomainAllowlist(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/domain_allowlist";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DomainAllowlistApi.v2.getDomainAllowlist",
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
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async patchDomainAllowlist(
    body: DomainAllowlistRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "patchDomainAllowlist");
    }

    // Path Params
    const localVarPath = "/api/v2/domain_allowlist";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "DomainAllowlistApi.v2.patchDomainAllowlist",
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
      serialize(body, TypingInfo, "DomainAllowlistRequest", ""),
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

export class DomainAllowlistApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getDomainAllowlist
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getDomainAllowlist(
    response: ResponseContext,
  ): Promise<DomainAllowlistResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DomainAllowlistResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DomainAllowlistResponse",
      ) as DomainAllowlistResponse;
      return body;
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
      const body: DomainAllowlistResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DomainAllowlistResponse",
        "",
      ) as DomainAllowlistResponse;
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
   * @params response Response returned by the server for a request to patchDomainAllowlist
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async patchDomainAllowlist(
    response: ResponseContext,
  ): Promise<DomainAllowlistResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DomainAllowlistResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DomainAllowlistResponse",
      ) as DomainAllowlistResponse;
      return body;
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
      const body: DomainAllowlistResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DomainAllowlistResponse",
        "",
      ) as DomainAllowlistResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface DomainAllowlistApiPatchDomainAllowlistRequest {
  /**
   * @type DomainAllowlistRequest
   */
  body: DomainAllowlistRequest;
}

export class DomainAllowlistApi {
  private requestFactory: DomainAllowlistApiRequestFactory;
  private responseProcessor: DomainAllowlistApiResponseProcessor;
  private configuration: Configuration;

  private static operationServers: {
    [key: string]: BaseServerConfiguration[];
  } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: DomainAllowlistApiRequestFactory,
    responseProcessor?: DomainAllowlistApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new DomainAllowlistApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new DomainAllowlistApiResponseProcessor();

    // Add operation servers to the configuration
    if (Object.keys(this.operationServers).length > 0) {
      this.configuration.addOperationServers(this.operationServers);
    }
  }

  /**
   * Get the domain allowlist for an organization.
   * @param param The request object
   */
  public getDomainAllowlist(
    options?: Configuration,
  ): Promise<DomainAllowlistResponse> {
    const requestContextPromise =
      this.requestFactory.getDomainAllowlist(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getDomainAllowlist(responseContext);
        });
    });
  }

  /**
   * Update the domain allowlist for an organization.
   * @param param The request object
   */
  public patchDomainAllowlist(
    param: DomainAllowlistApiPatchDomainAllowlistRequest,
    options?: Configuration,
  ): Promise<DomainAllowlistResponse> {
    const requestContextPromise = this.requestFactory.patchDomainAllowlist(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.patchDomainAllowlist(responseContext);
        });
    });
  }
}
