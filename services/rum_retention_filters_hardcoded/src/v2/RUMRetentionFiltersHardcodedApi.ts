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
import { RumHardcodedRetentionFilterResponse } from "./models/RumHardcodedRetentionFilterResponse";
import { RumHardcodedRetentionFiltersResponse } from "./models/RumHardcodedRetentionFiltersResponse";
import { RumHardcodedRetentionFilterUpdateRequest } from "./models/RumHardcodedRetentionFilterUpdateRequest";
import { version } from "../version";

export class RUMRetentionFiltersHardcodedApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent(
        "rum-retention-filters-hardcoded",
        version,
      );
    }
  }
  public async getHardcodedRetentionFilter(
    appId: string,
    rfId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "getHardcodedRetentionFilter");
    }

    // verify required parameter 'rfId' is not null or undefined
    if (rfId === null || rfId === undefined) {
      throw new RequiredError("rfId", "getHardcodedRetentionFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/applications/{app_id}/hardcoded_retention_filters/{rf_id}"
        .replace("{app_id}", encodeURIComponent(String(appId)))
        .replace("{rf_id}", encodeURIComponent(String(rfId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMRetentionFiltersHardcodedApi.v2.getHardcodedRetentionFilter",
      RUMRetentionFiltersHardcodedApi.operationServers,
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

  public async listHardcodedRetentionFilters(
    appId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "listHardcodedRetentionFilters");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/applications/{app_id}/hardcoded_retention_filters".replace(
        "{app_id}",
        encodeURIComponent(String(appId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMRetentionFiltersHardcodedApi.v2.listHardcodedRetentionFilters",
      RUMRetentionFiltersHardcodedApi.operationServers,
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

  public async updateHardcodedRetentionFilter(
    appId: string,
    rfId: string,
    body: RumHardcodedRetentionFilterUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "updateHardcodedRetentionFilter");
    }

    // verify required parameter 'rfId' is not null or undefined
    if (rfId === null || rfId === undefined) {
      throw new RequiredError("rfId", "updateHardcodedRetentionFilter");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateHardcodedRetentionFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/applications/{app_id}/hardcoded_retention_filters/{rf_id}"
        .replace("{app_id}", encodeURIComponent(String(appId)))
        .replace("{rf_id}", encodeURIComponent(String(rfId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RUMRetentionFiltersHardcodedApi.v2.updateHardcodedRetentionFilter",
      RUMRetentionFiltersHardcodedApi.operationServers,
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
      serialize(
        body,
        TypingInfo,
        "RumHardcodedRetentionFilterUpdateRequest",
        "",
      ),
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

export class RUMRetentionFiltersHardcodedApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getHardcodedRetentionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getHardcodedRetentionFilter(
    response: ResponseContext,
  ): Promise<RumHardcodedRetentionFilterResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumHardcodedRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumHardcodedRetentionFilterResponse",
      ) as RumHardcodedRetentionFilterResponse;
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
      const body: RumHardcodedRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumHardcodedRetentionFilterResponse",
        "",
      ) as RumHardcodedRetentionFilterResponse;
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
   * @params response Response returned by the server for a request to listHardcodedRetentionFilters
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listHardcodedRetentionFilters(
    response: ResponseContext,
  ): Promise<RumHardcodedRetentionFiltersResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumHardcodedRetentionFiltersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumHardcodedRetentionFiltersResponse",
      ) as RumHardcodedRetentionFiltersResponse;
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
      const body: RumHardcodedRetentionFiltersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumHardcodedRetentionFiltersResponse",
        "",
      ) as RumHardcodedRetentionFiltersResponse;
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
   * @params response Response returned by the server for a request to updateHardcodedRetentionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateHardcodedRetentionFilter(
    response: ResponseContext,
  ): Promise<RumHardcodedRetentionFilterResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumHardcodedRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumHardcodedRetentionFilterResponse",
      ) as RumHardcodedRetentionFilterResponse;
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
      const body: RumHardcodedRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumHardcodedRetentionFilterResponse",
        "",
      ) as RumHardcodedRetentionFilterResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface RUMRetentionFiltersHardcodedApiGetHardcodedRetentionFilterRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
  /**
   * Hardcoded retention filter ID.
   * @type string
   */
  rfId: string;
}

export interface RUMRetentionFiltersHardcodedApiListHardcodedRetentionFiltersRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
}

export interface RUMRetentionFiltersHardcodedApiUpdateHardcodedRetentionFilterRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
  /**
   * Hardcoded retention filter ID.
   * @type string
   */
  rfId: string;
  /**
   * New cross-product sample rates for the hardcoded retention filter.
   * @type RumHardcodedRetentionFilterUpdateRequest
   */
  body: RumHardcodedRetentionFilterUpdateRequest;
}

export class RUMRetentionFiltersHardcodedApi {
  private requestFactory: RUMRetentionFiltersHardcodedApiRequestFactory;
  private responseProcessor: RUMRetentionFiltersHardcodedApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: RUMRetentionFiltersHardcodedApiRequestFactory,
    responseProcessor?: RUMRetentionFiltersHardcodedApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new RUMRetentionFiltersHardcodedApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor ||
      new RUMRetentionFiltersHardcodedApiResponseProcessor();
  }

  /**
   * Get a single hardcoded retention filter for a RUM application.
   * @param param The request object
   */
  public getHardcodedRetentionFilter(
    param: RUMRetentionFiltersHardcodedApiGetHardcodedRetentionFilterRequest,
    options?: Configuration,
  ): Promise<RumHardcodedRetentionFilterResponse> {
    const requestContextPromise =
      this.requestFactory.getHardcodedRetentionFilter(
        param.appId,
        param.rfId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getHardcodedRetentionFilter(
            responseContext,
          );
        });
    });
  }

  /**
   * Get the list of hardcoded retention filters for a RUM application.
   * @param param The request object
   */
  public listHardcodedRetentionFilters(
    param: RUMRetentionFiltersHardcodedApiListHardcodedRetentionFiltersRequest,
    options?: Configuration,
  ): Promise<RumHardcodedRetentionFiltersResponse> {
    const requestContextPromise =
      this.requestFactory.listHardcodedRetentionFilters(param.appId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listHardcodedRetentionFilters(
            responseContext,
          );
        });
    });
  }

  /**
   * Update the cross-product sample rates of a hardcoded retention filter for a RUM application.
   * Only fields whose matching flag in `cross_product_sampling_editability` is `true` can be updated.
   * Any other field is read-only and cannot be sent in the payload.
   * Returns the updated hardcoded retention filter when the request is successful.
   * @param param The request object
   */
  public updateHardcodedRetentionFilter(
    param: RUMRetentionFiltersHardcodedApiUpdateHardcodedRetentionFilterRequest,
    options?: Configuration,
  ): Promise<RumHardcodedRetentionFilterResponse> {
    const requestContextPromise =
      this.requestFactory.updateHardcodedRetentionFilter(
        param.appId,
        param.rfId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateHardcodedRetentionFilter(
            responseContext,
          );
        });
    });
  }
}
