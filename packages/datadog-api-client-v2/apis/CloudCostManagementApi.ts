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

import { AccountFiltersPatchRequest } from "../models/AccountFiltersPatchRequest";
import { AccountFiltersResponse } from "../models/AccountFiltersResponse";
import { APIErrorResponse } from "../models/APIErrorResponse";
import { ArbitraryCostUpsertRequest } from "../models/ArbitraryCostUpsertRequest";
import { ArbitraryRuleResponse } from "../models/ArbitraryRuleResponse";
import { ArbitraryRuleResponseArray } from "../models/ArbitraryRuleResponseArray";
import { ArbitraryRuleStatusResponseArray } from "../models/ArbitraryRuleStatusResponseArray";
import { AwsCURConfigPatchRequest } from "../models/AwsCURConfigPatchRequest";
import { AwsCURConfigPostRequest } from "../models/AwsCURConfigPostRequest";
import { AwsCurConfigResponse } from "../models/AwsCurConfigResponse";
import { AwsCURConfigsResponse } from "../models/AwsCURConfigsResponse";
import { AzureUCConfigPairsResponse } from "../models/AzureUCConfigPairsResponse";
import { AzureUCConfigPatchRequest } from "../models/AzureUCConfigPatchRequest";
import { AzureUCConfigPostRequest } from "../models/AzureUCConfigPostRequest";
import { AzureUCConfigsResponse } from "../models/AzureUCConfigsResponse";
import { BudgetArray } from "../models/BudgetArray";
import { BudgetValidationRequest } from "../models/BudgetValidationRequest";
import { BudgetValidationResponse } from "../models/BudgetValidationResponse";
import { BudgetWithEntries } from "../models/BudgetWithEntries";
import { CloudCostAccountsResponse } from "../models/CloudCostAccountsResponse";
import { CommitmentsCommitmentType } from "../models/CommitmentsCommitmentType";
import { CommitmentsCoverageScalarResponse } from "../models/CommitmentsCoverageScalarResponse";
import { CommitmentsCoverageTimeseriesResponse } from "../models/CommitmentsCoverageTimeseriesResponse";
import { CommitmentsListResponse } from "../models/CommitmentsListResponse";
import { CommitmentsOnDemandHotspotsScalarResponse } from "../models/CommitmentsOnDemandHotspotsScalarResponse";
import { CommitmentsProvider } from "../models/CommitmentsProvider";
import { CommitmentsSavingsScalarResponse } from "../models/CommitmentsSavingsScalarResponse";
import { CommitmentsSavingsTimeseriesResponse } from "../models/CommitmentsSavingsTimeseriesResponse";
import { CommitmentsUtilizationScalarResponse } from "../models/CommitmentsUtilizationScalarResponse";
import { CommitmentsUtilizationTimeseriesResponse } from "../models/CommitmentsUtilizationTimeseriesResponse";
import { CostAnomaliesResponse } from "../models/CostAnomaliesResponse";
import { CostAnomalyResponse } from "../models/CostAnomalyResponse";
import { CostCurrencyResponse } from "../models/CostCurrencyResponse";
import { CostMetricsResponse } from "../models/CostMetricsResponse";
import { CostOrchestratorsResponse } from "../models/CostOrchestratorsResponse";
import { CostRecommendationArray } from "../models/CostRecommendationArray";
import { CostTagDescriptionResponse } from "../models/CostTagDescriptionResponse";
import { CostTagDescriptionsResponse } from "../models/CostTagDescriptionsResponse";
import { CostTagDescriptionUpsertRequest } from "../models/CostTagDescriptionUpsertRequest";
import { CostTagKeyMetadataResponse } from "../models/CostTagKeyMetadataResponse";
import { CostTagKeyResponse } from "../models/CostTagKeyResponse";
import { CostTagKeySourcesResponse } from "../models/CostTagKeySourcesResponse";
import { CostTagKeysResponse } from "../models/CostTagKeysResponse";
import { CostTagMetadataDailyFilter } from "../models/CostTagMetadataDailyFilter";
import { CostTagMetadataMonthsResponse } from "../models/CostTagMetadataMonthsResponse";
import { CostTagsResponse } from "../models/CostTagsResponse";
import { CreateRulesetRequest } from "../models/CreateRulesetRequest";
import { CustomCostsFileGetResponse } from "../models/CustomCostsFileGetResponse";
import { CustomCostsFileLineItem } from "../models/CustomCostsFileLineItem";
import { CustomCostsFileListResponse } from "../models/CustomCostsFileListResponse";
import { CustomCostsFileUploadResponse } from "../models/CustomCostsFileUploadResponse";
import { CustomForecastResponse } from "../models/CustomForecastResponse";
import { CustomForecastUpsertRequest } from "../models/CustomForecastUpsertRequest";
import { GcpUcConfigResponse } from "../models/GcpUcConfigResponse";
import { GCPUsageCostConfigPatchRequest } from "../models/GCPUsageCostConfigPatchRequest";
import { GCPUsageCostConfigPostRequest } from "../models/GCPUsageCostConfigPostRequest";
import { GCPUsageCostConfigResponse } from "../models/GCPUsageCostConfigResponse";
import { GCPUsageCostConfigsResponse } from "../models/GCPUsageCostConfigsResponse";
import { GenerateCostTagDescriptionResponse } from "../models/GenerateCostTagDescriptionResponse";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { OCIConfigsResponse } from "../models/OCIConfigsResponse";
import { RecommendationsFilterRequest } from "../models/RecommendationsFilterRequest";
import { ReorderRuleResourceArray } from "../models/ReorderRuleResourceArray";
import { ReorderRulesetResourceArray } from "../models/ReorderRulesetResourceArray";
import { RulesetResp } from "../models/RulesetResp";
import { RulesetRespArray } from "../models/RulesetRespArray";
import { RulesetStatusRespArray } from "../models/RulesetStatusRespArray";
import { RulesValidateQueryRequest } from "../models/RulesValidateQueryRequest";
import { RulesValidateQueryResponse } from "../models/RulesValidateQueryResponse";
import { UCConfigPair } from "../models/UCConfigPair";
import { UnitCostCreateRequest } from "../models/UnitCostCreateRequest";
import { UnitCostResponse } from "../models/UnitCostResponse";
import { UnitCostsResponse } from "../models/UnitCostsResponse";
import { UnitCostUpdateRequest } from "../models/UnitCostUpdateRequest";
import { UpdateRulesetRequest } from "../models/UpdateRulesetRequest";
import { ValidationResponse } from "../models/ValidationResponse";

export class CloudCostManagementApiRequestFactory extends BaseAPIRequestFactory {
  public async createCostAWSCURConfig(
    body: AwsCURConfigPostRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCostAWSCURConfig");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/aws_cur_config";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.createCostAWSCURConfig")
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
      ObjectSerializer.serialize(body, "AwsCURConfigPostRequest", ""),
      contentType,
      _config.preserveLargeIntegers
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

  public async createCostAzureUCConfigs(
    body: AzureUCConfigPostRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCostAzureUCConfigs");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/azure_uc_config";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.createCostAzureUCConfigs")
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
      ObjectSerializer.serialize(body, "AzureUCConfigPostRequest", ""),
      contentType,
      _config.preserveLargeIntegers
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

  public async createCostGCPUsageCostConfig(
    body: GCPUsageCostConfigPostRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCostGCPUsageCostConfig");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/gcp_uc_config";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.createCostGCPUsageCostConfig")
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
      ObjectSerializer.serialize(body, "GCPUsageCostConfigPostRequest", ""),
      contentType,
      _config.preserveLargeIntegers
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

  public async createCustomAllocationRule(
    body: ArbitraryCostUpsertRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCustomAllocationRule");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/arbitrary_rule";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.createCustomAllocationRule")
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
      ObjectSerializer.serialize(body, "ArbitraryCostUpsertRequest", ""),
      contentType,
      _config.preserveLargeIntegers
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

  public async createTagPipelinesRuleset(
    body: CreateRulesetRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createTagPipelinesRuleset");
    }

    // Path Params
    const localVarPath = "/api/v2/tags/enrichment";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.createTagPipelinesRuleset")
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
      ObjectSerializer.serialize(body, "CreateRulesetRequest", ""),
      contentType,
      _config.preserveLargeIntegers
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

  public async createUnitCost(
    body: UnitCostCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createUnitCost'");
    if (!_config.unstableOperations["v2.createUnitCost"]) {
      throw new Error("Unstable operation 'createUnitCost' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createUnitCost");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/unit_costs";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.createUnitCost")
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
      ObjectSerializer.serialize(body, "UnitCostCreateRequest", ""),
      contentType,
      _config.preserveLargeIntegers
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

  public async deleteBudget(
    budgetId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'budgetId' is not null or undefined
    if (budgetId === null || budgetId === undefined) {
      throw new RequiredError("budgetId", "deleteBudget");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/budget/{budget_id}".replace(
      "{budget_id}",
      encodeURIComponent(String(budgetId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.deleteBudget")
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

  public async deleteCostAWSCURConfig(
    cloudAccountId: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'cloudAccountId' is not null or undefined
    if (cloudAccountId === null || cloudAccountId === undefined) {
      throw new RequiredError("cloudAccountId", "deleteCostAWSCURConfig");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cost/aws_cur_config/{cloud_account_id}".replace(
        "{cloud_account_id}",
        encodeURIComponent(String(cloudAccountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.deleteCostAWSCURConfig")
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

  public async deleteCostAzureUCConfig(
    cloudAccountId: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'cloudAccountId' is not null or undefined
    if (cloudAccountId === null || cloudAccountId === undefined) {
      throw new RequiredError("cloudAccountId", "deleteCostAzureUCConfig");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cost/azure_uc_config/{cloud_account_id}".replace(
        "{cloud_account_id}",
        encodeURIComponent(String(cloudAccountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.deleteCostAzureUCConfig")
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

  public async deleteCostGCPUsageCostConfig(
    cloudAccountId: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'cloudAccountId' is not null or undefined
    if (cloudAccountId === null || cloudAccountId === undefined) {
      throw new RequiredError("cloudAccountId", "deleteCostGCPUsageCostConfig");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cost/gcp_uc_config/{cloud_account_id}".replace(
        "{cloud_account_id}",
        encodeURIComponent(String(cloudAccountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.deleteCostGCPUsageCostConfig")
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

  public async deleteCostTagDescriptionByKey(
    tagKey: string,
    cloud?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'tagKey' is not null or undefined
    if (tagKey === null || tagKey === undefined) {
      throw new RequiredError("tagKey", "deleteCostTagDescriptionByKey");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/tag_descriptions/{tag_key}".replace(
      "{tag_key}",
      encodeURIComponent(String(tagKey))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.deleteCostTagDescriptionByKey")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (cloud !== undefined) {
      requestContext.setQueryParam(
        "cloud",
        ObjectSerializer.serialize(cloud, "string", ""),
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

  public async deleteCustomAllocationRule(
    ruleId: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "deleteCustomAllocationRule");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/arbitrary_rule/{rule_id}".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.deleteCustomAllocationRule")
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

  public async deleteCustomCostsFile(
    fileId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'fileId' is not null or undefined
    if (fileId === null || fileId === undefined) {
      throw new RequiredError("fileId", "deleteCustomCostsFile");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/custom_costs/{file_id}".replace(
      "{file_id}",
      encodeURIComponent(String(fileId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.deleteCustomCostsFile")
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

  public async deleteCustomForecast(
    budgetId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'budgetId' is not null or undefined
    if (budgetId === null || budgetId === undefined) {
      throw new RequiredError("budgetId", "deleteCustomForecast");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cost/budget/{budget_id}/custom-forecast".replace(
        "{budget_id}",
        encodeURIComponent(String(budgetId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.deleteCustomForecast")
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

  public async deleteTagPipelinesRuleset(
    rulesetId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'rulesetId' is not null or undefined
    if (rulesetId === null || rulesetId === undefined) {
      throw new RequiredError("rulesetId", "deleteTagPipelinesRuleset");
    }

    // Path Params
    const localVarPath = "/api/v2/tags/enrichment/{ruleset_id}".replace(
      "{ruleset_id}",
      encodeURIComponent(String(rulesetId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.deleteTagPipelinesRuleset")
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

  public async deleteUnitCost(
    unitCostId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteUnitCost'");
    if (!_config.unstableOperations["v2.deleteUnitCost"]) {
      throw new Error("Unstable operation 'deleteUnitCost' is disabled");
    }

    // verify required parameter 'unitCostId' is not null or undefined
    if (unitCostId === null || unitCostId === undefined) {
      throw new RequiredError("unitCostId", "deleteUnitCost");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/unit_costs/{unit_cost_id}".replace(
      "{unit_cost_id}",
      encodeURIComponent(String(unitCostId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.deleteUnitCost")
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

  public async generateCostTagDescriptionByKey(
    tagKey: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'tagKey' is not null or undefined
    if (tagKey === null || tagKey === undefined) {
      throw new RequiredError("tagKey", "generateCostTagDescriptionByKey");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cost/tag_descriptions/{tag_key}/generate".replace(
        "{tag_key}",
        encodeURIComponent(String(tagKey))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.generateCostTagDescriptionByKey")
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

  public async getBudget(
    budgetId: string,
    actual?: boolean,
    forecast?: boolean,
    start?: number,
    end?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'budgetId' is not null or undefined
    if (budgetId === null || budgetId === undefined) {
      throw new RequiredError("budgetId", "getBudget");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/budget/{budget_id}".replace(
      "{budget_id}",
      encodeURIComponent(String(budgetId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.getBudget")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (actual !== undefined) {
      requestContext.setQueryParam(
        "actual",
        ObjectSerializer.serialize(actual, "boolean", ""),
        ""
      );
    }
    if (forecast !== undefined) {
      requestContext.setQueryParam(
        "forecast",
        ObjectSerializer.serialize(forecast, "boolean", ""),
        ""
      );
    }
    if (start !== undefined) {
      requestContext.setQueryParam(
        "start",
        ObjectSerializer.serialize(start, "number", "int64"),
        ""
      );
    }
    if (end !== undefined) {
      requestContext.setQueryParam(
        "end",
        ObjectSerializer.serialize(end, "number", "int64"),
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

  public async getCommitmentsCommitmentList(
    provider: CommitmentsProvider,
    product: string,
    start: number,
    end: number,
    filterBy?: string,
    commitmentType?: CommitmentsCommitmentType,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getCommitmentsCommitmentList'");
    if (!_config.unstableOperations["v2.getCommitmentsCommitmentList"]) {
      throw new Error(
        "Unstable operation 'getCommitmentsCommitmentList' is disabled"
      );
    }

    // verify required parameter 'provider' is not null or undefined
    if (provider === null || provider === undefined) {
      throw new RequiredError("provider", "getCommitmentsCommitmentList");
    }

    // verify required parameter 'product' is not null or undefined
    if (product === null || product === undefined) {
      throw new RequiredError("product", "getCommitmentsCommitmentList");
    }

    // verify required parameter 'start' is not null or undefined
    if (start === null || start === undefined) {
      throw new RequiredError("start", "getCommitmentsCommitmentList");
    }

    // verify required parameter 'end' is not null or undefined
    if (end === null || end === undefined) {
      throw new RequiredError("end", "getCommitmentsCommitmentList");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/commitments/commitment-list";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.getCommitmentsCommitmentList")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (provider !== undefined) {
      requestContext.setQueryParam(
        "provider",
        ObjectSerializer.serialize(provider, "CommitmentsProvider", ""),
        ""
      );
    }
    if (product !== undefined) {
      requestContext.setQueryParam(
        "product",
        ObjectSerializer.serialize(product, "string", ""),
        ""
      );
    }
    if (start !== undefined) {
      requestContext.setQueryParam(
        "start",
        ObjectSerializer.serialize(start, "number", "int64"),
        ""
      );
    }
    if (end !== undefined) {
      requestContext.setQueryParam(
        "end",
        ObjectSerializer.serialize(end, "number", "int64"),
        ""
      );
    }
    if (filterBy !== undefined) {
      requestContext.setQueryParam(
        "filterBy",
        ObjectSerializer.serialize(filterBy, "string", ""),
        ""
      );
    }
    if (commitmentType !== undefined) {
      requestContext.setQueryParam(
        "commitmentType",
        ObjectSerializer.serialize(
          commitmentType,
          "CommitmentsCommitmentType",
          ""
        ),
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

  public async getCommitmentsCoverageScalar(
    provider: CommitmentsProvider,
    product: string,
    start: number,
    end: number,
    filterBy?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getCommitmentsCoverageScalar'");
    if (!_config.unstableOperations["v2.getCommitmentsCoverageScalar"]) {
      throw new Error(
        "Unstable operation 'getCommitmentsCoverageScalar' is disabled"
      );
    }

    // verify required parameter 'provider' is not null or undefined
    if (provider === null || provider === undefined) {
      throw new RequiredError("provider", "getCommitmentsCoverageScalar");
    }

    // verify required parameter 'product' is not null or undefined
    if (product === null || product === undefined) {
      throw new RequiredError("product", "getCommitmentsCoverageScalar");
    }

    // verify required parameter 'start' is not null or undefined
    if (start === null || start === undefined) {
      throw new RequiredError("start", "getCommitmentsCoverageScalar");
    }

    // verify required parameter 'end' is not null or undefined
    if (end === null || end === undefined) {
      throw new RequiredError("end", "getCommitmentsCoverageScalar");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/commitments/coverage/scalar";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.getCommitmentsCoverageScalar")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (provider !== undefined) {
      requestContext.setQueryParam(
        "provider",
        ObjectSerializer.serialize(provider, "CommitmentsProvider", ""),
        ""
      );
    }
    if (product !== undefined) {
      requestContext.setQueryParam(
        "product",
        ObjectSerializer.serialize(product, "string", ""),
        ""
      );
    }
    if (start !== undefined) {
      requestContext.setQueryParam(
        "start",
        ObjectSerializer.serialize(start, "number", "int64"),
        ""
      );
    }
    if (end !== undefined) {
      requestContext.setQueryParam(
        "end",
        ObjectSerializer.serialize(end, "number", "int64"),
        ""
      );
    }
    if (filterBy !== undefined) {
      requestContext.setQueryParam(
        "filterBy",
        ObjectSerializer.serialize(filterBy, "string", ""),
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

  public async getCommitmentsCoverageTimeseries(
    provider: CommitmentsProvider,
    product: string,
    start: number,
    end: number,
    filterBy?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getCommitmentsCoverageTimeseries'");
    if (!_config.unstableOperations["v2.getCommitmentsCoverageTimeseries"]) {
      throw new Error(
        "Unstable operation 'getCommitmentsCoverageTimeseries' is disabled"
      );
    }

    // verify required parameter 'provider' is not null or undefined
    if (provider === null || provider === undefined) {
      throw new RequiredError("provider", "getCommitmentsCoverageTimeseries");
    }

    // verify required parameter 'product' is not null or undefined
    if (product === null || product === undefined) {
      throw new RequiredError("product", "getCommitmentsCoverageTimeseries");
    }

    // verify required parameter 'start' is not null or undefined
    if (start === null || start === undefined) {
      throw new RequiredError("start", "getCommitmentsCoverageTimeseries");
    }

    // verify required parameter 'end' is not null or undefined
    if (end === null || end === undefined) {
      throw new RequiredError("end", "getCommitmentsCoverageTimeseries");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/commitments/coverage/timeseries";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.getCommitmentsCoverageTimeseries")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (provider !== undefined) {
      requestContext.setQueryParam(
        "provider",
        ObjectSerializer.serialize(provider, "CommitmentsProvider", ""),
        ""
      );
    }
    if (product !== undefined) {
      requestContext.setQueryParam(
        "product",
        ObjectSerializer.serialize(product, "string", ""),
        ""
      );
    }
    if (start !== undefined) {
      requestContext.setQueryParam(
        "start",
        ObjectSerializer.serialize(start, "number", "int64"),
        ""
      );
    }
    if (end !== undefined) {
      requestContext.setQueryParam(
        "end",
        ObjectSerializer.serialize(end, "number", "int64"),
        ""
      );
    }
    if (filterBy !== undefined) {
      requestContext.setQueryParam(
        "filterBy",
        ObjectSerializer.serialize(filterBy, "string", ""),
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

  public async getCommitmentsOnDemandHotspotsScalar(
    provider: CommitmentsProvider,
    product: string,
    start: number,
    end: number,
    filterBy?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'getCommitmentsOnDemandHotspotsScalar'"
    );
    if (
      !_config.unstableOperations["v2.getCommitmentsOnDemandHotspotsScalar"]
    ) {
      throw new Error(
        "Unstable operation 'getCommitmentsOnDemandHotspotsScalar' is disabled"
      );
    }

    // verify required parameter 'provider' is not null or undefined
    if (provider === null || provider === undefined) {
      throw new RequiredError(
        "provider",
        "getCommitmentsOnDemandHotspotsScalar"
      );
    }

    // verify required parameter 'product' is not null or undefined
    if (product === null || product === undefined) {
      throw new RequiredError(
        "product",
        "getCommitmentsOnDemandHotspotsScalar"
      );
    }

    // verify required parameter 'start' is not null or undefined
    if (start === null || start === undefined) {
      throw new RequiredError("start", "getCommitmentsOnDemandHotspotsScalar");
    }

    // verify required parameter 'end' is not null or undefined
    if (end === null || end === undefined) {
      throw new RequiredError("end", "getCommitmentsOnDemandHotspotsScalar");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/commitments/on-demand-hot-spots/scalar";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.CloudCostManagementApi.getCommitmentsOnDemandHotspotsScalar"
      )
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (provider !== undefined) {
      requestContext.setQueryParam(
        "provider",
        ObjectSerializer.serialize(provider, "CommitmentsProvider", ""),
        ""
      );
    }
    if (product !== undefined) {
      requestContext.setQueryParam(
        "product",
        ObjectSerializer.serialize(product, "string", ""),
        ""
      );
    }
    if (start !== undefined) {
      requestContext.setQueryParam(
        "start",
        ObjectSerializer.serialize(start, "number", "int64"),
        ""
      );
    }
    if (end !== undefined) {
      requestContext.setQueryParam(
        "end",
        ObjectSerializer.serialize(end, "number", "int64"),
        ""
      );
    }
    if (filterBy !== undefined) {
      requestContext.setQueryParam(
        "filterBy",
        ObjectSerializer.serialize(filterBy, "string", ""),
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

  public async getCommitmentsSavingsScalar(
    provider: CommitmentsProvider,
    product: string,
    start: number,
    end: number,
    filterBy?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getCommitmentsSavingsScalar'");
    if (!_config.unstableOperations["v2.getCommitmentsSavingsScalar"]) {
      throw new Error(
        "Unstable operation 'getCommitmentsSavingsScalar' is disabled"
      );
    }

    // verify required parameter 'provider' is not null or undefined
    if (provider === null || provider === undefined) {
      throw new RequiredError("provider", "getCommitmentsSavingsScalar");
    }

    // verify required parameter 'product' is not null or undefined
    if (product === null || product === undefined) {
      throw new RequiredError("product", "getCommitmentsSavingsScalar");
    }

    // verify required parameter 'start' is not null or undefined
    if (start === null || start === undefined) {
      throw new RequiredError("start", "getCommitmentsSavingsScalar");
    }

    // verify required parameter 'end' is not null or undefined
    if (end === null || end === undefined) {
      throw new RequiredError("end", "getCommitmentsSavingsScalar");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/commitments/savings/scalar";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.getCommitmentsSavingsScalar")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (provider !== undefined) {
      requestContext.setQueryParam(
        "provider",
        ObjectSerializer.serialize(provider, "CommitmentsProvider", ""),
        ""
      );
    }
    if (product !== undefined) {
      requestContext.setQueryParam(
        "product",
        ObjectSerializer.serialize(product, "string", ""),
        ""
      );
    }
    if (start !== undefined) {
      requestContext.setQueryParam(
        "start",
        ObjectSerializer.serialize(start, "number", "int64"),
        ""
      );
    }
    if (end !== undefined) {
      requestContext.setQueryParam(
        "end",
        ObjectSerializer.serialize(end, "number", "int64"),
        ""
      );
    }
    if (filterBy !== undefined) {
      requestContext.setQueryParam(
        "filterBy",
        ObjectSerializer.serialize(filterBy, "string", ""),
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

  public async getCommitmentsSavingsTimeseries(
    provider: CommitmentsProvider,
    product: string,
    start: number,
    end: number,
    filterBy?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getCommitmentsSavingsTimeseries'");
    if (!_config.unstableOperations["v2.getCommitmentsSavingsTimeseries"]) {
      throw new Error(
        "Unstable operation 'getCommitmentsSavingsTimeseries' is disabled"
      );
    }

    // verify required parameter 'provider' is not null or undefined
    if (provider === null || provider === undefined) {
      throw new RequiredError("provider", "getCommitmentsSavingsTimeseries");
    }

    // verify required parameter 'product' is not null or undefined
    if (product === null || product === undefined) {
      throw new RequiredError("product", "getCommitmentsSavingsTimeseries");
    }

    // verify required parameter 'start' is not null or undefined
    if (start === null || start === undefined) {
      throw new RequiredError("start", "getCommitmentsSavingsTimeseries");
    }

    // verify required parameter 'end' is not null or undefined
    if (end === null || end === undefined) {
      throw new RequiredError("end", "getCommitmentsSavingsTimeseries");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/commitments/savings/timeseries";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.getCommitmentsSavingsTimeseries")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (provider !== undefined) {
      requestContext.setQueryParam(
        "provider",
        ObjectSerializer.serialize(provider, "CommitmentsProvider", ""),
        ""
      );
    }
    if (product !== undefined) {
      requestContext.setQueryParam(
        "product",
        ObjectSerializer.serialize(product, "string", ""),
        ""
      );
    }
    if (start !== undefined) {
      requestContext.setQueryParam(
        "start",
        ObjectSerializer.serialize(start, "number", "int64"),
        ""
      );
    }
    if (end !== undefined) {
      requestContext.setQueryParam(
        "end",
        ObjectSerializer.serialize(end, "number", "int64"),
        ""
      );
    }
    if (filterBy !== undefined) {
      requestContext.setQueryParam(
        "filterBy",
        ObjectSerializer.serialize(filterBy, "string", ""),
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

  public async getCommitmentsUtilizationScalar(
    provider: CommitmentsProvider,
    product: string,
    start: number,
    end: number,
    filterBy?: string,
    commitmentType?: CommitmentsCommitmentType,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getCommitmentsUtilizationScalar'");
    if (!_config.unstableOperations["v2.getCommitmentsUtilizationScalar"]) {
      throw new Error(
        "Unstable operation 'getCommitmentsUtilizationScalar' is disabled"
      );
    }

    // verify required parameter 'provider' is not null or undefined
    if (provider === null || provider === undefined) {
      throw new RequiredError("provider", "getCommitmentsUtilizationScalar");
    }

    // verify required parameter 'product' is not null or undefined
    if (product === null || product === undefined) {
      throw new RequiredError("product", "getCommitmentsUtilizationScalar");
    }

    // verify required parameter 'start' is not null or undefined
    if (start === null || start === undefined) {
      throw new RequiredError("start", "getCommitmentsUtilizationScalar");
    }

    // verify required parameter 'end' is not null or undefined
    if (end === null || end === undefined) {
      throw new RequiredError("end", "getCommitmentsUtilizationScalar");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/commitments/utilization/scalar";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.getCommitmentsUtilizationScalar")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (provider !== undefined) {
      requestContext.setQueryParam(
        "provider",
        ObjectSerializer.serialize(provider, "CommitmentsProvider", ""),
        ""
      );
    }
    if (product !== undefined) {
      requestContext.setQueryParam(
        "product",
        ObjectSerializer.serialize(product, "string", ""),
        ""
      );
    }
    if (start !== undefined) {
      requestContext.setQueryParam(
        "start",
        ObjectSerializer.serialize(start, "number", "int64"),
        ""
      );
    }
    if (end !== undefined) {
      requestContext.setQueryParam(
        "end",
        ObjectSerializer.serialize(end, "number", "int64"),
        ""
      );
    }
    if (filterBy !== undefined) {
      requestContext.setQueryParam(
        "filterBy",
        ObjectSerializer.serialize(filterBy, "string", ""),
        ""
      );
    }
    if (commitmentType !== undefined) {
      requestContext.setQueryParam(
        "commitmentType",
        ObjectSerializer.serialize(
          commitmentType,
          "CommitmentsCommitmentType",
          ""
        ),
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

  public async getCommitmentsUtilizationTimeseries(
    provider: CommitmentsProvider,
    product: string,
    start: number,
    end: number,
    filterBy?: string,
    commitmentType?: CommitmentsCommitmentType,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'getCommitmentsUtilizationTimeseries'"
    );
    if (!_config.unstableOperations["v2.getCommitmentsUtilizationTimeseries"]) {
      throw new Error(
        "Unstable operation 'getCommitmentsUtilizationTimeseries' is disabled"
      );
    }

    // verify required parameter 'provider' is not null or undefined
    if (provider === null || provider === undefined) {
      throw new RequiredError(
        "provider",
        "getCommitmentsUtilizationTimeseries"
      );
    }

    // verify required parameter 'product' is not null or undefined
    if (product === null || product === undefined) {
      throw new RequiredError("product", "getCommitmentsUtilizationTimeseries");
    }

    // verify required parameter 'start' is not null or undefined
    if (start === null || start === undefined) {
      throw new RequiredError("start", "getCommitmentsUtilizationTimeseries");
    }

    // verify required parameter 'end' is not null or undefined
    if (end === null || end === undefined) {
      throw new RequiredError("end", "getCommitmentsUtilizationTimeseries");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/commitments/utilization/timeseries";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.CloudCostManagementApi.getCommitmentsUtilizationTimeseries"
      )
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (provider !== undefined) {
      requestContext.setQueryParam(
        "provider",
        ObjectSerializer.serialize(provider, "CommitmentsProvider", ""),
        ""
      );
    }
    if (product !== undefined) {
      requestContext.setQueryParam(
        "product",
        ObjectSerializer.serialize(product, "string", ""),
        ""
      );
    }
    if (start !== undefined) {
      requestContext.setQueryParam(
        "start",
        ObjectSerializer.serialize(start, "number", "int64"),
        ""
      );
    }
    if (end !== undefined) {
      requestContext.setQueryParam(
        "end",
        ObjectSerializer.serialize(end, "number", "int64"),
        ""
      );
    }
    if (filterBy !== undefined) {
      requestContext.setQueryParam(
        "filterBy",
        ObjectSerializer.serialize(filterBy, "string", ""),
        ""
      );
    }
    if (commitmentType !== undefined) {
      requestContext.setQueryParam(
        "commitmentType",
        ObjectSerializer.serialize(
          commitmentType,
          "CommitmentsCommitmentType",
          ""
        ),
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

  public async getCostAccountFilters(
    cloudAccountId: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'cloudAccountId' is not null or undefined
    if (cloudAccountId === null || cloudAccountId === undefined) {
      throw new RequiredError("cloudAccountId", "getCostAccountFilters");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cost/account_filters/{cloud_account_id}".replace(
        "{cloud_account_id}",
        encodeURIComponent(String(cloudAccountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.getCostAccountFilters")
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

  public async getCostAnomaly(
    anomalyId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getCostAnomaly'");
    if (!_config.unstableOperations["v2.getCostAnomaly"]) {
      throw new Error("Unstable operation 'getCostAnomaly' is disabled");
    }

    // verify required parameter 'anomalyId' is not null or undefined
    if (anomalyId === null || anomalyId === undefined) {
      throw new RequiredError("anomalyId", "getCostAnomaly");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/anomalies/{anomaly_id}".replace(
      "{anomaly_id}",
      encodeURIComponent(String(anomalyId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.getCostAnomaly")
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

  public async getCostAWSCURConfig(
    cloudAccountId: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'cloudAccountId' is not null or undefined
    if (cloudAccountId === null || cloudAccountId === undefined) {
      throw new RequiredError("cloudAccountId", "getCostAWSCURConfig");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cost/aws_cur_config/{cloud_account_id}".replace(
        "{cloud_account_id}",
        encodeURIComponent(String(cloudAccountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.getCostAWSCURConfig")
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

  public async getCostAzureUCConfig(
    cloudAccountId: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'cloudAccountId' is not null or undefined
    if (cloudAccountId === null || cloudAccountId === undefined) {
      throw new RequiredError("cloudAccountId", "getCostAzureUCConfig");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cost/azure_uc_config/{cloud_account_id}".replace(
        "{cloud_account_id}",
        encodeURIComponent(String(cloudAccountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.getCostAzureUCConfig")
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

  public async getCostGCPUsageCostConfig(
    cloudAccountId: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'cloudAccountId' is not null or undefined
    if (cloudAccountId === null || cloudAccountId === undefined) {
      throw new RequiredError("cloudAccountId", "getCostGCPUsageCostConfig");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cost/gcp_uc_config/{cloud_account_id}".replace(
        "{cloud_account_id}",
        encodeURIComponent(String(cloudAccountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.getCostGCPUsageCostConfig")
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

  public async getCostTagDescriptionByKey(
    tagKey: string,
    filterCloud?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'tagKey' is not null or undefined
    if (tagKey === null || tagKey === undefined) {
      throw new RequiredError("tagKey", "getCostTagDescriptionByKey");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/tag_descriptions/{tag_key}".replace(
      "{tag_key}",
      encodeURIComponent(String(tagKey))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.getCostTagDescriptionByKey")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (filterCloud !== undefined) {
      requestContext.setQueryParam(
        "filter[cloud]",
        ObjectSerializer.serialize(filterCloud, "string", ""),
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

  public async getCostTagKey(
    tagKey: string,
    filterMetric?: string,
    pageSize?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'tagKey' is not null or undefined
    if (tagKey === null || tagKey === undefined) {
      throw new RequiredError("tagKey", "getCostTagKey");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/tag_keys/{tag_key}".replace(
      "{tag_key}",
      encodeURIComponent(String(tagKey))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.getCostTagKey")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (filterMetric !== undefined) {
      requestContext.setQueryParam(
        "filter[metric]",
        ObjectSerializer.serialize(filterMetric, "string", ""),
        ""
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", "int32"),
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

  public async getCostTagMetadataCurrency(
    filterMonth: string,
    filterProvider?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getCostTagMetadataCurrency'");
    if (!_config.unstableOperations["v2.getCostTagMetadataCurrency"]) {
      throw new Error(
        "Unstable operation 'getCostTagMetadataCurrency' is disabled"
      );
    }

    // verify required parameter 'filterMonth' is not null or undefined
    if (filterMonth === null || filterMonth === undefined) {
      throw new RequiredError("filterMonth", "getCostTagMetadataCurrency");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/tag_metadata/currency";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.getCostTagMetadataCurrency")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (filterMonth !== undefined) {
      requestContext.setQueryParam(
        "filter[month]",
        ObjectSerializer.serialize(filterMonth, "string", ""),
        ""
      );
    }
    if (filterProvider !== undefined) {
      requestContext.setQueryParam(
        "filter[provider]",
        ObjectSerializer.serialize(filterProvider, "string", ""),
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

  public async getCustomAllocationRule(
    ruleId: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "getCustomAllocationRule");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/arbitrary_rule/{rule_id}".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.getCustomAllocationRule")
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

  public async getCustomCostsFile(
    fileId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'fileId' is not null or undefined
    if (fileId === null || fileId === undefined) {
      throw new RequiredError("fileId", "getCustomCostsFile");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/custom_costs/{file_id}".replace(
      "{file_id}",
      encodeURIComponent(String(fileId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.getCustomCostsFile")
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

  public async getCustomForecast(
    budgetId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'budgetId' is not null or undefined
    if (budgetId === null || budgetId === undefined) {
      throw new RequiredError("budgetId", "getCustomForecast");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cost/budget/{budget_id}/custom-forecast".replace(
        "{budget_id}",
        encodeURIComponent(String(budgetId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.getCustomForecast")
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

  public async getTagPipelinesRuleset(
    rulesetId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'rulesetId' is not null or undefined
    if (rulesetId === null || rulesetId === undefined) {
      throw new RequiredError("rulesetId", "getTagPipelinesRuleset");
    }

    // Path Params
    const localVarPath = "/api/v2/tags/enrichment/{ruleset_id}".replace(
      "{ruleset_id}",
      encodeURIComponent(String(rulesetId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.getTagPipelinesRuleset")
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

  public async getUnitCost(
    unitCostId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getUnitCost'");
    if (!_config.unstableOperations["v2.getUnitCost"]) {
      throw new Error("Unstable operation 'getUnitCost' is disabled");
    }

    // verify required parameter 'unitCostId' is not null or undefined
    if (unitCostId === null || unitCostId === undefined) {
      throw new RequiredError("unitCostId", "getUnitCost");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/unit_costs/{unit_cost_id}".replace(
      "{unit_cost_id}",
      encodeURIComponent(String(unitCostId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.getUnitCost")
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

  public async listBudgets(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cost/budgets";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.listBudgets")
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

  public async listCostAnomalies(
    start?: number,
    end?: number,
    filter?: string,
    minAnomalousThreshold?: string,
    minCostThreshold?: string,
    dismissalCause?: string,
    orderBy?: string,
    order?: string,
    limit?: number,
    offset?: number,
    providerIds?: Array<string>,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listCostAnomalies'");
    if (!_config.unstableOperations["v2.listCostAnomalies"]) {
      throw new Error("Unstable operation 'listCostAnomalies' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/anomalies";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.listCostAnomalies")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (start !== undefined) {
      requestContext.setQueryParam(
        "start",
        ObjectSerializer.serialize(start, "number", "int64"),
        ""
      );
    }
    if (end !== undefined) {
      requestContext.setQueryParam(
        "end",
        ObjectSerializer.serialize(end, "number", "int64"),
        ""
      );
    }
    if (filter !== undefined) {
      requestContext.setQueryParam(
        "filter",
        ObjectSerializer.serialize(filter, "string", ""),
        ""
      );
    }
    if (minAnomalousThreshold !== undefined) {
      requestContext.setQueryParam(
        "min_anomalous_threshold",
        ObjectSerializer.serialize(minAnomalousThreshold, "string", ""),
        ""
      );
    }
    if (minCostThreshold !== undefined) {
      requestContext.setQueryParam(
        "min_cost_threshold",
        ObjectSerializer.serialize(minCostThreshold, "string", ""),
        ""
      );
    }
    if (dismissalCause !== undefined) {
      requestContext.setQueryParam(
        "dismissal_cause",
        ObjectSerializer.serialize(dismissalCause, "string", ""),
        ""
      );
    }
    if (orderBy !== undefined) {
      requestContext.setQueryParam(
        "order_by",
        ObjectSerializer.serialize(orderBy, "string", ""),
        ""
      );
    }
    if (order !== undefined) {
      requestContext.setQueryParam(
        "order",
        ObjectSerializer.serialize(order, "string", ""),
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
    if (providerIds !== undefined) {
      requestContext.setQueryParam(
        "provider_ids",
        ObjectSerializer.serialize(providerIds, "Array<string>", ""),
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

  public async listCostAWSCURConfigs(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cost/aws_cur_config";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.listCostAWSCURConfigs")
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

  public async listCostAzureUCConfigs(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cost/azure_uc_config";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.listCostAzureUCConfigs")
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

  public async listCostCloudAccountsV2(
    filterCloud?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cost/cloud_accounts";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.listCostCloudAccountsV2")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (filterCloud !== undefined) {
      requestContext.setQueryParam(
        "filter[cloud]",
        ObjectSerializer.serialize(filterCloud, "string", ""),
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

  public async listCostGCPUsageCostConfigs(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cost/gcp_uc_config";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.listCostGCPUsageCostConfigs")
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

  public async listCostOCIConfigs(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cost/oci_config";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.listCostOCIConfigs")
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

  public async listCostTagDescriptions(
    filterCloud?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cost/tag_descriptions";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.listCostTagDescriptions")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (filterCloud !== undefined) {
      requestContext.setQueryParam(
        "filter[cloud]",
        ObjectSerializer.serialize(filterCloud, "string", ""),
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

  public async listCostTagKeys(
    filterMetric?: string,
    filterTags?: Array<string>,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cost/tag_keys";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.listCostTagKeys")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (filterMetric !== undefined) {
      requestContext.setQueryParam(
        "filter[metric]",
        ObjectSerializer.serialize(filterMetric, "string", ""),
        ""
      );
    }
    if (filterTags !== undefined) {
      requestContext.setQueryParam(
        "filter[tags]",
        ObjectSerializer.serialize(filterTags, "Array<string>", ""),
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

  public async listCostTagKeySources(
    filterMonth: string,
    filterProvider?: string,
    filterMetric?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listCostTagKeySources'");
    if (!_config.unstableOperations["v2.listCostTagKeySources"]) {
      throw new Error("Unstable operation 'listCostTagKeySources' is disabled");
    }

    // verify required parameter 'filterMonth' is not null or undefined
    if (filterMonth === null || filterMonth === undefined) {
      throw new RequiredError("filterMonth", "listCostTagKeySources");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/tag_metadata/tag_sources";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.listCostTagKeySources")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (filterMonth !== undefined) {
      requestContext.setQueryParam(
        "filter[month]",
        ObjectSerializer.serialize(filterMonth, "string", ""),
        ""
      );
    }
    if (filterProvider !== undefined) {
      requestContext.setQueryParam(
        "filter[provider]",
        ObjectSerializer.serialize(filterProvider, "string", ""),
        ""
      );
    }
    if (filterMetric !== undefined) {
      requestContext.setQueryParam(
        "filter[metric]",
        ObjectSerializer.serialize(filterMetric, "string", ""),
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

  public async listCostTagMetadata(
    filterMonth: string,
    filterProvider?: string,
    filterMetric?: string,
    filterTagKey?: string,
    filterDaily?: CostTagMetadataDailyFilter,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listCostTagMetadata'");
    if (!_config.unstableOperations["v2.listCostTagMetadata"]) {
      throw new Error("Unstable operation 'listCostTagMetadata' is disabled");
    }

    // verify required parameter 'filterMonth' is not null or undefined
    if (filterMonth === null || filterMonth === undefined) {
      throw new RequiredError("filterMonth", "listCostTagMetadata");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/tag_metadata";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.listCostTagMetadata")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (filterMonth !== undefined) {
      requestContext.setQueryParam(
        "filter[month]",
        ObjectSerializer.serialize(filterMonth, "string", ""),
        ""
      );
    }
    if (filterProvider !== undefined) {
      requestContext.setQueryParam(
        "filter[provider]",
        ObjectSerializer.serialize(filterProvider, "string", ""),
        ""
      );
    }
    if (filterMetric !== undefined) {
      requestContext.setQueryParam(
        "filter[metric]",
        ObjectSerializer.serialize(filterMetric, "string", ""),
        ""
      );
    }
    if (filterTagKey !== undefined) {
      requestContext.setQueryParam(
        "filter[tag_key]",
        ObjectSerializer.serialize(filterTagKey, "string", ""),
        ""
      );
    }
    if (filterDaily !== undefined) {
      requestContext.setQueryParam(
        "filter[daily]",
        ObjectSerializer.serialize(
          filterDaily,
          "CostTagMetadataDailyFilter",
          ""
        ),
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

  public async listCostTagMetadataMetrics(
    filterMonth: string,
    filterProvider?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listCostTagMetadataMetrics'");
    if (!_config.unstableOperations["v2.listCostTagMetadataMetrics"]) {
      throw new Error(
        "Unstable operation 'listCostTagMetadataMetrics' is disabled"
      );
    }

    // verify required parameter 'filterMonth' is not null or undefined
    if (filterMonth === null || filterMonth === undefined) {
      throw new RequiredError("filterMonth", "listCostTagMetadataMetrics");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/tag_metadata/metrics";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.listCostTagMetadataMetrics")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (filterMonth !== undefined) {
      requestContext.setQueryParam(
        "filter[month]",
        ObjectSerializer.serialize(filterMonth, "string", ""),
        ""
      );
    }
    if (filterProvider !== undefined) {
      requestContext.setQueryParam(
        "filter[provider]",
        ObjectSerializer.serialize(filterProvider, "string", ""),
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

  public async listCostTagMetadataMonths(
    filterProvider: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listCostTagMetadataMonths'");
    if (!_config.unstableOperations["v2.listCostTagMetadataMonths"]) {
      throw new Error(
        "Unstable operation 'listCostTagMetadataMonths' is disabled"
      );
    }

    // verify required parameter 'filterProvider' is not null or undefined
    if (filterProvider === null || filterProvider === undefined) {
      throw new RequiredError("filterProvider", "listCostTagMetadataMonths");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/tag_metadata/months";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.listCostTagMetadataMonths")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (filterProvider !== undefined) {
      requestContext.setQueryParam(
        "filter[provider]",
        ObjectSerializer.serialize(filterProvider, "string", ""),
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

  public async listCostTagMetadataOrchestrators(
    filterMonth: string,
    filterProvider?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listCostTagMetadataOrchestrators'");
    if (!_config.unstableOperations["v2.listCostTagMetadataOrchestrators"]) {
      throw new Error(
        "Unstable operation 'listCostTagMetadataOrchestrators' is disabled"
      );
    }

    // verify required parameter 'filterMonth' is not null or undefined
    if (filterMonth === null || filterMonth === undefined) {
      throw new RequiredError(
        "filterMonth",
        "listCostTagMetadataOrchestrators"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/cost/tag_metadata/orchestrators";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.listCostTagMetadataOrchestrators")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (filterMonth !== undefined) {
      requestContext.setQueryParam(
        "filter[month]",
        ObjectSerializer.serialize(filterMonth, "string", ""),
        ""
      );
    }
    if (filterProvider !== undefined) {
      requestContext.setQueryParam(
        "filter[provider]",
        ObjectSerializer.serialize(filterProvider, "string", ""),
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

  public async listCostTags(
    filterMetric?: string,
    filterMatch?: string,
    filterTags?: Array<string>,
    filterTagKeys?: Array<string>,
    pageSize?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cost/tags";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.listCostTags")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (filterMetric !== undefined) {
      requestContext.setQueryParam(
        "filter[metric]",
        ObjectSerializer.serialize(filterMetric, "string", ""),
        ""
      );
    }
    if (filterMatch !== undefined) {
      requestContext.setQueryParam(
        "filter[match]",
        ObjectSerializer.serialize(filterMatch, "string", ""),
        ""
      );
    }
    if (filterTags !== undefined) {
      requestContext.setQueryParam(
        "filter[tags]",
        ObjectSerializer.serialize(filterTags, "Array<string>", ""),
        "multi"
      );
    }
    if (filterTagKeys !== undefined) {
      requestContext.setQueryParam(
        "filter[tag_keys]",
        ObjectSerializer.serialize(filterTagKeys, "Array<string>", ""),
        "multi"
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", "int32"),
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

  public async listCustomAllocationRules(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cost/arbitrary_rule";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.listCustomAllocationRules")
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

  public async listCustomAllocationRulesStatus(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cost/arbitrary_rule/status";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.listCustomAllocationRulesStatus")
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

  public async listCustomCostsFiles(
    pageNumber?: number,
    pageSize?: number,
    filterStatus?: string,
    filterName?: string,
    filterProvider?: Array<string>,
    sort?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cost/custom_costs";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.listCustomCostsFiles")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
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
    if (filterStatus !== undefined) {
      requestContext.setQueryParam(
        "filter[status]",
        ObjectSerializer.serialize(filterStatus, "string", ""),
        ""
      );
    }
    if (filterName !== undefined) {
      requestContext.setQueryParam(
        "filter[name]",
        ObjectSerializer.serialize(filterName, "string", ""),
        ""
      );
    }
    if (filterProvider !== undefined) {
      requestContext.setQueryParam(
        "filter[provider]",
        ObjectSerializer.serialize(filterProvider, "Array<string>", ""),
        "multi"
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "string", ""),
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

  public async listTagPipelinesRulesets(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/tags/enrichment";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.listTagPipelinesRulesets")
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

  public async listTagPipelinesRulesetsStatus(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/tags/enrichment/status";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.listTagPipelinesRulesetsStatus")
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

  public async listUnitCosts(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listUnitCosts'");
    if (!_config.unstableOperations["v2.listUnitCosts"]) {
      throw new Error("Unstable operation 'listUnitCosts' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/unit_costs";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.listUnitCosts")
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

  public async reorderCustomAllocationRules(
    body: ReorderRuleResourceArray,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "reorderCustomAllocationRules");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/arbitrary_rule/reorder";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.reorderCustomAllocationRules")
      .makeRequestContext(localVarPath, HttpMethod.POST);
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
      ObjectSerializer.serialize(body, "ReorderRuleResourceArray", ""),
      contentType,
      _config.preserveLargeIntegers
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

  public async reorderTagPipelinesRulesets(
    body: ReorderRulesetResourceArray,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "reorderTagPipelinesRulesets");
    }

    // Path Params
    const localVarPath = "/api/v2/tags/enrichment/reorder";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.reorderTagPipelinesRulesets")
      .makeRequestContext(localVarPath, HttpMethod.POST);
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
      ObjectSerializer.serialize(body, "ReorderRulesetResourceArray", ""),
      contentType,
      _config.preserveLargeIntegers
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

  public async searchCostRecommendations(
    body: RecommendationsFilterRequest,
    pageSize?: string,
    pageToken?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'searchCostRecommendations'");
    if (!_config.unstableOperations["v2.searchCostRecommendations"]) {
      throw new Error(
        "Unstable operation 'searchCostRecommendations' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "searchCostRecommendations");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/recommendations";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.searchCostRecommendations")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "string", ""),
        ""
      );
    }
    if (pageToken !== undefined) {
      requestContext.setQueryParam(
        "page[token]",
        ObjectSerializer.serialize(pageToken, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "RecommendationsFilterRequest", ""),
      contentType,
      _config.preserveLargeIntegers
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

  public async updateCostAccountFilters(
    cloudAccountId: number,
    body: AccountFiltersPatchRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'cloudAccountId' is not null or undefined
    if (cloudAccountId === null || cloudAccountId === undefined) {
      throw new RequiredError("cloudAccountId", "updateCostAccountFilters");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateCostAccountFilters");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cost/account_filters/{cloud_account_id}".replace(
        "{cloud_account_id}",
        encodeURIComponent(String(cloudAccountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.updateCostAccountFilters")
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
      ObjectSerializer.serialize(body, "AccountFiltersPatchRequest", ""),
      contentType,
      _config.preserveLargeIntegers
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

  public async updateCostAWSCURConfig(
    cloudAccountId: number,
    body: AwsCURConfigPatchRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'cloudAccountId' is not null or undefined
    if (cloudAccountId === null || cloudAccountId === undefined) {
      throw new RequiredError("cloudAccountId", "updateCostAWSCURConfig");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateCostAWSCURConfig");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cost/aws_cur_config/{cloud_account_id}".replace(
        "{cloud_account_id}",
        encodeURIComponent(String(cloudAccountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.updateCostAWSCURConfig")
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
      ObjectSerializer.serialize(body, "AwsCURConfigPatchRequest", ""),
      contentType,
      _config.preserveLargeIntegers
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

  public async updateCostAzureUCConfigs(
    cloudAccountId: number,
    body: AzureUCConfigPatchRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'cloudAccountId' is not null or undefined
    if (cloudAccountId === null || cloudAccountId === undefined) {
      throw new RequiredError("cloudAccountId", "updateCostAzureUCConfigs");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateCostAzureUCConfigs");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cost/azure_uc_config/{cloud_account_id}".replace(
        "{cloud_account_id}",
        encodeURIComponent(String(cloudAccountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.updateCostAzureUCConfigs")
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
      ObjectSerializer.serialize(body, "AzureUCConfigPatchRequest", ""),
      contentType,
      _config.preserveLargeIntegers
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

  public async updateCostGCPUsageCostConfig(
    cloudAccountId: number,
    body: GCPUsageCostConfigPatchRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'cloudAccountId' is not null or undefined
    if (cloudAccountId === null || cloudAccountId === undefined) {
      throw new RequiredError("cloudAccountId", "updateCostGCPUsageCostConfig");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateCostGCPUsageCostConfig");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cost/gcp_uc_config/{cloud_account_id}".replace(
        "{cloud_account_id}",
        encodeURIComponent(String(cloudAccountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.updateCostGCPUsageCostConfig")
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
      ObjectSerializer.serialize(body, "GCPUsageCostConfigPatchRequest", ""),
      contentType,
      _config.preserveLargeIntegers
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

  public async updateCustomAllocationRule(
    ruleId: number,
    body: ArbitraryCostUpsertRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "updateCustomAllocationRule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateCustomAllocationRule");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/arbitrary_rule/{rule_id}".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.updateCustomAllocationRule")
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
      ObjectSerializer.serialize(body, "ArbitraryCostUpsertRequest", ""),
      contentType,
      _config.preserveLargeIntegers
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

  public async updateTagPipelinesRuleset(
    rulesetId: string,
    body: UpdateRulesetRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'rulesetId' is not null or undefined
    if (rulesetId === null || rulesetId === undefined) {
      throw new RequiredError("rulesetId", "updateTagPipelinesRuleset");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateTagPipelinesRuleset");
    }

    // Path Params
    const localVarPath = "/api/v2/tags/enrichment/{ruleset_id}".replace(
      "{ruleset_id}",
      encodeURIComponent(String(rulesetId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.updateTagPipelinesRuleset")
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
      ObjectSerializer.serialize(body, "UpdateRulesetRequest", ""),
      contentType,
      _config.preserveLargeIntegers
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

  public async updateUnitCost(
    unitCostId: string,
    body: UnitCostUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateUnitCost'");
    if (!_config.unstableOperations["v2.updateUnitCost"]) {
      throw new Error("Unstable operation 'updateUnitCost' is disabled");
    }

    // verify required parameter 'unitCostId' is not null or undefined
    if (unitCostId === null || unitCostId === undefined) {
      throw new RequiredError("unitCostId", "updateUnitCost");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateUnitCost");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/unit_costs/{unit_cost_id}".replace(
      "{unit_cost_id}",
      encodeURIComponent(String(unitCostId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.updateUnitCost")
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
      ObjectSerializer.serialize(body, "UnitCostUpdateRequest", ""),
      contentType,
      _config.preserveLargeIntegers
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

  public async uploadCustomCostsFile(
    body: Array<CustomCostsFileLineItem>,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "uploadCustomCostsFile");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/custom_costs";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.uploadCustomCostsFile")
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
      ObjectSerializer.serialize(body, "Array<CustomCostsFileLineItem>", ""),
      contentType,
      _config.preserveLargeIntegers
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

  public async upsertBudget(
    body: BudgetWithEntries,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "upsertBudget");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/budget";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.upsertBudget")
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
      ObjectSerializer.serialize(body, "BudgetWithEntries", ""),
      contentType,
      _config.preserveLargeIntegers
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

  public async upsertCostTagDescriptionByKey(
    tagKey: string,
    body: CostTagDescriptionUpsertRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'tagKey' is not null or undefined
    if (tagKey === null || tagKey === undefined) {
      throw new RequiredError("tagKey", "upsertCostTagDescriptionByKey");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "upsertCostTagDescriptionByKey");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/tag_descriptions/{tag_key}".replace(
      "{tag_key}",
      encodeURIComponent(String(tagKey))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.upsertCostTagDescriptionByKey")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
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
      ObjectSerializer.serialize(body, "CostTagDescriptionUpsertRequest", ""),
      contentType,
      _config.preserveLargeIntegers
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

  public async upsertCustomForecast(
    body: CustomForecastUpsertRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "upsertCustomForecast");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/budget/custom-forecast";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.upsertCustomForecast")
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
      ObjectSerializer.serialize(body, "CustomForecastUpsertRequest", ""),
      contentType,
      _config.preserveLargeIntegers
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

  public async validateBudget(
    body: BudgetValidationRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "validateBudget");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/budget/validate";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.validateBudget")
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
      ObjectSerializer.serialize(body, "BudgetValidationRequest", ""),
      contentType,
      _config.preserveLargeIntegers
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

  public async validateCsvBudget(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cost/budget/csv/validate";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.validateCsvBudget")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    return requestContext;
  }

  public async validateQuery(
    body: RulesValidateQueryRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "validateQuery");
    }

    // Path Params
    const localVarPath = "/api/v2/tags/enrichment/validate-query";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.validateQuery")
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
      ObjectSerializer.serialize(body, "RulesValidateQueryRequest", ""),
      contentType,
      _config.preserveLargeIntegers
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

export class CloudCostManagementApiResponseProcessor {
  private configuration?: Configuration;

  public constructor(configuration?: Configuration) {
    this.configuration = configuration;
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createCostAWSCURConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCostAWSCURConfig(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<AwsCurConfigResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AwsCurConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "AwsCurConfigResponse",
        "",
        _config?.preserveLargeIntegers
      ) as AwsCurConfigResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: AwsCurConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "AwsCurConfigResponse",
        "",
        _config?.preserveLargeIntegers
      ) as AwsCurConfigResponse;
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
   * @params response Response returned by the server for a request to createCostAzureUCConfigs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCostAzureUCConfigs(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<AzureUCConfigPairsResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AzureUCConfigPairsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "AzureUCConfigPairsResponse",
        "",
        _config?.preserveLargeIntegers
      ) as AzureUCConfigPairsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: AzureUCConfigPairsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "AzureUCConfigPairsResponse",
        "",
        _config?.preserveLargeIntegers
      ) as AzureUCConfigPairsResponse;
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
   * @params response Response returned by the server for a request to createCostGCPUsageCostConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCostGCPUsageCostConfig(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<GCPUsageCostConfigResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GCPUsageCostConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "GCPUsageCostConfigResponse",
        "",
        _config?.preserveLargeIntegers
      ) as GCPUsageCostConfigResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: GCPUsageCostConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "GCPUsageCostConfigResponse",
        "",
        _config?.preserveLargeIntegers
      ) as GCPUsageCostConfigResponse;
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
   * @params response Response returned by the server for a request to createCustomAllocationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCustomAllocationRule(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<ArbitraryRuleResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ArbitraryRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "ArbitraryRuleResponse",
        "",
        _config?.preserveLargeIntegers
      ) as ArbitraryRuleResponse;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: ArbitraryRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "ArbitraryRuleResponse",
        "",
        _config?.preserveLargeIntegers
      ) as ArbitraryRuleResponse;
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
   * @params response Response returned by the server for a request to createTagPipelinesRuleset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createTagPipelinesRuleset(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<RulesetResp> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RulesetResp = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "RulesetResp",
        "",
        _config?.preserveLargeIntegers
      ) as RulesetResp;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: RulesetResp = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "RulesetResp",
        "",
        _config?.preserveLargeIntegers
      ) as RulesetResp;
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
   * @params response Response returned by the server for a request to createUnitCost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createUnitCost(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<UnitCostResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: UnitCostResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "UnitCostResponse",
        "",
        _config?.preserveLargeIntegers
      ) as UnitCostResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: UnitCostResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "UnitCostResponse",
        "",
        _config?.preserveLargeIntegers
      ) as UnitCostResponse;
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
   * @params response Response returned by the server for a request to deleteBudget
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteBudget(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<void> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to deleteCostAWSCURConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteCostAWSCURConfig(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<void> {
    const _config = _options || this.configuration;
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
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to deleteCostAzureUCConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteCostAzureUCConfig(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<void> {
    const _config = _options || this.configuration;
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
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to deleteCostGCPUsageCostConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteCostGCPUsageCostConfig(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<void> {
    const _config = _options || this.configuration;
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
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to deleteCostTagDescriptionByKey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteCostTagDescriptionByKey(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<void> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to deleteCustomAllocationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteCustomAllocationRule(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<void> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to deleteCustomCostsFile
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteCustomCostsFile(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<void> {
    const _config = _options || this.configuration;
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
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to deleteCustomForecast
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteCustomForecast(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<void> {
    const _config = _options || this.configuration;
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
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to deleteTagPipelinesRuleset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteTagPipelinesRuleset(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<void> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to deleteUnitCost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteUnitCost(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<void> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to generateCostTagDescriptionByKey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async generateCostTagDescriptionByKey(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<GenerateCostTagDescriptionResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GenerateCostTagDescriptionResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "GenerateCostTagDescriptionResponse",
          "",
          _config?.preserveLargeIntegers
        ) as GenerateCostTagDescriptionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: GenerateCostTagDescriptionResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "GenerateCostTagDescriptionResponse",
          "",
          _config?.preserveLargeIntegers
        ) as GenerateCostTagDescriptionResponse;
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
   * @params response Response returned by the server for a request to getBudget
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getBudget(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<BudgetWithEntries> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: BudgetWithEntries = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "BudgetWithEntries",
        "",
        _config?.preserveLargeIntegers
      ) as BudgetWithEntries;
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
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: BudgetWithEntries = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "BudgetWithEntries",
        "",
        _config?.preserveLargeIntegers
      ) as BudgetWithEntries;
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
   * @params response Response returned by the server for a request to getCommitmentsCommitmentList
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCommitmentsCommitmentList(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<CommitmentsListResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CommitmentsListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CommitmentsListResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CommitmentsListResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: CommitmentsListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CommitmentsListResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CommitmentsListResponse;
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
   * @params response Response returned by the server for a request to getCommitmentsCoverageScalar
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCommitmentsCoverageScalar(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<CommitmentsCoverageScalarResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CommitmentsCoverageScalarResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "CommitmentsCoverageScalarResponse",
          "",
          _config?.preserveLargeIntegers
        ) as CommitmentsCoverageScalarResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: CommitmentsCoverageScalarResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "CommitmentsCoverageScalarResponse",
          "",
          _config?.preserveLargeIntegers
        ) as CommitmentsCoverageScalarResponse;
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
   * @params response Response returned by the server for a request to getCommitmentsCoverageTimeseries
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCommitmentsCoverageTimeseries(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<CommitmentsCoverageTimeseriesResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CommitmentsCoverageTimeseriesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "CommitmentsCoverageTimeseriesResponse",
          "",
          _config?.preserveLargeIntegers
        ) as CommitmentsCoverageTimeseriesResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: CommitmentsCoverageTimeseriesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "CommitmentsCoverageTimeseriesResponse",
          "",
          _config?.preserveLargeIntegers
        ) as CommitmentsCoverageTimeseriesResponse;
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
   * @params response Response returned by the server for a request to getCommitmentsOnDemandHotspotsScalar
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCommitmentsOnDemandHotspotsScalar(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<CommitmentsOnDemandHotspotsScalarResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CommitmentsOnDemandHotspotsScalarResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "CommitmentsOnDemandHotspotsScalarResponse",
          "",
          _config?.preserveLargeIntegers
        ) as CommitmentsOnDemandHotspotsScalarResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: CommitmentsOnDemandHotspotsScalarResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "CommitmentsOnDemandHotspotsScalarResponse",
          "",
          _config?.preserveLargeIntegers
        ) as CommitmentsOnDemandHotspotsScalarResponse;
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
   * @params response Response returned by the server for a request to getCommitmentsSavingsScalar
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCommitmentsSavingsScalar(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<CommitmentsSavingsScalarResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CommitmentsSavingsScalarResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "CommitmentsSavingsScalarResponse",
          "",
          _config?.preserveLargeIntegers
        ) as CommitmentsSavingsScalarResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: CommitmentsSavingsScalarResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "CommitmentsSavingsScalarResponse",
          "",
          _config?.preserveLargeIntegers
        ) as CommitmentsSavingsScalarResponse;
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
   * @params response Response returned by the server for a request to getCommitmentsSavingsTimeseries
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCommitmentsSavingsTimeseries(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<CommitmentsSavingsTimeseriesResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CommitmentsSavingsTimeseriesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "CommitmentsSavingsTimeseriesResponse",
          "",
          _config?.preserveLargeIntegers
        ) as CommitmentsSavingsTimeseriesResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: CommitmentsSavingsTimeseriesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "CommitmentsSavingsTimeseriesResponse",
          "",
          _config?.preserveLargeIntegers
        ) as CommitmentsSavingsTimeseriesResponse;
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
   * @params response Response returned by the server for a request to getCommitmentsUtilizationScalar
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCommitmentsUtilizationScalar(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<CommitmentsUtilizationScalarResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CommitmentsUtilizationScalarResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "CommitmentsUtilizationScalarResponse",
          "",
          _config?.preserveLargeIntegers
        ) as CommitmentsUtilizationScalarResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: CommitmentsUtilizationScalarResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "CommitmentsUtilizationScalarResponse",
          "",
          _config?.preserveLargeIntegers
        ) as CommitmentsUtilizationScalarResponse;
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
   * @params response Response returned by the server for a request to getCommitmentsUtilizationTimeseries
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCommitmentsUtilizationTimeseries(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<CommitmentsUtilizationTimeseriesResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CommitmentsUtilizationTimeseriesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "CommitmentsUtilizationTimeseriesResponse",
          "",
          _config?.preserveLargeIntegers
        ) as CommitmentsUtilizationTimeseriesResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: CommitmentsUtilizationTimeseriesResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "CommitmentsUtilizationTimeseriesResponse",
          "",
          _config?.preserveLargeIntegers
        ) as CommitmentsUtilizationTimeseriesResponse;
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
   * @params response Response returned by the server for a request to getCostAccountFilters
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCostAccountFilters(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<AccountFiltersResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AccountFiltersResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "AccountFiltersResponse",
        "",
        _config?.preserveLargeIntegers
      ) as AccountFiltersResponse;
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
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: AccountFiltersResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "AccountFiltersResponse",
        "",
        _config?.preserveLargeIntegers
      ) as AccountFiltersResponse;
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
   * @params response Response returned by the server for a request to getCostAnomaly
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCostAnomaly(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<CostAnomalyResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CostAnomalyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CostAnomalyResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CostAnomalyResponse;
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
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: CostAnomalyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CostAnomalyResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CostAnomalyResponse;
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
   * @params response Response returned by the server for a request to getCostAWSCURConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCostAWSCURConfig(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<AwsCurConfigResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AwsCurConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "AwsCurConfigResponse",
        "",
        _config?.preserveLargeIntegers
      ) as AwsCurConfigResponse;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: AwsCurConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "AwsCurConfigResponse",
        "",
        _config?.preserveLargeIntegers
      ) as AwsCurConfigResponse;
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
   * @params response Response returned by the server for a request to getCostAzureUCConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCostAzureUCConfig(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<UCConfigPair> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: UCConfigPair = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "UCConfigPair",
        "",
        _config?.preserveLargeIntegers
      ) as UCConfigPair;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: UCConfigPair = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "UCConfigPair",
        "",
        _config?.preserveLargeIntegers
      ) as UCConfigPair;
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
   * @params response Response returned by the server for a request to getCostGCPUsageCostConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCostGCPUsageCostConfig(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<GcpUcConfigResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GcpUcConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "GcpUcConfigResponse",
        "",
        _config?.preserveLargeIntegers
      ) as GcpUcConfigResponse;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: GcpUcConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "GcpUcConfigResponse",
        "",
        _config?.preserveLargeIntegers
      ) as GcpUcConfigResponse;
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
   * @params response Response returned by the server for a request to getCostTagDescriptionByKey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCostTagDescriptionByKey(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<CostTagDescriptionResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CostTagDescriptionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CostTagDescriptionResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CostTagDescriptionResponse;
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
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: CostTagDescriptionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CostTagDescriptionResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CostTagDescriptionResponse;
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
   * @params response Response returned by the server for a request to getCostTagKey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCostTagKey(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<CostTagKeyResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CostTagKeyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CostTagKeyResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CostTagKeyResponse;
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
        _config?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: CostTagKeyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CostTagKeyResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CostTagKeyResponse;
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
   * @params response Response returned by the server for a request to getCostTagMetadataCurrency
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCostTagMetadataCurrency(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<CostCurrencyResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CostCurrencyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CostCurrencyResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CostCurrencyResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: CostCurrencyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CostCurrencyResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CostCurrencyResponse;
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
   * @params response Response returned by the server for a request to getCustomAllocationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCustomAllocationRule(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<ArbitraryRuleResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ArbitraryRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "ArbitraryRuleResponse",
        "",
        _config?.preserveLargeIntegers
      ) as ArbitraryRuleResponse;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: ArbitraryRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "ArbitraryRuleResponse",
        "",
        _config?.preserveLargeIntegers
      ) as ArbitraryRuleResponse;
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
   * @params response Response returned by the server for a request to getCustomCostsFile
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCustomCostsFile(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<CustomCostsFileGetResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CustomCostsFileGetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CustomCostsFileGetResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CustomCostsFileGetResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: CustomCostsFileGetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CustomCostsFileGetResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CustomCostsFileGetResponse;
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
   * @params response Response returned by the server for a request to getCustomForecast
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCustomForecast(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<CustomForecastResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CustomForecastResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CustomForecastResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CustomForecastResponse;
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
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: CustomForecastResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CustomForecastResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CustomForecastResponse;
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
   * @params response Response returned by the server for a request to getTagPipelinesRuleset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTagPipelinesRuleset(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<RulesetResp> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RulesetResp = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "RulesetResp",
        "",
        _config?.preserveLargeIntegers
      ) as RulesetResp;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: RulesetResp = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "RulesetResp",
        "",
        _config?.preserveLargeIntegers
      ) as RulesetResp;
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
   * @params response Response returned by the server for a request to getUnitCost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getUnitCost(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<UnitCostResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: UnitCostResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "UnitCostResponse",
        "",
        _config?.preserveLargeIntegers
      ) as UnitCostResponse;
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
        _config?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: UnitCostResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "UnitCostResponse",
        "",
        _config?.preserveLargeIntegers
      ) as UnitCostResponse;
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
   * @params response Response returned by the server for a request to listBudgets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listBudgets(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<BudgetArray> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: BudgetArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "BudgetArray",
        "",
        _config?.preserveLargeIntegers
      ) as BudgetArray;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: BudgetArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "BudgetArray",
        "",
        _config?.preserveLargeIntegers
      ) as BudgetArray;
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
   * @params response Response returned by the server for a request to listCostAnomalies
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCostAnomalies(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<CostAnomaliesResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CostAnomaliesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CostAnomaliesResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CostAnomaliesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: CostAnomaliesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CostAnomaliesResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CostAnomaliesResponse;
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
   * @params response Response returned by the server for a request to listCostAWSCURConfigs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCostAWSCURConfigs(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<AwsCURConfigsResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AwsCURConfigsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "AwsCURConfigsResponse",
        "",
        _config?.preserveLargeIntegers
      ) as AwsCURConfigsResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: AwsCURConfigsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "AwsCURConfigsResponse",
        "",
        _config?.preserveLargeIntegers
      ) as AwsCURConfigsResponse;
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
   * @params response Response returned by the server for a request to listCostAzureUCConfigs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCostAzureUCConfigs(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<AzureUCConfigsResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AzureUCConfigsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "AzureUCConfigsResponse",
        "",
        _config?.preserveLargeIntegers
      ) as AzureUCConfigsResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: AzureUCConfigsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "AzureUCConfigsResponse",
        "",
        _config?.preserveLargeIntegers
      ) as AzureUCConfigsResponse;
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
   * @params response Response returned by the server for a request to listCostCloudAccountsV2
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCostCloudAccountsV2(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<CloudCostAccountsResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CloudCostAccountsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CloudCostAccountsResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CloudCostAccountsResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: CloudCostAccountsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CloudCostAccountsResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CloudCostAccountsResponse;
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
   * @params response Response returned by the server for a request to listCostGCPUsageCostConfigs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCostGCPUsageCostConfigs(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<GCPUsageCostConfigsResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GCPUsageCostConfigsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "GCPUsageCostConfigsResponse",
        "",
        _config?.preserveLargeIntegers
      ) as GCPUsageCostConfigsResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: GCPUsageCostConfigsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "GCPUsageCostConfigsResponse",
        "",
        _config?.preserveLargeIntegers
      ) as GCPUsageCostConfigsResponse;
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
   * @params response Response returned by the server for a request to listCostOCIConfigs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCostOCIConfigs(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<OCIConfigsResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: OCIConfigsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "OCIConfigsResponse",
        "",
        _config?.preserveLargeIntegers
      ) as OCIConfigsResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: OCIConfigsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "OCIConfigsResponse",
        "",
        _config?.preserveLargeIntegers
      ) as OCIConfigsResponse;
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
   * @params response Response returned by the server for a request to listCostTagDescriptions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCostTagDescriptions(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<CostTagDescriptionsResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CostTagDescriptionsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CostTagDescriptionsResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CostTagDescriptionsResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: CostTagDescriptionsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CostTagDescriptionsResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CostTagDescriptionsResponse;
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
   * @params response Response returned by the server for a request to listCostTagKeys
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCostTagKeys(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<CostTagKeysResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CostTagKeysResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CostTagKeysResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CostTagKeysResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: CostTagKeysResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CostTagKeysResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CostTagKeysResponse;
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
   * @params response Response returned by the server for a request to listCostTagKeySources
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCostTagKeySources(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<CostTagKeySourcesResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CostTagKeySourcesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CostTagKeySourcesResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CostTagKeySourcesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: CostTagKeySourcesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CostTagKeySourcesResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CostTagKeySourcesResponse;
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
   * @params response Response returned by the server for a request to listCostTagMetadata
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCostTagMetadata(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<CostTagKeyMetadataResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CostTagKeyMetadataResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CostTagKeyMetadataResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CostTagKeyMetadataResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: CostTagKeyMetadataResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CostTagKeyMetadataResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CostTagKeyMetadataResponse;
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
   * @params response Response returned by the server for a request to listCostTagMetadataMetrics
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCostTagMetadataMetrics(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<CostMetricsResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CostMetricsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CostMetricsResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CostMetricsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: CostMetricsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CostMetricsResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CostMetricsResponse;
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
   * @params response Response returned by the server for a request to listCostTagMetadataMonths
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCostTagMetadataMonths(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<CostTagMetadataMonthsResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CostTagMetadataMonthsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CostTagMetadataMonthsResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CostTagMetadataMonthsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: CostTagMetadataMonthsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CostTagMetadataMonthsResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CostTagMetadataMonthsResponse;
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
   * @params response Response returned by the server for a request to listCostTagMetadataOrchestrators
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCostTagMetadataOrchestrators(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<CostOrchestratorsResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CostOrchestratorsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CostOrchestratorsResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CostOrchestratorsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: CostOrchestratorsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CostOrchestratorsResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CostOrchestratorsResponse;
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
   * @params response Response returned by the server for a request to listCostTags
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCostTags(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<CostTagsResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CostTagsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CostTagsResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CostTagsResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: CostTagsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CostTagsResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CostTagsResponse;
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
   * @params response Response returned by the server for a request to listCustomAllocationRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCustomAllocationRules(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<ArbitraryRuleResponseArray> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ArbitraryRuleResponseArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "ArbitraryRuleResponseArray",
        "",
        _config?.preserveLargeIntegers
      ) as ArbitraryRuleResponseArray;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: ArbitraryRuleResponseArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "ArbitraryRuleResponseArray",
        "",
        _config?.preserveLargeIntegers
      ) as ArbitraryRuleResponseArray;
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
   * @params response Response returned by the server for a request to listCustomAllocationRulesStatus
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCustomAllocationRulesStatus(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<ArbitraryRuleStatusResponseArray> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ArbitraryRuleStatusResponseArray =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "ArbitraryRuleStatusResponseArray",
          "",
          _config?.preserveLargeIntegers
        ) as ArbitraryRuleStatusResponseArray;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: ArbitraryRuleStatusResponseArray =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            _config?.preserveLargeIntegers
          ),
          "ArbitraryRuleStatusResponseArray",
          "",
          _config?.preserveLargeIntegers
        ) as ArbitraryRuleStatusResponseArray;
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
   * @params response Response returned by the server for a request to listCustomCostsFiles
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCustomCostsFiles(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<CustomCostsFileListResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CustomCostsFileListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CustomCostsFileListResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CustomCostsFileListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: CustomCostsFileListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CustomCostsFileListResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CustomCostsFileListResponse;
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
   * @params response Response returned by the server for a request to listTagPipelinesRulesets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTagPipelinesRulesets(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<RulesetRespArray> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RulesetRespArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "RulesetRespArray",
        "",
        _config?.preserveLargeIntegers
      ) as RulesetRespArray;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: RulesetRespArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "RulesetRespArray",
        "",
        _config?.preserveLargeIntegers
      ) as RulesetRespArray;
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
   * @params response Response returned by the server for a request to listTagPipelinesRulesetsStatus
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTagPipelinesRulesetsStatus(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<RulesetStatusRespArray> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RulesetStatusRespArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "RulesetStatusRespArray",
        "",
        _config?.preserveLargeIntegers
      ) as RulesetStatusRespArray;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: RulesetStatusRespArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "RulesetStatusRespArray",
        "",
        _config?.preserveLargeIntegers
      ) as RulesetStatusRespArray;
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
   * @params response Response returned by the server for a request to listUnitCosts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listUnitCosts(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<UnitCostsResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: UnitCostsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "UnitCostsResponse",
        "",
        _config?.preserveLargeIntegers
      ) as UnitCostsResponse;
      return body;
    }
    if (response.httpStatusCode === 403) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: UnitCostsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "UnitCostsResponse",
        "",
        _config?.preserveLargeIntegers
      ) as UnitCostsResponse;
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
   * @params response Response returned by the server for a request to reorderCustomAllocationRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async reorderCustomAllocationRules(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<void> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to reorderTagPipelinesRulesets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async reorderTagPipelinesRulesets(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<void> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to searchCostRecommendations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchCostRecommendations(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<CostRecommendationArray> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CostRecommendationArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CostRecommendationArray",
        "",
        _config?.preserveLargeIntegers
      ) as CostRecommendationArray;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: CostRecommendationArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CostRecommendationArray",
        "",
        _config?.preserveLargeIntegers
      ) as CostRecommendationArray;
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
   * @params response Response returned by the server for a request to updateCostAccountFilters
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateCostAccountFilters(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<AccountFiltersResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AccountFiltersResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "AccountFiltersResponse",
        "",
        _config?.preserveLargeIntegers
      ) as AccountFiltersResponse;
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
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: AccountFiltersResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "AccountFiltersResponse",
        "",
        _config?.preserveLargeIntegers
      ) as AccountFiltersResponse;
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
   * @params response Response returned by the server for a request to updateCostAWSCURConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateCostAWSCURConfig(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<AwsCURConfigsResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AwsCURConfigsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "AwsCURConfigsResponse",
        "",
        _config?.preserveLargeIntegers
      ) as AwsCURConfigsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: AwsCURConfigsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "AwsCURConfigsResponse",
        "",
        _config?.preserveLargeIntegers
      ) as AwsCURConfigsResponse;
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
   * @params response Response returned by the server for a request to updateCostAzureUCConfigs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateCostAzureUCConfigs(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<AzureUCConfigPairsResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AzureUCConfigPairsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "AzureUCConfigPairsResponse",
        "",
        _config?.preserveLargeIntegers
      ) as AzureUCConfigPairsResponse;
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
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: AzureUCConfigPairsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "AzureUCConfigPairsResponse",
        "",
        _config?.preserveLargeIntegers
      ) as AzureUCConfigPairsResponse;
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
   * @params response Response returned by the server for a request to updateCostGCPUsageCostConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateCostGCPUsageCostConfig(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<GCPUsageCostConfigResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GCPUsageCostConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "GCPUsageCostConfigResponse",
        "",
        _config?.preserveLargeIntegers
      ) as GCPUsageCostConfigResponse;
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
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: GCPUsageCostConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "GCPUsageCostConfigResponse",
        "",
        _config?.preserveLargeIntegers
      ) as GCPUsageCostConfigResponse;
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
   * @params response Response returned by the server for a request to updateCustomAllocationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateCustomAllocationRule(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<ArbitraryRuleResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ArbitraryRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "ArbitraryRuleResponse",
        "",
        _config?.preserveLargeIntegers
      ) as ArbitraryRuleResponse;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: ArbitraryRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "ArbitraryRuleResponse",
        "",
        _config?.preserveLargeIntegers
      ) as ArbitraryRuleResponse;
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
   * @params response Response returned by the server for a request to updateTagPipelinesRuleset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateTagPipelinesRuleset(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<RulesetResp> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RulesetResp = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "RulesetResp",
        "",
        _config?.preserveLargeIntegers
      ) as RulesetResp;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: RulesetResp = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "RulesetResp",
        "",
        _config?.preserveLargeIntegers
      ) as RulesetResp;
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
   * @params response Response returned by the server for a request to updateUnitCost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateUnitCost(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<UnitCostResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: UnitCostResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "UnitCostResponse",
        "",
        _config?.preserveLargeIntegers
      ) as UnitCostResponse;
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
        _config?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: UnitCostResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "UnitCostResponse",
        "",
        _config?.preserveLargeIntegers
      ) as UnitCostResponse;
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
   * @params response Response returned by the server for a request to uploadCustomCostsFile
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async uploadCustomCostsFile(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<CustomCostsFileUploadResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 202) {
      const body: CustomCostsFileUploadResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CustomCostsFileUploadResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CustomCostsFileUploadResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: CustomCostsFileUploadResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CustomCostsFileUploadResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CustomCostsFileUploadResponse;
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
   * @params response Response returned by the server for a request to upsertBudget
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async upsertBudget(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<BudgetWithEntries> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: BudgetWithEntries = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "BudgetWithEntries",
        "",
        _config?.preserveLargeIntegers
      ) as BudgetWithEntries;
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
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: BudgetWithEntries = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "BudgetWithEntries",
        "",
        _config?.preserveLargeIntegers
      ) as BudgetWithEntries;
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
   * @params response Response returned by the server for a request to upsertCostTagDescriptionByKey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async upsertCostTagDescriptionByKey(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<void> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to upsertCustomForecast
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async upsertCustomForecast(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<CustomForecastResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CustomForecastResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CustomForecastResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CustomForecastResponse;
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
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: CustomForecastResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "CustomForecastResponse",
        "",
        _config?.preserveLargeIntegers
      ) as CustomForecastResponse;
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
   * @params response Response returned by the server for a request to validateBudget
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async validateBudget(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<BudgetValidationResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: BudgetValidationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "BudgetValidationResponse",
        "",
        _config?.preserveLargeIntegers
      ) as BudgetValidationResponse;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: BudgetValidationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "BudgetValidationResponse",
        "",
        _config?.preserveLargeIntegers
      ) as BudgetValidationResponse;
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
   * @params response Response returned by the server for a request to validateCsvBudget
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async validateCsvBudget(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<ValidationResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ValidationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "ValidationResponse",
        "",
        _config?.preserveLargeIntegers
      ) as ValidationResponse;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: ValidationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "ValidationResponse",
        "",
        _config?.preserveLargeIntegers
      ) as ValidationResponse;
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
   * @params response Response returned by the server for a request to validateQuery
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async validateQuery(
    response: ResponseContext,
    _options?: Configuration
  ): Promise<RulesValidateQueryResponse> {
    const _config = _options || this.configuration;
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RulesValidateQueryResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "RulesValidateQueryResponse",
        "",
        _config?.preserveLargeIntegers
      ) as RulesValidateQueryResponse;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        _config?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          _config?.preserveLargeIntegers
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
      const body: RulesValidateQueryResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          _config?.preserveLargeIntegers
        ),
        "RulesValidateQueryResponse",
        "",
        _config?.preserveLargeIntegers
      ) as RulesValidateQueryResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface CloudCostManagementApiCreateCostAWSCURConfigRequest {
  /**
   * @type AwsCURConfigPostRequest
   */
  body: AwsCURConfigPostRequest;
}

export interface CloudCostManagementApiCreateCostAzureUCConfigsRequest {
  /**
   * @type AzureUCConfigPostRequest
   */
  body: AzureUCConfigPostRequest;
}

export interface CloudCostManagementApiCreateCostGCPUsageCostConfigRequest {
  /**
   * @type GCPUsageCostConfigPostRequest
   */
  body: GCPUsageCostConfigPostRequest;
}

export interface CloudCostManagementApiCreateCustomAllocationRuleRequest {
  /**
   * @type ArbitraryCostUpsertRequest
   */
  body: ArbitraryCostUpsertRequest;
}

export interface CloudCostManagementApiCreateTagPipelinesRulesetRequest {
  /**
   * @type CreateRulesetRequest
   */
  body: CreateRulesetRequest;
}

export interface CloudCostManagementApiCreateUnitCostRequest {
  /**
   * @type UnitCostCreateRequest
   */
  body: UnitCostCreateRequest;
}

export interface CloudCostManagementApiDeleteBudgetRequest {
  /**
   * Budget id.
   * @type string
   */
  budgetId: string;
}

export interface CloudCostManagementApiDeleteCostAWSCURConfigRequest {
  /**
   * Cloud Account id.
   * @type number
   */
  cloudAccountId: number;
}

export interface CloudCostManagementApiDeleteCostAzureUCConfigRequest {
  /**
   * Cloud Account id.
   * @type number
   */
  cloudAccountId: number;
}

export interface CloudCostManagementApiDeleteCostGCPUsageCostConfigRequest {
  /**
   * Cloud Account id.
   * @type number
   */
  cloudAccountId: number;
}

export interface CloudCostManagementApiDeleteCostTagDescriptionByKeyRequest {
  /**
   * The tag key whose description is being deleted.
   * @type string
   */
  tagKey: string;
  /**
   * Cloud provider to scope the deletion to (for example, `aws`). Omit to delete every description for the tag key.
   * @type string
   */
  cloud?: string;
}

export interface CloudCostManagementApiDeleteCustomAllocationRuleRequest {
  /**
   * The unique identifier of the custom allocation rule
   * @type number
   */
  ruleId: number;
}

export interface CloudCostManagementApiDeleteCustomCostsFileRequest {
  /**
   * File ID.
   * @type string
   */
  fileId: string;
}

export interface CloudCostManagementApiDeleteCustomForecastRequest {
  /**
   * Budget id.
   * @type string
   */
  budgetId: string;
}

export interface CloudCostManagementApiDeleteTagPipelinesRulesetRequest {
  /**
   * The unique identifier of the ruleset
   * @type string
   */
  rulesetId: string;
}

export interface CloudCostManagementApiDeleteUnitCostRequest {
  /**
   * The UUID of the unit cost.
   * @type string
   */
  unitCostId: string;
}

export interface CloudCostManagementApiGenerateCostTagDescriptionByKeyRequest {
  /**
   * The tag key to generate an AI description for.
   * @type string
   */
  tagKey: string;
}

export interface CloudCostManagementApiGetBudgetRequest {
  /**
   * Budget id.
   * @type string
   */
  budgetId: string;
  /**
   * When `true`, includes actual cost data in the response.
   * @type boolean
   */
  actual?: boolean;
  /**
   * When `true`, includes forecast cost data in the response, including `ootb_forecast` and `custom_forecast` per entry.
   * @type boolean
   */
  forecast?: boolean;
  /**
   * Start of the cost window in milliseconds since epoch. Must be used together with `end`.
   * @type number
   */
  start?: number;
  /**
   * End of the cost window in milliseconds since epoch. Must be used together with `start`.
   * @type number
   */
  end?: number;
}

export interface CloudCostManagementApiGetCommitmentsCommitmentListRequest {
  /**
   * Cloud provider for commitment programs (aws or azure).
   * @type CommitmentsProvider
   */
  provider: CommitmentsProvider;
  /**
   * Cloud product identifier (for example, ec2, rds, virtualmachines).
   * @type string
   */
  product: string;
  /**
   * Start of the query time range in Unix milliseconds.
   * @type number
   */
  start: number;
  /**
   * End of the query time range in Unix milliseconds.
   * @type number
   */
  end: number;
  /**
   * Optional filter expression to narrow down results.
   * @type string
   */
  filterBy?: string;
  /**
   * Type of commitment to query. ri for Reserved Instances, sp for Savings Plans. Defaults to ri.
   * @type CommitmentsCommitmentType
   */
  commitmentType?: CommitmentsCommitmentType;
}

export interface CloudCostManagementApiGetCommitmentsCoverageScalarRequest {
  /**
   * Cloud provider for commitment programs (aws or azure).
   * @type CommitmentsProvider
   */
  provider: CommitmentsProvider;
  /**
   * Cloud product identifier (for example, ec2, rds, virtualmachines).
   * @type string
   */
  product: string;
  /**
   * Start of the query time range in Unix milliseconds.
   * @type number
   */
  start: number;
  /**
   * End of the query time range in Unix milliseconds.
   * @type number
   */
  end: number;
  /**
   * Optional filter expression to narrow down results.
   * @type string
   */
  filterBy?: string;
}

export interface CloudCostManagementApiGetCommitmentsCoverageTimeseriesRequest {
  /**
   * Cloud provider for commitment programs (aws or azure).
   * @type CommitmentsProvider
   */
  provider: CommitmentsProvider;
  /**
   * Cloud product identifier (for example, ec2, rds, virtualmachines).
   * @type string
   */
  product: string;
  /**
   * Start of the query time range in Unix milliseconds.
   * @type number
   */
  start: number;
  /**
   * End of the query time range in Unix milliseconds.
   * @type number
   */
  end: number;
  /**
   * Optional filter expression to narrow down results.
   * @type string
   */
  filterBy?: string;
}

export interface CloudCostManagementApiGetCommitmentsOnDemandHotspotsScalarRequest {
  /**
   * Cloud provider for commitment programs (aws or azure).
   * @type CommitmentsProvider
   */
  provider: CommitmentsProvider;
  /**
   * Cloud product identifier (for example, ec2, rds, virtualmachines).
   * @type string
   */
  product: string;
  /**
   * Start of the query time range in Unix milliseconds.
   * @type number
   */
  start: number;
  /**
   * End of the query time range in Unix milliseconds.
   * @type number
   */
  end: number;
  /**
   * Optional filter expression to narrow down results.
   * @type string
   */
  filterBy?: string;
}

export interface CloudCostManagementApiGetCommitmentsSavingsScalarRequest {
  /**
   * Cloud provider for commitment programs (aws or azure).
   * @type CommitmentsProvider
   */
  provider: CommitmentsProvider;
  /**
   * Cloud product identifier (for example, ec2, rds, virtualmachines).
   * @type string
   */
  product: string;
  /**
   * Start of the query time range in Unix milliseconds.
   * @type number
   */
  start: number;
  /**
   * End of the query time range in Unix milliseconds.
   * @type number
   */
  end: number;
  /**
   * Optional filter expression to narrow down results.
   * @type string
   */
  filterBy?: string;
}

export interface CloudCostManagementApiGetCommitmentsSavingsTimeseriesRequest {
  /**
   * Cloud provider for commitment programs (aws or azure).
   * @type CommitmentsProvider
   */
  provider: CommitmentsProvider;
  /**
   * Cloud product identifier (for example, ec2, rds, virtualmachines).
   * @type string
   */
  product: string;
  /**
   * Start of the query time range in Unix milliseconds.
   * @type number
   */
  start: number;
  /**
   * End of the query time range in Unix milliseconds.
   * @type number
   */
  end: number;
  /**
   * Optional filter expression to narrow down results.
   * @type string
   */
  filterBy?: string;
}

export interface CloudCostManagementApiGetCommitmentsUtilizationScalarRequest {
  /**
   * Cloud provider for commitment programs (aws or azure).
   * @type CommitmentsProvider
   */
  provider: CommitmentsProvider;
  /**
   * Cloud product identifier (for example, ec2, rds, virtualmachines).
   * @type string
   */
  product: string;
  /**
   * Start of the query time range in Unix milliseconds.
   * @type number
   */
  start: number;
  /**
   * End of the query time range in Unix milliseconds.
   * @type number
   */
  end: number;
  /**
   * Optional filter expression to narrow down results.
   * @type string
   */
  filterBy?: string;
  /**
   * Type of commitment to query. ri for Reserved Instances, sp for Savings Plans. Defaults to ri.
   * @type CommitmentsCommitmentType
   */
  commitmentType?: CommitmentsCommitmentType;
}

export interface CloudCostManagementApiGetCommitmentsUtilizationTimeseriesRequest {
  /**
   * Cloud provider for commitment programs (aws or azure).
   * @type CommitmentsProvider
   */
  provider: CommitmentsProvider;
  /**
   * Cloud product identifier (for example, ec2, rds, virtualmachines).
   * @type string
   */
  product: string;
  /**
   * Start of the query time range in Unix milliseconds.
   * @type number
   */
  start: number;
  /**
   * End of the query time range in Unix milliseconds.
   * @type number
   */
  end: number;
  /**
   * Optional filter expression to narrow down results.
   * @type string
   */
  filterBy?: string;
  /**
   * Type of commitment to query. ri for Reserved Instances, sp for Savings Plans. Defaults to ri.
   * @type CommitmentsCommitmentType
   */
  commitmentType?: CommitmentsCommitmentType;
}

export interface CloudCostManagementApiGetCostAccountFiltersRequest {
  /**
   * Cloud Account id.
   * @type number
   */
  cloudAccountId: number;
}

export interface CloudCostManagementApiGetCostAnomalyRequest {
  /**
   * The UUID of the cost anomaly.
   * @type string
   */
  anomalyId: string;
}

export interface CloudCostManagementApiGetCostAWSCURConfigRequest {
  /**
   * The unique identifier of the cloud account
   * @type number
   */
  cloudAccountId: number;
}

export interface CloudCostManagementApiGetCostAzureUCConfigRequest {
  /**
   * The unique identifier of the cloud account
   * @type number
   */
  cloudAccountId: number;
}

export interface CloudCostManagementApiGetCostGCPUsageCostConfigRequest {
  /**
   * The unique identifier of the cloud account
   * @type number
   */
  cloudAccountId: number;
}

export interface CloudCostManagementApiGetCostTagDescriptionByKeyRequest {
  /**
   * The tag key whose description is being fetched.
   * @type string
   */
  tagKey: string;
  /**
   * Cloud provider to scope the lookup to (for example, `aws`). Omit to use the resolved fallback.
   * @type string
   */
  filterCloud?: string;
}

export interface CloudCostManagementApiGetCostTagKeyRequest {
  /**
   * The Cloud Cost Management tag key. Tag keys can contain forward slashes (for example, `kubernetes/instance`).
   * @type string
   */
  tagKey: string;
  /**
   * The Cloud Cost Management metric to scope the tag key details to. When omitted, returns details across all metrics.
   * @type string
   */
  filterMetric?: string;
  /**
   * Controls the size of the internal tag value search scope. This does **not** restrict the number of example tag values returned in the response. Defaults to 50, maximum 10000.
   * @type number
   */
  pageSize?: number;
}

export interface CloudCostManagementApiGetCostTagMetadataCurrencyRequest {
  /**
   * The month to scope the query to, in `YYYY-MM` format.
   * @type string
   */
  filterMonth: string;
  /**
   * Filter results to a specific provider. Common cloud values are `aws`, `azure`, `gcp`, `Oracle` (OCI), and `custom`. SaaS billing integrations (for example, `Snowflake`, `MongoDB`, `Databricks`) are also accepted using their display-name string. Values are case-sensitive.
   * @type string
   */
  filterProvider?: string;
}

export interface CloudCostManagementApiGetCustomAllocationRuleRequest {
  /**
   * The unique identifier of the custom allocation rule
   * @type number
   */
  ruleId: number;
}

export interface CloudCostManagementApiGetCustomCostsFileRequest {
  /**
   * File ID.
   * @type string
   */
  fileId: string;
}

export interface CloudCostManagementApiGetCustomForecastRequest {
  /**
   * Budget id.
   * @type string
   */
  budgetId: string;
}

export interface CloudCostManagementApiGetTagPipelinesRulesetRequest {
  /**
   * The unique identifier of the ruleset
   * @type string
   */
  rulesetId: string;
}

export interface CloudCostManagementApiGetUnitCostRequest {
  /**
   * The UUID of the unit cost.
   * @type string
   */
  unitCostId: string;
}

export interface CloudCostManagementApiListCostAnomaliesRequest {
  /**
   * Start time as Unix milliseconds. Defaults to the start of the latest stable seven-day window.
   * @type number
   */
  start?: number;
  /**
   * End time as Unix milliseconds. Defaults to the end of the latest stable seven-day window.
   * @type number
   */
  end?: number;
  /**
   * Optional JSON object mapping cost tag keys to allowed values, for example `{"team":["payments"],"env":["prod"]}`. Filters match anomaly dimensions or correlated tags.
   * @type string
   */
  filter?: string;
  /**
   * Minimum absolute anomalous cost change to include. Numeric value; defaults to `1`.
   * @type string
   */
  minAnomalousThreshold?: string;
  /**
   * Minimum absolute actual cost to include. Numeric value; defaults to `0`.
   * @type string
   */
  minCostThreshold?: string;
  /**
   * Filter by resolution state. Use `none` for unresolved anomalies, `all` or `*` for resolved anomalies, or a comma-separated list of causes.
   * @type string
   */
  dismissalCause?: string;
  /**
   * Sort field. One of `start_date`, `end_date`, `duration`, `max_cost`, `anomalous_cost`, or `dismissal_date`. Defaults to `anomalous_cost`.
   * @type string
   */
  orderBy?: string;
  /**
   * Sort direction. One of `asc` or `desc`. Defaults to `desc`.
   * @type string
   */
  order?: string;
  /**
   * Maximum number of anomalies to return. Defaults to `200`.
   * @type number
   */
  limit?: number;
  /**
   * Pagination offset. Defaults to `0`.
   * @type number
   */
  offset?: number;
  /**
   * Optional repeated cloud or SaaS provider filters, such as `aws`, `gcp`, `azure`, `Oracle`, `datadog`, `OpenAI`, or `Anthropic`.
   * @type Array<string>
   */
  providerIds?: Array<string>;
}

export interface CloudCostManagementApiListCostCloudAccountsV2Request {
  /**
   * Filter by cloud, either `oci` or `aws_cur2` (case insensitive). Omit or leave empty to return both.
   * @type string
   */
  filterCloud?: string;
}

export interface CloudCostManagementApiListCostTagDescriptionsRequest {
  /**
   * Filter descriptions to a specific cloud provider (for example, `aws`). Omit to return descriptions across all clouds.
   * @type string
   */
  filterCloud?: string;
}

export interface CloudCostManagementApiListCostTagKeysRequest {
  /**
   * The Cloud Cost Management metric to scope the tag keys to. When omitted, returns tag keys across all metrics.
   * @type string
   */
  filterMetric?: string;
  /**
   * Filter to return only tag keys that appear with the given `key:value` tag values. For example, `filter[tags]=providername:aws` returns tag keys found on the same cost data, such as `is_aws_ec2_compute` and `aws_instance_type`.
   * @type Array<string>
   */
  filterTags?: Array<string>;
}

export interface CloudCostManagementApiListCostTagKeySourcesRequest {
  /**
   * The month to scope the query to, in `YYYY-MM` format.
   * @type string
   */
  filterMonth: string;
  /**
   * Filter results to a specific provider. Common cloud values are `aws`, `azure`, `gcp`, `Oracle` (OCI), and `custom`. SaaS billing integrations (for example, `Snowflake`, `MongoDB`, `Databricks`) are also accepted using their display-name string. Values are case-sensitive.
   * @type string
   */
  filterProvider?: string;
  /**
   * Filter results to tag keys that have data for a specific Cloud Cost Management metric (for example, `aws.cost.net.amortized`). When omitted, all tag keys for the requested period are returned.
   * @type string
   */
  filterMetric?: string;
}

export interface CloudCostManagementApiListCostTagMetadataRequest {
  /**
   * The month to scope the query to, in `YYYY-MM` format.
   * @type string
   */
  filterMonth: string;
  /**
   * Filter results to a specific provider. Common cloud values are `aws`, `azure`, `gcp`, `Oracle` (OCI), and `custom`. SaaS billing integrations (for example, `Snowflake`, `MongoDB`, `Databricks`) are also accepted using their display-name string. Values are case-sensitive.
   * @type string
   */
  filterProvider?: string;
  /**
   * Filter results to a specific Cloud Cost Management metric (for example, `aws.cost.net.amortized`). When omitted, every available metric for the requested period is returned.
   * @type string
   */
  filterMetric?: string;
  /**
   * Restrict results to a single tag key.
   * @type string
   */
  filterTagKey?: string;
  /**
   * When `true`, return one row per day with the day in the `date` attribute. Defaults to the monthly roll-up when omitted.
   * @type CostTagMetadataDailyFilter
   */
  filterDaily?: CostTagMetadataDailyFilter;
}

export interface CloudCostManagementApiListCostTagMetadataMetricsRequest {
  /**
   * The month to scope the query to, in `YYYY-MM` format.
   * @type string
   */
  filterMonth: string;
  /**
   * Filter results to a specific provider. Common cloud values are `aws`, `azure`, `gcp`, `Oracle` (OCI), and `custom`. SaaS billing integrations (for example, `Snowflake`, `MongoDB`, `Databricks`) are also accepted using their display-name string. Values are case-sensitive.
   * @type string
   */
  filterProvider?: string;
}

export interface CloudCostManagementApiListCostTagMetadataMonthsRequest {
  /**
   * Provider to scope the query to. Use the value of the `providername` tag in CCM
   * (for example, `aws`, `azure`, `gcp`, `Oracle`, `Confluent Cloud`, `Snowflake`).
   * For costs uploaded through the Custom Costs API, use `custom`.
   * Values are case-sensitive.
   * @type string
   */
  filterProvider: string;
}

export interface CloudCostManagementApiListCostTagMetadataOrchestratorsRequest {
  /**
   * The month to scope the query to, in `YYYY-MM` format.
   * @type string
   */
  filterMonth: string;
  /**
   * Filter results to a specific provider. Common cloud values are `aws`, `azure`, `gcp`, `Oracle` (OCI), and `custom`. SaaS billing integrations (for example, `Snowflake`, `MongoDB`, `Databricks`) are also accepted using their display-name string. Values are case-sensitive.
   * @type string
   */
  filterProvider?: string;
}

export interface CloudCostManagementApiListCostTagsRequest {
  /**
   * The Cloud Cost Management metric to scope the tags to. When omitted, returns tags across all metrics.
   * @type string
   */
  filterMetric?: string;
  /**
   * A substring used to filter the returned tags by name.
   * @type string
   */
  filterMatch?: string;
  /**
   * Filter to return only tags that appear with the given `key:value` tag values. For example, `filter[tags]=providername:aws` returns tags found on the same cost data, such as `aws_instance_type:t3.micro` and `aws_instance_type:m5.large`.
   * @type Array<string>
   */
  filterTags?: Array<string>;
  /**
   * Restrict the returned tags to those whose key matches one of the given tag keys.
   * @type Array<string>
   */
  filterTagKeys?: Array<string>;
  /**
   * Controls the size of the internal tag search scope. This does **not** restrict the number of tags returned in the response. Defaults to 50, maximum 10000.
   * @type number
   */
  pageSize?: number;
}

export interface CloudCostManagementApiListCustomCostsFilesRequest {
  /**
   * Page number for pagination
   * @type number
   */
  pageNumber?: number;
  /**
   * Page size for pagination
   * @type number
   */
  pageSize?: number;
  /**
   * Filter by file status
   * @type string
   */
  filterStatus?: string;
  /**
   * Filter files by name with case-insensitive substring matching.
   * @type string
   */
  filterName?: string;
  /**
   * Filter by provider.
   * @type Array<string>
   */
  filterProvider?: Array<string>;
  /**
   * Sort key with optional descending prefix
   * @type string
   */
  sort?: string;
}

export interface CloudCostManagementApiReorderCustomAllocationRulesRequest {
  /**
   * @type ReorderRuleResourceArray
   */
  body: ReorderRuleResourceArray;
}

export interface CloudCostManagementApiReorderTagPipelinesRulesetsRequest {
  /**
   * @type ReorderRulesetResourceArray
   */
  body: ReorderRulesetResourceArray;
}

export interface CloudCostManagementApiSearchCostRecommendationsRequest {
  /**
   * @type RecommendationsFilterRequest
   */
  body: RecommendationsFilterRequest;
  /**
   * Number of results per page (1–10000).
   * @type string
   */
  pageSize?: string;
  /**
   * Pagination token from a previous response.
   * @type string
   */
  pageToken?: string;
}

export interface CloudCostManagementApiUpdateCostAccountFiltersRequest {
  /**
   * Cloud Account id.
   * @type number
   */
  cloudAccountId: number;
  /**
   * @type AccountFiltersPatchRequest
   */
  body: AccountFiltersPatchRequest;
}

export interface CloudCostManagementApiUpdateCostAWSCURConfigRequest {
  /**
   * Cloud Account id.
   * @type number
   */
  cloudAccountId: number;
  /**
   * @type AwsCURConfigPatchRequest
   */
  body: AwsCURConfigPatchRequest;
}

export interface CloudCostManagementApiUpdateCostAzureUCConfigsRequest {
  /**
   * Cloud Account id.
   * @type number
   */
  cloudAccountId: number;
  /**
   * @type AzureUCConfigPatchRequest
   */
  body: AzureUCConfigPatchRequest;
}

export interface CloudCostManagementApiUpdateCostGCPUsageCostConfigRequest {
  /**
   * Cloud Account id.
   * @type number
   */
  cloudAccountId: number;
  /**
   * @type GCPUsageCostConfigPatchRequest
   */
  body: GCPUsageCostConfigPatchRequest;
}

export interface CloudCostManagementApiUpdateCustomAllocationRuleRequest {
  /**
   * The unique identifier of the custom allocation rule
   * @type number
   */
  ruleId: number;
  /**
   * @type ArbitraryCostUpsertRequest
   */
  body: ArbitraryCostUpsertRequest;
}

export interface CloudCostManagementApiUpdateTagPipelinesRulesetRequest {
  /**
   * The unique identifier of the ruleset
   * @type string
   */
  rulesetId: string;
  /**
   * @type UpdateRulesetRequest
   */
  body: UpdateRulesetRequest;
}

export interface CloudCostManagementApiUpdateUnitCostRequest {
  /**
   * The UUID of the unit cost.
   * @type string
   */
  unitCostId: string;
  /**
   * @type UnitCostUpdateRequest
   */
  body: UnitCostUpdateRequest;
}

export interface CloudCostManagementApiUploadCustomCostsFileRequest {
  /**
   * @type Array<CustomCostsFileLineItem>
   */
  body: Array<CustomCostsFileLineItem>;
}

export interface CloudCostManagementApiUpsertBudgetRequest {
  /**
   * @type BudgetWithEntries
   */
  body: BudgetWithEntries;
}

export interface CloudCostManagementApiUpsertCostTagDescriptionByKeyRequest {
  /**
   * The tag key whose description is being upserted.
   * @type string
   */
  tagKey: string;
  /**
   * @type CostTagDescriptionUpsertRequest
   */
  body: CostTagDescriptionUpsertRequest;
}

export interface CloudCostManagementApiUpsertCustomForecastRequest {
  /**
   * @type CustomForecastUpsertRequest
   */
  body: CustomForecastUpsertRequest;
}

export interface CloudCostManagementApiValidateBudgetRequest {
  /**
   * @type BudgetValidationRequest
   */
  body: BudgetValidationRequest;
}

export interface CloudCostManagementApiValidateQueryRequest {
  /**
   * @type RulesValidateQueryRequest
   */
  body: RulesValidateQueryRequest;
}

export class CloudCostManagementApi {
  private requestFactory: CloudCostManagementApiRequestFactory;
  private responseProcessor: CloudCostManagementApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: CloudCostManagementApiRequestFactory,
    responseProcessor?: CloudCostManagementApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new CloudCostManagementApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor ||
      new CloudCostManagementApiResponseProcessor(configuration);
  }

  /**
   * Create a Cloud Cost Management account for an AWS CUR config.
   * @param param The request object
   */
  public createCostAWSCURConfig(
    param: CloudCostManagementApiCreateCostAWSCURConfigRequest,
    options?: Configuration
  ): Promise<AwsCurConfigResponse> {
    const requestContextPromise = this.requestFactory.createCostAWSCURConfig(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createCostAWSCURConfig(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Create a Cloud Cost Management account for an Azure config.
   * @param param The request object
   */
  public createCostAzureUCConfigs(
    param: CloudCostManagementApiCreateCostAzureUCConfigsRequest,
    options?: Configuration
  ): Promise<AzureUCConfigPairsResponse> {
    const requestContextPromise = this.requestFactory.createCostAzureUCConfigs(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createCostAzureUCConfigs(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Create a Cloud Cost Management account for an Google Cloud Usage Cost config.
   * @param param The request object
   */
  public createCostGCPUsageCostConfig(
    param: CloudCostManagementApiCreateCostGCPUsageCostConfigRequest,
    options?: Configuration
  ): Promise<GCPUsageCostConfigResponse> {
    const requestContextPromise =
      this.requestFactory.createCostGCPUsageCostConfig(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createCostGCPUsageCostConfig(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Create a new custom allocation rule with the specified filters and allocation strategy.
   *
   * **Strategy Methods:**
   * - **PROPORTIONAL/EVEN**: Allocates costs proportionally/evenly based on existing costs. Requires: granularity, allocated_by_tag_keys. Optional: based_on_costs, allocated_by_filters, evaluate_grouped_by_tag_keys, evaluate_grouped_by_filters.
   * - **PROPORTIONAL_TIMESERIES/EVEN_TIMESERIES**: Allocates based on timeseries data. Requires: granularity, based_on_timeseries. Optional: evaluate_grouped_by_tag_keys.
   * - **PERCENT**: Allocates fixed percentages to specific tags. Requires: allocated_by (array of percentage allocations).
   *
   * **Filter Conditions:**
   * - Use **value** for single-value conditions: "is", "is not", "contains", "=", "!=", "like", "not like"
   * - Use **values** for multi-value conditions: "in", "not in"
   * - Cannot use both value and values simultaneously.
   *
   * **Supported operators**: is, is not, contains, in, not in, =, !=, like, not like
   * @param param The request object
   */
  public createCustomAllocationRule(
    param: CloudCostManagementApiCreateCustomAllocationRuleRequest,
    options?: Configuration
  ): Promise<ArbitraryRuleResponse> {
    const requestContextPromise =
      this.requestFactory.createCustomAllocationRule(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createCustomAllocationRule(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Create a new tag pipeline ruleset with the specified rules and configuration
   * @param param The request object
   */
  public createTagPipelinesRuleset(
    param: CloudCostManagementApiCreateTagPipelinesRulesetRequest,
    options?: Configuration
  ): Promise<RulesetResp> {
    const requestContextPromise = this.requestFactory.createTagPipelinesRuleset(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createTagPipelinesRuleset(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Create an ROI metric (unit cost) using the given numerator and denominator queries.
   * @param param The request object
   */
  public createUnitCost(
    param: CloudCostManagementApiCreateUnitCostRequest,
    options?: Configuration
  ): Promise<UnitCostResponse> {
    const requestContextPromise = this.requestFactory.createUnitCost(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createUnitCost(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Delete a budget
   * @param param The request object
   */
  public deleteBudget(
    param: CloudCostManagementApiDeleteBudgetRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteBudget(
      param.budgetId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteBudget(responseContext, options);
        });
    });
  }

  /**
   * Archive a Cloud Cost Management Account.
   * @param param The request object
   */
  public deleteCostAWSCURConfig(
    param: CloudCostManagementApiDeleteCostAWSCURConfigRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteCostAWSCURConfig(
      param.cloudAccountId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteCostAWSCURConfig(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Archive a Cloud Cost Management Account.
   * @param param The request object
   */
  public deleteCostAzureUCConfig(
    param: CloudCostManagementApiDeleteCostAzureUCConfigRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteCostAzureUCConfig(
      param.cloudAccountId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteCostAzureUCConfig(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Archive a Cloud Cost Management account.
   * @param param The request object
   */
  public deleteCostGCPUsageCostConfig(
    param: CloudCostManagementApiDeleteCostGCPUsageCostConfigRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteCostGCPUsageCostConfig(
        param.cloudAccountId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteCostGCPUsageCostConfig(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Delete a Cloud Cost Management tag key description. When `cloud` is omitted, deletes every description for the tag key, falling back to Datadog's global default when available. When `cloud` is provided, deletes only the description scoped to that cloud provider.
   * @param param The request object
   */
  public deleteCostTagDescriptionByKey(
    param: CloudCostManagementApiDeleteCostTagDescriptionByKeyRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteCostTagDescriptionByKey(
        param.tagKey,
        param.cloud,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteCostTagDescriptionByKey(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Delete a custom allocation rule - Delete an existing custom allocation rule by its ID
   * @param param The request object
   */
  public deleteCustomAllocationRule(
    param: CloudCostManagementApiDeleteCustomAllocationRuleRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteCustomAllocationRule(param.ruleId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteCustomAllocationRule(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Delete the specified Custom Costs file.
   * @param param The request object
   */
  public deleteCustomCostsFile(
    param: CloudCostManagementApiDeleteCustomCostsFileRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteCustomCostsFile(
      param.fileId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteCustomCostsFile(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Delete the custom forecast for a budget.
   * @param param The request object
   */
  public deleteCustomForecast(
    param: CloudCostManagementApiDeleteCustomForecastRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteCustomForecast(
      param.budgetId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteCustomForecast(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Delete a tag pipeline ruleset - Delete an existing tag pipeline ruleset by its ID
   * @param param The request object
   */
  public deleteTagPipelinesRuleset(
    param: CloudCostManagementApiDeleteTagPipelinesRulesetRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteTagPipelinesRuleset(
      param.rulesetId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteTagPipelinesRuleset(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Delete an ROI metric (unit cost).
   * @param param The request object
   */
  public deleteUnitCost(
    param: CloudCostManagementApiDeleteUnitCostRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteUnitCost(
      param.unitCostId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteUnitCost(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Use AI to draft a Cloud Cost Management tag key description based on associated cost data. The generated description is returned in the response and is not persisted by this endpoint; follow up with `UpsertCostTagDescriptionByKey` to save it.
   * @param param The request object
   */
  public generateCostTagDescriptionByKey(
    param: CloudCostManagementApiGenerateCostTagDescriptionByKeyRequest,
    options?: Configuration
  ): Promise<GenerateCostTagDescriptionResponse> {
    const requestContextPromise =
      this.requestFactory.generateCostTagDescriptionByKey(
        param.tagKey,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.generateCostTagDescriptionByKey(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Get a budget by ID. Pass `actual=true` or `forecast=true` to include cost data in the response. Use `start` and `end` (millisecond epochs, both required) to set the cost window. When `forecast=true`, each entry also includes `ootb_forecast` (the ML forecast before overrides) and `custom_forecast` (`null` if no override is set, a number if one is).
   * @param param The request object
   */
  public getBudget(
    param: CloudCostManagementApiGetBudgetRequest,
    options?: Configuration
  ): Promise<BudgetWithEntries> {
    const requestContextPromise = this.requestFactory.getBudget(
      param.budgetId,
      param.actual,
      param.forecast,
      param.start,
      param.end,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getBudget(responseContext, options);
        });
    });
  }

  /**
   * Get a list of individual cloud commitments (Reserved Instances or Savings Plans) with their utilization details. The response schema varies based on the provider, product, and commitment type.
   * @param param The request object
   */
  public getCommitmentsCommitmentList(
    param: CloudCostManagementApiGetCommitmentsCommitmentListRequest,
    options?: Configuration
  ): Promise<CommitmentsListResponse> {
    const requestContextPromise =
      this.requestFactory.getCommitmentsCommitmentList(
        param.provider,
        param.product,
        param.start,
        param.end,
        param.filterBy,
        param.commitmentType,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCommitmentsCommitmentList(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Get scalar coverage metrics for cloud commitment programs, including hours and cost coverage percentages.
   * @param param The request object
   */
  public getCommitmentsCoverageScalar(
    param: CloudCostManagementApiGetCommitmentsCoverageScalarRequest,
    options?: Configuration
  ): Promise<CommitmentsCoverageScalarResponse> {
    const requestContextPromise =
      this.requestFactory.getCommitmentsCoverageScalar(
        param.provider,
        param.product,
        param.start,
        param.end,
        param.filterBy,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCommitmentsCoverageScalar(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Get timeseries coverage metrics for cloud commitment programs, broken down by coverage type (Reserved Instances, Savings Plans, On-Demand, and Spot) for both hours and cost.
   * @param param The request object
   */
  public getCommitmentsCoverageTimeseries(
    param: CloudCostManagementApiGetCommitmentsCoverageTimeseriesRequest,
    options?: Configuration
  ): Promise<CommitmentsCoverageTimeseriesResponse> {
    const requestContextPromise =
      this.requestFactory.getCommitmentsCoverageTimeseries(
        param.provider,
        param.product,
        param.start,
        param.end,
        param.filterBy,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCommitmentsCoverageTimeseries(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Get scalar on-demand hot-spots data for cloud commitment programs, showing per-dimension breakdowns of on-demand spending with coverage metrics and potential savings.
   * @param param The request object
   */
  public getCommitmentsOnDemandHotspotsScalar(
    param: CloudCostManagementApiGetCommitmentsOnDemandHotspotsScalarRequest,
    options?: Configuration
  ): Promise<CommitmentsOnDemandHotspotsScalarResponse> {
    const requestContextPromise =
      this.requestFactory.getCommitmentsOnDemandHotspotsScalar(
        param.provider,
        param.product,
        param.start,
        param.end,
        param.filterBy,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCommitmentsOnDemandHotspotsScalar(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Get scalar savings metrics for cloud commitment programs, including realized savings and effective savings rate.
   * @param param The request object
   */
  public getCommitmentsSavingsScalar(
    param: CloudCostManagementApiGetCommitmentsSavingsScalarRequest,
    options?: Configuration
  ): Promise<CommitmentsSavingsScalarResponse> {
    const requestContextPromise =
      this.requestFactory.getCommitmentsSavingsScalar(
        param.provider,
        param.product,
        param.start,
        param.end,
        param.filterBy,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCommitmentsSavingsScalar(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Get timeseries savings metrics for cloud commitment programs, including actual cost, on-demand equivalent cost, realized savings, and effective savings rate over time.
   * @param param The request object
   */
  public getCommitmentsSavingsTimeseries(
    param: CloudCostManagementApiGetCommitmentsSavingsTimeseriesRequest,
    options?: Configuration
  ): Promise<CommitmentsSavingsTimeseriesResponse> {
    const requestContextPromise =
      this.requestFactory.getCommitmentsSavingsTimeseries(
        param.provider,
        param.product,
        param.start,
        param.end,
        param.filterBy,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCommitmentsSavingsTimeseries(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Get scalar utilization metrics for cloud commitment programs, including utilization percentage and unused cost.
   * @param param The request object
   */
  public getCommitmentsUtilizationScalar(
    param: CloudCostManagementApiGetCommitmentsUtilizationScalarRequest,
    options?: Configuration
  ): Promise<CommitmentsUtilizationScalarResponse> {
    const requestContextPromise =
      this.requestFactory.getCommitmentsUtilizationScalar(
        param.provider,
        param.product,
        param.start,
        param.end,
        param.filterBy,
        param.commitmentType,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCommitmentsUtilizationScalar(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Get timeseries utilization metrics for cloud commitment programs, including used and unused cost series over time.
   * @param param The request object
   */
  public getCommitmentsUtilizationTimeseries(
    param: CloudCostManagementApiGetCommitmentsUtilizationTimeseriesRequest,
    options?: Configuration
  ): Promise<CommitmentsUtilizationTimeseriesResponse> {
    const requestContextPromise =
      this.requestFactory.getCommitmentsUtilizationTimeseries(
        param.provider,
        param.product,
        param.start,
        param.end,
        param.filterBy,
        param.commitmentType,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCommitmentsUtilizationTimeseries(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Get the account filters for a cloud account (AWS CUR 1.0/2.0, OCI, and other clouds).
   * @param param The request object
   */
  public getCostAccountFilters(
    param: CloudCostManagementApiGetCostAccountFiltersRequest,
    options?: Configuration
  ): Promise<AccountFiltersResponse> {
    const requestContextPromise = this.requestFactory.getCostAccountFilters(
      param.cloudAccountId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCostAccountFilters(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Get a detected Cloud Cost Management anomaly by UUID.
   * @param param The request object
   */
  public getCostAnomaly(
    param: CloudCostManagementApiGetCostAnomalyRequest,
    options?: Configuration
  ): Promise<CostAnomalyResponse> {
    const requestContextPromise = this.requestFactory.getCostAnomaly(
      param.anomalyId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCostAnomaly(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Get a specific AWS CUR config.
   * @param param The request object
   */
  public getCostAWSCURConfig(
    param: CloudCostManagementApiGetCostAWSCURConfigRequest,
    options?: Configuration
  ): Promise<AwsCurConfigResponse> {
    const requestContextPromise = this.requestFactory.getCostAWSCURConfig(
      param.cloudAccountId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCostAWSCURConfig(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Get a specific Azure config.
   * @param param The request object
   */
  public getCostAzureUCConfig(
    param: CloudCostManagementApiGetCostAzureUCConfigRequest,
    options?: Configuration
  ): Promise<UCConfigPair> {
    const requestContextPromise = this.requestFactory.getCostAzureUCConfig(
      param.cloudAccountId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCostAzureUCConfig(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Get a specific Google Cloud Usage Cost config.
   * @param param The request object
   */
  public getCostGCPUsageCostConfig(
    param: CloudCostManagementApiGetCostGCPUsageCostConfigRequest,
    options?: Configuration
  ): Promise<GcpUcConfigResponse> {
    const requestContextPromise = this.requestFactory.getCostGCPUsageCostConfig(
      param.cloudAccountId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCostGCPUsageCostConfig(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Get the Cloud Cost Management description for a single tag key. Use `filter[cloud]` to scope the lookup to a specific cloud provider; when omitted, the response resolves the description in fallback order (cloud-specific organization override, then cloudless organization default, then Datadog's global default).
   * @param param The request object
   */
  public getCostTagDescriptionByKey(
    param: CloudCostManagementApiGetCostTagDescriptionByKeyRequest,
    options?: Configuration
  ): Promise<CostTagDescriptionResponse> {
    const requestContextPromise =
      this.requestFactory.getCostTagDescriptionByKey(
        param.tagKey,
        param.filterCloud,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCostTagDescriptionByKey(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Get details for a specific Cloud Cost Management tag key, including example tag values and description.
   * @param param The request object
   */
  public getCostTagKey(
    param: CloudCostManagementApiGetCostTagKeyRequest,
    options?: Configuration
  ): Promise<CostTagKeyResponse> {
    const requestContextPromise = this.requestFactory.getCostTagKey(
      param.tagKey,
      param.filterMetric,
      param.pageSize,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCostTagKey(responseContext, options);
        });
    });
  }

  /**
   * Get the dominant billing currency observed in Cloud Cost Management data for the requested period. The response wraps the currency in a JSON:API `data` array containing at most one entry; the array is empty when no currency data is available.
   * @param param The request object
   */
  public getCostTagMetadataCurrency(
    param: CloudCostManagementApiGetCostTagMetadataCurrencyRequest,
    options?: Configuration
  ): Promise<CostCurrencyResponse> {
    const requestContextPromise =
      this.requestFactory.getCostTagMetadataCurrency(
        param.filterMonth,
        param.filterProvider,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCostTagMetadataCurrency(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Get a specific custom allocation rule - Retrieve a specific custom allocation rule by its ID
   * @param param The request object
   */
  public getCustomAllocationRule(
    param: CloudCostManagementApiGetCustomAllocationRuleRequest,
    options?: Configuration
  ): Promise<ArbitraryRuleResponse> {
    const requestContextPromise = this.requestFactory.getCustomAllocationRule(
      param.ruleId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCustomAllocationRule(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Fetch the specified Custom Costs file.
   * @param param The request object
   */
  public getCustomCostsFile(
    param: CloudCostManagementApiGetCustomCostsFileRequest,
    options?: Configuration
  ): Promise<CustomCostsFileGetResponse> {
    const requestContextPromise = this.requestFactory.getCustomCostsFile(
      param.fileId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCustomCostsFile(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Get the custom forecast for a budget.
   * @param param The request object
   */
  public getCustomForecast(
    param: CloudCostManagementApiGetCustomForecastRequest,
    options?: Configuration
  ): Promise<CustomForecastResponse> {
    const requestContextPromise = this.requestFactory.getCustomForecast(
      param.budgetId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCustomForecast(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Get a specific tag pipeline ruleset - Retrieve a specific tag pipeline ruleset by its ID
   * @param param The request object
   */
  public getTagPipelinesRuleset(
    param: CloudCostManagementApiGetTagPipelinesRulesetRequest,
    options?: Configuration
  ): Promise<RulesetResp> {
    const requestContextPromise = this.requestFactory.getTagPipelinesRuleset(
      param.rulesetId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getTagPipelinesRuleset(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Retrieve an ROI metric (unit cost) by UUID.
   * @param param The request object
   */
  public getUnitCost(
    param: CloudCostManagementApiGetUnitCostRequest,
    options?: Configuration
  ): Promise<UnitCostResponse> {
    const requestContextPromise = this.requestFactory.getUnitCost(
      param.unitCostId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUnitCost(responseContext, options);
        });
    });
  }

  /**
   * List budgets.
   * @param param The request object
   */
  public listBudgets(options?: Configuration): Promise<BudgetArray> {
    const requestContextPromise = this.requestFactory.listBudgets(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listBudgets(responseContext, options);
        });
    });
  }

  /**
   * List detected Cloud Cost Management anomalies for the organization.
   * @param param The request object
   */
  public listCostAnomalies(
    param: CloudCostManagementApiListCostAnomaliesRequest = {},
    options?: Configuration
  ): Promise<CostAnomaliesResponse> {
    const requestContextPromise = this.requestFactory.listCostAnomalies(
      param.start,
      param.end,
      param.filter,
      param.minAnomalousThreshold,
      param.minCostThreshold,
      param.dismissalCause,
      param.orderBy,
      param.order,
      param.limit,
      param.offset,
      param.providerIds,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCostAnomalies(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * List the AWS CUR configs.
   * @param param The request object
   */
  public listCostAWSCURConfigs(
    options?: Configuration
  ): Promise<AwsCURConfigsResponse> {
    const requestContextPromise =
      this.requestFactory.listCostAWSCURConfigs(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCostAWSCURConfigs(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * List the Azure configs.
   * @param param The request object
   */
  public listCostAzureUCConfigs(
    options?: Configuration
  ): Promise<AzureUCConfigsResponse> {
    const requestContextPromise =
      this.requestFactory.listCostAzureUCConfigs(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCostAzureUCConfigs(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * List the OCI and AWS CUR 2.0 cloud accounts for your organization, including account IDs, status, and validation errors.
   * Use `filter[cloud]=oci` or `filter[cloud]=aws_cur2` to return a single cloud. When omitted or empty, both clouds are returned.
   * AWS CUR 1.0, Azure, and GCP accounts are available through their dedicated configuration endpoints.
   * Archived accounts are excluded. The response contains all matching accounts and is not paginated.
   *
   * This endpoint replaces `GET /api/v2/cost/oci_config`. To migrate, use `filter[cloud]=oci` and update clients to accept
   * the `cloud_account` resource type instead of `oci_config`. Account IDs and the existing attributes are preserved;
   * each account also includes the `cloud` attribute.
   * @param param The request object
   */
  public listCostCloudAccountsV2(
    param: CloudCostManagementApiListCostCloudAccountsV2Request = {},
    options?: Configuration
  ): Promise<CloudCostAccountsResponse> {
    const requestContextPromise = this.requestFactory.listCostCloudAccountsV2(
      param.filterCloud,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCostCloudAccountsV2(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * List the Google Cloud Usage Cost configs.
   * @param param The request object
   */
  public listCostGCPUsageCostConfigs(
    options?: Configuration
  ): Promise<GCPUsageCostConfigsResponse> {
    const requestContextPromise =
      this.requestFactory.listCostGCPUsageCostConfigs(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCostGCPUsageCostConfigs(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * **Note**: This endpoint is deprecated. Use [List Cloud Cost Management cloud accounts](https://docs.datadoghq.com/api/latest/cloud-cost-management/#list-cloud-cost-management-cloud-accounts)
   * with `filter[cloud]=oci` instead. Update clients to accept the `cloud_account` resource type instead of `oci_config`.
   * Account IDs and the existing attributes are preserved; each account also includes the `cloud` attribute.
   *
   * List the OCI configs.
   * @param param The request object
   */
  public listCostOCIConfigs(
    options?: Configuration
  ): Promise<OCIConfigsResponse> {
    const requestContextPromise =
      this.requestFactory.listCostOCIConfigs(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCostOCIConfigs(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * List Cloud Cost Management tag key descriptions for the organization. Use `filter[cloud]` to scope the result to a single cloud provider; when omitted, both cross-cloud defaults and cloud-specific descriptions are returned.
   * @param param The request object
   */
  public listCostTagDescriptions(
    param: CloudCostManagementApiListCostTagDescriptionsRequest = {},
    options?: Configuration
  ): Promise<CostTagDescriptionsResponse> {
    const requestContextPromise = this.requestFactory.listCostTagDescriptions(
      param.filterCloud,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCostTagDescriptions(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * List Cloud Cost Management tag keys.
   * @param param The request object
   */
  public listCostTagKeys(
    param: CloudCostManagementApiListCostTagKeysRequest = {},
    options?: Configuration
  ): Promise<CostTagKeysResponse> {
    const requestContextPromise = this.requestFactory.listCostTagKeys(
      param.filterMetric,
      param.filterTags,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCostTagKeys(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * List Cloud Cost Management tag keys observed for the requested period, along with the origin sources that produced them (for example, `aws-user-defined`, `custom`).
   * @param param The request object
   */
  public listCostTagKeySources(
    param: CloudCostManagementApiListCostTagKeySourcesRequest,
    options?: Configuration
  ): Promise<CostTagKeySourcesResponse> {
    const requestContextPromise = this.requestFactory.listCostTagKeySources(
      param.filterMonth,
      param.filterProvider,
      param.filterMetric,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCostTagKeySources(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * List Cloud Cost Management tag key metadata, including row counts, cost covered, cardinality, and a sample of top tag values per cloud account. Use `filter[daily]=true` to return daily rows instead of the default monthly roll-up.
   * @param param The request object
   */
  public listCostTagMetadata(
    param: CloudCostManagementApiListCostTagMetadataRequest,
    options?: Configuration
  ): Promise<CostTagKeyMetadataResponse> {
    const requestContextPromise = this.requestFactory.listCostTagMetadata(
      param.filterMonth,
      param.filterProvider,
      param.filterMetric,
      param.filterTagKey,
      param.filterDaily,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCostTagMetadata(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * List Cloud Cost Management metrics that have data for the requested period.
   * @param param The request object
   */
  public listCostTagMetadataMetrics(
    param: CloudCostManagementApiListCostTagMetadataMetricsRequest,
    options?: Configuration
  ): Promise<CostMetricsResponse> {
    const requestContextPromise =
      this.requestFactory.listCostTagMetadataMetrics(
        param.filterMonth,
        param.filterProvider,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCostTagMetadataMetrics(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * List months that have Cloud Cost Management tag metadata for a given provider,
   * ordered most-recent first. The response is capped at 36 months.
   * @param param The request object
   */
  public listCostTagMetadataMonths(
    param: CloudCostManagementApiListCostTagMetadataMonthsRequest,
    options?: Configuration
  ): Promise<CostTagMetadataMonthsResponse> {
    const requestContextPromise = this.requestFactory.listCostTagMetadataMonths(
      param.filterProvider,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCostTagMetadataMonths(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * List container orchestrators (for example, `kubernetes`, `ecs`) detected in Cloud Cost Management data for the requested period.
   * @param param The request object
   */
  public listCostTagMetadataOrchestrators(
    param: CloudCostManagementApiListCostTagMetadataOrchestratorsRequest,
    options?: Configuration
  ): Promise<CostOrchestratorsResponse> {
    const requestContextPromise =
      this.requestFactory.listCostTagMetadataOrchestrators(
        param.filterMonth,
        param.filterProvider,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCostTagMetadataOrchestrators(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * List Cloud Cost Management tags for a given metric.
   * @param param The request object
   */
  public listCostTags(
    param: CloudCostManagementApiListCostTagsRequest = {},
    options?: Configuration
  ): Promise<CostTagsResponse> {
    const requestContextPromise = this.requestFactory.listCostTags(
      param.filterMetric,
      param.filterMatch,
      param.filterTags,
      param.filterTagKeys,
      param.pageSize,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCostTags(responseContext, options);
        });
    });
  }

  /**
   * List all custom allocation rules - Retrieve a list of all custom allocation rules for the organization
   * @param param The request object
   */
  public listCustomAllocationRules(
    options?: Configuration
  ): Promise<ArbitraryRuleResponseArray> {
    const requestContextPromise =
      this.requestFactory.listCustomAllocationRules(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCustomAllocationRules(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * List the processing status of all custom allocation rules. Returns only the ID and processing status for each rule.
   * @param param The request object
   */
  public listCustomAllocationRulesStatus(
    options?: Configuration
  ): Promise<ArbitraryRuleStatusResponseArray> {
    const requestContextPromise =
      this.requestFactory.listCustomAllocationRulesStatus(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCustomAllocationRulesStatus(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * List the Custom Costs files.
   * @param param The request object
   */
  public listCustomCostsFiles(
    param: CloudCostManagementApiListCustomCostsFilesRequest = {},
    options?: Configuration
  ): Promise<CustomCostsFileListResponse> {
    const requestContextPromise = this.requestFactory.listCustomCostsFiles(
      param.pageNumber,
      param.pageSize,
      param.filterStatus,
      param.filterName,
      param.filterProvider,
      param.sort,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCustomCostsFiles(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * List all tag pipeline rulesets - Retrieve a list of all tag pipeline rulesets for the organization
   * @param param The request object
   */
  public listTagPipelinesRulesets(
    options?: Configuration
  ): Promise<RulesetRespArray> {
    const requestContextPromise =
      this.requestFactory.listTagPipelinesRulesets(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listTagPipelinesRulesets(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * List the processing status of all tag pipeline rulesets. Returns only the ID and processing status for each ruleset.
   * @param param The request object
   */
  public listTagPipelinesRulesetsStatus(
    options?: Configuration
  ): Promise<RulesetStatusRespArray> {
    const requestContextPromise =
      this.requestFactory.listTagPipelinesRulesetsStatus(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listTagPipelinesRulesetsStatus(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * List the ROI metrics (unit costs) for the authenticated organization.
   * @param param The request object
   */
  public listUnitCosts(options?: Configuration): Promise<UnitCostsResponse> {
    const requestContextPromise = this.requestFactory.listUnitCosts(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listUnitCosts(responseContext, options);
        });
    });
  }

  /**
   * Reorder custom allocation rules - Change the execution order of custom allocation rules.
   *
   * **Important**: You must provide the **complete list** of all rule IDs in the desired execution order. The API will reorder ALL rules according to the provided sequence.
   *
   * Rules are executed in the order specified, with lower indices (earlier in the array) having higher priority.
   *
   * **Example**: If you have rules with IDs [123, 456, 789] and want to change order from 123→456→789 to 456→123→789, send: [{"id": "456"}, {"id": "123"}, {"id": "789"}]
   * @param param The request object
   */
  public reorderCustomAllocationRules(
    param: CloudCostManagementApiReorderCustomAllocationRulesRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.reorderCustomAllocationRules(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.reorderCustomAllocationRules(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Reorder tag pipeline rulesets - Change the execution order of tag pipeline rulesets
   * @param param The request object
   */
  public reorderTagPipelinesRulesets(
    param: CloudCostManagementApiReorderTagPipelinesRulesetsRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.reorderTagPipelinesRulesets(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.reorderTagPipelinesRulesets(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * List cost recommendations matching a filter, with pagination and sorting.
   * @param param The request object
   */
  public searchCostRecommendations(
    param: CloudCostManagementApiSearchCostRecommendationsRequest,
    options?: Configuration
  ): Promise<CostRecommendationArray> {
    const requestContextPromise = this.requestFactory.searchCostRecommendations(
      param.body,
      param.pageSize,
      param.pageToken,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchCostRecommendations(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Update the account filters for a cloud account (AWS CUR 1.0/2.0, OCI, and other clouds).
   * @param param The request object
   */
  public updateCostAccountFilters(
    param: CloudCostManagementApiUpdateCostAccountFiltersRequest,
    options?: Configuration
  ): Promise<AccountFiltersResponse> {
    const requestContextPromise = this.requestFactory.updateCostAccountFilters(
      param.cloudAccountId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateCostAccountFilters(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Update the status (active/archived) and/or account filtering configuration of an AWS CUR config.
   * @param param The request object
   */
  public updateCostAWSCURConfig(
    param: CloudCostManagementApiUpdateCostAWSCURConfigRequest,
    options?: Configuration
  ): Promise<AwsCURConfigsResponse> {
    const requestContextPromise = this.requestFactory.updateCostAWSCURConfig(
      param.cloudAccountId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateCostAWSCURConfig(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Update the status of an  Azure config (active/archived).
   * @param param The request object
   */
  public updateCostAzureUCConfigs(
    param: CloudCostManagementApiUpdateCostAzureUCConfigsRequest,
    options?: Configuration
  ): Promise<AzureUCConfigPairsResponse> {
    const requestContextPromise = this.requestFactory.updateCostAzureUCConfigs(
      param.cloudAccountId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateCostAzureUCConfigs(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Update the status of an Google Cloud Usage Cost config (active/archived).
   * @param param The request object
   */
  public updateCostGCPUsageCostConfig(
    param: CloudCostManagementApiUpdateCostGCPUsageCostConfigRequest,
    options?: Configuration
  ): Promise<GCPUsageCostConfigResponse> {
    const requestContextPromise =
      this.requestFactory.updateCostGCPUsageCostConfig(
        param.cloudAccountId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateCostGCPUsageCostConfig(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Update an existing custom allocation rule with new filters and allocation strategy.
   *
   * **Strategy Methods:**
   * - **PROPORTIONAL/EVEN**: Allocates costs proportionally/evenly based on existing costs. Requires: granularity, allocated_by_tag_keys. Optional: based_on_costs, allocated_by_filters, evaluate_grouped_by_tag_keys, evaluate_grouped_by_filters.
   * - **PROPORTIONAL_TIMESERIES/EVEN_TIMESERIES**: Allocates based on timeseries data. Requires: granularity, based_on_timeseries. Optional: evaluate_grouped_by_tag_keys.
   * - **PERCENT**: Allocates fixed percentages to specific tags. Requires: allocated_by (array of percentage allocations).
   * - **USAGE_METRIC**: Allocates based on usage metrics (implementation varies).
   *
   * **Filter Conditions:**
   * - Use **value** for single-value conditions: "is", "is not", "contains", "=", "!=", "like", "not like"
   * - Use **values** for multi-value conditions: "in", "not in"
   * - Cannot use both value and values simultaneously.
   *
   * **Supported operators**: is, is not, contains, in, not in, =, !=, like, not like
   * @param param The request object
   */
  public updateCustomAllocationRule(
    param: CloudCostManagementApiUpdateCustomAllocationRuleRequest,
    options?: Configuration
  ): Promise<ArbitraryRuleResponse> {
    const requestContextPromise =
      this.requestFactory.updateCustomAllocationRule(
        param.ruleId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateCustomAllocationRule(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Update a tag pipeline ruleset - Update an existing tag pipeline ruleset with new rules and configuration
   * @param param The request object
   */
  public updateTagPipelinesRuleset(
    param: CloudCostManagementApiUpdateTagPipelinesRulesetRequest,
    options?: Configuration
  ): Promise<RulesetResp> {
    const requestContextPromise = this.requestFactory.updateTagPipelinesRuleset(
      param.rulesetId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateTagPipelinesRuleset(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Replace an ROI metric (unit cost) with a new set of attributes.
   * @param param The request object
   */
  public updateUnitCost(
    param: CloudCostManagementApiUpdateUnitCostRequest,
    options?: Configuration
  ): Promise<UnitCostResponse> {
    const requestContextPromise = this.requestFactory.updateUnitCost(
      param.unitCostId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateUnitCost(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Upload a Custom Costs file.
   * @param param The request object
   */
  public uploadCustomCostsFile(
    param: CloudCostManagementApiUploadCustomCostsFileRequest,
    options?: Configuration
  ): Promise<CustomCostsFileUploadResponse> {
    const requestContextPromise = this.requestFactory.uploadCustomCostsFile(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.uploadCustomCostsFile(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Create a new budget or update an existing one.
   * @param param The request object
   */
  public upsertBudget(
    param: CloudCostManagementApiUpsertBudgetRequest,
    options?: Configuration
  ): Promise<BudgetWithEntries> {
    const requestContextPromise = this.requestFactory.upsertBudget(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.upsertBudget(responseContext, options);
        });
    });
  }

  /**
   * Create or update a Cloud Cost Management tag key description. The new description and optional cloud scoping are supplied in the request body. Omit `cloud` to set a cross-cloud default for the tag key.
   * @param param The request object
   */
  public upsertCostTagDescriptionByKey(
    param: CloudCostManagementApiUpsertCostTagDescriptionByKeyRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.upsertCostTagDescriptionByKey(
        param.tagKey,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.upsertCostTagDescriptionByKey(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Create or replace the custom forecast for an existing budget.
   * Pass an empty `entries` list to delete the custom forecast for the budget.
   * @param param The request object
   */
  public upsertCustomForecast(
    param: CloudCostManagementApiUpsertCustomForecastRequest,
    options?: Configuration
  ): Promise<CustomForecastResponse> {
    const requestContextPromise = this.requestFactory.upsertCustomForecast(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.upsertCustomForecast(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Validate a budget configuration without creating or modifying it
   * @param param The request object
   */
  public validateBudget(
    param: CloudCostManagementApiValidateBudgetRequest,
    options?: Configuration
  ): Promise<BudgetValidationResponse> {
    const requestContextPromise = this.requestFactory.validateBudget(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.validateBudget(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * @param param The request object
   */
  public validateCsvBudget(
    options?: Configuration
  ): Promise<ValidationResponse> {
    const requestContextPromise =
      this.requestFactory.validateCsvBudget(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.validateCsvBudget(
            responseContext,
            options
          );
        });
    });
  }

  /**
   * Validate a tag pipeline query - Validate the syntax and structure of a tag pipeline query
   * @param param The request object
   */
  public validateQuery(
    param: CloudCostManagementApiValidateQueryRequest,
    options?: Configuration
  ): Promise<RulesValidateQueryResponse> {
    const requestContextPromise = this.requestFactory.validateQuery(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.validateQuery(responseContext, options);
        });
    });
  }
}
