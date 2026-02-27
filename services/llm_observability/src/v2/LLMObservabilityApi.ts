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
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { LLMObsDatasetRecordsListResponse } from "./models/LLMObsDatasetRecordsListResponse";
import { LLMObsDatasetRecordsMutationResponse } from "./models/LLMObsDatasetRecordsMutationResponse";
import { LLMObsDatasetRecordsRequest } from "./models/LLMObsDatasetRecordsRequest";
import { LLMObsDatasetRecordsUpdateRequest } from "./models/LLMObsDatasetRecordsUpdateRequest";
import { LLMObsDatasetRequest } from "./models/LLMObsDatasetRequest";
import { LLMObsDatasetResponse } from "./models/LLMObsDatasetResponse";
import { LLMObsDatasetsResponse } from "./models/LLMObsDatasetsResponse";
import { LLMObsDatasetUpdateRequest } from "./models/LLMObsDatasetUpdateRequest";
import { LLMObsDeleteDatasetRecordsRequest } from "./models/LLMObsDeleteDatasetRecordsRequest";
import { LLMObsDeleteDatasetsRequest } from "./models/LLMObsDeleteDatasetsRequest";
import { LLMObsDeleteExperimentsRequest } from "./models/LLMObsDeleteExperimentsRequest";
import { LLMObsDeleteProjectsRequest } from "./models/LLMObsDeleteProjectsRequest";
import { LLMObsExperimentEventsRequest } from "./models/LLMObsExperimentEventsRequest";
import { LLMObsExperimentRequest } from "./models/LLMObsExperimentRequest";
import { LLMObsExperimentResponse } from "./models/LLMObsExperimentResponse";
import { LLMObsExperimentsResponse } from "./models/LLMObsExperimentsResponse";
import { LLMObsExperimentUpdateRequest } from "./models/LLMObsExperimentUpdateRequest";
import { LLMObsProjectRequest } from "./models/LLMObsProjectRequest";
import { LLMObsProjectResponse } from "./models/LLMObsProjectResponse";
import { LLMObsProjectsResponse } from "./models/LLMObsProjectsResponse";
import { LLMObsProjectUpdateRequest } from "./models/LLMObsProjectUpdateRequest";
import { version } from "../version";

export class LLMObservabilityApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("llm-observability", version);
    }
  }
  public async createLLMObsDataset(
    projectId: string,
    body: LLMObsDatasetRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["LLMObservabilityApi.v2.createLLMObsDataset"]
    ) {
      throw new Error(
        "Unstable operation 'createLLMObsDataset' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.createLLMObsDataset'] = true`",
      );
    }

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "createLLMObsDataset");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createLLMObsDataset");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/{project_id}/datasets".replace(
      "{project_id}",
      encodeURIComponent(String(projectId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.createLLMObsDataset",
      LLMObservabilityApi.operationServers,
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
      serialize(body, TypingInfo, "LLMObsDatasetRequest", ""),
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

  public async createLLMObsDatasetRecords(
    projectId: string,
    datasetId: string,
    body: LLMObsDatasetRecordsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LLMObservabilityApi.v2.createLLMObsDatasetRecords"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createLLMObsDatasetRecords' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.createLLMObsDatasetRecords'] = true`",
      );
    }

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "createLLMObsDatasetRecords");
    }

    // verify required parameter 'datasetId' is not null or undefined
    if (datasetId === null || datasetId === undefined) {
      throw new RequiredError("datasetId", "createLLMObsDatasetRecords");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createLLMObsDatasetRecords");
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}/records"
        .replace("{project_id}", encodeURIComponent(String(projectId)))
        .replace("{dataset_id}", encodeURIComponent(String(datasetId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.createLLMObsDatasetRecords",
      LLMObservabilityApi.operationServers,
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
      serialize(body, TypingInfo, "LLMObsDatasetRecordsRequest", ""),
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

  public async createLLMObsExperiment(
    body: LLMObsExperimentRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LLMObservabilityApi.v2.createLLMObsExperiment"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createLLMObsExperiment' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.createLLMObsExperiment'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createLLMObsExperiment");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/experiments";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.createLLMObsExperiment",
      LLMObservabilityApi.operationServers,
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
      serialize(body, TypingInfo, "LLMObsExperimentRequest", ""),
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

  public async createLLMObsExperimentEvents(
    experimentId: string,
    body: LLMObsExperimentEventsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LLMObservabilityApi.v2.createLLMObsExperimentEvents"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createLLMObsExperimentEvents' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.createLLMObsExperimentEvents'] = true`",
      );
    }

    // verify required parameter 'experimentId' is not null or undefined
    if (experimentId === null || experimentId === undefined) {
      throw new RequiredError("experimentId", "createLLMObsExperimentEvents");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createLLMObsExperimentEvents");
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/experiments/{experiment_id}/events".replace(
        "{experiment_id}",
        encodeURIComponent(String(experimentId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.createLLMObsExperimentEvents",
      LLMObservabilityApi.operationServers,
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
      serialize(body, TypingInfo, "LLMObsExperimentEventsRequest", ""),
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

  public async createLLMObsProject(
    body: LLMObsProjectRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["LLMObservabilityApi.v2.createLLMObsProject"]
    ) {
      throw new Error(
        "Unstable operation 'createLLMObsProject' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.createLLMObsProject'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createLLMObsProject");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/projects";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.createLLMObsProject",
      LLMObservabilityApi.operationServers,
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
      serialize(body, TypingInfo, "LLMObsProjectRequest", ""),
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

  public async deleteLLMObsDatasetRecords(
    projectId: string,
    datasetId: string,
    body: LLMObsDeleteDatasetRecordsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LLMObservabilityApi.v2.deleteLLMObsDatasetRecords"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteLLMObsDatasetRecords' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.deleteLLMObsDatasetRecords'] = true`",
      );
    }

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "deleteLLMObsDatasetRecords");
    }

    // verify required parameter 'datasetId' is not null or undefined
    if (datasetId === null || datasetId === undefined) {
      throw new RequiredError("datasetId", "deleteLLMObsDatasetRecords");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deleteLLMObsDatasetRecords");
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}/records/delete"
        .replace("{project_id}", encodeURIComponent(String(projectId)))
        .replace("{dataset_id}", encodeURIComponent(String(datasetId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.deleteLLMObsDatasetRecords",
      LLMObservabilityApi.operationServers,
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
      serialize(body, TypingInfo, "LLMObsDeleteDatasetRecordsRequest", ""),
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

  public async deleteLLMObsDatasets(
    projectId: string,
    body: LLMObsDeleteDatasetsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["LLMObservabilityApi.v2.deleteLLMObsDatasets"]
    ) {
      throw new Error(
        "Unstable operation 'deleteLLMObsDatasets' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.deleteLLMObsDatasets'] = true`",
      );
    }

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "deleteLLMObsDatasets");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deleteLLMObsDatasets");
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/{project_id}/datasets/delete".replace(
        "{project_id}",
        encodeURIComponent(String(projectId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.deleteLLMObsDatasets",
      LLMObservabilityApi.operationServers,
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
      serialize(body, TypingInfo, "LLMObsDeleteDatasetsRequest", ""),
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

  public async deleteLLMObsExperiments(
    body: LLMObsDeleteExperimentsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LLMObservabilityApi.v2.deleteLLMObsExperiments"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteLLMObsExperiments' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.deleteLLMObsExperiments'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deleteLLMObsExperiments");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/experiments/delete";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.deleteLLMObsExperiments",
      LLMObservabilityApi.operationServers,
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
      serialize(body, TypingInfo, "LLMObsDeleteExperimentsRequest", ""),
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

  public async deleteLLMObsProjects(
    body: LLMObsDeleteProjectsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["LLMObservabilityApi.v2.deleteLLMObsProjects"]
    ) {
      throw new Error(
        "Unstable operation 'deleteLLMObsProjects' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.deleteLLMObsProjects'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deleteLLMObsProjects");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/projects/delete";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.deleteLLMObsProjects",
      LLMObservabilityApi.operationServers,
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
      serialize(body, TypingInfo, "LLMObsDeleteProjectsRequest", ""),
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

  public async listLLMObsDatasetRecords(
    projectId: string,
    datasetId: string,
    filterVersion?: number,
    pageCursor?: string,
    pageLimit?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LLMObservabilityApi.v2.listLLMObsDatasetRecords"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listLLMObsDatasetRecords' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.listLLMObsDatasetRecords'] = true`",
      );
    }

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "listLLMObsDatasetRecords");
    }

    // verify required parameter 'datasetId' is not null or undefined
    if (datasetId === null || datasetId === undefined) {
      throw new RequiredError("datasetId", "listLLMObsDatasetRecords");
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}/records"
        .replace("{project_id}", encodeURIComponent(String(projectId)))
        .replace("{dataset_id}", encodeURIComponent(String(datasetId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.listLLMObsDatasetRecords",
      LLMObservabilityApi.operationServers,
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
    if (filterVersion !== undefined) {
      requestContext.setQueryParam(
        "filter[version]",
        serialize(filterVersion, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        serialize(pageCursor, TypingInfo, "string", ""),
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

  public async listLLMObsDatasets(
    projectId: string,
    filterName?: string,
    filterId?: string,
    pageCursor?: string,
    pageLimit?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["LLMObservabilityApi.v2.listLLMObsDatasets"]
    ) {
      throw new Error(
        "Unstable operation 'listLLMObsDatasets' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.listLLMObsDatasets'] = true`",
      );
    }

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "listLLMObsDatasets");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/{project_id}/datasets".replace(
      "{project_id}",
      encodeURIComponent(String(projectId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.listLLMObsDatasets",
      LLMObservabilityApi.operationServers,
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
    if (filterName !== undefined) {
      requestContext.setQueryParam(
        "filter[name]",
        serialize(filterName, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterId !== undefined) {
      requestContext.setQueryParam(
        "filter[id]",
        serialize(filterId, TypingInfo, "string", ""),
        "",
      );
    }
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        serialize(pageCursor, TypingInfo, "string", ""),
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

  public async listLLMObsExperiments(
    filterProjectId?: string,
    filterDatasetId?: string,
    filterId?: string,
    pageCursor?: string,
    pageLimit?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LLMObservabilityApi.v2.listLLMObsExperiments"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listLLMObsExperiments' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.listLLMObsExperiments'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/experiments";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.listLLMObsExperiments",
      LLMObservabilityApi.operationServers,
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
        serialize(filterProjectId, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterDatasetId !== undefined) {
      requestContext.setQueryParam(
        "filter[dataset_id]",
        serialize(filterDatasetId, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterId !== undefined) {
      requestContext.setQueryParam(
        "filter[id]",
        serialize(filterId, TypingInfo, "string", ""),
        "",
      );
    }
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        serialize(pageCursor, TypingInfo, "string", ""),
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

  public async listLLMObsProjects(
    filterId?: string,
    filterName?: string,
    pageCursor?: string,
    pageLimit?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["LLMObservabilityApi.v2.listLLMObsProjects"]
    ) {
      throw new Error(
        "Unstable operation 'listLLMObsProjects' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.listLLMObsProjects'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/projects";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.listLLMObsProjects",
      LLMObservabilityApi.operationServers,
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
    if (filterName !== undefined) {
      requestContext.setQueryParam(
        "filter[name]",
        serialize(filterName, TypingInfo, "string", ""),
        "",
      );
    }
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        serialize(pageCursor, TypingInfo, "string", ""),
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

  public async updateLLMObsDataset(
    projectId: string,
    datasetId: string,
    body: LLMObsDatasetUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["LLMObservabilityApi.v2.updateLLMObsDataset"]
    ) {
      throw new Error(
        "Unstable operation 'updateLLMObsDataset' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.updateLLMObsDataset'] = true`",
      );
    }

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "updateLLMObsDataset");
    }

    // verify required parameter 'datasetId' is not null or undefined
    if (datasetId === null || datasetId === undefined) {
      throw new RequiredError("datasetId", "updateLLMObsDataset");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateLLMObsDataset");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}"
      .replace("{project_id}", encodeURIComponent(String(projectId)))
      .replace("{dataset_id}", encodeURIComponent(String(datasetId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.updateLLMObsDataset",
      LLMObservabilityApi.operationServers,
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
      serialize(body, TypingInfo, "LLMObsDatasetUpdateRequest", ""),
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

  public async updateLLMObsDatasetRecords(
    projectId: string,
    datasetId: string,
    body: LLMObsDatasetRecordsUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LLMObservabilityApi.v2.updateLLMObsDatasetRecords"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateLLMObsDatasetRecords' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.updateLLMObsDatasetRecords'] = true`",
      );
    }

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "updateLLMObsDatasetRecords");
    }

    // verify required parameter 'datasetId' is not null or undefined
    if (datasetId === null || datasetId === undefined) {
      throw new RequiredError("datasetId", "updateLLMObsDatasetRecords");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateLLMObsDatasetRecords");
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}/records"
        .replace("{project_id}", encodeURIComponent(String(projectId)))
        .replace("{dataset_id}", encodeURIComponent(String(datasetId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.updateLLMObsDatasetRecords",
      LLMObservabilityApi.operationServers,
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
      serialize(body, TypingInfo, "LLMObsDatasetRecordsUpdateRequest", ""),
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

  public async updateLLMObsExperiment(
    experimentId: string,
    body: LLMObsExperimentUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LLMObservabilityApi.v2.updateLLMObsExperiment"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateLLMObsExperiment' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.updateLLMObsExperiment'] = true`",
      );
    }

    // verify required parameter 'experimentId' is not null or undefined
    if (experimentId === null || experimentId === undefined) {
      throw new RequiredError("experimentId", "updateLLMObsExperiment");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateLLMObsExperiment");
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/experiments/{experiment_id}".replace(
        "{experiment_id}",
        encodeURIComponent(String(experimentId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.updateLLMObsExperiment",
      LLMObservabilityApi.operationServers,
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
      serialize(body, TypingInfo, "LLMObsExperimentUpdateRequest", ""),
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

  public async updateLLMObsProject(
    projectId: string,
    body: LLMObsProjectUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["LLMObservabilityApi.v2.updateLLMObsProject"]
    ) {
      throw new Error(
        "Unstable operation 'updateLLMObsProject' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.updateLLMObsProject'] = true`",
      );
    }

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "updateLLMObsProject");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateLLMObsProject");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/projects/{project_id}".replace(
      "{project_id}",
      encodeURIComponent(String(projectId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.updateLLMObsProject",
      LLMObservabilityApi.operationServers,
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
      serialize(body, TypingInfo, "LLMObsProjectUpdateRequest", ""),
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

export class LLMObservabilityApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createLLMObsDataset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createLLMObsDataset(
    response: ResponseContext,
  ): Promise<LLMObsDatasetResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200 || response.httpStatusCode === 201) {
      const body: LLMObsDatasetResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsDatasetResponse",
      ) as LLMObsDatasetResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: LLMObsDatasetResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsDatasetResponse",
        "",
      ) as LLMObsDatasetResponse;
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
   * @params response Response returned by the server for a request to createLLMObsDatasetRecords
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createLLMObsDatasetRecords(
    response: ResponseContext,
  ): Promise<LLMObsDatasetRecordsMutationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200 || response.httpStatusCode === 201) {
      const body: LLMObsDatasetRecordsMutationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsDatasetRecordsMutationResponse",
      ) as LLMObsDatasetRecordsMutationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: LLMObsDatasetRecordsMutationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsDatasetRecordsMutationResponse",
        "",
      ) as LLMObsDatasetRecordsMutationResponse;
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
   * @params response Response returned by the server for a request to createLLMObsExperiment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createLLMObsExperiment(
    response: ResponseContext,
  ): Promise<LLMObsExperimentResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200 || response.httpStatusCode === 201) {
      const body: LLMObsExperimentResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsExperimentResponse",
      ) as LLMObsExperimentResponse;
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
      const body: LLMObsExperimentResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsExperimentResponse",
        "",
      ) as LLMObsExperimentResponse;
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
   * @params response Response returned by the server for a request to createLLMObsExperimentEvents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createLLMObsExperimentEvents(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 202) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
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
   * @params response Response returned by the server for a request to createLLMObsProject
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createLLMObsProject(
    response: ResponseContext,
  ): Promise<LLMObsProjectResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200 || response.httpStatusCode === 201) {
      const body: LLMObsProjectResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsProjectResponse",
      ) as LLMObsProjectResponse;
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
      const body: LLMObsProjectResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsProjectResponse",
        "",
      ) as LLMObsProjectResponse;
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
   * @params response Response returned by the server for a request to deleteLLMObsDatasetRecords
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteLLMObsDatasetRecords(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
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
   * @params response Response returned by the server for a request to deleteLLMObsDatasets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteLLMObsDatasets(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
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
   * @params response Response returned by the server for a request to deleteLLMObsExperiments
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteLLMObsExperiments(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
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
   * @params response Response returned by the server for a request to deleteLLMObsProjects
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteLLMObsProjects(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
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
   * @params response Response returned by the server for a request to listLLMObsDatasetRecords
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLLMObsDatasetRecords(
    response: ResponseContext,
  ): Promise<LLMObsDatasetRecordsListResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: LLMObsDatasetRecordsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsDatasetRecordsListResponse",
      ) as LLMObsDatasetRecordsListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: LLMObsDatasetRecordsListResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsDatasetRecordsListResponse",
        "",
      ) as LLMObsDatasetRecordsListResponse;
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
   * @params response Response returned by the server for a request to listLLMObsDatasets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLLMObsDatasets(
    response: ResponseContext,
  ): Promise<LLMObsDatasetsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: LLMObsDatasetsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsDatasetsResponse",
      ) as LLMObsDatasetsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: LLMObsDatasetsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsDatasetsResponse",
        "",
      ) as LLMObsDatasetsResponse;
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
   * @params response Response returned by the server for a request to listLLMObsExperiments
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLLMObsExperiments(
    response: ResponseContext,
  ): Promise<LLMObsExperimentsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: LLMObsExperimentsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsExperimentsResponse",
      ) as LLMObsExperimentsResponse;
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
      const body: LLMObsExperimentsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsExperimentsResponse",
        "",
      ) as LLMObsExperimentsResponse;
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
   * @params response Response returned by the server for a request to listLLMObsProjects
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLLMObsProjects(
    response: ResponseContext,
  ): Promise<LLMObsProjectsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: LLMObsProjectsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsProjectsResponse",
      ) as LLMObsProjectsResponse;
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
      const body: LLMObsProjectsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsProjectsResponse",
        "",
      ) as LLMObsProjectsResponse;
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
   * @params response Response returned by the server for a request to updateLLMObsDataset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateLLMObsDataset(
    response: ResponseContext,
  ): Promise<LLMObsDatasetResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: LLMObsDatasetResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsDatasetResponse",
      ) as LLMObsDatasetResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: LLMObsDatasetResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsDatasetResponse",
        "",
      ) as LLMObsDatasetResponse;
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
   * @params response Response returned by the server for a request to updateLLMObsDatasetRecords
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateLLMObsDatasetRecords(
    response: ResponseContext,
  ): Promise<LLMObsDatasetRecordsMutationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: LLMObsDatasetRecordsMutationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsDatasetRecordsMutationResponse",
      ) as LLMObsDatasetRecordsMutationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: LLMObsDatasetRecordsMutationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsDatasetRecordsMutationResponse",
        "",
      ) as LLMObsDatasetRecordsMutationResponse;
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
   * @params response Response returned by the server for a request to updateLLMObsExperiment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateLLMObsExperiment(
    response: ResponseContext,
  ): Promise<LLMObsExperimentResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: LLMObsExperimentResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsExperimentResponse",
      ) as LLMObsExperimentResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: LLMObsExperimentResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsExperimentResponse",
        "",
      ) as LLMObsExperimentResponse;
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
   * @params response Response returned by the server for a request to updateLLMObsProject
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateLLMObsProject(
    response: ResponseContext,
  ): Promise<LLMObsProjectResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: LLMObsProjectResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsProjectResponse",
      ) as LLMObsProjectResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: LLMObsProjectResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsProjectResponse",
        "",
      ) as LLMObsProjectResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface LLMObservabilityApiCreateLLMObsDatasetRequest {
  /**
   * The ID of the LLM Observability project.
   * @type string
   */
  projectId: string;
  /**
   * Create dataset payload.
   * @type LLMObsDatasetRequest
   */
  body: LLMObsDatasetRequest;
}

export interface LLMObservabilityApiCreateLLMObsDatasetRecordsRequest {
  /**
   * The ID of the LLM Observability project.
   * @type string
   */
  projectId: string;
  /**
   * The ID of the LLM Observability dataset.
   * @type string
   */
  datasetId: string;
  /**
   * Append records payload.
   * @type LLMObsDatasetRecordsRequest
   */
  body: LLMObsDatasetRecordsRequest;
}

export interface LLMObservabilityApiCreateLLMObsExperimentRequest {
  /**
   * Create experiment payload.
   * @type LLMObsExperimentRequest
   */
  body: LLMObsExperimentRequest;
}

export interface LLMObservabilityApiCreateLLMObsExperimentEventsRequest {
  /**
   * The ID of the LLM Observability experiment.
   * @type string
   */
  experimentId: string;
  /**
   * Experiment events payload.
   * @type LLMObsExperimentEventsRequest
   */
  body: LLMObsExperimentEventsRequest;
}

export interface LLMObservabilityApiCreateLLMObsProjectRequest {
  /**
   * Create project payload.
   * @type LLMObsProjectRequest
   */
  body: LLMObsProjectRequest;
}

export interface LLMObservabilityApiDeleteLLMObsDatasetRecordsRequest {
  /**
   * The ID of the LLM Observability project.
   * @type string
   */
  projectId: string;
  /**
   * The ID of the LLM Observability dataset.
   * @type string
   */
  datasetId: string;
  /**
   * Delete records payload.
   * @type LLMObsDeleteDatasetRecordsRequest
   */
  body: LLMObsDeleteDatasetRecordsRequest;
}

export interface LLMObservabilityApiDeleteLLMObsDatasetsRequest {
  /**
   * The ID of the LLM Observability project.
   * @type string
   */
  projectId: string;
  /**
   * Delete datasets payload.
   * @type LLMObsDeleteDatasetsRequest
   */
  body: LLMObsDeleteDatasetsRequest;
}

export interface LLMObservabilityApiDeleteLLMObsExperimentsRequest {
  /**
   * Delete experiments payload.
   * @type LLMObsDeleteExperimentsRequest
   */
  body: LLMObsDeleteExperimentsRequest;
}

export interface LLMObservabilityApiDeleteLLMObsProjectsRequest {
  /**
   * Delete projects payload.
   * @type LLMObsDeleteProjectsRequest
   */
  body: LLMObsDeleteProjectsRequest;
}

export interface LLMObservabilityApiListLLMObsDatasetRecordsRequest {
  /**
   * The ID of the LLM Observability project.
   * @type string
   */
  projectId: string;
  /**
   * The ID of the LLM Observability dataset.
   * @type string
   */
  datasetId: string;
  /**
   * Retrieve records from a specific dataset version. Defaults to the current version.
   * @type number
   */
  filterVersion?: number;
  /**
   * Pagination cursor for the next page of results.
   * @type string
   */
  pageCursor?: string;
  /**
   * Maximum number of results to return per page.
   * @type number
   */
  pageLimit?: number;
}

export interface LLMObservabilityApiListLLMObsDatasetsRequest {
  /**
   * The ID of the LLM Observability project.
   * @type string
   */
  projectId: string;
  /**
   * Filter datasets by name.
   * @type string
   */
  filterName?: string;
  /**
   * Filter datasets by dataset ID.
   * @type string
   */
  filterId?: string;
  /**
   * Pagination cursor for the next page of results.
   * @type string
   */
  pageCursor?: string;
  /**
   * Maximum number of results to return per page.
   * @type number
   */
  pageLimit?: number;
}

export interface LLMObservabilityApiListLLMObsExperimentsRequest {
  /**
   * Filter experiments by project ID. Required if `filter[dataset_id]` is not provided.
   * @type string
   */
  filterProjectId?: string;
  /**
   * Filter experiments by dataset ID.
   * @type string
   */
  filterDatasetId?: string;
  /**
   * Filter experiments by experiment ID. Can be specified multiple times.
   * @type string
   */
  filterId?: string;
  /**
   * Pagination cursor for the next page of results.
   * @type string
   */
  pageCursor?: string;
  /**
   * Maximum number of results to return per page.
   * @type number
   */
  pageLimit?: number;
}

export interface LLMObservabilityApiListLLMObsProjectsRequest {
  /**
   * Filter projects by project ID.
   * @type string
   */
  filterId?: string;
  /**
   * Filter projects by name.
   * @type string
   */
  filterName?: string;
  /**
   * Pagination cursor for the next page of results.
   * @type string
   */
  pageCursor?: string;
  /**
   * Maximum number of results to return per page.
   * @type number
   */
  pageLimit?: number;
}

export interface LLMObservabilityApiUpdateLLMObsDatasetRequest {
  /**
   * The ID of the LLM Observability project.
   * @type string
   */
  projectId: string;
  /**
   * The ID of the LLM Observability dataset.
   * @type string
   */
  datasetId: string;
  /**
   * Update dataset payload.
   * @type LLMObsDatasetUpdateRequest
   */
  body: LLMObsDatasetUpdateRequest;
}

export interface LLMObservabilityApiUpdateLLMObsDatasetRecordsRequest {
  /**
   * The ID of the LLM Observability project.
   * @type string
   */
  projectId: string;
  /**
   * The ID of the LLM Observability dataset.
   * @type string
   */
  datasetId: string;
  /**
   * Update records payload.
   * @type LLMObsDatasetRecordsUpdateRequest
   */
  body: LLMObsDatasetRecordsUpdateRequest;
}

export interface LLMObservabilityApiUpdateLLMObsExperimentRequest {
  /**
   * The ID of the LLM Observability experiment.
   * @type string
   */
  experimentId: string;
  /**
   * Update experiment payload.
   * @type LLMObsExperimentUpdateRequest
   */
  body: LLMObsExperimentUpdateRequest;
}

export interface LLMObservabilityApiUpdateLLMObsProjectRequest {
  /**
   * The ID of the LLM Observability project.
   * @type string
   */
  projectId: string;
  /**
   * Update project payload.
   * @type LLMObsProjectUpdateRequest
   */
  body: LLMObsProjectUpdateRequest;
}

export class LLMObservabilityApi {
  private requestFactory: LLMObservabilityApiRequestFactory;
  private responseProcessor: LLMObservabilityApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: LLMObservabilityApiRequestFactory,
    responseProcessor?: LLMObservabilityApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new LLMObservabilityApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new LLMObservabilityApiResponseProcessor();
  }

  /**
   * Create a new LLM Observability dataset within the specified project.
   * @param param The request object
   */
  public createLLMObsDataset(
    param: LLMObservabilityApiCreateLLMObsDatasetRequest,
    options?: Configuration,
  ): Promise<LLMObsDatasetResponse> {
    const requestContextPromise = this.requestFactory.createLLMObsDataset(
      param.projectId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createLLMObsDataset(responseContext);
        });
    });
  }

  /**
   * Append one or more records to an LLM Observability dataset.
   * @param param The request object
   */
  public createLLMObsDatasetRecords(
    param: LLMObservabilityApiCreateLLMObsDatasetRecordsRequest,
    options?: Configuration,
  ): Promise<LLMObsDatasetRecordsMutationResponse> {
    const requestContextPromise =
      this.requestFactory.createLLMObsDatasetRecords(
        param.projectId,
        param.datasetId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createLLMObsDatasetRecords(
            responseContext,
          );
        });
    });
  }

  /**
   * Create a new LLM Observability experiment.
   * @param param The request object
   */
  public createLLMObsExperiment(
    param: LLMObservabilityApiCreateLLMObsExperimentRequest,
    options?: Configuration,
  ): Promise<LLMObsExperimentResponse> {
    const requestContextPromise = this.requestFactory.createLLMObsExperiment(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createLLMObsExperiment(responseContext);
        });
    });
  }

  /**
   * Push spans and metrics for an LLM Observability experiment.
   * @param param The request object
   */
  public createLLMObsExperimentEvents(
    param: LLMObservabilityApiCreateLLMObsExperimentEventsRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.createLLMObsExperimentEvents(
        param.experimentId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createLLMObsExperimentEvents(
            responseContext,
          );
        });
    });
  }

  /**
   * Create a new LLM Observability project. Returns the existing project if a name conflict occurs.
   * @param param The request object
   */
  public createLLMObsProject(
    param: LLMObservabilityApiCreateLLMObsProjectRequest,
    options?: Configuration,
  ): Promise<LLMObsProjectResponse> {
    const requestContextPromise = this.requestFactory.createLLMObsProject(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createLLMObsProject(responseContext);
        });
    });
  }

  /**
   * Delete one or more records from an LLM Observability dataset.
   * @param param The request object
   */
  public deleteLLMObsDatasetRecords(
    param: LLMObservabilityApiDeleteLLMObsDatasetRecordsRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteLLMObsDatasetRecords(
        param.projectId,
        param.datasetId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteLLMObsDatasetRecords(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete one or more LLM Observability datasets within the specified project.
   * @param param The request object
   */
  public deleteLLMObsDatasets(
    param: LLMObservabilityApiDeleteLLMObsDatasetsRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteLLMObsDatasets(
      param.projectId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteLLMObsDatasets(responseContext);
        });
    });
  }

  /**
   * Delete one or more LLM Observability experiments.
   * @param param The request object
   */
  public deleteLLMObsExperiments(
    param: LLMObservabilityApiDeleteLLMObsExperimentsRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteLLMObsExperiments(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteLLMObsExperiments(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete one or more LLM Observability projects.
   * @param param The request object
   */
  public deleteLLMObsProjects(
    param: LLMObservabilityApiDeleteLLMObsProjectsRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteLLMObsProjects(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteLLMObsProjects(responseContext);
        });
    });
  }

  /**
   * List all records in an LLM Observability dataset, sorted by creation date, newest first.
   * @param param The request object
   */
  public listLLMObsDatasetRecords(
    param: LLMObservabilityApiListLLMObsDatasetRecordsRequest,
    options?: Configuration,
  ): Promise<LLMObsDatasetRecordsListResponse> {
    const requestContextPromise = this.requestFactory.listLLMObsDatasetRecords(
      param.projectId,
      param.datasetId,
      param.filterVersion,
      param.pageCursor,
      param.pageLimit,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLLMObsDatasetRecords(
            responseContext,
          );
        });
    });
  }

  /**
   * List all LLM Observability datasets for a project, sorted by creation date, newest first.
   * @param param The request object
   */
  public listLLMObsDatasets(
    param: LLMObservabilityApiListLLMObsDatasetsRequest,
    options?: Configuration,
  ): Promise<LLMObsDatasetsResponse> {
    const requestContextPromise = this.requestFactory.listLLMObsDatasets(
      param.projectId,
      param.filterName,
      param.filterId,
      param.pageCursor,
      param.pageLimit,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLLMObsDatasets(responseContext);
        });
    });
  }

  /**
   * List all LLM Observability experiments sorted by creation date, newest first.
   * @param param The request object
   */
  public listLLMObsExperiments(
    param: LLMObservabilityApiListLLMObsExperimentsRequest = {},
    options?: Configuration,
  ): Promise<LLMObsExperimentsResponse> {
    const requestContextPromise = this.requestFactory.listLLMObsExperiments(
      param.filterProjectId,
      param.filterDatasetId,
      param.filterId,
      param.pageCursor,
      param.pageLimit,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLLMObsExperiments(responseContext);
        });
    });
  }

  /**
   * List all LLM Observability projects sorted by creation date, newest first.
   * @param param The request object
   */
  public listLLMObsProjects(
    param: LLMObservabilityApiListLLMObsProjectsRequest = {},
    options?: Configuration,
  ): Promise<LLMObsProjectsResponse> {
    const requestContextPromise = this.requestFactory.listLLMObsProjects(
      param.filterId,
      param.filterName,
      param.pageCursor,
      param.pageLimit,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLLMObsProjects(responseContext);
        });
    });
  }

  /**
   * Partially update an existing LLM Observability dataset within the specified project.
   * @param param The request object
   */
  public updateLLMObsDataset(
    param: LLMObservabilityApiUpdateLLMObsDatasetRequest,
    options?: Configuration,
  ): Promise<LLMObsDatasetResponse> {
    const requestContextPromise = this.requestFactory.updateLLMObsDataset(
      param.projectId,
      param.datasetId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateLLMObsDataset(responseContext);
        });
    });
  }

  /**
   * Update one or more existing records in an LLM Observability dataset.
   * @param param The request object
   */
  public updateLLMObsDatasetRecords(
    param: LLMObservabilityApiUpdateLLMObsDatasetRecordsRequest,
    options?: Configuration,
  ): Promise<LLMObsDatasetRecordsMutationResponse> {
    const requestContextPromise =
      this.requestFactory.updateLLMObsDatasetRecords(
        param.projectId,
        param.datasetId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateLLMObsDatasetRecords(
            responseContext,
          );
        });
    });
  }

  /**
   * Partially update an existing LLM Observability experiment.
   * @param param The request object
   */
  public updateLLMObsExperiment(
    param: LLMObservabilityApiUpdateLLMObsExperimentRequest,
    options?: Configuration,
  ): Promise<LLMObsExperimentResponse> {
    const requestContextPromise = this.requestFactory.updateLLMObsExperiment(
      param.experimentId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateLLMObsExperiment(responseContext);
        });
    });
  }

  /**
   * Partially update an existing LLM Observability project.
   * @param param The request object
   */
  public updateLLMObsProject(
    param: LLMObservabilityApiUpdateLLMObsProjectRequest,
    options?: Configuration,
  ): Promise<LLMObsProjectResponse> {
    const requestContextPromise = this.requestFactory.updateLLMObsProject(
      param.projectId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateLLMObsProject(responseContext);
        });
    });
  }
}
