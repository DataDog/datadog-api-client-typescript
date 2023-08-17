import {
  BaseAPIRequestFactory,
  RequiredError,
} from "../../datadog-api-client-common/baseapi";
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
import { Finding } from "../models/Finding";
import { FindingEvaluation } from "../models/FindingEvaluation";
import { FindingStatus } from "../models/FindingStatus";
import { GetFindingResponse } from "../models/GetFindingResponse";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { ListFindingsResponse } from "../models/ListFindingsResponse";
import { MuteFindingRequest } from "../models/MuteFindingRequest";
import { MuteFindingResponse } from "../models/MuteFindingResponse";
import { SecurityFilterCreateRequest } from "../models/SecurityFilterCreateRequest";
import { SecurityFilterResponse } from "../models/SecurityFilterResponse";
import { SecurityFiltersResponse } from "../models/SecurityFiltersResponse";
import { SecurityFilterUpdateRequest } from "../models/SecurityFilterUpdateRequest";
import { SecurityMonitoringListRulesResponse } from "../models/SecurityMonitoringListRulesResponse";
import { SecurityMonitoringRuleCreatePayload } from "../models/SecurityMonitoringRuleCreatePayload";
import { SecurityMonitoringRuleResponse } from "../models/SecurityMonitoringRuleResponse";
import { SecurityMonitoringRuleUpdatePayload } from "../models/SecurityMonitoringRuleUpdatePayload";
import { SecurityMonitoringSignal } from "../models/SecurityMonitoringSignal";
import { SecurityMonitoringSignalAssigneeUpdateRequest } from "../models/SecurityMonitoringSignalAssigneeUpdateRequest";
import { SecurityMonitoringSignalIncidentsUpdateRequest } from "../models/SecurityMonitoringSignalIncidentsUpdateRequest";
import { SecurityMonitoringSignalListRequest } from "../models/SecurityMonitoringSignalListRequest";
import { SecurityMonitoringSignalListRequestPage } from "../models/SecurityMonitoringSignalListRequestPage";
import { SecurityMonitoringSignalResponse } from "../models/SecurityMonitoringSignalResponse";
import { SecurityMonitoringSignalsListResponse } from "../models/SecurityMonitoringSignalsListResponse";
import { SecurityMonitoringSignalsSort } from "../models/SecurityMonitoringSignalsSort";
import { SecurityMonitoringSignalStateUpdateRequest } from "../models/SecurityMonitoringSignalStateUpdateRequest";
import { SecurityMonitoringSignalTriageUpdateResponse } from "../models/SecurityMonitoringSignalTriageUpdateResponse";

export class SecurityMonitoringApiRequestFactory extends BaseAPIRequestFactory {
  public async createSecurityFilter(
    body: SecurityFilterCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createSecurityFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/security_filters";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.createSecurityFilter")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SecurityFilterCreateRequest", ""),
      contentType
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

  public async createSecurityMonitoringRule(
    body: SecurityMonitoringRuleCreatePayload,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createSecurityMonitoringRule");
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/rules";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.createSecurityMonitoringRule")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "SecurityMonitoringRuleCreatePayload",
        ""
      ),
      contentType
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

  public async deleteSecurityFilter(
    securityFilterId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'securityFilterId' is not null or undefined
    if (securityFilterId === null || securityFilterId === undefined) {
      throw new RequiredError("securityFilterId", "deleteSecurityFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/security_filters/{security_filter_id}".replace(
        "{security_filter_id}",
        encodeURIComponent(String(securityFilterId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.deleteSecurityFilter")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteSecurityMonitoringRule(
    ruleId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "deleteSecurityMonitoringRule");
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/rules/{rule_id}".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.deleteSecurityMonitoringRule")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async editSecurityMonitoringSignalAssignee(
    signalId: string,
    body: SecurityMonitoringSignalAssigneeUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'signalId' is not null or undefined
    if (signalId === null || signalId === undefined) {
      throw new RequiredError(
        "signalId",
        "editSecurityMonitoringSignalAssignee"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "editSecurityMonitoringSignalAssignee");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/signals/{signal_id}/assignee".replace(
        "{signal_id}",
        encodeURIComponent(String(signalId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.SecurityMonitoringApi.editSecurityMonitoringSignalAssignee"
      )
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "SecurityMonitoringSignalAssigneeUpdateRequest",
        ""
      ),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async editSecurityMonitoringSignalIncidents(
    signalId: string,
    body: SecurityMonitoringSignalIncidentsUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'signalId' is not null or undefined
    if (signalId === null || signalId === undefined) {
      throw new RequiredError(
        "signalId",
        "editSecurityMonitoringSignalIncidents"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "editSecurityMonitoringSignalIncidents");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/signals/{signal_id}/incidents".replace(
        "{signal_id}",
        encodeURIComponent(String(signalId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.SecurityMonitoringApi.editSecurityMonitoringSignalIncidents"
      )
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "SecurityMonitoringSignalIncidentsUpdateRequest",
        ""
      ),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async editSecurityMonitoringSignalState(
    signalId: string,
    body: SecurityMonitoringSignalStateUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'signalId' is not null or undefined
    if (signalId === null || signalId === undefined) {
      throw new RequiredError("signalId", "editSecurityMonitoringSignalState");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "editSecurityMonitoringSignalState");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/signals/{signal_id}/state".replace(
        "{signal_id}",
        encodeURIComponent(String(signalId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.editSecurityMonitoringSignalState")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "SecurityMonitoringSignalStateUpdateRequest",
        ""
      ),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getFinding(
    findingId: string,
    snapshotTimestamp?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getFinding'");
    if (!_config.unstableOperations["v2.getFinding"]) {
      throw new Error("Unstable operation 'getFinding' is disabled");
    }

    // verify required parameter 'findingId' is not null or undefined
    if (findingId === null || findingId === undefined) {
      throw new RequiredError("findingId", "getFinding");
    }

    // Path Params
    const localVarPath =
      "/api/v2/posture_management/findings/{finding_id}".replace(
        "{finding_id}",
        encodeURIComponent(String(findingId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getFinding")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (snapshotTimestamp !== undefined) {
      requestContext.setQueryParam(
        "snapshot_timestamp",
        ObjectSerializer.serialize(snapshotTimestamp, "number", "int64")
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

  public async getSecurityFilter(
    securityFilterId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'securityFilterId' is not null or undefined
    if (securityFilterId === null || securityFilterId === undefined) {
      throw new RequiredError("securityFilterId", "getSecurityFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/security_filters/{security_filter_id}".replace(
        "{security_filter_id}",
        encodeURIComponent(String(securityFilterId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getSecurityFilter")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getSecurityMonitoringRule(
    ruleId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "getSecurityMonitoringRule");
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/rules/{rule_id}".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getSecurityMonitoringRule")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getSecurityMonitoringSignal(
    signalId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'signalId' is not null or undefined
    if (signalId === null || signalId === undefined) {
      throw new RequiredError("signalId", "getSecurityMonitoringSignal");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/signals/{signal_id}".replace(
        "{signal_id}",
        encodeURIComponent(String(signalId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.getSecurityMonitoringSignal")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listFindings(
    pageLimit?: number,
    snapshotTimestamp?: number,
    pageCursor?: string,
    filterTags?: string,
    filterEvaluationChangedAt?: string,
    filterMuted?: boolean,
    filterRuleId?: string,
    filterRuleName?: string,
    filterResourceType?: string,
    filterDiscoveryTimestamp?: string,
    filterEvaluation?: FindingEvaluation,
    filterStatus?: FindingStatus,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listFindings'");
    if (!_config.unstableOperations["v2.listFindings"]) {
      throw new Error("Unstable operation 'listFindings' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/posture_management/findings";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.listFindings")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        ObjectSerializer.serialize(pageLimit, "number", "int64")
      );
    }
    if (snapshotTimestamp !== undefined) {
      requestContext.setQueryParam(
        "snapshot_timestamp",
        ObjectSerializer.serialize(snapshotTimestamp, "number", "int64")
      );
    }
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        ObjectSerializer.serialize(pageCursor, "string", "")
      );
    }
    if (filterTags !== undefined) {
      requestContext.setQueryParam(
        "filter[tags]",
        ObjectSerializer.serialize(filterTags, "string", "")
      );
    }
    if (filterEvaluationChangedAt !== undefined) {
      requestContext.setQueryParam(
        "filter[evaluation_changed_at]",
        ObjectSerializer.serialize(filterEvaluationChangedAt, "string", "")
      );
    }
    if (filterMuted !== undefined) {
      requestContext.setQueryParam(
        "filter[muted]",
        ObjectSerializer.serialize(filterMuted, "boolean", "")
      );
    }
    if (filterRuleId !== undefined) {
      requestContext.setQueryParam(
        "filter[rule_id]",
        ObjectSerializer.serialize(filterRuleId, "string", "")
      );
    }
    if (filterRuleName !== undefined) {
      requestContext.setQueryParam(
        "filter[rule_name]",
        ObjectSerializer.serialize(filterRuleName, "string", "")
      );
    }
    if (filterResourceType !== undefined) {
      requestContext.setQueryParam(
        "filter[resource_type]",
        ObjectSerializer.serialize(filterResourceType, "string", "")
      );
    }
    if (filterDiscoveryTimestamp !== undefined) {
      requestContext.setQueryParam(
        "filter[discovery_timestamp]",
        ObjectSerializer.serialize(filterDiscoveryTimestamp, "string", "")
      );
    }
    if (filterEvaluation !== undefined) {
      requestContext.setQueryParam(
        "filter[evaluation]",
        ObjectSerializer.serialize(filterEvaluation, "FindingEvaluation", "")
      );
    }
    if (filterStatus !== undefined) {
      requestContext.setQueryParam(
        "filter[status]",
        ObjectSerializer.serialize(filterStatus, "FindingStatus", "")
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

  public async listSecurityFilters(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/security_filters";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.listSecurityFilters")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listSecurityMonitoringRules(
    pageSize?: number,
    pageNumber?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/rules";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.listSecurityMonitoringRules")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", "int64")
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        ObjectSerializer.serialize(pageNumber, "number", "int64")
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

  public async listSecurityMonitoringSignals(
    filterQuery?: string,
    filterFrom?: Date,
    filterTo?: Date,
    sort?: SecurityMonitoringSignalsSort,
    pageCursor?: string,
    pageLimit?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/signals";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.listSecurityMonitoringSignals")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filterQuery !== undefined) {
      requestContext.setQueryParam(
        "filter[query]",
        ObjectSerializer.serialize(filterQuery, "string", "")
      );
    }
    if (filterFrom !== undefined) {
      requestContext.setQueryParam(
        "filter[from]",
        ObjectSerializer.serialize(filterFrom, "Date", "date-time")
      );
    }
    if (filterTo !== undefined) {
      requestContext.setQueryParam(
        "filter[to]",
        ObjectSerializer.serialize(filterTo, "Date", "date-time")
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "SecurityMonitoringSignalsSort", "")
      );
    }
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        ObjectSerializer.serialize(pageCursor, "string", "")
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        ObjectSerializer.serialize(pageLimit, "number", "int32")
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

  public async searchSecurityMonitoringSignals(
    body?: SecurityMonitoringSignalListRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/signals/search";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.searchSecurityMonitoringSignals")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "SecurityMonitoringSignalListRequest",
        ""
      ),
      contentType
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

  public async updateFinding(
    findingId: string,
    body: MuteFindingRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateFinding'");
    if (!_config.unstableOperations["v2.updateFinding"]) {
      throw new Error("Unstable operation 'updateFinding' is disabled");
    }

    // verify required parameter 'findingId' is not null or undefined
    if (findingId === null || findingId === undefined) {
      throw new RequiredError("findingId", "updateFinding");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateFinding");
    }

    // Path Params
    const localVarPath =
      "/api/v2/posture_management/findings/{finding_id}".replace(
        "{finding_id}",
        encodeURIComponent(String(findingId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.updateFinding")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "MuteFindingRequest", ""),
      contentType
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

  public async updateSecurityFilter(
    securityFilterId: string,
    body: SecurityFilterUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'securityFilterId' is not null or undefined
    if (securityFilterId === null || securityFilterId === undefined) {
      throw new RequiredError("securityFilterId", "updateSecurityFilter");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateSecurityFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/configuration/security_filters/{security_filter_id}".replace(
        "{security_filter_id}",
        encodeURIComponent(String(securityFilterId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.updateSecurityFilter")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SecurityFilterUpdateRequest", ""),
      contentType
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

  public async updateSecurityMonitoringRule(
    ruleId: string,
    body: SecurityMonitoringRuleUpdatePayload,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "updateSecurityMonitoringRule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateSecurityMonitoringRule");
    }

    // Path Params
    const localVarPath = "/api/v2/security_monitoring/rules/{rule_id}".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SecurityMonitoringApi.updateSecurityMonitoringRule")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "SecurityMonitoringRuleUpdatePayload",
        ""
      ),
      contentType
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

export class SecurityMonitoringApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createSecurityFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSecurityFilter(
    response: ResponseContext
  ): Promise<SecurityFilterResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: SecurityFilterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecurityFilterResponse"
      ) as SecurityFilterResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 409 ||
      response.httpStatusCode == 429
    ) {
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SecurityFilterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecurityFilterResponse",
        ""
      ) as SecurityFilterResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createSecurityMonitoringRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSecurityMonitoringRule(
    response: ResponseContext
  ): Promise<SecurityMonitoringRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: SecurityMonitoringRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecurityMonitoringRuleResponse"
      ) as SecurityMonitoringRuleResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 429
    ) {
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SecurityMonitoringRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecurityMonitoringRuleResponse",
        ""
      ) as SecurityMonitoringRuleResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteSecurityFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSecurityFilter(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 204) {
      return;
    }
    if (
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 429
    ) {
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteSecurityMonitoringRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteSecurityMonitoringRule(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 204) {
      return;
    }
    if (
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 429
    ) {
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to editSecurityMonitoringSignalAssignee
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async editSecurityMonitoringSignalAssignee(
    response: ResponseContext
  ): Promise<SecurityMonitoringSignalTriageUpdateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: SecurityMonitoringSignalTriageUpdateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalTriageUpdateResponse"
        ) as SecurityMonitoringSignalTriageUpdateResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 429
    ) {
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SecurityMonitoringSignalTriageUpdateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalTriageUpdateResponse",
          ""
        ) as SecurityMonitoringSignalTriageUpdateResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to editSecurityMonitoringSignalIncidents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async editSecurityMonitoringSignalIncidents(
    response: ResponseContext
  ): Promise<SecurityMonitoringSignalTriageUpdateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: SecurityMonitoringSignalTriageUpdateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalTriageUpdateResponse"
        ) as SecurityMonitoringSignalTriageUpdateResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 429
    ) {
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SecurityMonitoringSignalTriageUpdateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalTriageUpdateResponse",
          ""
        ) as SecurityMonitoringSignalTriageUpdateResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to editSecurityMonitoringSignalState
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async editSecurityMonitoringSignalState(
    response: ResponseContext
  ): Promise<SecurityMonitoringSignalTriageUpdateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: SecurityMonitoringSignalTriageUpdateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalTriageUpdateResponse"
        ) as SecurityMonitoringSignalTriageUpdateResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 429
    ) {
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SecurityMonitoringSignalTriageUpdateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalTriageUpdateResponse",
          ""
        ) as SecurityMonitoringSignalTriageUpdateResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getFinding
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getFinding(
    response: ResponseContext
  ): Promise<GetFindingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: GetFindingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GetFindingResponse"
      ) as GetFindingResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 429
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
        logger.info(`Got error deserializing error: ${error}`);
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: GetFindingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GetFindingResponse",
        ""
      ) as GetFindingResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getSecurityFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityFilter(
    response: ResponseContext
  ): Promise<SecurityFilterResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: SecurityFilterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecurityFilterResponse"
      ) as SecurityFilterResponse;
      return body;
    }
    if (
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 429
    ) {
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SecurityFilterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecurityFilterResponse",
        ""
      ) as SecurityFilterResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getSecurityMonitoringRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityMonitoringRule(
    response: ResponseContext
  ): Promise<SecurityMonitoringRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: SecurityMonitoringRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecurityMonitoringRuleResponse"
      ) as SecurityMonitoringRuleResponse;
      return body;
    }
    if (response.httpStatusCode == 404 || response.httpStatusCode == 429) {
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SecurityMonitoringRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecurityMonitoringRuleResponse",
        ""
      ) as SecurityMonitoringRuleResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getSecurityMonitoringSignal
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityMonitoringSignal(
    response: ResponseContext
  ): Promise<SecurityMonitoringSignalResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: SecurityMonitoringSignalResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalResponse"
        ) as SecurityMonitoringSignalResponse;
      return body;
    }
    if (response.httpStatusCode == 404 || response.httpStatusCode == 429) {
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SecurityMonitoringSignalResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalResponse",
          ""
        ) as SecurityMonitoringSignalResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listFindings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listFindings(
    response: ResponseContext
  ): Promise<ListFindingsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: ListFindingsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListFindingsResponse"
      ) as ListFindingsResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 429
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
        logger.info(`Got error deserializing error: ${error}`);
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: ListFindingsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListFindingsResponse",
        ""
      ) as ListFindingsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listSecurityFilters
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSecurityFilters(
    response: ResponseContext
  ): Promise<SecurityFiltersResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: SecurityFiltersResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecurityFiltersResponse"
      ) as SecurityFiltersResponse;
      return body;
    }
    if (response.httpStatusCode == 403 || response.httpStatusCode == 429) {
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SecurityFiltersResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecurityFiltersResponse",
        ""
      ) as SecurityFiltersResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listSecurityMonitoringRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSecurityMonitoringRules(
    response: ResponseContext
  ): Promise<SecurityMonitoringListRulesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: SecurityMonitoringListRulesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringListRulesResponse"
        ) as SecurityMonitoringListRulesResponse;
      return body;
    }
    if (response.httpStatusCode == 400 || response.httpStatusCode == 429) {
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SecurityMonitoringListRulesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringListRulesResponse",
          ""
        ) as SecurityMonitoringListRulesResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listSecurityMonitoringSignals
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSecurityMonitoringSignals(
    response: ResponseContext
  ): Promise<SecurityMonitoringSignalsListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: SecurityMonitoringSignalsListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalsListResponse"
        ) as SecurityMonitoringSignalsListResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 429
    ) {
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SecurityMonitoringSignalsListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalsListResponse",
          ""
        ) as SecurityMonitoringSignalsListResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to searchSecurityMonitoringSignals
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchSecurityMonitoringSignals(
    response: ResponseContext
  ): Promise<SecurityMonitoringSignalsListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: SecurityMonitoringSignalsListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalsListResponse"
        ) as SecurityMonitoringSignalsListResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 429
    ) {
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SecurityMonitoringSignalsListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SecurityMonitoringSignalsListResponse",
          ""
        ) as SecurityMonitoringSignalsListResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateFinding
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateFinding(
    response: ResponseContext
  ): Promise<MuteFindingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: MuteFindingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MuteFindingResponse"
      ) as MuteFindingResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 409 ||
      response.httpStatusCode == 422 ||
      response.httpStatusCode == 429
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
        logger.info(`Got error deserializing error: ${error}`);
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MuteFindingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MuteFindingResponse",
        ""
      ) as MuteFindingResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateSecurityFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSecurityFilter(
    response: ResponseContext
  ): Promise<SecurityFilterResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: SecurityFilterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecurityFilterResponse"
      ) as SecurityFilterResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 409 ||
      response.httpStatusCode == 429
    ) {
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SecurityFilterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecurityFilterResponse",
        ""
      ) as SecurityFilterResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateSecurityMonitoringRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSecurityMonitoringRule(
    response: ResponseContext
  ): Promise<SecurityMonitoringRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: SecurityMonitoringRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecurityMonitoringRuleResponse"
      ) as SecurityMonitoringRuleResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 401 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 429
    ) {
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SecurityMonitoringRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SecurityMonitoringRuleResponse",
        ""
      ) as SecurityMonitoringRuleResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface SecurityMonitoringApiCreateSecurityFilterRequest {
  /**
   * The definition of the new security filter.
   * @type SecurityFilterCreateRequest
   */
  body: SecurityFilterCreateRequest;
}

export interface SecurityMonitoringApiCreateSecurityMonitoringRuleRequest {
  /**
   * @type SecurityMonitoringRuleCreatePayload
   */
  body: SecurityMonitoringRuleCreatePayload;
}

export interface SecurityMonitoringApiDeleteSecurityFilterRequest {
  /**
   * The ID of the security filter.
   * @type string
   */
  securityFilterId: string;
}

export interface SecurityMonitoringApiDeleteSecurityMonitoringRuleRequest {
  /**
   * The ID of the rule.
   * @type string
   */
  ruleId: string;
}

export interface SecurityMonitoringApiEditSecurityMonitoringSignalAssigneeRequest {
  /**
   * The ID of the signal.
   * @type string
   */
  signalId: string;
  /**
   * Attributes describing the signal update.
   * @type SecurityMonitoringSignalAssigneeUpdateRequest
   */
  body: SecurityMonitoringSignalAssigneeUpdateRequest;
}

export interface SecurityMonitoringApiEditSecurityMonitoringSignalIncidentsRequest {
  /**
   * The ID of the signal.
   * @type string
   */
  signalId: string;
  /**
   * Attributes describing the signal update.
   * @type SecurityMonitoringSignalIncidentsUpdateRequest
   */
  body: SecurityMonitoringSignalIncidentsUpdateRequest;
}

export interface SecurityMonitoringApiEditSecurityMonitoringSignalStateRequest {
  /**
   * The ID of the signal.
   * @type string
   */
  signalId: string;
  /**
   * Attributes describing the signal update.
   * @type SecurityMonitoringSignalStateUpdateRequest
   */
  body: SecurityMonitoringSignalStateUpdateRequest;
}

export interface SecurityMonitoringApiGetFindingRequest {
  /**
   * The ID of the finding.
   * @type string
   */
  findingId: string;
  /**
   * Return the finding for a given snapshot of time (Unix ms).
   * @type number
   */
  snapshotTimestamp?: number;
}

export interface SecurityMonitoringApiGetSecurityFilterRequest {
  /**
   * The ID of the security filter.
   * @type string
   */
  securityFilterId: string;
}

export interface SecurityMonitoringApiGetSecurityMonitoringRuleRequest {
  /**
   * The ID of the rule.
   * @type string
   */
  ruleId: string;
}

export interface SecurityMonitoringApiGetSecurityMonitoringSignalRequest {
  /**
   * The ID of the signal.
   * @type string
   */
  signalId: string;
}

export interface SecurityMonitoringApiListFindingsRequest {
  /**
   * Limit the number of findings returned. Must be <= 1000.
   * @type number
   */
  pageLimit?: number;
  /**
   * Return findings for a given snapshot of time (Unix ms).
   * @type number
   */
  snapshotTimestamp?: number;
  /**
   * Return the next page of findings pointed to by the cursor.
   * @type string
   */
  pageCursor?: string;
  /**
   * Return findings that have these associated tags (repeatable).
   * @type string
   */
  filterTags?: string;
  /**
   * Return findings that have changed from pass to fail or vice versa on a specified date (Unix ms) or date range (using comparison operators).
   * @type string
   */
  filterEvaluationChangedAt?: string;
  /**
   * Set to `true` to return findings that are muted. Set to `false` to return unmuted findings.
   * @type boolean
   */
  filterMuted?: boolean;
  /**
   * Return findings for the specified rule ID.
   * @type string
   */
  filterRuleId?: string;
  /**
   * Return findings for the specified rule.
   * @type string
   */
  filterRuleName?: string;
  /**
   * Return only findings for the specified resource type.
   * @type string
   */
  filterResourceType?: string;
  /**
   * Return findings that were found on a specified date (Unix ms) or date range (using comparison operators).
   * @type string
   */
  filterDiscoveryTimestamp?: string;
  /**
   * Return only `pass` or `fail` findings.
   * @type FindingEvaluation
   */
  filterEvaluation?: FindingEvaluation;
  /**
   * Return only findings with the specified status.
   * @type FindingStatus
   */
  filterStatus?: FindingStatus;
}

export interface SecurityMonitoringApiListSecurityMonitoringRulesRequest {
  /**
   * Size for a given page. The maximum allowed value is 100.
   * @type number
   */
  pageSize?: number;
  /**
   * Specific page number to return.
   * @type number
   */
  pageNumber?: number;
}

export interface SecurityMonitoringApiListSecurityMonitoringSignalsRequest {
  /**
   * The search query for security signals.
   * @type string
   */
  filterQuery?: string;
  /**
   * The minimum timestamp for requested security signals.
   * @type Date
   */
  filterFrom?: Date;
  /**
   * The maximum timestamp for requested security signals.
   * @type Date
   */
  filterTo?: Date;
  /**
   * The order of the security signals in results.
   * @type SecurityMonitoringSignalsSort
   */
  sort?: SecurityMonitoringSignalsSort;
  /**
   * A list of results using the cursor provided in the previous query.
   * @type string
   */
  pageCursor?: string;
  /**
   * The maximum number of security signals in the response.
   * @type number
   */
  pageLimit?: number;
}

export interface SecurityMonitoringApiSearchSecurityMonitoringSignalsRequest {
  /**
   * @type SecurityMonitoringSignalListRequest
   */
  body?: SecurityMonitoringSignalListRequest;
}

export interface SecurityMonitoringApiUpdateFindingRequest {
  /**
   * The ID of the finding.
   * @type string
   */
  findingId: string;
  /**
   * To mute or unmute a finding, the request body should include at least two attributes: `muted` and `reason`. The allowed reasons depend on whether the finding is being muted or unmuted:
   * - To mute a finding: `PENDING_FIX`, `FALSE_POSITIVE`, `ACCEPTED_RISK`, `OTHER`.
   * - To unmute a finding : `NO_PENDING_FIX`, `HUMAN_ERROR`, `NO_LONGER_ACCEPTED_RISK`, `OTHER`.
   * @type MuteFindingRequest
   */
  body: MuteFindingRequest;
}

export interface SecurityMonitoringApiUpdateSecurityFilterRequest {
  /**
   * The ID of the security filter.
   * @type string
   */
  securityFilterId: string;
  /**
   * New definition of the security filter.
   * @type SecurityFilterUpdateRequest
   */
  body: SecurityFilterUpdateRequest;
}

export interface SecurityMonitoringApiUpdateSecurityMonitoringRuleRequest {
  /**
   * The ID of the rule.
   * @type string
   */
  ruleId: string;
  /**
   * @type SecurityMonitoringRuleUpdatePayload
   */
  body: SecurityMonitoringRuleUpdatePayload;
}

export class SecurityMonitoringApi {
  private requestFactory: SecurityMonitoringApiRequestFactory;
  private responseProcessor: SecurityMonitoringApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: SecurityMonitoringApiRequestFactory,
    responseProcessor?: SecurityMonitoringApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new SecurityMonitoringApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new SecurityMonitoringApiResponseProcessor();
  }

  /**
   * Create a security filter.
   *
   * See the [security filter guide](https://docs.datadoghq.com/security_platform/guide/how-to-setup-security-filters-using-security-monitoring-api/)
   * for more examples.
   * @param param The request object
   */
  public createSecurityFilter(
    param: SecurityMonitoringApiCreateSecurityFilterRequest,
    options?: Configuration
  ): Promise<SecurityFilterResponse> {
    const requestContextPromise = this.requestFactory.createSecurityFilter(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSecurityFilter(responseContext);
        });
    });
  }

  /**
   * Create a detection rule.
   * @param param The request object
   */
  public createSecurityMonitoringRule(
    param: SecurityMonitoringApiCreateSecurityMonitoringRuleRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringRuleResponse> {
    const requestContextPromise =
      this.requestFactory.createSecurityMonitoringRule(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSecurityMonitoringRule(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a specific security filter.
   * @param param The request object
   */
  public deleteSecurityFilter(
    param: SecurityMonitoringApiDeleteSecurityFilterRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteSecurityFilter(
      param.securityFilterId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSecurityFilter(responseContext);
        });
    });
  }

  /**
   * Delete an existing rule. Default rules cannot be deleted.
   * @param param The request object
   */
  public deleteSecurityMonitoringRule(
    param: SecurityMonitoringApiDeleteSecurityMonitoringRuleRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteSecurityMonitoringRule(param.ruleId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSecurityMonitoringRule(
            responseContext
          );
        });
    });
  }

  /**
   * Modify the triage assignee of a security signal.
   * @param param The request object
   */
  public editSecurityMonitoringSignalAssignee(
    param: SecurityMonitoringApiEditSecurityMonitoringSignalAssigneeRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringSignalTriageUpdateResponse> {
    const requestContextPromise =
      this.requestFactory.editSecurityMonitoringSignalAssignee(
        param.signalId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.editSecurityMonitoringSignalAssignee(
            responseContext
          );
        });
    });
  }

  /**
   * Change the related incidents for a security signal.
   * @param param The request object
   */
  public editSecurityMonitoringSignalIncidents(
    param: SecurityMonitoringApiEditSecurityMonitoringSignalIncidentsRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringSignalTriageUpdateResponse> {
    const requestContextPromise =
      this.requestFactory.editSecurityMonitoringSignalIncidents(
        param.signalId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.editSecurityMonitoringSignalIncidents(
            responseContext
          );
        });
    });
  }

  /**
   * Change the triage state of a security signal.
   * @param param The request object
   */
  public editSecurityMonitoringSignalState(
    param: SecurityMonitoringApiEditSecurityMonitoringSignalStateRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringSignalTriageUpdateResponse> {
    const requestContextPromise =
      this.requestFactory.editSecurityMonitoringSignalState(
        param.signalId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.editSecurityMonitoringSignalState(
            responseContext
          );
        });
    });
  }

  /**
   * Returns a single finding with message and resource configuration.
   * @param param The request object
   */
  public getFinding(
    param: SecurityMonitoringApiGetFindingRequest,
    options?: Configuration
  ): Promise<GetFindingResponse> {
    const requestContextPromise = this.requestFactory.getFinding(
      param.findingId,
      param.snapshotTimestamp,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getFinding(responseContext);
        });
    });
  }

  /**
   * Get the details of a specific security filter.
   *
   * See the [security filter guide](https://docs.datadoghq.com/security_platform/guide/how-to-setup-security-filters-using-security-monitoring-api/)
   * for more examples.
   * @param param The request object
   */
  public getSecurityFilter(
    param: SecurityMonitoringApiGetSecurityFilterRequest,
    options?: Configuration
  ): Promise<SecurityFilterResponse> {
    const requestContextPromise = this.requestFactory.getSecurityFilter(
      param.securityFilterId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecurityFilter(responseContext);
        });
    });
  }

  /**
   * Get a rule's details.
   * @param param The request object
   */
  public getSecurityMonitoringRule(
    param: SecurityMonitoringApiGetSecurityMonitoringRuleRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringRuleResponse> {
    const requestContextPromise = this.requestFactory.getSecurityMonitoringRule(
      param.ruleId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecurityMonitoringRule(
            responseContext
          );
        });
    });
  }

  /**
   * Get a signal's details.
   * @param param The request object
   */
  public getSecurityMonitoringSignal(
    param: SecurityMonitoringApiGetSecurityMonitoringSignalRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringSignalResponse> {
    const requestContextPromise =
      this.requestFactory.getSecurityMonitoringSignal(param.signalId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecurityMonitoringSignal(
            responseContext
          );
        });
    });
  }

  /**
   * Get a list of CSPM findings.
   *
   * ### Filtering
   *
   * Filters can be applied by appending query parameters to the URL.
   *
   *   - Using a single filter: `?filter[attribute_key]=attribute_value`
   *   - Chaining filters: `?filter[attribute_key]=attribute_value&filter[attribute_key]=attribute_value...`
   *   - Filtering on tags: `?filter[tags]=tag_key:tag_value&filter[tags]=tag_key_2:tag_value_2`
   *
   * Here, `attribute_key` can be any of the filter keys described further below.
   *
   * Query parameters of type `integer` support comparison operators (`>`, `>=`, `<`, `<=`). This is particularly useful when filtering by `evaluation_changed_at` or `resource_discovery_timestamp`. For example: `?filter[evaluation_changed_at]=>20123123121`.
   *
   * You can also use the negation operator on strings. For example, use `filter[resource_type]=-aws*` to filter for any non-AWS resources.
   *
   * The operator must come after the equal sign. For example, to filter with the `>=` operator, add the operator after the equal sign: `filter[evaluation_changed_at]=>=1678809373257`.
   *
   * Query parameters must be only among the documented ones and with values of correct types. Duplicated query parameters (e.g. `filter[status]=low&filter[status]=info`) are not allowed.
   *
   * ### Response
   *
   * The response includes an array of finding objects, pagination metadata, and a count of items that match the query.
   *
   * Each finding object contains the following:
   *
   * - The finding ID that can be used in a `GetFinding` request to retrieve the full finding details.
   * - Core attributes, including status, evaluation, high-level resource details, muted state, and rule details.
   * - `evaluation_changed_at` and `resource_discovery_date` time stamps.
   * - An array of associated tags.
   * @param param The request object
   */
  public listFindings(
    param: SecurityMonitoringApiListFindingsRequest = {},
    options?: Configuration
  ): Promise<ListFindingsResponse> {
    const requestContextPromise = this.requestFactory.listFindings(
      param.pageLimit,
      param.snapshotTimestamp,
      param.pageCursor,
      param.filterTags,
      param.filterEvaluationChangedAt,
      param.filterMuted,
      param.filterRuleId,
      param.filterRuleName,
      param.filterResourceType,
      param.filterDiscoveryTimestamp,
      param.filterEvaluation,
      param.filterStatus,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listFindings(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listFindings returning a generator with all the items.
   */
  public async *listFindingsWithPagination(
    param: SecurityMonitoringApiListFindingsRequest = {},
    options?: Configuration
  ): AsyncGenerator<Finding> {
    let pageSize = 100;
    if (param.pageLimit !== undefined) {
      pageSize = param.pageLimit;
    }
    param.pageLimit = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listFindings(
        param.pageLimit,
        param.snapshotTimestamp,
        param.pageCursor,
        param.filterTags,
        param.filterEvaluationChangedAt,
        param.filterMuted,
        param.filterRuleId,
        param.filterRuleName,
        param.filterResourceType,
        param.filterDiscoveryTimestamp,
        param.filterEvaluation,
        param.filterStatus,
        options
      );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

      const response = await this.responseProcessor.listFindings(
        responseContext
      );
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
      const cursorMeta = response.meta;
      if (cursorMeta === undefined) {
        break;
      }
      const cursorMetaPage = cursorMeta.page;
      if (cursorMetaPage === undefined) {
        break;
      }
      const cursorMetaPageCursor = cursorMetaPage.cursor;
      if (cursorMetaPageCursor === undefined) {
        break;
      }

      param.pageCursor = cursorMetaPageCursor;
    }
  }

  /**
   * Get the list of configured security filters with their definitions.
   * @param param The request object
   */
  public listSecurityFilters(
    options?: Configuration
  ): Promise<SecurityFiltersResponse> {
    const requestContextPromise =
      this.requestFactory.listSecurityFilters(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSecurityFilters(responseContext);
        });
    });
  }

  /**
   * List rules.
   * @param param The request object
   */
  public listSecurityMonitoringRules(
    param: SecurityMonitoringApiListSecurityMonitoringRulesRequest = {},
    options?: Configuration
  ): Promise<SecurityMonitoringListRulesResponse> {
    const requestContextPromise =
      this.requestFactory.listSecurityMonitoringRules(
        param.pageSize,
        param.pageNumber,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSecurityMonitoringRules(
            responseContext
          );
        });
    });
  }

  /**
   * The list endpoint returns security signals that match a search query.
   * Both this endpoint and the POST endpoint can be used interchangeably when listing
   * security signals.
   * @param param The request object
   */
  public listSecurityMonitoringSignals(
    param: SecurityMonitoringApiListSecurityMonitoringSignalsRequest = {},
    options?: Configuration
  ): Promise<SecurityMonitoringSignalsListResponse> {
    const requestContextPromise =
      this.requestFactory.listSecurityMonitoringSignals(
        param.filterQuery,
        param.filterFrom,
        param.filterTo,
        param.sort,
        param.pageCursor,
        param.pageLimit,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSecurityMonitoringSignals(
            responseContext
          );
        });
    });
  }

  /**
   * Provide a paginated version of listSecurityMonitoringSignals returning a generator with all the items.
   */
  public async *listSecurityMonitoringSignalsWithPagination(
    param: SecurityMonitoringApiListSecurityMonitoringSignalsRequest = {},
    options?: Configuration
  ): AsyncGenerator<SecurityMonitoringSignal> {
    let pageSize = 10;
    if (param.pageLimit !== undefined) {
      pageSize = param.pageLimit;
    }
    param.pageLimit = pageSize;
    while (true) {
      const requestContext =
        await this.requestFactory.listSecurityMonitoringSignals(
          param.filterQuery,
          param.filterFrom,
          param.filterTo,
          param.sort,
          param.pageCursor,
          param.pageLimit,
          options
        );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

      const response =
        await this.responseProcessor.listSecurityMonitoringSignals(
          responseContext
        );
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
      const cursorMeta = response.meta;
      if (cursorMeta === undefined) {
        break;
      }
      const cursorMetaPage = cursorMeta.page;
      if (cursorMetaPage === undefined) {
        break;
      }
      const cursorMetaPageAfter = cursorMetaPage.after;
      if (cursorMetaPageAfter === undefined) {
        break;
      }

      param.pageCursor = cursorMetaPageAfter;
    }
  }

  /**
   * Returns security signals that match a search query.
   * Both this endpoint and the GET endpoint can be used interchangeably for listing
   * security signals.
   * @param param The request object
   */
  public searchSecurityMonitoringSignals(
    param: SecurityMonitoringApiSearchSecurityMonitoringSignalsRequest = {},
    options?: Configuration
  ): Promise<SecurityMonitoringSignalsListResponse> {
    const requestContextPromise =
      this.requestFactory.searchSecurityMonitoringSignals(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchSecurityMonitoringSignals(
            responseContext
          );
        });
    });
  }

  /**
   * Provide a paginated version of searchSecurityMonitoringSignals returning a generator with all the items.
   */
  public async *searchSecurityMonitoringSignalsWithPagination(
    param: SecurityMonitoringApiSearchSecurityMonitoringSignalsRequest = {},
    options?: Configuration
  ): AsyncGenerator<SecurityMonitoringSignal> {
    let pageSize = 10;
    if (param.body === undefined) {
      param.body = new SecurityMonitoringSignalListRequest();
    }
    if (param.body.page === undefined) {
      param.body.page = new SecurityMonitoringSignalListRequestPage();
    }
    if (param.body.page.limit !== undefined) {
      pageSize = param.body.page.limit;
    }
    param.body.page.limit = pageSize;
    while (true) {
      const requestContext =
        await this.requestFactory.searchSecurityMonitoringSignals(
          param.body,
          options
        );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

      const response =
        await this.responseProcessor.searchSecurityMonitoringSignals(
          responseContext
        );
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
      const cursorMeta = response.meta;
      if (cursorMeta === undefined) {
        break;
      }
      const cursorMetaPage = cursorMeta.page;
      if (cursorMetaPage === undefined) {
        break;
      }
      const cursorMetaPageAfter = cursorMetaPage.after;
      if (cursorMetaPageAfter === undefined) {
        break;
      }

      param.body.page.cursor = cursorMetaPageAfter;
    }
  }

  /**
   * Mute or unmute a specific finding.
   * The API returns the updated finding object when the request is successful.
   * @param param The request object
   */
  public updateFinding(
    param: SecurityMonitoringApiUpdateFindingRequest,
    options?: Configuration
  ): Promise<MuteFindingResponse> {
    const requestContextPromise = this.requestFactory.updateFinding(
      param.findingId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateFinding(responseContext);
        });
    });
  }

  /**
   * Update a specific security filter.
   * Returns the security filter object when the request is successful.
   * @param param The request object
   */
  public updateSecurityFilter(
    param: SecurityMonitoringApiUpdateSecurityFilterRequest,
    options?: Configuration
  ): Promise<SecurityFilterResponse> {
    const requestContextPromise = this.requestFactory.updateSecurityFilter(
      param.securityFilterId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSecurityFilter(responseContext);
        });
    });
  }

  /**
   * Update an existing rule. When updating `cases`, `queries` or `options`, the whole field
   * must be included. For example, when modifying a query all queries must be included.
   * Default rules can only be updated to be enabled and to change notifications.
   * @param param The request object
   */
  public updateSecurityMonitoringRule(
    param: SecurityMonitoringApiUpdateSecurityMonitoringRuleRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringRuleResponse> {
    const requestContextPromise =
      this.requestFactory.updateSecurityMonitoringRule(
        param.ruleId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSecurityMonitoringRule(
            responseContext
          );
        });
    });
  }
}
