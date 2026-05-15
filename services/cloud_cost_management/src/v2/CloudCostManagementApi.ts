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
import { ArbitraryCostUpsertRequest } from "./models/ArbitraryCostUpsertRequest";
import { ArbitraryRuleResponse } from "./models/ArbitraryRuleResponse";
import { ArbitraryRuleResponseArray } from "./models/ArbitraryRuleResponseArray";
import { ArbitraryRuleStatusResponseArray } from "./models/ArbitraryRuleStatusResponseArray";
import { AwsCURConfigPatchRequest } from "./models/AwsCURConfigPatchRequest";
import { AwsCURConfigPostRequest } from "./models/AwsCURConfigPostRequest";
import { AwsCurConfigResponse } from "./models/AwsCurConfigResponse";
import { AwsCURConfigsResponse } from "./models/AwsCURConfigsResponse";
import { AzureUCConfigPairsResponse } from "./models/AzureUCConfigPairsResponse";
import { AzureUCConfigPatchRequest } from "./models/AzureUCConfigPatchRequest";
import { AzureUCConfigPostRequest } from "./models/AzureUCConfigPostRequest";
import { AzureUCConfigsResponse } from "./models/AzureUCConfigsResponse";
import { BudgetArray } from "./models/BudgetArray";
import { BudgetValidationRequest } from "./models/BudgetValidationRequest";
import { BudgetValidationResponse } from "./models/BudgetValidationResponse";
import { BudgetWithEntries } from "./models/BudgetWithEntries";
import { CommitmentsCommitmentType } from "./models/CommitmentsCommitmentType";
import { CommitmentsCoverageScalarResponse } from "./models/CommitmentsCoverageScalarResponse";
import { CommitmentsCoverageTimeseriesResponse } from "./models/CommitmentsCoverageTimeseriesResponse";
import { CommitmentsListResponse } from "./models/CommitmentsListResponse";
import { CommitmentsOnDemandHotspotsScalarResponse } from "./models/CommitmentsOnDemandHotspotsScalarResponse";
import { CommitmentsProvider } from "./models/CommitmentsProvider";
import { CommitmentsSavingsScalarResponse } from "./models/CommitmentsSavingsScalarResponse";
import { CommitmentsSavingsTimeseriesResponse } from "./models/CommitmentsSavingsTimeseriesResponse";
import { CommitmentsUtilizationScalarResponse } from "./models/CommitmentsUtilizationScalarResponse";
import { CommitmentsUtilizationTimeseriesResponse } from "./models/CommitmentsUtilizationTimeseriesResponse";
import { CostAnomaliesResponse } from "./models/CostAnomaliesResponse";
import { CostAnomalyResponse } from "./models/CostAnomalyResponse";
import { CostTagDescriptionsResponse } from "./models/CostTagDescriptionsResponse";
import { CostTagKeyResponse } from "./models/CostTagKeyResponse";
import { CostTagKeysResponse } from "./models/CostTagKeysResponse";
import { CostTagsResponse } from "./models/CostTagsResponse";
import { CreateRulesetRequest } from "./models/CreateRulesetRequest";
import { CustomCostsFileGetResponse } from "./models/CustomCostsFileGetResponse";
import { CustomCostsFileLineItem } from "./models/CustomCostsFileLineItem";
import { CustomCostsFileListResponse } from "./models/CustomCostsFileListResponse";
import { CustomCostsFileUploadResponse } from "./models/CustomCostsFileUploadResponse";
import { GcpUcConfigResponse } from "./models/GcpUcConfigResponse";
import { GCPUsageCostConfigPatchRequest } from "./models/GCPUsageCostConfigPatchRequest";
import { GCPUsageCostConfigPostRequest } from "./models/GCPUsageCostConfigPostRequest";
import { GCPUsageCostConfigResponse } from "./models/GCPUsageCostConfigResponse";
import { GCPUsageCostConfigsResponse } from "./models/GCPUsageCostConfigsResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { OCIConfigsResponse } from "./models/OCIConfigsResponse";
import { ReorderRuleResourceArray } from "./models/ReorderRuleResourceArray";
import { ReorderRulesetResourceArray } from "./models/ReorderRulesetResourceArray";
import { RulesetResp } from "./models/RulesetResp";
import { RulesetRespArray } from "./models/RulesetRespArray";
import { RulesetStatusRespArray } from "./models/RulesetStatusRespArray";
import { RulesValidateQueryRequest } from "./models/RulesValidateQueryRequest";
import { RulesValidateQueryResponse } from "./models/RulesValidateQueryResponse";
import { UCConfigPair } from "./models/UCConfigPair";
import { UpdateRulesetRequest } from "./models/UpdateRulesetRequest";
import { ValidationResponse } from "./models/ValidationResponse";
import { version } from "../version";

export class CloudCostManagementApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("cloud-cost-management", version);
    }
  }
  public async createCostAWSCURConfig(
    body: AwsCURConfigPostRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCostAWSCURConfig");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/aws_cur_config";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.createCostAWSCURConfig",
      CloudCostManagementApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
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
      serialize(body, TypingInfo, "AwsCURConfigPostRequest", ""),
      contentType,
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
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCostAzureUCConfigs");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/azure_uc_config";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.createCostAzureUCConfigs",
      CloudCostManagementApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
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
      serialize(body, TypingInfo, "AzureUCConfigPostRequest", ""),
      contentType,
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
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCostGCPUsageCostConfig");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/gcp_uc_config";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.createCostGCPUsageCostConfig",
      CloudCostManagementApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
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
      serialize(body, TypingInfo, "GCPUsageCostConfigPostRequest", ""),
      contentType,
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
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCustomAllocationRule");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/arbitrary_rule";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.createCustomAllocationRule",
      CloudCostManagementApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
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
      serialize(body, TypingInfo, "ArbitraryCostUpsertRequest", ""),
      contentType,
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
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createTagPipelinesRuleset");
    }

    // Path Params
    const localVarPath = "/api/v2/tags/enrichment";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.createTagPipelinesRuleset",
      CloudCostManagementApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
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
      serialize(body, TypingInfo, "CreateRulesetRequest", ""),
      contentType,
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
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'budgetId' is not null or undefined
    if (budgetId === null || budgetId === undefined) {
      throw new RequiredError("budgetId", "deleteBudget");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/budget/{budget_id}".replace(
      "{budget_id}",
      encodeURIComponent(String(budgetId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.deleteBudget",
      CloudCostManagementApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
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

  public async deleteCostAWSCURConfig(
    cloudAccountId: number,
    _options?: Configuration,
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
        encodeURIComponent(String(cloudAccountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.deleteCostAWSCURConfig",
      CloudCostManagementApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
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
    _options?: Configuration,
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
        encodeURIComponent(String(cloudAccountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.deleteCostAzureUCConfig",
      CloudCostManagementApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
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
    _options?: Configuration,
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
        encodeURIComponent(String(cloudAccountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.deleteCostGCPUsageCostConfig",
      CloudCostManagementApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
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
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "deleteCustomAllocationRule");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/arbitrary_rule/{rule_id}".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.deleteCustomAllocationRule",
      CloudCostManagementApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
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
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'fileId' is not null or undefined
    if (fileId === null || fileId === undefined) {
      throw new RequiredError("fileId", "deleteCustomCostsFile");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/custom_costs/{file_id}".replace(
      "{file_id}",
      encodeURIComponent(String(fileId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.deleteCustomCostsFile",
      CloudCostManagementApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
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
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'rulesetId' is not null or undefined
    if (rulesetId === null || rulesetId === undefined) {
      throw new RequiredError("rulesetId", "deleteTagPipelinesRuleset");
    }

    // Path Params
    const localVarPath = "/api/v2/tags/enrichment/{ruleset_id}".replace(
      "{ruleset_id}",
      encodeURIComponent(String(rulesetId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.deleteTagPipelinesRuleset",
      CloudCostManagementApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
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
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'budgetId' is not null or undefined
    if (budgetId === null || budgetId === undefined) {
      throw new RequiredError("budgetId", "getBudget");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/budget/{budget_id}".replace(
      "{budget_id}",
      encodeURIComponent(String(budgetId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.getBudget",
      CloudCostManagementApi.operationServers,
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

  public async getCommitmentsCommitmentList(
    provider: CommitmentsProvider,
    product: string,
    start: number,
    end: number,
    filterBy?: string,
    commitmentType?: CommitmentsCommitmentType,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "CloudCostManagementApi.v2.getCommitmentsCommitmentList"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getCommitmentsCommitmentList' is disabled. Enable it by setting `configuration.unstableOperations['CloudCostManagementApi.v2.getCommitmentsCommitmentList'] = true`",
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
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.getCommitmentsCommitmentList",
      CloudCostManagementApi.operationServers,
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

    // Query Params
    if (provider !== undefined) {
      requestContext.setQueryParam(
        "provider",
        serialize(provider, TypingInfo, "CommitmentsProvider", ""),
        "",
      );
    }
    if (product !== undefined) {
      requestContext.setQueryParam(
        "product",
        serialize(product, TypingInfo, "string", ""),
        "",
      );
    }
    if (start !== undefined) {
      requestContext.setQueryParam(
        "start",
        serialize(start, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (end !== undefined) {
      requestContext.setQueryParam(
        "end",
        serialize(end, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (filterBy !== undefined) {
      requestContext.setQueryParam(
        "filterBy",
        serialize(filterBy, TypingInfo, "string", ""),
        "",
      );
    }
    if (commitmentType !== undefined) {
      requestContext.setQueryParam(
        "commitmentType",
        serialize(commitmentType, TypingInfo, "CommitmentsCommitmentType", ""),
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

  public async getCommitmentsCoverageScalar(
    provider: CommitmentsProvider,
    product: string,
    start: number,
    end: number,
    filterBy?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "CloudCostManagementApi.v2.getCommitmentsCoverageScalar"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getCommitmentsCoverageScalar' is disabled. Enable it by setting `configuration.unstableOperations['CloudCostManagementApi.v2.getCommitmentsCoverageScalar'] = true`",
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
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.getCommitmentsCoverageScalar",
      CloudCostManagementApi.operationServers,
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

    // Query Params
    if (provider !== undefined) {
      requestContext.setQueryParam(
        "provider",
        serialize(provider, TypingInfo, "CommitmentsProvider", ""),
        "",
      );
    }
    if (product !== undefined) {
      requestContext.setQueryParam(
        "product",
        serialize(product, TypingInfo, "string", ""),
        "",
      );
    }
    if (start !== undefined) {
      requestContext.setQueryParam(
        "start",
        serialize(start, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (end !== undefined) {
      requestContext.setQueryParam(
        "end",
        serialize(end, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (filterBy !== undefined) {
      requestContext.setQueryParam(
        "filterBy",
        serialize(filterBy, TypingInfo, "string", ""),
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

  public async getCommitmentsCoverageTimeseries(
    provider: CommitmentsProvider,
    product: string,
    start: number,
    end: number,
    filterBy?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "CloudCostManagementApi.v2.getCommitmentsCoverageTimeseries"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getCommitmentsCoverageTimeseries' is disabled. Enable it by setting `configuration.unstableOperations['CloudCostManagementApi.v2.getCommitmentsCoverageTimeseries'] = true`",
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
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.getCommitmentsCoverageTimeseries",
      CloudCostManagementApi.operationServers,
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

    // Query Params
    if (provider !== undefined) {
      requestContext.setQueryParam(
        "provider",
        serialize(provider, TypingInfo, "CommitmentsProvider", ""),
        "",
      );
    }
    if (product !== undefined) {
      requestContext.setQueryParam(
        "product",
        serialize(product, TypingInfo, "string", ""),
        "",
      );
    }
    if (start !== undefined) {
      requestContext.setQueryParam(
        "start",
        serialize(start, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (end !== undefined) {
      requestContext.setQueryParam(
        "end",
        serialize(end, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (filterBy !== undefined) {
      requestContext.setQueryParam(
        "filterBy",
        serialize(filterBy, TypingInfo, "string", ""),
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

  public async getCommitmentsOnDemandHotspotsScalar(
    provider: CommitmentsProvider,
    product: string,
    start: number,
    end: number,
    filterBy?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "CloudCostManagementApi.v2.getCommitmentsOnDemandHotspotsScalar"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getCommitmentsOnDemandHotspotsScalar' is disabled. Enable it by setting `configuration.unstableOperations['CloudCostManagementApi.v2.getCommitmentsOnDemandHotspotsScalar'] = true`",
      );
    }

    // verify required parameter 'provider' is not null or undefined
    if (provider === null || provider === undefined) {
      throw new RequiredError(
        "provider",
        "getCommitmentsOnDemandHotspotsScalar",
      );
    }

    // verify required parameter 'product' is not null or undefined
    if (product === null || product === undefined) {
      throw new RequiredError(
        "product",
        "getCommitmentsOnDemandHotspotsScalar",
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
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.getCommitmentsOnDemandHotspotsScalar",
      CloudCostManagementApi.operationServers,
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

    // Query Params
    if (provider !== undefined) {
      requestContext.setQueryParam(
        "provider",
        serialize(provider, TypingInfo, "CommitmentsProvider", ""),
        "",
      );
    }
    if (product !== undefined) {
      requestContext.setQueryParam(
        "product",
        serialize(product, TypingInfo, "string", ""),
        "",
      );
    }
    if (start !== undefined) {
      requestContext.setQueryParam(
        "start",
        serialize(start, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (end !== undefined) {
      requestContext.setQueryParam(
        "end",
        serialize(end, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (filterBy !== undefined) {
      requestContext.setQueryParam(
        "filterBy",
        serialize(filterBy, TypingInfo, "string", ""),
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

  public async getCommitmentsSavingsScalar(
    provider: CommitmentsProvider,
    product: string,
    start: number,
    end: number,
    filterBy?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "CloudCostManagementApi.v2.getCommitmentsSavingsScalar"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getCommitmentsSavingsScalar' is disabled. Enable it by setting `configuration.unstableOperations['CloudCostManagementApi.v2.getCommitmentsSavingsScalar'] = true`",
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
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.getCommitmentsSavingsScalar",
      CloudCostManagementApi.operationServers,
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

    // Query Params
    if (provider !== undefined) {
      requestContext.setQueryParam(
        "provider",
        serialize(provider, TypingInfo, "CommitmentsProvider", ""),
        "",
      );
    }
    if (product !== undefined) {
      requestContext.setQueryParam(
        "product",
        serialize(product, TypingInfo, "string", ""),
        "",
      );
    }
    if (start !== undefined) {
      requestContext.setQueryParam(
        "start",
        serialize(start, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (end !== undefined) {
      requestContext.setQueryParam(
        "end",
        serialize(end, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (filterBy !== undefined) {
      requestContext.setQueryParam(
        "filterBy",
        serialize(filterBy, TypingInfo, "string", ""),
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

  public async getCommitmentsSavingsTimeseries(
    provider: CommitmentsProvider,
    product: string,
    start: number,
    end: number,
    filterBy?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "CloudCostManagementApi.v2.getCommitmentsSavingsTimeseries"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getCommitmentsSavingsTimeseries' is disabled. Enable it by setting `configuration.unstableOperations['CloudCostManagementApi.v2.getCommitmentsSavingsTimeseries'] = true`",
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
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.getCommitmentsSavingsTimeseries",
      CloudCostManagementApi.operationServers,
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

    // Query Params
    if (provider !== undefined) {
      requestContext.setQueryParam(
        "provider",
        serialize(provider, TypingInfo, "CommitmentsProvider", ""),
        "",
      );
    }
    if (product !== undefined) {
      requestContext.setQueryParam(
        "product",
        serialize(product, TypingInfo, "string", ""),
        "",
      );
    }
    if (start !== undefined) {
      requestContext.setQueryParam(
        "start",
        serialize(start, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (end !== undefined) {
      requestContext.setQueryParam(
        "end",
        serialize(end, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (filterBy !== undefined) {
      requestContext.setQueryParam(
        "filterBy",
        serialize(filterBy, TypingInfo, "string", ""),
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

  public async getCommitmentsUtilizationScalar(
    provider: CommitmentsProvider,
    product: string,
    start: number,
    end: number,
    filterBy?: string,
    commitmentType?: CommitmentsCommitmentType,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "CloudCostManagementApi.v2.getCommitmentsUtilizationScalar"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getCommitmentsUtilizationScalar' is disabled. Enable it by setting `configuration.unstableOperations['CloudCostManagementApi.v2.getCommitmentsUtilizationScalar'] = true`",
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
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.getCommitmentsUtilizationScalar",
      CloudCostManagementApi.operationServers,
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

    // Query Params
    if (provider !== undefined) {
      requestContext.setQueryParam(
        "provider",
        serialize(provider, TypingInfo, "CommitmentsProvider", ""),
        "",
      );
    }
    if (product !== undefined) {
      requestContext.setQueryParam(
        "product",
        serialize(product, TypingInfo, "string", ""),
        "",
      );
    }
    if (start !== undefined) {
      requestContext.setQueryParam(
        "start",
        serialize(start, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (end !== undefined) {
      requestContext.setQueryParam(
        "end",
        serialize(end, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (filterBy !== undefined) {
      requestContext.setQueryParam(
        "filterBy",
        serialize(filterBy, TypingInfo, "string", ""),
        "",
      );
    }
    if (commitmentType !== undefined) {
      requestContext.setQueryParam(
        "commitmentType",
        serialize(commitmentType, TypingInfo, "CommitmentsCommitmentType", ""),
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

  public async getCommitmentsUtilizationTimeseries(
    provider: CommitmentsProvider,
    product: string,
    start: number,
    end: number,
    filterBy?: string,
    commitmentType?: CommitmentsCommitmentType,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "CloudCostManagementApi.v2.getCommitmentsUtilizationTimeseries"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getCommitmentsUtilizationTimeseries' is disabled. Enable it by setting `configuration.unstableOperations['CloudCostManagementApi.v2.getCommitmentsUtilizationTimeseries'] = true`",
      );
    }

    // verify required parameter 'provider' is not null or undefined
    if (provider === null || provider === undefined) {
      throw new RequiredError(
        "provider",
        "getCommitmentsUtilizationTimeseries",
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
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.getCommitmentsUtilizationTimeseries",
      CloudCostManagementApi.operationServers,
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

    // Query Params
    if (provider !== undefined) {
      requestContext.setQueryParam(
        "provider",
        serialize(provider, TypingInfo, "CommitmentsProvider", ""),
        "",
      );
    }
    if (product !== undefined) {
      requestContext.setQueryParam(
        "product",
        serialize(product, TypingInfo, "string", ""),
        "",
      );
    }
    if (start !== undefined) {
      requestContext.setQueryParam(
        "start",
        serialize(start, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (end !== undefined) {
      requestContext.setQueryParam(
        "end",
        serialize(end, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (filterBy !== undefined) {
      requestContext.setQueryParam(
        "filterBy",
        serialize(filterBy, TypingInfo, "string", ""),
        "",
      );
    }
    if (commitmentType !== undefined) {
      requestContext.setQueryParam(
        "commitmentType",
        serialize(commitmentType, TypingInfo, "CommitmentsCommitmentType", ""),
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

  public async getCostAnomaly(
    anomalyId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["CloudCostManagementApi.v2.getCostAnomaly"]
    ) {
      throw new Error(
        "Unstable operation 'getCostAnomaly' is disabled. Enable it by setting `configuration.unstableOperations['CloudCostManagementApi.v2.getCostAnomaly'] = true`",
      );
    }

    // verify required parameter 'anomalyId' is not null or undefined
    if (anomalyId === null || anomalyId === undefined) {
      throw new RequiredError("anomalyId", "getCostAnomaly");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/anomalies/{anomaly_id}".replace(
      "{anomaly_id}",
      encodeURIComponent(String(anomalyId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.getCostAnomaly",
      CloudCostManagementApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getCostAWSCURConfig(
    cloudAccountId: number,
    _options?: Configuration,
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
        encodeURIComponent(String(cloudAccountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.getCostAWSCURConfig",
      CloudCostManagementApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getCostAzureUCConfig(
    cloudAccountId: number,
    _options?: Configuration,
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
        encodeURIComponent(String(cloudAccountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.getCostAzureUCConfig",
      CloudCostManagementApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getCostGCPUsageCostConfig(
    cloudAccountId: number,
    _options?: Configuration,
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
        encodeURIComponent(String(cloudAccountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.getCostGCPUsageCostConfig",
      CloudCostManagementApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getCostTagKey(
    tagKey: string,
    filterMetric?: string,
    pageSize?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'tagKey' is not null or undefined
    if (tagKey === null || tagKey === undefined) {
      throw new RequiredError("tagKey", "getCostTagKey");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/tag_keys/{tag_key}".replace(
      "{tag_key}",
      encodeURIComponent(String(tagKey)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.getCostTagKey",
      CloudCostManagementApi.operationServers,
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

    // Query Params
    if (filterMetric !== undefined) {
      requestContext.setQueryParam(
        "filter[metric]",
        serialize(filterMetric, TypingInfo, "string", ""),
        "",
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        serialize(pageSize, TypingInfo, "number", "int32"),
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

  public async getCustomAllocationRule(
    ruleId: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "getCustomAllocationRule");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/arbitrary_rule/{rule_id}".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.getCustomAllocationRule",
      CloudCostManagementApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getCustomCostsFile(
    fileId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'fileId' is not null or undefined
    if (fileId === null || fileId === undefined) {
      throw new RequiredError("fileId", "getCustomCostsFile");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/custom_costs/{file_id}".replace(
      "{file_id}",
      encodeURIComponent(String(fileId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.getCustomCostsFile",
      CloudCostManagementApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getTagPipelinesRuleset(
    rulesetId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'rulesetId' is not null or undefined
    if (rulesetId === null || rulesetId === undefined) {
      throw new RequiredError("rulesetId", "getTagPipelinesRuleset");
    }

    // Path Params
    const localVarPath = "/api/v2/tags/enrichment/{ruleset_id}".replace(
      "{ruleset_id}",
      encodeURIComponent(String(rulesetId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.getTagPipelinesRuleset",
      CloudCostManagementApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listBudgets(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cost/budgets";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.listBudgets",
      CloudCostManagementApi.operationServers,
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
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["CloudCostManagementApi.v2.listCostAnomalies"]
    ) {
      throw new Error(
        "Unstable operation 'listCostAnomalies' is disabled. Enable it by setting `configuration.unstableOperations['CloudCostManagementApi.v2.listCostAnomalies'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/cost/anomalies";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.listCostAnomalies",
      CloudCostManagementApi.operationServers,
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

    // Query Params
    if (start !== undefined) {
      requestContext.setQueryParam(
        "start",
        serialize(start, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (end !== undefined) {
      requestContext.setQueryParam(
        "end",
        serialize(end, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (filter !== undefined) {
      requestContext.setQueryParam(
        "filter",
        serialize(filter, TypingInfo, "string", ""),
        "",
      );
    }
    if (minAnomalousThreshold !== undefined) {
      requestContext.setQueryParam(
        "min_anomalous_threshold",
        serialize(minAnomalousThreshold, TypingInfo, "string", ""),
        "",
      );
    }
    if (minCostThreshold !== undefined) {
      requestContext.setQueryParam(
        "min_cost_threshold",
        serialize(minCostThreshold, TypingInfo, "string", ""),
        "",
      );
    }
    if (dismissalCause !== undefined) {
      requestContext.setQueryParam(
        "dismissal_cause",
        serialize(dismissalCause, TypingInfo, "string", ""),
        "",
      );
    }
    if (orderBy !== undefined) {
      requestContext.setQueryParam(
        "order_by",
        serialize(orderBy, TypingInfo, "string", ""),
        "",
      );
    }
    if (order !== undefined) {
      requestContext.setQueryParam(
        "order",
        serialize(order, TypingInfo, "string", ""),
        "",
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        serialize(limit, TypingInfo, "number", ""),
        "",
      );
    }
    if (offset !== undefined) {
      requestContext.setQueryParam(
        "offset",
        serialize(offset, TypingInfo, "number", ""),
        "",
      );
    }
    if (providerIds !== undefined) {
      requestContext.setQueryParam(
        "provider_ids",
        serialize(providerIds, TypingInfo, "Array<string>", ""),
        "multi",
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
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cost/aws_cur_config";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.listCostAWSCURConfigs",
      CloudCostManagementApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listCostAzureUCConfigs(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cost/azure_uc_config";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.listCostAzureUCConfigs",
      CloudCostManagementApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listCostGCPUsageCostConfigs(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cost/gcp_uc_config";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.listCostGCPUsageCostConfigs",
      CloudCostManagementApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listCostOCIConfigs(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cost/oci_config";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.listCostOCIConfigs",
      CloudCostManagementApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listCostTagDescriptions(
    filterCloud?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cost/tag_descriptions";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.listCostTagDescriptions",
      CloudCostManagementApi.operationServers,
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

    // Query Params
    if (filterCloud !== undefined) {
      requestContext.setQueryParam(
        "filter[cloud]",
        serialize(filterCloud, TypingInfo, "string", ""),
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

  public async listCostTagKeys(
    filterMetric?: string,
    filterTags?: Array<string>,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cost/tag_keys";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.listCostTagKeys",
      CloudCostManagementApi.operationServers,
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

    // Query Params
    if (filterMetric !== undefined) {
      requestContext.setQueryParam(
        "filter[metric]",
        serialize(filterMetric, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterTags !== undefined) {
      requestContext.setQueryParam(
        "filter[tags]",
        serialize(filterTags, TypingInfo, "Array<string>", ""),
        "multi",
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
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cost/tags";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.listCostTags",
      CloudCostManagementApi.operationServers,
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

    // Query Params
    if (filterMetric !== undefined) {
      requestContext.setQueryParam(
        "filter[metric]",
        serialize(filterMetric, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterMatch !== undefined) {
      requestContext.setQueryParam(
        "filter[match]",
        serialize(filterMatch, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterTags !== undefined) {
      requestContext.setQueryParam(
        "filter[tags]",
        serialize(filterTags, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (filterTagKeys !== undefined) {
      requestContext.setQueryParam(
        "filter[tag_keys]",
        serialize(filterTagKeys, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        serialize(pageSize, TypingInfo, "number", "int32"),
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

  public async listCustomAllocationRules(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cost/arbitrary_rule";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.listCustomAllocationRules",
      CloudCostManagementApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listCustomAllocationRulesStatus(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cost/arbitrary_rule/status";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.listCustomAllocationRulesStatus",
      CloudCostManagementApi.operationServers,
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
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cost/custom_costs";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.listCustomCostsFiles",
      CloudCostManagementApi.operationServers,
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

    // Query Params
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
    if (filterStatus !== undefined) {
      requestContext.setQueryParam(
        "filter[status]",
        serialize(filterStatus, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterName !== undefined) {
      requestContext.setQueryParam(
        "filter[name]",
        serialize(filterName, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterProvider !== undefined) {
      requestContext.setQueryParam(
        "filter[provider]",
        serialize(filterProvider, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "string", ""),
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

  public async listTagPipelinesRulesets(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/tags/enrichment";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.listTagPipelinesRulesets",
      CloudCostManagementApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listTagPipelinesRulesetsStatus(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/tags/enrichment/status";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.listTagPipelinesRulesetsStatus",
      CloudCostManagementApi.operationServers,
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async reorderCustomAllocationRules(
    body: ReorderRuleResourceArray,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "reorderCustomAllocationRules");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/arbitrary_rule/reorder";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.reorderCustomAllocationRules",
      CloudCostManagementApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "ReorderRuleResourceArray", ""),
      contentType,
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
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "reorderTagPipelinesRulesets");
    }

    // Path Params
    const localVarPath = "/api/v2/tags/enrichment/reorder";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.reorderTagPipelinesRulesets",
      CloudCostManagementApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "ReorderRulesetResourceArray", ""),
      contentType,
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
    _options?: Configuration,
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
        encodeURIComponent(String(cloudAccountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.updateCostAWSCURConfig",
      CloudCostManagementApi.operationServers,
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
      serialize(body, TypingInfo, "AwsCURConfigPatchRequest", ""),
      contentType,
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
    _options?: Configuration,
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
        encodeURIComponent(String(cloudAccountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.updateCostAzureUCConfigs",
      CloudCostManagementApi.operationServers,
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
      serialize(body, TypingInfo, "AzureUCConfigPatchRequest", ""),
      contentType,
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
    _options?: Configuration,
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
        encodeURIComponent(String(cloudAccountId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.updateCostGCPUsageCostConfig",
      CloudCostManagementApi.operationServers,
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
      serialize(body, TypingInfo, "GCPUsageCostConfigPatchRequest", ""),
      contentType,
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
    _options?: Configuration,
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
      encodeURIComponent(String(ruleId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.updateCustomAllocationRule",
      CloudCostManagementApi.operationServers,
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
      serialize(body, TypingInfo, "ArbitraryCostUpsertRequest", ""),
      contentType,
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
    _options?: Configuration,
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
      encodeURIComponent(String(rulesetId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.updateTagPipelinesRuleset",
      CloudCostManagementApi.operationServers,
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
      serialize(body, TypingInfo, "UpdateRulesetRequest", ""),
      contentType,
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
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "uploadCustomCostsFile");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/custom_costs";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.uploadCustomCostsFile",
      CloudCostManagementApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
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
      serialize(body, TypingInfo, "Array<CustomCostsFileLineItem>", ""),
      contentType,
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
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "upsertBudget");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/budget";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.upsertBudget",
      CloudCostManagementApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
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
      serialize(body, TypingInfo, "BudgetWithEntries", ""),
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

  public async validateBudget(
    body: BudgetValidationRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "validateBudget");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/budget/validate";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.validateBudget",
      CloudCostManagementApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
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
      serialize(body, TypingInfo, "BudgetValidationRequest", ""),
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

  public async validateCsvBudget(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cost/budget/csv/validate";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.validateCsvBudget",
      CloudCostManagementApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    return requestContext;
  }

  public async validateQuery(
    body: RulesValidateQueryRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "validateQuery");
    }

    // Path Params
    const localVarPath = "/api/v2/tags/enrichment/validate-query";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.validateQuery",
      CloudCostManagementApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
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
      serialize(body, TypingInfo, "RulesValidateQueryRequest", ""),
      contentType,
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
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createCostAWSCURConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCostAWSCURConfig(
    response: ResponseContext,
  ): Promise<AwsCurConfigResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AwsCurConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AwsCurConfigResponse",
      ) as AwsCurConfigResponse;
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
      const body: AwsCurConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AwsCurConfigResponse",
        "",
      ) as AwsCurConfigResponse;
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
   * @params response Response returned by the server for a request to createCostAzureUCConfigs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCostAzureUCConfigs(
    response: ResponseContext,
  ): Promise<AzureUCConfigPairsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AzureUCConfigPairsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AzureUCConfigPairsResponse",
      ) as AzureUCConfigPairsResponse;
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
      const body: AzureUCConfigPairsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AzureUCConfigPairsResponse",
        "",
      ) as AzureUCConfigPairsResponse;
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
   * @params response Response returned by the server for a request to createCostGCPUsageCostConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCostGCPUsageCostConfig(
    response: ResponseContext,
  ): Promise<GCPUsageCostConfigResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GCPUsageCostConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GCPUsageCostConfigResponse",
      ) as GCPUsageCostConfigResponse;
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
      const body: GCPUsageCostConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GCPUsageCostConfigResponse",
        "",
      ) as GCPUsageCostConfigResponse;
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
   * @params response Response returned by the server for a request to createCustomAllocationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCustomAllocationRule(
    response: ResponseContext,
  ): Promise<ArbitraryRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ArbitraryRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ArbitraryRuleResponse",
      ) as ArbitraryRuleResponse;
      return body;
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
      const body: ArbitraryRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ArbitraryRuleResponse",
        "",
      ) as ArbitraryRuleResponse;
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
   * @params response Response returned by the server for a request to createTagPipelinesRuleset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createTagPipelinesRuleset(
    response: ResponseContext,
  ): Promise<RulesetResp> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RulesetResp = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RulesetResp",
      ) as RulesetResp;
      return body;
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
      const body: RulesetResp = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RulesetResp",
        "",
      ) as RulesetResp;
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
   * @params response Response returned by the server for a request to deleteBudget
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteBudget(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
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
      return;
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
   * @params response Response returned by the server for a request to deleteCostAWSCURConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteCostAWSCURConfig(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
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
      return;
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
   * @params response Response returned by the server for a request to deleteCostAzureUCConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteCostAzureUCConfig(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
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
      return;
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
   * @params response Response returned by the server for a request to deleteCostGCPUsageCostConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteCostGCPUsageCostConfig(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
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
      return;
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
   * @params response Response returned by the server for a request to deleteCustomAllocationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteCustomAllocationRule(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
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
      return;
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
   * @params response Response returned by the server for a request to deleteCustomCostsFile
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteCustomCostsFile(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
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
      return;
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
   * @params response Response returned by the server for a request to deleteTagPipelinesRuleset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteTagPipelinesRuleset(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
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
      return;
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
   * @params response Response returned by the server for a request to getBudget
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getBudget(
    response: ResponseContext,
  ): Promise<BudgetWithEntries> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: BudgetWithEntries = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "BudgetWithEntries",
      ) as BudgetWithEntries;
      return body;
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
      const body: BudgetWithEntries = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "BudgetWithEntries",
        "",
      ) as BudgetWithEntries;
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
   * @params response Response returned by the server for a request to getCommitmentsCommitmentList
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCommitmentsCommitmentList(
    response: ResponseContext,
  ): Promise<CommitmentsListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CommitmentsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CommitmentsListResponse",
      ) as CommitmentsListResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: CommitmentsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CommitmentsListResponse",
        "",
      ) as CommitmentsListResponse;
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
   * @params response Response returned by the server for a request to getCommitmentsCoverageScalar
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCommitmentsCoverageScalar(
    response: ResponseContext,
  ): Promise<CommitmentsCoverageScalarResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CommitmentsCoverageScalarResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CommitmentsCoverageScalarResponse",
      ) as CommitmentsCoverageScalarResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: CommitmentsCoverageScalarResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CommitmentsCoverageScalarResponse",
        "",
      ) as CommitmentsCoverageScalarResponse;
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
   * @params response Response returned by the server for a request to getCommitmentsCoverageTimeseries
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCommitmentsCoverageTimeseries(
    response: ResponseContext,
  ): Promise<CommitmentsCoverageTimeseriesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CommitmentsCoverageTimeseriesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CommitmentsCoverageTimeseriesResponse",
      ) as CommitmentsCoverageTimeseriesResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: CommitmentsCoverageTimeseriesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CommitmentsCoverageTimeseriesResponse",
        "",
      ) as CommitmentsCoverageTimeseriesResponse;
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
   * @params response Response returned by the server for a request to getCommitmentsOnDemandHotspotsScalar
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCommitmentsOnDemandHotspotsScalar(
    response: ResponseContext,
  ): Promise<CommitmentsOnDemandHotspotsScalarResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CommitmentsOnDemandHotspotsScalarResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CommitmentsOnDemandHotspotsScalarResponse",
      ) as CommitmentsOnDemandHotspotsScalarResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: CommitmentsOnDemandHotspotsScalarResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CommitmentsOnDemandHotspotsScalarResponse",
        "",
      ) as CommitmentsOnDemandHotspotsScalarResponse;
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
   * @params response Response returned by the server for a request to getCommitmentsSavingsScalar
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCommitmentsSavingsScalar(
    response: ResponseContext,
  ): Promise<CommitmentsSavingsScalarResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CommitmentsSavingsScalarResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CommitmentsSavingsScalarResponse",
      ) as CommitmentsSavingsScalarResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: CommitmentsSavingsScalarResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CommitmentsSavingsScalarResponse",
        "",
      ) as CommitmentsSavingsScalarResponse;
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
   * @params response Response returned by the server for a request to getCommitmentsSavingsTimeseries
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCommitmentsSavingsTimeseries(
    response: ResponseContext,
  ): Promise<CommitmentsSavingsTimeseriesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CommitmentsSavingsTimeseriesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CommitmentsSavingsTimeseriesResponse",
      ) as CommitmentsSavingsTimeseriesResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: CommitmentsSavingsTimeseriesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CommitmentsSavingsTimeseriesResponse",
        "",
      ) as CommitmentsSavingsTimeseriesResponse;
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
   * @params response Response returned by the server for a request to getCommitmentsUtilizationScalar
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCommitmentsUtilizationScalar(
    response: ResponseContext,
  ): Promise<CommitmentsUtilizationScalarResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CommitmentsUtilizationScalarResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CommitmentsUtilizationScalarResponse",
      ) as CommitmentsUtilizationScalarResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: CommitmentsUtilizationScalarResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CommitmentsUtilizationScalarResponse",
        "",
      ) as CommitmentsUtilizationScalarResponse;
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
   * @params response Response returned by the server for a request to getCommitmentsUtilizationTimeseries
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCommitmentsUtilizationTimeseries(
    response: ResponseContext,
  ): Promise<CommitmentsUtilizationTimeseriesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CommitmentsUtilizationTimeseriesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CommitmentsUtilizationTimeseriesResponse",
      ) as CommitmentsUtilizationTimeseriesResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: CommitmentsUtilizationTimeseriesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CommitmentsUtilizationTimeseriesResponse",
        "",
      ) as CommitmentsUtilizationTimeseriesResponse;
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
   * @params response Response returned by the server for a request to getCostAnomaly
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCostAnomaly(
    response: ResponseContext,
  ): Promise<CostAnomalyResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CostAnomalyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CostAnomalyResponse",
      ) as CostAnomalyResponse;
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
      const body: CostAnomalyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CostAnomalyResponse",
        "",
      ) as CostAnomalyResponse;
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
   * @params response Response returned by the server for a request to getCostAWSCURConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCostAWSCURConfig(
    response: ResponseContext,
  ): Promise<AwsCurConfigResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AwsCurConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AwsCurConfigResponse",
      ) as AwsCurConfigResponse;
      return body;
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
      const body: AwsCurConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AwsCurConfigResponse",
        "",
      ) as AwsCurConfigResponse;
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
   * @params response Response returned by the server for a request to getCostAzureUCConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCostAzureUCConfig(
    response: ResponseContext,
  ): Promise<UCConfigPair> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: UCConfigPair = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UCConfigPair",
      ) as UCConfigPair;
      return body;
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
      const body: UCConfigPair = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UCConfigPair",
        "",
      ) as UCConfigPair;
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
   * @params response Response returned by the server for a request to getCostGCPUsageCostConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCostGCPUsageCostConfig(
    response: ResponseContext,
  ): Promise<GcpUcConfigResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GcpUcConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GcpUcConfigResponse",
      ) as GcpUcConfigResponse;
      return body;
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
      const body: GcpUcConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GcpUcConfigResponse",
        "",
      ) as GcpUcConfigResponse;
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
   * @params response Response returned by the server for a request to getCostTagKey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCostTagKey(
    response: ResponseContext,
  ): Promise<CostTagKeyResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CostTagKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CostTagKeyResponse",
      ) as CostTagKeyResponse;
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
      const body: CostTagKeyResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CostTagKeyResponse",
        "",
      ) as CostTagKeyResponse;
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
   * @params response Response returned by the server for a request to getCustomAllocationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCustomAllocationRule(
    response: ResponseContext,
  ): Promise<ArbitraryRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ArbitraryRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ArbitraryRuleResponse",
      ) as ArbitraryRuleResponse;
      return body;
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
      const body: ArbitraryRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ArbitraryRuleResponse",
        "",
      ) as ArbitraryRuleResponse;
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
   * @params response Response returned by the server for a request to getCustomCostsFile
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCustomCostsFile(
    response: ResponseContext,
  ): Promise<CustomCostsFileGetResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CustomCostsFileGetResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CustomCostsFileGetResponse",
      ) as CustomCostsFileGetResponse;
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
      const body: CustomCostsFileGetResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CustomCostsFileGetResponse",
        "",
      ) as CustomCostsFileGetResponse;
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
   * @params response Response returned by the server for a request to getTagPipelinesRuleset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTagPipelinesRuleset(
    response: ResponseContext,
  ): Promise<RulesetResp> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RulesetResp = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RulesetResp",
      ) as RulesetResp;
      return body;
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
      const body: RulesetResp = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RulesetResp",
        "",
      ) as RulesetResp;
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
   * @params response Response returned by the server for a request to listBudgets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listBudgets(response: ResponseContext): Promise<BudgetArray> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: BudgetArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "BudgetArray",
      ) as BudgetArray;
      return body;
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
      const body: BudgetArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "BudgetArray",
        "",
      ) as BudgetArray;
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
   * @params response Response returned by the server for a request to listCostAnomalies
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCostAnomalies(
    response: ResponseContext,
  ): Promise<CostAnomaliesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CostAnomaliesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CostAnomaliesResponse",
      ) as CostAnomaliesResponse;
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
      const body: CostAnomaliesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CostAnomaliesResponse",
        "",
      ) as CostAnomaliesResponse;
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
   * @params response Response returned by the server for a request to listCostAWSCURConfigs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCostAWSCURConfigs(
    response: ResponseContext,
  ): Promise<AwsCURConfigsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AwsCURConfigsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AwsCURConfigsResponse",
      ) as AwsCURConfigsResponse;
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
      const body: AwsCURConfigsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AwsCURConfigsResponse",
        "",
      ) as AwsCURConfigsResponse;
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
   * @params response Response returned by the server for a request to listCostAzureUCConfigs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCostAzureUCConfigs(
    response: ResponseContext,
  ): Promise<AzureUCConfigsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AzureUCConfigsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AzureUCConfigsResponse",
      ) as AzureUCConfigsResponse;
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
      const body: AzureUCConfigsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AzureUCConfigsResponse",
        "",
      ) as AzureUCConfigsResponse;
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
   * @params response Response returned by the server for a request to listCostGCPUsageCostConfigs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCostGCPUsageCostConfigs(
    response: ResponseContext,
  ): Promise<GCPUsageCostConfigsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GCPUsageCostConfigsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GCPUsageCostConfigsResponse",
      ) as GCPUsageCostConfigsResponse;
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
      const body: GCPUsageCostConfigsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GCPUsageCostConfigsResponse",
        "",
      ) as GCPUsageCostConfigsResponse;
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
   * @params response Response returned by the server for a request to listCostOCIConfigs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCostOCIConfigs(
    response: ResponseContext,
  ): Promise<OCIConfigsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OCIConfigsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OCIConfigsResponse",
      ) as OCIConfigsResponse;
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
      const body: OCIConfigsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OCIConfigsResponse",
        "",
      ) as OCIConfigsResponse;
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
   * @params response Response returned by the server for a request to listCostTagDescriptions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCostTagDescriptions(
    response: ResponseContext,
  ): Promise<CostTagDescriptionsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CostTagDescriptionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CostTagDescriptionsResponse",
      ) as CostTagDescriptionsResponse;
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
      const body: CostTagDescriptionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CostTagDescriptionsResponse",
        "",
      ) as CostTagDescriptionsResponse;
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
   * @params response Response returned by the server for a request to listCostTagKeys
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCostTagKeys(
    response: ResponseContext,
  ): Promise<CostTagKeysResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CostTagKeysResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CostTagKeysResponse",
      ) as CostTagKeysResponse;
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
      const body: CostTagKeysResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CostTagKeysResponse",
        "",
      ) as CostTagKeysResponse;
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
   * @params response Response returned by the server for a request to listCostTags
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCostTags(
    response: ResponseContext,
  ): Promise<CostTagsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CostTagsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CostTagsResponse",
      ) as CostTagsResponse;
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
      const body: CostTagsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CostTagsResponse",
        "",
      ) as CostTagsResponse;
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
   * @params response Response returned by the server for a request to listCustomAllocationRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCustomAllocationRules(
    response: ResponseContext,
  ): Promise<ArbitraryRuleResponseArray> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ArbitraryRuleResponseArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ArbitraryRuleResponseArray",
      ) as ArbitraryRuleResponseArray;
      return body;
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
      const body: ArbitraryRuleResponseArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ArbitraryRuleResponseArray",
        "",
      ) as ArbitraryRuleResponseArray;
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
   * @params response Response returned by the server for a request to listCustomAllocationRulesStatus
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCustomAllocationRulesStatus(
    response: ResponseContext,
  ): Promise<ArbitraryRuleStatusResponseArray> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ArbitraryRuleStatusResponseArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ArbitraryRuleStatusResponseArray",
      ) as ArbitraryRuleStatusResponseArray;
      return body;
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
      const body: ArbitraryRuleStatusResponseArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ArbitraryRuleStatusResponseArray",
        "",
      ) as ArbitraryRuleStatusResponseArray;
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
   * @params response Response returned by the server for a request to listCustomCostsFiles
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCustomCostsFiles(
    response: ResponseContext,
  ): Promise<CustomCostsFileListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CustomCostsFileListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CustomCostsFileListResponse",
      ) as CustomCostsFileListResponse;
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
      const body: CustomCostsFileListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CustomCostsFileListResponse",
        "",
      ) as CustomCostsFileListResponse;
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
   * @params response Response returned by the server for a request to listTagPipelinesRulesets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTagPipelinesRulesets(
    response: ResponseContext,
  ): Promise<RulesetRespArray> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RulesetRespArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RulesetRespArray",
      ) as RulesetRespArray;
      return body;
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
      const body: RulesetRespArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RulesetRespArray",
        "",
      ) as RulesetRespArray;
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
   * @params response Response returned by the server for a request to listTagPipelinesRulesetsStatus
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTagPipelinesRulesetsStatus(
    response: ResponseContext,
  ): Promise<RulesetStatusRespArray> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RulesetStatusRespArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RulesetStatusRespArray",
      ) as RulesetStatusRespArray;
      return body;
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
      const body: RulesetStatusRespArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RulesetStatusRespArray",
        "",
      ) as RulesetStatusRespArray;
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
   * @params response Response returned by the server for a request to reorderCustomAllocationRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async reorderCustomAllocationRules(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
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
      return;
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
   * @params response Response returned by the server for a request to reorderTagPipelinesRulesets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async reorderTagPipelinesRulesets(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
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
      return;
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
   * @params response Response returned by the server for a request to updateCostAWSCURConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateCostAWSCURConfig(
    response: ResponseContext,
  ): Promise<AwsCURConfigsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AwsCURConfigsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AwsCURConfigsResponse",
      ) as AwsCURConfigsResponse;
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
      const body: AwsCURConfigsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AwsCURConfigsResponse",
        "",
      ) as AwsCURConfigsResponse;
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
   * @params response Response returned by the server for a request to updateCostAzureUCConfigs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateCostAzureUCConfigs(
    response: ResponseContext,
  ): Promise<AzureUCConfigPairsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AzureUCConfigPairsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AzureUCConfigPairsResponse",
      ) as AzureUCConfigPairsResponse;
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
      const body: AzureUCConfigPairsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AzureUCConfigPairsResponse",
        "",
      ) as AzureUCConfigPairsResponse;
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
   * @params response Response returned by the server for a request to updateCostGCPUsageCostConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateCostGCPUsageCostConfig(
    response: ResponseContext,
  ): Promise<GCPUsageCostConfigResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GCPUsageCostConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GCPUsageCostConfigResponse",
      ) as GCPUsageCostConfigResponse;
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
      const body: GCPUsageCostConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GCPUsageCostConfigResponse",
        "",
      ) as GCPUsageCostConfigResponse;
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
   * @params response Response returned by the server for a request to updateCustomAllocationRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateCustomAllocationRule(
    response: ResponseContext,
  ): Promise<ArbitraryRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ArbitraryRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ArbitraryRuleResponse",
      ) as ArbitraryRuleResponse;
      return body;
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
      const body: ArbitraryRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ArbitraryRuleResponse",
        "",
      ) as ArbitraryRuleResponse;
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
   * @params response Response returned by the server for a request to updateTagPipelinesRuleset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateTagPipelinesRuleset(
    response: ResponseContext,
  ): Promise<RulesetResp> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RulesetResp = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RulesetResp",
      ) as RulesetResp;
      return body;
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
      const body: RulesetResp = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RulesetResp",
        "",
      ) as RulesetResp;
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
   * @params response Response returned by the server for a request to uploadCustomCostsFile
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async uploadCustomCostsFile(
    response: ResponseContext,
  ): Promise<CustomCostsFileUploadResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 202) {
      const body: CustomCostsFileUploadResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CustomCostsFileUploadResponse",
      ) as CustomCostsFileUploadResponse;
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
      const body: CustomCostsFileUploadResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CustomCostsFileUploadResponse",
        "",
      ) as CustomCostsFileUploadResponse;
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
   * @params response Response returned by the server for a request to upsertBudget
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async upsertBudget(
    response: ResponseContext,
  ): Promise<BudgetWithEntries> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: BudgetWithEntries = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "BudgetWithEntries",
      ) as BudgetWithEntries;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: BudgetWithEntries = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "BudgetWithEntries",
        "",
      ) as BudgetWithEntries;
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
   * @params response Response returned by the server for a request to validateBudget
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async validateBudget(
    response: ResponseContext,
  ): Promise<BudgetValidationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: BudgetValidationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "BudgetValidationResponse",
      ) as BudgetValidationResponse;
      return body;
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
      const body: BudgetValidationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "BudgetValidationResponse",
        "",
      ) as BudgetValidationResponse;
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
   * @params response Response returned by the server for a request to validateCsvBudget
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async validateCsvBudget(
    response: ResponseContext,
  ): Promise<ValidationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ValidationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ValidationResponse",
      ) as ValidationResponse;
      return body;
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
      const body: ValidationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ValidationResponse",
        "",
      ) as ValidationResponse;
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
   * @params response Response returned by the server for a request to validateQuery
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async validateQuery(
    response: ResponseContext,
  ): Promise<RulesValidateQueryResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RulesValidateQueryResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RulesValidateQueryResponse",
      ) as RulesValidateQueryResponse;
      return body;
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
      const body: RulesValidateQueryResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RulesValidateQueryResponse",
        "",
      ) as RulesValidateQueryResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
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

export interface CloudCostManagementApiDeleteTagPipelinesRulesetRequest {
  /**
   * The unique identifier of the ruleset
   * @type string
   */
  rulesetId: string;
}

export interface CloudCostManagementApiGetBudgetRequest {
  /**
   * Budget id.
   * @type string
   */
  budgetId: string;
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

export interface CloudCostManagementApiGetTagPipelinesRulesetRequest {
  /**
   * The unique identifier of the ruleset
   * @type string
   */
  rulesetId: string;
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

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: CloudCostManagementApiRequestFactory,
    responseProcessor?: CloudCostManagementApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new CloudCostManagementApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new CloudCostManagementApiResponseProcessor();
  }

  /**
   * Create a Cloud Cost Management account for an AWS CUR config.
   * @param param The request object
   */
  public createCostAWSCURConfig(
    param: CloudCostManagementApiCreateCostAWSCURConfigRequest,
    options?: Configuration,
  ): Promise<AwsCurConfigResponse> {
    const requestContextPromise = this.requestFactory.createCostAWSCURConfig(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createCostAWSCURConfig(responseContext);
        });
    });
  }

  /**
   * Create a Cloud Cost Management account for an Azure config.
   * @param param The request object
   */
  public createCostAzureUCConfigs(
    param: CloudCostManagementApiCreateCostAzureUCConfigsRequest,
    options?: Configuration,
  ): Promise<AzureUCConfigPairsResponse> {
    const requestContextPromise = this.requestFactory.createCostAzureUCConfigs(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createCostAzureUCConfigs(
            responseContext,
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
    options?: Configuration,
  ): Promise<GCPUsageCostConfigResponse> {
    const requestContextPromise =
      this.requestFactory.createCostGCPUsageCostConfig(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createCostGCPUsageCostConfig(
            responseContext,
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
    options?: Configuration,
  ): Promise<ArbitraryRuleResponse> {
    const requestContextPromise =
      this.requestFactory.createCustomAllocationRule(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createCustomAllocationRule(
            responseContext,
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
    options?: Configuration,
  ): Promise<RulesetResp> {
    const requestContextPromise = this.requestFactory.createTagPipelinesRuleset(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createTagPipelinesRuleset(
            responseContext,
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
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteBudget(
      param.budgetId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteBudget(responseContext);
        });
    });
  }

  /**
   * Archive a Cloud Cost Management Account.
   * @param param The request object
   */
  public deleteCostAWSCURConfig(
    param: CloudCostManagementApiDeleteCostAWSCURConfigRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteCostAWSCURConfig(
      param.cloudAccountId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteCostAWSCURConfig(responseContext);
        });
    });
  }

  /**
   * Archive a Cloud Cost Management Account.
   * @param param The request object
   */
  public deleteCostAzureUCConfig(
    param: CloudCostManagementApiDeleteCostAzureUCConfigRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteCostAzureUCConfig(
      param.cloudAccountId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteCostAzureUCConfig(
            responseContext,
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
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteCostGCPUsageCostConfig(
        param.cloudAccountId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteCostGCPUsageCostConfig(
            responseContext,
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
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteCustomAllocationRule(param.ruleId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteCustomAllocationRule(
            responseContext,
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
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteCustomCostsFile(
      param.fileId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteCustomCostsFile(responseContext);
        });
    });
  }

  /**
   * Delete a tag pipeline ruleset - Delete an existing tag pipeline ruleset by its ID
   * @param param The request object
   */
  public deleteTagPipelinesRuleset(
    param: CloudCostManagementApiDeleteTagPipelinesRulesetRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteTagPipelinesRuleset(
      param.rulesetId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteTagPipelinesRuleset(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a budget
   * @param param The request object
   */
  public getBudget(
    param: CloudCostManagementApiGetBudgetRequest,
    options?: Configuration,
  ): Promise<BudgetWithEntries> {
    const requestContextPromise = this.requestFactory.getBudget(
      param.budgetId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getBudget(responseContext);
        });
    });
  }

  /**
   * Get a list of individual cloud commitments (Reserved Instances or Savings Plans) with their utilization details. The response schema varies based on the provider, product, and commitment type.
   * @param param The request object
   */
  public getCommitmentsCommitmentList(
    param: CloudCostManagementApiGetCommitmentsCommitmentListRequest,
    options?: Configuration,
  ): Promise<CommitmentsListResponse> {
    const requestContextPromise =
      this.requestFactory.getCommitmentsCommitmentList(
        param.provider,
        param.product,
        param.start,
        param.end,
        param.filterBy,
        param.commitmentType,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCommitmentsCommitmentList(
            responseContext,
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
    options?: Configuration,
  ): Promise<CommitmentsCoverageScalarResponse> {
    const requestContextPromise =
      this.requestFactory.getCommitmentsCoverageScalar(
        param.provider,
        param.product,
        param.start,
        param.end,
        param.filterBy,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCommitmentsCoverageScalar(
            responseContext,
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
    options?: Configuration,
  ): Promise<CommitmentsCoverageTimeseriesResponse> {
    const requestContextPromise =
      this.requestFactory.getCommitmentsCoverageTimeseries(
        param.provider,
        param.product,
        param.start,
        param.end,
        param.filterBy,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCommitmentsCoverageTimeseries(
            responseContext,
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
    options?: Configuration,
  ): Promise<CommitmentsOnDemandHotspotsScalarResponse> {
    const requestContextPromise =
      this.requestFactory.getCommitmentsOnDemandHotspotsScalar(
        param.provider,
        param.product,
        param.start,
        param.end,
        param.filterBy,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCommitmentsOnDemandHotspotsScalar(
            responseContext,
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
    options?: Configuration,
  ): Promise<CommitmentsSavingsScalarResponse> {
    const requestContextPromise =
      this.requestFactory.getCommitmentsSavingsScalar(
        param.provider,
        param.product,
        param.start,
        param.end,
        param.filterBy,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCommitmentsSavingsScalar(
            responseContext,
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
    options?: Configuration,
  ): Promise<CommitmentsSavingsTimeseriesResponse> {
    const requestContextPromise =
      this.requestFactory.getCommitmentsSavingsTimeseries(
        param.provider,
        param.product,
        param.start,
        param.end,
        param.filterBy,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCommitmentsSavingsTimeseries(
            responseContext,
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
    options?: Configuration,
  ): Promise<CommitmentsUtilizationScalarResponse> {
    const requestContextPromise =
      this.requestFactory.getCommitmentsUtilizationScalar(
        param.provider,
        param.product,
        param.start,
        param.end,
        param.filterBy,
        param.commitmentType,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCommitmentsUtilizationScalar(
            responseContext,
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
    options?: Configuration,
  ): Promise<CommitmentsUtilizationTimeseriesResponse> {
    const requestContextPromise =
      this.requestFactory.getCommitmentsUtilizationTimeseries(
        param.provider,
        param.product,
        param.start,
        param.end,
        param.filterBy,
        param.commitmentType,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCommitmentsUtilizationTimeseries(
            responseContext,
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
    options?: Configuration,
  ): Promise<CostAnomalyResponse> {
    const requestContextPromise = this.requestFactory.getCostAnomaly(
      param.anomalyId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCostAnomaly(responseContext);
        });
    });
  }

  /**
   * Get a specific AWS CUR config.
   * @param param The request object
   */
  public getCostAWSCURConfig(
    param: CloudCostManagementApiGetCostAWSCURConfigRequest,
    options?: Configuration,
  ): Promise<AwsCurConfigResponse> {
    const requestContextPromise = this.requestFactory.getCostAWSCURConfig(
      param.cloudAccountId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCostAWSCURConfig(responseContext);
        });
    });
  }

  /**
   * Get a specific Azure config.
   * @param param The request object
   */
  public getCostAzureUCConfig(
    param: CloudCostManagementApiGetCostAzureUCConfigRequest,
    options?: Configuration,
  ): Promise<UCConfigPair> {
    const requestContextPromise = this.requestFactory.getCostAzureUCConfig(
      param.cloudAccountId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCostAzureUCConfig(responseContext);
        });
    });
  }

  /**
   * Get a specific Google Cloud Usage Cost config.
   * @param param The request object
   */
  public getCostGCPUsageCostConfig(
    param: CloudCostManagementApiGetCostGCPUsageCostConfigRequest,
    options?: Configuration,
  ): Promise<GcpUcConfigResponse> {
    const requestContextPromise = this.requestFactory.getCostGCPUsageCostConfig(
      param.cloudAccountId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCostGCPUsageCostConfig(
            responseContext,
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
    options?: Configuration,
  ): Promise<CostTagKeyResponse> {
    const requestContextPromise = this.requestFactory.getCostTagKey(
      param.tagKey,
      param.filterMetric,
      param.pageSize,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCostTagKey(responseContext);
        });
    });
  }

  /**
   * Get a specific custom allocation rule - Retrieve a specific custom allocation rule by its ID
   * @param param The request object
   */
  public getCustomAllocationRule(
    param: CloudCostManagementApiGetCustomAllocationRuleRequest,
    options?: Configuration,
  ): Promise<ArbitraryRuleResponse> {
    const requestContextPromise = this.requestFactory.getCustomAllocationRule(
      param.ruleId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCustomAllocationRule(
            responseContext,
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
    options?: Configuration,
  ): Promise<CustomCostsFileGetResponse> {
    const requestContextPromise = this.requestFactory.getCustomCostsFile(
      param.fileId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCustomCostsFile(responseContext);
        });
    });
  }

  /**
   * Get a specific tag pipeline ruleset - Retrieve a specific tag pipeline ruleset by its ID
   * @param param The request object
   */
  public getTagPipelinesRuleset(
    param: CloudCostManagementApiGetTagPipelinesRulesetRequest,
    options?: Configuration,
  ): Promise<RulesetResp> {
    const requestContextPromise = this.requestFactory.getTagPipelinesRuleset(
      param.rulesetId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getTagPipelinesRuleset(responseContext);
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
          return this.responseProcessor.listBudgets(responseContext);
        });
    });
  }

  /**
   * List detected Cloud Cost Management anomalies for the organization.
   * @param param The request object
   */
  public listCostAnomalies(
    param: CloudCostManagementApiListCostAnomaliesRequest = {},
    options?: Configuration,
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
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCostAnomalies(responseContext);
        });
    });
  }

  /**
   * List the AWS CUR configs.
   * @param param The request object
   */
  public listCostAWSCURConfigs(
    options?: Configuration,
  ): Promise<AwsCURConfigsResponse> {
    const requestContextPromise =
      this.requestFactory.listCostAWSCURConfigs(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCostAWSCURConfigs(responseContext);
        });
    });
  }

  /**
   * List the Azure configs.
   * @param param The request object
   */
  public listCostAzureUCConfigs(
    options?: Configuration,
  ): Promise<AzureUCConfigsResponse> {
    const requestContextPromise =
      this.requestFactory.listCostAzureUCConfigs(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCostAzureUCConfigs(responseContext);
        });
    });
  }

  /**
   * List the Google Cloud Usage Cost configs.
   * @param param The request object
   */
  public listCostGCPUsageCostConfigs(
    options?: Configuration,
  ): Promise<GCPUsageCostConfigsResponse> {
    const requestContextPromise =
      this.requestFactory.listCostGCPUsageCostConfigs(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCostGCPUsageCostConfigs(
            responseContext,
          );
        });
    });
  }

  /**
   * List the OCI configs.
   * @param param The request object
   */
  public listCostOCIConfigs(
    options?: Configuration,
  ): Promise<OCIConfigsResponse> {
    const requestContextPromise =
      this.requestFactory.listCostOCIConfigs(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCostOCIConfigs(responseContext);
        });
    });
  }

  /**
   * List Cloud Cost Management tag key descriptions for the organization. Use `filter[cloud]` to scope the result to a single cloud provider; when omitted, both cross-cloud defaults and cloud-specific descriptions are returned.
   * @param param The request object
   */
  public listCostTagDescriptions(
    param: CloudCostManagementApiListCostTagDescriptionsRequest = {},
    options?: Configuration,
  ): Promise<CostTagDescriptionsResponse> {
    const requestContextPromise = this.requestFactory.listCostTagDescriptions(
      param.filterCloud,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCostTagDescriptions(
            responseContext,
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
    options?: Configuration,
  ): Promise<CostTagKeysResponse> {
    const requestContextPromise = this.requestFactory.listCostTagKeys(
      param.filterMetric,
      param.filterTags,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCostTagKeys(responseContext);
        });
    });
  }

  /**
   * List Cloud Cost Management tags for a given metric.
   * @param param The request object
   */
  public listCostTags(
    param: CloudCostManagementApiListCostTagsRequest = {},
    options?: Configuration,
  ): Promise<CostTagsResponse> {
    const requestContextPromise = this.requestFactory.listCostTags(
      param.filterMetric,
      param.filterMatch,
      param.filterTags,
      param.filterTagKeys,
      param.pageSize,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCostTags(responseContext);
        });
    });
  }

  /**
   * List all custom allocation rules - Retrieve a list of all custom allocation rules for the organization
   * @param param The request object
   */
  public listCustomAllocationRules(
    options?: Configuration,
  ): Promise<ArbitraryRuleResponseArray> {
    const requestContextPromise =
      this.requestFactory.listCustomAllocationRules(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCustomAllocationRules(
            responseContext,
          );
        });
    });
  }

  /**
   * List the processing status of all custom allocation rules. Returns only the ID and processing status for each rule.
   * @param param The request object
   */
  public listCustomAllocationRulesStatus(
    options?: Configuration,
  ): Promise<ArbitraryRuleStatusResponseArray> {
    const requestContextPromise =
      this.requestFactory.listCustomAllocationRulesStatus(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCustomAllocationRulesStatus(
            responseContext,
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
    options?: Configuration,
  ): Promise<CustomCostsFileListResponse> {
    const requestContextPromise = this.requestFactory.listCustomCostsFiles(
      param.pageNumber,
      param.pageSize,
      param.filterStatus,
      param.filterName,
      param.filterProvider,
      param.sort,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCustomCostsFiles(responseContext);
        });
    });
  }

  /**
   * List all tag pipeline rulesets - Retrieve a list of all tag pipeline rulesets for the organization
   * @param param The request object
   */
  public listTagPipelinesRulesets(
    options?: Configuration,
  ): Promise<RulesetRespArray> {
    const requestContextPromise =
      this.requestFactory.listTagPipelinesRulesets(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listTagPipelinesRulesets(
            responseContext,
          );
        });
    });
  }

  /**
   * List the processing status of all tag pipeline rulesets. Returns only the ID and processing status for each ruleset.
   * @param param The request object
   */
  public listTagPipelinesRulesetsStatus(
    options?: Configuration,
  ): Promise<RulesetStatusRespArray> {
    const requestContextPromise =
      this.requestFactory.listTagPipelinesRulesetsStatus(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listTagPipelinesRulesetsStatus(
            responseContext,
          );
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
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.reorderCustomAllocationRules(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.reorderCustomAllocationRules(
            responseContext,
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
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.reorderTagPipelinesRulesets(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.reorderTagPipelinesRulesets(
            responseContext,
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
    options?: Configuration,
  ): Promise<AwsCURConfigsResponse> {
    const requestContextPromise = this.requestFactory.updateCostAWSCURConfig(
      param.cloudAccountId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateCostAWSCURConfig(responseContext);
        });
    });
  }

  /**
   * Update the status of an  Azure config (active/archived).
   * @param param The request object
   */
  public updateCostAzureUCConfigs(
    param: CloudCostManagementApiUpdateCostAzureUCConfigsRequest,
    options?: Configuration,
  ): Promise<AzureUCConfigPairsResponse> {
    const requestContextPromise = this.requestFactory.updateCostAzureUCConfigs(
      param.cloudAccountId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateCostAzureUCConfigs(
            responseContext,
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
    options?: Configuration,
  ): Promise<GCPUsageCostConfigResponse> {
    const requestContextPromise =
      this.requestFactory.updateCostGCPUsageCostConfig(
        param.cloudAccountId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateCostGCPUsageCostConfig(
            responseContext,
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
    options?: Configuration,
  ): Promise<ArbitraryRuleResponse> {
    const requestContextPromise =
      this.requestFactory.updateCustomAllocationRule(
        param.ruleId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateCustomAllocationRule(
            responseContext,
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
    options?: Configuration,
  ): Promise<RulesetResp> {
    const requestContextPromise = this.requestFactory.updateTagPipelinesRuleset(
      param.rulesetId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateTagPipelinesRuleset(
            responseContext,
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
    options?: Configuration,
  ): Promise<CustomCostsFileUploadResponse> {
    const requestContextPromise = this.requestFactory.uploadCustomCostsFile(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.uploadCustomCostsFile(responseContext);
        });
    });
  }

  /**
   * Create a new budget or update an existing one.
   * @param param The request object
   */
  public upsertBudget(
    param: CloudCostManagementApiUpsertBudgetRequest,
    options?: Configuration,
  ): Promise<BudgetWithEntries> {
    const requestContextPromise = this.requestFactory.upsertBudget(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.upsertBudget(responseContext);
        });
    });
  }

  /**
   * Validate a budget configuration without creating or modifying it
   * @param param The request object
   */
  public validateBudget(
    param: CloudCostManagementApiValidateBudgetRequest,
    options?: Configuration,
  ): Promise<BudgetValidationResponse> {
    const requestContextPromise = this.requestFactory.validateBudget(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.validateBudget(responseContext);
        });
    });
  }

  /**
   * @param param The request object
   */
  public validateCsvBudget(
    options?: Configuration,
  ): Promise<ValidationResponse> {
    const requestContextPromise =
      this.requestFactory.validateCsvBudget(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.validateCsvBudget(responseContext);
        });
    });
  }

  /**
   * Validate a tag pipeline query - Validate the syntax and structure of a tag pipeline query
   * @param param The request object
   */
  public validateQuery(
    param: CloudCostManagementApiValidateQueryRequest,
    options?: Configuration,
  ): Promise<RulesValidateQueryResponse> {
    const requestContextPromise = this.requestFactory.validateQuery(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.validateQuery(responseContext);
        });
    });
  }
}
