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
import { AgentHealthAgentType } from "./models/AgentHealthAgentType";
import { AgentHealthHostIssuesResponse } from "./models/AgentHealthHostIssuesResponse";
import { AgentHealthIssueResponse } from "./models/AgentHealthIssueResponse";
import { AgentHealthIssuesResponse } from "./models/AgentHealthIssuesResponse";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { version } from "../version";

export class AgentHealthApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("agent-health", version);
    }
  }
  public async getAgentHealthIssue(
    issueId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["AgentHealthApi.v2.getAgentHealthIssue"]) {
      throw new Error(
        "Unstable operation 'getAgentHealthIssue' is disabled. Enable it by setting `configuration.unstableOperations['AgentHealthApi.v2.getAgentHealthIssue'] = true`",
      );
    }

    // verify required parameter 'issueId' is not null or undefined
    if (issueId === null || issueId === undefined) {
      throw new RequiredError("issueId", "getAgentHealthIssue");
    }

    // Path Params
    const localVarPath = "/api/v2/agenthealth/issues/{issue_id}".replace(
      "{issue_id}",
      encodeURIComponent(String(issueId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "AgentHealthApi.v2.getAgentHealthIssue",
      AgentHealthApi.operationServers,
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

  public async listAgentHealthHostIssues(
    resourceId: string,
    agentType?: AgentHealthAgentType,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'resourceId' is not null or undefined
    if (resourceId === null || resourceId === undefined) {
      throw new RequiredError("resourceId", "listAgentHealthHostIssues");
    }

    // Path Params
    const localVarPath =
      "/api/v2/agenthealth/hosts/{resource_id}/issues".replace(
        "{resource_id}",
        encodeURIComponent(String(resourceId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "AgentHealthApi.v2.listAgentHealthHostIssues",
      AgentHealthApi.operationServers,
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
    if (agentType !== undefined) {
      requestContext.setQueryParam(
        "agent_type",
        serialize(agentType, TypingInfo, "AgentHealthAgentType", ""),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth"]);

    return requestContext;
  }

  public async listAgentHealthIssues(
    pageSize?: number,
    pageNumber?: number,
    filterSeverity?: string,
    filterCategory?: string,
    filterIssueType?: string,
    filterResourceKind?: string,
    filterResourceId?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["AgentHealthApi.v2.listAgentHealthIssues"]
    ) {
      throw new Error(
        "Unstable operation 'listAgentHealthIssues' is disabled. Enable it by setting `configuration.unstableOperations['AgentHealthApi.v2.listAgentHealthIssues'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/agenthealth/issues";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "AgentHealthApi.v2.listAgentHealthIssues",
      AgentHealthApi.operationServers,
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
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        serialize(pageSize, TypingInfo, "number", "int64"),
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
    if (filterSeverity !== undefined) {
      requestContext.setQueryParam(
        "filter[severity]",
        serialize(filterSeverity, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterCategory !== undefined) {
      requestContext.setQueryParam(
        "filter[category]",
        serialize(filterCategory, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterIssueType !== undefined) {
      requestContext.setQueryParam(
        "filter[issue_type]",
        serialize(filterIssueType, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterResourceKind !== undefined) {
      requestContext.setQueryParam(
        "filter[resource_kind]",
        serialize(filterResourceKind, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterResourceId !== undefined) {
      requestContext.setQueryParam(
        "filter[resource_id]",
        serialize(filterResourceId, TypingInfo, "string", ""),
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

export class AgentHealthApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getAgentHealthIssue
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAgentHealthIssue(
    response: ResponseContext,
  ): Promise<AgentHealthIssueResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AgentHealthIssueResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AgentHealthIssueResponse",
      ) as AgentHealthIssueResponse;
      return body;
    }
    if (
      response.httpStatusCode === 401 ||
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
      const body: AgentHealthIssueResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AgentHealthIssueResponse",
        "",
      ) as AgentHealthIssueResponse;
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
   * @params response Response returned by the server for a request to listAgentHealthHostIssues
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAgentHealthHostIssues(
    response: ResponseContext,
  ): Promise<AgentHealthHostIssuesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AgentHealthHostIssuesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AgentHealthHostIssuesResponse",
      ) as AgentHealthHostIssuesResponse;
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
      const body: AgentHealthHostIssuesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AgentHealthHostIssuesResponse",
        "",
      ) as AgentHealthHostIssuesResponse;
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
   * @params response Response returned by the server for a request to listAgentHealthIssues
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAgentHealthIssues(
    response: ResponseContext,
  ): Promise<AgentHealthIssuesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AgentHealthIssuesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AgentHealthIssuesResponse",
      ) as AgentHealthIssuesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
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
      const body: AgentHealthIssuesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AgentHealthIssuesResponse",
        "",
      ) as AgentHealthIssuesResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface AgentHealthApiGetAgentHealthIssueRequest {
  /**
   * The unique identifier of the issue. It can contain `:` and must be percent-encoded
   * by clients when included in the path.
   * @type string
   */
  issueId: string;
}

export interface AgentHealthApiListAgentHealthHostIssuesRequest {
  /**
   * Resource identifier whose active Agent Health issues should be returned: a DaemonSet UID for a node Agent or a cluster UUID for a Cluster Agent.
   * @type string
   */
  resourceId: string;
  /**
   * Agent type associated with the resource. Defaults to `node` when omitted.
   * @type AgentHealthAgentType
   */
  agentType?: AgentHealthAgentType;
}

export interface AgentHealthApiListAgentHealthIssuesRequest {
  /**
   * The number of issues to return per page, from 1 to 100. Defaults to 25.
   * @type number
   */
  pageSize?: number;
  /**
   * The zero-based page number, from 0 to 1000000. Defaults to 0.
   * @type number
   */
  pageNumber?: number;
  /**
   * Filter by a comma-separated list of exact `severity` values, up to 50 values
   * of at most 256 characters each. Values are combined with OR within this filter and AND across filters.
   * Blank entries are ignored; an all-blank filter is treated as absent.
   * @type string
   */
  filterSeverity?: string;
  /**
   * Filter by a comma-separated list of exact `category` values, up to 50 values
   * of at most 256 characters each. Values are combined with OR within this filter and AND across filters.
   * Blank entries are ignored; an all-blank filter is treated as absent.
   * @type string
   */
  filterCategory?: string;
  /**
   * Filter by a comma-separated list of exact `issue_type` values, up to 50 values
   * of at most 256 characters each. Values are combined with OR within this filter and AND across filters.
   * Blank entries are ignored; an all-blank filter is treated as absent.
   * @type string
   */
  filterIssueType?: string;
  /**
   * Filter by a comma-separated list of exact `resource_kind` values, up to 50 values
   * of at most 256 characters each. Values are combined with OR within this filter and AND across filters.
   * Blank entries are ignored; an all-blank filter is treated as absent.
   * @type string
   */
  filterResourceKind?: string;
  /**
   * Filter by a comma-separated list of exact `resource_id` values, up to 50 values
   * of at most 256 characters each. Values are combined with OR within this filter and AND across filters.
   * Blank entries are ignored; an all-blank filter is treated as absent.
   * @type string
   */
  filterResourceId?: string;
}

export class AgentHealthApi {
  private requestFactory: AgentHealthApiRequestFactory;
  private responseProcessor: AgentHealthApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: AgentHealthApiRequestFactory,
    responseProcessor?: AgentHealthApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new AgentHealthApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new AgentHealthApiResponseProcessor();
  }

  /**
   * Get an Agent Health issue and its available remediation in your organization.
   * Only open issues are returned. The `remediation` attribute is omitted when
   * the issue has no remediation.
   *
   * Returns `404` if the issue does not exist, is not open, belongs to another
   * organization, or you do not have access to its data. This response does not
   * reveal whether the issue exists. Returns `403` if you lack the `hosts_read` permission.
   * @param param The request object
   */
  public getAgentHealthIssue(
    param: AgentHealthApiGetAgentHealthIssueRequest,
    options?: Configuration,
  ): Promise<AgentHealthIssueResponse> {
    const requestContextPromise = this.requestFactory.getAgentHealthIssue(
      param.issueId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAgentHealthIssue(responseContext);
        });
    });
  }

  /**
   * Returns the active Agent Health issues for a node Agent or Cluster Agent resource.
   * @param param The request object
   */
  public listAgentHealthHostIssues(
    param: AgentHealthApiListAgentHealthHostIssuesRequest,
    options?: Configuration,
  ): Promise<AgentHealthHostIssuesResponse> {
    const requestContextPromise = this.requestFactory.listAgentHealthHostIssues(
      param.resourceId,
      param.agentType,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAgentHealthHostIssues(
            responseContext,
          );
        });
    });
  }

  /**
   * List Agent Health issues across your organization. Only open issues are returned.
   * Returns `403` if you lack the `hosts_read` permission.
   *
   * Results use a stable order: severity rank (`high`, `medium`, `low`, then other values),
   * then `first_seen_at` descending with missing timestamps last, then issue ID ascending.
   * Use `page[size]` and the zero-based `page[number]` to paginate. Invalid page values
   * return a `400` JSON:API error response. `meta.page.total_filtered_count` is the number
   * of issues matching the filters, and `meta.page.total_count` the number of open issues
   * in the organization.
   *
   * Each filter accepts up to 50 comma-separated exact values of at most 256 characters
   * each, combined with OR within a filter and AND across filters. Blank entries are ignored; an all-blank filter
   * is treated as absent.
   * @param param The request object
   */
  public listAgentHealthIssues(
    param: AgentHealthApiListAgentHealthIssuesRequest = {},
    options?: Configuration,
  ): Promise<AgentHealthIssuesResponse> {
    const requestContextPromise = this.requestFactory.listAgentHealthIssues(
      param.pageSize,
      param.pageNumber,
      param.filterSeverity,
      param.filterCategory,
      param.filterIssueType,
      param.filterResourceKind,
      param.filterResourceId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAgentHealthIssues(responseContext);
        });
    });
  }
}
