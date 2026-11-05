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
import { SecurityAgentInvestigationCountField } from "./models/SecurityAgentInvestigationCountField";
import { SecurityAgentInvestigationCountsResponse } from "./models/SecurityAgentInvestigationCountsResponse";
import { SecurityAgentInvestigationField } from "./models/SecurityAgentInvestigationField";
import { SecurityAgentInvestigationResponse } from "./models/SecurityAgentInvestigationResponse";
import { SecurityAgentInvestigationsListResponse } from "./models/SecurityAgentInvestigationsListResponse";
import { version } from "../version";

export class BitsSecurityAnalystApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("bits-security-analyst", version);
    }
  }
  public async countSecurityAgentInvestigations(
    field: SecurityAgentInvestigationCountField,
    filterTitle?: string,
    filterFrom?: string,
    filterTo?: string,
    filterVerdict?: string,
    filterRuleId?: string,
    filterRuleType?: string,
    filterSignalSeverity?: string,
    filterSignalSource?: string,
    filterTags?: string,
    filterEntity?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "BitsSecurityAnalystApi.v2.countSecurityAgentInvestigations"
      ]
    ) {
      throw new Error(
        "Unstable operation 'countSecurityAgentInvestigations' is disabled. Enable it by setting `configuration.unstableOperations['BitsSecurityAnalystApi.v2.countSecurityAgentInvestigations'] = true`",
      );
    }

    // verify required parameter 'field' is not null or undefined
    if (field === null || field === undefined) {
      throw new RequiredError("field", "countSecurityAgentInvestigations");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/security_agent/investigations/count";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "BitsSecurityAnalystApi.v2.countSecurityAgentInvestigations",
      BitsSecurityAnalystApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (field !== undefined) {
      requestContext.setQueryParam(
        "field",
        serialize(
          field,
          TypingInfo,
          "SecurityAgentInvestigationCountField",
          "",
        ),
        "",
      );
    }
    if (filterTitle !== undefined) {
      requestContext.setQueryParam(
        "filter[title]",
        serialize(filterTitle, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterFrom !== undefined) {
      requestContext.setQueryParam(
        "filter[from]",
        serialize(filterFrom, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterTo !== undefined) {
      requestContext.setQueryParam(
        "filter[to]",
        serialize(filterTo, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterVerdict !== undefined) {
      requestContext.setQueryParam(
        "filter[verdict]",
        serialize(filterVerdict, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterRuleId !== undefined) {
      requestContext.setQueryParam(
        "filter[rule_id]",
        serialize(filterRuleId, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterRuleType !== undefined) {
      requestContext.setQueryParam(
        "filter[rule_type]",
        serialize(filterRuleType, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterSignalSeverity !== undefined) {
      requestContext.setQueryParam(
        "filter[signal_severity]",
        serialize(filterSignalSeverity, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterSignalSource !== undefined) {
      requestContext.setQueryParam(
        "filter[signal_source]",
        serialize(filterSignalSource, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterTags !== undefined) {
      requestContext.setQueryParam(
        "filter[tags]",
        serialize(filterTags, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterEntity !== undefined) {
      requestContext.setQueryParam(
        "filter[entity]",
        serialize(filterEntity, TypingInfo, "string", ""),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getSecurityAgentInvestigation(
    investigationId: string,
    fieldsInvestigations?: Array<SecurityAgentInvestigationField>,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "BitsSecurityAnalystApi.v2.getSecurityAgentInvestigation"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getSecurityAgentInvestigation' is disabled. Enable it by setting `configuration.unstableOperations['BitsSecurityAnalystApi.v2.getSecurityAgentInvestigation'] = true`",
      );
    }

    // verify required parameter 'investigationId' is not null or undefined
    if (investigationId === null || investigationId === undefined) {
      throw new RequiredError(
        "investigationId",
        "getSecurityAgentInvestigation",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/security_agent/investigations/{investigation_id}".replace(
        "{investigation_id}",
        encodeURIComponent(String(investigationId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "BitsSecurityAnalystApi.v2.getSecurityAgentInvestigation",
      BitsSecurityAnalystApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (fieldsInvestigations !== undefined) {
      requestContext.setQueryParam(
        "fields[investigations]",
        serialize(
          fieldsInvestigations,
          TypingInfo,
          "Array<SecurityAgentInvestigationField>",
          "",
        ),
        "csv",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listSecurityAgentInvestigations(
    filterSignalId?: string,
    filterTitle?: string,
    filterFrom?: string,
    filterTo?: string,
    filterVerdict?: string,
    filterState?: string,
    filterRuleId?: string,
    filterRuleType?: string,
    filterSignalSeverity?: string,
    filterSignalSource?: string,
    filterTags?: string,
    filterEntity?: string,
    sort?: string,
    pageNumber?: number,
    pageSize?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "BitsSecurityAnalystApi.v2.listSecurityAgentInvestigations"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listSecurityAgentInvestigations' is disabled. Enable it by setting `configuration.unstableOperations['BitsSecurityAnalystApi.v2.listSecurityAgentInvestigations'] = true`",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/security_agent/investigations";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "BitsSecurityAnalystApi.v2.listSecurityAgentInvestigations",
      BitsSecurityAnalystApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (filterSignalId !== undefined) {
      requestContext.setQueryParam(
        "filter[signal_id]",
        serialize(filterSignalId, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterTitle !== undefined) {
      requestContext.setQueryParam(
        "filter[title]",
        serialize(filterTitle, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterFrom !== undefined) {
      requestContext.setQueryParam(
        "filter[from]",
        serialize(filterFrom, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterTo !== undefined) {
      requestContext.setQueryParam(
        "filter[to]",
        serialize(filterTo, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterVerdict !== undefined) {
      requestContext.setQueryParam(
        "filter[verdict]",
        serialize(filterVerdict, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterState !== undefined) {
      requestContext.setQueryParam(
        "filter[state]",
        serialize(filterState, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterRuleId !== undefined) {
      requestContext.setQueryParam(
        "filter[rule_id]",
        serialize(filterRuleId, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterRuleType !== undefined) {
      requestContext.setQueryParam(
        "filter[rule_type]",
        serialize(filterRuleType, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterSignalSeverity !== undefined) {
      requestContext.setQueryParam(
        "filter[signal_severity]",
        serialize(filterSignalSeverity, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterSignalSource !== undefined) {
      requestContext.setQueryParam(
        "filter[signal_source]",
        serialize(filterSignalSource, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterTags !== undefined) {
      requestContext.setQueryParam(
        "filter[tags]",
        serialize(filterTags, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterEntity !== undefined) {
      requestContext.setQueryParam(
        "filter[entity]",
        serialize(filterEntity, TypingInfo, "string", ""),
        "",
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "string", ""),
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
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        serialize(pageSize, TypingInfo, "number", "int64"),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }
}

export class BitsSecurityAnalystApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to countSecurityAgentInvestigations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async countSecurityAgentInvestigations(
    response: ResponseContext,
  ): Promise<SecurityAgentInvestigationCountsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityAgentInvestigationCountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityAgentInvestigationCountsResponse",
      ) as SecurityAgentInvestigationCountsResponse;
      return body;
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
      const body: SecurityAgentInvestigationCountsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityAgentInvestigationCountsResponse",
        "",
      ) as SecurityAgentInvestigationCountsResponse;
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
   * @params response Response returned by the server for a request to getSecurityAgentInvestigation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityAgentInvestigation(
    response: ResponseContext,
  ): Promise<SecurityAgentInvestigationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityAgentInvestigationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityAgentInvestigationResponse",
      ) as SecurityAgentInvestigationResponse;
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
      const body: SecurityAgentInvestigationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityAgentInvestigationResponse",
        "",
      ) as SecurityAgentInvestigationResponse;
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
   * @params response Response returned by the server for a request to listSecurityAgentInvestigations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSecurityAgentInvestigations(
    response: ResponseContext,
  ): Promise<SecurityAgentInvestigationsListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SecurityAgentInvestigationsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityAgentInvestigationsListResponse",
      ) as SecurityAgentInvestigationsListResponse;
      return body;
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
      const body: SecurityAgentInvestigationsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "SecurityAgentInvestigationsListResponse",
        "",
      ) as SecurityAgentInvestigationsListResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface BitsSecurityAnalystApiCountSecurityAgentInvestigationsRequest {
  /**
   * Field to count completed investigations by.
   * @type SecurityAgentInvestigationCountField
   */
  field: SecurityAgentInvestigationCountField;
  /**
   * Only investigations whose signal title contains this text, case-insensitive.
   * @type string
   */
  filterTitle?: string;
  /**
   * Only investigations last updated at or after this time, as RFC 3339 or milliseconds since the epoch.
   * @type string
   */
  filterFrom?: string;
  /**
   * Only investigations last updated at or before this time, as RFC 3339 or milliseconds since the epoch.
   * @type string
   */
  filterTo?: string;
  /**
   * Only investigations with one of these verdicts: `benign`, `suspicious`, or `malicious`.
   * Comma-separated values; an investigation matches any of them.
   * @type string
   */
  filterVerdict?: string;
  /**
   * Only investigations of signals from one of these detection rule IDs. Comma-separated values; an
   * investigation matches any of them.
   * @type string
   */
  filterRuleId?: string;
  /**
   * Only investigations of signals from detection rules of one of these types, as returned by the count with
   * `field=rule_type`. Comma-separated values; an investigation matches any of them.
   * @type string
   */
  filterRuleType?: string;
  /**
   * Only investigations of signals with one of these severities: `info`, `low`, `medium`, `high`, or `critical`.
   * Comma-separated values; an investigation matches any of them.
   * @type string
   */
  filterSignalSeverity?: string;
  /**
   * Only investigations of signals from one of these sources, as returned by the count with
   * `field=signal_source`. Comma-separated values; an investigation matches any of them.
   * @type string
   */
  filterSignalSource?: string;
  /**
   * Only investigations whose signal has all of these tags, written `key:value`. Comma-separated values; an
   * investigation must have every one of them.
   * @type string
   */
  filterTags?: string;
  /**
   * Only investigations whose signal has all of these entities. Write each entity as `attribute:value`, matching the
   * values returned by the count endpoint with `field=entity`. Comma-separated values; an investigation must have
   * every one of them.
   * @type string
   */
  filterEntity?: string;
}

export interface BitsSecurityAnalystApiGetSecurityAgentInvestigationRequest {
  /**
   * The ID of the investigation, as returned by the list.
   * @type string
   */
  investigationId: string;
  /**
   * Attributes to return, comma-separated. Defaults to all attributes.
   * @type Array<SecurityAgentInvestigationField>
   */
  fieldsInvestigations?: Array<SecurityAgentInvestigationField>;
}

export interface BitsSecurityAnalystApiListSecurityAgentInvestigationsRequest {
  /**
   * List every investigation of this signal, newest first. Accepts the signal ID in its V1 form, which starts
   * with `AQ`, or in its longer V3 form, which starts with `Aw`. Investigations carry the V1 form, so their
   * `signal_id` can differ from the ID you pass. Can't be combined with other filters or with `sort`.
   * @type string
   */
  filterSignalId?: string;
  /**
   * Only investigations whose signal title contains this text, case-insensitive.
   * @type string
   */
  filterTitle?: string;
  /**
   * Only investigations last updated at or after this time, as RFC 3339 or milliseconds since the epoch.
   * @type string
   */
  filterFrom?: string;
  /**
   * Only investigations last updated at or before this time, as RFC 3339 or milliseconds since the epoch.
   * @type string
   */
  filterTo?: string;
  /**
   * Only investigations with one of these verdicts: `benign`, `suspicious`, or `malicious`.
   * Comma-separated values; an investigation matches any of them.
   * @type string
   */
  filterVerdict?: string;
  /**
   * Only investigations in one of these states: `investigating` or `completed`. Investigations reported as
   * `failed` match `investigating`. Comma-separated values; an investigation matches any of them.
   * @type string
   */
  filterState?: string;
  /**
   * Only investigations of signals from one of these detection rule IDs. Comma-separated values; an
   * investigation matches any of them.
   * @type string
   */
  filterRuleId?: string;
  /**
   * Only investigations of signals from detection rules of one of these types, as returned by the count with
   * `field=rule_type`. Comma-separated values; an investigation matches any of them.
   * @type string
   */
  filterRuleType?: string;
  /**
   * Only investigations of signals with one of these severities: `info`, `low`, `medium`, `high`, or `critical`.
   * Comma-separated values; an investigation matches any of them.
   * @type string
   */
  filterSignalSeverity?: string;
  /**
   * Only investigations of signals from one of these sources, as returned by the count with
   * `field=signal_source`. Comma-separated values; an investigation matches any of them.
   * @type string
   */
  filterSignalSource?: string;
  /**
   * Only investigations whose signal has all of these tags, written `key:value`. Comma-separated values; an
   * investigation must have every one of them.
   * @type string
   */
  filterTags?: string;
  /**
   * Only investigations whose signal has all of these entities. Write each entity as `attribute:value`, matching the
   * values returned by the count endpoint with `field=entity`. Comma-separated values; an investigation must have
   * every one of them.
   * @type string
   */
  filterEntity?: string;
  /**
   * Sort field, prefixed with `-` for descending: `updated_at`, `severity`, `verdict`, `rule_id`, or `signal_title`.
   * Defaults to `-updated_at`. `verdict` sorts by severity (`benign`, `suspicious`, `malicious`), so `-verdict` puts
   * `malicious` first.
   * @type string
   */
  sort?: string;
  /**
   * Page number, starting at 1.
   * @type number
   */
  pageNumber?: number;
  /**
   * Number of investigations per page.
   * @type number
   */
  pageSize?: number;
}

export class BitsSecurityAnalystApi {
  private requestFactory: BitsSecurityAnalystApiRequestFactory;
  private responseProcessor: BitsSecurityAnalystApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: BitsSecurityAnalystApiRequestFactory,
    responseProcessor?: BitsSecurityAnalystApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new BitsSecurityAnalystApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new BitsSecurityAnalystApiResponseProcessor();
  }

  /**
   * Count completed Bits Security Analyst investigations by the values of one field. Buckets are sorted by
   * ascending count. With `field=entity` or `field=signal_source`, an investigation counts in the bucket of
   * each of its entities or sources.
   * @param param The request object
   */
  public countSecurityAgentInvestigations(
    param: BitsSecurityAnalystApiCountSecurityAgentInvestigationsRequest,
    options?: Configuration,
  ): Promise<SecurityAgentInvestigationCountsResponse> {
    const requestContextPromise =
      this.requestFactory.countSecurityAgentInvestigations(
        param.field,
        param.filterTitle,
        param.filterFrom,
        param.filterTo,
        param.filterVerdict,
        param.filterRuleId,
        param.filterRuleType,
        param.filterSignalSeverity,
        param.filterSignalSource,
        param.filterTags,
        param.filterEntity,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.countSecurityAgentInvestigations(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a Bits Security Analyst investigation by its ID, with its verdict, conclusion, evidence, steps, and
   * response suggestions. While the investigation is running, the response has a `Retry-After` header.
   * @param param The request object
   */
  public getSecurityAgentInvestigation(
    param: BitsSecurityAnalystApiGetSecurityAgentInvestigationRequest,
    options?: Configuration,
  ): Promise<SecurityAgentInvestigationResponse> {
    const requestContextPromise =
      this.requestFactory.getSecurityAgentInvestigation(
        param.investigationId,
        param.fieldsInvestigations,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecurityAgentInvestigation(
            responseContext,
          );
        });
    });
  }

  /**
   * List Bits Security Analyst investigations.
   *
   * Without `filter[signal_id]`, returns the latest investigation of each signal, filtered, sorted, and paginated.
   * With `filter[signal_id]`, returns every investigation of that signal, newest first. When the signal has no
   * investigation, the first page carries `meta.reason`, which says why.
   * @param param The request object
   */
  public listSecurityAgentInvestigations(
    param: BitsSecurityAnalystApiListSecurityAgentInvestigationsRequest = {},
    options?: Configuration,
  ): Promise<SecurityAgentInvestigationsListResponse> {
    const requestContextPromise =
      this.requestFactory.listSecurityAgentInvestigations(
        param.filterSignalId,
        param.filterTitle,
        param.filterFrom,
        param.filterTo,
        param.filterVerdict,
        param.filterState,
        param.filterRuleId,
        param.filterRuleType,
        param.filterSignalSeverity,
        param.filterSignalSource,
        param.filterTags,
        param.filterEntity,
        param.sort,
        param.pageNumber,
        param.pageSize,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSecurityAgentInvestigations(
            responseContext,
          );
        });
    });
  }
}
