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
import { NetworkHealthInsightsResponse } from "./models/NetworkHealthInsightsResponse";
import { version } from "../version";

export class NetworkHealthInsightsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("network-health-insights", version);
    }
  }
  public async listNetworkHealthInsights(
    from?: string,
    to?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["NetworkHealthInsightsApi.v2.listNetworkHealthInsights"]) {
      throw new Error("Unstable operation 'listNetworkHealthInsights' is disabled. Enable it by setting `configuration.unstableOperations['NetworkHealthInsightsApi.v2.listNetworkHealthInsights'] = true`");
    }

    // Path Params
    const localVarPath = "/api/v2/network-health-insights";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides("NetworkHealthInsightsApi.v2.listNetworkHealthInsights", NetworkHealthInsightsApi.operationServers);
    const requestContext = server.makeRequestContext(localVarPath, HttpMethod.GET, overrides);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (from !== undefined) {
      requestContext.setQueryParam(
        "from",
        serialize(from, TypingInfo, "string", ""),
        "",
      );
    }
    if (to !== undefined) {
      requestContext.setQueryParam(
        "to",
        serialize(to, TypingInfo, "string", ""),
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
}

export class NetworkHealthInsightsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listNetworkHealthInsights
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listNetworkHealthInsights(
    response: ResponseContext,
  ): Promise<NetworkHealthInsightsResponse> {
    const contentType = normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: NetworkHealthInsightsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "NetworkHealthInsightsResponse",
      ) as NetworkHealthInsightsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = parse(
        await response.body.text(),
        contentType,
      );
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
      const bodyText = parse(
        await response.body.text(),
        contentType,
      );
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
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: NetworkHealthInsightsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "NetworkHealthInsightsResponse",
        "",
      ) as NetworkHealthInsightsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface NetworkHealthInsightsApiListNetworkHealthInsightsRequest {
  /**
   * Unix timestamp (number of seconds since epoch) of the start of the query window.
   * If not provided, the start of the query window will be 15 minutes before the `to` timestamp.
   * If neither `from` nor `to` are provided, the query window will be `[now - 15m, now]`.
   * @type string
   */
  from?: string;
  /**
   * Unix timestamp (number of seconds since epoch) of the end of the query window.
   * If not provided, the end of the query window will be the current time.
   * If neither `from` nor `to` are provided, the query window will be `[now - 15m, now]`.
   * @type string
   */
  to?: string;
}

export class NetworkHealthInsightsApi {
  private requestFactory: NetworkHealthInsightsApiRequestFactory;
  private responseProcessor: NetworkHealthInsightsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {
  };

  public constructor(
    configuration?: Configuration,
    requestFactory?: NetworkHealthInsightsApiRequestFactory,
    responseProcessor?: NetworkHealthInsightsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new NetworkHealthInsightsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new NetworkHealthInsightsApiResponseProcessor();
  }

  /**
   * Return network health insights for the organization within the given time window.
   * Insights are produced by analyzing DNS failures pre-classified by `network-dns-logger`,
   * TLS certificate metrics, and denied security group connections. Each insight
   * identifies the client and server services involved, the type of issue, and the
   * magnitude of the failure observed during the query window.
   * @param param The request object
   */
  public listNetworkHealthInsights(
    param: NetworkHealthInsightsApiListNetworkHealthInsightsRequest = {},
    options?: Configuration,
  ): Promise<NetworkHealthInsightsResponse> {
    const requestContextPromise = this.requestFactory.listNetworkHealthInsights(
      param.from,
      param.to,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listNetworkHealthInsights(responseContext);
        });
    });
  }
}
