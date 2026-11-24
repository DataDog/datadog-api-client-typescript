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
import { Int64Input } from "../../datadog-api-client-common/util";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { SecurityAgentInvestigationCountField } from "../models/SecurityAgentInvestigationCountField";
import { SecurityAgentInvestigationCountsResponse } from "../models/SecurityAgentInvestigationCountsResponse";
import { SecurityAgentInvestigationField } from "../models/SecurityAgentInvestigationField";
import { SecurityAgentInvestigationResponse } from "../models/SecurityAgentInvestigationResponse";
import { SecurityAgentInvestigationsListResponse } from "../models/SecurityAgentInvestigationsListResponse";
import { SecurityAgentOutreachDomainAddRequest } from "../models/SecurityAgentOutreachDomainAddRequest";
import { SecurityAgentOutreachModeResponse } from "../models/SecurityAgentOutreachModeResponse";
import { SecurityAgentOutreachModeUpdateRequest } from "../models/SecurityAgentOutreachModeUpdateRequest";
import { SecurityAgentOutreachPolicyResponse } from "../models/SecurityAgentOutreachPolicyResponse";
import { SecurityAgentOutreachRulesUpdateRequest } from "../models/SecurityAgentOutreachRulesUpdateRequest";

export class BitsSecurityAnalystApiRequestFactory extends BaseAPIRequestFactory {
  public async addSecurityAgentOutreachPolicyDomain(
    body: SecurityAgentOutreachDomainAddRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'addSecurityAgentOutreachPolicyDomain'"
    );
    if (
      !_config.unstableOperations["v2.addSecurityAgentOutreachPolicyDomain"]
    ) {
      throw new Error(
        "Unstable operation 'addSecurityAgentOutreachPolicyDomain' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "addSecurityAgentOutreachPolicyDomain");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/security_agent/outreach_policy/allowed_domains";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.BitsSecurityAnalystApi.addSecurityAgentOutreachPolicyDomain"
      )
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "SecurityAgentOutreachDomainAddRequest",
        ""
      ),
      contentType,
      this.configuration.preserveLargeIntegers
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'countSecurityAgentInvestigations'");
    if (!_config.unstableOperations["v2.countSecurityAgentInvestigations"]) {
      throw new Error(
        "Unstable operation 'countSecurityAgentInvestigations' is disabled"
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
    const requestContext = _config
      .getServer("v2.BitsSecurityAnalystApi.countSecurityAgentInvestigations")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (field !== undefined) {
      requestContext.setQueryParam(
        "field",
        ObjectSerializer.serialize(
          field,
          "SecurityAgentInvestigationCountField",
          ""
        ),
        ""
      );
    }
    if (filterTitle !== undefined) {
      requestContext.setQueryParam(
        "filter[title]",
        ObjectSerializer.serialize(filterTitle, "string", ""),
        ""
      );
    }
    if (filterFrom !== undefined) {
      requestContext.setQueryParam(
        "filter[from]",
        ObjectSerializer.serialize(filterFrom, "string", ""),
        ""
      );
    }
    if (filterTo !== undefined) {
      requestContext.setQueryParam(
        "filter[to]",
        ObjectSerializer.serialize(filterTo, "string", ""),
        ""
      );
    }
    if (filterVerdict !== undefined) {
      requestContext.setQueryParam(
        "filter[verdict]",
        ObjectSerializer.serialize(filterVerdict, "string", ""),
        ""
      );
    }
    if (filterRuleId !== undefined) {
      requestContext.setQueryParam(
        "filter[rule_id]",
        ObjectSerializer.serialize(filterRuleId, "string", ""),
        ""
      );
    }
    if (filterRuleType !== undefined) {
      requestContext.setQueryParam(
        "filter[rule_type]",
        ObjectSerializer.serialize(filterRuleType, "string", ""),
        ""
      );
    }
    if (filterSignalSeverity !== undefined) {
      requestContext.setQueryParam(
        "filter[signal_severity]",
        ObjectSerializer.serialize(filterSignalSeverity, "string", ""),
        ""
      );
    }
    if (filterSignalSource !== undefined) {
      requestContext.setQueryParam(
        "filter[signal_source]",
        ObjectSerializer.serialize(filterSignalSource, "string", ""),
        ""
      );
    }
    if (filterTags !== undefined) {
      requestContext.setQueryParam(
        "filter[tags]",
        ObjectSerializer.serialize(filterTags, "string", ""),
        ""
      );
    }
    if (filterEntity !== undefined) {
      requestContext.setQueryParam(
        "filter[entity]",
        ObjectSerializer.serialize(filterEntity, "string", ""),
        ""
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getSecurityAgentInvestigation'");
    if (!_config.unstableOperations["v2.getSecurityAgentInvestigation"]) {
      throw new Error(
        "Unstable operation 'getSecurityAgentInvestigation' is disabled"
      );
    }

    // verify required parameter 'investigationId' is not null or undefined
    if (investigationId === null || investigationId === undefined) {
      throw new RequiredError(
        "investigationId",
        "getSecurityAgentInvestigation"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/security_agent/investigations/{investigation_id}".replace(
        "{investigation_id}",
        encodeURIComponent(String(investigationId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.BitsSecurityAnalystApi.getSecurityAgentInvestigation")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (fieldsInvestigations !== undefined) {
      requestContext.setQueryParam(
        "fields[investigations]",
        ObjectSerializer.serialize(
          fieldsInvestigations,
          "Array<SecurityAgentInvestigationField>",
          ""
        ),
        "csv"
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

  public async getSecurityAgentOutreachPolicy(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getSecurityAgentOutreachPolicy'");
    if (!_config.unstableOperations["v2.getSecurityAgentOutreachPolicy"]) {
      throw new Error(
        "Unstable operation 'getSecurityAgentOutreachPolicy' is disabled"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/security_agent/outreach_policy";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.BitsSecurityAnalystApi.getSecurityAgentOutreachPolicy")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
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
    pageNumber?: Int64Input,
    pageSize?: Int64Input,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listSecurityAgentInvestigations'");
    if (!_config.unstableOperations["v2.listSecurityAgentInvestigations"]) {
      throw new Error(
        "Unstable operation 'listSecurityAgentInvestigations' is disabled"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/security_agent/investigations";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.BitsSecurityAnalystApi.listSecurityAgentInvestigations")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (filterSignalId !== undefined) {
      requestContext.setQueryParam(
        "filter[signal_id]",
        ObjectSerializer.serialize(filterSignalId, "string", ""),
        ""
      );
    }
    if (filterTitle !== undefined) {
      requestContext.setQueryParam(
        "filter[title]",
        ObjectSerializer.serialize(filterTitle, "string", ""),
        ""
      );
    }
    if (filterFrom !== undefined) {
      requestContext.setQueryParam(
        "filter[from]",
        ObjectSerializer.serialize(filterFrom, "string", ""),
        ""
      );
    }
    if (filterTo !== undefined) {
      requestContext.setQueryParam(
        "filter[to]",
        ObjectSerializer.serialize(filterTo, "string", ""),
        ""
      );
    }
    if (filterVerdict !== undefined) {
      requestContext.setQueryParam(
        "filter[verdict]",
        ObjectSerializer.serialize(filterVerdict, "string", ""),
        ""
      );
    }
    if (filterState !== undefined) {
      requestContext.setQueryParam(
        "filter[state]",
        ObjectSerializer.serialize(filterState, "string", ""),
        ""
      );
    }
    if (filterRuleId !== undefined) {
      requestContext.setQueryParam(
        "filter[rule_id]",
        ObjectSerializer.serialize(filterRuleId, "string", ""),
        ""
      );
    }
    if (filterRuleType !== undefined) {
      requestContext.setQueryParam(
        "filter[rule_type]",
        ObjectSerializer.serialize(filterRuleType, "string", ""),
        ""
      );
    }
    if (filterSignalSeverity !== undefined) {
      requestContext.setQueryParam(
        "filter[signal_severity]",
        ObjectSerializer.serialize(filterSignalSeverity, "string", ""),
        ""
      );
    }
    if (filterSignalSource !== undefined) {
      requestContext.setQueryParam(
        "filter[signal_source]",
        ObjectSerializer.serialize(filterSignalSource, "string", ""),
        ""
      );
    }
    if (filterTags !== undefined) {
      requestContext.setQueryParam(
        "filter[tags]",
        ObjectSerializer.serialize(filterTags, "string", ""),
        ""
      );
    }
    if (filterEntity !== undefined) {
      requestContext.setQueryParam(
        "filter[entity]",
        ObjectSerializer.serialize(filterEntity, "string", ""),
        ""
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "string", ""),
        ""
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        ObjectSerializer.serialize(pageNumber, "number", "int64"),
        ""
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", "int64"),
        ""
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

  public async removeSecurityAgentOutreachPolicyDomain(
    domain: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'removeSecurityAgentOutreachPolicyDomain'"
    );
    if (
      !_config.unstableOperations["v2.removeSecurityAgentOutreachPolicyDomain"]
    ) {
      throw new Error(
        "Unstable operation 'removeSecurityAgentOutreachPolicyDomain' is disabled"
      );
    }

    // verify required parameter 'domain' is not null or undefined
    if (domain === null || domain === undefined) {
      throw new RequiredError(
        "domain",
        "removeSecurityAgentOutreachPolicyDomain"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/security_agent/outreach_policy/allowed_domains/{domain}".replace(
        "{domain}",
        encodeURIComponent(String(domain))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.BitsSecurityAnalystApi.removeSecurityAgentOutreachPolicyDomain"
      )
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async updateSecurityAgentOutreachMode(
    body: SecurityAgentOutreachModeUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateSecurityAgentOutreachMode'");
    if (!_config.unstableOperations["v2.updateSecurityAgentOutreachMode"]) {
      throw new Error(
        "Unstable operation 'updateSecurityAgentOutreachMode' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateSecurityAgentOutreachMode");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/security_agent/outreach_policy";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.BitsSecurityAnalystApi.updateSecurityAgentOutreachMode")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "SecurityAgentOutreachModeUpdateRequest",
        ""
      ),
      contentType,
      this.configuration.preserveLargeIntegers
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

  public async updateSecurityAgentOutreachPolicyRules(
    body: SecurityAgentOutreachRulesUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'updateSecurityAgentOutreachPolicyRules'"
    );
    if (
      !_config.unstableOperations["v2.updateSecurityAgentOutreachPolicyRules"]
    ) {
      throw new Error(
        "Unstable operation 'updateSecurityAgentOutreachPolicyRules' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateSecurityAgentOutreachPolicyRules");
    }

    // Path Params
    const localVarPath =
      "/api/v2/security_monitoring/security_agent/outreach_policy/rules";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.BitsSecurityAnalystApi.updateSecurityAgentOutreachPolicyRules"
      )
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "SecurityAgentOutreachRulesUpdateRequest",
        ""
      ),
      contentType,
      this.configuration.preserveLargeIntegers
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

export class BitsSecurityAnalystApiResponseProcessor {
  private configuration?: Configuration;

  public constructor(configuration?: Configuration) {
    this.configuration = configuration;
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to addSecurityAgentOutreachPolicyDomain
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async addSecurityAgentOutreachPolicyDomain(
    response: ResponseContext
  ): Promise<SecurityAgentOutreachPolicyResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityAgentOutreachPolicyResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "SecurityAgentOutreachPolicyResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as SecurityAgentOutreachPolicyResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: SecurityAgentOutreachPolicyResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "SecurityAgentOutreachPolicyResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as SecurityAgentOutreachPolicyResponse;
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
   * @params response Response returned by the server for a request to countSecurityAgentInvestigations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async countSecurityAgentInvestigations(
    response: ResponseContext
  ): Promise<SecurityAgentInvestigationCountsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityAgentInvestigationCountsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "SecurityAgentInvestigationCountsResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as SecurityAgentInvestigationCountsResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: SecurityAgentInvestigationCountsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "SecurityAgentInvestigationCountsResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as SecurityAgentInvestigationCountsResponse;
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
   * @params response Response returned by the server for a request to getSecurityAgentInvestigation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityAgentInvestigation(
    response: ResponseContext
  ): Promise<SecurityAgentInvestigationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityAgentInvestigationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "SecurityAgentInvestigationResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as SecurityAgentInvestigationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: SecurityAgentInvestigationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "SecurityAgentInvestigationResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as SecurityAgentInvestigationResponse;
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
   * @params response Response returned by the server for a request to getSecurityAgentOutreachPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSecurityAgentOutreachPolicy(
    response: ResponseContext
  ): Promise<SecurityAgentOutreachPolicyResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityAgentOutreachPolicyResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "SecurityAgentOutreachPolicyResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as SecurityAgentOutreachPolicyResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: SecurityAgentOutreachPolicyResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "SecurityAgentOutreachPolicyResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as SecurityAgentOutreachPolicyResponse;
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
   * @params response Response returned by the server for a request to listSecurityAgentInvestigations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSecurityAgentInvestigations(
    response: ResponseContext
  ): Promise<SecurityAgentInvestigationsListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityAgentInvestigationsListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "SecurityAgentInvestigationsListResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as SecurityAgentInvestigationsListResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: SecurityAgentInvestigationsListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "SecurityAgentInvestigationsListResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as SecurityAgentInvestigationsListResponse;
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
   * @params response Response returned by the server for a request to removeSecurityAgentOutreachPolicyDomain
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async removeSecurityAgentOutreachPolicyDomain(
    response: ResponseContext
  ): Promise<SecurityAgentOutreachPolicyResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityAgentOutreachPolicyResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "SecurityAgentOutreachPolicyResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as SecurityAgentOutreachPolicyResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: SecurityAgentOutreachPolicyResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "SecurityAgentOutreachPolicyResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as SecurityAgentOutreachPolicyResponse;
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
   * @params response Response returned by the server for a request to updateSecurityAgentOutreachMode
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSecurityAgentOutreachMode(
    response: ResponseContext
  ): Promise<SecurityAgentOutreachModeResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityAgentOutreachModeResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "SecurityAgentOutreachModeResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as SecurityAgentOutreachModeResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: SecurityAgentOutreachModeResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "SecurityAgentOutreachModeResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as SecurityAgentOutreachModeResponse;
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
   * @params response Response returned by the server for a request to updateSecurityAgentOutreachPolicyRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateSecurityAgentOutreachPolicyRules(
    response: ResponseContext
  ): Promise<SecurityAgentOutreachPolicyResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SecurityAgentOutreachPolicyResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "SecurityAgentOutreachPolicyResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as SecurityAgentOutreachPolicyResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: SecurityAgentOutreachPolicyResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "SecurityAgentOutreachPolicyResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as SecurityAgentOutreachPolicyResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface BitsSecurityAnalystApiAddSecurityAgentOutreachPolicyDomainRequest {
  /**
   * The email domain to allow.
   * @type SecurityAgentOutreachDomainAddRequest
   */
  body: SecurityAgentOutreachDomainAddRequest;
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
   * @type Int64Input
   */
  pageNumber?: Int64Input;
  /**
   * Number of investigations per page.
   * @type Int64Input
   */
  pageSize?: Int64Input;
}

export interface BitsSecurityAnalystApiRemoveSecurityAgentOutreachPolicyDomainRequest {
  /**
   * The allowed email domain to remove, for example `example.com`. Case-insensitive.
   * @type string
   */
  domain: string;
}

export interface BitsSecurityAnalystApiUpdateSecurityAgentOutreachModeRequest {
  /**
   * The new outreach mode.
   * @type SecurityAgentOutreachModeUpdateRequest
   */
  body: SecurityAgentOutreachModeUpdateRequest;
}

export interface BitsSecurityAnalystApiUpdateSecurityAgentOutreachPolicyRulesRequest {
  /**
   * The rules to upsert.
   * @type SecurityAgentOutreachRulesUpdateRequest
   */
  body: SecurityAgentOutreachRulesUpdateRequest;
}

export class BitsSecurityAnalystApi {
  private requestFactory: BitsSecurityAnalystApiRequestFactory;
  private responseProcessor: BitsSecurityAnalystApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: BitsSecurityAnalystApiRequestFactory,
    responseProcessor?: BitsSecurityAnalystApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new BitsSecurityAnalystApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor ||
      new BitsSecurityAnalystApiResponseProcessor(configuration);
  }

  /**
   * Add one allowed email domain. User outreach is only sent to users whose email domain is allowed. The
   * domain must be a fully qualified domain name, like `example.com`; it is lowercased before being stored.
   * An organization can allow at most 20 domains.
   * @param param The request object
   */
  public addSecurityAgentOutreachPolicyDomain(
    param: BitsSecurityAnalystApiAddSecurityAgentOutreachPolicyDomainRequest,
    options?: Configuration
  ): Promise<SecurityAgentOutreachPolicyResponse> {
    const requestContextPromise =
      this.requestFactory.addSecurityAgentOutreachPolicyDomain(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.addSecurityAgentOutreachPolicyDomain(
            responseContext
          );
        });
    });
  }

  /**
   * Count completed Bits Security Analyst investigations by the values of one field. Buckets are sorted by
   * ascending count. With `field=entity` or `field=signal_source`, an investigation counts in the bucket of
   * each of its entities or sources.
   * @param param The request object
   */
  public countSecurityAgentInvestigations(
    param: BitsSecurityAnalystApiCountSecurityAgentInvestigationsRequest,
    options?: Configuration
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
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.countSecurityAgentInvestigations(
            responseContext
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
    options?: Configuration
  ): Promise<SecurityAgentInvestigationResponse> {
    const requestContextPromise =
      this.requestFactory.getSecurityAgentInvestigation(
        param.investigationId,
        param.fieldsInvestigations,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecurityAgentInvestigation(
            responseContext
          );
        });
    });
  }

  /**
   * Get the organization's user outreach policy for Bits Security Analyst: the outreach mode, the per-rule
   * automation state, the allowed email domains that user outreach can be sent to, and, for the caller, domains
   * that could be allowed next.
   * @param param The request object
   */
  public getSecurityAgentOutreachPolicy(
    options?: Configuration
  ): Promise<SecurityAgentOutreachPolicyResponse> {
    const requestContextPromise =
      this.requestFactory.getSecurityAgentOutreachPolicy(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSecurityAgentOutreachPolicy(
            responseContext
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
    options?: Configuration
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
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSecurityAgentInvestigations(
            responseContext
          );
        });
    });
  }

  /**
   * Remove one allowed email domain, by its name.
   * @param param The request object
   */
  public removeSecurityAgentOutreachPolicyDomain(
    param: BitsSecurityAnalystApiRemoveSecurityAgentOutreachPolicyDomainRequest,
    options?: Configuration
  ): Promise<SecurityAgentOutreachPolicyResponse> {
    const requestContextPromise =
      this.requestFactory.removeSecurityAgentOutreachPolicyDomain(
        param.domain,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.removeSecurityAgentOutreachPolicyDomain(
            responseContext
          );
        });
    });
  }

  /**
   * Set the organization's outreach mode: `off` (no user outreach), `manual` (outreach is only sent when an
   * analyst triggers it), or `automated` (rules with outreach enabled auto-send automated interviews to users
   * whose email domain is allowed).
   * @param param The request object
   */
  public updateSecurityAgentOutreachMode(
    param: BitsSecurityAnalystApiUpdateSecurityAgentOutreachModeRequest,
    options?: Configuration
  ): Promise<SecurityAgentOutreachModeResponse> {
    const requestContextPromise =
      this.requestFactory.updateSecurityAgentOutreachMode(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSecurityAgentOutreachMode(
            responseContext
          );
        });
    });
  }

  /**
   * Upsert the outreach automation state of detection rules. Each rule in the request gets the given state;
   * rules not in the request keep their state. A rule with `is_enabled: true` auto-sends automated interviews
   * in `automated` mode.
   * @param param The request object
   */
  public updateSecurityAgentOutreachPolicyRules(
    param: BitsSecurityAnalystApiUpdateSecurityAgentOutreachPolicyRulesRequest,
    options?: Configuration
  ): Promise<SecurityAgentOutreachPolicyResponse> {
    const requestContextPromise =
      this.requestFactory.updateSecurityAgentOutreachPolicyRules(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSecurityAgentOutreachPolicyRules(
            responseContext
          );
        });
    });
  }
}
