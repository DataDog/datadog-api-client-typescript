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
} from "@datadog/datadog-api-client-core";

import { TypingInfo } from "./models/TypingInfo";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { CreateCustomFrameworkRequest } from "./models/CreateCustomFrameworkRequest";
import { CreateCustomFrameworkResponse } from "./models/CreateCustomFrameworkResponse";
import { DeleteCustomFrameworkResponse } from "./models/DeleteCustomFrameworkResponse";
import { GetCustomFrameworkResponse } from "./models/GetCustomFrameworkResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { RuleBasedViewResponse } from "./models/RuleBasedViewResponse";
import { UpdateCustomFrameworkRequest } from "./models/UpdateCustomFrameworkRequest";
import { UpdateCustomFrameworkResponse } from "./models/UpdateCustomFrameworkResponse";
import { version } from "../version";

export class ComplianceApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("cloud-security", version);
    }
  }
  public async createCustomFramework(
    body: CreateCustomFrameworkRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCustomFramework");
    }

    // Path Params
    const localVarPath = "/api/v2/cloud_security_management/custom_frameworks";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.createCustomFramework",
      ComplianceApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "CreateCustomFrameworkRequest", ""),
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

  public async deleteCustomFramework(
    handle: string,
    version: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'handle' is not null or undefined
    if (handle === null || handle === undefined) {
      throw new RequiredError("handle", "deleteCustomFramework");
    }

    // verify required parameter 'version' is not null or undefined
    if (version === null || version === undefined) {
      throw new RequiredError("version", "deleteCustomFramework");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cloud_security_management/custom_frameworks/{handle}/{version}"
        .replace("{handle}", encodeURIComponent(String(handle)))
        .replace("{version}", encodeURIComponent(String(version)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.deleteCustomFramework",
      ComplianceApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getCustomFramework(
    handle: string,
    version: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'handle' is not null or undefined
    if (handle === null || handle === undefined) {
      throw new RequiredError("handle", "getCustomFramework");
    }

    // verify required parameter 'version' is not null or undefined
    if (version === null || version === undefined) {
      throw new RequiredError("version", "getCustomFramework");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cloud_security_management/custom_frameworks/{handle}/{version}"
        .replace("{handle}", encodeURIComponent(String(handle)))
        .replace("{version}", encodeURIComponent(String(version)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.getCustomFramework",
      ComplianceApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getRuleBasedView(
    to: number,
    framework?: string,
    version?: string,
    queryFindingsWithoutFrameworkVersion?: boolean,
    includeRulesWithoutFindings?: boolean,
    isCustom?: boolean,
    query?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getRuleBasedView'");
    if (!_config.unstableOperations["v2.getRuleBasedView"]) {
      throw new Error(
        "Unstable operation 'getRuleBasedView' is disabled. Enable it by setting `configuration.unstableOperations['v2.getRuleBasedView'] = true`",
      );
    }

    // verify required parameter 'to' is not null or undefined
    if (to === null || to === undefined) {
      throw new RequiredError("to", "getRuleBasedView");
    }

    // Path Params
    const localVarPath = "/api/v2/compliance_findings/rule_based_view";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.ComplianceApi.getRuleBasedView",
      ComplianceApi.operationServers,
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
    if (to !== undefined) {
      requestContext.setQueryParam(
        "to",
        serialize(to, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (framework !== undefined) {
      requestContext.setQueryParam(
        "framework",
        serialize(framework, TypingInfo, "string", ""),
        "",
      );
    }
    if (version !== undefined) {
      requestContext.setQueryParam(
        "version",
        serialize(version, TypingInfo, "string", ""),
        "",
      );
    }
    if (queryFindingsWithoutFrameworkVersion !== undefined) {
      requestContext.setQueryParam(
        "query_findings_without_framework_version",
        serialize(
          queryFindingsWithoutFrameworkVersion,
          TypingInfo,
          "boolean",
          "",
        ),
        "",
      );
    }
    if (includeRulesWithoutFindings !== undefined) {
      requestContext.setQueryParam(
        "include_rules_without_findings",
        serialize(includeRulesWithoutFindings, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (isCustom !== undefined) {
      requestContext.setQueryParam(
        "is_custom",
        serialize(isCustom, TypingInfo, "boolean", ""),
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async updateCustomFramework(
    handle: string,
    version: string,
    body: UpdateCustomFrameworkRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'handle' is not null or undefined
    if (handle === null || handle === undefined) {
      throw new RequiredError("handle", "updateCustomFramework");
    }

    // verify required parameter 'version' is not null or undefined
    if (version === null || version === undefined) {
      throw new RequiredError("version", "updateCustomFramework");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateCustomFramework");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cloud_security_management/custom_frameworks/{handle}/{version}"
        .replace("{handle}", encodeURIComponent(String(handle)))
        .replace("{version}", encodeURIComponent(String(version)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "v2.SecurityMonitoringApi.updateCustomFramework",
      ComplianceApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "UpdateCustomFrameworkRequest", ""),
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

export class ComplianceApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createCustomFramework
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCustomFramework(
    response: ResponseContext,
  ): Promise<CreateCustomFrameworkResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CreateCustomFrameworkResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CreateCustomFrameworkResponse",
      ) as CreateCustomFrameworkResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 429 ||
      response.httpStatusCode === 500
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
      const body: CreateCustomFrameworkResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CreateCustomFrameworkResponse",
        "",
      ) as CreateCustomFrameworkResponse;
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
   * @params response Response returned by the server for a request to deleteCustomFramework
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteCustomFramework(
    response: ResponseContext,
  ): Promise<DeleteCustomFrameworkResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DeleteCustomFrameworkResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeleteCustomFrameworkResponse",
      ) as DeleteCustomFrameworkResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 429 ||
      response.httpStatusCode === 500
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
      const body: DeleteCustomFrameworkResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeleteCustomFrameworkResponse",
        "",
      ) as DeleteCustomFrameworkResponse;
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
   * @params response Response returned by the server for a request to getCustomFramework
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCustomFramework(
    response: ResponseContext,
  ): Promise<GetCustomFrameworkResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GetCustomFrameworkResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetCustomFrameworkResponse",
      ) as GetCustomFrameworkResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 429 ||
      response.httpStatusCode === 500
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
      const body: GetCustomFrameworkResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetCustomFrameworkResponse",
        "",
      ) as GetCustomFrameworkResponse;
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
   * @params response Response returned by the server for a request to getRuleBasedView
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRuleBasedView(
    response: ResponseContext,
  ): Promise<RuleBasedViewResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: RuleBasedViewResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RuleBasedViewResponse",
      ) as RuleBasedViewResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 503) {
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
      const body: RuleBasedViewResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "RuleBasedViewResponse",
        "",
      ) as RuleBasedViewResponse;
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
   * @params response Response returned by the server for a request to updateCustomFramework
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateCustomFramework(
    response: ResponseContext,
  ): Promise<UpdateCustomFrameworkResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: UpdateCustomFrameworkResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UpdateCustomFrameworkResponse",
      ) as UpdateCustomFrameworkResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 429 ||
      response.httpStatusCode === 500
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
      const body: UpdateCustomFrameworkResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UpdateCustomFrameworkResponse",
        "",
      ) as UpdateCustomFrameworkResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface ComplianceApiCreateCustomFrameworkRequest {
  /**
   * @type CreateCustomFrameworkRequest
   */
  body: CreateCustomFrameworkRequest;
}

export interface ComplianceApiDeleteCustomFrameworkRequest {
  /**
   * The framework handle
   * @type string
   */
  handle: string;
  /**
   * The framework version
   * @type string
   */
  version: string;
}

export interface ComplianceApiGetCustomFrameworkRequest {
  /**
   * The framework handle
   * @type string
   */
  handle: string;
  /**
   * The framework version
   * @type string
   */
  version: string;
}

export interface ComplianceApiGetRuleBasedViewRequest {
  /**
   * Timestamp of the query end, in milliseconds since the Unix epoch.
   * @type number
   */
  to: number;
  /**
   * Compliance framework handle to filter rules and findings by.
   * @type string
   */
  framework?: string;
  /**
   * Version of the compliance framework to filter rules and findings by.
   * @type string
   */
  version?: string;
  /**
   * When `true`, returns findings without a `framework_version` tag. Used for findings from custom frameworks or those created before framework versioning was introduced.
   * @type boolean
   */
  queryFindingsWithoutFrameworkVersion?: boolean;
  /**
   * When `true`, includes rules in the response that have no associated findings.
   * @type boolean
   */
  includeRulesWithoutFindings?: boolean;
  /**
   * Set to `true` when the requested `framework` is a custom framework.
   * @type boolean
   */
  isCustom?: boolean;
  /**
   * Additional event-platform filters applied to the underlying findings query. For example, `scored:true project_id:datadog-prod-us5`.
   * @type string
   */
  query?: string;
}

export interface ComplianceApiUpdateCustomFrameworkRequest {
  /**
   * The framework handle
   * @type string
   */
  handle: string;
  /**
   * The framework version
   * @type string
   */
  version: string;
  /**
   * @type UpdateCustomFrameworkRequest
   */
  body: UpdateCustomFrameworkRequest;
}

export class ComplianceApi {
  private requestFactory: ComplianceApiRequestFactory;
  private responseProcessor: ComplianceApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: ComplianceApiRequestFactory,
    responseProcessor?: ComplianceApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new ComplianceApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new ComplianceApiResponseProcessor();
  }

  /**
   * Create a custom framework.
   * @param param The request object
   */
  public createCustomFramework(
    param: ComplianceApiCreateCustomFrameworkRequest,
    options?: Configuration,
  ): Promise<CreateCustomFrameworkResponse> {
    const requestContextPromise = this.requestFactory.createCustomFramework(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createCustomFramework(responseContext);
        });
    });
  }

  /**
   * Delete a custom framework.
   * @param param The request object
   */
  public deleteCustomFramework(
    param: ComplianceApiDeleteCustomFrameworkRequest,
    options?: Configuration,
  ): Promise<DeleteCustomFrameworkResponse> {
    const requestContextPromise = this.requestFactory.deleteCustomFramework(
      param.handle,
      param.version,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteCustomFramework(responseContext);
        });
    });
  }

  /**
   * Get a custom framework.
   * @param param The request object
   */
  public getCustomFramework(
    param: ComplianceApiGetCustomFrameworkRequest,
    options?: Configuration,
  ): Promise<GetCustomFrameworkResponse> {
    const requestContextPromise = this.requestFactory.getCustomFramework(
      param.handle,
      param.version,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCustomFramework(responseContext);
        });
    });
  }

  /**
   * **This endpoint is deprecated.** Use the [Security Monitoring - Search Security Findings](https://docs.datadoghq.com/api/latest/security-monitoring/search-security-findings/) endpoint instead.
   *
   * Get an aggregated view of compliance rules with their pass, fail, and muted finding counts.
   * Supports filtering by compliance framework, framework version, and additional query filters.
   * @param param The request object
   */
  public getRuleBasedView(
    param: ComplianceApiGetRuleBasedViewRequest,
    options?: Configuration,
  ): Promise<RuleBasedViewResponse> {
    const requestContextPromise = this.requestFactory.getRuleBasedView(
      param.to,
      param.framework,
      param.version,
      param.queryFindingsWithoutFrameworkVersion,
      param.includeRulesWithoutFindings,
      param.isCustom,
      param.query,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRuleBasedView(responseContext);
        });
    });
  }

  /**
   * Update a custom framework.
   * @param param The request object
   */
  public updateCustomFramework(
    param: ComplianceApiUpdateCustomFrameworkRequest,
    options?: Configuration,
  ): Promise<UpdateCustomFrameworkResponse> {
    const requestContextPromise = this.requestFactory.updateCustomFramework(
      param.handle,
      param.version,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateCustomFramework(responseContext);
        });
    });
  }
}
