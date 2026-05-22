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
import { LLMObsAnnotatedInteractionsByTraceResponse } from "./models/LLMObsAnnotatedInteractionsByTraceResponse";
import { LLMObsAnnotatedInteractionsResponse } from "./models/LLMObsAnnotatedInteractionsResponse";
import { LLMObsAnnotationQueueInteractionsRequest } from "./models/LLMObsAnnotationQueueInteractionsRequest";
import { LLMObsAnnotationQueueInteractionsResponse } from "./models/LLMObsAnnotationQueueInteractionsResponse";
import { LLMObsAnnotationQueueLabelSchemaResponse } from "./models/LLMObsAnnotationQueueLabelSchemaResponse";
import { LLMObsAnnotationQueueLabelSchemaUpdateRequest } from "./models/LLMObsAnnotationQueueLabelSchemaUpdateRequest";
import { LLMObsAnnotationQueueRequest } from "./models/LLMObsAnnotationQueueRequest";
import { LLMObsAnnotationQueueResponse } from "./models/LLMObsAnnotationQueueResponse";
import { LLMObsAnnotationQueuesResponse } from "./models/LLMObsAnnotationQueuesResponse";
import { LLMObsAnnotationQueueUpdateRequest } from "./models/LLMObsAnnotationQueueUpdateRequest";
import { LLMObsCustomEvalConfigResponse } from "./models/LLMObsCustomEvalConfigResponse";
import { LLMObsCustomEvalConfigUpdateRequest } from "./models/LLMObsCustomEvalConfigUpdateRequest";
import { LLMObsDataDeletionRequest } from "./models/LLMObsDataDeletionRequest";
import { LLMObsDataDeletionResponse } from "./models/LLMObsDataDeletionResponse";
import { LLMObsDatasetDraftStateResponse } from "./models/LLMObsDatasetDraftStateResponse";
import { LLMObsDatasetRecordsListResponse } from "./models/LLMObsDatasetRecordsListResponse";
import { LLMObsDatasetRecordsMutationResponse } from "./models/LLMObsDatasetRecordsMutationResponse";
import { LLMObsDatasetRecordsRequest } from "./models/LLMObsDatasetRecordsRequest";
import { LLMObsDatasetRecordsUpdateRequest } from "./models/LLMObsDatasetRecordsUpdateRequest";
import { LLMObsDatasetRequest } from "./models/LLMObsDatasetRequest";
import { LLMObsDatasetResponse } from "./models/LLMObsDatasetResponse";
import { LLMObsDatasetsResponse } from "./models/LLMObsDatasetsResponse";
import { LLMObsDatasetUpdateRequest } from "./models/LLMObsDatasetUpdateRequest";
import { LLMObsDatasetVersionsResponse } from "./models/LLMObsDatasetVersionsResponse";
import { LLMObsDeleteAnnotationQueueInteractionsRequest } from "./models/LLMObsDeleteAnnotationQueueInteractionsRequest";
import { LLMObsDeleteDatasetRecordsRequest } from "./models/LLMObsDeleteDatasetRecordsRequest";
import { LLMObsDeleteDatasetsRequest } from "./models/LLMObsDeleteDatasetsRequest";
import { LLMObsDeleteExperimentsRequest } from "./models/LLMObsDeleteExperimentsRequest";
import { LLMObsDeleteProjectsRequest } from "./models/LLMObsDeleteProjectsRequest";
import { LLMObsExperimentationAnalyticsRequest } from "./models/LLMObsExperimentationAnalyticsRequest";
import { LLMObsExperimentationAnalyticsResponse } from "./models/LLMObsExperimentationAnalyticsResponse";
import { LLMObsExperimentationSearchRequest } from "./models/LLMObsExperimentationSearchRequest";
import { LLMObsExperimentationSearchResponse } from "./models/LLMObsExperimentationSearchResponse";
import { LLMObsExperimentationSimpleSearchRequest } from "./models/LLMObsExperimentationSimpleSearchRequest";
import { LLMObsExperimentationSimpleSearchResponse } from "./models/LLMObsExperimentationSimpleSearchResponse";
import { LLMObsExperimentEventsRequest } from "./models/LLMObsExperimentEventsRequest";
import { LLMObsExperimentEventsV2Response } from "./models/LLMObsExperimentEventsV2Response";
import { LLMObsExperimentRequest } from "./models/LLMObsExperimentRequest";
import { LLMObsExperimentResponse } from "./models/LLMObsExperimentResponse";
import { LLMObsExperimentsResponse } from "./models/LLMObsExperimentsResponse";
import { LLMObsExperimentUpdateRequest } from "./models/LLMObsExperimentUpdateRequest";
import { LLMObsIntegrationAccount } from "./models/LLMObsIntegrationAccount";
import { LLMObsIntegrationInferenceRequest } from "./models/LLMObsIntegrationInferenceRequest";
import { LLMObsIntegrationInferenceResponse } from "./models/LLMObsIntegrationInferenceResponse";
import { LLMObsIntegrationModel } from "./models/LLMObsIntegrationModel";
import { LLMObsIntegrationName } from "./models/LLMObsIntegrationName";
import { LLMObsProjectRequest } from "./models/LLMObsProjectRequest";
import { LLMObsProjectResponse } from "./models/LLMObsProjectResponse";
import { LLMObsProjectsResponse } from "./models/LLMObsProjectsResponse";
import { LLMObsProjectUpdateRequest } from "./models/LLMObsProjectUpdateRequest";
import { LLMObsSearchSpansRequest } from "./models/LLMObsSearchSpansRequest";
import { LLMObsSpansResponse } from "./models/LLMObsSpansResponse";
import { version } from "../version";

export class LLMObservabilityApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("llm-observability", version);
    }
  }
  public async aggregateLLMObsExperimentation(
    body: LLMObsExperimentationAnalyticsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LLMObservabilityApi.v2.aggregateLLMObsExperimentation"
      ]
    ) {
      throw new Error(
        "Unstable operation 'aggregateLLMObsExperimentation' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.aggregateLLMObsExperimentation'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "aggregateLLMObsExperimentation");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/experimentation/analytics";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.aggregateLLMObsExperimentation",
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
      serialize(body, TypingInfo, "LLMObsExperimentationAnalyticsRequest", ""),
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

  public async createLLMObsAnnotationQueue(
    body: LLMObsAnnotationQueueRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LLMObservabilityApi.v2.createLLMObsAnnotationQueue"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createLLMObsAnnotationQueue' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.createLLMObsAnnotationQueue'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createLLMObsAnnotationQueue");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/annotation-queues";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.createLLMObsAnnotationQueue",
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
      serialize(body, TypingInfo, "LLMObsAnnotationQueueRequest", ""),
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

  public async createLLMObsAnnotationQueueInteractions(
    queueId: string,
    body: LLMObsAnnotationQueueInteractionsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LLMObservabilityApi.v2.createLLMObsAnnotationQueueInteractions"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createLLMObsAnnotationQueueInteractions' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.createLLMObsAnnotationQueueInteractions'] = true`",
      );
    }

    // verify required parameter 'queueId' is not null or undefined
    if (queueId === null || queueId === undefined) {
      throw new RequiredError(
        "queueId",
        "createLLMObsAnnotationQueueInteractions",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "createLLMObsAnnotationQueueInteractions",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/annotation-queues/{queue_id}/interactions".replace(
        "{queue_id}",
        encodeURIComponent(String(queueId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.createLLMObsAnnotationQueueInteractions",
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
      serialize(
        body,
        TypingInfo,
        "LLMObsAnnotationQueueInteractionsRequest",
        "",
      ),
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

  public async createLLMObsIntegrationInference(
    integration: LLMObsIntegrationName,
    accountId: string,
    body: LLMObsIntegrationInferenceRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LLMObservabilityApi.v2.createLLMObsIntegrationInference"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createLLMObsIntegrationInference' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.createLLMObsIntegrationInference'] = true`",
      );
    }

    // verify required parameter 'integration' is not null or undefined
    if (integration === null || integration === undefined) {
      throw new RequiredError(
        "integration",
        "createLLMObsIntegrationInference",
      );
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "createLLMObsIntegrationInference");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createLLMObsIntegrationInference");
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/integrations/{integration}/{account_id}/inference"
        .replace("{integration}", encodeURIComponent(String(integration)))
        .replace("{account_id}", encodeURIComponent(String(accountId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.createLLMObsIntegrationInference",
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
      serialize(body, TypingInfo, "LLMObsIntegrationInferenceRequest", ""),
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

  public async deleteLLMObsAnnotationQueue(
    queueId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LLMObservabilityApi.v2.deleteLLMObsAnnotationQueue"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteLLMObsAnnotationQueue' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.deleteLLMObsAnnotationQueue'] = true`",
      );
    }

    // verify required parameter 'queueId' is not null or undefined
    if (queueId === null || queueId === undefined) {
      throw new RequiredError("queueId", "deleteLLMObsAnnotationQueue");
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/annotation-queues/{queue_id}".replace(
        "{queue_id}",
        encodeURIComponent(String(queueId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.deleteLLMObsAnnotationQueue",
      LLMObservabilityApi.operationServers,
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

  public async deleteLLMObsAnnotationQueueInteractions(
    queueId: string,
    body: LLMObsDeleteAnnotationQueueInteractionsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LLMObservabilityApi.v2.deleteLLMObsAnnotationQueueInteractions"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteLLMObsAnnotationQueueInteractions' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.deleteLLMObsAnnotationQueueInteractions'] = true`",
      );
    }

    // verify required parameter 'queueId' is not null or undefined
    if (queueId === null || queueId === undefined) {
      throw new RequiredError(
        "queueId",
        "deleteLLMObsAnnotationQueueInteractions",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "deleteLLMObsAnnotationQueueInteractions",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/annotation-queues/{queue_id}/interactions/delete".replace(
        "{queue_id}",
        encodeURIComponent(String(queueId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.deleteLLMObsAnnotationQueueInteractions",
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
      serialize(
        body,
        TypingInfo,
        "LLMObsDeleteAnnotationQueueInteractionsRequest",
        "",
      ),
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

  public async deleteLLMObsCustomEvalConfig(
    evalName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LLMObservabilityApi.v2.deleteLLMObsCustomEvalConfig"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteLLMObsCustomEvalConfig' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.deleteLLMObsCustomEvalConfig'] = true`",
      );
    }

    // verify required parameter 'evalName' is not null or undefined
    if (evalName === null || evalName === undefined) {
      throw new RequiredError("evalName", "deleteLLMObsCustomEvalConfig");
    }

    // Path Params
    const localVarPath =
      "/api/unstable/llm-obs/config/evaluators/custom/{eval_name}".replace(
        "{eval_name}",
        encodeURIComponent(String(evalName)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.deleteLLMObsCustomEvalConfig",
      LLMObservabilityApi.operationServers,
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

  public async deleteLLMObsData(
    body: LLMObsDataDeletionRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["LLMObservabilityApi.v2.deleteLLMObsData"]
    ) {
      throw new Error(
        "Unstable operation 'deleteLLMObsData' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.deleteLLMObsData'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deleteLLMObsData");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/deletion/data/llmobs";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.deleteLLMObsData",
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
      serialize(body, TypingInfo, "LLMObsDataDeletionRequest", ""),
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

  public async getLLMObsAnnotatedInteractions(
    queueId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LLMObservabilityApi.v2.getLLMObsAnnotatedInteractions"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getLLMObsAnnotatedInteractions' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.getLLMObsAnnotatedInteractions'] = true`",
      );
    }

    // verify required parameter 'queueId' is not null or undefined
    if (queueId === null || queueId === undefined) {
      throw new RequiredError("queueId", "getLLMObsAnnotatedInteractions");
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/annotation-queues/{queue_id}/annotated-interactions".replace(
        "{queue_id}",
        encodeURIComponent(String(queueId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.getLLMObsAnnotatedInteractions",
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getLLMObsAnnotatedInteractionsByTraceIDs(
    contentIds: Array<string>,
    offset?: number,
    limit?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LLMObservabilityApi.v2.getLLMObsAnnotatedInteractionsByTraceIDs"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getLLMObsAnnotatedInteractionsByTraceIDs' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.getLLMObsAnnotatedInteractionsByTraceIDs'] = true`",
      );
    }

    // verify required parameter 'contentIds' is not null or undefined
    if (contentIds === null || contentIds === undefined) {
      throw new RequiredError(
        "contentIds",
        "getLLMObsAnnotatedInteractionsByTraceIDs",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/annotated-interactions";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.getLLMObsAnnotatedInteractionsByTraceIDs",
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
    if (contentIds !== undefined) {
      requestContext.setQueryParam(
        "contentIds",
        serialize(contentIds, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (offset !== undefined) {
      requestContext.setQueryParam(
        "offset",
        serialize(offset, TypingInfo, "number", "int32"),
        "",
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        serialize(limit, TypingInfo, "number", "int32"),
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

  public async getLLMObsAnnotationQueueLabelSchema(
    queueId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LLMObservabilityApi.v2.getLLMObsAnnotationQueueLabelSchema"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getLLMObsAnnotationQueueLabelSchema' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.getLLMObsAnnotationQueueLabelSchema'] = true`",
      );
    }

    // verify required parameter 'queueId' is not null or undefined
    if (queueId === null || queueId === undefined) {
      throw new RequiredError("queueId", "getLLMObsAnnotationQueueLabelSchema");
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/annotation-queues/{queue_id}/label-schema".replace(
        "{queue_id}",
        encodeURIComponent(String(queueId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.getLLMObsAnnotationQueueLabelSchema",
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getLLMObsCustomEvalConfig(
    evalName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LLMObservabilityApi.v2.getLLMObsCustomEvalConfig"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getLLMObsCustomEvalConfig' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.getLLMObsCustomEvalConfig'] = true`",
      );
    }

    // verify required parameter 'evalName' is not null or undefined
    if (evalName === null || evalName === undefined) {
      throw new RequiredError("evalName", "getLLMObsCustomEvalConfig");
    }

    // Path Params
    const localVarPath =
      "/api/unstable/llm-obs/config/evaluators/custom/{eval_name}".replace(
        "{eval_name}",
        encodeURIComponent(String(evalName)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.getLLMObsCustomEvalConfig",
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getLLMObsDatasetDraftState(
    projectId: string,
    datasetId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LLMObservabilityApi.v2.getLLMObsDatasetDraftState"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getLLMObsDatasetDraftState' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.getLLMObsDatasetDraftState'] = true`",
      );
    }

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "getLLMObsDatasetDraftState");
    }

    // verify required parameter 'datasetId' is not null or undefined
    if (datasetId === null || datasetId === undefined) {
      throw new RequiredError("datasetId", "getLLMObsDatasetDraftState");
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}/draft_state"
        .replace("{project_id}", encodeURIComponent(String(projectId)))
        .replace("{dataset_id}", encodeURIComponent(String(datasetId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.getLLMObsDatasetDraftState",
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listLLMObsAnnotationQueues(
    projectId?: string,
    queueIds?: Array<string>,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LLMObservabilityApi.v2.listLLMObsAnnotationQueues"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listLLMObsAnnotationQueues' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.listLLMObsAnnotationQueues'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/annotation-queues";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.listLLMObsAnnotationQueues",
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
    if (projectId !== undefined) {
      requestContext.setQueryParam(
        "projectId",
        serialize(projectId, TypingInfo, "string", ""),
        "",
      );
    }
    if (queueIds !== undefined) {
      requestContext.setQueryParam(
        "queueIds",
        serialize(queueIds, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }

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

  public async listLLMObsDatasetVersions(
    projectId: string,
    datasetId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LLMObservabilityApi.v2.listLLMObsDatasetVersions"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listLLMObsDatasetVersions' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.listLLMObsDatasetVersions'] = true`",
      );
    }

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "listLLMObsDatasetVersions");
    }

    // verify required parameter 'datasetId' is not null or undefined
    if (datasetId === null || datasetId === undefined) {
      throw new RequiredError("datasetId", "listLLMObsDatasetVersions");
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}/versions"
        .replace("{project_id}", encodeURIComponent(String(projectId)))
        .replace("{dataset_id}", encodeURIComponent(String(datasetId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.listLLMObsDatasetVersions",
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listLLMObsExperimentEvents(
    experimentId: string,
    pageLimit?: number,
    pageCursor?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LLMObservabilityApi.v2.listLLMObsExperimentEvents"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listLLMObsExperimentEvents' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.listLLMObsExperimentEvents'] = true`",
      );
    }

    // verify required parameter 'experimentId' is not null or undefined
    if (experimentId === null || experimentId === undefined) {
      throw new RequiredError("experimentId", "listLLMObsExperimentEvents");
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v3/experiments/{experiment_id}/events".replace(
        "{experiment_id}",
        encodeURIComponent(String(experimentId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.listLLMObsExperimentEvents",
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
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        serialize(pageLimit, TypingInfo, "number", "int64"),
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

  public async listLLMObsIntegrationAccounts(
    integration: LLMObsIntegrationName,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LLMObservabilityApi.v2.listLLMObsIntegrationAccounts"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listLLMObsIntegrationAccounts' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.listLLMObsIntegrationAccounts'] = true`",
      );
    }

    // verify required parameter 'integration' is not null or undefined
    if (integration === null || integration === undefined) {
      throw new RequiredError("integration", "listLLMObsIntegrationAccounts");
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/integrations/{integration}/accounts".replace(
        "{integration}",
        encodeURIComponent(String(integration)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.listLLMObsIntegrationAccounts",
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listLLMObsIntegrationModels(
    integration: LLMObsIntegrationName,
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LLMObservabilityApi.v2.listLLMObsIntegrationModels"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listLLMObsIntegrationModels' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.listLLMObsIntegrationModels'] = true`",
      );
    }

    // verify required parameter 'integration' is not null or undefined
    if (integration === null || integration === undefined) {
      throw new RequiredError("integration", "listLLMObsIntegrationModels");
    }

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "listLLMObsIntegrationModels");
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/integrations/{integration}/{account_id}/models"
        .replace("{integration}", encodeURIComponent(String(integration)))
        .replace("{account_id}", encodeURIComponent(String(accountId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.listLLMObsIntegrationModels",
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

  public async listLLMObsSpans(
    filterFrom?: string,
    filterTo?: string,
    filterQuery?: string,
    filterSpanId?: string,
    filterTraceId?: string,
    filterSpanKind?: string,
    filterSpanName?: string,
    filterMlApp?: string,
    pageLimit?: number,
    pageCursor?: string,
    sort?: string,
    includeAttachments?: boolean,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["LLMObservabilityApi.v2.listLLMObsSpans"]) {
      throw new Error(
        "Unstable operation 'listLLMObsSpans' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.listLLMObsSpans'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/spans/events";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.listLLMObsSpans",
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
    if (filterFrom !== undefined) {
      requestContext.setQueryParam(
        "filter[from]",
        serialize(filterFrom, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterTo !== undefined) {
      requestContext.setQueryParam(
        "filter[to]",
        serialize(filterTo, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterQuery !== undefined) {
      requestContext.setQueryParam(
        "filter[query]",
        serialize(filterQuery, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterSpanId !== undefined) {
      requestContext.setQueryParam(
        "filter[span_id]",
        serialize(filterSpanId, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterTraceId !== undefined) {
      requestContext.setQueryParam(
        "filter[trace_id]",
        serialize(filterTraceId, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterSpanKind !== undefined) {
      requestContext.setQueryParam(
        "filter[span_kind]",
        serialize(filterSpanKind, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterSpanName !== undefined) {
      requestContext.setQueryParam(
        "filter[span_name]",
        serialize(filterSpanName, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterMlApp !== undefined) {
      requestContext.setQueryParam(
        "filter[ml_app]",
        serialize(filterMlApp, TypingInfo, "string", ""),
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
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        serialize(pageCursor, TypingInfo, "string", ""),
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
    if (includeAttachments !== undefined) {
      requestContext.setQueryParam(
        "include_attachments",
        serialize(includeAttachments, TypingInfo, "boolean", ""),
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

  public async lockLLMObsDatasetDraftState(
    projectId: string,
    datasetId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LLMObservabilityApi.v2.lockLLMObsDatasetDraftState"
      ]
    ) {
      throw new Error(
        "Unstable operation 'lockLLMObsDatasetDraftState' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.lockLLMObsDatasetDraftState'] = true`",
      );
    }

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "lockLLMObsDatasetDraftState");
    }

    // verify required parameter 'datasetId' is not null or undefined
    if (datasetId === null || datasetId === undefined) {
      throw new RequiredError("datasetId", "lockLLMObsDatasetDraftState");
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}/draft_state/lock"
        .replace("{project_id}", encodeURIComponent(String(projectId)))
        .replace("{dataset_id}", encodeURIComponent(String(datasetId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.lockLLMObsDatasetDraftState",
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async searchLLMObsExperimentation(
    body: LLMObsExperimentationSearchRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LLMObservabilityApi.v2.searchLLMObsExperimentation"
      ]
    ) {
      throw new Error(
        "Unstable operation 'searchLLMObsExperimentation' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.searchLLMObsExperimentation'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "searchLLMObsExperimentation");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/experimentation/search";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.searchLLMObsExperimentation",
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
      serialize(body, TypingInfo, "LLMObsExperimentationSearchRequest", ""),
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

  public async searchLLMObsSpans(
    body: LLMObsSearchSpansRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["LLMObservabilityApi.v2.searchLLMObsSpans"]
    ) {
      throw new Error(
        "Unstable operation 'searchLLMObsSpans' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.searchLLMObsSpans'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "searchLLMObsSpans");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/spans/events/search";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.searchLLMObsSpans",
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
      serialize(body, TypingInfo, "LLMObsSearchSpansRequest", ""),
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

  public async simpleSearchLLMObsExperimentation(
    body: LLMObsExperimentationSimpleSearchRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LLMObservabilityApi.v2.simpleSearchLLMObsExperimentation"
      ]
    ) {
      throw new Error(
        "Unstable operation 'simpleSearchLLMObsExperimentation' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.simpleSearchLLMObsExperimentation'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "simpleSearchLLMObsExperimentation");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/experimentation/simple-search";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.simpleSearchLLMObsExperimentation",
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
      serialize(
        body,
        TypingInfo,
        "LLMObsExperimentationSimpleSearchRequest",
        "",
      ),
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

  public async unlockLLMObsDatasetDraftState(
    projectId: string,
    datasetId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LLMObservabilityApi.v2.unlockLLMObsDatasetDraftState"
      ]
    ) {
      throw new Error(
        "Unstable operation 'unlockLLMObsDatasetDraftState' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.unlockLLMObsDatasetDraftState'] = true`",
      );
    }

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "unlockLLMObsDatasetDraftState");
    }

    // verify required parameter 'datasetId' is not null or undefined
    if (datasetId === null || datasetId === undefined) {
      throw new RequiredError("datasetId", "unlockLLMObsDatasetDraftState");
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}/draft_state/unlock"
        .replace("{project_id}", encodeURIComponent(String(projectId)))
        .replace("{dataset_id}", encodeURIComponent(String(datasetId)));

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.unlockLLMObsDatasetDraftState",
      LLMObservabilityApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateLLMObsAnnotationQueue(
    queueId: string,
    body: LLMObsAnnotationQueueUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LLMObservabilityApi.v2.updateLLMObsAnnotationQueue"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateLLMObsAnnotationQueue' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.updateLLMObsAnnotationQueue'] = true`",
      );
    }

    // verify required parameter 'queueId' is not null or undefined
    if (queueId === null || queueId === undefined) {
      throw new RequiredError("queueId", "updateLLMObsAnnotationQueue");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateLLMObsAnnotationQueue");
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/annotation-queues/{queue_id}".replace(
        "{queue_id}",
        encodeURIComponent(String(queueId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.updateLLMObsAnnotationQueue",
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
      serialize(body, TypingInfo, "LLMObsAnnotationQueueUpdateRequest", ""),
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

  public async updateLLMObsAnnotationQueueLabelSchema(
    queueId: string,
    body: LLMObsAnnotationQueueLabelSchemaUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LLMObservabilityApi.v2.updateLLMObsAnnotationQueueLabelSchema"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateLLMObsAnnotationQueueLabelSchema' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.updateLLMObsAnnotationQueueLabelSchema'] = true`",
      );
    }

    // verify required parameter 'queueId' is not null or undefined
    if (queueId === null || queueId === undefined) {
      throw new RequiredError(
        "queueId",
        "updateLLMObsAnnotationQueueLabelSchema",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateLLMObsAnnotationQueueLabelSchema");
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/annotation-queues/{queue_id}/label-schema".replace(
        "{queue_id}",
        encodeURIComponent(String(queueId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.updateLLMObsAnnotationQueueLabelSchema",
      LLMObservabilityApi.operationServers,
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
      serialize(
        body,
        TypingInfo,
        "LLMObsAnnotationQueueLabelSchemaUpdateRequest",
        "",
      ),
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

  public async updateLLMObsCustomEvalConfig(
    evalName: string,
    body: LLMObsCustomEvalConfigUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "LLMObservabilityApi.v2.updateLLMObsCustomEvalConfig"
      ]
    ) {
      throw new Error(
        "Unstable operation 'updateLLMObsCustomEvalConfig' is disabled. Enable it by setting `configuration.unstableOperations['LLMObservabilityApi.v2.updateLLMObsCustomEvalConfig'] = true`",
      );
    }

    // verify required parameter 'evalName' is not null or undefined
    if (evalName === null || evalName === undefined) {
      throw new RequiredError("evalName", "updateLLMObsCustomEvalConfig");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateLLMObsCustomEvalConfig");
    }

    // Path Params
    const localVarPath =
      "/api/unstable/llm-obs/config/evaluators/custom/{eval_name}".replace(
        "{eval_name}",
        encodeURIComponent(String(evalName)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LLMObservabilityApi.v2.updateLLMObsCustomEvalConfig",
      LLMObservabilityApi.operationServers,
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
      serialize(body, TypingInfo, "LLMObsCustomEvalConfigUpdateRequest", ""),
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
   * @params response Response returned by the server for a request to aggregateLLMObsExperimentation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async aggregateLLMObsExperimentation(
    response: ResponseContext,
  ): Promise<LLMObsExperimentationAnalyticsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: LLMObsExperimentationAnalyticsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsExperimentationAnalyticsResponse",
      ) as LLMObsExperimentationAnalyticsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
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
      const body: LLMObsExperimentationAnalyticsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsExperimentationAnalyticsResponse",
        "",
      ) as LLMObsExperimentationAnalyticsResponse;
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
   * @params response Response returned by the server for a request to createLLMObsAnnotationQueue
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createLLMObsAnnotationQueue(
    response: ResponseContext,
  ): Promise<LLMObsAnnotationQueueResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: LLMObsAnnotationQueueResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsAnnotationQueueResponse",
      ) as LLMObsAnnotationQueueResponse;
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
      const body: LLMObsAnnotationQueueResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsAnnotationQueueResponse",
        "",
      ) as LLMObsAnnotationQueueResponse;
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
   * @params response Response returned by the server for a request to createLLMObsAnnotationQueueInteractions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createLLMObsAnnotationQueueInteractions(
    response: ResponseContext,
  ): Promise<LLMObsAnnotationQueueInteractionsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: LLMObsAnnotationQueueInteractionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsAnnotationQueueInteractionsResponse",
      ) as LLMObsAnnotationQueueInteractionsResponse;
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
      const body: LLMObsAnnotationQueueInteractionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsAnnotationQueueInteractionsResponse",
        "",
      ) as LLMObsAnnotationQueueInteractionsResponse;
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
   * @params response Response returned by the server for a request to createLLMObsIntegrationInference
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createLLMObsIntegrationInference(
    response: ResponseContext,
  ): Promise<LLMObsIntegrationInferenceResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: LLMObsIntegrationInferenceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsIntegrationInferenceResponse",
      ) as LLMObsIntegrationInferenceResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
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
      const body: LLMObsIntegrationInferenceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsIntegrationInferenceResponse",
        "",
      ) as LLMObsIntegrationInferenceResponse;
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
   * @params response Response returned by the server for a request to deleteLLMObsAnnotationQueue
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteLLMObsAnnotationQueue(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
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
   * @params response Response returned by the server for a request to deleteLLMObsAnnotationQueueInteractions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteLLMObsAnnotationQueueInteractions(
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
   * @params response Response returned by the server for a request to deleteLLMObsCustomEvalConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteLLMObsCustomEvalConfig(
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
   * @params response Response returned by the server for a request to deleteLLMObsData
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteLLMObsData(
    response: ResponseContext,
  ): Promise<LLMObsDataDeletionResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 202) {
      const body: LLMObsDataDeletionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsDataDeletionResponse",
      ) as LLMObsDataDeletionResponse;
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
      const body: LLMObsDataDeletionResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsDataDeletionResponse",
        "",
      ) as LLMObsDataDeletionResponse;
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
   * @params response Response returned by the server for a request to getLLMObsAnnotatedInteractions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getLLMObsAnnotatedInteractions(
    response: ResponseContext,
  ): Promise<LLMObsAnnotatedInteractionsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: LLMObsAnnotatedInteractionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsAnnotatedInteractionsResponse",
      ) as LLMObsAnnotatedInteractionsResponse;
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
      const body: LLMObsAnnotatedInteractionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsAnnotatedInteractionsResponse",
        "",
      ) as LLMObsAnnotatedInteractionsResponse;
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
   * @params response Response returned by the server for a request to getLLMObsAnnotatedInteractionsByTraceIDs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getLLMObsAnnotatedInteractionsByTraceIDs(
    response: ResponseContext,
  ): Promise<LLMObsAnnotatedInteractionsByTraceResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: LLMObsAnnotatedInteractionsByTraceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsAnnotatedInteractionsByTraceResponse",
      ) as LLMObsAnnotatedInteractionsByTraceResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
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
      const body: LLMObsAnnotatedInteractionsByTraceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsAnnotatedInteractionsByTraceResponse",
        "",
      ) as LLMObsAnnotatedInteractionsByTraceResponse;
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
   * @params response Response returned by the server for a request to getLLMObsAnnotationQueueLabelSchema
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getLLMObsAnnotationQueueLabelSchema(
    response: ResponseContext,
  ): Promise<LLMObsAnnotationQueueLabelSchemaResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: LLMObsAnnotationQueueLabelSchemaResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsAnnotationQueueLabelSchemaResponse",
      ) as LLMObsAnnotationQueueLabelSchemaResponse;
      return body;
    }
    if (
      response.httpStatusCode === 401 ||
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
      const body: LLMObsAnnotationQueueLabelSchemaResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsAnnotationQueueLabelSchemaResponse",
        "",
      ) as LLMObsAnnotationQueueLabelSchemaResponse;
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
   * @params response Response returned by the server for a request to getLLMObsCustomEvalConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getLLMObsCustomEvalConfig(
    response: ResponseContext,
  ): Promise<LLMObsCustomEvalConfigResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: LLMObsCustomEvalConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsCustomEvalConfigResponse",
      ) as LLMObsCustomEvalConfigResponse;
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
      const body: LLMObsCustomEvalConfigResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsCustomEvalConfigResponse",
        "",
      ) as LLMObsCustomEvalConfigResponse;
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
   * @params response Response returned by the server for a request to getLLMObsDatasetDraftState
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getLLMObsDatasetDraftState(
    response: ResponseContext,
  ): Promise<LLMObsDatasetDraftStateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: LLMObsDatasetDraftStateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsDatasetDraftStateResponse",
      ) as LLMObsDatasetDraftStateResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: LLMObsDatasetDraftStateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsDatasetDraftStateResponse",
        "",
      ) as LLMObsDatasetDraftStateResponse;
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
   * @params response Response returned by the server for a request to listLLMObsAnnotationQueues
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLLMObsAnnotationQueues(
    response: ResponseContext,
  ): Promise<LLMObsAnnotationQueuesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: LLMObsAnnotationQueuesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsAnnotationQueuesResponse",
      ) as LLMObsAnnotationQueuesResponse;
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
      const body: LLMObsAnnotationQueuesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsAnnotationQueuesResponse",
        "",
      ) as LLMObsAnnotationQueuesResponse;
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
   * @params response Response returned by the server for a request to listLLMObsDatasetVersions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLLMObsDatasetVersions(
    response: ResponseContext,
  ): Promise<LLMObsDatasetVersionsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: LLMObsDatasetVersionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsDatasetVersionsResponse",
      ) as LLMObsDatasetVersionsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: LLMObsDatasetVersionsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsDatasetVersionsResponse",
        "",
      ) as LLMObsDatasetVersionsResponse;
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
   * @params response Response returned by the server for a request to listLLMObsExperimentEvents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLLMObsExperimentEvents(
    response: ResponseContext,
  ): Promise<LLMObsExperimentEventsV2Response> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: LLMObsExperimentEventsV2Response = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsExperimentEventsV2Response",
      ) as LLMObsExperimentEventsV2Response;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: LLMObsExperimentEventsV2Response = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsExperimentEventsV2Response",
        "",
      ) as LLMObsExperimentEventsV2Response;
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
   * @params response Response returned by the server for a request to listLLMObsIntegrationAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLLMObsIntegrationAccounts(
    response: ResponseContext,
  ): Promise<Array<LLMObsIntegrationAccount>> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: Array<LLMObsIntegrationAccount> = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Array<LLMObsIntegrationAccount>",
      ) as Array<LLMObsIntegrationAccount>;
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
      const body: Array<LLMObsIntegrationAccount> = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Array<LLMObsIntegrationAccount>",
        "",
      ) as Array<LLMObsIntegrationAccount>;
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
   * @params response Response returned by the server for a request to listLLMObsIntegrationModels
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLLMObsIntegrationModels(
    response: ResponseContext,
  ): Promise<Array<LLMObsIntegrationModel>> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: Array<LLMObsIntegrationModel> = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Array<LLMObsIntegrationModel>",
      ) as Array<LLMObsIntegrationModel>;
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
      const body: Array<LLMObsIntegrationModel> = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Array<LLMObsIntegrationModel>",
        "",
      ) as Array<LLMObsIntegrationModel>;
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
   * @params response Response returned by the server for a request to listLLMObsSpans
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLLMObsSpans(
    response: ResponseContext,
  ): Promise<LLMObsSpansResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: LLMObsSpansResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsSpansResponse",
      ) as LLMObsSpansResponse;
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
      const body: LLMObsSpansResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsSpansResponse",
        "",
      ) as LLMObsSpansResponse;
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
   * @params response Response returned by the server for a request to lockLLMObsDatasetDraftState
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async lockLLMObsDatasetDraftState(
    response: ResponseContext,
  ): Promise<LLMObsDatasetDraftStateResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: LLMObsDatasetDraftStateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsDatasetDraftStateResponse",
      ) as LLMObsDatasetDraftStateResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: LLMObsDatasetDraftStateResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsDatasetDraftStateResponse",
        "",
      ) as LLMObsDatasetDraftStateResponse;
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
   * @params response Response returned by the server for a request to searchLLMObsExperimentation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchLLMObsExperimentation(
    response: ResponseContext,
  ): Promise<LLMObsExperimentationSearchResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200 || response.httpStatusCode === 206) {
      const body: LLMObsExperimentationSearchResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsExperimentationSearchResponse",
      ) as LLMObsExperimentationSearchResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
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
      const body: LLMObsExperimentationSearchResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsExperimentationSearchResponse",
        "",
      ) as LLMObsExperimentationSearchResponse;
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
   * @params response Response returned by the server for a request to searchLLMObsSpans
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchLLMObsSpans(
    response: ResponseContext,
  ): Promise<LLMObsSpansResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: LLMObsSpansResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsSpansResponse",
      ) as LLMObsSpansResponse;
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
      const body: LLMObsSpansResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsSpansResponse",
        "",
      ) as LLMObsSpansResponse;
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
   * @params response Response returned by the server for a request to simpleSearchLLMObsExperimentation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async simpleSearchLLMObsExperimentation(
    response: ResponseContext,
  ): Promise<LLMObsExperimentationSimpleSearchResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: LLMObsExperimentationSimpleSearchResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsExperimentationSimpleSearchResponse",
      ) as LLMObsExperimentationSimpleSearchResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
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
      const body: LLMObsExperimentationSimpleSearchResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsExperimentationSimpleSearchResponse",
        "",
      ) as LLMObsExperimentationSimpleSearchResponse;
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
   * @params response Response returned by the server for a request to unlockLLMObsDatasetDraftState
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async unlockLLMObsDatasetDraftState(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
   * @params response Response returned by the server for a request to updateLLMObsAnnotationQueue
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateLLMObsAnnotationQueue(
    response: ResponseContext,
  ): Promise<LLMObsAnnotationQueueResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: LLMObsAnnotationQueueResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsAnnotationQueueResponse",
      ) as LLMObsAnnotationQueueResponse;
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
      const body: LLMObsAnnotationQueueResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsAnnotationQueueResponse",
        "",
      ) as LLMObsAnnotationQueueResponse;
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
   * @params response Response returned by the server for a request to updateLLMObsAnnotationQueueLabelSchema
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateLLMObsAnnotationQueueLabelSchema(
    response: ResponseContext,
  ): Promise<LLMObsAnnotationQueueLabelSchemaResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: LLMObsAnnotationQueueLabelSchemaResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsAnnotationQueueLabelSchemaResponse",
      ) as LLMObsAnnotationQueueLabelSchemaResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: LLMObsAnnotationQueueLabelSchemaResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "LLMObsAnnotationQueueLabelSchemaResponse",
        "",
      ) as LLMObsAnnotationQueueLabelSchemaResponse;
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
   * @params response Response returned by the server for a request to updateLLMObsCustomEvalConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateLLMObsCustomEvalConfig(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 422
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

export interface LLMObservabilityApiAggregateLLMObsExperimentationRequest {
  /**
   * Analytics payload.
   * @type LLMObsExperimentationAnalyticsRequest
   */
  body: LLMObsExperimentationAnalyticsRequest;
}

export interface LLMObservabilityApiCreateLLMObsAnnotationQueueRequest {
  /**
   * Create annotation queue payload.
   * @type LLMObsAnnotationQueueRequest
   */
  body: LLMObsAnnotationQueueRequest;
}

export interface LLMObservabilityApiCreateLLMObsAnnotationQueueInteractionsRequest {
  /**
   * The ID of the LLM Observability annotation queue.
   * @type string
   */
  queueId: string;
  /**
   * Add interactions payload.
   * @type LLMObsAnnotationQueueInteractionsRequest
   */
  body: LLMObsAnnotationQueueInteractionsRequest;
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

export interface LLMObservabilityApiCreateLLMObsIntegrationInferenceRequest {
  /**
   * The name of the LLM integration.
   * @type LLMObsIntegrationName
   */
  integration: LLMObsIntegrationName;
  /**
   * The ID of the integration account.
   * @type string
   */
  accountId: string;
  /**
   * Inference request parameters.
   * @type LLMObsIntegrationInferenceRequest
   */
  body: LLMObsIntegrationInferenceRequest;
}

export interface LLMObservabilityApiCreateLLMObsProjectRequest {
  /**
   * Create project payload.
   * @type LLMObsProjectRequest
   */
  body: LLMObsProjectRequest;
}

export interface LLMObservabilityApiDeleteLLMObsAnnotationQueueRequest {
  /**
   * The ID of the LLM Observability annotation queue.
   * @type string
   */
  queueId: string;
}

export interface LLMObservabilityApiDeleteLLMObsAnnotationQueueInteractionsRequest {
  /**
   * The ID of the LLM Observability annotation queue.
   * @type string
   */
  queueId: string;
  /**
   * Delete interactions payload.
   * @type LLMObsDeleteAnnotationQueueInteractionsRequest
   */
  body: LLMObsDeleteAnnotationQueueInteractionsRequest;
}

export interface LLMObservabilityApiDeleteLLMObsCustomEvalConfigRequest {
  /**
   * The name of the custom LLM Observability evaluator configuration.
   * @type string
   */
  evalName: string;
}

export interface LLMObservabilityApiDeleteLLMObsDataRequest {
  /**
   * Data deletion request payload.
   * @type LLMObsDataDeletionRequest
   */
  body: LLMObsDataDeletionRequest;
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

export interface LLMObservabilityApiGetLLMObsAnnotatedInteractionsRequest {
  /**
   * The ID of the LLM Observability annotation queue.
   * @type string
   */
  queueId: string;
}

export interface LLMObservabilityApiGetLLMObsAnnotatedInteractionsByTraceIDsRequest {
  /**
   * One or more content IDs to retrieve annotated interactions for. At least one is required.
   * @type Array<string>
   */
  contentIds: Array<string>;
  /**
   * Pagination offset. Must be >= 0. Defaults to 0.
   * @type number
   */
  offset?: number;
  /**
   * Maximum number of results to return. Must be > 0. Defaults to 100.
   * @type number
   */
  limit?: number;
}

export interface LLMObservabilityApiGetLLMObsAnnotationQueueLabelSchemaRequest {
  /**
   * The ID of the LLM Observability annotation queue.
   * @type string
   */
  queueId: string;
}

export interface LLMObservabilityApiGetLLMObsCustomEvalConfigRequest {
  /**
   * The name of the custom LLM Observability evaluator configuration.
   * @type string
   */
  evalName: string;
}

export interface LLMObservabilityApiGetLLMObsDatasetDraftStateRequest {
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
}

export interface LLMObservabilityApiListLLMObsAnnotationQueuesRequest {
  /**
   * Filter annotation queues by project ID. Cannot be used together with `queueIds`.
   * @type string
   */
  projectId?: string;
  /**
   * Filter annotation queues by queue IDs (comma-separated). Cannot be used together with `projectId`.
   * @type Array<string>
   */
  queueIds?: Array<string>;
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
   * Use the Pagination cursor to retrieve the next page of results.
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
   * Use the Pagination cursor to retrieve the next page of results.
   * @type string
   */
  pageCursor?: string;
  /**
   * Maximum number of results to return per page.
   * @type number
   */
  pageLimit?: number;
}

export interface LLMObservabilityApiListLLMObsDatasetVersionsRequest {
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
}

export interface LLMObservabilityApiListLLMObsExperimentEventsRequest {
  /**
   * The ID of the LLM Observability experiment.
   * @type string
   */
  experimentId: string;
  /**
   * Maximum number of spans to return per page. Defaults to 5000.
   * @type number
   */
  pageLimit?: number;
  /**
   * Opaque cursor from a previous response to fetch the next page of results.
   * @type string
   */
  pageCursor?: string;
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
   * Use the Pagination cursor to retrieve the next page of results.
   * @type string
   */
  pageCursor?: string;
  /**
   * Maximum number of results to return per page.
   * @type number
   */
  pageLimit?: number;
}

export interface LLMObservabilityApiListLLMObsIntegrationAccountsRequest {
  /**
   * The name of the LLM integration.
   * @type LLMObsIntegrationName
   */
  integration: LLMObsIntegrationName;
}

export interface LLMObservabilityApiListLLMObsIntegrationModelsRequest {
  /**
   * The name of the LLM integration.
   * @type LLMObsIntegrationName
   */
  integration: LLMObsIntegrationName;
  /**
   * The ID of the integration account.
   * @type string
   */
  accountId: string;
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
   * Use the Pagination cursor to retrieve the next page of results.
   * @type string
   */
  pageCursor?: string;
  /**
   * Maximum number of results to return per page.
   * @type number
   */
  pageLimit?: number;
}

export interface LLMObservabilityApiListLLMObsSpansRequest {
  /**
   * Start of the time range. Accepts ISO 8601 or relative format (e.g., `now-15m`). Defaults to `now-15m`.
   * @type string
   */
  filterFrom?: string;
  /**
   * End of the time range. Accepts ISO 8601 or relative format. Defaults to `now`.
   * @type string
   */
  filterTo?: string;
  /**
   * Search query using LLM Observability query syntax. Supports attribute filters using the field:value syntax (e.g. session_id, trace_id, ml_app, meta.span.kind). When provided, structured field filters (`filter[span_id]`, `filter[trace_id]`, etc.) are ignored.
   * @type string
   */
  filterQuery?: string;
  /**
   * Filter by exact span ID.
   * @type string
   */
  filterSpanId?: string;
  /**
   * Filter by exact trace ID.
   * @type string
   */
  filterTraceId?: string;
  /**
   * Filter by span kind (e.g., llm, agent, tool, task, workflow).
   * @type string
   */
  filterSpanKind?: string;
  /**
   * Filter by span name.
   * @type string
   */
  filterSpanName?: string;
  /**
   * Filter by ML application name.
   * @type string
   */
  filterMlApp?: string;
  /**
   * Maximum number of spans to return. Defaults to `10`.
   * @type number
   */
  pageLimit?: number;
  /**
   * Cursor from the previous response to retrieve the next page.
   * @type string
   */
  pageCursor?: string;
  /**
   * Sort order for the results.
   * @type string
   */
  sort?: string;
  /**
   * Whether to include attachment data in the response. Defaults to `true`.
   * @type boolean
   */
  includeAttachments?: boolean;
}

export interface LLMObservabilityApiLockLLMObsDatasetDraftStateRequest {
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
}

export interface LLMObservabilityApiSearchLLMObsExperimentationRequest {
  /**
   * Experimentation search payload.
   * @type LLMObsExperimentationSearchRequest
   */
  body: LLMObsExperimentationSearchRequest;
}

export interface LLMObservabilityApiSearchLLMObsSpansRequest {
  /**
   * Search spans payload.
   * @type LLMObsSearchSpansRequest
   */
  body: LLMObsSearchSpansRequest;
}

export interface LLMObservabilityApiSimpleSearchLLMObsExperimentationRequest {
  /**
   * Simple search payload.
   * @type LLMObsExperimentationSimpleSearchRequest
   */
  body: LLMObsExperimentationSimpleSearchRequest;
}

export interface LLMObservabilityApiUnlockLLMObsDatasetDraftStateRequest {
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
}

export interface LLMObservabilityApiUpdateLLMObsAnnotationQueueRequest {
  /**
   * The ID of the LLM Observability annotation queue.
   * @type string
   */
  queueId: string;
  /**
   * Update annotation queue payload.
   * @type LLMObsAnnotationQueueUpdateRequest
   */
  body: LLMObsAnnotationQueueUpdateRequest;
}

export interface LLMObservabilityApiUpdateLLMObsAnnotationQueueLabelSchemaRequest {
  /**
   * The ID of the LLM Observability annotation queue.
   * @type string
   */
  queueId: string;
  /**
   * Update label schema payload.
   * @type LLMObsAnnotationQueueLabelSchemaUpdateRequest
   */
  body: LLMObsAnnotationQueueLabelSchemaUpdateRequest;
}

export interface LLMObservabilityApiUpdateLLMObsCustomEvalConfigRequest {
  /**
   * The name of the custom LLM Observability evaluator configuration.
   * @type string
   */
  evalName: string;
  /**
   * Custom evaluator configuration payload.
   * @type LLMObsCustomEvalConfigUpdateRequest
   */
  body: LLMObsCustomEvalConfigUpdateRequest;
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
   * Execute an analytics aggregation over LLM Observability experimentation data.
   * Use this endpoint to compute metrics (for example average eval scores) grouped by fields such as `span_id` or `experiment_id`.
   *
   * At least one `compute` definition and one `index` must be provided.
   * @param param The request object
   */
  public aggregateLLMObsExperimentation(
    param: LLMObservabilityApiAggregateLLMObsExperimentationRequest,
    options?: Configuration,
  ): Promise<LLMObsExperimentationAnalyticsResponse> {
    const requestContextPromise =
      this.requestFactory.aggregateLLMObsExperimentation(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.aggregateLLMObsExperimentation(
            responseContext,
          );
        });
    });
  }

  /**
   * Create an annotation queue. The `name` and `project_id` fields are required.
   * An optional `annotation_schema` can be provided to define the labels for the queue.
   * Fields such as `created_by`, `owned_by`, `created_at`, `modified_by`,
   * and `modified_at` are inferred by the backend.
   * @param param The request object
   */
  public createLLMObsAnnotationQueue(
    param: LLMObservabilityApiCreateLLMObsAnnotationQueueRequest,
    options?: Configuration,
  ): Promise<LLMObsAnnotationQueueResponse> {
    const requestContextPromise =
      this.requestFactory.createLLMObsAnnotationQueue(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createLLMObsAnnotationQueue(
            responseContext,
          );
        });
    });
  }

  /**
   * Add one or more interactions to an annotation queue. At least one
   * interaction must be provided. Each interaction has a `type`:
   *
   * - `trace`, `experiment_trace`, `session`: `content_id` references the
   *   upstream entity; the server fetches the actual content.
   * - `display_block`: omit `content_id` and provide the rendered content
   *   in `display_block`. The server generates `content_id` as a
   *   deterministic hash of the block list.
   *
   * Items of different types can be mixed in a single request.
   * @param param The request object
   */
  public createLLMObsAnnotationQueueInteractions(
    param: LLMObservabilityApiCreateLLMObsAnnotationQueueInteractionsRequest,
    options?: Configuration,
  ): Promise<LLMObsAnnotationQueueInteractionsResponse> {
    const requestContextPromise =
      this.requestFactory.createLLMObsAnnotationQueueInteractions(
        param.queueId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createLLMObsAnnotationQueueInteractions(
            responseContext,
          );
        });
    });
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
   * Run an LLM inference request through the specified integration and account, returning the model response and token usage.
   * @param param The request object
   */
  public createLLMObsIntegrationInference(
    param: LLMObservabilityApiCreateLLMObsIntegrationInferenceRequest,
    options?: Configuration,
  ): Promise<LLMObsIntegrationInferenceResponse> {
    const requestContextPromise =
      this.requestFactory.createLLMObsIntegrationInference(
        param.integration,
        param.accountId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createLLMObsIntegrationInference(
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
   * Delete an annotation queue by its ID.
   * @param param The request object
   */
  public deleteLLMObsAnnotationQueue(
    param: LLMObservabilityApiDeleteLLMObsAnnotationQueueRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteLLMObsAnnotationQueue(param.queueId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteLLMObsAnnotationQueue(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete one or more interactions from an annotation queue.
   * @param param The request object
   */
  public deleteLLMObsAnnotationQueueInteractions(
    param: LLMObservabilityApiDeleteLLMObsAnnotationQueueInteractionsRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteLLMObsAnnotationQueueInteractions(
        param.queueId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteLLMObsAnnotationQueueInteractions(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a custom LLM Observability evaluator configuration by its name.
   * @param param The request object
   */
  public deleteLLMObsCustomEvalConfig(
    param: LLMObservabilityApiDeleteLLMObsCustomEvalConfigRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteLLMObsCustomEvalConfig(param.evalName, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteLLMObsCustomEvalConfig(
            responseContext,
          );
        });
    });
  }

  /**
   * Submit a request to delete LLM Observability span data matching a trace ID filter within a specified time range.
   * @param param The request object
   */
  public deleteLLMObsData(
    param: LLMObservabilityApiDeleteLLMObsDataRequest,
    options?: Configuration,
  ): Promise<LLMObsDataDeletionResponse> {
    const requestContextPromise = this.requestFactory.deleteLLMObsData(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteLLMObsData(responseContext);
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
   * Retrieve all interactions (traces and sessions) and their annotations for a given annotation queue.
   * @param param The request object
   */
  public getLLMObsAnnotatedInteractions(
    param: LLMObservabilityApiGetLLMObsAnnotatedInteractionsRequest,
    options?: Configuration,
  ): Promise<LLMObsAnnotatedInteractionsResponse> {
    const requestContextPromise =
      this.requestFactory.getLLMObsAnnotatedInteractions(
        param.queueId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getLLMObsAnnotatedInteractions(
            responseContext,
          );
        });
    });
  }

  /**
   * Returns annotated interactions across all annotation queues for the given content IDs. Results include queue metadata (ID and name) for each interaction.
   * @param param The request object
   */
  public getLLMObsAnnotatedInteractionsByTraceIDs(
    param: LLMObservabilityApiGetLLMObsAnnotatedInteractionsByTraceIDsRequest,
    options?: Configuration,
  ): Promise<LLMObsAnnotatedInteractionsByTraceResponse> {
    const requestContextPromise =
      this.requestFactory.getLLMObsAnnotatedInteractionsByTraceIDs(
        param.contentIds,
        param.offset,
        param.limit,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getLLMObsAnnotatedInteractionsByTraceIDs(
            responseContext,
          );
        });
    });
  }

  /**
   * Retrieve the label schema for a given annotation queue.
   * @param param The request object
   */
  public getLLMObsAnnotationQueueLabelSchema(
    param: LLMObservabilityApiGetLLMObsAnnotationQueueLabelSchemaRequest,
    options?: Configuration,
  ): Promise<LLMObsAnnotationQueueLabelSchemaResponse> {
    const requestContextPromise =
      this.requestFactory.getLLMObsAnnotationQueueLabelSchema(
        param.queueId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getLLMObsAnnotationQueueLabelSchema(
            responseContext,
          );
        });
    });
  }

  /**
   * Retrieve a custom LLM Observability evaluator configuration by its name.
   * @param param The request object
   */
  public getLLMObsCustomEvalConfig(
    param: LLMObservabilityApiGetLLMObsCustomEvalConfigRequest,
    options?: Configuration,
  ): Promise<LLMObsCustomEvalConfigResponse> {
    const requestContextPromise = this.requestFactory.getLLMObsCustomEvalConfig(
      param.evalName,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getLLMObsCustomEvalConfig(
            responseContext,
          );
        });
    });
  }

  /**
   * Retrieve the draft state of a dataset, including whether it is currently locked for editing and which user holds the lock.
   * @param param The request object
   */
  public getLLMObsDatasetDraftState(
    param: LLMObservabilityApiGetLLMObsDatasetDraftStateRequest,
    options?: Configuration,
  ): Promise<LLMObsDatasetDraftStateResponse> {
    const requestContextPromise =
      this.requestFactory.getLLMObsDatasetDraftState(
        param.projectId,
        param.datasetId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getLLMObsDatasetDraftState(
            responseContext,
          );
        });
    });
  }

  /**
   * List annotation queues. Optionally filter by project ID or queue IDs. These parameters are mutually exclusive.
   * If neither is provided, all queues in the organization are returned.
   * @param param The request object
   */
  public listLLMObsAnnotationQueues(
    param: LLMObservabilityApiListLLMObsAnnotationQueuesRequest = {},
    options?: Configuration,
  ): Promise<LLMObsAnnotationQueuesResponse> {
    const requestContextPromise =
      this.requestFactory.listLLMObsAnnotationQueues(
        param.projectId,
        param.queueIds,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLLMObsAnnotationQueues(
            responseContext,
          );
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
   * List the active versions of a dataset. A version is created each time a dataset is referenced by an experiment run.
   * @param param The request object
   */
  public listLLMObsDatasetVersions(
    param: LLMObservabilityApiListLLMObsDatasetVersionsRequest,
    options?: Configuration,
  ): Promise<LLMObsDatasetVersionsResponse> {
    const requestContextPromise = this.requestFactory.listLLMObsDatasetVersions(
      param.projectId,
      param.datasetId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLLMObsDatasetVersions(
            responseContext,
          );
        });
    });
  }

  /**
   * Retrieve spans and experiment-level summary metrics for a given experiment with cursor-based pagination.
   * @param param The request object
   */
  public listLLMObsExperimentEvents(
    param: LLMObservabilityApiListLLMObsExperimentEventsRequest,
    options?: Configuration,
  ): Promise<LLMObsExperimentEventsV2Response> {
    const requestContextPromise =
      this.requestFactory.listLLMObsExperimentEvents(
        param.experimentId,
        param.pageLimit,
        param.pageCursor,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLLMObsExperimentEvents(
            responseContext,
          );
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
   * Retrieve the list of configured accounts for the specified LLM provider integration.
   * @param param The request object
   */
  public listLLMObsIntegrationAccounts(
    param: LLMObservabilityApiListLLMObsIntegrationAccountsRequest,
    options?: Configuration,
  ): Promise<Array<LLMObsIntegrationAccount>> {
    const requestContextPromise =
      this.requestFactory.listLLMObsIntegrationAccounts(
        param.integration,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLLMObsIntegrationAccounts(
            responseContext,
          );
        });
    });
  }

  /**
   * Retrieve the list of models available for the specified LLM provider integration and account.
   * @param param The request object
   */
  public listLLMObsIntegrationModels(
    param: LLMObservabilityApiListLLMObsIntegrationModelsRequest,
    options?: Configuration,
  ): Promise<Array<LLMObsIntegrationModel>> {
    const requestContextPromise =
      this.requestFactory.listLLMObsIntegrationModels(
        param.integration,
        param.accountId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLLMObsIntegrationModels(
            responseContext,
          );
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
   * List LLM Observability spans matching the specified filters.
   * @param param The request object
   */
  public listLLMObsSpans(
    param: LLMObservabilityApiListLLMObsSpansRequest = {},
    options?: Configuration,
  ): Promise<LLMObsSpansResponse> {
    const requestContextPromise = this.requestFactory.listLLMObsSpans(
      param.filterFrom,
      param.filterTo,
      param.filterQuery,
      param.filterSpanId,
      param.filterTraceId,
      param.filterSpanKind,
      param.filterSpanName,
      param.filterMlApp,
      param.pageLimit,
      param.pageCursor,
      param.sort,
      param.includeAttachments,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLLMObsSpans(responseContext);
        });
    });
  }

  /**
   * Acquire the draft lock on a dataset for the calling user. The lock prevents other users from concurrently editing the dataset draft.
   * @param param The request object
   */
  public lockLLMObsDatasetDraftState(
    param: LLMObservabilityApiLockLLMObsDatasetDraftStateRequest,
    options?: Configuration,
  ): Promise<LLMObsDatasetDraftStateResponse> {
    const requestContextPromise =
      this.requestFactory.lockLLMObsDatasetDraftState(
        param.projectId,
        param.datasetId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.lockLLMObsDatasetDraftState(
            responseContext,
          );
        });
    });
  }

  /**
   * Search across LLM Observability experimentation entities — projects, datasets, dataset records, experiments, and experiment runs — using cursor-based pagination.
   *
   * The `filter.scope` field controls which entity types are returned. At least one valid scope must be provided.
   *
   * Returns `200 OK` when all results fit in a single page. Returns `206 Partial Content` with a cursor in `meta.after` when additional pages are available.
   * @param param The request object
   */
  public searchLLMObsExperimentation(
    param: LLMObservabilityApiSearchLLMObsExperimentationRequest,
    options?: Configuration,
  ): Promise<LLMObsExperimentationSearchResponse> {
    const requestContextPromise =
      this.requestFactory.searchLLMObsExperimentation(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchLLMObsExperimentation(
            responseContext,
          );
        });
    });
  }

  /**
   * Search LLM Observability spans using structured filters in the request body.
   * @param param The request object
   */
  public searchLLMObsSpans(
    param: LLMObservabilityApiSearchLLMObsSpansRequest,
    options?: Configuration,
  ): Promise<LLMObsSpansResponse> {
    const requestContextPromise = this.requestFactory.searchLLMObsSpans(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchLLMObsSpans(responseContext);
        });
    });
  }

  /**
   * Search across LLM Observability experimentation entities using offset-based (page-number) pagination.
   * Use this endpoint when you need total page count or want to navigate to a specific page number.
   *
   * The `filter.scope` field controls which entity types are returned. At least one valid scope must be provided.
   * @param param The request object
   */
  public simpleSearchLLMObsExperimentation(
    param: LLMObservabilityApiSimpleSearchLLMObsExperimentationRequest,
    options?: Configuration,
  ): Promise<LLMObsExperimentationSimpleSearchResponse> {
    const requestContextPromise =
      this.requestFactory.simpleSearchLLMObsExperimentation(
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.simpleSearchLLMObsExperimentation(
            responseContext,
          );
        });
    });
  }

  /**
   * Release the draft lock on a dataset held by the calling user, allowing other users to edit the dataset draft.
   * @param param The request object
   */
  public unlockLLMObsDatasetDraftState(
    param: LLMObservabilityApiUnlockLLMObsDatasetDraftStateRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.unlockLLMObsDatasetDraftState(
        param.projectId,
        param.datasetId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.unlockLLMObsDatasetDraftState(
            responseContext,
          );
        });
    });
  }

  /**
   * Partially update an annotation queue. The `name`, `description`, and `annotation_schema` fields can be updated.
   * @param param The request object
   */
  public updateLLMObsAnnotationQueue(
    param: LLMObservabilityApiUpdateLLMObsAnnotationQueueRequest,
    options?: Configuration,
  ): Promise<LLMObsAnnotationQueueResponse> {
    const requestContextPromise =
      this.requestFactory.updateLLMObsAnnotationQueue(
        param.queueId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateLLMObsAnnotationQueue(
            responseContext,
          );
        });
    });
  }

  /**
   * Create or replace the label schema for a given annotation queue.
   * The label schema defines the labels annotators can apply to interactions in the queue.
   * Label names must be unique within the queue and match the pattern `^[a-zA-Z0-9_-]+$`.
   * Each label must have a valid type: score, categorical, boolean, or text.
   * @param param The request object
   */
  public updateLLMObsAnnotationQueueLabelSchema(
    param: LLMObservabilityApiUpdateLLMObsAnnotationQueueLabelSchemaRequest,
    options?: Configuration,
  ): Promise<LLMObsAnnotationQueueLabelSchemaResponse> {
    const requestContextPromise =
      this.requestFactory.updateLLMObsAnnotationQueueLabelSchema(
        param.queueId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateLLMObsAnnotationQueueLabelSchema(
            responseContext,
          );
        });
    });
  }

  /**
   * Create or update a custom LLM Observability evaluator configuration by its name.
   * @param param The request object
   */
  public updateLLMObsCustomEvalConfig(
    param: LLMObservabilityApiUpdateLLMObsCustomEvalConfigRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.updateLLMObsCustomEvalConfig(
        param.evalName,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateLLMObsCustomEvalConfig(
            responseContext,
          );
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
