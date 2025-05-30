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
import { CheckCanDeleteSLOResponse } from "./models/CheckCanDeleteSLOResponse";
import { SearchSLOResponse } from "./models/SearchSLOResponse";
import { ServiceLevelObjective } from "./models/ServiceLevelObjective";
import { ServiceLevelObjectiveRequest } from "./models/ServiceLevelObjectiveRequest";
import { SLOBulkDeleteResponse } from "./models/SLOBulkDeleteResponse";
import { SLOCorrectionListResponse } from "./models/SLOCorrectionListResponse";
import { SLODeleteResponse } from "./models/SLODeleteResponse";
import { SLOHistoryResponse } from "./models/SLOHistoryResponse";
import { SLOListResponse } from "./models/SLOListResponse";
import { SLOResponse } from "./models/SLOResponse";
import { SLOTimeframe } from "./models/SLOTimeframe";
import { version } from "../version";

export class ServiceLevelObjectivesApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("service-level-objectives", version);
    }
  }
  public async checkCanDeleteSLO(
    ids: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'ids' is not null or undefined
    if (ids === null || ids === undefined) {
      throw new RequiredError("ids", "checkCanDeleteSLO");
    }

    // Path Params
    const localVarPath = "/api/v1/slo/can_delete";

    // Make Request Context
    const requestContext = _config
      .getServer("v1.ServiceLevelObjectivesApi.checkCanDeleteSLO")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (ids !== undefined) {
      requestContext.setQueryParam(
        "ids",
        serialize(ids, TypingInfo, "string", ""),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async createSLO(
    body: ServiceLevelObjectiveRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createSLO");
    }

    // Path Params
    const localVarPath = "/api/v1/slo";

    // Make Request Context
    const requestContext = _config
      .getServer("v1.ServiceLevelObjectivesApi.createSLO")
      .makeRequestContext(localVarPath, HttpMethod.POST);
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
      serialize(body, TypingInfo, "ServiceLevelObjectiveRequest", ""),
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

  public async deleteSLO(
    sloId: string,
    force?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'sloId' is not null or undefined
    if (sloId === null || sloId === undefined) {
      throw new RequiredError("sloId", "deleteSLO");
    }

    // Path Params
    const localVarPath = "/api/v1/slo/{slo_id}".replace(
      "{slo_id}",
      encodeURIComponent(String(sloId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.ServiceLevelObjectivesApi.deleteSLO")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (force !== undefined) {
      requestContext.setQueryParam(
        "force",
        serialize(force, TypingInfo, "string", ""),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteSLOTimeframeInBulk(
    body: { [key: string]: Array<SLOTimeframe> },
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deleteSLOTimeframeInBulk");
    }

    // Path Params
    const localVarPath = "/api/v1/slo/bulk_delete";

    // Make Request Context
    const requestContext = _config
      .getServer("v1.ServiceLevelObjectivesApi.deleteSLOTimeframeInBulk")
      .makeRequestContext(localVarPath, HttpMethod.POST);
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
        "{ [key: string]: Array<SLOTimeframe>; }",
        "",
      ),
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

  public async getSLO(
    sloId: string,
    withConfiguredAlertIds?: boolean,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'sloId' is not null or undefined
    if (sloId === null || sloId === undefined) {
      throw new RequiredError("sloId", "getSLO");
    }

    // Path Params
    const localVarPath = "/api/v1/slo/{slo_id}".replace(
      "{slo_id}",
      encodeURIComponent(String(sloId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.ServiceLevelObjectivesApi.getSLO")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (withConfiguredAlertIds !== undefined) {
      requestContext.setQueryParam(
        "with_configured_alert_ids",
        serialize(withConfiguredAlertIds, TypingInfo, "boolean", ""),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getSLOCorrections(
    sloId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'sloId' is not null or undefined
    if (sloId === null || sloId === undefined) {
      throw new RequiredError("sloId", "getSLOCorrections");
    }

    // Path Params
    const localVarPath = "/api/v1/slo/{slo_id}/corrections".replace(
      "{slo_id}",
      encodeURIComponent(String(sloId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.ServiceLevelObjectivesApi.getSLOCorrections")
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

  public async getSLOHistory(
    sloId: string,
    fromTs: number,
    toTs: number,
    target?: number,
    applyCorrection?: boolean,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'sloId' is not null or undefined
    if (sloId === null || sloId === undefined) {
      throw new RequiredError("sloId", "getSLOHistory");
    }

    // verify required parameter 'fromTs' is not null or undefined
    if (fromTs === null || fromTs === undefined) {
      throw new RequiredError("fromTs", "getSLOHistory");
    }

    // verify required parameter 'toTs' is not null or undefined
    if (toTs === null || toTs === undefined) {
      throw new RequiredError("toTs", "getSLOHistory");
    }

    // Path Params
    const localVarPath = "/api/v1/slo/{slo_id}/history".replace(
      "{slo_id}",
      encodeURIComponent(String(sloId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.ServiceLevelObjectivesApi.getSLOHistory")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (fromTs !== undefined) {
      requestContext.setQueryParam(
        "from_ts",
        serialize(fromTs, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (toTs !== undefined) {
      requestContext.setQueryParam(
        "to_ts",
        serialize(toTs, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (target !== undefined) {
      requestContext.setQueryParam(
        "target",
        serialize(target, TypingInfo, "number", "double"),
        "",
      );
    }
    if (applyCorrection !== undefined) {
      requestContext.setQueryParam(
        "apply_correction",
        serialize(applyCorrection, TypingInfo, "boolean", ""),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listSLOs(
    ids?: string,
    query?: string,
    tagsQuery?: string,
    metricsQuery?: string,
    limit?: number,
    offset?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/slo";

    // Make Request Context
    const requestContext = _config
      .getServer("v1.ServiceLevelObjectivesApi.listSLOs")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (ids !== undefined) {
      requestContext.setQueryParam(
        "ids",
        serialize(ids, TypingInfo, "string", ""),
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
    if (tagsQuery !== undefined) {
      requestContext.setQueryParam(
        "tags_query",
        serialize(tagsQuery, TypingInfo, "string", ""),
        "",
      );
    }
    if (metricsQuery !== undefined) {
      requestContext.setQueryParam(
        "metrics_query",
        serialize(metricsQuery, TypingInfo, "string", ""),
        "",
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        serialize(limit, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (offset !== undefined) {
      requestContext.setQueryParam(
        "offset",
        serialize(offset, TypingInfo, "number", "int64"),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async searchSLO(
    query?: string,
    pageSize?: number,
    pageNumber?: number,
    includeFacets?: boolean,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/slo/search";

    // Make Request Context
    const requestContext = _config
      .getServer("v1.ServiceLevelObjectivesApi.searchSLO")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        serialize(query, TypingInfo, "string", ""),
        "",
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        serialize(pageSize, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        serialize(pageNumber, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (includeFacets !== undefined) {
      requestContext.setQueryParam(
        "include_facets",
        serialize(includeFacets, TypingInfo, "boolean", ""),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateSLO(
    sloId: string,
    body: ServiceLevelObjective,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'sloId' is not null or undefined
    if (sloId === null || sloId === undefined) {
      throw new RequiredError("sloId", "updateSLO");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateSLO");
    }

    // Path Params
    const localVarPath = "/api/v1/slo/{slo_id}".replace(
      "{slo_id}",
      encodeURIComponent(String(sloId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.ServiceLevelObjectivesApi.updateSLO")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
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
      serialize(body, TypingInfo, "ServiceLevelObjective", ""),
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

export class ServiceLevelObjectivesApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to checkCanDeleteSLO
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async checkCanDeleteSLO(
    response: ResponseContext,
  ): Promise<CheckCanDeleteSLOResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200 || response.httpStatusCode === 409) {
      const body: CheckCanDeleteSLOResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CheckCanDeleteSLOResponse",
      ) as CheckCanDeleteSLOResponse;
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
      const body: CheckCanDeleteSLOResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CheckCanDeleteSLOResponse",
        "",
      ) as CheckCanDeleteSLOResponse;
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
   * @params response Response returned by the server for a request to createSLO
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSLO(response: ResponseContext): Promise<SLOListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SLOListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SLOListResponse",
      ) as SLOListResponse;
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
      const body: SLOListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SLOListResponse",
        "",
      ) as SLOListResponse;
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
   * @params response Response returned by the server for a request to deleteSLO
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSLO(
    response: ResponseContext,
  ): Promise<SLODeleteResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200 || response.httpStatusCode === 409) {
      const body: SLODeleteResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SLODeleteResponse",
      ) as SLODeleteResponse;
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
      const body: SLODeleteResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SLODeleteResponse",
        "",
      ) as SLODeleteResponse;
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
   * @params response Response returned by the server for a request to deleteSLOTimeframeInBulk
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSLOTimeframeInBulk(
    response: ResponseContext,
  ): Promise<SLOBulkDeleteResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SLOBulkDeleteResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SLOBulkDeleteResponse",
      ) as SLOBulkDeleteResponse;
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
      const body: SLOBulkDeleteResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SLOBulkDeleteResponse",
        "",
      ) as SLOBulkDeleteResponse;
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
   * @params response Response returned by the server for a request to getSLO
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSLO(response: ResponseContext): Promise<SLOResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SLOResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SLOResponse",
      ) as SLOResponse;
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
      const body: SLOResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SLOResponse",
        "",
      ) as SLOResponse;
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
   * @params response Response returned by the server for a request to getSLOCorrections
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSLOCorrections(
    response: ResponseContext,
  ): Promise<SLOCorrectionListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SLOCorrectionListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SLOCorrectionListResponse",
      ) as SLOCorrectionListResponse;
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
      const body: SLOCorrectionListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SLOCorrectionListResponse",
        "",
      ) as SLOCorrectionListResponse;
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
   * @params response Response returned by the server for a request to getSLOHistory
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSLOHistory(
    response: ResponseContext,
  ): Promise<SLOHistoryResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SLOHistoryResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SLOHistoryResponse",
      ) as SLOHistoryResponse;
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
      const body: SLOHistoryResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SLOHistoryResponse",
        "",
      ) as SLOHistoryResponse;
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
   * @params response Response returned by the server for a request to listSLOs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSLOs(response: ResponseContext): Promise<SLOListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SLOListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SLOListResponse",
      ) as SLOListResponse;
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
      const body: SLOListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SLOListResponse",
        "",
      ) as SLOListResponse;
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
   * @params response Response returned by the server for a request to searchSLO
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchSLO(
    response: ResponseContext,
  ): Promise<SearchSLOResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SearchSLOResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SearchSLOResponse",
      ) as SearchSLOResponse;
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
      const body: SearchSLOResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SearchSLOResponse",
        "",
      ) as SearchSLOResponse;
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
   * @params response Response returned by the server for a request to updateSLO
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSLO(response: ResponseContext): Promise<SLOListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SLOListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SLOListResponse",
      ) as SLOListResponse;
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
      const body: SLOListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SLOListResponse",
        "",
      ) as SLOListResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface ServiceLevelObjectivesApiCheckCanDeleteSLORequest {
  /**
   * A comma separated list of the IDs of the service level objectives objects.
   * @type string
   */
  ids: string;
}

export interface ServiceLevelObjectivesApiCreateSLORequest {
  /**
   * Service level objective request object.
   * @type ServiceLevelObjectiveRequest
   */
  body: ServiceLevelObjectiveRequest;
}

export interface ServiceLevelObjectivesApiDeleteSLORequest {
  /**
   * The ID of the service level objective.
   * @type string
   */
  sloId: string;
  /**
   * Delete the monitor even if it's referenced by other resources (for example SLO, composite monitor).
   * @type string
   */
  force?: string;
}

export interface ServiceLevelObjectivesApiDeleteSLOTimeframeInBulkRequest {
  /**
   * Delete multiple service level objective objects request body.
   * @type { [key: string]: Array<SLOTimeframe>; }
   */
  body: { [key: string]: Array<SLOTimeframe> };
}

export interface ServiceLevelObjectivesApiGetSLORequest {
  /**
   * The ID of the service level objective object.
   * @type string
   */
  sloId: string;
  /**
   * Get the IDs of SLO monitors that reference this SLO.
   * @type boolean
   */
  withConfiguredAlertIds?: boolean;
}

export interface ServiceLevelObjectivesApiGetSLOCorrectionsRequest {
  /**
   * The ID of the service level objective object.
   * @type string
   */
  sloId: string;
}

export interface ServiceLevelObjectivesApiGetSLOHistoryRequest {
  /**
   * The ID of the service level objective object.
   * @type string
   */
  sloId: string;
  /**
   * The `from` timestamp for the query window in epoch seconds.
   * @type number
   */
  fromTs: number;
  /**
   * The `to` timestamp for the query window in epoch seconds.
   * @type number
   */
  toTs: number;
  /**
   * The SLO target. If `target` is passed in, the response will include the remaining error budget and a timeframe value of `custom`.
   * @type number
   */
  target?: number;
  /**
   * Defaults to `true`. If any SLO corrections are applied and this parameter is set to `false`,
   * then the corrections will not be applied and the SLI values will not be affected.
   * @type boolean
   */
  applyCorrection?: boolean;
}

export interface ServiceLevelObjectivesApiListSLOsRequest {
  /**
   * A comma separated list of the IDs of the service level objectives objects.
   * @type string
   */
  ids?: string;
  /**
   * The query string to filter results based on SLO names.
   * @type string
   */
  query?: string;
  /**
   * The query string to filter results based on a single SLO tag.
   * @type string
   */
  tagsQuery?: string;
  /**
   * The query string to filter results based on SLO numerator and denominator.
   * @type string
   */
  metricsQuery?: string;
  /**
   * The number of SLOs to return in the response.
   * @type number
   */
  limit?: number;
  /**
   * The specific offset to use as the beginning of the returned response.
   * @type number
   */
  offset?: number;
}

export interface ServiceLevelObjectivesApiSearchSLORequest {
  /**
   * The query string to filter results based on SLO names.
   * Some examples of queries include `service:<service-name>`
   * and `<slo-name>`.
   * @type string
   */
  query?: string;
  /**
   * The number of files to return in the response `[default=10]`.
   * @type number
   */
  pageSize?: number;
  /**
   * The identifier of the first page to return. This parameter is used for the pagination feature `[default=0]`.
   * @type number
   */
  pageNumber?: number;
  /**
   * Whether or not to return facet information in the response `[default=false]`.
   * @type boolean
   */
  includeFacets?: boolean;
}

export interface ServiceLevelObjectivesApiUpdateSLORequest {
  /**
   * The ID of the service level objective object.
   * @type string
   */
  sloId: string;
  /**
   * The edited service level objective request object.
   * @type ServiceLevelObjective
   */
  body: ServiceLevelObjective;
}

export class ServiceLevelObjectivesApi {
  private requestFactory: ServiceLevelObjectivesApiRequestFactory;
  private responseProcessor: ServiceLevelObjectivesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: ServiceLevelObjectivesApiRequestFactory,
    responseProcessor?: ServiceLevelObjectivesApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new ServiceLevelObjectivesApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new ServiceLevelObjectivesApiResponseProcessor();
  }

  /**
   * Check if an SLO can be safely deleted. For example,
   * assure an SLO can be deleted without disrupting a dashboard.
   * @param param The request object
   */
  public checkCanDeleteSLO(
    param: ServiceLevelObjectivesApiCheckCanDeleteSLORequest,
    options?: Configuration,
  ): Promise<CheckCanDeleteSLOResponse> {
    const requestContextPromise = this.requestFactory.checkCanDeleteSLO(
      param.ids,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.checkCanDeleteSLO(responseContext);
        });
    });
  }

  /**
   * Create a service level objective object.
   * @param param The request object
   */
  public createSLO(
    param: ServiceLevelObjectivesApiCreateSLORequest,
    options?: Configuration,
  ): Promise<SLOListResponse> {
    const requestContextPromise = this.requestFactory.createSLO(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSLO(responseContext);
        });
    });
  }

  /**
   * Permanently delete the specified service level objective object.
   *
   * If an SLO is used in a dashboard, the `DELETE /v1/slo/` endpoint returns
   * a 409 conflict error because the SLO is referenced in a dashboard.
   * @param param The request object
   */
  public deleteSLO(
    param: ServiceLevelObjectivesApiDeleteSLORequest,
    options?: Configuration,
  ): Promise<SLODeleteResponse> {
    const requestContextPromise = this.requestFactory.deleteSLO(
      param.sloId,
      param.force,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSLO(responseContext);
        });
    });
  }

  /**
   * Delete (or partially delete) multiple service level objective objects.
   *
   * This endpoint facilitates deletion of one or more thresholds for one or more
   * service level objective objects. If all thresholds are deleted, the service level
   * objective object is deleted as well.
   * @param param The request object
   */
  public deleteSLOTimeframeInBulk(
    param: ServiceLevelObjectivesApiDeleteSLOTimeframeInBulkRequest,
    options?: Configuration,
  ): Promise<SLOBulkDeleteResponse> {
    const requestContextPromise = this.requestFactory.deleteSLOTimeframeInBulk(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSLOTimeframeInBulk(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a service level objective object.
   * @param param The request object
   */
  public getSLO(
    param: ServiceLevelObjectivesApiGetSLORequest,
    options?: Configuration,
  ): Promise<SLOResponse> {
    const requestContextPromise = this.requestFactory.getSLO(
      param.sloId,
      param.withConfiguredAlertIds,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSLO(responseContext);
        });
    });
  }

  /**
   * Get corrections applied to an SLO
   * @param param The request object
   */
  public getSLOCorrections(
    param: ServiceLevelObjectivesApiGetSLOCorrectionsRequest,
    options?: Configuration,
  ): Promise<SLOCorrectionListResponse> {
    const requestContextPromise = this.requestFactory.getSLOCorrections(
      param.sloId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSLOCorrections(responseContext);
        });
    });
  }

  /**
   * Get a specific SLO’s history, regardless of its SLO type.
   *
   * The detailed history data is structured according to the source data type.
   * For example, metric data is included for event SLOs that use
   * the metric source, and monitor SLO types include the monitor transition history.
   *
   * **Note:** There are different response formats for event based and time based SLOs.
   * Examples of both are shown.
   * @param param The request object
   */
  public getSLOHistory(
    param: ServiceLevelObjectivesApiGetSLOHistoryRequest,
    options?: Configuration,
  ): Promise<SLOHistoryResponse> {
    const requestContextPromise = this.requestFactory.getSLOHistory(
      param.sloId,
      param.fromTs,
      param.toTs,
      param.target,
      param.applyCorrection,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSLOHistory(responseContext);
        });
    });
  }

  /**
   * Get a list of service level objective objects for your organization.
   * @param param The request object
   */
  public listSLOs(
    param: ServiceLevelObjectivesApiListSLOsRequest = {},
    options?: Configuration,
  ): Promise<SLOListResponse> {
    const requestContextPromise = this.requestFactory.listSLOs(
      param.ids,
      param.query,
      param.tagsQuery,
      param.metricsQuery,
      param.limit,
      param.offset,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSLOs(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listSLOs returning a generator with all the items.
   */
  public async *listSLOsWithPagination(
    param: ServiceLevelObjectivesApiListSLOsRequest = {},
    options?: Configuration,
  ): AsyncGenerator<ServiceLevelObjective> {
    let pageSize = 1000;
    if (param.limit !== undefined) {
      pageSize = param.limit;
    }
    param.limit = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listSLOs(
        param.ids,
        param.query,
        param.tagsQuery,
        param.metricsQuery,
        param.limit,
        param.offset,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response = await this.responseProcessor.listSLOs(responseContext);
      const responseData = response.data;
      if (responseData === undefined) {
        break;
      }
      const results = responseData;
      for (const item of results) {
        yield item;
      }
      if (results.length < pageSize) {
        break;
      }
      if (param.offset === undefined) {
        param.offset = pageSize;
      } else {
        param.offset = param.offset + pageSize;
      }
    }
  }

  /**
   * Get a list of service level objective objects for your organization.
   * @param param The request object
   */
  public searchSLO(
    param: ServiceLevelObjectivesApiSearchSLORequest = {},
    options?: Configuration,
  ): Promise<SearchSLOResponse> {
    const requestContextPromise = this.requestFactory.searchSLO(
      param.query,
      param.pageSize,
      param.pageNumber,
      param.includeFacets,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchSLO(responseContext);
        });
    });
  }

  /**
   * Update the specified service level objective object.
   * @param param The request object
   */
  public updateSLO(
    param: ServiceLevelObjectivesApiUpdateSLORequest,
    options?: Configuration,
  ): Promise<SLOListResponse> {
    const requestContextPromise = this.requestFactory.updateSLO(
      param.sloId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSLO(responseContext);
        });
    });
  }
}
