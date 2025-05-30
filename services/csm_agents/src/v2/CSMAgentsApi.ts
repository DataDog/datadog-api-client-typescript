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
import { CsmAgentsResponse } from "./models/CsmAgentsResponse";
import { OrderDirection } from "./models/OrderDirection";
import { version } from "../version";

export class CSMAgentsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("csm-agents", version);
    }
  }
  public async listAllCSMAgents(
    page?: number,
    size?: number,
    query?: string,
    orderDirection?: OrderDirection,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/csm/onboarding/agents";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CSMAgentsApi.listAllCSMAgents")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (page !== undefined) {
      requestContext.setQueryParam(
        "page",
        serialize(page, TypingInfo, "number", "int32"),
        "",
      );
    }
    if (size !== undefined) {
      requestContext.setQueryParam(
        "size",
        serialize(size, TypingInfo, "number", "int32"),
        "",
      );
    }
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        serialize(query, TypingInfo, "string", ""),
        "",
      );
    }
    if (orderDirection !== undefined) {
      requestContext.setQueryParam(
        "order_direction",
        serialize(orderDirection, TypingInfo, "OrderDirection", ""),
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

  public async listAllCSMServerlessAgents(
    page?: number,
    size?: number,
    query?: string,
    orderDirection?: OrderDirection,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/csm/onboarding/serverless/agents";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CSMAgentsApi.listAllCSMServerlessAgents")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (page !== undefined) {
      requestContext.setQueryParam(
        "page",
        serialize(page, TypingInfo, "number", "int32"),
        "",
      );
    }
    if (size !== undefined) {
      requestContext.setQueryParam(
        "size",
        serialize(size, TypingInfo, "number", "int32"),
        "",
      );
    }
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        serialize(query, TypingInfo, "string", ""),
        "",
      );
    }
    if (orderDirection !== undefined) {
      requestContext.setQueryParam(
        "order_direction",
        serialize(orderDirection, TypingInfo, "OrderDirection", ""),
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

export class CSMAgentsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listAllCSMAgents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAllCSMAgents(
    response: ResponseContext,
  ): Promise<CsmAgentsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CsmAgentsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CsmAgentsResponse",
      ) as CsmAgentsResponse;
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
      const body: CsmAgentsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CsmAgentsResponse",
        "",
      ) as CsmAgentsResponse;
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
   * @params response Response returned by the server for a request to listAllCSMServerlessAgents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAllCSMServerlessAgents(
    response: ResponseContext,
  ): Promise<CsmAgentsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CsmAgentsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CsmAgentsResponse",
      ) as CsmAgentsResponse;
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
      const body: CsmAgentsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CsmAgentsResponse",
        "",
      ) as CsmAgentsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface CSMAgentsApiListAllCSMAgentsRequest {
  /**
   * The page index for pagination (zero-based).
   * @type number
   */
  page?: number;
  /**
   * The number of items to include in a single page.
   * @type number
   */
  size?: number;
  /**
   * A search query string to filter results (for example, `hostname:COMP-T2H4J27423`).
   * @type string
   */
  query?: string;
  /**
   * The sort direction for results. Use `asc` for ascending or `desc` for descending.
   * @type OrderDirection
   */
  orderDirection?: OrderDirection;
}

export interface CSMAgentsApiListAllCSMServerlessAgentsRequest {
  /**
   * The page index for pagination (zero-based).
   * @type number
   */
  page?: number;
  /**
   * The number of items to include in a single page.
   * @type number
   */
  size?: number;
  /**
   * A search query string to filter results (for example, `hostname:COMP-T2H4J27423`).
   * @type string
   */
  query?: string;
  /**
   * The sort direction for results. Use `asc` for ascending or `desc` for descending.
   * @type OrderDirection
   */
  orderDirection?: OrderDirection;
}

export class CSMAgentsApi {
  private requestFactory: CSMAgentsApiRequestFactory;
  private responseProcessor: CSMAgentsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: CSMAgentsApiRequestFactory,
    responseProcessor?: CSMAgentsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new CSMAgentsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new CSMAgentsApiResponseProcessor();
  }

  /**
   * Get the list of all CSM Agents running on your hosts and containers.
   * @param param The request object
   */
  public listAllCSMAgents(
    param: CSMAgentsApiListAllCSMAgentsRequest = {},
    options?: Configuration,
  ): Promise<CsmAgentsResponse> {
    const requestContextPromise = this.requestFactory.listAllCSMAgents(
      param.page,
      param.size,
      param.query,
      param.orderDirection,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAllCSMAgents(responseContext);
        });
    });
  }

  /**
   * Get the list of all CSM Serverless Agents running on your hosts and containers.
   * @param param The request object
   */
  public listAllCSMServerlessAgents(
    param: CSMAgentsApiListAllCSMServerlessAgentsRequest = {},
    options?: Configuration,
  ): Promise<CsmAgentsResponse> {
    const requestContextPromise =
      this.requestFactory.listAllCSMServerlessAgents(
        param.page,
        param.size,
        param.query,
        param.orderDirection,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAllCSMServerlessAgents(
            responseContext,
          );
        });
    });
  }
}
