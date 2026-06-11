import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import {
  Configuration,
  applySecurityAuthentication,
} from "../../datadog-api-client-common/configuration";
import {
  RequestContext,
  HttpMethod,
  ResponseContext,
} from "../../datadog-api-client-common/http/http";

import { logger } from "../../../logger";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "../../datadog-api-client-common/exception";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { NetworkHealthInsightsResponse } from "../models/NetworkHealthInsightsResponse";

export class NetworkHealthInsightsApiRequestFactory extends BaseAPIRequestFactory {
  public async listNetworkHealthInsights(
    from?: string,
    to?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listNetworkHealthInsights'");
    if (!_config.unstableOperations["v2.listNetworkHealthInsights"]) {
      throw new Error(
        "Unstable operation 'listNetworkHealthInsights' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/network-health-insights";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.NetworkHealthInsightsApi.listNetworkHealthInsights")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (from !== undefined) {
      requestContext.setQueryParam(
        "from",
        ObjectSerializer.serialize(from, "string", ""),
        ""
      );
    }
    if (to !== undefined) {
      requestContext.setQueryParam(
        "to",
        ObjectSerializer.serialize(to, "string", ""),
        ""
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
    response: ResponseContext
  ): Promise<NetworkHealthInsightsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: NetworkHealthInsightsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NetworkHealthInsightsResponse"
      ) as NetworkHealthInsightsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: NetworkHealthInsightsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "NetworkHealthInsightsResponse",
        ""
      ) as NetworkHealthInsightsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
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

  public constructor(
    configuration: Configuration,
    requestFactory?: NetworkHealthInsightsApiRequestFactory,
    responseProcessor?: NetworkHealthInsightsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory ||
      new NetworkHealthInsightsApiRequestFactory(configuration);
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
    options?: Configuration
  ): Promise<NetworkHealthInsightsResponse> {
    const requestContextPromise = this.requestFactory.listNetworkHealthInsights(
      param.from,
      param.to,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listNetworkHealthInsights(
            responseContext
          );
        });
    });
  }
}
