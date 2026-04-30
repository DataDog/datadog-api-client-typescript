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
import { RumPermanentRetentionFilterResponse } from "./models/RumPermanentRetentionFilterResponse";
import { RumPermanentRetentionFiltersResponse } from "./models/RumPermanentRetentionFiltersResponse";
import { RumPermanentRetentionFilterUpdateRequest } from "./models/RumPermanentRetentionFilterUpdateRequest";
import { version } from "../version";

export class RumRetentionFiltersPermanentApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent(
        "rum-retention-filters-permanent",
        version,
      );
    }
  }
  public async getPermanentRetentionFilter(
    appId: string,
    rfId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "getPermanentRetentionFilter");
    }

    // verify required parameter 'rfId' is not null or undefined
    if (rfId === null || rfId === undefined) {
      throw new RequiredError("rfId", "getPermanentRetentionFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/applications/{app_id}/permanent_retention_filters/{rf_id}"
        .replace("{app_id}", encodeURIComponent(String(appId)))
        .replace("{rf_id}", encodeURIComponent(String(rfId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumRetentionFiltersPermanentApi.v2.getPermanentRetentionFilter",
      RumRetentionFiltersPermanentApi.operationServers,
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

  public async listPermanentRetentionFilters(
    appId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "listPermanentRetentionFilters");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/applications/{app_id}/permanent_retention_filters".replace(
        "{app_id}",
        encodeURIComponent(String(appId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumRetentionFiltersPermanentApi.v2.listPermanentRetentionFilters",
      RumRetentionFiltersPermanentApi.operationServers,
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

  public async updatePermanentRetentionFilter(
    appId: string,
    rfId: string,
    body: RumPermanentRetentionFilterUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "updatePermanentRetentionFilter");
    }

    // verify required parameter 'rfId' is not null or undefined
    if (rfId === null || rfId === undefined) {
      throw new RequiredError("rfId", "updatePermanentRetentionFilter");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updatePermanentRetentionFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/applications/{app_id}/permanent_retention_filters/{rf_id}"
        .replace("{app_id}", encodeURIComponent(String(appId)))
        .replace("{rf_id}", encodeURIComponent(String(rfId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "RumRetentionFiltersPermanentApi.v2.updatePermanentRetentionFilter",
      RumRetentionFiltersPermanentApi.operationServers,
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
        "RumPermanentRetentionFilterUpdateRequest",
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

export class RumRetentionFiltersPermanentApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getPermanentRetentionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getPermanentRetentionFilter(
    response: ResponseContext,
  ): Promise<RumPermanentRetentionFilterResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumPermanentRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumPermanentRetentionFilterResponse",
      ) as RumPermanentRetentionFilterResponse;
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
      const body: RumPermanentRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumPermanentRetentionFilterResponse",
        "",
      ) as RumPermanentRetentionFilterResponse;
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
   * @params response Response returned by the server for a request to listPermanentRetentionFilters
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listPermanentRetentionFilters(
    response: ResponseContext,
  ): Promise<RumPermanentRetentionFiltersResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumPermanentRetentionFiltersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumPermanentRetentionFiltersResponse",
      ) as RumPermanentRetentionFiltersResponse;
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
      const body: RumPermanentRetentionFiltersResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumPermanentRetentionFiltersResponse",
        "",
      ) as RumPermanentRetentionFiltersResponse;
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
   * @params response Response returned by the server for a request to updatePermanentRetentionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updatePermanentRetentionFilter(
    response: ResponseContext,
  ): Promise<RumPermanentRetentionFilterResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RumPermanentRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumPermanentRetentionFilterResponse",
      ) as RumPermanentRetentionFilterResponse;
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
      const body: RumPermanentRetentionFilterResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RumPermanentRetentionFilterResponse",
        "",
      ) as RumPermanentRetentionFilterResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface RumRetentionFiltersPermanentApiGetPermanentRetentionFilterRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
  /**
   * Permanent retention filter ID.
   * @type string
   */
  rfId: string;
}

export interface RumRetentionFiltersPermanentApiListPermanentRetentionFiltersRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
}

export interface RumRetentionFiltersPermanentApiUpdatePermanentRetentionFilterRequest {
  /**
   * RUM application ID.
   * @type string
   */
  appId: string;
  /**
   * Permanent retention filter ID.
   * @type string
   */
  rfId: string;
  /**
   * New cross-product sample rates for the permanent retention filter.
   * @type RumPermanentRetentionFilterUpdateRequest
   */
  body: RumPermanentRetentionFilterUpdateRequest;
}

export class RumRetentionFiltersPermanentApi {
  private requestFactory: RumRetentionFiltersPermanentApiRequestFactory;
  private responseProcessor: RumRetentionFiltersPermanentApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: RumRetentionFiltersPermanentApiRequestFactory,
    responseProcessor?: RumRetentionFiltersPermanentApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new RumRetentionFiltersPermanentApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor ||
      new RumRetentionFiltersPermanentApiResponseProcessor();
  }

  /**
   * Get a single permanent retention filter for a RUM application.
   * @param param The request object
   */
  public getPermanentRetentionFilter(
    param: RumRetentionFiltersPermanentApiGetPermanentRetentionFilterRequest,
    options?: Configuration,
  ): Promise<RumPermanentRetentionFilterResponse> {
    const requestContextPromise =
      this.requestFactory.getPermanentRetentionFilter(
        param.appId,
        param.rfId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getPermanentRetentionFilter(
            responseContext,
          );
        });
    });
  }

  /**
   * Get the list of permanent retention filters for a RUM application.
   * @param param The request object
   */
  public listPermanentRetentionFilters(
    param: RumRetentionFiltersPermanentApiListPermanentRetentionFiltersRequest,
    options?: Configuration,
  ): Promise<RumPermanentRetentionFiltersResponse> {
    const requestContextPromise =
      this.requestFactory.listPermanentRetentionFilters(param.appId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listPermanentRetentionFilters(
            responseContext,
          );
        });
    });
  }

  /**
   * Update the cross-product sample rates of a permanent retention filter for a RUM application.
   * Only `cross_product_sampling.trace_sample_rate` can be updated,
   * and only when the matching flag in `cross_product_sampling_editability` is `true` on the filter.
   * Any other field is read-only and cannot be sent in the payload.
   * Returns the updated permanent retention filter when the request is successful.
   * @param param The request object
   */
  public updatePermanentRetentionFilter(
    param: RumRetentionFiltersPermanentApiUpdatePermanentRetentionFilterRequest,
    options?: Configuration,
  ): Promise<RumPermanentRetentionFilterResponse> {
    const requestContextPromise =
      this.requestFactory.updatePermanentRetentionFilter(
        param.appId,
        param.rfId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updatePermanentRetentionFilter(
            responseContext,
          );
        });
    });
  }
}
