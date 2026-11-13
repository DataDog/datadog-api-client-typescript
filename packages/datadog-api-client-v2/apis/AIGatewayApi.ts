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

import { AiGatewayBudgetCreateRequest } from "../models/AiGatewayBudgetCreateRequest";
import { AiGatewayBudgetInstanceCapacityOverrideRequest } from "../models/AiGatewayBudgetInstanceCapacityOverrideRequest";
import { AiGatewayBudgetInstanceDimensionListResponse } from "../models/AiGatewayBudgetInstanceDimensionListResponse";
import { AiGatewayBudgetInstanceListResponse } from "../models/AiGatewayBudgetInstanceListResponse";
import { AiGatewayBudgetInstanceResetRequest } from "../models/AiGatewayBudgetInstanceResetRequest";
import { AiGatewayBudgetInstanceResponse } from "../models/AiGatewayBudgetInstanceResponse";
import { AiGatewayBudgetInstanceSort } from "../models/AiGatewayBudgetInstanceSort";
import { AiGatewayBudgetInstancesSummaryResponse } from "../models/AiGatewayBudgetInstancesSummaryResponse";
import { AiGatewayBudgetListResponse } from "../models/AiGatewayBudgetListResponse";
import { AiGatewayBudgetPeriodResponse } from "../models/AiGatewayBudgetPeriodResponse";
import { AiGatewayBudgetResponse } from "../models/AiGatewayBudgetResponse";
import { AiGatewayBudgetUpdateRequest } from "../models/AiGatewayBudgetUpdateRequest";
import { AiGatewayCaptureConfigurationResponse } from "../models/AiGatewayCaptureConfigurationResponse";
import { AiGatewayCaptureCreateRequest } from "../models/AiGatewayCaptureCreateRequest";
import { AiGatewayCaptureDeleteRequest } from "../models/AiGatewayCaptureDeleteRequest";
import { AiGatewayCaptureOverrideResponse } from "../models/AiGatewayCaptureOverrideResponse";
import { AiGatewayCaptureUpdateRequest } from "../models/AiGatewayCaptureUpdateRequest";
import { AiGatewayDiscoveredModelListResponse } from "../models/AiGatewayDiscoveredModelListResponse";
import { AiGatewayGovernanceReplaceRequest } from "../models/AiGatewayGovernanceReplaceRequest";
import { AiGatewayGovernanceResponse } from "../models/AiGatewayGovernanceResponse";
import { AiGatewayModelCatalogEntryListResponse } from "../models/AiGatewayModelCatalogEntryListResponse";
import { AiGatewayModelCatalogEntryResponse } from "../models/AiGatewayModelCatalogEntryResponse";
import { AiGatewayModelCreateRequest } from "../models/AiGatewayModelCreateRequest";
import { AiGatewayModelGroupCreateRequest } from "../models/AiGatewayModelGroupCreateRequest";
import { AiGatewayModelGroupListResponse } from "../models/AiGatewayModelGroupListResponse";
import { AiGatewayModelGroupResponse } from "../models/AiGatewayModelGroupResponse";
import { AiGatewayModelGroupUpdateRequest } from "../models/AiGatewayModelGroupUpdateRequest";
import { AiGatewayModelPricingRequest } from "../models/AiGatewayModelPricingRequest";
import { AiGatewayModelPricingResponse } from "../models/AiGatewayModelPricingResponse";
import { AiGatewayModelsBulkCreateRequest } from "../models/AiGatewayModelsBulkCreateRequest";
import { AiGatewayModelsByCanonicalListResponse } from "../models/AiGatewayModelsByCanonicalListResponse";
import { AiGatewayModelUpdateRequest } from "../models/AiGatewayModelUpdateRequest";
import { AiGatewayPolicyListResponse } from "../models/AiGatewayPolicyListResponse";
import { AiGatewayPolicyRequest } from "../models/AiGatewayPolicyRequest";
import { AiGatewayPolicyResponse } from "../models/AiGatewayPolicyResponse";
import { AiGatewayProviderCreateRequest } from "../models/AiGatewayProviderCreateRequest";
import { AiGatewayProviderListResponse } from "../models/AiGatewayProviderListResponse";
import { AiGatewayProviderResponse } from "../models/AiGatewayProviderResponse";
import { AiGatewayProviderUpdateRequest } from "../models/AiGatewayProviderUpdateRequest";
import { AiGatewayRateLimitCreateRequest } from "../models/AiGatewayRateLimitCreateRequest";
import { AiGatewayRateLimitInstanceListResponse } from "../models/AiGatewayRateLimitInstanceListResponse";
import { AiGatewayRateLimitInstanceSort } from "../models/AiGatewayRateLimitInstanceSort";
import { AiGatewayRateLimitInstancesSummaryListResponse } from "../models/AiGatewayRateLimitInstancesSummaryListResponse";
import { AiGatewayRateLimitInstancesSummaryResponse } from "../models/AiGatewayRateLimitInstancesSummaryResponse";
import { AiGatewayRateLimitListResponse } from "../models/AiGatewayRateLimitListResponse";
import { AiGatewayRateLimitResponse } from "../models/AiGatewayRateLimitResponse";
import { AiGatewayRateLimitUpdateRequest } from "../models/AiGatewayRateLimitUpdateRequest";
import { AiGatewayRateLimitUsageListResponse } from "../models/AiGatewayRateLimitUsageListResponse";
import { AiGatewayRoutingRuleCreateRequest } from "../models/AiGatewayRoutingRuleCreateRequest";
import { AiGatewayRoutingRuleListResponse } from "../models/AiGatewayRoutingRuleListResponse";
import { AiGatewayRoutingRuleReplaceRequest } from "../models/AiGatewayRoutingRuleReplaceRequest";
import { AiGatewayRoutingRuleResponse } from "../models/AiGatewayRoutingRuleResponse";
import { APIErrorResponse } from "../models/APIErrorResponse";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";

export class AIGatewayApiRequestFactory extends BaseAPIRequestFactory {
  public async bulkCreateAiGatewayModels(
    providerId: Int64Input,
    body: AiGatewayModelsBulkCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'bulkCreateAiGatewayModels'");
    if (!_config.unstableOperations["v2.bulkCreateAiGatewayModels"]) {
      throw new Error(
        "Unstable operation 'bulkCreateAiGatewayModels' is disabled"
      );
    }

    // verify required parameter 'providerId' is not null or undefined
    if (providerId === null || providerId === undefined) {
      throw new RequiredError("providerId", "bulkCreateAiGatewayModels");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "bulkCreateAiGatewayModels");
    }

    // Path Params
    const localVarPath = "/api/v2/providers/{provider_id}/models/bulk".replace(
      "{provider_id}",
      encodeURIComponent(String(providerId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.bulkCreateAiGatewayModels")
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
      ObjectSerializer.serialize(body, "AiGatewayModelsBulkCreateRequest", ""),
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

  public async createAiGatewayBudget(
    body: AiGatewayBudgetCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createAiGatewayBudget'");
    if (!_config.unstableOperations["v2.createAiGatewayBudget"]) {
      throw new Error("Unstable operation 'createAiGatewayBudget' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createAiGatewayBudget");
    }

    // Path Params
    const localVarPath = "/api/v2/budgets";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.createAiGatewayBudget")
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
      ObjectSerializer.serialize(body, "AiGatewayBudgetCreateRequest", ""),
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

  public async createAiGatewayDataCaptureOverride(
    body: AiGatewayCaptureCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'createAiGatewayDataCaptureOverride'"
    );
    if (!_config.unstableOperations["v2.createAiGatewayDataCaptureOverride"]) {
      throw new Error(
        "Unstable operation 'createAiGatewayDataCaptureOverride' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createAiGatewayDataCaptureOverride");
    }

    // Path Params
    const localVarPath = "/api/v2/data-capture/overrides";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.createAiGatewayDataCaptureOverride")
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
      ObjectSerializer.serialize(body, "AiGatewayCaptureCreateRequest", ""),
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

  public async createAiGatewayModel(
    providerId: Int64Input,
    body: AiGatewayModelCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createAiGatewayModel'");
    if (!_config.unstableOperations["v2.createAiGatewayModel"]) {
      throw new Error("Unstable operation 'createAiGatewayModel' is disabled");
    }

    // verify required parameter 'providerId' is not null or undefined
    if (providerId === null || providerId === undefined) {
      throw new RequiredError("providerId", "createAiGatewayModel");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createAiGatewayModel");
    }

    // Path Params
    const localVarPath = "/api/v2/providers/{provider_id}/models".replace(
      "{provider_id}",
      encodeURIComponent(String(providerId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.createAiGatewayModel")
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
      ObjectSerializer.serialize(body, "AiGatewayModelCreateRequest", ""),
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

  public async createAiGatewayModelGroup(
    body: AiGatewayModelGroupCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createAiGatewayModelGroup'");
    if (!_config.unstableOperations["v2.createAiGatewayModelGroup"]) {
      throw new Error(
        "Unstable operation 'createAiGatewayModelGroup' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createAiGatewayModelGroup");
    }

    // Path Params
    const localVarPath = "/api/v2/model-groups";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.createAiGatewayModelGroup")
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
      ObjectSerializer.serialize(body, "AiGatewayModelGroupCreateRequest", ""),
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

  public async createAiGatewayProvider(
    body: AiGatewayProviderCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createAiGatewayProvider'");
    if (!_config.unstableOperations["v2.createAiGatewayProvider"]) {
      throw new Error(
        "Unstable operation 'createAiGatewayProvider' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createAiGatewayProvider");
    }

    // Path Params
    const localVarPath = "/api/v2/providers";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.createAiGatewayProvider")
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
      ObjectSerializer.serialize(body, "AiGatewayProviderCreateRequest", ""),
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

  public async createAiGatewayRateLimit(
    body: AiGatewayRateLimitCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createAiGatewayRateLimit'");
    if (!_config.unstableOperations["v2.createAiGatewayRateLimit"]) {
      throw new Error(
        "Unstable operation 'createAiGatewayRateLimit' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createAiGatewayRateLimit");
    }

    // Path Params
    const localVarPath = "/api/v2/rate-limits";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.createAiGatewayRateLimit")
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
      ObjectSerializer.serialize(body, "AiGatewayRateLimitCreateRequest", ""),
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

  public async createAiGatewayRoutingRule(
    body: AiGatewayRoutingRuleCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createAiGatewayRoutingRule'");
    if (!_config.unstableOperations["v2.createAiGatewayRoutingRule"]) {
      throw new Error(
        "Unstable operation 'createAiGatewayRoutingRule' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createAiGatewayRoutingRule");
    }

    // Path Params
    const localVarPath = "/api/v2/routing-rules";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.createAiGatewayRoutingRule")
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
      ObjectSerializer.serialize(body, "AiGatewayRoutingRuleCreateRequest", ""),
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

  public async deleteAiGatewayBudget(
    id: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteAiGatewayBudget'");
    if (!_config.unstableOperations["v2.deleteAiGatewayBudget"]) {
      throw new Error("Unstable operation 'deleteAiGatewayBudget' is disabled");
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "deleteAiGatewayBudget");
    }

    // Path Params
    const localVarPath = "/api/v2/budgets/{id}".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.deleteAiGatewayBudget")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
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

  public async deleteAiGatewayDataCaptureOverride(
    id: string,
    body: AiGatewayCaptureDeleteRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'deleteAiGatewayDataCaptureOverride'"
    );
    if (!_config.unstableOperations["v2.deleteAiGatewayDataCaptureOverride"]) {
      throw new Error(
        "Unstable operation 'deleteAiGatewayDataCaptureOverride' is disabled"
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "deleteAiGatewayDataCaptureOverride");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deleteAiGatewayDataCaptureOverride");
    }

    // Path Params
    const localVarPath = "/api/v2/data-capture/overrides/{id}".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.deleteAiGatewayDataCaptureOverride")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
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
      ObjectSerializer.serialize(body, "AiGatewayCaptureDeleteRequest", ""),
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

  public async deleteAiGatewayModel(
    providerId: Int64Input,
    canonical: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteAiGatewayModel'");
    if (!_config.unstableOperations["v2.deleteAiGatewayModel"]) {
      throw new Error("Unstable operation 'deleteAiGatewayModel' is disabled");
    }

    // verify required parameter 'providerId' is not null or undefined
    if (providerId === null || providerId === undefined) {
      throw new RequiredError("providerId", "deleteAiGatewayModel");
    }

    // verify required parameter 'canonical' is not null or undefined
    if (canonical === null || canonical === undefined) {
      throw new RequiredError("canonical", "deleteAiGatewayModel");
    }

    // Path Params
    const localVarPath = "/api/v2/providers/{provider_id}/models/{canonical}"
      .replace("{provider_id}", encodeURIComponent(String(providerId)))
      .replace("{canonical}", encodeURIComponent(String(canonical)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.deleteAiGatewayModel")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
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

  public async deleteAiGatewayModelGroup(
    id: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteAiGatewayModelGroup'");
    if (!_config.unstableOperations["v2.deleteAiGatewayModelGroup"]) {
      throw new Error(
        "Unstable operation 'deleteAiGatewayModelGroup' is disabled"
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "deleteAiGatewayModelGroup");
    }

    // Path Params
    const localVarPath = "/api/v2/model-groups/{id}".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.deleteAiGatewayModelGroup")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
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

  public async deleteAiGatewayModelPricing(
    providerId: Int64Input,
    canonical: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteAiGatewayModelPricing'");
    if (!_config.unstableOperations["v2.deleteAiGatewayModelPricing"]) {
      throw new Error(
        "Unstable operation 'deleteAiGatewayModelPricing' is disabled"
      );
    }

    // verify required parameter 'providerId' is not null or undefined
    if (providerId === null || providerId === undefined) {
      throw new RequiredError("providerId", "deleteAiGatewayModelPricing");
    }

    // verify required parameter 'canonical' is not null or undefined
    if (canonical === null || canonical === undefined) {
      throw new RequiredError("canonical", "deleteAiGatewayModelPricing");
    }

    // Path Params
    const localVarPath =
      "/api/v2/providers/{provider_id}/models/{canonical}/pricing"
        .replace("{provider_id}", encodeURIComponent(String(providerId)))
        .replace("{canonical}", encodeURIComponent(String(canonical)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.deleteAiGatewayModelPricing")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
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

  public async deleteAiGatewayPolicy(
    inbound: string,
    userId?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteAiGatewayPolicy'");
    if (!_config.unstableOperations["v2.deleteAiGatewayPolicy"]) {
      throw new Error("Unstable operation 'deleteAiGatewayPolicy' is disabled");
    }

    // verify required parameter 'inbound' is not null or undefined
    if (inbound === null || inbound === undefined) {
      throw new RequiredError("inbound", "deleteAiGatewayPolicy");
    }

    // Path Params
    const localVarPath = "/api/v2/policies/{inbound}".replace(
      "{inbound}",
      encodeURIComponent(String(inbound))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.deleteAiGatewayPolicy")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (userId !== undefined) {
      requestContext.setQueryParam(
        "user_id",
        ObjectSerializer.serialize(userId, "string", "uuid"),
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

  public async deleteAiGatewayProvider(
    id: Int64Input,
    force?: boolean,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteAiGatewayProvider'");
    if (!_config.unstableOperations["v2.deleteAiGatewayProvider"]) {
      throw new Error(
        "Unstable operation 'deleteAiGatewayProvider' is disabled"
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "deleteAiGatewayProvider");
    }

    // Path Params
    const localVarPath = "/api/v2/providers/{id}".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.deleteAiGatewayProvider")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (force !== undefined) {
      requestContext.setQueryParam(
        "force",
        ObjectSerializer.serialize(force, "boolean", ""),
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

  public async deleteAiGatewayRateLimit(
    id: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteAiGatewayRateLimit'");
    if (!_config.unstableOperations["v2.deleteAiGatewayRateLimit"]) {
      throw new Error(
        "Unstable operation 'deleteAiGatewayRateLimit' is disabled"
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "deleteAiGatewayRateLimit");
    }

    // Path Params
    const localVarPath = "/api/v2/rate-limits/{id}".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.deleteAiGatewayRateLimit")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
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

  public async deleteAiGatewayRoutingRule(
    slug: string,
    force?: boolean,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteAiGatewayRoutingRule'");
    if (!_config.unstableOperations["v2.deleteAiGatewayRoutingRule"]) {
      throw new Error(
        "Unstable operation 'deleteAiGatewayRoutingRule' is disabled"
      );
    }

    // verify required parameter 'slug' is not null or undefined
    if (slug === null || slug === undefined) {
      throw new RequiredError("slug", "deleteAiGatewayRoutingRule");
    }

    // Path Params
    const localVarPath = "/api/v2/routing-rules";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.deleteAiGatewayRoutingRule")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (slug !== undefined) {
      requestContext.setQueryParam(
        "slug",
        ObjectSerializer.serialize(slug, "string", ""),
        ""
      );
    }
    if (force !== undefined) {
      requestContext.setQueryParam(
        "force",
        ObjectSerializer.serialize(force, "boolean", ""),
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

  public async getAiGatewayBudget(
    id: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getAiGatewayBudget'");
    if (!_config.unstableOperations["v2.getAiGatewayBudget"]) {
      throw new Error("Unstable operation 'getAiGatewayBudget' is disabled");
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getAiGatewayBudget");
    }

    // Path Params
    const localVarPath = "/api/v2/budgets/{id}".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.getAiGatewayBudget")
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

  public async getAiGatewayBudgetCurrentPeriod(
    id: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getAiGatewayBudgetCurrentPeriod'");
    if (!_config.unstableOperations["v2.getAiGatewayBudgetCurrentPeriod"]) {
      throw new Error(
        "Unstable operation 'getAiGatewayBudgetCurrentPeriod' is disabled"
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getAiGatewayBudgetCurrentPeriod");
    }

    // Path Params
    const localVarPath = "/api/v2/budgets/{id}/current-period".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.getAiGatewayBudgetCurrentPeriod")
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

  public async getAiGatewayBudgetInstancesSummary(
    id: string,
    window?: Date,
    splitDim?: Array<string>,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'getAiGatewayBudgetInstancesSummary'"
    );
    if (!_config.unstableOperations["v2.getAiGatewayBudgetInstancesSummary"]) {
      throw new Error(
        "Unstable operation 'getAiGatewayBudgetInstancesSummary' is disabled"
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getAiGatewayBudgetInstancesSummary");
    }

    // Path Params
    const localVarPath = "/api/v2/budgets/{id}/instances/summary".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.getAiGatewayBudgetInstancesSummary")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (window !== undefined) {
      requestContext.setQueryParam(
        "window",
        ObjectSerializer.serialize(window, "Date", "date-time"),
        ""
      );
    }
    if (splitDim !== undefined) {
      requestContext.setQueryParam(
        "split_dim",
        ObjectSerializer.serialize(splitDim, "Array<string>", ""),
        "multi"
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

  public async getAiGatewayDataCaptureConfiguration(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'getAiGatewayDataCaptureConfiguration'"
    );
    if (
      !_config.unstableOperations["v2.getAiGatewayDataCaptureConfiguration"]
    ) {
      throw new Error(
        "Unstable operation 'getAiGatewayDataCaptureConfiguration' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/data-capture/configuration";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.getAiGatewayDataCaptureConfiguration")
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

  public async getAiGatewayGovernance(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getAiGatewayGovernance'");
    if (!_config.unstableOperations["v2.getAiGatewayGovernance"]) {
      throw new Error(
        "Unstable operation 'getAiGatewayGovernance' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/governance";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.getAiGatewayGovernance")
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

  public async getAiGatewayModelGroup(
    id: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getAiGatewayModelGroup'");
    if (!_config.unstableOperations["v2.getAiGatewayModelGroup"]) {
      throw new Error(
        "Unstable operation 'getAiGatewayModelGroup' is disabled"
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getAiGatewayModelGroup");
    }

    // Path Params
    const localVarPath = "/api/v2/model-groups/{id}".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.getAiGatewayModelGroup")
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

  public async getAiGatewayModelPricing(
    providerId: Int64Input,
    canonical: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getAiGatewayModelPricing'");
    if (!_config.unstableOperations["v2.getAiGatewayModelPricing"]) {
      throw new Error(
        "Unstable operation 'getAiGatewayModelPricing' is disabled"
      );
    }

    // verify required parameter 'providerId' is not null or undefined
    if (providerId === null || providerId === undefined) {
      throw new RequiredError("providerId", "getAiGatewayModelPricing");
    }

    // verify required parameter 'canonical' is not null or undefined
    if (canonical === null || canonical === undefined) {
      throw new RequiredError("canonical", "getAiGatewayModelPricing");
    }

    // Path Params
    const localVarPath =
      "/api/v2/providers/{provider_id}/models/{canonical}/pricing"
        .replace("{provider_id}", encodeURIComponent(String(providerId)))
        .replace("{canonical}", encodeURIComponent(String(canonical)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.getAiGatewayModelPricing")
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

  public async getAiGatewayPolicy(
    inbound: string,
    userId?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getAiGatewayPolicy'");
    if (!_config.unstableOperations["v2.getAiGatewayPolicy"]) {
      throw new Error("Unstable operation 'getAiGatewayPolicy' is disabled");
    }

    // verify required parameter 'inbound' is not null or undefined
    if (inbound === null || inbound === undefined) {
      throw new RequiredError("inbound", "getAiGatewayPolicy");
    }

    // Path Params
    const localVarPath = "/api/v2/policies/{inbound}".replace(
      "{inbound}",
      encodeURIComponent(String(inbound))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.getAiGatewayPolicy")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (userId !== undefined) {
      requestContext.setQueryParam(
        "user_id",
        ObjectSerializer.serialize(userId, "string", "uuid"),
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

  public async getAiGatewayProvider(
    id: Int64Input,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getAiGatewayProvider'");
    if (!_config.unstableOperations["v2.getAiGatewayProvider"]) {
      throw new Error("Unstable operation 'getAiGatewayProvider' is disabled");
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getAiGatewayProvider");
    }

    // Path Params
    const localVarPath = "/api/v2/providers/{id}".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.getAiGatewayProvider")
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

  public async getAiGatewayRateLimit(
    id: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getAiGatewayRateLimit'");
    if (!_config.unstableOperations["v2.getAiGatewayRateLimit"]) {
      throw new Error("Unstable operation 'getAiGatewayRateLimit' is disabled");
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getAiGatewayRateLimit");
    }

    // Path Params
    const localVarPath = "/api/v2/rate-limits/{id}".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.getAiGatewayRateLimit")
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

  public async getAiGatewayRateLimitInstancesSummary(
    id: string,
    splitDim?: Array<string>,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'getAiGatewayRateLimitInstancesSummary'"
    );
    if (
      !_config.unstableOperations["v2.getAiGatewayRateLimitInstancesSummary"]
    ) {
      throw new Error(
        "Unstable operation 'getAiGatewayRateLimitInstancesSummary' is disabled"
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getAiGatewayRateLimitInstancesSummary");
    }

    // Path Params
    const localVarPath = "/api/v2/rate-limits/{id}/instances/summary".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.getAiGatewayRateLimitInstancesSummary")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (splitDim !== undefined) {
      requestContext.setQueryParam(
        "split_dim",
        ObjectSerializer.serialize(splitDim, "Array<string>", ""),
        "multi"
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

  public async getAiGatewayRateLimitUsage(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getAiGatewayRateLimitUsage'");
    if (!_config.unstableOperations["v2.getAiGatewayRateLimitUsage"]) {
      throw new Error(
        "Unstable operation 'getAiGatewayRateLimitUsage' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/rate-limits/usage";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.getAiGatewayRateLimitUsage")
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

  public async getAiGatewayRoutingRule(
    slug: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getAiGatewayRoutingRule'");
    if (!_config.unstableOperations["v2.getAiGatewayRoutingRule"]) {
      throw new Error(
        "Unstable operation 'getAiGatewayRoutingRule' is disabled"
      );
    }

    // verify required parameter 'slug' is not null or undefined
    if (slug === null || slug === undefined) {
      throw new RequiredError("slug", "getAiGatewayRoutingRule");
    }

    // Path Params
    const localVarPath = "/api/v2/routing-rules/get";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.getAiGatewayRoutingRule")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (slug !== undefined) {
      requestContext.setQueryParam(
        "slug",
        ObjectSerializer.serialize(slug, "string", ""),
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

  public async listAiGatewayBudgetInstanceDimensions(
    id: string,
    window?: Date,
    splitDim?: Array<string>,
    dim?: Array<string>,
    query?: string,
    value?: Array<string>,
    limit?: Int64Input,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'listAiGatewayBudgetInstanceDimensions'"
    );
    if (
      !_config.unstableOperations["v2.listAiGatewayBudgetInstanceDimensions"]
    ) {
      throw new Error(
        "Unstable operation 'listAiGatewayBudgetInstanceDimensions' is disabled"
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "listAiGatewayBudgetInstanceDimensions");
    }

    // Path Params
    const localVarPath = "/api/v2/budgets/{id}/instances/dimensions".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.listAiGatewayBudgetInstanceDimensions")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (window !== undefined) {
      requestContext.setQueryParam(
        "window",
        ObjectSerializer.serialize(window, "Date", "date-time"),
        ""
      );
    }
    if (splitDim !== undefined) {
      requestContext.setQueryParam(
        "split_dim",
        ObjectSerializer.serialize(splitDim, "Array<string>", ""),
        "multi"
      );
    }
    if (dim !== undefined) {
      requestContext.setQueryParam(
        "dim",
        ObjectSerializer.serialize(dim, "Array<string>", ""),
        "multi"
      );
    }
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        ObjectSerializer.serialize(query, "string", ""),
        ""
      );
    }
    if (value !== undefined) {
      requestContext.setQueryParam(
        "value",
        ObjectSerializer.serialize(value, "Array<string>", ""),
        "multi"
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", "int64"),
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

  public async listAiGatewayBudgetInstances(
    id: string,
    window?: Date,
    splitDim?: Array<string>,
    sort?: AiGatewayBudgetInstanceSort,
    limit?: Int64Input,
    offset?: Int64Input,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listAiGatewayBudgetInstances'");
    if (!_config.unstableOperations["v2.listAiGatewayBudgetInstances"]) {
      throw new Error(
        "Unstable operation 'listAiGatewayBudgetInstances' is disabled"
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "listAiGatewayBudgetInstances");
    }

    // Path Params
    const localVarPath = "/api/v2/budgets/{id}/instances".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.listAiGatewayBudgetInstances")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (window !== undefined) {
      requestContext.setQueryParam(
        "window",
        ObjectSerializer.serialize(window, "Date", "date-time"),
        ""
      );
    }
    if (splitDim !== undefined) {
      requestContext.setQueryParam(
        "split_dim",
        ObjectSerializer.serialize(splitDim, "Array<string>", ""),
        "multi"
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "AiGatewayBudgetInstanceSort", ""),
        ""
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", "int64"),
        ""
      );
    }
    if (offset !== undefined) {
      requestContext.setQueryParam(
        "offset",
        ObjectSerializer.serialize(offset, "number", "int64"),
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

  public async listAiGatewayBudgets(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listAiGatewayBudgets'");
    if (!_config.unstableOperations["v2.listAiGatewayBudgets"]) {
      throw new Error("Unstable operation 'listAiGatewayBudgets' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/budgets";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.listAiGatewayBudgets")
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

  public async listAiGatewayModelGroups(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listAiGatewayModelGroups'");
    if (!_config.unstableOperations["v2.listAiGatewayModelGroups"]) {
      throw new Error(
        "Unstable operation 'listAiGatewayModelGroups' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/model-groups";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.listAiGatewayModelGroups")
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

  public async listAiGatewayModels(
    providerId: Int64Input,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listAiGatewayModels'");
    if (!_config.unstableOperations["v2.listAiGatewayModels"]) {
      throw new Error("Unstable operation 'listAiGatewayModels' is disabled");
    }

    // verify required parameter 'providerId' is not null or undefined
    if (providerId === null || providerId === undefined) {
      throw new RequiredError("providerId", "listAiGatewayModels");
    }

    // Path Params
    const localVarPath = "/api/v2/providers/{provider_id}/models".replace(
      "{provider_id}",
      encodeURIComponent(String(providerId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.listAiGatewayModels")
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

  public async listAiGatewayModelsByCanonical(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listAiGatewayModelsByCanonical'");
    if (!_config.unstableOperations["v2.listAiGatewayModelsByCanonical"]) {
      throw new Error(
        "Unstable operation 'listAiGatewayModelsByCanonical' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/models";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.listAiGatewayModelsByCanonical")
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

  public async listAiGatewayPolicies(
    userId?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listAiGatewayPolicies'");
    if (!_config.unstableOperations["v2.listAiGatewayPolicies"]) {
      throw new Error("Unstable operation 'listAiGatewayPolicies' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/policies";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.listAiGatewayPolicies")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (userId !== undefined) {
      requestContext.setQueryParam(
        "user_id",
        ObjectSerializer.serialize(userId, "string", "uuid"),
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

  public async listAiGatewayProviderModels(
    integrationType: string,
    integrationAccountId: string,
    projectId?: string,
    location?: string,
    bedrockRegion?: string,
    foundryResourceId?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listAiGatewayProviderModels'");
    if (!_config.unstableOperations["v2.listAiGatewayProviderModels"]) {
      throw new Error(
        "Unstable operation 'listAiGatewayProviderModels' is disabled"
      );
    }

    // verify required parameter 'integrationType' is not null or undefined
    if (integrationType === null || integrationType === undefined) {
      throw new RequiredError("integrationType", "listAiGatewayProviderModels");
    }

    // verify required parameter 'integrationAccountId' is not null or undefined
    if (integrationAccountId === null || integrationAccountId === undefined) {
      throw new RequiredError(
        "integrationAccountId",
        "listAiGatewayProviderModels"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/provider-models";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.listAiGatewayProviderModels")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (integrationType !== undefined) {
      requestContext.setQueryParam(
        "integration_type",
        ObjectSerializer.serialize(integrationType, "string", ""),
        ""
      );
    }
    if (integrationAccountId !== undefined) {
      requestContext.setQueryParam(
        "integration_account_id",
        ObjectSerializer.serialize(integrationAccountId, "string", ""),
        ""
      );
    }
    if (projectId !== undefined) {
      requestContext.setQueryParam(
        "project_id",
        ObjectSerializer.serialize(projectId, "string", ""),
        ""
      );
    }
    if (location !== undefined) {
      requestContext.setQueryParam(
        "location",
        ObjectSerializer.serialize(location, "string", ""),
        ""
      );
    }
    if (bedrockRegion !== undefined) {
      requestContext.setQueryParam(
        "bedrock_region",
        ObjectSerializer.serialize(bedrockRegion, "string", ""),
        ""
      );
    }
    if (foundryResourceId !== undefined) {
      requestContext.setQueryParam(
        "foundry_resource_id",
        ObjectSerializer.serialize(foundryResourceId, "string", ""),
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

  public async listAiGatewayProviders(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listAiGatewayProviders'");
    if (!_config.unstableOperations["v2.listAiGatewayProviders"]) {
      throw new Error(
        "Unstable operation 'listAiGatewayProviders' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/providers";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.listAiGatewayProviders")
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

  public async listAiGatewayRateLimitInstances(
    id: string,
    splitDim?: Array<string>,
    sort?: AiGatewayRateLimitInstanceSort,
    limit?: Int64Input,
    offset?: Int64Input,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listAiGatewayRateLimitInstances'");
    if (!_config.unstableOperations["v2.listAiGatewayRateLimitInstances"]) {
      throw new Error(
        "Unstable operation 'listAiGatewayRateLimitInstances' is disabled"
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "listAiGatewayRateLimitInstances");
    }

    // Path Params
    const localVarPath = "/api/v2/rate-limits/{id}/instances".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.listAiGatewayRateLimitInstances")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (splitDim !== undefined) {
      requestContext.setQueryParam(
        "split_dim",
        ObjectSerializer.serialize(splitDim, "Array<string>", ""),
        "multi"
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "AiGatewayRateLimitInstanceSort", ""),
        ""
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", "int64"),
        ""
      );
    }
    if (offset !== undefined) {
      requestContext.setQueryParam(
        "offset",
        ObjectSerializer.serialize(offset, "number", "int64"),
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

  public async listAiGatewayRateLimitInstancesSummaries(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'listAiGatewayRateLimitInstancesSummaries'"
    );
    if (
      !_config.unstableOperations["v2.listAiGatewayRateLimitInstancesSummaries"]
    ) {
      throw new Error(
        "Unstable operation 'listAiGatewayRateLimitInstancesSummaries' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/rate-limits/instances/summary";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.listAiGatewayRateLimitInstancesSummaries")
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

  public async listAiGatewayRateLimits(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listAiGatewayRateLimits'");
    if (!_config.unstableOperations["v2.listAiGatewayRateLimits"]) {
      throw new Error(
        "Unstable operation 'listAiGatewayRateLimits' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/rate-limits";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.listAiGatewayRateLimits")
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

  public async listAiGatewayRoutingRules(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listAiGatewayRoutingRules'");
    if (!_config.unstableOperations["v2.listAiGatewayRoutingRules"]) {
      throw new Error(
        "Unstable operation 'listAiGatewayRoutingRules' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/routing-rules";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.listAiGatewayRoutingRules")
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

  public async overrideAiGatewayBudgetInstanceCapacity(
    id: string,
    body: AiGatewayBudgetInstanceCapacityOverrideRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'overrideAiGatewayBudgetInstanceCapacity'"
    );
    if (
      !_config.unstableOperations["v2.overrideAiGatewayBudgetInstanceCapacity"]
    ) {
      throw new Error(
        "Unstable operation 'overrideAiGatewayBudgetInstanceCapacity' is disabled"
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "overrideAiGatewayBudgetInstanceCapacity");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "overrideAiGatewayBudgetInstanceCapacity"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/budgets/{id}/instances/capacity".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.overrideAiGatewayBudgetInstanceCapacity")
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
        "AiGatewayBudgetInstanceCapacityOverrideRequest",
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

  public async resetAiGatewayBudgetInstanceSpend(
    id: string,
    body: AiGatewayBudgetInstanceResetRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'resetAiGatewayBudgetInstanceSpend'");
    if (!_config.unstableOperations["v2.resetAiGatewayBudgetInstanceSpend"]) {
      throw new Error(
        "Unstable operation 'resetAiGatewayBudgetInstanceSpend' is disabled"
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "resetAiGatewayBudgetInstanceSpend");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "resetAiGatewayBudgetInstanceSpend");
    }

    // Path Params
    const localVarPath = "/api/v2/budgets/{id}/instances/reset".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.resetAiGatewayBudgetInstanceSpend")
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
        "AiGatewayBudgetInstanceResetRequest",
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

  public async updateAiGatewayBudget(
    id: string,
    body: AiGatewayBudgetUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateAiGatewayBudget'");
    if (!_config.unstableOperations["v2.updateAiGatewayBudget"]) {
      throw new Error("Unstable operation 'updateAiGatewayBudget' is disabled");
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "updateAiGatewayBudget");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateAiGatewayBudget");
    }

    // Path Params
    const localVarPath = "/api/v2/budgets/{id}".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.updateAiGatewayBudget")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
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
      ObjectSerializer.serialize(body, "AiGatewayBudgetUpdateRequest", ""),
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

  public async updateAiGatewayDataCaptureOverride(
    id: string,
    body: AiGatewayCaptureUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'updateAiGatewayDataCaptureOverride'"
    );
    if (!_config.unstableOperations["v2.updateAiGatewayDataCaptureOverride"]) {
      throw new Error(
        "Unstable operation 'updateAiGatewayDataCaptureOverride' is disabled"
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "updateAiGatewayDataCaptureOverride");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateAiGatewayDataCaptureOverride");
    }

    // Path Params
    const localVarPath = "/api/v2/data-capture/overrides/{id}".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.updateAiGatewayDataCaptureOverride")
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
      ObjectSerializer.serialize(body, "AiGatewayCaptureUpdateRequest", ""),
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

  public async updateAiGatewayGovernance(
    body: AiGatewayGovernanceReplaceRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateAiGatewayGovernance'");
    if (!_config.unstableOperations["v2.updateAiGatewayGovernance"]) {
      throw new Error(
        "Unstable operation 'updateAiGatewayGovernance' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateAiGatewayGovernance");
    }

    // Path Params
    const localVarPath = "/api/v2/governance";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.updateAiGatewayGovernance")
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
      ObjectSerializer.serialize(body, "AiGatewayGovernanceReplaceRequest", ""),
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

  public async updateAiGatewayModel(
    providerId: Int64Input,
    canonical: string,
    body: AiGatewayModelUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateAiGatewayModel'");
    if (!_config.unstableOperations["v2.updateAiGatewayModel"]) {
      throw new Error("Unstable operation 'updateAiGatewayModel' is disabled");
    }

    // verify required parameter 'providerId' is not null or undefined
    if (providerId === null || providerId === undefined) {
      throw new RequiredError("providerId", "updateAiGatewayModel");
    }

    // verify required parameter 'canonical' is not null or undefined
    if (canonical === null || canonical === undefined) {
      throw new RequiredError("canonical", "updateAiGatewayModel");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateAiGatewayModel");
    }

    // Path Params
    const localVarPath = "/api/v2/providers/{provider_id}/models/{canonical}"
      .replace("{provider_id}", encodeURIComponent(String(providerId)))
      .replace("{canonical}", encodeURIComponent(String(canonical)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.updateAiGatewayModel")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
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
      ObjectSerializer.serialize(body, "AiGatewayModelUpdateRequest", ""),
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

  public async updateAiGatewayModelGroup(
    id: string,
    body: AiGatewayModelGroupUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateAiGatewayModelGroup'");
    if (!_config.unstableOperations["v2.updateAiGatewayModelGroup"]) {
      throw new Error(
        "Unstable operation 'updateAiGatewayModelGroup' is disabled"
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "updateAiGatewayModelGroup");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateAiGatewayModelGroup");
    }

    // Path Params
    const localVarPath = "/api/v2/model-groups/{id}".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.updateAiGatewayModelGroup")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
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
      ObjectSerializer.serialize(body, "AiGatewayModelGroupUpdateRequest", ""),
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

  public async updateAiGatewayModelPricing(
    providerId: Int64Input,
    canonical: string,
    body: AiGatewayModelPricingRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateAiGatewayModelPricing'");
    if (!_config.unstableOperations["v2.updateAiGatewayModelPricing"]) {
      throw new Error(
        "Unstable operation 'updateAiGatewayModelPricing' is disabled"
      );
    }

    // verify required parameter 'providerId' is not null or undefined
    if (providerId === null || providerId === undefined) {
      throw new RequiredError("providerId", "updateAiGatewayModelPricing");
    }

    // verify required parameter 'canonical' is not null or undefined
    if (canonical === null || canonical === undefined) {
      throw new RequiredError("canonical", "updateAiGatewayModelPricing");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateAiGatewayModelPricing");
    }

    // Path Params
    const localVarPath =
      "/api/v2/providers/{provider_id}/models/{canonical}/pricing"
        .replace("{provider_id}", encodeURIComponent(String(providerId)))
        .replace("{canonical}", encodeURIComponent(String(canonical)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.updateAiGatewayModelPricing")
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
      ObjectSerializer.serialize(body, "AiGatewayModelPricingRequest", ""),
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

  public async updateAiGatewayProvider(
    id: Int64Input,
    body: AiGatewayProviderUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateAiGatewayProvider'");
    if (!_config.unstableOperations["v2.updateAiGatewayProvider"]) {
      throw new Error(
        "Unstable operation 'updateAiGatewayProvider' is disabled"
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "updateAiGatewayProvider");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateAiGatewayProvider");
    }

    // Path Params
    const localVarPath = "/api/v2/providers/{id}".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.updateAiGatewayProvider")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
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
      ObjectSerializer.serialize(body, "AiGatewayProviderUpdateRequest", ""),
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

  public async updateAiGatewayRateLimit(
    id: string,
    body: AiGatewayRateLimitUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateAiGatewayRateLimit'");
    if (!_config.unstableOperations["v2.updateAiGatewayRateLimit"]) {
      throw new Error(
        "Unstable operation 'updateAiGatewayRateLimit' is disabled"
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "updateAiGatewayRateLimit");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateAiGatewayRateLimit");
    }

    // Path Params
    const localVarPath = "/api/v2/rate-limits/{id}".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.updateAiGatewayRateLimit")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
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
      ObjectSerializer.serialize(body, "AiGatewayRateLimitUpdateRequest", ""),
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

  public async updateAiGatewayRoutingRule(
    slug: string,
    body: AiGatewayRoutingRuleReplaceRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateAiGatewayRoutingRule'");
    if (!_config.unstableOperations["v2.updateAiGatewayRoutingRule"]) {
      throw new Error(
        "Unstable operation 'updateAiGatewayRoutingRule' is disabled"
      );
    }

    // verify required parameter 'slug' is not null or undefined
    if (slug === null || slug === undefined) {
      throw new RequiredError("slug", "updateAiGatewayRoutingRule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateAiGatewayRoutingRule");
    }

    // Path Params
    const localVarPath = "/api/v2/routing-rules";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.updateAiGatewayRoutingRule")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (slug !== undefined) {
      requestContext.setQueryParam(
        "slug",
        ObjectSerializer.serialize(slug, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "AiGatewayRoutingRuleReplaceRequest",
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

  public async upsertAiGatewayPolicy(
    body: AiGatewayPolicyRequest,
    userId?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'upsertAiGatewayPolicy'");
    if (!_config.unstableOperations["v2.upsertAiGatewayPolicy"]) {
      throw new Error("Unstable operation 'upsertAiGatewayPolicy' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "upsertAiGatewayPolicy");
    }

    // Path Params
    const localVarPath = "/api/v2/policies";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AIGatewayApi.upsertAiGatewayPolicy")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (userId !== undefined) {
      requestContext.setQueryParam(
        "user_id",
        ObjectSerializer.serialize(userId, "string", "uuid"),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "AiGatewayPolicyRequest", ""),
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

export class AIGatewayApiResponseProcessor {
  private configuration?: Configuration;

  public constructor(configuration?: Configuration) {
    this.configuration = configuration;
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to bulkCreateAiGatewayModels
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async bulkCreateAiGatewayModels(
    response: ResponseContext
  ): Promise<AiGatewayModelCatalogEntryListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: AiGatewayModelCatalogEntryListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayModelCatalogEntryListResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayModelCatalogEntryListResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
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
      const body: AiGatewayModelCatalogEntryListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayModelCatalogEntryListResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayModelCatalogEntryListResponse;
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
   * @params response Response returned by the server for a request to createAiGatewayBudget
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAiGatewayBudget(
    response: ResponseContext
  ): Promise<AiGatewayBudgetResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: AiGatewayBudgetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayBudgetResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayBudgetResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 429
    ) {
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
      const body: AiGatewayBudgetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayBudgetResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayBudgetResponse;
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
   * @params response Response returned by the server for a request to createAiGatewayDataCaptureOverride
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAiGatewayDataCaptureOverride(
    response: ResponseContext
  ): Promise<AiGatewayCaptureOverrideResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: AiGatewayCaptureOverrideResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayCaptureOverrideResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayCaptureOverrideResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 429
    ) {
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
      const body: AiGatewayCaptureOverrideResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayCaptureOverrideResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayCaptureOverrideResponse;
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
   * @params response Response returned by the server for a request to createAiGatewayModel
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAiGatewayModel(
    response: ResponseContext
  ): Promise<AiGatewayModelCatalogEntryResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: AiGatewayModelCatalogEntryResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayModelCatalogEntryResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayModelCatalogEntryResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
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
      const body: AiGatewayModelCatalogEntryResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayModelCatalogEntryResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayModelCatalogEntryResponse;
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
   * @params response Response returned by the server for a request to createAiGatewayModelGroup
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAiGatewayModelGroup(
    response: ResponseContext
  ): Promise<AiGatewayModelGroupResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: AiGatewayModelGroupResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayModelGroupResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayModelGroupResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 429
    ) {
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
      const body: AiGatewayModelGroupResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayModelGroupResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayModelGroupResponse;
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
   * @params response Response returned by the server for a request to createAiGatewayProvider
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAiGatewayProvider(
    response: ResponseContext
  ): Promise<AiGatewayProviderResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: AiGatewayProviderResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayProviderResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayProviderResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 429
    ) {
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
      const body: AiGatewayProviderResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayProviderResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayProviderResponse;
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
   * @params response Response returned by the server for a request to createAiGatewayRateLimit
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAiGatewayRateLimit(
    response: ResponseContext
  ): Promise<AiGatewayRateLimitResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: AiGatewayRateLimitResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayRateLimitResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayRateLimitResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 429
    ) {
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
      const body: AiGatewayRateLimitResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayRateLimitResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayRateLimitResponse;
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
   * @params response Response returned by the server for a request to createAiGatewayRoutingRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAiGatewayRoutingRule(
    response: ResponseContext
  ): Promise<AiGatewayRoutingRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: AiGatewayRoutingRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayRoutingRuleResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayRoutingRuleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 429
    ) {
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
      const body: AiGatewayRoutingRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayRoutingRuleResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayRoutingRuleResponse;
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
   * @params response Response returned by the server for a request to deleteAiGatewayBudget
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAiGatewayBudget(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
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
      return;
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
   * @params response Response returned by the server for a request to deleteAiGatewayDataCaptureOverride
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAiGatewayDataCaptureOverride(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 429
    ) {
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
      return;
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
   * @params response Response returned by the server for a request to deleteAiGatewayModel
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAiGatewayModel(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      return;
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
   * @params response Response returned by the server for a request to deleteAiGatewayModelGroup
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAiGatewayModelGroup(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      return;
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
   * @params response Response returned by the server for a request to deleteAiGatewayModelPricing
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAiGatewayModelPricing(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      return;
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
   * @params response Response returned by the server for a request to deleteAiGatewayPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAiGatewayPolicy(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
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
      return;
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
   * @params response Response returned by the server for a request to deleteAiGatewayProvider
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAiGatewayProvider(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
    if (response.httpStatusCode === 409) {
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      return;
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
   * @params response Response returned by the server for a request to deleteAiGatewayRateLimit
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAiGatewayRateLimit(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
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
      return;
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
   * @params response Response returned by the server for a request to deleteAiGatewayRoutingRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAiGatewayRoutingRule(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
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
    if (response.httpStatusCode === 409) {
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      return;
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
   * @params response Response returned by the server for a request to getAiGatewayBudget
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAiGatewayBudget(
    response: ResponseContext
  ): Promise<AiGatewayBudgetResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayBudgetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayBudgetResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayBudgetResponse;
      return body;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
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
      const body: AiGatewayBudgetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayBudgetResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayBudgetResponse;
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
   * @params response Response returned by the server for a request to getAiGatewayBudgetCurrentPeriod
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAiGatewayBudgetCurrentPeriod(
    response: ResponseContext
  ): Promise<AiGatewayBudgetPeriodResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayBudgetPeriodResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayBudgetPeriodResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayBudgetPeriodResponse;
      return body;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
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
      const body: AiGatewayBudgetPeriodResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayBudgetPeriodResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayBudgetPeriodResponse;
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
   * @params response Response returned by the server for a request to getAiGatewayBudgetInstancesSummary
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAiGatewayBudgetInstancesSummary(
    response: ResponseContext
  ): Promise<AiGatewayBudgetInstancesSummaryResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayBudgetInstancesSummaryResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayBudgetInstancesSummaryResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayBudgetInstancesSummaryResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: AiGatewayBudgetInstancesSummaryResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayBudgetInstancesSummaryResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayBudgetInstancesSummaryResponse;
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
   * @params response Response returned by the server for a request to getAiGatewayDataCaptureConfiguration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAiGatewayDataCaptureConfiguration(
    response: ResponseContext
  ): Promise<AiGatewayCaptureConfigurationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayCaptureConfigurationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayCaptureConfigurationResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayCaptureConfigurationResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
      const body: AiGatewayCaptureConfigurationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayCaptureConfigurationResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayCaptureConfigurationResponse;
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
   * @params response Response returned by the server for a request to getAiGatewayGovernance
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAiGatewayGovernance(
    response: ResponseContext
  ): Promise<AiGatewayGovernanceResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayGovernanceResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayGovernanceResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayGovernanceResponse;
      return body;
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
      const body: AiGatewayGovernanceResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayGovernanceResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayGovernanceResponse;
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
   * @params response Response returned by the server for a request to getAiGatewayModelGroup
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAiGatewayModelGroup(
    response: ResponseContext
  ): Promise<AiGatewayModelGroupResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayModelGroupResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayModelGroupResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayModelGroupResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: AiGatewayModelGroupResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayModelGroupResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayModelGroupResponse;
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
   * @params response Response returned by the server for a request to getAiGatewayModelPricing
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAiGatewayModelPricing(
    response: ResponseContext
  ): Promise<AiGatewayModelPricingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayModelPricingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayModelPricingResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayModelPricingResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: AiGatewayModelPricingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayModelPricingResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayModelPricingResponse;
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
   * @params response Response returned by the server for a request to getAiGatewayPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAiGatewayPolicy(
    response: ResponseContext
  ): Promise<AiGatewayPolicyResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayPolicyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayPolicyResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayPolicyResponse;
      return body;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
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
      const body: AiGatewayPolicyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayPolicyResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayPolicyResponse;
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
   * @params response Response returned by the server for a request to getAiGatewayProvider
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAiGatewayProvider(
    response: ResponseContext
  ): Promise<AiGatewayProviderResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayProviderResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayProviderResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayProviderResponse;
      return body;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
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
      const body: AiGatewayProviderResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayProviderResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayProviderResponse;
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
   * @params response Response returned by the server for a request to getAiGatewayRateLimit
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAiGatewayRateLimit(
    response: ResponseContext
  ): Promise<AiGatewayRateLimitResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayRateLimitResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayRateLimitResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayRateLimitResponse;
      return body;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
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
      const body: AiGatewayRateLimitResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayRateLimitResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayRateLimitResponse;
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
   * @params response Response returned by the server for a request to getAiGatewayRateLimitInstancesSummary
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAiGatewayRateLimitInstancesSummary(
    response: ResponseContext
  ): Promise<AiGatewayRateLimitInstancesSummaryResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayRateLimitInstancesSummaryResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayRateLimitInstancesSummaryResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayRateLimitInstancesSummaryResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: AiGatewayRateLimitInstancesSummaryResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayRateLimitInstancesSummaryResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayRateLimitInstancesSummaryResponse;
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
   * @params response Response returned by the server for a request to getAiGatewayRateLimitUsage
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAiGatewayRateLimitUsage(
    response: ResponseContext
  ): Promise<AiGatewayRateLimitUsageListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayRateLimitUsageListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayRateLimitUsageListResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayRateLimitUsageListResponse;
      return body;
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
      const body: AiGatewayRateLimitUsageListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayRateLimitUsageListResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayRateLimitUsageListResponse;
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
   * @params response Response returned by the server for a request to getAiGatewayRoutingRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAiGatewayRoutingRule(
    response: ResponseContext
  ): Promise<AiGatewayRoutingRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayRoutingRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayRoutingRuleResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayRoutingRuleResponse;
      return body;
    }
    if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
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
      const body: AiGatewayRoutingRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayRoutingRuleResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayRoutingRuleResponse;
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
   * @params response Response returned by the server for a request to listAiGatewayBudgetInstanceDimensions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAiGatewayBudgetInstanceDimensions(
    response: ResponseContext
  ): Promise<AiGatewayBudgetInstanceDimensionListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayBudgetInstanceDimensionListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayBudgetInstanceDimensionListResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayBudgetInstanceDimensionListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: AiGatewayBudgetInstanceDimensionListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayBudgetInstanceDimensionListResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayBudgetInstanceDimensionListResponse;
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
   * @params response Response returned by the server for a request to listAiGatewayBudgetInstances
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAiGatewayBudgetInstances(
    response: ResponseContext
  ): Promise<AiGatewayBudgetInstanceListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayBudgetInstanceListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayBudgetInstanceListResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayBudgetInstanceListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: AiGatewayBudgetInstanceListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayBudgetInstanceListResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayBudgetInstanceListResponse;
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
   * @params response Response returned by the server for a request to listAiGatewayBudgets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAiGatewayBudgets(
    response: ResponseContext
  ): Promise<AiGatewayBudgetListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayBudgetListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayBudgetListResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayBudgetListResponse;
      return body;
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
      const body: AiGatewayBudgetListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayBudgetListResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayBudgetListResponse;
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
   * @params response Response returned by the server for a request to listAiGatewayModelGroups
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAiGatewayModelGroups(
    response: ResponseContext
  ): Promise<AiGatewayModelGroupListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayModelGroupListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayModelGroupListResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayModelGroupListResponse;
      return body;
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
      const body: AiGatewayModelGroupListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayModelGroupListResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayModelGroupListResponse;
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
   * @params response Response returned by the server for a request to listAiGatewayModels
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAiGatewayModels(
    response: ResponseContext
  ): Promise<AiGatewayModelCatalogEntryListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayModelCatalogEntryListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayModelCatalogEntryListResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayModelCatalogEntryListResponse;
      return body;
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
      const body: AiGatewayModelCatalogEntryListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayModelCatalogEntryListResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayModelCatalogEntryListResponse;
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
   * @params response Response returned by the server for a request to listAiGatewayModelsByCanonical
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAiGatewayModelsByCanonical(
    response: ResponseContext
  ): Promise<AiGatewayModelsByCanonicalListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayModelsByCanonicalListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayModelsByCanonicalListResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayModelsByCanonicalListResponse;
      return body;
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
      const body: AiGatewayModelsByCanonicalListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayModelsByCanonicalListResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayModelsByCanonicalListResponse;
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
   * @params response Response returned by the server for a request to listAiGatewayPolicies
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAiGatewayPolicies(
    response: ResponseContext
  ): Promise<AiGatewayPolicyListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayPolicyListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayPolicyListResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayPolicyListResponse;
      return body;
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
      const body: AiGatewayPolicyListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayPolicyListResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayPolicyListResponse;
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
   * @params response Response returned by the server for a request to listAiGatewayProviderModels
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAiGatewayProviderModels(
    response: ResponseContext
  ): Promise<AiGatewayDiscoveredModelListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayDiscoveredModelListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayDiscoveredModelListResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayDiscoveredModelListResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
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
      const body: AiGatewayDiscoveredModelListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayDiscoveredModelListResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayDiscoveredModelListResponse;
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
   * @params response Response returned by the server for a request to listAiGatewayProviders
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAiGatewayProviders(
    response: ResponseContext
  ): Promise<AiGatewayProviderListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayProviderListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayProviderListResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayProviderListResponse;
      return body;
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
      const body: AiGatewayProviderListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayProviderListResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayProviderListResponse;
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
   * @params response Response returned by the server for a request to listAiGatewayRateLimitInstances
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAiGatewayRateLimitInstances(
    response: ResponseContext
  ): Promise<AiGatewayRateLimitInstanceListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayRateLimitInstanceListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayRateLimitInstanceListResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayRateLimitInstanceListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: AiGatewayRateLimitInstanceListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayRateLimitInstanceListResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayRateLimitInstanceListResponse;
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
   * @params response Response returned by the server for a request to listAiGatewayRateLimitInstancesSummaries
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAiGatewayRateLimitInstancesSummaries(
    response: ResponseContext
  ): Promise<AiGatewayRateLimitInstancesSummaryListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayRateLimitInstancesSummaryListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayRateLimitInstancesSummaryListResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayRateLimitInstancesSummaryListResponse;
      return body;
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
      const body: AiGatewayRateLimitInstancesSummaryListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayRateLimitInstancesSummaryListResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayRateLimitInstancesSummaryListResponse;
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
   * @params response Response returned by the server for a request to listAiGatewayRateLimits
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAiGatewayRateLimits(
    response: ResponseContext
  ): Promise<AiGatewayRateLimitListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayRateLimitListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayRateLimitListResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayRateLimitListResponse;
      return body;
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
      const body: AiGatewayRateLimitListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayRateLimitListResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayRateLimitListResponse;
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
   * @params response Response returned by the server for a request to listAiGatewayRoutingRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAiGatewayRoutingRules(
    response: ResponseContext
  ): Promise<AiGatewayRoutingRuleListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayRoutingRuleListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayRoutingRuleListResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayRoutingRuleListResponse;
      return body;
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
      const body: AiGatewayRoutingRuleListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayRoutingRuleListResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayRoutingRuleListResponse;
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
   * @params response Response returned by the server for a request to overrideAiGatewayBudgetInstanceCapacity
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async overrideAiGatewayBudgetInstanceCapacity(
    response: ResponseContext
  ): Promise<AiGatewayBudgetInstanceResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayBudgetInstanceResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayBudgetInstanceResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayBudgetInstanceResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: AiGatewayBudgetInstanceResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayBudgetInstanceResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayBudgetInstanceResponse;
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
   * @params response Response returned by the server for a request to resetAiGatewayBudgetInstanceSpend
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async resetAiGatewayBudgetInstanceSpend(
    response: ResponseContext
  ): Promise<AiGatewayBudgetInstanceResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayBudgetInstanceResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayBudgetInstanceResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayBudgetInstanceResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: AiGatewayBudgetInstanceResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayBudgetInstanceResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayBudgetInstanceResponse;
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
   * @params response Response returned by the server for a request to updateAiGatewayBudget
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAiGatewayBudget(
    response: ResponseContext
  ): Promise<AiGatewayBudgetResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayBudgetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayBudgetResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayBudgetResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: AiGatewayBudgetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayBudgetResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayBudgetResponse;
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
   * @params response Response returned by the server for a request to updateAiGatewayDataCaptureOverride
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAiGatewayDataCaptureOverride(
    response: ResponseContext
  ): Promise<AiGatewayCaptureOverrideResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayCaptureOverrideResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayCaptureOverrideResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayCaptureOverrideResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 429
    ) {
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
      const body: AiGatewayCaptureOverrideResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayCaptureOverrideResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayCaptureOverrideResponse;
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
   * @params response Response returned by the server for a request to updateAiGatewayGovernance
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAiGatewayGovernance(
    response: ResponseContext
  ): Promise<AiGatewayGovernanceResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayGovernanceResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayGovernanceResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayGovernanceResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
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
      const body: AiGatewayGovernanceResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayGovernanceResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayGovernanceResponse;
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
   * @params response Response returned by the server for a request to updateAiGatewayModel
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAiGatewayModel(
    response: ResponseContext
  ): Promise<AiGatewayModelCatalogEntryResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayModelCatalogEntryResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayModelCatalogEntryResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayModelCatalogEntryResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: AiGatewayModelCatalogEntryResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "AiGatewayModelCatalogEntryResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as AiGatewayModelCatalogEntryResponse;
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
   * @params response Response returned by the server for a request to updateAiGatewayModelGroup
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAiGatewayModelGroup(
    response: ResponseContext
  ): Promise<AiGatewayModelGroupResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayModelGroupResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayModelGroupResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayModelGroupResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 429
    ) {
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
      const body: AiGatewayModelGroupResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayModelGroupResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayModelGroupResponse;
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
   * @params response Response returned by the server for a request to updateAiGatewayModelPricing
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAiGatewayModelPricing(
    response: ResponseContext
  ): Promise<AiGatewayModelPricingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayModelPricingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayModelPricingResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayModelPricingResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: AiGatewayModelPricingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayModelPricingResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayModelPricingResponse;
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
   * @params response Response returned by the server for a request to updateAiGatewayProvider
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAiGatewayProvider(
    response: ResponseContext
  ): Promise<AiGatewayProviderResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayProviderResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayProviderResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayProviderResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 429
    ) {
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
      const body: AiGatewayProviderResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayProviderResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayProviderResponse;
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
   * @params response Response returned by the server for a request to updateAiGatewayRateLimit
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAiGatewayRateLimit(
    response: ResponseContext
  ): Promise<AiGatewayRateLimitResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayRateLimitResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayRateLimitResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayRateLimitResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 429
    ) {
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
      const body: AiGatewayRateLimitResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayRateLimitResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayRateLimitResponse;
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
   * @params response Response returned by the server for a request to updateAiGatewayRoutingRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAiGatewayRoutingRule(
    response: ResponseContext
  ): Promise<AiGatewayRoutingRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayRoutingRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayRoutingRuleResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayRoutingRuleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 429
    ) {
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
      const body: AiGatewayRoutingRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayRoutingRuleResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayRoutingRuleResponse;
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
   * @params response Response returned by the server for a request to upsertAiGatewayPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async upsertAiGatewayPolicy(
    response: ResponseContext
  ): Promise<AiGatewayPolicyResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AiGatewayPolicyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayPolicyResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayPolicyResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
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
      const body: AiGatewayPolicyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "AiGatewayPolicyResponse",
        "",
        this.configuration?.preserveLargeIntegers
      ) as AiGatewayPolicyResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface AIGatewayApiBulkCreateAiGatewayModelsRequest {
  /**
   * Provider ID.
   * @type Int64Input
   */
  providerId: Int64Input;
  /**
   * @type AiGatewayModelsBulkCreateRequest
   */
  body: AiGatewayModelsBulkCreateRequest;
}

export interface AIGatewayApiCreateAiGatewayBudgetRequest {
  /**
   * @type AiGatewayBudgetCreateRequest
   */
  body: AiGatewayBudgetCreateRequest;
}

export interface AIGatewayApiCreateAiGatewayDataCaptureOverrideRequest {
  /**
   * @type AiGatewayCaptureCreateRequest
   */
  body: AiGatewayCaptureCreateRequest;
}

export interface AIGatewayApiCreateAiGatewayModelRequest {
  /**
   * Provider ID.
   * @type Int64Input
   */
  providerId: Int64Input;
  /**
   * @type AiGatewayModelCreateRequest
   */
  body: AiGatewayModelCreateRequest;
}

export interface AIGatewayApiCreateAiGatewayModelGroupRequest {
  /**
   * @type AiGatewayModelGroupCreateRequest
   */
  body: AiGatewayModelGroupCreateRequest;
}

export interface AIGatewayApiCreateAiGatewayProviderRequest {
  /**
   * @type AiGatewayProviderCreateRequest
   */
  body: AiGatewayProviderCreateRequest;
}

export interface AIGatewayApiCreateAiGatewayRateLimitRequest {
  /**
   * @type AiGatewayRateLimitCreateRequest
   */
  body: AiGatewayRateLimitCreateRequest;
}

export interface AIGatewayApiCreateAiGatewayRoutingRuleRequest {
  /**
   * @type AiGatewayRoutingRuleCreateRequest
   */
  body: AiGatewayRoutingRuleCreateRequest;
}

export interface AIGatewayApiDeleteAiGatewayBudgetRequest {
  /**
   * Budget UUID.
   * @type string
   */
  id: string;
}

export interface AIGatewayApiDeleteAiGatewayDataCaptureOverrideRequest {
  /**
   * Data capture override ID.
   * @type string
   */
  id: string;
  /**
   * @type AiGatewayCaptureDeleteRequest
   */
  body: AiGatewayCaptureDeleteRequest;
}

export interface AIGatewayApiDeleteAiGatewayModelRequest {
  /**
   * Provider ID.
   * @type Int64Input
   */
  providerId: Int64Input;
  /**
   * Canonical model identifier.
   * @type string
   */
  canonical: string;
}

export interface AIGatewayApiDeleteAiGatewayModelGroupRequest {
  /**
   * Model group ID, or "default" for the explicit organization-wide access policy.
   * @type string
   */
  id: string;
}

export interface AIGatewayApiDeleteAiGatewayModelPricingRequest {
  /**
   * Provider ID.
   * @type Int64Input
   */
  providerId: Int64Input;
  /**
   * Canonical model identifier.
   * @type string
   */
  canonical: string;
}

export interface AIGatewayApiDeleteAiGatewayPolicyRequest {
  /**
   * Inbound routing pattern.
   * @type string
   */
  inbound: string;
  /**
   * Filter or scope policies to a specific user. Omit for organization-wide policies.
   * @type string
   */
  userId?: string;
}

export interface AIGatewayApiDeleteAiGatewayProviderRequest {
  /**
   * Provider ID.
   * @type Int64Input
   */
  id: Int64Input;
  /**
   * Apply the routing rule changes returned by provider_in_use. Defaults to false.
   * @type boolean
   */
  force?: boolean;
}

export interface AIGatewayApiDeleteAiGatewayRateLimitRequest {
  /**
   * Rate limit UUID.
   * @type string
   */
  id: string;
}

export interface AIGatewayApiDeleteAiGatewayRoutingRuleRequest {
  /**
   * Organization-unique routing rule slug.
   * @type string
   */
  slug: string;
  /**
   * Delete referencing tiers and recursively delete parent rules left without tiers.
   * @type boolean
   */
  force?: boolean;
}

export interface AIGatewayApiGetAiGatewayBudgetRequest {
  /**
   * Budget UUID.
   * @type string
   */
  id: string;
}

export interface AIGatewayApiGetAiGatewayBudgetCurrentPeriodRequest {
  /**
   * Budget UUID.
   * @type string
   */
  id: string;
}

export interface AIGatewayApiGetAiGatewayBudgetInstancesSummaryRequest {
  /**
   * Budget UUID.
   * @type string
   */
  id: string;
  /**
   * RFC3339 timestamp inside the desired accounting window. Omit to use the current window.
   * @type Date
   */
  window?: Date;
  /**
   * Keep only instance counters whose split dimension equals a value, written as `<dim>=<value>`, such as `split_dim=user_id=<uuid>&split_dim=tag:env=prod`. Dimensions use the `split_dims` names `user_id`, `team_id`, `model`, `provider`, and `tag:<key>`. Repeat the parameter to filter on several dimensions; a counter must match all of them. Each dimension may appear once and must be a per-value dimension of the budget.
   * @type Array<string>
   */
  splitDim?: Array<string>;
}

export interface AIGatewayApiGetAiGatewayModelGroupRequest {
  /**
   * Model group ID, or "default" for the explicit organization-wide access policy.
   * @type string
   */
  id: string;
}

export interface AIGatewayApiGetAiGatewayModelPricingRequest {
  /**
   * Provider ID.
   * @type Int64Input
   */
  providerId: Int64Input;
  /**
   * Canonical model identifier.
   * @type string
   */
  canonical: string;
}

export interface AIGatewayApiGetAiGatewayPolicyRequest {
  /**
   * Inbound routing pattern.
   * @type string
   */
  inbound: string;
  /**
   * Filter or scope policies to a specific user. Omit for organization-wide policies.
   * @type string
   */
  userId?: string;
}

export interface AIGatewayApiGetAiGatewayProviderRequest {
  /**
   * Provider ID.
   * @type Int64Input
   */
  id: Int64Input;
}

export interface AIGatewayApiGetAiGatewayRateLimitRequest {
  /**
   * Rate limit UUID.
   * @type string
   */
  id: string;
}

export interface AIGatewayApiGetAiGatewayRateLimitInstancesSummaryRequest {
  /**
   * Rate limit UUID.
   * @type string
   */
  id: string;
  /**
   * Keep only counters whose split dimension equals a value, written as `<dim>=<value>`, such as `split_dim=user_id=<uuid>&split_dim=model=gpt-4o`. Dimensions use the `split_dims` names `user_id`, `team_id`, `model`, `provider`, and `tag:<key>`. Repeat the parameter to filter on several dimensions; a counter must match all of them. Each dimension may appear once and must be a per-value dimension of the rate limit.
   * @type Array<string>
   */
  splitDim?: Array<string>;
}

export interface AIGatewayApiGetAiGatewayRoutingRuleRequest {
  /**
   * Organization-unique routing rule slug.
   * @type string
   */
  slug: string;
}

export interface AIGatewayApiListAiGatewayBudgetInstanceDimensionsRequest {
  /**
   * Budget UUID.
   * @type string
   */
  id: string;
  /**
   * RFC3339 timestamp inside the desired accounting window. Omit to use the current window.
   * @type Date
   */
  window?: Date;
  /**
   * Keep only instance counters whose split dimension equals a value, written as `<dim>=<value>`, such as `split_dim=user_id=<uuid>&split_dim=tag:env=prod`. Dimensions use the `split_dims` names `user_id`, `team_id`, `model`, `provider`, and `tag:<key>`. Repeat the parameter to filter on several dimensions; a counter must match all of them. Each dimension may appear once and must be a per-value dimension of the budget.
   * @type Array<string>
   */
  splitDim?: Array<string>;
  /**
   * Return only these split dimensions, such as `dim=user_id`. Repeat the parameter for several dimensions. Omit it to return every split dimension of the budget.
   * @type Array<string>
   */
  dim?: Array<string>;
  /**
   * Keep only values that contain this text, case-insensitively. It matches raw values, so User and Team values match their UUIDs; search their names elsewhere and pass the IDs as `value`.
   * @type string
   */
  query?: string;
  /**
   * Keep only these values. Repeat the parameter to check several candidates, such as User IDs found by name, and learn which of them have instance counters.
   * @type Array<string>
   */
  value?: Array<string>;
  /**
   * Maximum number of values to return per dimension.
   * @type Int64Input
   */
  limit?: Int64Input;
}

export interface AIGatewayApiListAiGatewayBudgetInstancesRequest {
  /**
   * Budget UUID.
   * @type string
   */
  id: string;
  /**
   * RFC3339 timestamp inside the desired accounting window. Omit to use the current window.
   * @type Date
   */
  window?: Date;
  /**
   * Keep only instance counters whose split dimension equals a value, written as `<dim>=<value>`, such as `split_dim=user_id=<uuid>&split_dim=tag:env=prod`. Dimensions use the `split_dims` names `user_id`, `team_id`, `model`, `provider`, and `tag:<key>`. Repeat the parameter to filter on several dimensions; a counter must match all of them. Each dimension may appear once and must be a per-value dimension of the budget.
   * @type Array<string>
   */
  splitDim?: Array<string>;
  /**
   * Sort order for budget instance counters.
   * @type AiGatewayBudgetInstanceSort
   */
  sort?: AiGatewayBudgetInstanceSort;
  /**
   * Maximum number of budget instance counters to return.
   * @type Int64Input
   */
  limit?: Int64Input;
  /**
   * Number of budget instance counters to skip.
   * @type Int64Input
   */
  offset?: Int64Input;
}

export interface AIGatewayApiListAiGatewayModelsRequest {
  /**
   * Provider ID.
   * @type Int64Input
   */
  providerId: Int64Input;
}

export interface AIGatewayApiListAiGatewayPoliciesRequest {
  /**
   * Filter or scope policies to a specific user. Omit for organization-wide policies.
   * @type string
   */
  userId?: string;
}

export interface AIGatewayApiListAiGatewayProviderModelsRequest {
  /**
   * Provider integration type.
   * @type string
   */
  integrationType: string;
  /**
   * Provider integration account ID.
   * @type string
   */
  integrationAccountId: string;
  /**
   * GCP project ID used for Gemini model discovery. Required for Gemini integrations.
   * @type string
   */
  projectId?: string;
  /**
   * Optional GCP location used for Gemini model discovery. Defaults to global.
   * @type string
   */
  location?: string;
  /**
   * AWS region used for Bedrock model discovery. Required for Amazon Bedrock integrations.
   * @type string
   */
  bedrockRegion?: string;
  /**
   * ARM resource ID of the Azure AI Foundry resource used for model discovery. Required for Azure AI Foundry integrations.
   * @type string
   */
  foundryResourceId?: string;
}

export interface AIGatewayApiListAiGatewayRateLimitInstancesRequest {
  /**
   * Rate limit UUID.
   * @type string
   */
  id: string;
  /**
   * Keep only counters whose split dimension equals a value, written as `<dim>=<value>`, such as `split_dim=user_id=<uuid>&split_dim=model=gpt-4o`. Dimensions use the `split_dims` names `user_id`, `team_id`, `model`, `provider`, and `tag:<key>`. Repeat the parameter to filter on several dimensions; a counter must match all of them. Each dimension may appear once and must be a per-value dimension of the rate limit.
   * @type Array<string>
   */
  splitDim?: Array<string>;
  /**
   * Sort order for rate limit counters.
   * @type AiGatewayRateLimitInstanceSort
   */
  sort?: AiGatewayRateLimitInstanceSort;
  /**
   * Maximum number of rate limit counters to return.
   * @type Int64Input
   */
  limit?: Int64Input;
  /**
   * Number of rate limit counters to skip.
   * @type Int64Input
   */
  offset?: Int64Input;
}

export interface AIGatewayApiOverrideAiGatewayBudgetInstanceCapacityRequest {
  /**
   * Budget UUID.
   * @type string
   */
  id: string;
  /**
   * @type AiGatewayBudgetInstanceCapacityOverrideRequest
   */
  body: AiGatewayBudgetInstanceCapacityOverrideRequest;
}

export interface AIGatewayApiResetAiGatewayBudgetInstanceSpendRequest {
  /**
   * Budget UUID.
   * @type string
   */
  id: string;
  /**
   * @type AiGatewayBudgetInstanceResetRequest
   */
  body: AiGatewayBudgetInstanceResetRequest;
}

export interface AIGatewayApiUpdateAiGatewayBudgetRequest {
  /**
   * Budget UUID.
   * @type string
   */
  id: string;
  /**
   * @type AiGatewayBudgetUpdateRequest
   */
  body: AiGatewayBudgetUpdateRequest;
}

export interface AIGatewayApiUpdateAiGatewayDataCaptureOverrideRequest {
  /**
   * Data capture override ID.
   * @type string
   */
  id: string;
  /**
   * @type AiGatewayCaptureUpdateRequest
   */
  body: AiGatewayCaptureUpdateRequest;
}

export interface AIGatewayApiUpdateAiGatewayGovernanceRequest {
  /**
   * @type AiGatewayGovernanceReplaceRequest
   */
  body: AiGatewayGovernanceReplaceRequest;
}

export interface AIGatewayApiUpdateAiGatewayModelRequest {
  /**
   * Provider ID.
   * @type Int64Input
   */
  providerId: Int64Input;
  /**
   * Canonical model identifier.
   * @type string
   */
  canonical: string;
  /**
   * @type AiGatewayModelUpdateRequest
   */
  body: AiGatewayModelUpdateRequest;
}

export interface AIGatewayApiUpdateAiGatewayModelGroupRequest {
  /**
   * Model group ID, or "default" for the explicit organization-wide access policy.
   * @type string
   */
  id: string;
  /**
   * @type AiGatewayModelGroupUpdateRequest
   */
  body: AiGatewayModelGroupUpdateRequest;
}

export interface AIGatewayApiUpdateAiGatewayModelPricingRequest {
  /**
   * Provider ID.
   * @type Int64Input
   */
  providerId: Int64Input;
  /**
   * Canonical model identifier.
   * @type string
   */
  canonical: string;
  /**
   * @type AiGatewayModelPricingRequest
   */
  body: AiGatewayModelPricingRequest;
}

export interface AIGatewayApiUpdateAiGatewayProviderRequest {
  /**
   * Provider ID.
   * @type Int64Input
   */
  id: Int64Input;
  /**
   * @type AiGatewayProviderUpdateRequest
   */
  body: AiGatewayProviderUpdateRequest;
}

export interface AIGatewayApiUpdateAiGatewayRateLimitRequest {
  /**
   * Rate limit UUID.
   * @type string
   */
  id: string;
  /**
   * @type AiGatewayRateLimitUpdateRequest
   */
  body: AiGatewayRateLimitUpdateRequest;
}

export interface AIGatewayApiUpdateAiGatewayRoutingRuleRequest {
  /**
   * Organization-unique routing rule slug.
   * @type string
   */
  slug: string;
  /**
   * @type AiGatewayRoutingRuleReplaceRequest
   */
  body: AiGatewayRoutingRuleReplaceRequest;
}

export interface AIGatewayApiUpsertAiGatewayPolicyRequest {
  /**
   * @type AiGatewayPolicyRequest
   */
  body: AiGatewayPolicyRequest;
  /**
   * Filter or scope policies to a specific user. Omit for organization-wide policies.
   * @type string
   */
  userId?: string;
}

export class AIGatewayApi {
  private requestFactory: AIGatewayApiRequestFactory;
  private responseProcessor: AIGatewayApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: AIGatewayApiRequestFactory,
    responseProcessor?: AIGatewayApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new AIGatewayApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new AIGatewayApiResponseProcessor(configuration);
  }

  /**
   * Requires `ai_gateway_config_write` and provider Edit. Models and pricing inherit provider access.
   * Add multiple manually managed model catalog entries to a provider in a single request. Manually managed
   * entries are not modified by automatic catalog synchronization.
   * @param param The request object
   */
  public bulkCreateAiGatewayModels(
    param: AIGatewayApiBulkCreateAiGatewayModelsRequest,
    options?: Configuration
  ): Promise<AiGatewayModelCatalogEntryListResponse> {
    const requestContextPromise = this.requestFactory.bulkCreateAiGatewayModels(
      param.providerId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.bulkCreateAiGatewayModels(
            responseContext
          );
        });
    });
  }

  /**
   * Create a spend budget. Scope tags may include provider, model, and custom dimensions.
   * Reserved metadata keys are rejected.
   * @param param The request object
   */
  public createAiGatewayBudget(
    param: AIGatewayApiCreateAiGatewayBudgetRequest,
    options?: Configuration
  ): Promise<AiGatewayBudgetResponse> {
    const requestContextPromise = this.requestFactory.createAiGatewayBudget(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAiGatewayBudget(responseContext);
        });
    });
  }

  /**
   * Create a scoped override with a client-generated UUID and the current `configuration_revision`. If the override can enable full capture for more traffic, set `confirm_full_capture` to `true`. Returns HTTP 409 when `configuration_revision` is stale, the UUID already exists, or the organization has 100 overrides. Missing `configuration_revision` or required full-capture confirmation returns HTTP 400. Retrying an accepted create with the same UUID returns HTTP 409. To undo a create, read the current configuration revision and delete the override using its returned override revision.
   * @param param The request object
   */
  public createAiGatewayDataCaptureOverride(
    param: AIGatewayApiCreateAiGatewayDataCaptureOverrideRequest,
    options?: Configuration
  ): Promise<AiGatewayCaptureOverrideResponse> {
    const requestContextPromise =
      this.requestFactory.createAiGatewayDataCaptureOverride(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAiGatewayDataCaptureOverride(
            responseContext
          );
        });
    });
  }

  /**
   * Requires `ai_gateway_config_write` and provider Edit. Models and pricing inherit provider access.
   * Add a manually managed model catalog entry to a provider. Manually managed entries are not modified by
   * automatic catalog synchronization.
   * @param param The request object
   */
  public createAiGatewayModel(
    param: AIGatewayApiCreateAiGatewayModelRequest,
    options?: Configuration
  ): Promise<AiGatewayModelCatalogEntryResponse> {
    const requestContextPromise = this.requestFactory.createAiGatewayModel(
      param.providerId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAiGatewayModel(responseContext);
        });
    });
  }

  /**
   * Create an AI Gateway model group from a name and any combination of model catalog entries and routing rules, with optional fast-mode and reasoning limits and initial access bindings.
   * @param param The request object
   */
  public createAiGatewayModelGroup(
    param: AIGatewayApiCreateAiGatewayModelGroupRequest,
    options?: Configuration
  ): Promise<AiGatewayModelGroupResponse> {
    const requestContextPromise = this.requestFactory.createAiGatewayModelGroup(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAiGatewayModelGroup(
            responseContext
          );
        });
    });
  }

  /**
   * Creating a provider requires `ai_gateway_config_write`. No provider View check applies before creation.
   * Create a provider and its initial model catalog. All discovered models are enabled; optional models are
   * added as manually managed entries. The slug is the immutable routing identifier.
   * Provider and initial catalog rows are saved in one transaction. Initial sharing is unavailable:
   * supplying initial_bindings returns 503 with stage initial_permissions and outcome not_saved.
   * A failed database commit can return 503 with stage database_commit and outcome unknown; check the
   * provider list before retrying. Creation without initial_bindings keeps normal unrestricted defaults.
   * @param param The request object
   */
  public createAiGatewayProvider(
    param: AIGatewayApiCreateAiGatewayProviderRequest,
    options?: Configuration
  ): Promise<AiGatewayProviderResponse> {
    const requestContextPromise = this.requestFactory.createAiGatewayProvider(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAiGatewayProvider(
            responseContext
          );
        });
    });
  }

  /**
   * Create a rate limit. All requests matching its scope share one allowance, unless a selector makes it a template, which gives each matched user, Team, or value its own allowance. Every matching rate limit applies. Returns 409 when another active rate limit has the same user, Team, tags, and selector, or when the organization already has the maximum number of rate limits.
   * @param param The request object
   */
  public createAiGatewayRateLimit(
    param: AIGatewayApiCreateAiGatewayRateLimitRequest,
    options?: Configuration
  ): Promise<AiGatewayRateLimitResponse> {
    const requestContextPromise = this.requestFactory.createAiGatewayRateLimit(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAiGatewayRateLimit(
            responseContext
          );
        });
    });
  }

  /**
   * Create an organization-owned route with `ai_gateway_config_write`. New provider/model and route references require View. New routes use standard unrestricted defaults. To restrict configuration access, create the route and then apply a restriction policy using its numeric route_id. Sharing follows standard restriction-policy propagation and does not grant or revoke policy-authorized inference. Data capture overrides are managed independently. Each tier has an ordering, which defaults to configured. A weighted_affinity tier distributes first-choice assignments by relative target weights (1 to 10000, default 1) and accepts only distinct model targets with an explicit provider. Weights need not total 100. Configured tiers must omit weights or set them to null.
   * @param param The request object
   */
  public createAiGatewayRoutingRule(
    param: AIGatewayApiCreateAiGatewayRoutingRuleRequest,
    options?: Configuration
  ): Promise<AiGatewayRoutingRuleResponse> {
    const requestContextPromise =
      this.requestFactory.createAiGatewayRoutingRule(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAiGatewayRoutingRule(
            responseContext
          );
        });
    });
  }

  /**
   * Archive a spend budget by ID while retaining its accounting history.
   * @param param The request object
   */
  public deleteAiGatewayBudget(
    param: AIGatewayApiDeleteAiGatewayBudgetRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteAiGatewayBudget(
      param.id,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAiGatewayBudget(responseContext);
        });
    });
  }

  /**
   * Delete an override using its `revision` and the current `configuration_revision`. If deleting the override can enable full capture for affected traffic, set `confirm_full_capture` to `true`. Returns HTTP 409 when `configuration_revision` or the override `revision` is stale, including a concurrent change during deletion. Missing revisions or required full-capture confirmation returns HTTP 400.
   * @param param The request object
   */
  public deleteAiGatewayDataCaptureOverride(
    param: AIGatewayApiDeleteAiGatewayDataCaptureOverrideRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteAiGatewayDataCaptureOverride(
        param.id,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAiGatewayDataCaptureOverride(
            responseContext
          );
        });
    });
  }

  /**
   * Requires `ai_gateway_config_write` and provider Edit. Models and pricing inherit provider access.
   * Delete a manually managed model catalog entry by its canonical model ID. Discovered entries are read-only.
   * @param param The request object
   */
  public deleteAiGatewayModel(
    param: AIGatewayApiDeleteAiGatewayModelRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteAiGatewayModel(
      param.providerId,
      param.canonical,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAiGatewayModel(responseContext);
        });
    });
  }

  /**
   * Delete a named model group. The organization-wide policy cannot be deleted. Requires configuration write permission and edit access to the group.
   * @param param The request object
   */
  public deleteAiGatewayModelGroup(
    param: AIGatewayApiDeleteAiGatewayModelGroupRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteAiGatewayModelGroup(
      param.id,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAiGatewayModelGroup(
            responseContext
          );
        });
    });
  }

  /**
   * Clear a custom provider model's pricing override. Requires `ai_gateway_config_write` and provider Edit. Models and pricing inherit provider access.
   * @param param The request object
   */
  public deleteAiGatewayModelPricing(
    param: AIGatewayApiDeleteAiGatewayModelPricingRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteAiGatewayModelPricing(
        param.providerId,
        param.canonical,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAiGatewayModelPricing(
            responseContext
          );
        });
    });
  }

  /**
   * Delete the routing policy document for a specific inbound pattern.
   * @param param The request object
   */
  public deleteAiGatewayPolicy(
    param: AIGatewayApiDeleteAiGatewayPolicyRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteAiGatewayPolicy(
      param.inbound,
      param.userId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAiGatewayPolicy(responseContext);
        });
    });
  }

  /**
   * Requires `ai_gateway_config_write` and provider View/Edit. Models and pricing inherit provider access. Every affected route and policy membership requires the corresponding Edit permission; force=true never bypasses authorization. Providers used by routing rules return provider_in_use with HTTP 409. Each JSON:API error item's `meta` contains blocked, restricted_dependencies, policies, rules_to_delete, and rules_to_update. Visible policy entries contain id, name, and editable; visible route entries contain id, slug, and editable. Hidden dependencies are omitted from every collection and reported only by restricted_dependencies. A blocked response changes no configuration; an authorized editor must first remove the blocking references. Retry with force=true to confirm an authorized cascade that removes provider targets and deletes rules left without targets. Surviving tiers keep their ordering and weights. A deletion that would rewrite a surviving tier with an unknown ordering_issue fails with HTTP 409 and code routing_rule_unknown_ordering until that rule is replaced or deleted.
   * @param param The request object
   */
  public deleteAiGatewayProvider(
    param: AIGatewayApiDeleteAiGatewayProviderRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteAiGatewayProvider(
      param.id,
      param.force,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAiGatewayProvider(
            responseContext
          );
        });
    });
  }

  /**
   * Archive a rate limit by ID. An archived rate limit no longer appears in lists or lookups, and its alert monitor is deleted.
   * @param param The request object
   */
  public deleteAiGatewayRateLimit(
    param: AIGatewayApiDeleteAiGatewayRateLimitRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteAiGatewayRateLimit(
      param.id,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAiGatewayRateLimit(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a route with `ai_gateway_config_write` and route View/Edit. Every affected route and policy membership requires the corresponding Edit permission. The force=true parameter confirms impact and never bypasses authorization. A denied or unavailable check changes no configuration. Visible dependencies include editable; hidden dependencies are omitted and reported only by restricted_dependencies. A blocked response means an authorized editor must first remove blocking references. Each JSON:API error item's `meta` contains blocked, restricted_dependencies, policies, rules_to_delete, and rules_to_update. Visible policy entries contain id, name, and editable. Route deletion entries contain rule, reason, and editable; update entries contain rule, removed_tiers, and editable. Each rule contains route_id, slug, tiers, created_at, and updated_at with hidden nested selections redacted. The removed_tiers array identifies original tier numbers removed entirely by the cascade. Already-authorized in-flight operations may finish. Referenced rules require force=true. Surviving tiers keep their ordering and weights. A deletion that would rewrite a surviving tier with an unknown ordering_issue fails with HTTP 409 and code routing_rule_unknown_ordering until that rule is replaced or deleted. Restriction cleanup occurs only after confirmed deletion. Cleanup failure returns 500 with configuration_deleted=true and permissions_cleanup_failed=true; refresh instead of assuming the route still exists.
   * @param param The request object
   */
  public deleteAiGatewayRoutingRule(
    param: AIGatewayApiDeleteAiGatewayRoutingRuleRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteAiGatewayRoutingRule(
        param.slug,
        param.force,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAiGatewayRoutingRule(
            responseContext
          );
        });
    });
  }

  /**
   * Get a spend budget by ID, including its capacity, scope, reset window, warning threshold, and enforcement mode.
   * @param param The request object
   */
  public getAiGatewayBudget(
    param: AIGatewayApiGetAiGatewayBudgetRequest,
    options?: Configuration
  ): Promise<AiGatewayBudgetResponse> {
    const requestContextPromise = this.requestFactory.getAiGatewayBudget(
      param.id,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAiGatewayBudget(responseContext);
        });
    });
  }

  /**
   * Get the active accounting window, enforced capacity, and current spend.
   * @param param The request object
   */
  public getAiGatewayBudgetCurrentPeriod(
    param: AIGatewayApiGetAiGatewayBudgetCurrentPeriodRequest,
    options?: Configuration
  ): Promise<AiGatewayBudgetPeriodResponse> {
    const requestContextPromise =
      this.requestFactory.getAiGatewayBudgetCurrentPeriod(param.id, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAiGatewayBudgetCurrentPeriod(
            responseContext
          );
        });
    });
  }

  /**
   * Aggregate counters for an accounting window, including total spend and the numbers of instances at or above the warning threshold and capacity. Use split_dim to aggregate only counters that match every given dimension value.
   * @param param The request object
   */
  public getAiGatewayBudgetInstancesSummary(
    param: AIGatewayApiGetAiGatewayBudgetInstancesSummaryRequest,
    options?: Configuration
  ): Promise<AiGatewayBudgetInstancesSummaryResponse> {
    const requestContextPromise =
      this.requestFactory.getAiGatewayBudgetInstancesSummary(
        param.id,
        param.window,
        param.splitDim,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAiGatewayBudgetInstancesSummary(
            responseContext
          );
        });
    });
  }

  /**
   * Get the organization default mode, scoped capture overrides, and configuration revision.
   * @param param The request object
   */
  public getAiGatewayDataCaptureConfiguration(
    options?: Configuration
  ): Promise<AiGatewayCaptureConfigurationResponse> {
    const requestContextPromise =
      this.requestFactory.getAiGatewayDataCaptureConfiguration(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAiGatewayDataCaptureConfiguration(
            responseContext
          );
        });
    });
  }

  /**
   * Get the organization-wide AI Gateway governance settings, which are the default data capture mode and whether requests must reach providers covered by a zero data retention agreement.
   * @param param The request object
   */
  public getAiGatewayGovernance(
    options?: Configuration
  ): Promise<AiGatewayGovernanceResponse> {
    const requestContextPromise =
      this.requestFactory.getAiGatewayGovernance(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAiGatewayGovernance(responseContext);
        });
    });
  }

  /**
   * Get a named policy or the explicit organization-wide policy by id "default". Requires configuration read permission; named policies also require view access. Provider selections cover current and future models and are returned separately from individual model selections.
   * @param param The request object
   */
  public getAiGatewayModelGroup(
    param: AIGatewayApiGetAiGatewayModelGroupRequest,
    options?: Configuration
  ): Promise<AiGatewayModelGroupResponse> {
    const requestContextPromise = this.requestFactory.getAiGatewayModelGroup(
      param.id,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAiGatewayModelGroup(responseContext);
        });
    });
  }

  /**
   * Get a custom provider model's pricing override and effective pricing source. Requires `ai_gateway_config_read` and provider View. Catalog and pricing metadata inherit provider access. Lists omit hidden entries; direct reads of hidden resources return 404.
   * @param param The request object
   */
  public getAiGatewayModelPricing(
    param: AIGatewayApiGetAiGatewayModelPricingRequest,
    options?: Configuration
  ): Promise<AiGatewayModelPricingResponse> {
    const requestContextPromise = this.requestFactory.getAiGatewayModelPricing(
      param.providerId,
      param.canonical,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAiGatewayModelPricing(
            responseContext
          );
        });
    });
  }

  /**
   * Get the routing policy document for a specific inbound pattern.
   * @param param The request object
   */
  public getAiGatewayPolicy(
    param: AIGatewayApiGetAiGatewayPolicyRequest,
    options?: Configuration
  ): Promise<AiGatewayPolicyResponse> {
    const requestContextPromise = this.requestFactory.getAiGatewayPolicy(
      param.inbound,
      param.userId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAiGatewayPolicy(responseContext);
        });
    });
  }

  /**
   * Get a provider by ID, including its routing slug, integration account, and cost multiplier. Credentials stay in the integration account and are never returned. Requires `ai_gateway_config_read` and provider View. Catalog and pricing metadata inherit provider access. Lists omit hidden entries; direct reads of hidden resources return 404.
   * @param param The request object
   */
  public getAiGatewayProvider(
    param: AIGatewayApiGetAiGatewayProviderRequest,
    options?: Configuration
  ): Promise<AiGatewayProviderResponse> {
    const requestContextPromise = this.requestFactory.getAiGatewayProvider(
      param.id,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAiGatewayProvider(responseContext);
        });
    });
  }

  /**
   * Get a rate limit by ID, including its scope, per-minute request and token limits, and whether it is enabled.
   * @param param The request object
   */
  public getAiGatewayRateLimit(
    param: AIGatewayApiGetAiGatewayRateLimitRequest,
    options?: Configuration
  ): Promise<AiGatewayRateLimitResponse> {
    const requestContextPromise = this.requestFactory.getAiGatewayRateLimit(
      param.id,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAiGatewayRateLimit(responseContext);
        });
    });
  }

  /**
   * Aggregate a template rate limit's hot counters (those near or at a limit, or limiting, in the last hour), including how many there are, how many are near or at their limit, and the fullest counter's utilization. Use split_dim to aggregate only counters that match every given dimension value. When the caller can't see the template's selector, every count is zero and scope_restricted is true. Summaries are cached for up to 15 seconds. Returns 503 when counter usage can't be read.
   * @param param The request object
   */
  public getAiGatewayRateLimitInstancesSummary(
    param: AIGatewayApiGetAiGatewayRateLimitInstancesSummaryRequest,
    options?: Configuration
  ): Promise<AiGatewayRateLimitInstancesSummaryResponse> {
    const requestContextPromise =
      this.requestFactory.getAiGatewayRateLimitInstancesSummary(
        param.id,
        param.splitDim,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAiGatewayRateLimitInstancesSummary(
            responseContext
          );
        });
    });
  }

  /**
   * Get live usage for the organization's rate limits. Returns requests and tokens counted in the rolling one-minute window and requests limited in the last 15 minutes for each enabled rate limit, plus `untracked` (traffic no enforced rate limit covers) and `total` (all gateway traffic).
   * @param param The request object
   */
  public getAiGatewayRateLimitUsage(
    options?: Configuration
  ): Promise<AiGatewayRateLimitUsageListResponse> {
    const requestContextPromise =
      this.requestFactory.getAiGatewayRateLimitUsage(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAiGatewayRateLimitUsage(
            responseContext
          );
        });
    });
  }

  /**
   * Get a routing rule by slug with `ai_gateway_config_read` and route View. Hidden and missing routes both return 404. Hidden target identities are omitted; parent-local target IDs remain available for retention.
   * @param param The request object
   */
  public getAiGatewayRoutingRule(
    param: AIGatewayApiGetAiGatewayRoutingRuleRequest,
    options?: Configuration
  ): Promise<AiGatewayRoutingRuleResponse> {
    const requestContextPromise = this.requestFactory.getAiGatewayRoutingRule(
      param.slug,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAiGatewayRoutingRule(
            responseContext
          );
        });
    });
  }

  /**
   * Search the values that a template budget's split dimensions take across its instance counters in an accounting window. Each dimension returns its top values by spend, with counter counts. Use query or value to narrow results and limit to cap them. The truncated field reports whether more values matched. Each dimension's values are counted under the other dimensions' split_dim filters, so a dimension's own filter does not hide its alternatives. Legacy fixed-scope budgets return an empty list.
   * @param param The request object
   */
  public listAiGatewayBudgetInstanceDimensions(
    param: AIGatewayApiListAiGatewayBudgetInstanceDimensionsRequest,
    options?: Configuration
  ): Promise<AiGatewayBudgetInstanceDimensionListResponse> {
    const requestContextPromise =
      this.requestFactory.listAiGatewayBudgetInstanceDimensions(
        param.id,
        param.window,
        param.splitDim,
        param.dim,
        param.query,
        param.value,
        param.limit,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAiGatewayBudgetInstanceDimensions(
            responseContext
          );
        });
    });
  }

  /**
   * List instance counters for an accounting window. Legacy fixed-scope budgets return one pooled row with an empty instance_key. Omit window to use the current window. Use split_dim to keep only counters that match every given dimension value.
   * @param param The request object
   */
  public listAiGatewayBudgetInstances(
    param: AIGatewayApiListAiGatewayBudgetInstancesRequest,
    options?: Configuration
  ): Promise<AiGatewayBudgetInstanceListResponse> {
    const requestContextPromise =
      this.requestFactory.listAiGatewayBudgetInstances(
        param.id,
        param.window,
        param.splitDim,
        param.sort,
        param.limit,
        param.offset,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAiGatewayBudgetInstances(
            responseContext
          );
        });
    });
  }

  /**
   * List spend budgets for the organization, including active-window spend and effective capacity.
   * @param param The request object
   */
  public listAiGatewayBudgets(
    options?: Configuration
  ): Promise<AiGatewayBudgetListResponse> {
    const requestContextPromise =
      this.requestFactory.listAiGatewayBudgets(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAiGatewayBudgets(responseContext);
        });
    });
  }

  /**
   * List model groups the user can view. The organization-wide policy has id "default" and explicit model, provider, and route selections. Missing or empty selections grant no organization-wide access. Its audience is fixed to the organization; it cannot be renamed or deleted. Named policies retain their access bindings. Requires configuration read permission; named policies also require view access.
   * @param param The request object
   */
  public listAiGatewayModelGroups(
    options?: Configuration
  ): Promise<AiGatewayModelGroupListResponse> {
    const requestContextPromise =
      this.requestFactory.listAiGatewayModelGroups(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAiGatewayModelGroups(
            responseContext
          );
        });
    });
  }

  /**
   * List all model catalog entries for a provider. Requires `ai_gateway_config_read` and provider View. Catalog and pricing metadata inherit provider access. Lists omit hidden entries; direct reads of hidden resources return 404.
   * @param param The request object
   */
  public listAiGatewayModels(
    param: AIGatewayApiListAiGatewayModelsRequest,
    options?: Configuration
  ): Promise<AiGatewayModelCatalogEntryListResponse> {
    const requestContextPromise = this.requestFactory.listAiGatewayModels(
      param.providerId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAiGatewayModels(responseContext);
        });
    });
  }

  /**
   * List all model catalog entries grouped by canonical model ID. Requires `ai_gateway_config_read` and provider View. Catalog and pricing metadata inherit provider access. Lists omit hidden entries; direct reads of hidden resources return 404.
   * @param param The request object
   */
  public listAiGatewayModelsByCanonical(
    options?: Configuration
  ): Promise<AiGatewayModelsByCanonicalListResponse> {
    const requestContextPromise =
      this.requestFactory.listAiGatewayModelsByCanonical(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAiGatewayModelsByCanonical(
            responseContext
          );
        });
    });
  }

  /**
   * List all routing policy documents for the organization. Pass user_id to filter by user scope.
   * @param param The request object
   */
  public listAiGatewayPolicies(
    param: AIGatewayApiListAiGatewayPoliciesRequest = {},
    options?: Configuration
  ): Promise<AiGatewayPolicyListResponse> {
    const requestContextPromise = this.requestFactory.listAiGatewayPolicies(
      param.userId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAiGatewayPolicies(responseContext);
        });
    });
  }

  /**
   * List live models available to a provider integration account that supports model discovery.
   * @param param The request object
   */
  public listAiGatewayProviderModels(
    param: AIGatewayApiListAiGatewayProviderModelsRequest,
    options?: Configuration
  ): Promise<AiGatewayDiscoveredModelListResponse> {
    const requestContextPromise =
      this.requestFactory.listAiGatewayProviderModels(
        param.integrationType,
        param.integrationAccountId,
        param.projectId,
        param.location,
        param.bedrockRegion,
        param.foundryResourceId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAiGatewayProviderModels(
            responseContext
          );
        });
    });
  }

  /**
   * List the model providers connected to the organization. Credentials stay in each provider's integration account and are never returned. Requires `ai_gateway_config_read` and provider View. Catalog and pricing metadata inherit provider access. Lists omit hidden entries; direct reads of hidden resources return 404.
   * @param param The request object
   */
  public listAiGatewayProviders(
    options?: Configuration
  ): Promise<AiGatewayProviderListResponse> {
    const requestContextPromise =
      this.requestFactory.listAiGatewayProviders(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAiGatewayProviders(responseContext);
        });
    });
  }

  /**
   * List the hot counters of a template rate limit, one per matched user, Team, or value, with their live usage. Only counters at 80% or more of a limit, or that limited or would have limited a request, in the last hour are listed. A counter appears within a few minutes of becoming hot. Usage is read for at most 200 counters per request; past that, rows carry usage_known false. Counters for a provider or model the caller can't see are left out, and when the caller can't see the template's selector, the list is empty. A rate limit with one shared allowance, including one whose selector has no per_value entry, returns an empty list. Returns 503 when counter usage can't be read.
   * @param param The request object
   */
  public listAiGatewayRateLimitInstances(
    param: AIGatewayApiListAiGatewayRateLimitInstancesRequest,
    options?: Configuration
  ): Promise<AiGatewayRateLimitInstanceListResponse> {
    const requestContextPromise =
      this.requestFactory.listAiGatewayRateLimitInstances(
        param.id,
        param.splitDim,
        param.sort,
        param.limit,
        param.offset,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAiGatewayRateLimitInstances(
            responseContext
          );
        });
    });
  }

  /**
   * Aggregate the counters of every template rate limit in the organization in one call, with one summary per template in the order the rate limit list returns them. Each summary is the one the single-template counter summary endpoint returns without split_dim, including scope_restricted and truncated. Rate limits with one shared allowance are left out. Summaries are cached for up to 15 seconds.
   * @param param The request object
   */
  public listAiGatewayRateLimitInstancesSummaries(
    options?: Configuration
  ): Promise<AiGatewayRateLimitInstancesSummaryListResponse> {
    const requestContextPromise =
      this.requestFactory.listAiGatewayRateLimitInstancesSummaries(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAiGatewayRateLimitInstancesSummaries(
            responseContext
          );
        });
    });
  }

  /**
   * List the organization's AI Gateway rate limits.
   * @param param The request object
   */
  public listAiGatewayRateLimits(
    options?: Configuration
  ): Promise<AiGatewayRateLimitListResponse> {
    const requestContextPromise =
      this.requestFactory.listAiGatewayRateLimits(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAiGatewayRateLimits(
            responseContext
          );
        });
    });
  }

  /**
   * List the organization's routing rules that the caller has View access to. Requires `ai_gateway_config_read`. Hidden route references are omitted from nested targets.
   * @param param The request object
   */
  public listAiGatewayRoutingRules(
    options?: Configuration
  ): Promise<AiGatewayRoutingRuleListResponse> {
    const requestContextPromise =
      this.requestFactory.listAiGatewayRoutingRules(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAiGatewayRoutingRules(
            responseContext
          );
        });
    });
  }

  /**
   * Override active-period capacity for one instance of a template budget, identified by its instance_key. Other instances and the budget's default capacity are unchanged. The override is retained in the budget adjustment audit history. Returns 404 when the instance has no counter in the active period. Not supported for legacy fixed-scope budgets.
   * @param param The request object
   */
  public overrideAiGatewayBudgetInstanceCapacity(
    param: AIGatewayApiOverrideAiGatewayBudgetInstanceCapacityRequest,
    options?: Configuration
  ): Promise<AiGatewayBudgetInstanceResponse> {
    const requestContextPromise =
      this.requestFactory.overrideAiGatewayBudgetInstanceCapacity(
        param.id,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.overrideAiGatewayBudgetInstanceCapacity(
            responseContext
          );
        });
    });
  }

  /**
   * Reset active-period spend for one instance of a template budget, identified by its instance_key. The reset is retained in the budget adjustment audit history. Returns 404 when the instance has no counter in the active period. Not supported for legacy fixed-scope budgets.
   * @param param The request object
   */
  public resetAiGatewayBudgetInstanceSpend(
    param: AIGatewayApiResetAiGatewayBudgetInstanceSpendRequest,
    options?: Configuration
  ): Promise<AiGatewayBudgetInstanceResponse> {
    const requestContextPromise =
      this.requestFactory.resetAiGatewayBudgetInstanceSpend(
        param.id,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.resetAiGatewayBudgetInstanceSpend(
            responseContext
          );
        });
    });
  }

  /**
   * Update a budget's mutable definition. Capacity changes apply to future accounting periods
   * unless `apply_to_current_period` is true.
   * @param param The request object
   */
  public updateAiGatewayBudget(
    param: AIGatewayApiUpdateAiGatewayBudgetRequest,
    options?: Configuration
  ): Promise<AiGatewayBudgetResponse> {
    const requestContextPromise = this.requestFactory.updateAiGatewayBudget(
      param.id,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAiGatewayBudget(responseContext);
        });
    });
  }

  /**
   * Replace an override using its `revision` and the current `configuration_revision`. Changes to capture overrides don't affect routing rules. Returns HTTP 409 when `configuration_revision` or the override `revision` is stale, including a concurrent change during replacement. Missing revisions or required full-capture confirmation returns HTTP 400.
   * @param param The request object
   */
  public updateAiGatewayDataCaptureOverride(
    param: AIGatewayApiUpdateAiGatewayDataCaptureOverrideRequest,
    options?: Configuration
  ): Promise<AiGatewayCaptureOverrideResponse> {
    const requestContextPromise =
      this.requestFactory.updateAiGatewayDataCaptureOverride(
        param.id,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAiGatewayDataCaptureOverride(
            responseContext
          );
        });
    });
  }

  /**
   * Replace the organization-wide AI Gateway governance settings, which are the default data capture mode and whether requests must reach providers covered by a zero data retention agreement.
   * @param param The request object
   */
  public updateAiGatewayGovernance(
    param: AIGatewayApiUpdateAiGatewayGovernanceRequest,
    options?: Configuration
  ): Promise<AiGatewayGovernanceResponse> {
    const requestContextPromise = this.requestFactory.updateAiGatewayGovernance(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAiGatewayGovernance(
            responseContext
          );
        });
    });
  }

  /**
   * Update a manually managed model catalog entry. Discovered entries are read-only. Requires `ai_gateway_config_write` and provider Edit. Models and pricing inherit provider access.
   * @param param The request object
   */
  public updateAiGatewayModel(
    param: AIGatewayApiUpdateAiGatewayModelRequest,
    options?: Configuration
  ): Promise<AiGatewayModelCatalogEntryResponse> {
    const requestContextPromise = this.requestFactory.updateAiGatewayModel(
      param.providerId,
      param.canonical,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAiGatewayModel(responseContext);
        });
    });
  }

  /**
   * Update a model group. For id "default", save membership and request options atomically with expected_revision. Empty selections grant no organization-wide access. Applicable authorized named policies override organization-wide request options; a rejected named-policy request cannot fall back to organization-wide options. The organization-wide audience is fixed and grants resource use only. Requires configuration write permission; named policies also require edit access.
   * @param param The request object
   */
  public updateAiGatewayModelGroup(
    param: AIGatewayApiUpdateAiGatewayModelGroupRequest,
    options?: Configuration
  ): Promise<AiGatewayModelGroupResponse> {
    const requestContextPromise = this.requestFactory.updateAiGatewayModelGroup(
      param.id,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAiGatewayModelGroup(
            responseContext
          );
        });
    });
  }

  /**
   * Set a custom provider model's pricing override. Requires `ai_gateway_config_write` and provider Edit. Models and pricing inherit provider access.
   * @param param The request object
   */
  public updateAiGatewayModelPricing(
    param: AIGatewayApiUpdateAiGatewayModelPricingRequest,
    options?: Configuration
  ): Promise<AiGatewayModelPricingResponse> {
    const requestContextPromise =
      this.requestFactory.updateAiGatewayModelPricing(
        param.providerId,
        param.canonical,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAiGatewayModelPricing(
            responseContext
          );
        });
    });
  }

  /**
   * Update a provider's display name or cost multiplier. Provider type, integration settings, and slug are immutable. Requires `ai_gateway_config_write` and provider Edit. Models and pricing inherit provider access.
   * @param param The request object
   */
  public updateAiGatewayProvider(
    param: AIGatewayApiUpdateAiGatewayProviderRequest,
    options?: Configuration
  ): Promise<AiGatewayProviderResponse> {
    const requestContextPromise = this.requestFactory.updateAiGatewayProvider(
      param.id,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAiGatewayProvider(
            responseContext
          );
        });
    });
  }

  /**
   * Update a rate limit. Only the attributes sent are changed, and changes never reset current usage. Scope stays editable, except on a template rate limit, whose user_id, team_id, and tags are rejected with 400. Returns 409 when the rule was changed concurrently or the new scope duplicates another rule.
   * @param param The request object
   */
  public updateAiGatewayRateLimit(
    param: AIGatewayApiUpdateAiGatewayRateLimitRequest,
    options?: Configuration
  ): Promise<AiGatewayRateLimitResponse> {
    const requestContextPromise = this.requestFactory.updateAiGatewayRateLimit(
      param.id,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAiGatewayRateLimit(
            responseContext
          );
        });
    });
  }

  /**
   * Update a route with `ai_gateway_config_write` and route View/Edit. The slug is immutable; data capture is managed independently. Omitting tiers preserves the entire graph. When tiers are supplied, saved parent-local target IDs retain omitted destination and reasoning, weight, rubric, and default settings. Omitted ordering/classifier settings preserve the saved same-position tier. Explicit null resets nullable settings. New references require View on their resources. A hidden target omitted from tiers must be explicitly listed in removed_target_ids, otherwise the update fails without changes. expected_updated_at rejects stale updates with 409. Sharing-only saves do not replace target rows. Hidden and missing routes return the same 404; visible non-editors receive 403. Inference authorization is unchanged.
   * @param param The request object
   */
  public updateAiGatewayRoutingRule(
    param: AIGatewayApiUpdateAiGatewayRoutingRuleRequest,
    options?: Configuration
  ): Promise<AiGatewayRoutingRuleResponse> {
    const requestContextPromise =
      this.requestFactory.updateAiGatewayRoutingRule(
        param.slug,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAiGatewayRoutingRule(
            responseContext
          );
        });
    });
  }

  /**
   * Create or replace the routing policy document for an inbound pattern. Pass user_id to scope the policy to a user.
   * @param param The request object
   */
  public upsertAiGatewayPolicy(
    param: AIGatewayApiUpsertAiGatewayPolicyRequest,
    options?: Configuration
  ): Promise<AiGatewayPolicyResponse> {
    const requestContextPromise = this.requestFactory.upsertAiGatewayPolicy(
      param.body,
      param.userId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.upsertAiGatewayPolicy(responseContext);
        });
    });
  }
}
