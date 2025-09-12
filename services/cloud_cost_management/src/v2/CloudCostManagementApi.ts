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
import { AwsCURConfigPatchRequest } from "./models/AwsCURConfigPatchRequest";
import { AwsCURConfigPostRequest } from "./models/AwsCURConfigPostRequest";
import { AwsCurConfigResponse } from "./models/AwsCurConfigResponse";
import { AwsCURConfigsResponse } from "./models/AwsCURConfigsResponse";
import { AzureUCConfigPairsResponse } from "./models/AzureUCConfigPairsResponse";
import { AzureUCConfigPatchRequest } from "./models/AzureUCConfigPatchRequest";
import { AzureUCConfigPostRequest } from "./models/AzureUCConfigPostRequest";
import { AzureUCConfigsResponse } from "./models/AzureUCConfigsResponse";
import { BudgetArray } from "./models/BudgetArray";
import { BudgetWithEntries } from "./models/BudgetWithEntries";
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
import { ReorderRuleResourceArray } from "./models/ReorderRuleResourceArray";
import { ReorderRulesetResourceArray } from "./models/ReorderRulesetResourceArray";
import { RulesetResp } from "./models/RulesetResp";
import { RulesetRespArray } from "./models/RulesetRespArray";
import { RulesValidateQueryRequest } from "./models/RulesValidateQueryRequest";
import { RulesValidateQueryResponse } from "./models/RulesValidateQueryResponse";
import { UCConfigPair } from "./models/UCConfigPair";
import { UpdateRulesetRequest } from "./models/UpdateRulesetRequest";
import { version } from "../version";

export class CloudCostManagementApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("cloud-cost-management", version);
    }
  }
  public async createArbitraryCostRule(
    body: ArbitraryCostUpsertRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createArbitraryCostRule");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/arbitrary_rule";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.createArbitraryCostRule",
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

  public async createRuleset(
    body: CreateRulesetRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createRuleset");
    }

    // Path Params
    const localVarPath = "/api/v2/tags/enrichment";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.createRuleset",
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

  public async deleteArbitraryCostRule(
    ruleId: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "deleteArbitraryCostRule");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/arbitrary_rule/{rule_id}".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.deleteArbitraryCostRule",
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
      "AuthZ",
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

  public async deleteRuleset(
    rulesetId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'rulesetId' is not null or undefined
    if (rulesetId === null || rulesetId === undefined) {
      throw new RequiredError("rulesetId", "deleteRuleset");
    }

    // Path Params
    const localVarPath = "/api/v2/tags/enrichment/{ruleset_id}".replace(
      "{ruleset_id}",
      encodeURIComponent(String(rulesetId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.deleteRuleset",
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

  public async getArbitraryCostRule(
    ruleId: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "getArbitraryCostRule");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/arbitrary_rule/{rule_id}".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.getArbitraryCostRule",
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

  public async getRuleset(
    rulesetId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'rulesetId' is not null or undefined
    if (rulesetId === null || rulesetId === undefined) {
      throw new RequiredError("rulesetId", "getRuleset");
    }

    // Path Params
    const localVarPath = "/api/v2/tags/enrichment/{ruleset_id}".replace(
      "{ruleset_id}",
      encodeURIComponent(String(rulesetId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.getRuleset",
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

  public async listArbitraryCostRules(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cost/arbitrary_rule";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.listArbitraryCostRules",
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

  public async listCustomCostsFiles(
    pageNumber?: number,
    pageSize?: number,
    filterStatus?: string,
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

  public async listRulesets(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/tags/enrichment";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.listRulesets",
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

  public async reorderArbitraryCostRules(
    body: ReorderRuleResourceArray,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "reorderArbitraryCostRules");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/arbitrary_rule/reorder";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.reorderArbitraryCostRules",
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

  public async reorderRulesets(
    body: ReorderRulesetResourceArray,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "reorderRulesets");
    }

    // Path Params
    const localVarPath = "/api/v2/tags/enrichment/reorder";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.reorderRulesets",
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

  public async updateArbitraryCostRule(
    ruleId: number,
    body: ArbitraryCostUpsertRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "updateArbitraryCostRule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateArbitraryCostRule");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/arbitrary_rule/{rule_id}".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.updateArbitraryCostRule",
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

  public async updateRuleset(
    rulesetId: string,
    body: UpdateRulesetRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'rulesetId' is not null or undefined
    if (rulesetId === null || rulesetId === undefined) {
      throw new RequiredError("rulesetId", "updateRuleset");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateRuleset");
    }

    // Path Params
    const localVarPath = "/api/v2/tags/enrichment/{ruleset_id}".replace(
      "{ruleset_id}",
      encodeURIComponent(String(rulesetId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudCostManagementApi.v2.updateRuleset",
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
      "AuthZ",
    ]);

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
   * @params response Response returned by the server for a request to createArbitraryCostRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createArbitraryCostRule(
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
   * @params response Response returned by the server for a request to createRuleset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createRuleset(response: ResponseContext): Promise<RulesetResp> {
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
   * @params response Response returned by the server for a request to deleteArbitraryCostRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteArbitraryCostRule(
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
   * @params response Response returned by the server for a request to deleteBudget
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteBudget(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
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
   * @params response Response returned by the server for a request to deleteRuleset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteRuleset(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to getArbitraryCostRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getArbitraryCostRule(
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
   * @params response Response returned by the server for a request to getRuleset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRuleset(response: ResponseContext): Promise<RulesetResp> {
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
   * @params response Response returned by the server for a request to listArbitraryCostRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listArbitraryCostRules(
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
   * @params response Response returned by the server for a request to listRulesets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listRulesets(
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
   * @params response Response returned by the server for a request to reorderArbitraryCostRules
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async reorderArbitraryCostRules(
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
   * @params response Response returned by the server for a request to reorderRulesets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async reorderRulesets(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to updateArbitraryCostRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateArbitraryCostRule(
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
   * @params response Response returned by the server for a request to updateRuleset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateRuleset(response: ResponseContext): Promise<RulesetResp> {
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

export interface CloudCostManagementApiCreateArbitraryCostRuleRequest {
  /**
   * @type ArbitraryCostUpsertRequest
   */
  body: ArbitraryCostUpsertRequest;
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

export interface CloudCostManagementApiCreateRulesetRequest {
  /**
   * @type CreateRulesetRequest
   */
  body: CreateRulesetRequest;
}

export interface CloudCostManagementApiDeleteArbitraryCostRuleRequest {
  /**
   * The unique identifier of the arbitrary cost rule
   * @type number
   */
  ruleId: number;
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

export interface CloudCostManagementApiDeleteCustomCostsFileRequest {
  /**
   * File ID.
   * @type string
   */
  fileId: string;
}

export interface CloudCostManagementApiDeleteRulesetRequest {
  /**
   * The unique identifier of the ruleset
   * @type string
   */
  rulesetId: string;
}

export interface CloudCostManagementApiGetArbitraryCostRuleRequest {
  /**
   * The unique identifier of the arbitrary cost rule
   * @type number
   */
  ruleId: number;
}

export interface CloudCostManagementApiGetBudgetRequest {
  /**
   * Budget id.
   * @type string
   */
  budgetId: string;
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

export interface CloudCostManagementApiGetCustomCostsFileRequest {
  /**
   * File ID.
   * @type string
   */
  fileId: string;
}

export interface CloudCostManagementApiGetRulesetRequest {
  /**
   * The unique identifier of the ruleset
   * @type string
   */
  rulesetId: string;
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
   * Sort key with optional descending prefix
   * @type string
   */
  sort?: string;
}

export interface CloudCostManagementApiReorderArbitraryCostRulesRequest {
  /**
   * @type ReorderRuleResourceArray
   */
  body: ReorderRuleResourceArray;
}

export interface CloudCostManagementApiReorderRulesetsRequest {
  /**
   * @type ReorderRulesetResourceArray
   */
  body: ReorderRulesetResourceArray;
}

export interface CloudCostManagementApiUpdateArbitraryCostRuleRequest {
  /**
   * The unique identifier of the arbitrary cost rule
   * @type number
   */
  ruleId: number;
  /**
   * @type ArbitraryCostUpsertRequest
   */
  body: ArbitraryCostUpsertRequest;
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

export interface CloudCostManagementApiUpdateRulesetRequest {
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
   * Create a new arbitrary cost rule with the specified filters and allocation strategy.
   *
   * **Strategy Methods:**
   * - **PROPORTIONAL/EVEN**: Allocates costs proportionally/evenly based on existing costs. Requires: granularity, allocated_by_tag_keys. Optional: based_on_costs, allocated_by_filters, evaluate_grouped_by_tag_keys, evaluate_grouped_by_filters.
   * - **PROPORTIONAL_TIMESERIES/EVEN_TIMESERIES**: Allocates based on timeseries data. Requires: granularity, based_on_timeseries. Optional: evaluate_grouped_by_tag_keys.
   * - **PERCENT**: Allocates fixed percentages to specific tags. Requires: allocated_by (array of percentage allocations).
   *
   * **Filter Conditions:**
   * - Use **value** for single-value conditions: "is", "is not", "contains", "does not contain", "=", "!=", "like", "not like", "is all values", "is untagged"
   * - Use **values** for multi-value conditions: "in", "not in"
   * - Cannot use both value and values simultaneously.
   *
   * **Supported operators**: is, is not, is all values, is untagged, contains, does not contain, in, not in, =, !=, like, not like
   * @param param The request object
   */
  public createArbitraryCostRule(
    param: CloudCostManagementApiCreateArbitraryCostRuleRequest,
    options?: Configuration,
  ): Promise<ArbitraryRuleResponse> {
    const requestContextPromise = this.requestFactory.createArbitraryCostRule(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createArbitraryCostRule(
            responseContext,
          );
        });
    });
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
   * Create a new tag pipeline ruleset with the specified rules and configuration
   * @param param The request object
   */
  public createRuleset(
    param: CloudCostManagementApiCreateRulesetRequest,
    options?: Configuration,
  ): Promise<RulesetResp> {
    const requestContextPromise = this.requestFactory.createRuleset(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createRuleset(responseContext);
        });
    });
  }

  /**
   * Delete an arbitrary cost rule - Delete an existing arbitrary cost rule by its ID
   * @param param The request object
   */
  public deleteArbitraryCostRule(
    param: CloudCostManagementApiDeleteArbitraryCostRuleRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteArbitraryCostRule(
      param.ruleId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteArbitraryCostRule(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a budget.
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
  public deleteRuleset(
    param: CloudCostManagementApiDeleteRulesetRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteRuleset(
      param.rulesetId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteRuleset(responseContext);
        });
    });
  }

  /**
   * Get a specific arbitrary cost rule - Retrieve a specific arbitrary cost rule by its ID
   * @param param The request object
   */
  public getArbitraryCostRule(
    param: CloudCostManagementApiGetArbitraryCostRuleRequest,
    options?: Configuration,
  ): Promise<ArbitraryRuleResponse> {
    const requestContextPromise = this.requestFactory.getArbitraryCostRule(
      param.ruleId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getArbitraryCostRule(responseContext);
        });
    });
  }

  /**
   * Get a budget.
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
  public getRuleset(
    param: CloudCostManagementApiGetRulesetRequest,
    options?: Configuration,
  ): Promise<RulesetResp> {
    const requestContextPromise = this.requestFactory.getRuleset(
      param.rulesetId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRuleset(responseContext);
        });
    });
  }

  /**
   * List all arbitrary cost rules - Retrieve a list of all arbitrary cost rules for the organization
   * @param param The request object
   */
  public listArbitraryCostRules(
    options?: Configuration,
  ): Promise<ArbitraryRuleResponseArray> {
    const requestContextPromise =
      this.requestFactory.listArbitraryCostRules(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listArbitraryCostRules(responseContext);
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
  public listRulesets(options?: Configuration): Promise<RulesetRespArray> {
    const requestContextPromise = this.requestFactory.listRulesets(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listRulesets(responseContext);
        });
    });
  }

  /**
   * Reorder arbitrary cost rules - Change the execution order of arbitrary cost rules.
   *
   * **Important**: You must provide the **complete list** of all rule IDs in the desired execution order. The API will reorder ALL rules according to the provided sequence.
   *
   * Rules are executed in the order specified, with lower indices (earlier in the array) having higher priority.
   *
   * **Example**: If you have rules with IDs [123, 456, 789] and want to change order from 123→456→789 to 456→123→789, send: [{"id": "456"}, {"id": "123"}, {"id": "789"}]
   * @param param The request object
   */
  public reorderArbitraryCostRules(
    param: CloudCostManagementApiReorderArbitraryCostRulesRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.reorderArbitraryCostRules(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.reorderArbitraryCostRules(
            responseContext,
          );
        });
    });
  }

  /**
   * Reorder tag pipeline rulesets - Change the execution order of tag pipeline rulesets
   * @param param The request object
   */
  public reorderRulesets(
    param: CloudCostManagementApiReorderRulesetsRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.reorderRulesets(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.reorderRulesets(responseContext);
        });
    });
  }

  /**
   * Update an existing arbitrary cost rule with new filters and allocation strategy.
   *
   * **Strategy Methods:**
   * - **PROPORTIONAL/EVEN**: Allocates costs proportionally/evenly based on existing costs. Requires: granularity, allocated_by_tag_keys. Optional: based_on_costs, allocated_by_filters, evaluate_grouped_by_tag_keys, evaluate_grouped_by_filters.
   * - **PROPORTIONAL_TIMESERIES/EVEN_TIMESERIES**: Allocates based on timeseries data. Requires: granularity, based_on_timeseries. Optional: evaluate_grouped_by_tag_keys.
   * - **PERCENT**: Allocates fixed percentages to specific tags. Requires: allocated_by (array of percentage allocations).
   * - **USAGE_METRIC**: Allocates based on usage metrics (implementation varies).
   *
   * **Filter Conditions:**
   * - Use **value** for single-value conditions: "is", "is not", "contains", "does not contain", "=", "!=", "like", "not like", "is all values", "is untagged"
   * - Use **values** for multi-value conditions: "in", "not in"
   * - Cannot use both value and values simultaneously.
   *
   * **Supported operators**: is, is not, is all values, is untagged, contains, does not contain, in, not in, =, !=, like, not like
   * @param param The request object
   */
  public updateArbitraryCostRule(
    param: CloudCostManagementApiUpdateArbitraryCostRuleRequest,
    options?: Configuration,
  ): Promise<ArbitraryRuleResponse> {
    const requestContextPromise = this.requestFactory.updateArbitraryCostRule(
      param.ruleId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateArbitraryCostRule(
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
   * Update a tag pipeline ruleset - Update an existing tag pipeline ruleset with new rules and configuration
   * @param param The request object
   */
  public updateRuleset(
    param: CloudCostManagementApiUpdateRulesetRequest,
    options?: Configuration,
  ): Promise<RulesetResp> {
    const requestContextPromise = this.requestFactory.updateRuleset(
      param.rulesetId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateRuleset(responseContext);
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
