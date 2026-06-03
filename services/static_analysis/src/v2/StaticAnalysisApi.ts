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
import { AiCustomRuleRequest } from "./models/AiCustomRuleRequest";
import { AiCustomRuleResponse } from "./models/AiCustomRuleResponse";
import { AiCustomRuleRevisionRequest } from "./models/AiCustomRuleRevisionRequest";
import { AiCustomRuleRevisionResponse } from "./models/AiCustomRuleRevisionResponse";
import { AiCustomRuleRevisionResponseData } from "./models/AiCustomRuleRevisionResponseData";
import { AiCustomRuleRevisionsResponse } from "./models/AiCustomRuleRevisionsResponse";
import { AiCustomRulesetRequest } from "./models/AiCustomRulesetRequest";
import { AiCustomRulesetResponse } from "./models/AiCustomRulesetResponse";
import { AiCustomRulesetsResponse } from "./models/AiCustomRulesetsResponse";
import { AiCustomRulesetUpdateRequest } from "./models/AiCustomRulesetUpdateRequest";
import { AiMemoryViolationResultRequest } from "./models/AiMemoryViolationResultRequest";
import { AiMemoryViolationResultsResponse } from "./models/AiMemoryViolationResultsResponse";
import { AiPromptsResponse } from "./models/AiPromptsResponse";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { CustomRuleRequest } from "./models/CustomRuleRequest";
import { CustomRuleResponse } from "./models/CustomRuleResponse";
import { CustomRuleRevision } from "./models/CustomRuleRevision";
import { CustomRuleRevisionRequest } from "./models/CustomRuleRevisionRequest";
import { CustomRuleRevisionResponse } from "./models/CustomRuleRevisionResponse";
import { CustomRuleRevisionsResponse } from "./models/CustomRuleRevisionsResponse";
import { CustomRulesetListResponse } from "./models/CustomRulesetListResponse";
import { CustomRulesetRequest } from "./models/CustomRulesetRequest";
import { CustomRulesetResponse } from "./models/CustomRulesetResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { LicensesListResponse } from "./models/LicensesListResponse";
import { McpScanRequest } from "./models/McpScanRequest";
import { McpScanRequestResponse } from "./models/McpScanRequestResponse";
import { ResolveVulnerableSymbolsRequest } from "./models/ResolveVulnerableSymbolsRequest";
import { ResolveVulnerableSymbolsResponse } from "./models/ResolveVulnerableSymbolsResponse";
import { RevertCustomRuleRevisionRequest } from "./models/RevertCustomRuleRevisionRequest";
import { ScanResultResponse } from "./models/ScanResultResponse";
import { ScaRequest } from "./models/ScaRequest";
import { version } from "../version";

export class StaticAnalysisApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("static-analysis", version);
    }
  }
  public async createAiCustomRule(
    rulesetName: string,
    body: AiCustomRuleRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["StaticAnalysisApi.v2.createAiCustomRule"]
    ) {
      throw new Error(
        "Unstable operation 'createAiCustomRule' is disabled. Enable it by setting `configuration.unstableOperations['StaticAnalysisApi.v2.createAiCustomRule'] = true`",
      );
    }

    // verify required parameter 'rulesetName' is not null or undefined
    if (rulesetName === null || rulesetName === undefined) {
      throw new RequiredError("rulesetName", "createAiCustomRule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createAiCustomRule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/static-analysis/ai/rulesets/{ruleset_name}/rules".replace(
        "{ruleset_name}",
        encodeURIComponent(String(rulesetName)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StaticAnalysisApi.v2.createAiCustomRule",
      StaticAnalysisApi.operationServers,
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
      serialize(body, TypingInfo, "AiCustomRuleRequest", ""),
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

  public async createAiCustomRuleRevision(
    rulesetName: string,
    ruleName: string,
    body: AiCustomRuleRevisionRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "StaticAnalysisApi.v2.createAiCustomRuleRevision"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createAiCustomRuleRevision' is disabled. Enable it by setting `configuration.unstableOperations['StaticAnalysisApi.v2.createAiCustomRuleRevision'] = true`",
      );
    }

    // verify required parameter 'rulesetName' is not null or undefined
    if (rulesetName === null || rulesetName === undefined) {
      throw new RequiredError("rulesetName", "createAiCustomRuleRevision");
    }

    // verify required parameter 'ruleName' is not null or undefined
    if (ruleName === null || ruleName === undefined) {
      throw new RequiredError("ruleName", "createAiCustomRuleRevision");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createAiCustomRuleRevision");
    }

    // Path Params
    const localVarPath =
      "/api/v2/static-analysis/ai/rulesets/{ruleset_name}/rules/{rule_name}/revisions"
        .replace("{ruleset_name}", encodeURIComponent(String(rulesetName)))
        .replace("{rule_name}", encodeURIComponent(String(ruleName)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StaticAnalysisApi.v2.createAiCustomRuleRevision",
      StaticAnalysisApi.operationServers,
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
      serialize(body, TypingInfo, "AiCustomRuleRevisionRequest", ""),
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

  public async createAiCustomRuleset(
    body: AiCustomRulesetRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["StaticAnalysisApi.v2.createAiCustomRuleset"]
    ) {
      throw new Error(
        "Unstable operation 'createAiCustomRuleset' is disabled. Enable it by setting `configuration.unstableOperations['StaticAnalysisApi.v2.createAiCustomRuleset'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createAiCustomRuleset");
    }

    // Path Params
    const localVarPath = "/api/v2/static-analysis/ai/rulesets";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StaticAnalysisApi.v2.createAiCustomRuleset",
      StaticAnalysisApi.operationServers,
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
      serialize(body, TypingInfo, "AiCustomRulesetRequest", ""),
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

  public async createAiMemoryViolationResult(
    body: AiMemoryViolationResultRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "StaticAnalysisApi.v2.createAiMemoryViolationResult"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createAiMemoryViolationResult' is disabled. Enable it by setting `configuration.unstableOperations['StaticAnalysisApi.v2.createAiMemoryViolationResult'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createAiMemoryViolationResult");
    }

    // Path Params
    const localVarPath = "/api/v2/static-analysis/ai/memory";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StaticAnalysisApi.v2.createAiMemoryViolationResult",
      StaticAnalysisApi.operationServers,
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
      serialize(body, TypingInfo, "AiMemoryViolationResultRequest", ""),
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

  public async createCustomRule(
    rulesetName: string,
    body: CustomRuleRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["StaticAnalysisApi.v2.createCustomRule"]) {
      throw new Error(
        "Unstable operation 'createCustomRule' is disabled. Enable it by setting `configuration.unstableOperations['StaticAnalysisApi.v2.createCustomRule'] = true`",
      );
    }

    // verify required parameter 'rulesetName' is not null or undefined
    if (rulesetName === null || rulesetName === undefined) {
      throw new RequiredError("rulesetName", "createCustomRule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCustomRule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/static-analysis/custom/rulesets/{ruleset_name}/rules".replace(
        "{ruleset_name}",
        encodeURIComponent(String(rulesetName)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StaticAnalysisApi.v2.createCustomRule",
      StaticAnalysisApi.operationServers,
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
      serialize(body, TypingInfo, "CustomRuleRequest", ""),
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

  public async createCustomRuleRevision(
    rulesetName: string,
    ruleName: string,
    body: CustomRuleRevisionRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "StaticAnalysisApi.v2.createCustomRuleRevision"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createCustomRuleRevision' is disabled. Enable it by setting `configuration.unstableOperations['StaticAnalysisApi.v2.createCustomRuleRevision'] = true`",
      );
    }

    // verify required parameter 'rulesetName' is not null or undefined
    if (rulesetName === null || rulesetName === undefined) {
      throw new RequiredError("rulesetName", "createCustomRuleRevision");
    }

    // verify required parameter 'ruleName' is not null or undefined
    if (ruleName === null || ruleName === undefined) {
      throw new RequiredError("ruleName", "createCustomRuleRevision");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCustomRuleRevision");
    }

    // Path Params
    const localVarPath =
      "/api/v2/static-analysis/custom/rulesets/{ruleset_name}/rules/{rule_name}/revisions"
        .replace("{ruleset_name}", encodeURIComponent(String(rulesetName)))
        .replace("{rule_name}", encodeURIComponent(String(ruleName)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StaticAnalysisApi.v2.createCustomRuleRevision",
      StaticAnalysisApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
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
      serialize(body, TypingInfo, "CustomRuleRevisionRequest", ""),
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

  public async createCustomRuleset(
    body: CustomRulesetRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["StaticAnalysisApi.v2.createCustomRuleset"]
    ) {
      throw new Error(
        "Unstable operation 'createCustomRuleset' is disabled. Enable it by setting `configuration.unstableOperations['StaticAnalysisApi.v2.createCustomRuleset'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCustomRuleset");
    }

    // Path Params
    const localVarPath = "/api/v2/static-analysis/custom/rulesets";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StaticAnalysisApi.v2.createCustomRuleset",
      StaticAnalysisApi.operationServers,
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
      serialize(body, TypingInfo, "CustomRulesetRequest", ""),
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

  public async createSCAResolveVulnerableSymbols(
    body: ResolveVulnerableSymbolsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "StaticAnalysisApi.v2.createSCAResolveVulnerableSymbols"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createSCAResolveVulnerableSymbols' is disabled. Enable it by setting `configuration.unstableOperations['StaticAnalysisApi.v2.createSCAResolveVulnerableSymbols'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createSCAResolveVulnerableSymbols");
    }

    // Path Params
    const localVarPath =
      "/api/v2/static-analysis-sca/vulnerabilities/resolve-vulnerable-symbols";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StaticAnalysisApi.v2.createSCAResolveVulnerableSymbols",
      StaticAnalysisApi.operationServers,
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
      serialize(body, TypingInfo, "ResolveVulnerableSymbolsRequest", ""),
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

  public async createSCAResult(
    body: ScaRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["StaticAnalysisApi.v2.createSCAResult"]) {
      throw new Error(
        "Unstable operation 'createSCAResult' is disabled. Enable it by setting `configuration.unstableOperations['StaticAnalysisApi.v2.createSCAResult'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createSCAResult");
    }

    // Path Params
    const localVarPath = "/api/v2/static-analysis-sca/dependencies";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StaticAnalysisApi.v2.createSCAResult",
      StaticAnalysisApi.operationServers,
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
      serialize(body, TypingInfo, "ScaRequest", ""),
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

  public async createSCAScan(
    body: McpScanRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["StaticAnalysisApi.v2.createSCAScan"]) {
      throw new Error(
        "Unstable operation 'createSCAScan' is disabled. Enable it by setting `configuration.unstableOperations['StaticAnalysisApi.v2.createSCAScan'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createSCAScan");
    }

    // Path Params
    const localVarPath = "/api/v2/static-analysis-sca/dependencies/scan";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StaticAnalysisApi.v2.createSCAScan",
      StaticAnalysisApi.operationServers,
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
      serialize(body, TypingInfo, "McpScanRequest", ""),
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

  public async deleteAiCustomRule(
    rulesetName: string,
    ruleName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["StaticAnalysisApi.v2.deleteAiCustomRule"]
    ) {
      throw new Error(
        "Unstable operation 'deleteAiCustomRule' is disabled. Enable it by setting `configuration.unstableOperations['StaticAnalysisApi.v2.deleteAiCustomRule'] = true`",
      );
    }

    // verify required parameter 'rulesetName' is not null or undefined
    if (rulesetName === null || rulesetName === undefined) {
      throw new RequiredError("rulesetName", "deleteAiCustomRule");
    }

    // verify required parameter 'ruleName' is not null or undefined
    if (ruleName === null || ruleName === undefined) {
      throw new RequiredError("ruleName", "deleteAiCustomRule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/static-analysis/ai/rulesets/{ruleset_name}/rules/{rule_name}"
        .replace("{ruleset_name}", encodeURIComponent(String(rulesetName)))
        .replace("{rule_name}", encodeURIComponent(String(ruleName)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StaticAnalysisApi.v2.deleteAiCustomRule",
      StaticAnalysisApi.operationServers,
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

  public async deleteAiCustomRuleset(
    rulesetName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["StaticAnalysisApi.v2.deleteAiCustomRuleset"]
    ) {
      throw new Error(
        "Unstable operation 'deleteAiCustomRuleset' is disabled. Enable it by setting `configuration.unstableOperations['StaticAnalysisApi.v2.deleteAiCustomRuleset'] = true`",
      );
    }

    // verify required parameter 'rulesetName' is not null or undefined
    if (rulesetName === null || rulesetName === undefined) {
      throw new RequiredError("rulesetName", "deleteAiCustomRuleset");
    }

    // Path Params
    const localVarPath =
      "/api/v2/static-analysis/ai/rulesets/{ruleset_name}".replace(
        "{ruleset_name}",
        encodeURIComponent(String(rulesetName)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StaticAnalysisApi.v2.deleteAiCustomRuleset",
      StaticAnalysisApi.operationServers,
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

  public async deleteAiMemoryViolationResult(
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "StaticAnalysisApi.v2.deleteAiMemoryViolationResult"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteAiMemoryViolationResult' is disabled. Enable it by setting `configuration.unstableOperations['StaticAnalysisApi.v2.deleteAiMemoryViolationResult'] = true`",
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "deleteAiMemoryViolationResult");
    }

    // Path Params
    const localVarPath = "/api/v2/static-analysis/ai/memory/{id}".replace(
      "{id}",
      encodeURIComponent(String(id)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StaticAnalysisApi.v2.deleteAiMemoryViolationResult",
      StaticAnalysisApi.operationServers,
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

  public async deleteCustomRule(
    rulesetName: string,
    ruleName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["StaticAnalysisApi.v2.deleteCustomRule"]) {
      throw new Error(
        "Unstable operation 'deleteCustomRule' is disabled. Enable it by setting `configuration.unstableOperations['StaticAnalysisApi.v2.deleteCustomRule'] = true`",
      );
    }

    // verify required parameter 'rulesetName' is not null or undefined
    if (rulesetName === null || rulesetName === undefined) {
      throw new RequiredError("rulesetName", "deleteCustomRule");
    }

    // verify required parameter 'ruleName' is not null or undefined
    if (ruleName === null || ruleName === undefined) {
      throw new RequiredError("ruleName", "deleteCustomRule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/static-analysis/custom/rulesets/{ruleset_name}/rules/{rule_name}"
        .replace("{ruleset_name}", encodeURIComponent(String(rulesetName)))
        .replace("{rule_name}", encodeURIComponent(String(ruleName)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StaticAnalysisApi.v2.deleteCustomRule",
      StaticAnalysisApi.operationServers,
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

  public async deleteCustomRuleset(
    rulesetName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["StaticAnalysisApi.v2.deleteCustomRuleset"]
    ) {
      throw new Error(
        "Unstable operation 'deleteCustomRuleset' is disabled. Enable it by setting `configuration.unstableOperations['StaticAnalysisApi.v2.deleteCustomRuleset'] = true`",
      );
    }

    // verify required parameter 'rulesetName' is not null or undefined
    if (rulesetName === null || rulesetName === undefined) {
      throw new RequiredError("rulesetName", "deleteCustomRuleset");
    }

    // Path Params
    const localVarPath =
      "/api/v2/static-analysis/custom/rulesets/{ruleset_name}".replace(
        "{ruleset_name}",
        encodeURIComponent(String(rulesetName)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StaticAnalysisApi.v2.deleteCustomRuleset",
      StaticAnalysisApi.operationServers,
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

  public async getAiCustomRule(
    rulesetName: string,
    ruleName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["StaticAnalysisApi.v2.getAiCustomRule"]) {
      throw new Error(
        "Unstable operation 'getAiCustomRule' is disabled. Enable it by setting `configuration.unstableOperations['StaticAnalysisApi.v2.getAiCustomRule'] = true`",
      );
    }

    // verify required parameter 'rulesetName' is not null or undefined
    if (rulesetName === null || rulesetName === undefined) {
      throw new RequiredError("rulesetName", "getAiCustomRule");
    }

    // verify required parameter 'ruleName' is not null or undefined
    if (ruleName === null || ruleName === undefined) {
      throw new RequiredError("ruleName", "getAiCustomRule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/static-analysis/ai/rulesets/{ruleset_name}/rules/{rule_name}"
        .replace("{ruleset_name}", encodeURIComponent(String(rulesetName)))
        .replace("{rule_name}", encodeURIComponent(String(ruleName)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StaticAnalysisApi.v2.getAiCustomRule",
      StaticAnalysisApi.operationServers,
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

  public async getAiCustomRuleRevision(
    rulesetName: string,
    ruleName: string,
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "StaticAnalysisApi.v2.getAiCustomRuleRevision"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getAiCustomRuleRevision' is disabled. Enable it by setting `configuration.unstableOperations['StaticAnalysisApi.v2.getAiCustomRuleRevision'] = true`",
      );
    }

    // verify required parameter 'rulesetName' is not null or undefined
    if (rulesetName === null || rulesetName === undefined) {
      throw new RequiredError("rulesetName", "getAiCustomRuleRevision");
    }

    // verify required parameter 'ruleName' is not null or undefined
    if (ruleName === null || ruleName === undefined) {
      throw new RequiredError("ruleName", "getAiCustomRuleRevision");
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getAiCustomRuleRevision");
    }

    // Path Params
    const localVarPath =
      "/api/v2/static-analysis/ai/rulesets/{ruleset_name}/rules/{rule_name}/revisions/{id}"
        .replace("{ruleset_name}", encodeURIComponent(String(rulesetName)))
        .replace("{rule_name}", encodeURIComponent(String(ruleName)))
        .replace("{id}", encodeURIComponent(String(id)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StaticAnalysisApi.v2.getAiCustomRuleRevision",
      StaticAnalysisApi.operationServers,
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

  public async getAiCustomRuleset(
    rulesetName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["StaticAnalysisApi.v2.getAiCustomRuleset"]
    ) {
      throw new Error(
        "Unstable operation 'getAiCustomRuleset' is disabled. Enable it by setting `configuration.unstableOperations['StaticAnalysisApi.v2.getAiCustomRuleset'] = true`",
      );
    }

    // verify required parameter 'rulesetName' is not null or undefined
    if (rulesetName === null || rulesetName === undefined) {
      throw new RequiredError("rulesetName", "getAiCustomRuleset");
    }

    // Path Params
    const localVarPath =
      "/api/v2/static-analysis/ai/rulesets/{ruleset_name}".replace(
        "{ruleset_name}",
        encodeURIComponent(String(rulesetName)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StaticAnalysisApi.v2.getAiCustomRuleset",
      StaticAnalysisApi.operationServers,
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

  public async getCustomRule(
    rulesetName: string,
    ruleName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["StaticAnalysisApi.v2.getCustomRule"]) {
      throw new Error(
        "Unstable operation 'getCustomRule' is disabled. Enable it by setting `configuration.unstableOperations['StaticAnalysisApi.v2.getCustomRule'] = true`",
      );
    }

    // verify required parameter 'rulesetName' is not null or undefined
    if (rulesetName === null || rulesetName === undefined) {
      throw new RequiredError("rulesetName", "getCustomRule");
    }

    // verify required parameter 'ruleName' is not null or undefined
    if (ruleName === null || ruleName === undefined) {
      throw new RequiredError("ruleName", "getCustomRule");
    }

    // Path Params
    const localVarPath =
      "/api/v2/static-analysis/custom/rulesets/{ruleset_name}/rules/{rule_name}"
        .replace("{ruleset_name}", encodeURIComponent(String(rulesetName)))
        .replace("{rule_name}", encodeURIComponent(String(ruleName)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StaticAnalysisApi.v2.getCustomRule",
      StaticAnalysisApi.operationServers,
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

  public async getCustomRuleRevision(
    rulesetName: string,
    ruleName: string,
    id: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["StaticAnalysisApi.v2.getCustomRuleRevision"]
    ) {
      throw new Error(
        "Unstable operation 'getCustomRuleRevision' is disabled. Enable it by setting `configuration.unstableOperations['StaticAnalysisApi.v2.getCustomRuleRevision'] = true`",
      );
    }

    // verify required parameter 'rulesetName' is not null or undefined
    if (rulesetName === null || rulesetName === undefined) {
      throw new RequiredError("rulesetName", "getCustomRuleRevision");
    }

    // verify required parameter 'ruleName' is not null or undefined
    if (ruleName === null || ruleName === undefined) {
      throw new RequiredError("ruleName", "getCustomRuleRevision");
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getCustomRuleRevision");
    }

    // Path Params
    const localVarPath =
      "/api/v2/static-analysis/custom/rulesets/{ruleset_name}/rules/{rule_name}/revisions/{id}"
        .replace("{ruleset_name}", encodeURIComponent(String(rulesetName)))
        .replace("{rule_name}", encodeURIComponent(String(ruleName)))
        .replace("{id}", encodeURIComponent(String(id)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StaticAnalysisApi.v2.getCustomRuleRevision",
      StaticAnalysisApi.operationServers,
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

  public async getCustomRuleset(
    rulesetName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["StaticAnalysisApi.v2.getCustomRuleset"]) {
      throw new Error(
        "Unstable operation 'getCustomRuleset' is disabled. Enable it by setting `configuration.unstableOperations['StaticAnalysisApi.v2.getCustomRuleset'] = true`",
      );
    }

    // verify required parameter 'rulesetName' is not null or undefined
    if (rulesetName === null || rulesetName === undefined) {
      throw new RequiredError("rulesetName", "getCustomRuleset");
    }

    // Path Params
    const localVarPath =
      "/api/v2/static-analysis/custom/rulesets/{ruleset_name}".replace(
        "{ruleset_name}",
        encodeURIComponent(String(rulesetName)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StaticAnalysisApi.v2.getCustomRuleset",
      StaticAnalysisApi.operationServers,
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

  public async getSCAScan(
    jobId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["StaticAnalysisApi.v2.getSCAScan"]) {
      throw new Error(
        "Unstable operation 'getSCAScan' is disabled. Enable it by setting `configuration.unstableOperations['StaticAnalysisApi.v2.getSCAScan'] = true`",
      );
    }

    // verify required parameter 'jobId' is not null or undefined
    if (jobId === null || jobId === undefined) {
      throw new RequiredError("jobId", "getSCAScan");
    }

    // Path Params
    const localVarPath =
      "/api/v2/static-analysis-sca/dependencies/scan/{job_id}".replace(
        "{job_id}",
        encodeURIComponent(String(jobId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StaticAnalysisApi.v2.getSCAScan",
      StaticAnalysisApi.operationServers,
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

  public async listAiCustomRuleRevisions(
    rulesetName: string,
    ruleName: string,
    pageOffset?: number,
    pageLimit?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "StaticAnalysisApi.v2.listAiCustomRuleRevisions"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listAiCustomRuleRevisions' is disabled. Enable it by setting `configuration.unstableOperations['StaticAnalysisApi.v2.listAiCustomRuleRevisions'] = true`",
      );
    }

    // verify required parameter 'rulesetName' is not null or undefined
    if (rulesetName === null || rulesetName === undefined) {
      throw new RequiredError("rulesetName", "listAiCustomRuleRevisions");
    }

    // verify required parameter 'ruleName' is not null or undefined
    if (ruleName === null || ruleName === undefined) {
      throw new RequiredError("ruleName", "listAiCustomRuleRevisions");
    }

    // Path Params
    const localVarPath =
      "/api/v2/static-analysis/ai/rulesets/{ruleset_name}/rules/{rule_name}/revisions"
        .replace("{ruleset_name}", encodeURIComponent(String(rulesetName)))
        .replace("{rule_name}", encodeURIComponent(String(ruleName)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StaticAnalysisApi.v2.listAiCustomRuleRevisions",
      StaticAnalysisApi.operationServers,
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
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        serialize(pageOffset, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        serialize(pageLimit, TypingInfo, "number", "int64"),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listAiCustomRulesets(
    pageOffset?: number,
    pageLimit?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["StaticAnalysisApi.v2.listAiCustomRulesets"]
    ) {
      throw new Error(
        "Unstable operation 'listAiCustomRulesets' is disabled. Enable it by setting `configuration.unstableOperations['StaticAnalysisApi.v2.listAiCustomRulesets'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/static-analysis/ai/rulesets";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StaticAnalysisApi.v2.listAiCustomRulesets",
      StaticAnalysisApi.operationServers,
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
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        serialize(pageOffset, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        serialize(pageLimit, TypingInfo, "number", "int64"),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listAiMemoryViolationResults(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "StaticAnalysisApi.v2.listAiMemoryViolationResults"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listAiMemoryViolationResults' is disabled. Enable it by setting `configuration.unstableOperations['StaticAnalysisApi.v2.listAiMemoryViolationResults'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/static-analysis/ai/memory";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StaticAnalysisApi.v2.listAiMemoryViolationResults",
      StaticAnalysisApi.operationServers,
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

  public async listAiPrompts(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["StaticAnalysisApi.v2.listAiPrompts"]) {
      throw new Error(
        "Unstable operation 'listAiPrompts' is disabled. Enable it by setting `configuration.unstableOperations['StaticAnalysisApi.v2.listAiPrompts'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/static-analysis/ai/prompts";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StaticAnalysisApi.v2.listAiPrompts",
      StaticAnalysisApi.operationServers,
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

  public async listCustomRuleRevisions(
    rulesetName: string,
    ruleName: string,
    pageOffset?: number,
    pageLimit?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "StaticAnalysisApi.v2.listCustomRuleRevisions"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listCustomRuleRevisions' is disabled. Enable it by setting `configuration.unstableOperations['StaticAnalysisApi.v2.listCustomRuleRevisions'] = true`",
      );
    }

    // verify required parameter 'rulesetName' is not null or undefined
    if (rulesetName === null || rulesetName === undefined) {
      throw new RequiredError("rulesetName", "listCustomRuleRevisions");
    }

    // verify required parameter 'ruleName' is not null or undefined
    if (ruleName === null || ruleName === undefined) {
      throw new RequiredError("ruleName", "listCustomRuleRevisions");
    }

    // Path Params
    const localVarPath =
      "/api/v2/static-analysis/custom/rulesets/{ruleset_name}/rules/{rule_name}/revisions"
        .replace("{ruleset_name}", encodeURIComponent(String(rulesetName)))
        .replace("{rule_name}", encodeURIComponent(String(ruleName)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StaticAnalysisApi.v2.listCustomRuleRevisions",
      StaticAnalysisApi.operationServers,
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
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        serialize(pageOffset, TypingInfo, "number", ""),
        "",
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        serialize(pageLimit, TypingInfo, "number", ""),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listCustomRulesets(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["StaticAnalysisApi.v2.listCustomRulesets"]
    ) {
      throw new Error(
        "Unstable operation 'listCustomRulesets' is disabled. Enable it by setting `configuration.unstableOperations['StaticAnalysisApi.v2.listCustomRulesets'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/static-analysis/custom/rulesets";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StaticAnalysisApi.v2.listCustomRulesets",
      StaticAnalysisApi.operationServers,
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

  public async listSCALicenses(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["StaticAnalysisApi.v2.listSCALicenses"]) {
      throw new Error(
        "Unstable operation 'listSCALicenses' is disabled. Enable it by setting `configuration.unstableOperations['StaticAnalysisApi.v2.listSCALicenses'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/static-analysis-sca/licenses/list";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StaticAnalysisApi.v2.listSCALicenses",
      StaticAnalysisApi.operationServers,
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

  public async revertCustomRuleRevision(
    rulesetName: string,
    ruleName: string,
    body: RevertCustomRuleRevisionRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "StaticAnalysisApi.v2.revertCustomRuleRevision"
      ]
    ) {
      throw new Error(
        "Unstable operation 'revertCustomRuleRevision' is disabled. Enable it by setting `configuration.unstableOperations['StaticAnalysisApi.v2.revertCustomRuleRevision'] = true`",
      );
    }

    // verify required parameter 'rulesetName' is not null or undefined
    if (rulesetName === null || rulesetName === undefined) {
      throw new RequiredError("rulesetName", "revertCustomRuleRevision");
    }

    // verify required parameter 'ruleName' is not null or undefined
    if (ruleName === null || ruleName === undefined) {
      throw new RequiredError("ruleName", "revertCustomRuleRevision");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "revertCustomRuleRevision");
    }

    // Path Params
    const localVarPath =
      "/api/v2/static-analysis/custom/rulesets/{ruleset_name}/rules/{rule_name}/revisions/revert"
        .replace("{ruleset_name}", encodeURIComponent(String(rulesetName)))
        .replace("{rule_name}", encodeURIComponent(String(ruleName)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StaticAnalysisApi.v2.revertCustomRuleRevision",
      StaticAnalysisApi.operationServers,
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
      serialize(body, TypingInfo, "RevertCustomRuleRevisionRequest", ""),
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

  public async updateAiCustomRuleset(
    rulesetName: string,
    body: AiCustomRulesetUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["StaticAnalysisApi.v2.updateAiCustomRuleset"]
    ) {
      throw new Error(
        "Unstable operation 'updateAiCustomRuleset' is disabled. Enable it by setting `configuration.unstableOperations['StaticAnalysisApi.v2.updateAiCustomRuleset'] = true`",
      );
    }

    // verify required parameter 'rulesetName' is not null or undefined
    if (rulesetName === null || rulesetName === undefined) {
      throw new RequiredError("rulesetName", "updateAiCustomRuleset");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateAiCustomRuleset");
    }

    // Path Params
    const localVarPath =
      "/api/v2/static-analysis/ai/rulesets/{ruleset_name}".replace(
        "{ruleset_name}",
        encodeURIComponent(String(rulesetName)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StaticAnalysisApi.v2.updateAiCustomRuleset",
      StaticAnalysisApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
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
      serialize(body, TypingInfo, "AiCustomRulesetUpdateRequest", ""),
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

  public async updateCustomRuleset(
    rulesetName: string,
    body: CustomRulesetRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["StaticAnalysisApi.v2.updateCustomRuleset"]
    ) {
      throw new Error(
        "Unstable operation 'updateCustomRuleset' is disabled. Enable it by setting `configuration.unstableOperations['StaticAnalysisApi.v2.updateCustomRuleset'] = true`",
      );
    }

    // verify required parameter 'rulesetName' is not null or undefined
    if (rulesetName === null || rulesetName === undefined) {
      throw new RequiredError("rulesetName", "updateCustomRuleset");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateCustomRuleset");
    }

    // Path Params
    const localVarPath =
      "/api/v2/static-analysis/custom/rulesets/{ruleset_name}".replace(
        "{ruleset_name}",
        encodeURIComponent(String(rulesetName)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "StaticAnalysisApi.v2.updateCustomRuleset",
      StaticAnalysisApi.operationServers,
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
      serialize(body, TypingInfo, "CustomRulesetRequest", ""),
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

export class StaticAnalysisApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createAiCustomRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAiCustomRule(
    response: ResponseContext,
  ): Promise<AiCustomRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AiCustomRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AiCustomRuleResponse",
      ) as AiCustomRuleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 412 ||
      response.httpStatusCode === 500
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
      const body: AiCustomRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AiCustomRuleResponse",
        "",
      ) as AiCustomRuleResponse;
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
   * @params response Response returned by the server for a request to createAiCustomRuleRevision
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAiCustomRuleRevision(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
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
   * @params response Response returned by the server for a request to createAiCustomRuleset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAiCustomRuleset(
    response: ResponseContext,
  ): Promise<AiCustomRulesetResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AiCustomRulesetResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AiCustomRulesetResponse",
      ) as AiCustomRulesetResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 412 ||
      response.httpStatusCode === 500
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
      const body: AiCustomRulesetResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AiCustomRulesetResponse",
        "",
      ) as AiCustomRulesetResponse;
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
   * @params response Response returned by the server for a request to createAiMemoryViolationResult
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAiMemoryViolationResult(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
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
   * @params response Response returned by the server for a request to createCustomRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCustomRule(
    response: ResponseContext,
  ): Promise<CustomRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CustomRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CustomRuleResponse",
      ) as CustomRuleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 412
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
      const body: CustomRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CustomRuleResponse",
        "",
      ) as CustomRuleResponse;
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
   * @params response Response returned by the server for a request to createCustomRuleRevision
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCustomRuleRevision(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
   * @params response Response returned by the server for a request to createCustomRuleset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCustomRuleset(
    response: ResponseContext,
  ): Promise<CustomRulesetResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CustomRulesetResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CustomRulesetResponse",
      ) as CustomRulesetResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 412
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
      const body: CustomRulesetResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CustomRulesetResponse",
        "",
      ) as CustomRulesetResponse;
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
   * @params response Response returned by the server for a request to createSCAResolveVulnerableSymbols
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSCAResolveVulnerableSymbols(
    response: ResponseContext,
  ): Promise<ResolveVulnerableSymbolsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ResolveVulnerableSymbolsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ResolveVulnerableSymbolsResponse",
      ) as ResolveVulnerableSymbolsResponse;
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
      const body: ResolveVulnerableSymbolsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ResolveVulnerableSymbolsResponse",
        "",
      ) as ResolveVulnerableSymbolsResponse;
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
   * @params response Response returned by the server for a request to createSCAResult
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSCAResult(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
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
   * @params response Response returned by the server for a request to createSCAScan
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSCAScan(
    response: ResponseContext,
  ): Promise<McpScanRequestResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 202) {
      const body: McpScanRequestResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "McpScanRequestResponse",
      ) as McpScanRequestResponse;
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
      const body: McpScanRequestResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "McpScanRequestResponse",
        "",
      ) as McpScanRequestResponse;
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
   * @params response Response returned by the server for a request to deleteAiCustomRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAiCustomRule(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
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
   * @params response Response returned by the server for a request to deleteAiCustomRuleset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAiCustomRuleset(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
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
   * @params response Response returned by the server for a request to deleteAiMemoryViolationResult
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAiMemoryViolationResult(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
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
   * @params response Response returned by the server for a request to deleteCustomRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteCustomRule(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
   * @params response Response returned by the server for a request to deleteCustomRuleset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteCustomRuleset(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
   * @params response Response returned by the server for a request to getAiCustomRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAiCustomRule(
    response: ResponseContext,
  ): Promise<AiCustomRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AiCustomRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AiCustomRuleResponse",
      ) as AiCustomRuleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
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
      const body: AiCustomRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AiCustomRuleResponse",
        "",
      ) as AiCustomRuleResponse;
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
   * @params response Response returned by the server for a request to getAiCustomRuleRevision
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAiCustomRuleRevision(
    response: ResponseContext,
  ): Promise<AiCustomRuleRevisionResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AiCustomRuleRevisionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AiCustomRuleRevisionResponse",
      ) as AiCustomRuleRevisionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
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
      const body: AiCustomRuleRevisionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AiCustomRuleRevisionResponse",
        "",
      ) as AiCustomRuleRevisionResponse;
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
   * @params response Response returned by the server for a request to getAiCustomRuleset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAiCustomRuleset(
    response: ResponseContext,
  ): Promise<AiCustomRulesetResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AiCustomRulesetResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AiCustomRulesetResponse",
      ) as AiCustomRulesetResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
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
      const body: AiCustomRulesetResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AiCustomRulesetResponse",
        "",
      ) as AiCustomRulesetResponse;
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
   * @params response Response returned by the server for a request to getCustomRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCustomRule(
    response: ResponseContext,
  ): Promise<CustomRuleResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CustomRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CustomRuleResponse",
      ) as CustomRuleResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: CustomRuleResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CustomRuleResponse",
        "",
      ) as CustomRuleResponse;
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
   * @params response Response returned by the server for a request to getCustomRuleRevision
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCustomRuleRevision(
    response: ResponseContext,
  ): Promise<CustomRuleRevisionResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CustomRuleRevisionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CustomRuleRevisionResponse",
      ) as CustomRuleRevisionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: CustomRuleRevisionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CustomRuleRevisionResponse",
        "",
      ) as CustomRuleRevisionResponse;
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
   * @params response Response returned by the server for a request to getCustomRuleset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCustomRuleset(
    response: ResponseContext,
  ): Promise<CustomRulesetResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CustomRulesetResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CustomRulesetResponse",
      ) as CustomRulesetResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: CustomRulesetResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CustomRulesetResponse",
        "",
      ) as CustomRulesetResponse;
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
   * @params response Response returned by the server for a request to getSCAScan
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSCAScan(
    response: ResponseContext,
  ): Promise<ScanResultResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ScanResultResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ScanResultResponse",
      ) as ScanResultResponse;
      return body;
    }
    if (response.httpStatusCode === 404) {
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
      const body: ScanResultResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ScanResultResponse",
        "",
      ) as ScanResultResponse;
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
   * @params response Response returned by the server for a request to listAiCustomRuleRevisions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAiCustomRuleRevisions(
    response: ResponseContext,
  ): Promise<AiCustomRuleRevisionsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AiCustomRuleRevisionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AiCustomRuleRevisionsResponse",
      ) as AiCustomRuleRevisionsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
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
      const body: AiCustomRuleRevisionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AiCustomRuleRevisionsResponse",
        "",
      ) as AiCustomRuleRevisionsResponse;
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
   * @params response Response returned by the server for a request to listAiCustomRulesets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAiCustomRulesets(
    response: ResponseContext,
  ): Promise<AiCustomRulesetsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AiCustomRulesetsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AiCustomRulesetsResponse",
      ) as AiCustomRulesetsResponse;
      return body;
    }
    if (response.httpStatusCode === 401 || response.httpStatusCode === 500) {
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
      const body: AiCustomRulesetsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AiCustomRulesetsResponse",
        "",
      ) as AiCustomRulesetsResponse;
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
   * @params response Response returned by the server for a request to listAiMemoryViolationResults
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAiMemoryViolationResults(
    response: ResponseContext,
  ): Promise<AiMemoryViolationResultsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AiMemoryViolationResultsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AiMemoryViolationResultsResponse",
      ) as AiMemoryViolationResultsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
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
      const body: AiMemoryViolationResultsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AiMemoryViolationResultsResponse",
        "",
      ) as AiMemoryViolationResultsResponse;
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
   * @params response Response returned by the server for a request to listAiPrompts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAiPrompts(
    response: ResponseContext,
  ): Promise<AiPromptsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AiPromptsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AiPromptsResponse",
      ) as AiPromptsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
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
      const body: AiPromptsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AiPromptsResponse",
        "",
      ) as AiPromptsResponse;
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
   * @params response Response returned by the server for a request to listCustomRuleRevisions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCustomRuleRevisions(
    response: ResponseContext,
  ): Promise<CustomRuleRevisionsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CustomRuleRevisionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CustomRuleRevisionsResponse",
      ) as CustomRuleRevisionsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CustomRuleRevisionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CustomRuleRevisionsResponse",
        "",
      ) as CustomRuleRevisionsResponse;
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
   * @params response Response returned by the server for a request to listCustomRulesets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCustomRulesets(
    response: ResponseContext,
  ): Promise<CustomRulesetListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CustomRulesetListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CustomRulesetListResponse",
      ) as CustomRulesetListResponse;
      return body;
    }
    if (response.httpStatusCode === 401) {
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
      const body: CustomRulesetListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CustomRulesetListResponse",
        "",
      ) as CustomRulesetListResponse;
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
   * @params response Response returned by the server for a request to listSCALicenses
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSCALicenses(
    response: ResponseContext,
  ): Promise<LicensesListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: LicensesListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LicensesListResponse",
      ) as LicensesListResponse;
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
      const body: LicensesListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LicensesListResponse",
        "",
      ) as LicensesListResponse;
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
   * @params response Response returned by the server for a request to revertCustomRuleRevision
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async revertCustomRuleRevision(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      return;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 401) {
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
   * @params response Response returned by the server for a request to updateAiCustomRuleset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAiCustomRuleset(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 412 ||
      response.httpStatusCode === 500
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
   * @params response Response returned by the server for a request to updateCustomRuleset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateCustomRuleset(
    response: ResponseContext,
  ): Promise<CustomRulesetResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CustomRulesetResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CustomRulesetResponse",
      ) as CustomRulesetResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 412
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
      const body: CustomRulesetResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CustomRulesetResponse",
        "",
      ) as CustomRulesetResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface StaticAnalysisApiCreateAiCustomRuleRequest {
  /**
   * The ruleset name.
   * @type string
   */
  rulesetName: string;
  /**
   * @type AiCustomRuleRequest
   */
  body: AiCustomRuleRequest;
}

export interface StaticAnalysisApiCreateAiCustomRuleRevisionRequest {
  /**
   * The ruleset name.
   * @type string
   */
  rulesetName: string;
  /**
   * The rule name.
   * @type string
   */
  ruleName: string;
  /**
   * @type AiCustomRuleRevisionRequest
   */
  body: AiCustomRuleRevisionRequest;
}

export interface StaticAnalysisApiCreateAiCustomRulesetRequest {
  /**
   * @type AiCustomRulesetRequest
   */
  body: AiCustomRulesetRequest;
}

export interface StaticAnalysisApiCreateAiMemoryViolationResultRequest {
  /**
   * @type AiMemoryViolationResultRequest
   */
  body: AiMemoryViolationResultRequest;
}

export interface StaticAnalysisApiCreateCustomRuleRequest {
  /**
   * The ruleset name
   * @type string
   */
  rulesetName: string;
  /**
   * @type CustomRuleRequest
   */
  body: CustomRuleRequest;
}

export interface StaticAnalysisApiCreateCustomRuleRevisionRequest {
  /**
   * The ruleset name
   * @type string
   */
  rulesetName: string;
  /**
   * The rule name
   * @type string
   */
  ruleName: string;
  /**
   * @type CustomRuleRevisionRequest
   */
  body: CustomRuleRevisionRequest;
}

export interface StaticAnalysisApiCreateCustomRulesetRequest {
  /**
   * @type CustomRulesetRequest
   */
  body: CustomRulesetRequest;
}

export interface StaticAnalysisApiCreateSCAResolveVulnerableSymbolsRequest {
  /**
   * @type ResolveVulnerableSymbolsRequest
   */
  body: ResolveVulnerableSymbolsRequest;
}

export interface StaticAnalysisApiCreateSCAResultRequest {
  /**
   * @type ScaRequest
   */
  body: ScaRequest;
}

export interface StaticAnalysisApiCreateSCAScanRequest {
  /**
   * @type McpScanRequest
   */
  body: McpScanRequest;
}

export interface StaticAnalysisApiDeleteAiCustomRuleRequest {
  /**
   * The ruleset name.
   * @type string
   */
  rulesetName: string;
  /**
   * The rule name.
   * @type string
   */
  ruleName: string;
}

export interface StaticAnalysisApiDeleteAiCustomRulesetRequest {
  /**
   * The ruleset name.
   * @type string
   */
  rulesetName: string;
}

export interface StaticAnalysisApiDeleteAiMemoryViolationResultRequest {
  /**
   * The numeric identifier of the memory violation result.
   * @type string
   */
  id: string;
}

export interface StaticAnalysisApiDeleteCustomRuleRequest {
  /**
   * The ruleset name
   * @type string
   */
  rulesetName: string;
  /**
   * The rule name
   * @type string
   */
  ruleName: string;
}

export interface StaticAnalysisApiDeleteCustomRulesetRequest {
  /**
   * The ruleset name
   * @type string
   */
  rulesetName: string;
}

export interface StaticAnalysisApiGetAiCustomRuleRequest {
  /**
   * The ruleset name.
   * @type string
   */
  rulesetName: string;
  /**
   * The rule name.
   * @type string
   */
  ruleName: string;
}

export interface StaticAnalysisApiGetAiCustomRuleRevisionRequest {
  /**
   * The ruleset name.
   * @type string
   */
  rulesetName: string;
  /**
   * The rule name.
   * @type string
   */
  ruleName: string;
  /**
   * The revision identifier.
   * @type string
   */
  id: string;
}

export interface StaticAnalysisApiGetAiCustomRulesetRequest {
  /**
   * The ruleset name.
   * @type string
   */
  rulesetName: string;
}

export interface StaticAnalysisApiGetCustomRuleRequest {
  /**
   * The ruleset name
   * @type string
   */
  rulesetName: string;
  /**
   * The rule name
   * @type string
   */
  ruleName: string;
}

export interface StaticAnalysisApiGetCustomRuleRevisionRequest {
  /**
   * The ruleset name
   * @type string
   */
  rulesetName: string;
  /**
   * The rule name
   * @type string
   */
  ruleName: string;
  /**
   * The revision ID
   * @type string
   */
  id: string;
}

export interface StaticAnalysisApiGetCustomRulesetRequest {
  /**
   * The ruleset name
   * @type string
   */
  rulesetName: string;
}

export interface StaticAnalysisApiGetSCAScanRequest {
  /**
   * The job identifier returned when the scan was submitted.
   * @type string
   */
  jobId: string;
}

export interface StaticAnalysisApiListAiCustomRuleRevisionsRequest {
  /**
   * The ruleset name.
   * @type string
   */
  rulesetName: string;
  /**
   * The rule name.
   * @type string
   */
  ruleName: string;
  /**
   * The offset for pagination.
   * @type number
   */
  pageOffset?: number;
  /**
   * The maximum number of revisions to return.
   * @type number
   */
  pageLimit?: number;
}

export interface StaticAnalysisApiListAiCustomRulesetsRequest {
  /**
   * The offset for pagination.
   * @type number
   */
  pageOffset?: number;
  /**
   * The maximum number of rulesets to return.
   * @type number
   */
  pageLimit?: number;
}

export interface StaticAnalysisApiListCustomRuleRevisionsRequest {
  /**
   * The ruleset name
   * @type string
   */
  rulesetName: string;
  /**
   * The rule name
   * @type string
   */
  ruleName: string;
  /**
   * Pagination offset
   * @type number
   */
  pageOffset?: number;
  /**
   * Pagination limit
   * @type number
   */
  pageLimit?: number;
}

export interface StaticAnalysisApiRevertCustomRuleRevisionRequest {
  /**
   * The ruleset name
   * @type string
   */
  rulesetName: string;
  /**
   * The rule name
   * @type string
   */
  ruleName: string;
  /**
   * @type RevertCustomRuleRevisionRequest
   */
  body: RevertCustomRuleRevisionRequest;
}

export interface StaticAnalysisApiUpdateAiCustomRulesetRequest {
  /**
   * The ruleset name.
   * @type string
   */
  rulesetName: string;
  /**
   * @type AiCustomRulesetUpdateRequest
   */
  body: AiCustomRulesetUpdateRequest;
}

export interface StaticAnalysisApiUpdateCustomRulesetRequest {
  /**
   * The ruleset name
   * @type string
   */
  rulesetName: string;
  /**
   * @type CustomRulesetRequest
   */
  body: CustomRulesetRequest;
}

export class StaticAnalysisApi {
  private requestFactory: StaticAnalysisApiRequestFactory;
  private responseProcessor: StaticAnalysisApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: StaticAnalysisApiRequestFactory,
    responseProcessor?: StaticAnalysisApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new StaticAnalysisApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new StaticAnalysisApiResponseProcessor();
  }

  /**
   * Create a new AI custom rule within a ruleset.
   * @param param The request object
   */
  public createAiCustomRule(
    param: StaticAnalysisApiCreateAiCustomRuleRequest,
    options?: Configuration,
  ): Promise<AiCustomRuleResponse> {
    const requestContextPromise = this.requestFactory.createAiCustomRule(
      param.rulesetName,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAiCustomRule(responseContext);
        });
    });
  }

  /**
   * Create a new revision for an AI custom rule.
   * @param param The request object
   */
  public createAiCustomRuleRevision(
    param: StaticAnalysisApiCreateAiCustomRuleRevisionRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.createAiCustomRuleRevision(
        param.rulesetName,
        param.ruleName,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAiCustomRuleRevision(
            responseContext,
          );
        });
    });
  }

  /**
   * Create a new AI custom ruleset for the authenticated organization.
   * @param param The request object
   */
  public createAiCustomRuleset(
    param: StaticAnalysisApiCreateAiCustomRulesetRequest,
    options?: Configuration,
  ): Promise<AiCustomRulesetResponse> {
    const requestContextPromise = this.requestFactory.createAiCustomRuleset(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAiCustomRuleset(responseContext);
        });
    });
  }

  /**
   * Add a new AI memory violation result for the authenticated organization.
   * @param param The request object
   */
  public createAiMemoryViolationResult(
    param: StaticAnalysisApiCreateAiMemoryViolationResultRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.createAiMemoryViolationResult(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAiMemoryViolationResult(
            responseContext,
          );
        });
    });
  }

  /**
   * Create a new custom rule within a ruleset
   * @param param The request object
   */
  public createCustomRule(
    param: StaticAnalysisApiCreateCustomRuleRequest,
    options?: Configuration,
  ): Promise<CustomRuleResponse> {
    const requestContextPromise = this.requestFactory.createCustomRule(
      param.rulesetName,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createCustomRule(responseContext);
        });
    });
  }

  /**
   * Create a new revision for a custom rule
   * @param param The request object
   */
  public createCustomRuleRevision(
    param: StaticAnalysisApiCreateCustomRuleRevisionRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.createCustomRuleRevision(
      param.rulesetName,
      param.ruleName,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createCustomRuleRevision(
            responseContext,
          );
        });
    });
  }

  /**
   * Create a new custom ruleset for the authenticated organization.
   * @param param The request object
   */
  public createCustomRuleset(
    param: StaticAnalysisApiCreateCustomRulesetRequest,
    options?: Configuration,
  ): Promise<CustomRulesetResponse> {
    const requestContextPromise = this.requestFactory.createCustomRuleset(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createCustomRuleset(responseContext);
        });
    });
  }

  /**
   * @param param The request object
   */
  public createSCAResolveVulnerableSymbols(
    param: StaticAnalysisApiCreateSCAResolveVulnerableSymbolsRequest,
    options?: Configuration,
  ): Promise<ResolveVulnerableSymbolsResponse> {
    const requestContextPromise =
      this.requestFactory.createSCAResolveVulnerableSymbols(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSCAResolveVulnerableSymbols(
            responseContext,
          );
        });
    });
  }

  /**
   * @param param The request object
   */
  public createSCAResult(
    param: StaticAnalysisApiCreateSCAResultRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.createSCAResult(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSCAResult(responseContext);
        });
    });
  }

  /**
   * @param param The request object
   */
  public createSCAScan(
    param: StaticAnalysisApiCreateSCAScanRequest,
    options?: Configuration,
  ): Promise<McpScanRequestResponse> {
    const requestContextPromise = this.requestFactory.createSCAScan(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSCAScan(responseContext);
        });
    });
  }

  /**
   * Delete an AI custom rule by name within a ruleset.
   * @param param The request object
   */
  public deleteAiCustomRule(
    param: StaticAnalysisApiDeleteAiCustomRuleRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteAiCustomRule(
      param.rulesetName,
      param.ruleName,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAiCustomRule(responseContext);
        });
    });
  }

  /**
   * Delete an AI custom ruleset by name.
   * @param param The request object
   */
  public deleteAiCustomRuleset(
    param: StaticAnalysisApiDeleteAiCustomRulesetRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteAiCustomRuleset(
      param.rulesetName,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAiCustomRuleset(responseContext);
        });
    });
  }

  /**
   * Delete an AI memory violation result by its numeric identifier.
   * @param param The request object
   */
  public deleteAiMemoryViolationResult(
    param: StaticAnalysisApiDeleteAiMemoryViolationResultRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteAiMemoryViolationResult(param.id, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAiMemoryViolationResult(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a custom rule
   * @param param The request object
   */
  public deleteCustomRule(
    param: StaticAnalysisApiDeleteCustomRuleRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteCustomRule(
      param.rulesetName,
      param.ruleName,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteCustomRule(responseContext);
        });
    });
  }

  /**
   * Delete a custom ruleset
   * @param param The request object
   */
  public deleteCustomRuleset(
    param: StaticAnalysisApiDeleteCustomRulesetRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteCustomRuleset(
      param.rulesetName,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteCustomRuleset(responseContext);
        });
    });
  }

  /**
   * Get an AI custom rule by name within a ruleset.
   * @param param The request object
   */
  public getAiCustomRule(
    param: StaticAnalysisApiGetAiCustomRuleRequest,
    options?: Configuration,
  ): Promise<AiCustomRuleResponse> {
    const requestContextPromise = this.requestFactory.getAiCustomRule(
      param.rulesetName,
      param.ruleName,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAiCustomRule(responseContext);
        });
    });
  }

  /**
   * Get a specific revision of an AI custom rule.
   * @param param The request object
   */
  public getAiCustomRuleRevision(
    param: StaticAnalysisApiGetAiCustomRuleRevisionRequest,
    options?: Configuration,
  ): Promise<AiCustomRuleRevisionResponse> {
    const requestContextPromise = this.requestFactory.getAiCustomRuleRevision(
      param.rulesetName,
      param.ruleName,
      param.id,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAiCustomRuleRevision(
            responseContext,
          );
        });
    });
  }

  /**
   * Get an AI custom ruleset by name.
   * @param param The request object
   */
  public getAiCustomRuleset(
    param: StaticAnalysisApiGetAiCustomRulesetRequest,
    options?: Configuration,
  ): Promise<AiCustomRulesetResponse> {
    const requestContextPromise = this.requestFactory.getAiCustomRuleset(
      param.rulesetName,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAiCustomRuleset(responseContext);
        });
    });
  }

  /**
   * Get a custom rule by name
   * @param param The request object
   */
  public getCustomRule(
    param: StaticAnalysisApiGetCustomRuleRequest,
    options?: Configuration,
  ): Promise<CustomRuleResponse> {
    const requestContextPromise = this.requestFactory.getCustomRule(
      param.rulesetName,
      param.ruleName,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCustomRule(responseContext);
        });
    });
  }

  /**
   * Get a specific revision of a custom rule
   * @param param The request object
   */
  public getCustomRuleRevision(
    param: StaticAnalysisApiGetCustomRuleRevisionRequest,
    options?: Configuration,
  ): Promise<CustomRuleRevisionResponse> {
    const requestContextPromise = this.requestFactory.getCustomRuleRevision(
      param.rulesetName,
      param.ruleName,
      param.id,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCustomRuleRevision(responseContext);
        });
    });
  }

  /**
   * Get a custom ruleset by name
   * @param param The request object
   */
  public getCustomRuleset(
    param: StaticAnalysisApiGetCustomRulesetRequest,
    options?: Configuration,
  ): Promise<CustomRulesetResponse> {
    const requestContextPromise = this.requestFactory.getCustomRuleset(
      param.rulesetName,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCustomRuleset(responseContext);
        });
    });
  }

  /**
   * @param param The request object
   */
  public getSCAScan(
    param: StaticAnalysisApiGetSCAScanRequest,
    options?: Configuration,
  ): Promise<ScanResultResponse> {
    const requestContextPromise = this.requestFactory.getSCAScan(
      param.jobId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSCAScan(responseContext);
        });
    });
  }

  /**
   * Get all revisions for an AI custom rule.
   * @param param The request object
   */
  public listAiCustomRuleRevisions(
    param: StaticAnalysisApiListAiCustomRuleRevisionsRequest,
    options?: Configuration,
  ): Promise<AiCustomRuleRevisionsResponse> {
    const requestContextPromise = this.requestFactory.listAiCustomRuleRevisions(
      param.rulesetName,
      param.ruleName,
      param.pageOffset,
      param.pageLimit,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAiCustomRuleRevisions(
            responseContext,
          );
        });
    });
  }

  /**
   * Provide a paginated version of listAiCustomRuleRevisions returning a generator with all the items.
   */
  public async *listAiCustomRuleRevisionsWithPagination(
    param: StaticAnalysisApiListAiCustomRuleRevisionsRequest,
    options?: Configuration,
  ): AsyncGenerator<AiCustomRuleRevisionResponseData> {
    let pageSize = 100;
    if (param.pageLimit !== undefined) {
      pageSize = param.pageLimit;
    }
    param.pageLimit = pageSize;
    while (true) {
      const requestContext =
        await this.requestFactory.listAiCustomRuleRevisions(
          param.rulesetName,
          param.ruleName,
          param.pageOffset,
          param.pageLimit,
          options,
        );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.listAiCustomRuleRevisions(responseContext);
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
      if (param.pageOffset === undefined) {
        param.pageOffset = pageSize;
      } else {
        param.pageOffset = param.pageOffset + pageSize;
      }
    }
  }

  /**
   * Get all AI custom rulesets for the authenticated organization.
   * @param param The request object
   */
  public listAiCustomRulesets(
    param: StaticAnalysisApiListAiCustomRulesetsRequest = {},
    options?: Configuration,
  ): Promise<AiCustomRulesetsResponse> {
    const requestContextPromise = this.requestFactory.listAiCustomRulesets(
      param.pageOffset,
      param.pageLimit,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAiCustomRulesets(responseContext);
        });
    });
  }

  /**
   * Get all AI memory violation results for the authenticated organization.
   * @param param The request object
   */
  public listAiMemoryViolationResults(
    options?: Configuration,
  ): Promise<AiMemoryViolationResultsResponse> {
    const requestContextPromise =
      this.requestFactory.listAiMemoryViolationResults(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAiMemoryViolationResults(
            responseContext,
          );
        });
    });
  }

  /**
   * Get all AI prompts, including default prompts and custom AI rule prompts for the authenticated organization.
   * @param param The request object
   */
  public listAiPrompts(options?: Configuration): Promise<AiPromptsResponse> {
    const requestContextPromise = this.requestFactory.listAiPrompts(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAiPrompts(responseContext);
        });
    });
  }

  /**
   * Get all revisions for a custom rule
   * @param param The request object
   */
  public listCustomRuleRevisions(
    param: StaticAnalysisApiListCustomRuleRevisionsRequest,
    options?: Configuration,
  ): Promise<CustomRuleRevisionsResponse> {
    const requestContextPromise = this.requestFactory.listCustomRuleRevisions(
      param.rulesetName,
      param.ruleName,
      param.pageOffset,
      param.pageLimit,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCustomRuleRevisions(
            responseContext,
          );
        });
    });
  }

  /**
   * Provide a paginated version of listCustomRuleRevisions returning a generator with all the items.
   */
  public async *listCustomRuleRevisionsWithPagination(
    param: StaticAnalysisApiListCustomRuleRevisionsRequest,
    options?: Configuration,
  ): AsyncGenerator<CustomRuleRevision> {
    let pageSize = 10;
    if (param.pageLimit !== undefined) {
      pageSize = param.pageLimit;
    }
    param.pageLimit = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listCustomRuleRevisions(
        param.rulesetName,
        param.ruleName,
        param.pageOffset,
        param.pageLimit,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.listCustomRuleRevisions(responseContext);
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
      if (param.pageOffset === undefined) {
        param.pageOffset = pageSize;
      } else {
        param.pageOffset = param.pageOffset + pageSize;
      }
    }
  }

  /**
   * Get all custom rulesets for the authenticated organization.
   * @param param The request object
   */
  public listCustomRulesets(
    options?: Configuration,
  ): Promise<CustomRulesetListResponse> {
    const requestContextPromise =
      this.requestFactory.listCustomRulesets(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCustomRulesets(responseContext);
        });
    });
  }

  /**
   * @param param The request object
   */
  public listSCALicenses(
    options?: Configuration,
  ): Promise<LicensesListResponse> {
    const requestContextPromise = this.requestFactory.listSCALicenses(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSCALicenses(responseContext);
        });
    });
  }

  /**
   * Revert a custom rule to a previous revision
   * @param param The request object
   */
  public revertCustomRuleRevision(
    param: StaticAnalysisApiRevertCustomRuleRevisionRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.revertCustomRuleRevision(
      param.rulesetName,
      param.ruleName,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.revertCustomRuleRevision(
            responseContext,
          );
        });
    });
  }

  /**
   * Update the description of an existing AI custom ruleset.
   * @param param The request object
   */
  public updateAiCustomRuleset(
    param: StaticAnalysisApiUpdateAiCustomRulesetRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.updateAiCustomRuleset(
      param.rulesetName,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAiCustomRuleset(responseContext);
        });
    });
  }

  /**
   * Update an existing custom ruleset
   * @param param The request object
   */
  public updateCustomRuleset(
    param: StaticAnalysisApiUpdateCustomRulesetRequest,
    options?: Configuration,
  ): Promise<CustomRulesetResponse> {
    const requestContextPromise = this.requestFactory.updateCustomRuleset(
      param.rulesetName,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateCustomRuleset(responseContext);
        });
    });
  }
}
