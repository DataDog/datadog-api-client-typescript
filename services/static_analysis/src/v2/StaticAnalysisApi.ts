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
import { ResolveVulnerableSymbolsRequest } from "./models/ResolveVulnerableSymbolsRequest";
import { ResolveVulnerableSymbolsResponse } from "./models/ResolveVulnerableSymbolsResponse";
import { ScaRequest } from "./models/ScaRequest";
import { version } from "../version";

export class StaticAnalysisApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("static-analysis", version);
    }
  }
  public async createSCAResolveVulnerableSymbols(
    body: ResolveVulnerableSymbolsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "StaticAnalysisApi.v2.createSCAResolveVulnerableSymbols"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createSCAResolveVulnerableSymbols' is disabled. Enable it by setting `configuration.unstableOperations['StaticAnalysisApi.v2.createSCAResolveVulnerableSymbols'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createSCAResolveVulnerableSymbols");
    }

    // Path Params
    const localVarPath =
      "/api/v2/static-analysis-sca/vulnerabilities/resolve-vulnerable-symbols";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StaticAnalysisApi.v2.createSCAResolveVulnerableSymbols",
      StaticAnalysisApi.operationServers,
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
      serialize(body, TypingInfo, "ResolveVulnerableSymbolsRequest", ""),
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

  public async createSCAResult(
    body: ScaRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["StaticAnalysisApi.v2.createSCAResult"]) {
      throw new Error(
        "Unstable operation 'createSCAResult' is disabled. Enable it by setting `configuration.unstableOperations['StaticAnalysisApi.v2.createSCAResult'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createSCAResult");
    }

    // Path Params
    const localVarPath = "/api/v2/static-analysis-sca/dependencies";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StaticAnalysisApi.v2.createSCAResult",
      StaticAnalysisApi.operationServers,
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
      serialize(body, TypingInfo, "ScaRequest", ""),
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

export class StaticAnalysisApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createSCAResolveVulnerableSymbols
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSCAResolveVulnerableSymbols(
    response: ResponseContext,
  ): Promise<ResolveVulnerableSymbolsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ResolveVulnerableSymbolsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ResolveVulnerableSymbolsResponse",
      ) as ResolveVulnerableSymbolsResponse;
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
      const body: ResolveVulnerableSymbolsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ResolveVulnerableSymbolsResponse",
        "",
      ) as ResolveVulnerableSymbolsResponse;
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
   * @params response Response returned by the server for a request to createSCAResult
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSCAResult(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      return;
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

export interface StaticAnalysisApiCreateSCAResolveVulnerableSymbolsRequest {
  /**
   * @type ResolveVulnerableSymbolsRequest
   */
  body: ResolveVulnerableSymbolsRequest;
}

export interface StaticAnalysisApiCreateSCAResultRequest {
  /**
   * @type ScaRequest
   */
  body: ScaRequest;
}

export class StaticAnalysisApi {
  private requestFactory: StaticAnalysisApiRequestFactory;
  private responseProcessor: StaticAnalysisApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: StaticAnalysisApiRequestFactory,
    responseProcessor?: StaticAnalysisApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new StaticAnalysisApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new StaticAnalysisApiResponseProcessor();
  }

  /**
   * Post vulnerable symbols
   * @param param The request object
   */
  public createSCAResolveVulnerableSymbols(
    param: StaticAnalysisApiCreateSCAResolveVulnerableSymbolsRequest,
    options?: Configuration,
  ): Promise<ResolveVulnerableSymbolsResponse> {
    const requestContextPromise =
      this.requestFactory.createSCAResolveVulnerableSymbols(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSCAResolveVulnerableSymbols(
            responseContext,
          );
        });
    });
  }

  /**
   * Post dependencies for analysis
   * @param param The request object
   */
  public createSCAResult(
    param: StaticAnalysisApiCreateSCAResultRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.createSCAResult(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSCAResult(responseContext);
        });
    });
  }
}
