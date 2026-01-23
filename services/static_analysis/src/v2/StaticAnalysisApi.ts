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
import { CustomRuleRequest } from "./models/CustomRuleRequest";
import { CustomRuleResponse } from "./models/CustomRuleResponse";
import { CustomRuleRevision } from "./models/CustomRuleRevision";
import { CustomRuleRevisionRequest } from "./models/CustomRuleRevisionRequest";
import { CustomRuleRevisionResponse } from "./models/CustomRuleRevisionResponse";
import { CustomRuleRevisionsResponse } from "./models/CustomRuleRevisionsResponse";
import { CustomRulesetRequest } from "./models/CustomRulesetRequest";
import { CustomRulesetResponse } from "./models/CustomRulesetResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { ResolveVulnerableSymbolsRequest } from "./models/ResolveVulnerableSymbolsRequest";
import { ResolveVulnerableSymbolsResponse } from "./models/ResolveVulnerableSymbolsResponse";
import { RevertCustomRuleRevisionRequest } from "./models/RevertCustomRuleRevisionRequest";
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
