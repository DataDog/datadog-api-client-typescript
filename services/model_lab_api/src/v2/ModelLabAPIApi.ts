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
  HttpFile,
} from "@datadog/datadog-api-client";

import { TypingInfo } from "./models/TypingInfo";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { ModelLabFacetKeysResponse } from "./models/ModelLabFacetKeysResponse";
import { ModelLabFacetType } from "./models/ModelLabFacetType";
import { ModelLabFacetValuesResponse } from "./models/ModelLabFacetValuesResponse";
import { ModelLabProjectArtifactsResponse } from "./models/ModelLabProjectArtifactsResponse";
import { ModelLabProjectFacetType } from "./models/ModelLabProjectFacetType";
import { ModelLabProjectResponse } from "./models/ModelLabProjectResponse";
import { ModelLabProjectsResponse } from "./models/ModelLabProjectsResponse";
import { ModelLabRunArtifactsResponse } from "./models/ModelLabRunArtifactsResponse";
import { ModelLabRunResponse } from "./models/ModelLabRunResponse";
import { ModelLabRunsResponse } from "./models/ModelLabRunsResponse";
import { ModelLabRunStatus } from "./models/ModelLabRunStatus";
import { version } from "../version";

export class ModelLabAPIApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("model-lab-api", version);
    }
  }
  public async deleteModelLabRun(
    runId: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["ModelLabAPIApi.v2.deleteModelLabRun"]) {
      throw new Error(
        "Unstable operation 'deleteModelLabRun' is disabled. Enable it by setting `configuration.unstableOperations['ModelLabAPIApi.v2.deleteModelLabRun'] = true`",
      );
    }

    // verify required parameter 'runId' is not null or undefined
    if (runId === null || runId === undefined) {
      throw new RequiredError("runId", "deleteModelLabRun");
    }

    // Path Params
    const localVarPath = "/api/v2/model-lab-api/runs/{run_id}".replace(
      "{run_id}",
      encodeURIComponent(String(runId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ModelLabAPIApi.v2.deleteModelLabRun",
      ModelLabAPIApi.operationServers,
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

  public async getModelLabArtifactContent(
    projectId: string,
    artifactPath: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ModelLabAPIApi.v2.getModelLabArtifactContent"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getModelLabArtifactContent' is disabled. Enable it by setting `configuration.unstableOperations['ModelLabAPIApi.v2.getModelLabArtifactContent'] = true`",
      );
    }

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "getModelLabArtifactContent");
    }

    // verify required parameter 'artifactPath' is not null or undefined
    if (artifactPath === null || artifactPath === undefined) {
      throw new RequiredError("artifactPath", "getModelLabArtifactContent");
    }

    // Path Params
    const localVarPath = "/api/v2/model-lab-api/artifacts/content";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ModelLabAPIApi.v2.getModelLabArtifactContent",
      ModelLabAPIApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam(
      "Accept",
      "application/octet-stream, application/json",
    );
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (projectId !== undefined) {
      requestContext.setQueryParam(
        "project_id",
        serialize(projectId, TypingInfo, "string", ""),
        "",
      );
    }
    if (artifactPath !== undefined) {
      requestContext.setQueryParam(
        "artifact_path",
        serialize(artifactPath, TypingInfo, "string", ""),
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

  public async getModelLabProject(
    projectId: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["ModelLabAPIApi.v2.getModelLabProject"]) {
      throw new Error(
        "Unstable operation 'getModelLabProject' is disabled. Enable it by setting `configuration.unstableOperations['ModelLabAPIApi.v2.getModelLabProject'] = true`",
      );
    }

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "getModelLabProject");
    }

    // Path Params
    const localVarPath = "/api/v2/model-lab-api/projects/{project_id}".replace(
      "{project_id}",
      encodeURIComponent(String(projectId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ModelLabAPIApi.v2.getModelLabProject",
      ModelLabAPIApi.operationServers,
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

  public async getModelLabRun(
    runId: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["ModelLabAPIApi.v2.getModelLabRun"]) {
      throw new Error(
        "Unstable operation 'getModelLabRun' is disabled. Enable it by setting `configuration.unstableOperations['ModelLabAPIApi.v2.getModelLabRun'] = true`",
      );
    }

    // verify required parameter 'runId' is not null or undefined
    if (runId === null || runId === undefined) {
      throw new RequiredError("runId", "getModelLabRun");
    }

    // Path Params
    const localVarPath = "/api/v2/model-lab-api/runs/{run_id}".replace(
      "{run_id}",
      encodeURIComponent(String(runId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ModelLabAPIApi.v2.getModelLabRun",
      ModelLabAPIApi.operationServers,
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

  public async listModelLabProjectArtifacts(
    projectId: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ModelLabAPIApi.v2.listModelLabProjectArtifacts"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listModelLabProjectArtifacts' is disabled. Enable it by setting `configuration.unstableOperations['ModelLabAPIApi.v2.listModelLabProjectArtifacts'] = true`",
      );
    }

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "listModelLabProjectArtifacts");
    }

    // Path Params
    const localVarPath =
      "/api/v2/model-lab-api/projects/{project_id}/artifacts".replace(
        "{project_id}",
        encodeURIComponent(String(projectId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ModelLabAPIApi.v2.listModelLabProjectArtifacts",
      ModelLabAPIApi.operationServers,
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

  public async listModelLabProjectFacetKeys(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ModelLabAPIApi.v2.listModelLabProjectFacetKeys"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listModelLabProjectFacetKeys' is disabled. Enable it by setting `configuration.unstableOperations['ModelLabAPIApi.v2.listModelLabProjectFacetKeys'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/model-lab-api/project-facet-keys";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ModelLabAPIApi.v2.listModelLabProjectFacetKeys",
      ModelLabAPIApi.operationServers,
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

  public async listModelLabProjectFacetValues(
    facetType: ModelLabProjectFacetType,
    facetName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ModelLabAPIApi.v2.listModelLabProjectFacetValues"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listModelLabProjectFacetValues' is disabled. Enable it by setting `configuration.unstableOperations['ModelLabAPIApi.v2.listModelLabProjectFacetValues'] = true`",
      );
    }

    // verify required parameter 'facetType' is not null or undefined
    if (facetType === null || facetType === undefined) {
      throw new RequiredError("facetType", "listModelLabProjectFacetValues");
    }

    // verify required parameter 'facetName' is not null or undefined
    if (facetName === null || facetName === undefined) {
      throw new RequiredError("facetName", "listModelLabProjectFacetValues");
    }

    // Path Params
    const localVarPath = "/api/v2/model-lab-api/project-facet-values";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ModelLabAPIApi.v2.listModelLabProjectFacetValues",
      ModelLabAPIApi.operationServers,
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
    if (facetType !== undefined) {
      requestContext.setQueryParam(
        "facet_type",
        serialize(facetType, TypingInfo, "ModelLabProjectFacetType", ""),
        "",
      );
    }
    if (facetName !== undefined) {
      requestContext.setQueryParam(
        "facet_name",
        serialize(facetName, TypingInfo, "string", ""),
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

  public async listModelLabProjects(
    filter?: string,
    filterOwnerId?: string,
    filterTags?: string,
    sort?: string,
    pageSize?: number,
    pageNumber?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["ModelLabAPIApi.v2.listModelLabProjects"]) {
      throw new Error(
        "Unstable operation 'listModelLabProjects' is disabled. Enable it by setting `configuration.unstableOperations['ModelLabAPIApi.v2.listModelLabProjects'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/model-lab-api/projects";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ModelLabAPIApi.v2.listModelLabProjects",
      ModelLabAPIApi.operationServers,
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
    if (filter !== undefined) {
      requestContext.setQueryParam(
        "filter",
        serialize(filter, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterOwnerId !== undefined) {
      requestContext.setQueryParam(
        "filter[owner_id]",
        serialize(filterOwnerId, TypingInfo, "string", "uuid"),
        "",
      );
    }
    if (filterTags !== undefined) {
      requestContext.setQueryParam(
        "filter[tags]",
        serialize(filterTags, TypingInfo, "string", ""),
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
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        serialize(pageSize, TypingInfo, "number", ""),
        "",
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        serialize(pageNumber, TypingInfo, "number", ""),
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

  public async listModelLabRunArtifacts(
    runId: number,
    path?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["ModelLabAPIApi.v2.listModelLabRunArtifacts"]
    ) {
      throw new Error(
        "Unstable operation 'listModelLabRunArtifacts' is disabled. Enable it by setting `configuration.unstableOperations['ModelLabAPIApi.v2.listModelLabRunArtifacts'] = true`",
      );
    }

    // verify required parameter 'runId' is not null or undefined
    if (runId === null || runId === undefined) {
      throw new RequiredError("runId", "listModelLabRunArtifacts");
    }

    // Path Params
    const localVarPath =
      "/api/v2/model-lab-api/runs/{run_id}/artifacts".replace(
        "{run_id}",
        encodeURIComponent(String(runId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ModelLabAPIApi.v2.listModelLabRunArtifacts",
      ModelLabAPIApi.operationServers,
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
    if (path !== undefined) {
      requestContext.setQueryParam(
        "path",
        serialize(path, TypingInfo, "string", ""),
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

  public async listModelLabRunFacetKeys(
    filterProjectId: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["ModelLabAPIApi.v2.listModelLabRunFacetKeys"]
    ) {
      throw new Error(
        "Unstable operation 'listModelLabRunFacetKeys' is disabled. Enable it by setting `configuration.unstableOperations['ModelLabAPIApi.v2.listModelLabRunFacetKeys'] = true`",
      );
    }

    // verify required parameter 'filterProjectId' is not null or undefined
    if (filterProjectId === null || filterProjectId === undefined) {
      throw new RequiredError("filterProjectId", "listModelLabRunFacetKeys");
    }

    // Path Params
    const localVarPath = "/api/v2/model-lab-api/facet-keys";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ModelLabAPIApi.v2.listModelLabRunFacetKeys",
      ModelLabAPIApi.operationServers,
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
    if (filterProjectId !== undefined) {
      requestContext.setQueryParam(
        "filter[project_id]",
        serialize(filterProjectId, TypingInfo, "number", "int64"),
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

  public async listModelLabRunFacetValues(
    filterProjectId: number,
    facetType: ModelLabFacetType,
    facetName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "ModelLabAPIApi.v2.listModelLabRunFacetValues"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listModelLabRunFacetValues' is disabled. Enable it by setting `configuration.unstableOperations['ModelLabAPIApi.v2.listModelLabRunFacetValues'] = true`",
      );
    }

    // verify required parameter 'filterProjectId' is not null or undefined
    if (filterProjectId === null || filterProjectId === undefined) {
      throw new RequiredError("filterProjectId", "listModelLabRunFacetValues");
    }

    // verify required parameter 'facetType' is not null or undefined
    if (facetType === null || facetType === undefined) {
      throw new RequiredError("facetType", "listModelLabRunFacetValues");
    }

    // verify required parameter 'facetName' is not null or undefined
    if (facetName === null || facetName === undefined) {
      throw new RequiredError("facetName", "listModelLabRunFacetValues");
    }

    // Path Params
    const localVarPath = "/api/v2/model-lab-api/facet-values";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ModelLabAPIApi.v2.listModelLabRunFacetValues",
      ModelLabAPIApi.operationServers,
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
    if (filterProjectId !== undefined) {
      requestContext.setQueryParam(
        "filter[project_id]",
        serialize(filterProjectId, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (facetType !== undefined) {
      requestContext.setQueryParam(
        "facet_type",
        serialize(facetType, TypingInfo, "ModelLabFacetType", ""),
        "",
      );
    }
    if (facetName !== undefined) {
      requestContext.setQueryParam(
        "facet_name",
        serialize(facetName, TypingInfo, "string", ""),
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

  public async listModelLabRuns(
    filterId?: string,
    filter?: string,
    filterOwnerId?: string,
    filterStatus?: ModelLabRunStatus,
    filterProjectId?: number,
    filterTags?: string,
    filterParams?: string,
    filterParentRunId?: string,
    pinnedFirst?: boolean,
    includePinned?: boolean,
    includeDescendantMatches?: boolean,
    sort?: string,
    pageSize?: number,
    pageNumber?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["ModelLabAPIApi.v2.listModelLabRuns"]) {
      throw new Error(
        "Unstable operation 'listModelLabRuns' is disabled. Enable it by setting `configuration.unstableOperations['ModelLabAPIApi.v2.listModelLabRuns'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/model-lab-api/runs";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ModelLabAPIApi.v2.listModelLabRuns",
      ModelLabAPIApi.operationServers,
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
    if (filterId !== undefined) {
      requestContext.setQueryParam(
        "filter[id]",
        serialize(filterId, TypingInfo, "string", ""),
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
    if (filterOwnerId !== undefined) {
      requestContext.setQueryParam(
        "filter[owner_id]",
        serialize(filterOwnerId, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterStatus !== undefined) {
      requestContext.setQueryParam(
        "filter[status]",
        serialize(filterStatus, TypingInfo, "ModelLabRunStatus", ""),
        "",
      );
    }
    if (filterProjectId !== undefined) {
      requestContext.setQueryParam(
        "filter[project_id]",
        serialize(filterProjectId, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (filterTags !== undefined) {
      requestContext.setQueryParam(
        "filter[tags]",
        serialize(filterTags, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterParams !== undefined) {
      requestContext.setQueryParam(
        "filter[params]",
        serialize(filterParams, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterParentRunId !== undefined) {
      requestContext.setQueryParam(
        "filter[parent_run_id]",
        serialize(filterParentRunId, TypingInfo, "string", ""),
        "",
      );
    }
    if (pinnedFirst !== undefined) {
      requestContext.setQueryParam(
        "pinned_first",
        serialize(pinnedFirst, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (includePinned !== undefined) {
      requestContext.setQueryParam(
        "include_pinned",
        serialize(includePinned, TypingInfo, "boolean", ""),
        "",
      );
    }
    if (includeDescendantMatches !== undefined) {
      requestContext.setQueryParam(
        "include_descendant_matches",
        serialize(includeDescendantMatches, TypingInfo, "boolean", ""),
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
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        serialize(pageSize, TypingInfo, "number", ""),
        "",
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        serialize(pageNumber, TypingInfo, "number", ""),
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

  public async pinModelLabRun(
    runId: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["ModelLabAPIApi.v2.pinModelLabRun"]) {
      throw new Error(
        "Unstable operation 'pinModelLabRun' is disabled. Enable it by setting `configuration.unstableOperations['ModelLabAPIApi.v2.pinModelLabRun'] = true`",
      );
    }

    // verify required parameter 'runId' is not null or undefined
    if (runId === null || runId === undefined) {
      throw new RequiredError("runId", "pinModelLabRun");
    }

    // Path Params
    const localVarPath = "/api/v2/model-lab-api/runs/{run_id}/pin".replace(
      "{run_id}",
      encodeURIComponent(String(runId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ModelLabAPIApi.v2.pinModelLabRun",
      ModelLabAPIApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async starModelLabProject(
    projectId: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["ModelLabAPIApi.v2.starModelLabProject"]) {
      throw new Error(
        "Unstable operation 'starModelLabProject' is disabled. Enable it by setting `configuration.unstableOperations['ModelLabAPIApi.v2.starModelLabProject'] = true`",
      );
    }

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "starModelLabProject");
    }

    // Path Params
    const localVarPath =
      "/api/v2/model-lab-api/projects/{project_id}/star".replace(
        "{project_id}",
        encodeURIComponent(String(projectId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ModelLabAPIApi.v2.starModelLabProject",
      ModelLabAPIApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async unpinModelLabRun(
    runId: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["ModelLabAPIApi.v2.unpinModelLabRun"]) {
      throw new Error(
        "Unstable operation 'unpinModelLabRun' is disabled. Enable it by setting `configuration.unstableOperations['ModelLabAPIApi.v2.unpinModelLabRun'] = true`",
      );
    }

    // verify required parameter 'runId' is not null or undefined
    if (runId === null || runId === undefined) {
      throw new RequiredError("runId", "unpinModelLabRun");
    }

    // Path Params
    const localVarPath = "/api/v2/model-lab-api/runs/{run_id}/pin".replace(
      "{run_id}",
      encodeURIComponent(String(runId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ModelLabAPIApi.v2.unpinModelLabRun",
      ModelLabAPIApi.operationServers,
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

  public async unstarModelLabProject(
    projectId: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["ModelLabAPIApi.v2.unstarModelLabProject"]
    ) {
      throw new Error(
        "Unstable operation 'unstarModelLabProject' is disabled. Enable it by setting `configuration.unstableOperations['ModelLabAPIApi.v2.unstarModelLabProject'] = true`",
      );
    }

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "unstarModelLabProject");
    }

    // Path Params
    const localVarPath =
      "/api/v2/model-lab-api/projects/{project_id}/star".replace(
        "{project_id}",
        encodeURIComponent(String(projectId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ModelLabAPIApi.v2.unstarModelLabProject",
      ModelLabAPIApi.operationServers,
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
}

export class ModelLabAPIApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteModelLabRun
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteModelLabRun(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
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
   * @params response Response returned by the server for a request to getModelLabArtifactContent
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getModelLabArtifactContent(
    response: ResponseContext,
  ): Promise<HttpFile> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: HttpFile = (await response.getBodyAsFile()) as HttpFile;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 500) {
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
      const body: HttpFile =
        (await response.getBodyAsFile()) as any as HttpFile;
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
   * @params response Response returned by the server for a request to getModelLabProject
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getModelLabProject(
    response: ResponseContext,
  ): Promise<ModelLabProjectResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ModelLabProjectResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ModelLabProjectResponse",
      ) as ModelLabProjectResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: ModelLabProjectResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ModelLabProjectResponse",
        "",
      ) as ModelLabProjectResponse;
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
   * @params response Response returned by the server for a request to getModelLabRun
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getModelLabRun(
    response: ResponseContext,
  ): Promise<ModelLabRunResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ModelLabRunResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ModelLabRunResponse",
      ) as ModelLabRunResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: ModelLabRunResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ModelLabRunResponse",
        "",
      ) as ModelLabRunResponse;
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
   * @params response Response returned by the server for a request to listModelLabProjectArtifacts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listModelLabProjectArtifacts(
    response: ResponseContext,
  ): Promise<ModelLabProjectArtifactsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ModelLabProjectArtifactsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ModelLabProjectArtifactsResponse",
      ) as ModelLabProjectArtifactsResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 500) {
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
      const body: ModelLabProjectArtifactsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ModelLabProjectArtifactsResponse",
        "",
      ) as ModelLabProjectArtifactsResponse;
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
   * @params response Response returned by the server for a request to listModelLabProjectFacetKeys
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listModelLabProjectFacetKeys(
    response: ResponseContext,
  ): Promise<ModelLabFacetKeysResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ModelLabFacetKeysResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ModelLabFacetKeysResponse",
      ) as ModelLabFacetKeysResponse;
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
    if (response.httpStatusCode === 500) {
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
      const body: ModelLabFacetKeysResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ModelLabFacetKeysResponse",
        "",
      ) as ModelLabFacetKeysResponse;
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
   * @params response Response returned by the server for a request to listModelLabProjectFacetValues
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listModelLabProjectFacetValues(
    response: ResponseContext,
  ): Promise<ModelLabFacetValuesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ModelLabFacetValuesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ModelLabFacetValuesResponse",
      ) as ModelLabFacetValuesResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 500) {
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
      const body: ModelLabFacetValuesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ModelLabFacetValuesResponse",
        "",
      ) as ModelLabFacetValuesResponse;
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
   * @params response Response returned by the server for a request to listModelLabProjects
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listModelLabProjects(
    response: ResponseContext,
  ): Promise<ModelLabProjectsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ModelLabProjectsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ModelLabProjectsResponse",
      ) as ModelLabProjectsResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 500) {
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
      const body: ModelLabProjectsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ModelLabProjectsResponse",
        "",
      ) as ModelLabProjectsResponse;
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
   * @params response Response returned by the server for a request to listModelLabRunArtifacts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listModelLabRunArtifacts(
    response: ResponseContext,
  ): Promise<ModelLabRunArtifactsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ModelLabRunArtifactsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ModelLabRunArtifactsResponse",
      ) as ModelLabRunArtifactsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: ModelLabRunArtifactsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ModelLabRunArtifactsResponse",
        "",
      ) as ModelLabRunArtifactsResponse;
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
   * @params response Response returned by the server for a request to listModelLabRunFacetKeys
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listModelLabRunFacetKeys(
    response: ResponseContext,
  ): Promise<ModelLabFacetKeysResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ModelLabFacetKeysResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ModelLabFacetKeysResponse",
      ) as ModelLabFacetKeysResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: ModelLabFacetKeysResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ModelLabFacetKeysResponse",
        "",
      ) as ModelLabFacetKeysResponse;
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
   * @params response Response returned by the server for a request to listModelLabRunFacetValues
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listModelLabRunFacetValues(
    response: ResponseContext,
  ): Promise<ModelLabFacetValuesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ModelLabFacetValuesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ModelLabFacetValuesResponse",
      ) as ModelLabFacetValuesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: ModelLabFacetValuesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ModelLabFacetValuesResponse",
        "",
      ) as ModelLabFacetValuesResponse;
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
   * @params response Response returned by the server for a request to listModelLabRuns
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listModelLabRuns(
    response: ResponseContext,
  ): Promise<ModelLabRunsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ModelLabRunsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ModelLabRunsResponse",
      ) as ModelLabRunsResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 500) {
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
      const body: ModelLabRunsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ModelLabRunsResponse",
        "",
      ) as ModelLabRunsResponse;
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
   * @params response Response returned by the server for a request to pinModelLabRun
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async pinModelLabRun(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
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
   * @params response Response returned by the server for a request to starModelLabProject
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async starModelLabProject(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
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
   * @params response Response returned by the server for a request to unpinModelLabRun
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async unpinModelLabRun(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
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
   * @params response Response returned by the server for a request to unstarModelLabProject
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async unstarModelLabProject(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
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
}

export interface ModelLabAPIApiDeleteModelLabRunRequest {
  /**
   * The ID of the Model Lab run.
   * @type number
   */
  runId: number;
}

export interface ModelLabAPIApiGetModelLabArtifactContentRequest {
  /**
   * ID of the project.
   * @type string
   */
  projectId: string;
  /**
   * Path to the artifact relative to the project directory.
   * @type string
   */
  artifactPath: string;
}

export interface ModelLabAPIApiGetModelLabProjectRequest {
  /**
   * The ID of the Model Lab project.
   * @type number
   */
  projectId: number;
}

export interface ModelLabAPIApiGetModelLabRunRequest {
  /**
   * The ID of the Model Lab run.
   * @type number
   */
  runId: number;
}

export interface ModelLabAPIApiListModelLabProjectArtifactsRequest {
  /**
   * The ID of the Model Lab project.
   * @type number
   */
  projectId: number;
}

export interface ModelLabAPIApiListModelLabProjectFacetValuesRequest {
  /**
   * Facet type. Valid values: tag.
   * @type ModelLabProjectFacetType
   */
  facetType: ModelLabProjectFacetType;
  /**
   * Facet name.
   * @type string
   */
  facetName: string;
}

export interface ModelLabAPIApiListModelLabProjectsRequest {
  /**
   * Text search filter for project name or description.
   * @type string
   */
  filter?: string;
  /**
   * Filter by owner UUID.
   * @type string
   */
  filterOwnerId?: string;
  /**
   * Filter by tags. Format: key:value,key2:value2.
   * @type string
   */
  filterTags?: string;
  /**
   * Sort field. Valid values: name, created_at, updated_at. Prefix with '-' for descending order (e.g., -updated_at).
   * @type string
   */
  sort?: string;
  /**
   * Number of items per page. Maximum is 100.
   * @type number
   */
  pageSize?: number;
  /**
   * Page number (1-indexed).
   * @type number
   */
  pageNumber?: number;
}

export interface ModelLabAPIApiListModelLabRunArtifactsRequest {
  /**
   * The ID of the Model Lab run.
   * @type number
   */
  runId: number;
  /**
   * Optional subdirectory path within the run's artifacts.
   * @type string
   */
  path?: string;
}

export interface ModelLabAPIApiListModelLabRunFacetKeysRequest {
  /**
   * Filter by project ID.
   * @type number
   */
  filterProjectId: number;
}

export interface ModelLabAPIApiListModelLabRunFacetValuesRequest {
  /**
   * Filter by project ID.
   * @type number
   */
  filterProjectId: number;
  /**
   * Facet type. Valid values: parameter, attribute, tag, metric.
   * @type ModelLabFacetType
   */
  facetType: ModelLabFacetType;
  /**
   * Facet name.
   * @type string
   */
  facetName: string;
}

export interface ModelLabAPIApiListModelLabRunsRequest {
  /**
   * Filter by run ID(s). Comma-separated list for multiple IDs.
   * @type string
   */
  filterId?: string;
  /**
   * Text search filter for run name or description.
   * @type string
   */
  filter?: string;
  /**
   * Filter by owner UUID.
   * @type string
   */
  filterOwnerId?: string;
  /**
   * Filter by run status. Valid values: pending, running, completed, failed, killed, unresponsive, paused.
   * @type ModelLabRunStatus
   */
  filterStatus?: ModelLabRunStatus;
  /**
   * Filter by project ID.
   * @type number
   */
  filterProjectId?: number;
  /**
   * Filter by tags. Format: key:value,key2:value2.
   * @type string
   */
  filterTags?: string;
  /**
   * Filter by params. Format: key:value,key2:>0.5,key3:true.
   * @type string
   */
  filterParams?: string;
  /**
   * Filter by parent run ID. Use 'null' to return only root runs (runs with no parent).
   * @type string
   */
  filterParentRunId?: string;
  /**
   * Sort pinned runs before non-pinned runs. Pinned runs are ordered by pin time descending.
   * @type boolean
   */
  pinnedFirst?: boolean;
  /**
   * Include all runs pinned by the current user, regardless of other filters.
   * @type boolean
   */
  includePinned?: boolean;
  /**
   * When true, also return runs whose descendants match the active filters. The descendant_match field in each result indicates whether the run was included via a descendant match.
   * @type boolean
   */
  includeDescendantMatches?: boolean;
  /**
   * Sort field. Valid values: name, created_at, updated_at, duration. Prefix with '-' for descending order (e.g., -updated_at).
   * @type string
   */
  sort?: string;
  /**
   * Number of items per page. Maximum is 100.
   * @type number
   */
  pageSize?: number;
  /**
   * Page number (1-indexed).
   * @type number
   */
  pageNumber?: number;
}

export interface ModelLabAPIApiPinModelLabRunRequest {
  /**
   * The ID of the Model Lab run.
   * @type number
   */
  runId: number;
}

export interface ModelLabAPIApiStarModelLabProjectRequest {
  /**
   * The ID of the Model Lab project.
   * @type number
   */
  projectId: number;
}

export interface ModelLabAPIApiUnpinModelLabRunRequest {
  /**
   * The ID of the Model Lab run.
   * @type number
   */
  runId: number;
}

export interface ModelLabAPIApiUnstarModelLabProjectRequest {
  /**
   * The ID of the Model Lab project.
   * @type number
   */
  projectId: number;
}

export class ModelLabAPIApi {
  private requestFactory: ModelLabAPIApiRequestFactory;
  private responseProcessor: ModelLabAPIApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: ModelLabAPIApiRequestFactory,
    responseProcessor?: ModelLabAPIApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new ModelLabAPIApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new ModelLabAPIApiResponseProcessor();
  }

  /**
   * Delete a Model Lab run by its ID.
   * @param param The request object
   */
  public deleteModelLabRun(
    param: ModelLabAPIApiDeleteModelLabRunRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteModelLabRun(
      param.runId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteModelLabRun(responseContext);
        });
    });
  }

  /**
   * Download the raw content of a Model Lab artifact file.
   * @param param The request object
   */
  public getModelLabArtifactContent(
    param: ModelLabAPIApiGetModelLabArtifactContentRequest,
    options?: Configuration,
  ): Promise<HttpFile> {
    const requestContextPromise =
      this.requestFactory.getModelLabArtifactContent(
        param.projectId,
        param.artifactPath,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getModelLabArtifactContent(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a single Model Lab project by its ID.
   * @param param The request object
   */
  public getModelLabProject(
    param: ModelLabAPIApiGetModelLabProjectRequest,
    options?: Configuration,
  ): Promise<ModelLabProjectResponse> {
    const requestContextPromise = this.requestFactory.getModelLabProject(
      param.projectId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getModelLabProject(responseContext);
        });
    });
  }

  /**
   * Get a single Model Lab run by its ID.
   * @param param The request object
   */
  public getModelLabRun(
    param: ModelLabAPIApiGetModelLabRunRequest,
    options?: Configuration,
  ): Promise<ModelLabRunResponse> {
    const requestContextPromise = this.requestFactory.getModelLabRun(
      param.runId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getModelLabRun(responseContext);
        });
    });
  }

  /**
   * List all artifact files for a specific Model Lab project.
   * @param param The request object
   */
  public listModelLabProjectArtifacts(
    param: ModelLabAPIApiListModelLabProjectArtifactsRequest,
    options?: Configuration,
  ): Promise<ModelLabProjectArtifactsResponse> {
    const requestContextPromise =
      this.requestFactory.listModelLabProjectArtifacts(
        param.projectId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listModelLabProjectArtifacts(
            responseContext,
          );
        });
    });
  }

  /**
   * List all available facet keys for filtering Model Lab projects.
   * @param param The request object
   */
  public listModelLabProjectFacetKeys(
    options?: Configuration,
  ): Promise<ModelLabFacetKeysResponse> {
    const requestContextPromise =
      this.requestFactory.listModelLabProjectFacetKeys(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listModelLabProjectFacetKeys(
            responseContext,
          );
        });
    });
  }

  /**
   * List available facet values for a specific project facet key.
   * @param param The request object
   */
  public listModelLabProjectFacetValues(
    param: ModelLabAPIApiListModelLabProjectFacetValuesRequest,
    options?: Configuration,
  ): Promise<ModelLabFacetValuesResponse> {
    const requestContextPromise =
      this.requestFactory.listModelLabProjectFacetValues(
        param.facetType,
        param.facetName,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listModelLabProjectFacetValues(
            responseContext,
          );
        });
    });
  }

  /**
   * List all Model Lab projects for the current organization.
   * @param param The request object
   */
  public listModelLabProjects(
    param: ModelLabAPIApiListModelLabProjectsRequest = {},
    options?: Configuration,
  ): Promise<ModelLabProjectsResponse> {
    const requestContextPromise = this.requestFactory.listModelLabProjects(
      param.filter,
      param.filterOwnerId,
      param.filterTags,
      param.sort,
      param.pageSize,
      param.pageNumber,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listModelLabProjects(responseContext);
        });
    });
  }

  /**
   * List artifact files for a specific Model Lab run.
   * @param param The request object
   */
  public listModelLabRunArtifacts(
    param: ModelLabAPIApiListModelLabRunArtifactsRequest,
    options?: Configuration,
  ): Promise<ModelLabRunArtifactsResponse> {
    const requestContextPromise = this.requestFactory.listModelLabRunArtifacts(
      param.runId,
      param.path,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listModelLabRunArtifacts(
            responseContext,
          );
        });
    });
  }

  /**
   * List all available facet keys for filtering Model Lab runs.
   * @param param The request object
   */
  public listModelLabRunFacetKeys(
    param: ModelLabAPIApiListModelLabRunFacetKeysRequest,
    options?: Configuration,
  ): Promise<ModelLabFacetKeysResponse> {
    const requestContextPromise = this.requestFactory.listModelLabRunFacetKeys(
      param.filterProjectId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listModelLabRunFacetKeys(
            responseContext,
          );
        });
    });
  }

  /**
   * List available facet values for a specific run facet key.
   * @param param The request object
   */
  public listModelLabRunFacetValues(
    param: ModelLabAPIApiListModelLabRunFacetValuesRequest,
    options?: Configuration,
  ): Promise<ModelLabFacetValuesResponse> {
    const requestContextPromise =
      this.requestFactory.listModelLabRunFacetValues(
        param.filterProjectId,
        param.facetType,
        param.facetName,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listModelLabRunFacetValues(
            responseContext,
          );
        });
    });
  }

  /**
   * List all Model Lab runs for the current organization.
   * @param param The request object
   */
  public listModelLabRuns(
    param: ModelLabAPIApiListModelLabRunsRequest = {},
    options?: Configuration,
  ): Promise<ModelLabRunsResponse> {
    const requestContextPromise = this.requestFactory.listModelLabRuns(
      param.filterId,
      param.filter,
      param.filterOwnerId,
      param.filterStatus,
      param.filterProjectId,
      param.filterTags,
      param.filterParams,
      param.filterParentRunId,
      param.pinnedFirst,
      param.includePinned,
      param.includeDescendantMatches,
      param.sort,
      param.pageSize,
      param.pageNumber,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listModelLabRuns(responseContext);
        });
    });
  }

  /**
   * Pin a Model Lab run for the current user.
   * @param param The request object
   */
  public pinModelLabRun(
    param: ModelLabAPIApiPinModelLabRunRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.pinModelLabRun(
      param.runId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.pinModelLabRun(responseContext);
        });
    });
  }

  /**
   * Star a Model Lab project for the current user.
   * @param param The request object
   */
  public starModelLabProject(
    param: ModelLabAPIApiStarModelLabProjectRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.starModelLabProject(
      param.projectId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.starModelLabProject(responseContext);
        });
    });
  }

  /**
   * Remove the pin from a Model Lab run for the current user.
   * @param param The request object
   */
  public unpinModelLabRun(
    param: ModelLabAPIApiUnpinModelLabRunRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.unpinModelLabRun(
      param.runId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.unpinModelLabRun(responseContext);
        });
    });
  }

  /**
   * Remove the star from a Model Lab project for the current user.
   * @param param The request object
   */
  public unstarModelLabProject(
    param: ModelLabAPIApiUnstarModelLabProjectRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.unstarModelLabProject(
      param.projectId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.unstarModelLabProject(responseContext);
        });
    });
  }
}
