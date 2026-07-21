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
  HttpFile,
} from "../../datadog-api-client-common/http/http";

import FormData from "form-data";

import { logger } from "../../../logger";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "../../datadog-api-client-common/exception";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { LLMObsAnnotatedInteractionsByTraceResponse } from "../models/LLMObsAnnotatedInteractionsByTraceResponse";
import { LLMObsAnnotatedInteractionsResponse } from "../models/LLMObsAnnotatedInteractionsResponse";
import { LLMObsAnnotationQueueInteractionsRequest } from "../models/LLMObsAnnotationQueueInteractionsRequest";
import { LLMObsAnnotationQueueInteractionsResponse } from "../models/LLMObsAnnotationQueueInteractionsResponse";
import { LLMObsAnnotationQueueLabelSchemaResponse } from "../models/LLMObsAnnotationQueueLabelSchemaResponse";
import { LLMObsAnnotationQueueLabelSchemaUpdateRequest } from "../models/LLMObsAnnotationQueueLabelSchemaUpdateRequest";
import { LLMObsAnnotationQueueRequest } from "../models/LLMObsAnnotationQueueRequest";
import { LLMObsAnnotationQueueResponse } from "../models/LLMObsAnnotationQueueResponse";
import { LLMObsAnnotationQueuesResponse } from "../models/LLMObsAnnotationQueuesResponse";
import { LLMObsAnnotationQueueUpdateRequest } from "../models/LLMObsAnnotationQueueUpdateRequest";
import { LLMObsAnnotationsRequest } from "../models/LLMObsAnnotationsRequest";
import { LLMObsAnnotationsResponse } from "../models/LLMObsAnnotationsResponse";
import { LLMObsCreatePromptRequest } from "../models/LLMObsCreatePromptRequest";
import { LLMObsCreatePromptVersionRequest } from "../models/LLMObsCreatePromptVersionRequest";
import { LLMObsCustomEvalConfigResponse } from "../models/LLMObsCustomEvalConfigResponse";
import { LLMObsCustomEvalConfigUpdateRequest } from "../models/LLMObsCustomEvalConfigUpdateRequest";
import { LLMObsDataDeletionRequest } from "../models/LLMObsDataDeletionRequest";
import { LLMObsDataDeletionResponse } from "../models/LLMObsDataDeletionResponse";
import { LLMObsDatasetBatchUpdateRequest } from "../models/LLMObsDatasetBatchUpdateRequest";
import { LLMObsDatasetCloneRequest } from "../models/LLMObsDatasetCloneRequest";
import { LLMObsDatasetDraftStateResponse } from "../models/LLMObsDatasetDraftStateResponse";
import { LLMObsDatasetExportFormat } from "../models/LLMObsDatasetExportFormat";
import { LLMObsDatasetRecordsListResponse } from "../models/LLMObsDatasetRecordsListResponse";
import { LLMObsDatasetRecordsMutationResponse } from "../models/LLMObsDatasetRecordsMutationResponse";
import { LLMObsDatasetRecordsRequest } from "../models/LLMObsDatasetRecordsRequest";
import { LLMObsDatasetRecordsUpdateRequest } from "../models/LLMObsDatasetRecordsUpdateRequest";
import { LLMObsDatasetRequest } from "../models/LLMObsDatasetRequest";
import { LLMObsDatasetResponse } from "../models/LLMObsDatasetResponse";
import { LLMObsDatasetRestoreVersionRequest } from "../models/LLMObsDatasetRestoreVersionRequest";
import { LLMObsDatasetsResponse } from "../models/LLMObsDatasetsResponse";
import { LLMObsDatasetUpdateRequest } from "../models/LLMObsDatasetUpdateRequest";
import { LLMObsDatasetVersionsResponse } from "../models/LLMObsDatasetVersionsResponse";
import { LLMObsDeleteAnnotationQueueInteractionsRequest } from "../models/LLMObsDeleteAnnotationQueueInteractionsRequest";
import { LLMObsDeleteAnnotationsRequest } from "../models/LLMObsDeleteAnnotationsRequest";
import { LLMObsDeleteAnnotationsResponse } from "../models/LLMObsDeleteAnnotationsResponse";
import { LLMObsDeleteDatasetRecordsRequest } from "../models/LLMObsDeleteDatasetRecordsRequest";
import { LLMObsDeleteDatasetsRequest } from "../models/LLMObsDeleteDatasetsRequest";
import { LLMObsDeletedPromptResponse } from "../models/LLMObsDeletedPromptResponse";
import { LLMObsDeleteExperimentsRequest } from "../models/LLMObsDeleteExperimentsRequest";
import { LLMObsDeleteProjectsRequest } from "../models/LLMObsDeleteProjectsRequest";
import { LLMObsExperimentationAnalyticsRequest } from "../models/LLMObsExperimentationAnalyticsRequest";
import { LLMObsExperimentationAnalyticsResponse } from "../models/LLMObsExperimentationAnalyticsResponse";
import { LLMObsExperimentationSearchRequest } from "../models/LLMObsExperimentationSearchRequest";
import { LLMObsExperimentationSearchResponse } from "../models/LLMObsExperimentationSearchResponse";
import { LLMObsExperimentationSimpleSearchRequest } from "../models/LLMObsExperimentationSimpleSearchRequest";
import { LLMObsExperimentationSimpleSearchResponse } from "../models/LLMObsExperimentationSimpleSearchResponse";
import { LLMObsExperimentEventsRequest } from "../models/LLMObsExperimentEventsRequest";
import { LLMObsExperimentEventsV2Response } from "../models/LLMObsExperimentEventsV2Response";
import { LLMObsExperimentRequest } from "../models/LLMObsExperimentRequest";
import { LLMObsExperimentResponse } from "../models/LLMObsExperimentResponse";
import { LLMObsExperimentSpansResponse } from "../models/LLMObsExperimentSpansResponse";
import { LLMObsExperimentsResponse } from "../models/LLMObsExperimentsResponse";
import { LLMObsExperimentUpdateRequest } from "../models/LLMObsExperimentUpdateRequest";
import { LLMObsIntegrationAccount } from "../models/LLMObsIntegrationAccount";
import { LLMObsIntegrationInferenceRequest } from "../models/LLMObsIntegrationInferenceRequest";
import { LLMObsIntegrationInferenceResponse } from "../models/LLMObsIntegrationInferenceResponse";
import { LLMObsIntegrationModel } from "../models/LLMObsIntegrationModel";
import { LLMObsIntegrationName } from "../models/LLMObsIntegrationName";
import { LLMObsPatternsClusteredPointsResponse } from "../models/LLMObsPatternsClusteredPointsResponse";
import { LLMObsPatternsConfigResponse } from "../models/LLMObsPatternsConfigResponse";
import { LLMObsPatternsConfigsResponse } from "../models/LLMObsPatternsConfigsResponse";
import { LLMObsPatternsConfigUpsertRequest } from "../models/LLMObsPatternsConfigUpsertRequest";
import { LLMObsPatternsRunsResponse } from "../models/LLMObsPatternsRunsResponse";
import { LLMObsPatternsRunStatusResponse } from "../models/LLMObsPatternsRunStatusResponse";
import { LLMObsPatternsTopicsResponse } from "../models/LLMObsPatternsTopicsResponse";
import { LLMObsPatternsTopicsWithClusteredPointsResponse } from "../models/LLMObsPatternsTopicsWithClusteredPointsResponse";
import { LLMObsPatternsTriggerRequest } from "../models/LLMObsPatternsTriggerRequest";
import { LLMObsPatternsTriggerResponse } from "../models/LLMObsPatternsTriggerResponse";
import { LLMObsProjectRequest } from "../models/LLMObsProjectRequest";
import { LLMObsProjectResponse } from "../models/LLMObsProjectResponse";
import { LLMObsProjectsResponse } from "../models/LLMObsProjectsResponse";
import { LLMObsProjectUpdateRequest } from "../models/LLMObsProjectUpdateRequest";
import { LLMObsPromptResponse } from "../models/LLMObsPromptResponse";
import { LLMObsPromptSDKResponse } from "../models/LLMObsPromptSDKResponse";
import { LLMObsPromptsResponse } from "../models/LLMObsPromptsResponse";
import { LLMObsPromptVersionResponse } from "../models/LLMObsPromptVersionResponse";
import { LLMObsPromptVersionsResponse } from "../models/LLMObsPromptVersionsResponse";
import { LLMObsSearchSpansRequest } from "../models/LLMObsSearchSpansRequest";
import { LLMObsSpansResponse } from "../models/LLMObsSpansResponse";
import { LLMObsUpdatePromptRequest } from "../models/LLMObsUpdatePromptRequest";
import { LLMObsUpdatePromptVersionRequest } from "../models/LLMObsUpdatePromptVersionRequest";

export class LLMObservabilityApiRequestFactory extends BaseAPIRequestFactory {
  public async aggregateLLMObsExperimentation(
    body: LLMObsExperimentationAnalyticsRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'aggregateLLMObsExperimentation'");
    if (!_config.unstableOperations["v2.aggregateLLMObsExperimentation"]) {
      throw new Error(
        "Unstable operation 'aggregateLLMObsExperimentation' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "aggregateLLMObsExperimentation");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/experimentation/analytics";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.aggregateLLMObsExperimentation")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "LLMObsExperimentationAnalyticsRequest",
        ""
      ),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async batchUpdateLLMObsDataset(
    projectId: string,
    datasetId: string,
    body: LLMObsDatasetBatchUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'batchUpdateLLMObsDataset'");
    if (!_config.unstableOperations["v2.batchUpdateLLMObsDataset"]) {
      throw new Error(
        "Unstable operation 'batchUpdateLLMObsDataset' is disabled"
      );
    }

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "batchUpdateLLMObsDataset");
    }

    // verify required parameter 'datasetId' is not null or undefined
    if (datasetId === null || datasetId === undefined) {
      throw new RequiredError("datasetId", "batchUpdateLLMObsDataset");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "batchUpdateLLMObsDataset");
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}/batch_update"
        .replace("{project_id}", encodeURIComponent(String(projectId)))
        .replace("{dataset_id}", encodeURIComponent(String(datasetId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.batchUpdateLLMObsDataset")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LLMObsDatasetBatchUpdateRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async cloneLLMObsDataset(
    projectId: string,
    datasetId: string,
    body: LLMObsDatasetCloneRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'cloneLLMObsDataset'");
    if (!_config.unstableOperations["v2.cloneLLMObsDataset"]) {
      throw new Error("Unstable operation 'cloneLLMObsDataset' is disabled");
    }

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "cloneLLMObsDataset");
    }

    // verify required parameter 'datasetId' is not null or undefined
    if (datasetId === null || datasetId === undefined) {
      throw new RequiredError("datasetId", "cloneLLMObsDataset");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "cloneLLMObsDataset");
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}/clone"
        .replace("{project_id}", encodeURIComponent(String(projectId)))
        .replace("{dataset_id}", encodeURIComponent(String(datasetId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.cloneLLMObsDataset")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LLMObsDatasetCloneRequest", ""),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createLLMObsAnnotationQueue'");
    if (!_config.unstableOperations["v2.createLLMObsAnnotationQueue"]) {
      throw new Error(
        "Unstable operation 'createLLMObsAnnotationQueue' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createLLMObsAnnotationQueue");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/annotation-queues";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.createLLMObsAnnotationQueue")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LLMObsAnnotationQueueRequest", ""),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'createLLMObsAnnotationQueueInteractions'"
    );
    if (
      !_config.unstableOperations["v2.createLLMObsAnnotationQueueInteractions"]
    ) {
      throw new Error(
        "Unstable operation 'createLLMObsAnnotationQueueInteractions' is disabled"
      );
    }

    // verify required parameter 'queueId' is not null or undefined
    if (queueId === null || queueId === undefined) {
      throw new RequiredError(
        "queueId",
        "createLLMObsAnnotationQueueInteractions"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "createLLMObsAnnotationQueueInteractions"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/annotation-queues/{queue_id}/interactions".replace(
        "{queue_id}",
        encodeURIComponent(String(queueId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.LLMObservabilityApi.createLLMObsAnnotationQueueInteractions"
      )
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "LLMObsAnnotationQueueInteractionsRequest",
        ""
      ),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createLLMObsDataset'");
    if (!_config.unstableOperations["v2.createLLMObsDataset"]) {
      throw new Error("Unstable operation 'createLLMObsDataset' is disabled");
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
      encodeURIComponent(String(projectId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.createLLMObsDataset")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LLMObsDatasetRequest", ""),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createLLMObsDatasetRecords'");
    if (!_config.unstableOperations["v2.createLLMObsDatasetRecords"]) {
      throw new Error(
        "Unstable operation 'createLLMObsDatasetRecords' is disabled"
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
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.createLLMObsDatasetRecords")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LLMObsDatasetRecordsRequest", ""),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createLLMObsExperiment'");
    if (!_config.unstableOperations["v2.createLLMObsExperiment"]) {
      throw new Error(
        "Unstable operation 'createLLMObsExperiment' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createLLMObsExperiment");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/experiments";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.createLLMObsExperiment")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LLMObsExperimentRequest", ""),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createLLMObsExperimentEvents'");
    if (!_config.unstableOperations["v2.createLLMObsExperimentEvents"]) {
      throw new Error(
        "Unstable operation 'createLLMObsExperimentEvents' is disabled"
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
        encodeURIComponent(String(experimentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.createLLMObsExperimentEvents")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LLMObsExperimentEventsRequest", ""),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createLLMObsIntegrationInference'");
    if (!_config.unstableOperations["v2.createLLMObsIntegrationInference"]) {
      throw new Error(
        "Unstable operation 'createLLMObsIntegrationInference' is disabled"
      );
    }

    // verify required parameter 'integration' is not null or undefined
    if (integration === null || integration === undefined) {
      throw new RequiredError(
        "integration",
        "createLLMObsIntegrationInference"
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
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.createLLMObsIntegrationInference")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LLMObsIntegrationInferenceRequest", ""),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createLLMObsProject'");
    if (!_config.unstableOperations["v2.createLLMObsProject"]) {
      throw new Error("Unstable operation 'createLLMObsProject' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createLLMObsProject");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/projects";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.createLLMObsProject")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LLMObsProjectRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async createLLMObsPrompt(
    body: LLMObsCreatePromptRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createLLMObsPrompt'");
    if (!_config.unstableOperations["v2.createLLMObsPrompt"]) {
      throw new Error("Unstable operation 'createLLMObsPrompt' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createLLMObsPrompt");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/prompts";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.createLLMObsPrompt")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LLMObsCreatePromptRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async createLLMObsPromptVersion(
    promptId: string,
    body: LLMObsCreatePromptVersionRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createLLMObsPromptVersion'");
    if (!_config.unstableOperations["v2.createLLMObsPromptVersion"]) {
      throw new Error(
        "Unstable operation 'createLLMObsPromptVersion' is disabled"
      );
    }

    // verify required parameter 'promptId' is not null or undefined
    if (promptId === null || promptId === undefined) {
      throw new RequiredError("promptId", "createLLMObsPromptVersion");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createLLMObsPromptVersion");
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/prompts/{prompt_id}/versions".replace(
        "{prompt_id}",
        encodeURIComponent(String(promptId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.createLLMObsPromptVersion")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LLMObsCreatePromptVersionRequest", ""),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteLLMObsAnnotationQueue'");
    if (!_config.unstableOperations["v2.deleteLLMObsAnnotationQueue"]) {
      throw new Error(
        "Unstable operation 'deleteLLMObsAnnotationQueue' is disabled"
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
        encodeURIComponent(String(queueId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.deleteLLMObsAnnotationQueue")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'deleteLLMObsAnnotationQueueInteractions'"
    );
    if (
      !_config.unstableOperations["v2.deleteLLMObsAnnotationQueueInteractions"]
    ) {
      throw new Error(
        "Unstable operation 'deleteLLMObsAnnotationQueueInteractions' is disabled"
      );
    }

    // verify required parameter 'queueId' is not null or undefined
    if (queueId === null || queueId === undefined) {
      throw new RequiredError(
        "queueId",
        "deleteLLMObsAnnotationQueueInteractions"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "deleteLLMObsAnnotationQueueInteractions"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/annotation-queues/{queue_id}/interactions/delete".replace(
        "{queue_id}",
        encodeURIComponent(String(queueId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.LLMObservabilityApi.deleteLLMObsAnnotationQueueInteractions"
      )
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "LLMObsDeleteAnnotationQueueInteractionsRequest",
        ""
      ),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteLLMObsAnnotations(
    queueId: string,
    body: LLMObsDeleteAnnotationsRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteLLMObsAnnotations'");
    if (!_config.unstableOperations["v2.deleteLLMObsAnnotations"]) {
      throw new Error(
        "Unstable operation 'deleteLLMObsAnnotations' is disabled"
      );
    }

    // verify required parameter 'queueId' is not null or undefined
    if (queueId === null || queueId === undefined) {
      throw new RequiredError("queueId", "deleteLLMObsAnnotations");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deleteLLMObsAnnotations");
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/annotation-queues/{queue_id}/annotations/delete".replace(
        "{queue_id}",
        encodeURIComponent(String(queueId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.deleteLLMObsAnnotations")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LLMObsDeleteAnnotationsRequest", ""),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteLLMObsCustomEvalConfig'");
    if (!_config.unstableOperations["v2.deleteLLMObsCustomEvalConfig"]) {
      throw new Error(
        "Unstable operation 'deleteLLMObsCustomEvalConfig' is disabled"
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
        encodeURIComponent(String(evalName))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.deleteLLMObsCustomEvalConfig")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteLLMObsData(
    body: LLMObsDataDeletionRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteLLMObsData'");
    if (!_config.unstableOperations["v2.deleteLLMObsData"]) {
      throw new Error("Unstable operation 'deleteLLMObsData' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deleteLLMObsData");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/deletion/data/llmobs";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.deleteLLMObsData")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LLMObsDataDeletionRequest", ""),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteLLMObsDatasetRecords'");
    if (!_config.unstableOperations["v2.deleteLLMObsDatasetRecords"]) {
      throw new Error(
        "Unstable operation 'deleteLLMObsDatasetRecords' is disabled"
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
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.deleteLLMObsDatasetRecords")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LLMObsDeleteDatasetRecordsRequest", ""),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteLLMObsDatasets'");
    if (!_config.unstableOperations["v2.deleteLLMObsDatasets"]) {
      throw new Error("Unstable operation 'deleteLLMObsDatasets' is disabled");
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
        encodeURIComponent(String(projectId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.deleteLLMObsDatasets")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LLMObsDeleteDatasetsRequest", ""),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteLLMObsExperiments'");
    if (!_config.unstableOperations["v2.deleteLLMObsExperiments"]) {
      throw new Error(
        "Unstable operation 'deleteLLMObsExperiments' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deleteLLMObsExperiments");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/experiments/delete";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.deleteLLMObsExperiments")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LLMObsDeleteExperimentsRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteLLMObsPatternsConfig(
    configId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteLLMObsPatternsConfig'");
    if (!_config.unstableOperations["v2.deleteLLMObsPatternsConfig"]) {
      throw new Error(
        "Unstable operation 'deleteLLMObsPatternsConfig' is disabled"
      );
    }

    // verify required parameter 'configId' is not null or undefined
    if (configId === null || configId === undefined) {
      throw new RequiredError("configId", "deleteLLMObsPatternsConfig");
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/topic-discovery-configs/{config_id}".replace(
        "{config_id}",
        encodeURIComponent(String(configId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.deleteLLMObsPatternsConfig")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteLLMObsProjects(
    body: LLMObsDeleteProjectsRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteLLMObsProjects'");
    if (!_config.unstableOperations["v2.deleteLLMObsProjects"]) {
      throw new Error("Unstable operation 'deleteLLMObsProjects' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deleteLLMObsProjects");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/projects/delete";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.deleteLLMObsProjects")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LLMObsDeleteProjectsRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteLLMObsPrompt(
    promptId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteLLMObsPrompt'");
    if (!_config.unstableOperations["v2.deleteLLMObsPrompt"]) {
      throw new Error("Unstable operation 'deleteLLMObsPrompt' is disabled");
    }

    // verify required parameter 'promptId' is not null or undefined
    if (promptId === null || promptId === undefined) {
      throw new RequiredError("promptId", "deleteLLMObsPrompt");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/prompts/{prompt_id}".replace(
      "{prompt_id}",
      encodeURIComponent(String(promptId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.deleteLLMObsPrompt")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async exportLLMObsDataset(
    projectId: string,
    datasetId: string,
    format?: LLMObsDatasetExportFormat,
    version?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'exportLLMObsDataset'");
    if (!_config.unstableOperations["v2.exportLLMObsDataset"]) {
      throw new Error("Unstable operation 'exportLLMObsDataset' is disabled");
    }

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "exportLLMObsDataset");
    }

    // verify required parameter 'datasetId' is not null or undefined
    if (datasetId === null || datasetId === undefined) {
      throw new RequiredError("datasetId", "exportLLMObsDataset");
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}/export"
        .replace("{project_id}", encodeURIComponent(String(projectId)))
        .replace("{dataset_id}", encodeURIComponent(String(datasetId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.exportLLMObsDataset")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "text/csv, application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (format !== undefined) {
      requestContext.setQueryParam(
        "format",
        ObjectSerializer.serialize(format, "LLMObsDatasetExportFormat", ""),
        ""
      );
    }
    if (version !== undefined) {
      requestContext.setQueryParam(
        "version",
        ObjectSerializer.serialize(version, "number", "int64"),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getLLMObsAnnotatedInteractions(
    queueId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getLLMObsAnnotatedInteractions'");
    if (!_config.unstableOperations["v2.getLLMObsAnnotatedInteractions"]) {
      throw new Error(
        "Unstable operation 'getLLMObsAnnotatedInteractions' is disabled"
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
        encodeURIComponent(String(queueId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.getLLMObsAnnotatedInteractions")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'getLLMObsAnnotatedInteractionsByTraceIDs'"
    );
    if (
      !_config.unstableOperations["v2.getLLMObsAnnotatedInteractionsByTraceIDs"]
    ) {
      throw new Error(
        "Unstable operation 'getLLMObsAnnotatedInteractionsByTraceIDs' is disabled"
      );
    }

    // verify required parameter 'contentIds' is not null or undefined
    if (contentIds === null || contentIds === undefined) {
      throw new RequiredError(
        "contentIds",
        "getLLMObsAnnotatedInteractionsByTraceIDs"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/annotated-interactions";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.LLMObservabilityApi.getLLMObsAnnotatedInteractionsByTraceIDs"
      )
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (contentIds !== undefined) {
      requestContext.setQueryParam(
        "contentIds",
        ObjectSerializer.serialize(contentIds, "Array<string>", ""),
        "multi"
      );
    }
    if (offset !== undefined) {
      requestContext.setQueryParam(
        "offset",
        ObjectSerializer.serialize(offset, "number", "int32"),
        ""
      );
    }
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", "int32"),
        ""
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'getLLMObsAnnotationQueueLabelSchema'"
    );
    if (!_config.unstableOperations["v2.getLLMObsAnnotationQueueLabelSchema"]) {
      throw new Error(
        "Unstable operation 'getLLMObsAnnotationQueueLabelSchema' is disabled"
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
        encodeURIComponent(String(queueId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.getLLMObsAnnotationQueueLabelSchema")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getLLMObsCustomEvalConfig(
    evalName: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getLLMObsCustomEvalConfig'");
    if (!_config.unstableOperations["v2.getLLMObsCustomEvalConfig"]) {
      throw new Error(
        "Unstable operation 'getLLMObsCustomEvalConfig' is disabled"
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
        encodeURIComponent(String(evalName))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.getLLMObsCustomEvalConfig")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getLLMObsDatasetDraftState'");
    if (!_config.unstableOperations["v2.getLLMObsDatasetDraftState"]) {
      throw new Error(
        "Unstable operation 'getLLMObsDatasetDraftState' is disabled"
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
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.getLLMObsDatasetDraftState")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getLLMObsPatternsConfig(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getLLMObsPatternsConfig'");
    if (!_config.unstableOperations["v2.getLLMObsPatternsConfig"]) {
      throw new Error(
        "Unstable operation 'getLLMObsPatternsConfig' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/topic-discovery-configs/latest";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.getLLMObsPatternsConfig")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getLLMObsPatternsRunStatus(
    configId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getLLMObsPatternsRunStatus'");
    if (!_config.unstableOperations["v2.getLLMObsPatternsRunStatus"]) {
      throw new Error(
        "Unstable operation 'getLLMObsPatternsRunStatus' is disabled"
      );
    }

    // verify required parameter 'configId' is not null or undefined
    if (configId === null || configId === undefined) {
      throw new RequiredError("configId", "getLLMObsPatternsRunStatus");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/topic-discovery-runs/status";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.getLLMObsPatternsRunStatus")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (configId !== undefined) {
      requestContext.setQueryParam(
        "config_id",
        ObjectSerializer.serialize(configId, "string", ""),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getLLMObsPrompt(
    promptId: string,
    label?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getLLMObsPrompt'");
    if (!_config.unstableOperations["v2.getLLMObsPrompt"]) {
      throw new Error("Unstable operation 'getLLMObsPrompt' is disabled");
    }

    // verify required parameter 'promptId' is not null or undefined
    if (promptId === null || promptId === undefined) {
      throw new RequiredError("promptId", "getLLMObsPrompt");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/prompts/{prompt_id}".replace(
      "{prompt_id}",
      encodeURIComponent(String(promptId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.getLLMObsPrompt")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (label !== undefined) {
      requestContext.setQueryParam(
        "label",
        ObjectSerializer.serialize(label, "string", ""),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getLLMObsPromptVersion(
    promptId: string,
    version: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getLLMObsPromptVersion'");
    if (!_config.unstableOperations["v2.getLLMObsPromptVersion"]) {
      throw new Error(
        "Unstable operation 'getLLMObsPromptVersion' is disabled"
      );
    }

    // verify required parameter 'promptId' is not null or undefined
    if (promptId === null || promptId === undefined) {
      throw new RequiredError("promptId", "getLLMObsPromptVersion");
    }

    // verify required parameter 'version' is not null or undefined
    if (version === null || version === undefined) {
      throw new RequiredError("version", "getLLMObsPromptVersion");
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/prompts/{prompt_id}/versions/{version}"
        .replace("{prompt_id}", encodeURIComponent(String(promptId)))
        .replace("{version}", encodeURIComponent(String(version)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.getLLMObsPromptVersion")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listLLMObsAnnotationQueues'");
    if (!_config.unstableOperations["v2.listLLMObsAnnotationQueues"]) {
      throw new Error(
        "Unstable operation 'listLLMObsAnnotationQueues' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/annotation-queues";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.listLLMObsAnnotationQueues")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (projectId !== undefined) {
      requestContext.setQueryParam(
        "projectId",
        ObjectSerializer.serialize(projectId, "string", ""),
        ""
      );
    }
    if (queueIds !== undefined) {
      requestContext.setQueryParam(
        "queueIds",
        ObjectSerializer.serialize(queueIds, "Array<string>", ""),
        "multi"
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listLLMObsDatasetRecords'");
    if (!_config.unstableOperations["v2.listLLMObsDatasetRecords"]) {
      throw new Error(
        "Unstable operation 'listLLMObsDatasetRecords' is disabled"
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
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.listLLMObsDatasetRecords")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filterVersion !== undefined) {
      requestContext.setQueryParam(
        "filter[version]",
        ObjectSerializer.serialize(filterVersion, "number", "int64"),
        ""
      );
    }
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        ObjectSerializer.serialize(pageCursor, "string", ""),
        ""
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        ObjectSerializer.serialize(pageLimit, "number", "int64"),
        ""
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listLLMObsDatasets'");
    if (!_config.unstableOperations["v2.listLLMObsDatasets"]) {
      throw new Error("Unstable operation 'listLLMObsDatasets' is disabled");
    }

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "listLLMObsDatasets");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/{project_id}/datasets".replace(
      "{project_id}",
      encodeURIComponent(String(projectId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.listLLMObsDatasets")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filterName !== undefined) {
      requestContext.setQueryParam(
        "filter[name]",
        ObjectSerializer.serialize(filterName, "string", ""),
        ""
      );
    }
    if (filterId !== undefined) {
      requestContext.setQueryParam(
        "filter[id]",
        ObjectSerializer.serialize(filterId, "string", ""),
        ""
      );
    }
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        ObjectSerializer.serialize(pageCursor, "string", ""),
        ""
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        ObjectSerializer.serialize(pageLimit, "number", "int64"),
        ""
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listLLMObsDatasetVersions'");
    if (!_config.unstableOperations["v2.listLLMObsDatasetVersions"]) {
      throw new Error(
        "Unstable operation 'listLLMObsDatasetVersions' is disabled"
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
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.listLLMObsDatasetVersions")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listLLMObsExperimentEvents'");
    if (!_config.unstableOperations["v2.listLLMObsExperimentEvents"]) {
      throw new Error(
        "Unstable operation 'listLLMObsExperimentEvents' is disabled"
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
        encodeURIComponent(String(experimentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.listLLMObsExperimentEvents")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        ObjectSerializer.serialize(pageLimit, "number", "int64"),
        ""
      );
    }
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        ObjectSerializer.serialize(pageCursor, "string", ""),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listLLMObsExperimentEventsV1(
    experimentId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listLLMObsExperimentEventsV1'");
    if (!_config.unstableOperations["v2.listLLMObsExperimentEventsV1"]) {
      throw new Error(
        "Unstable operation 'listLLMObsExperimentEventsV1' is disabled"
      );
    }

    // verify required parameter 'experimentId' is not null or undefined
    if (experimentId === null || experimentId === undefined) {
      throw new RequiredError("experimentId", "listLLMObsExperimentEventsV1");
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/experiments/{experiment_id}/events".replace(
        "{experiment_id}",
        encodeURIComponent(String(experimentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.listLLMObsExperimentEventsV1")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listLLMObsExperimentEventsV2(
    experimentId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listLLMObsExperimentEventsV2'");
    if (!_config.unstableOperations["v2.listLLMObsExperimentEventsV2"]) {
      throw new Error(
        "Unstable operation 'listLLMObsExperimentEventsV2' is disabled"
      );
    }

    // verify required parameter 'experimentId' is not null or undefined
    if (experimentId === null || experimentId === undefined) {
      throw new RequiredError("experimentId", "listLLMObsExperimentEventsV2");
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v2/experiments/{experiment_id}/events".replace(
        "{experiment_id}",
        encodeURIComponent(String(experimentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.listLLMObsExperimentEventsV2")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    filterName?: string,
    filterExperiment?: string,
    filterMetadata?: string,
    filterParentExperimentId?: string,
    filterIsDeleted?: boolean,
    includeUserData?: boolean,
    includeDatasetNames?: boolean,
    pageCursor?: string,
    pageLimit?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listLLMObsExperiments'");
    if (!_config.unstableOperations["v2.listLLMObsExperiments"]) {
      throw new Error("Unstable operation 'listLLMObsExperiments' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/experiments";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.listLLMObsExperiments")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filterProjectId !== undefined) {
      requestContext.setQueryParam(
        "filter[project_id]",
        ObjectSerializer.serialize(filterProjectId, "string", ""),
        ""
      );
    }
    if (filterDatasetId !== undefined) {
      requestContext.setQueryParam(
        "filter[dataset_id]",
        ObjectSerializer.serialize(filterDatasetId, "string", ""),
        ""
      );
    }
    if (filterId !== undefined) {
      requestContext.setQueryParam(
        "filter[id]",
        ObjectSerializer.serialize(filterId, "string", ""),
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
    if (filterExperiment !== undefined) {
      requestContext.setQueryParam(
        "filter[experiment]",
        ObjectSerializer.serialize(filterExperiment, "string", ""),
        ""
      );
    }
    if (filterMetadata !== undefined) {
      requestContext.setQueryParam(
        "filter[metadata]",
        ObjectSerializer.serialize(filterMetadata, "string", ""),
        ""
      );
    }
    if (filterParentExperimentId !== undefined) {
      requestContext.setQueryParam(
        "filter[parent_experiment_id]",
        ObjectSerializer.serialize(filterParentExperimentId, "string", ""),
        ""
      );
    }
    if (filterIsDeleted !== undefined) {
      requestContext.setQueryParam(
        "filter[is_deleted]",
        ObjectSerializer.serialize(filterIsDeleted, "boolean", ""),
        ""
      );
    }
    if (includeUserData !== undefined) {
      requestContext.setQueryParam(
        "include[user_data]",
        ObjectSerializer.serialize(includeUserData, "boolean", ""),
        ""
      );
    }
    if (includeDatasetNames !== undefined) {
      requestContext.setQueryParam(
        "include[dataset_names]",
        ObjectSerializer.serialize(includeDatasetNames, "boolean", ""),
        ""
      );
    }
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        ObjectSerializer.serialize(pageCursor, "string", ""),
        ""
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        ObjectSerializer.serialize(pageLimit, "number", "int64"),
        ""
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listLLMObsIntegrationAccounts'");
    if (!_config.unstableOperations["v2.listLLMObsIntegrationAccounts"]) {
      throw new Error(
        "Unstable operation 'listLLMObsIntegrationAccounts' is disabled"
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
        encodeURIComponent(String(integration))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.listLLMObsIntegrationAccounts")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listLLMObsIntegrationModels'");
    if (!_config.unstableOperations["v2.listLLMObsIntegrationModels"]) {
      throw new Error(
        "Unstable operation 'listLLMObsIntegrationModels' is disabled"
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
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.listLLMObsIntegrationModels")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listLLMObsPatternsClusteredPoints(
    topicId: string,
    pageSize?: number,
    pageToken?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listLLMObsPatternsClusteredPoints'");
    if (!_config.unstableOperations["v2.listLLMObsPatternsClusteredPoints"]) {
      throw new Error(
        "Unstable operation 'listLLMObsPatternsClusteredPoints' is disabled"
      );
    }

    // verify required parameter 'topicId' is not null or undefined
    if (topicId === null || topicId === undefined) {
      throw new RequiredError("topicId", "listLLMObsPatternsClusteredPoints");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/topic-discovery-clustered-points";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.listLLMObsPatternsClusteredPoints")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (topicId !== undefined) {
      requestContext.setQueryParam(
        "topic_id",
        ObjectSerializer.serialize(topicId, "string", ""),
        ""
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page_size",
        ObjectSerializer.serialize(pageSize, "number", "int64"),
        ""
      );
    }
    if (pageToken !== undefined) {
      requestContext.setQueryParam(
        "page_token",
        ObjectSerializer.serialize(pageToken, "string", ""),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listLLMObsPatternsConfigs(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listLLMObsPatternsConfigs'");
    if (!_config.unstableOperations["v2.listLLMObsPatternsConfigs"]) {
      throw new Error(
        "Unstable operation 'listLLMObsPatternsConfigs' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/topic-discovery-configs";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.listLLMObsPatternsConfigs")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listLLMObsPatternsRuns(
    configId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listLLMObsPatternsRuns'");
    if (!_config.unstableOperations["v2.listLLMObsPatternsRuns"]) {
      throw new Error(
        "Unstable operation 'listLLMObsPatternsRuns' is disabled"
      );
    }

    // verify required parameter 'configId' is not null or undefined
    if (configId === null || configId === undefined) {
      throw new RequiredError("configId", "listLLMObsPatternsRuns");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/topic-discovery-runs";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.listLLMObsPatternsRuns")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (configId !== undefined) {
      requestContext.setQueryParam(
        "config_id",
        ObjectSerializer.serialize(configId, "string", ""),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listLLMObsPatternsTopics(
    configId: string,
    runId?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listLLMObsPatternsTopics'");
    if (!_config.unstableOperations["v2.listLLMObsPatternsTopics"]) {
      throw new Error(
        "Unstable operation 'listLLMObsPatternsTopics' is disabled"
      );
    }

    // verify required parameter 'configId' is not null or undefined
    if (configId === null || configId === undefined) {
      throw new RequiredError("configId", "listLLMObsPatternsTopics");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/topic-discovery-topics";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.listLLMObsPatternsTopics")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (configId !== undefined) {
      requestContext.setQueryParam(
        "config_id",
        ObjectSerializer.serialize(configId, "string", ""),
        ""
      );
    }
    if (runId !== undefined) {
      requestContext.setQueryParam(
        "run_id",
        ObjectSerializer.serialize(runId, "string", ""),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listLLMObsPatternsTopicsWithClusteredPoints(
    configId: string,
    runId?: string,
    includeMetrics?: boolean,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'listLLMObsPatternsTopicsWithClusteredPoints'"
    );
    if (
      !_config.unstableOperations[
        "v2.listLLMObsPatternsTopicsWithClusteredPoints"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listLLMObsPatternsTopicsWithClusteredPoints' is disabled"
      );
    }

    // verify required parameter 'configId' is not null or undefined
    if (configId === null || configId === undefined) {
      throw new RequiredError(
        "configId",
        "listLLMObsPatternsTopicsWithClusteredPoints"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/topic-discovery-topics/with-cluster-points";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.LLMObservabilityApi.listLLMObsPatternsTopicsWithClusteredPoints"
      )
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (configId !== undefined) {
      requestContext.setQueryParam(
        "config_id",
        ObjectSerializer.serialize(configId, "string", ""),
        ""
      );
    }
    if (runId !== undefined) {
      requestContext.setQueryParam(
        "run_id",
        ObjectSerializer.serialize(runId, "string", ""),
        ""
      );
    }
    if (includeMetrics !== undefined) {
      requestContext.setQueryParam(
        "include_metrics",
        ObjectSerializer.serialize(includeMetrics, "boolean", ""),
        ""
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listLLMObsProjects'");
    if (!_config.unstableOperations["v2.listLLMObsProjects"]) {
      throw new Error("Unstable operation 'listLLMObsProjects' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/projects";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.listLLMObsProjects")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filterId !== undefined) {
      requestContext.setQueryParam(
        "filter[id]",
        ObjectSerializer.serialize(filterId, "string", ""),
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
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        ObjectSerializer.serialize(pageCursor, "string", ""),
        ""
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        ObjectSerializer.serialize(pageLimit, "number", "int64"),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listLLMObsPrompts(
    filterPromptId?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listLLMObsPrompts'");
    if (!_config.unstableOperations["v2.listLLMObsPrompts"]) {
      throw new Error("Unstable operation 'listLLMObsPrompts' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/prompts";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.listLLMObsPrompts")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filterPromptId !== undefined) {
      requestContext.setQueryParam(
        "filter[prompt_id]",
        ObjectSerializer.serialize(filterPromptId, "string", ""),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listLLMObsPromptVersions(
    promptId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listLLMObsPromptVersions'");
    if (!_config.unstableOperations["v2.listLLMObsPromptVersions"]) {
      throw new Error(
        "Unstable operation 'listLLMObsPromptVersions' is disabled"
      );
    }

    // verify required parameter 'promptId' is not null or undefined
    if (promptId === null || promptId === undefined) {
      throw new RequiredError("promptId", "listLLMObsPromptVersions");
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/prompts/{prompt_id}/versions".replace(
        "{prompt_id}",
        encodeURIComponent(String(promptId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.listLLMObsPromptVersions")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listLLMObsSpans'");
    if (!_config.unstableOperations["v2.listLLMObsSpans"]) {
      throw new Error("Unstable operation 'listLLMObsSpans' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/spans/events";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.listLLMObsSpans")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filterFrom !== undefined) {
      requestContext.setQueryParam(
        "filter[from]",
        ObjectSerializer.serialize(filterFrom, "string", ""),
        ""
      );
    }
    if (filterTo !== undefined) {
      requestContext.setQueryParam(
        "filter[to]",
        ObjectSerializer.serialize(filterTo, "string", ""),
        ""
      );
    }
    if (filterQuery !== undefined) {
      requestContext.setQueryParam(
        "filter[query]",
        ObjectSerializer.serialize(filterQuery, "string", ""),
        ""
      );
    }
    if (filterSpanId !== undefined) {
      requestContext.setQueryParam(
        "filter[span_id]",
        ObjectSerializer.serialize(filterSpanId, "string", ""),
        ""
      );
    }
    if (filterTraceId !== undefined) {
      requestContext.setQueryParam(
        "filter[trace_id]",
        ObjectSerializer.serialize(filterTraceId, "string", ""),
        ""
      );
    }
    if (filterSpanKind !== undefined) {
      requestContext.setQueryParam(
        "filter[span_kind]",
        ObjectSerializer.serialize(filterSpanKind, "string", ""),
        ""
      );
    }
    if (filterSpanName !== undefined) {
      requestContext.setQueryParam(
        "filter[span_name]",
        ObjectSerializer.serialize(filterSpanName, "string", ""),
        ""
      );
    }
    if (filterMlApp !== undefined) {
      requestContext.setQueryParam(
        "filter[ml_app]",
        ObjectSerializer.serialize(filterMlApp, "string", ""),
        ""
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        ObjectSerializer.serialize(pageLimit, "number", "int64"),
        ""
      );
    }
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        ObjectSerializer.serialize(pageCursor, "string", ""),
        ""
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "string", ""),
        ""
      );
    }
    if (includeAttachments !== undefined) {
      requestContext.setQueryParam(
        "include_attachments",
        ObjectSerializer.serialize(includeAttachments, "boolean", ""),
        ""
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'lockLLMObsDatasetDraftState'");
    if (!_config.unstableOperations["v2.lockLLMObsDatasetDraftState"]) {
      throw new Error(
        "Unstable operation 'lockLLMObsDatasetDraftState' is disabled"
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
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.lockLLMObsDatasetDraftState")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async restoreLLMObsDatasetVersion(
    projectId: string,
    datasetId: string,
    body: LLMObsDatasetRestoreVersionRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'restoreLLMObsDatasetVersion'");
    if (!_config.unstableOperations["v2.restoreLLMObsDatasetVersion"]) {
      throw new Error(
        "Unstable operation 'restoreLLMObsDatasetVersion' is disabled"
      );
    }

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "restoreLLMObsDatasetVersion");
    }

    // verify required parameter 'datasetId' is not null or undefined
    if (datasetId === null || datasetId === undefined) {
      throw new RequiredError("datasetId", "restoreLLMObsDatasetVersion");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "restoreLLMObsDatasetVersion");
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}/restore"
        .replace("{project_id}", encodeURIComponent(String(projectId)))
        .replace("{dataset_id}", encodeURIComponent(String(datasetId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.restoreLLMObsDatasetVersion")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "LLMObsDatasetRestoreVersionRequest",
        ""
      ),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async searchLLMObsExperimentation(
    body: LLMObsExperimentationSearchRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'searchLLMObsExperimentation'");
    if (!_config.unstableOperations["v2.searchLLMObsExperimentation"]) {
      throw new Error(
        "Unstable operation 'searchLLMObsExperimentation' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "searchLLMObsExperimentation");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/experimentation/search";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.searchLLMObsExperimentation")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "LLMObsExperimentationSearchRequest",
        ""
      ),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'searchLLMObsSpans'");
    if (!_config.unstableOperations["v2.searchLLMObsSpans"]) {
      throw new Error("Unstable operation 'searchLLMObsSpans' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "searchLLMObsSpans");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/spans/events/search";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.searchLLMObsSpans")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LLMObsSearchSpansRequest", ""),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'simpleSearchLLMObsExperimentation'");
    if (!_config.unstableOperations["v2.simpleSearchLLMObsExperimentation"]) {
      throw new Error(
        "Unstable operation 'simpleSearchLLMObsExperimentation' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "simpleSearchLLMObsExperimentation");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/experimentation/simple-search";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.simpleSearchLLMObsExperimentation")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "LLMObsExperimentationSimpleSearchRequest",
        ""
      ),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async triggerLLMObsPatterns(
    body: LLMObsPatternsTriggerRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'triggerLLMObsPatterns'");
    if (!_config.unstableOperations["v2.triggerLLMObsPatterns"]) {
      throw new Error("Unstable operation 'triggerLLMObsPatterns' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "triggerLLMObsPatterns");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/topic-discovery-runs";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.triggerLLMObsPatterns")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LLMObsPatternsTriggerRequest", ""),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'unlockLLMObsDatasetDraftState'");
    if (!_config.unstableOperations["v2.unlockLLMObsDatasetDraftState"]) {
      throw new Error(
        "Unstable operation 'unlockLLMObsDatasetDraftState' is disabled"
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
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.unlockLLMObsDatasetDraftState")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateLLMObsAnnotationQueue'");
    if (!_config.unstableOperations["v2.updateLLMObsAnnotationQueue"]) {
      throw new Error(
        "Unstable operation 'updateLLMObsAnnotationQueue' is disabled"
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
        encodeURIComponent(String(queueId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.updateLLMObsAnnotationQueue")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "LLMObsAnnotationQueueUpdateRequest",
        ""
      ),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'updateLLMObsAnnotationQueueLabelSchema'"
    );
    if (
      !_config.unstableOperations["v2.updateLLMObsAnnotationQueueLabelSchema"]
    ) {
      throw new Error(
        "Unstable operation 'updateLLMObsAnnotationQueueLabelSchema' is disabled"
      );
    }

    // verify required parameter 'queueId' is not null or undefined
    if (queueId === null || queueId === undefined) {
      throw new RequiredError(
        "queueId",
        "updateLLMObsAnnotationQueueLabelSchema"
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
        encodeURIComponent(String(queueId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.LLMObservabilityApi.updateLLMObsAnnotationQueueLabelSchema"
      )
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "LLMObsAnnotationQueueLabelSchemaUpdateRequest",
        ""
      ),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateLLMObsCustomEvalConfig'");
    if (!_config.unstableOperations["v2.updateLLMObsCustomEvalConfig"]) {
      throw new Error(
        "Unstable operation 'updateLLMObsCustomEvalConfig' is disabled"
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
        encodeURIComponent(String(evalName))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.updateLLMObsCustomEvalConfig")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "LLMObsCustomEvalConfigUpdateRequest",
        ""
      ),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateLLMObsDataset'");
    if (!_config.unstableOperations["v2.updateLLMObsDataset"]) {
      throw new Error("Unstable operation 'updateLLMObsDataset' is disabled");
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
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.updateLLMObsDataset")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LLMObsDatasetUpdateRequest", ""),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateLLMObsDatasetRecords'");
    if (!_config.unstableOperations["v2.updateLLMObsDatasetRecords"]) {
      throw new Error(
        "Unstable operation 'updateLLMObsDatasetRecords' is disabled"
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
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.updateLLMObsDatasetRecords")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LLMObsDatasetRecordsUpdateRequest", ""),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateLLMObsExperiment'");
    if (!_config.unstableOperations["v2.updateLLMObsExperiment"]) {
      throw new Error(
        "Unstable operation 'updateLLMObsExperiment' is disabled"
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
        encodeURIComponent(String(experimentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.updateLLMObsExperiment")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LLMObsExperimentUpdateRequest", ""),
      contentType
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateLLMObsProject'");
    if (!_config.unstableOperations["v2.updateLLMObsProject"]) {
      throw new Error("Unstable operation 'updateLLMObsProject' is disabled");
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
      encodeURIComponent(String(projectId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.updateLLMObsProject")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LLMObsProjectUpdateRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateLLMObsPrompt(
    promptId: string,
    body: LLMObsUpdatePromptRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateLLMObsPrompt'");
    if (!_config.unstableOperations["v2.updateLLMObsPrompt"]) {
      throw new Error("Unstable operation 'updateLLMObsPrompt' is disabled");
    }

    // verify required parameter 'promptId' is not null or undefined
    if (promptId === null || promptId === undefined) {
      throw new RequiredError("promptId", "updateLLMObsPrompt");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateLLMObsPrompt");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/prompts/{prompt_id}".replace(
      "{prompt_id}",
      encodeURIComponent(String(promptId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.updateLLMObsPrompt")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LLMObsUpdatePromptRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateLLMObsPromptVersion(
    promptId: string,
    version: number,
    body: LLMObsUpdatePromptVersionRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateLLMObsPromptVersion'");
    if (!_config.unstableOperations["v2.updateLLMObsPromptVersion"]) {
      throw new Error(
        "Unstable operation 'updateLLMObsPromptVersion' is disabled"
      );
    }

    // verify required parameter 'promptId' is not null or undefined
    if (promptId === null || promptId === undefined) {
      throw new RequiredError("promptId", "updateLLMObsPromptVersion");
    }

    // verify required parameter 'version' is not null or undefined
    if (version === null || version === undefined) {
      throw new RequiredError("version", "updateLLMObsPromptVersion");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateLLMObsPromptVersion");
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/prompts/{prompt_id}/versions/{version}"
        .replace("{prompt_id}", encodeURIComponent(String(promptId)))
        .replace("{version}", encodeURIComponent(String(version)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.updateLLMObsPromptVersion")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LLMObsUpdatePromptVersionRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async uploadLLMObsDatasetRecordsFile(
    projectId: string,
    datasetId: string,
    deduplicate?: boolean,
    overwrite?: boolean,
    tags?: Array<string>,
    includeUserData?: boolean,
    file?: HttpFile,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'uploadLLMObsDatasetRecordsFile'");
    if (!_config.unstableOperations["v2.uploadLLMObsDatasetRecordsFile"]) {
      throw new Error(
        "Unstable operation 'uploadLLMObsDatasetRecordsFile' is disabled"
      );
    }

    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new RequiredError("projectId", "uploadLLMObsDatasetRecordsFile");
    }

    // verify required parameter 'datasetId' is not null or undefined
    if (datasetId === null || datasetId === undefined) {
      throw new RequiredError("datasetId", "uploadLLMObsDatasetRecordsFile");
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v2/{project_id}/datasets/{dataset_id}/records/upload"
        .replace("{project_id}", encodeURIComponent(String(projectId)))
        .replace("{dataset_id}", encodeURIComponent(String(datasetId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.uploadLLMObsDatasetRecordsFile")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (deduplicate !== undefined) {
      requestContext.setQueryParam(
        "deduplicate",
        ObjectSerializer.serialize(deduplicate, "boolean", ""),
        ""
      );
    }
    if (overwrite !== undefined) {
      requestContext.setQueryParam(
        "overwrite",
        ObjectSerializer.serialize(overwrite, "boolean", ""),
        ""
      );
    }
    if (tags !== undefined) {
      requestContext.setQueryParam(
        "tags",
        ObjectSerializer.serialize(tags, "Array<string>", ""),
        "multi"
      );
    }
    if (includeUserData !== undefined) {
      requestContext.setQueryParam(
        "include[user_data]",
        ObjectSerializer.serialize(includeUserData, "boolean", ""),
        ""
      );
    }

    // Form Params
    const localVarFormParams = new FormData();
    if (file !== undefined) {
      // TODO: replace .append with .set
      localVarFormParams.append("file", file.data, file.name);
    }
    requestContext.setBody(localVarFormParams);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async upsertLLMObsAnnotations(
    queueId: string,
    body: LLMObsAnnotationsRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'upsertLLMObsAnnotations'");
    if (!_config.unstableOperations["v2.upsertLLMObsAnnotations"]) {
      throw new Error(
        "Unstable operation 'upsertLLMObsAnnotations' is disabled"
      );
    }

    // verify required parameter 'queueId' is not null or undefined
    if (queueId === null || queueId === undefined) {
      throw new RequiredError("queueId", "upsertLLMObsAnnotations");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "upsertLLMObsAnnotations");
    }

    // Path Params
    const localVarPath =
      "/api/v2/llm-obs/v1/annotation-queues/{queue_id}/annotations".replace(
        "{queue_id}",
        encodeURIComponent(String(queueId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.upsertLLMObsAnnotations")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LLMObsAnnotationsRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async upsertLLMObsPatternsConfig(
    body: LLMObsPatternsConfigUpsertRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'upsertLLMObsPatternsConfig'");
    if (!_config.unstableOperations["v2.upsertLLMObsPatternsConfig"]) {
      throw new Error(
        "Unstable operation 'upsertLLMObsPatternsConfig' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "upsertLLMObsPatternsConfig");
    }

    // Path Params
    const localVarPath = "/api/v2/llm-obs/v1/topic-discovery-configs";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LLMObservabilityApi.upsertLLMObsPatternsConfig")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LLMObsPatternsConfigUpsertRequest", ""),
      contentType
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
    response: ResponseContext
  ): Promise<LLMObsExperimentationAnalyticsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsExperimentationAnalyticsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsExperimentationAnalyticsResponse"
        ) as LLMObsExperimentationAnalyticsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsExperimentationAnalyticsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsExperimentationAnalyticsResponse",
          ""
        ) as LLMObsExperimentationAnalyticsResponse;
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
   * @params response Response returned by the server for a request to batchUpdateLLMObsDataset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async batchUpdateLLMObsDataset(
    response: ResponseContext
  ): Promise<LLMObsDatasetRecordsMutationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsDatasetRecordsMutationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsDatasetRecordsMutationResponse"
        ) as LLMObsDatasetRecordsMutationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 413 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsDatasetRecordsMutationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsDatasetRecordsMutationResponse",
          ""
        ) as LLMObsDatasetRecordsMutationResponse;
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
   * @params response Response returned by the server for a request to cloneLLMObsDataset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async cloneLLMObsDataset(
    response: ResponseContext
  ): Promise<LLMObsDatasetResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsDatasetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsDatasetResponse"
      ) as LLMObsDatasetResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsDatasetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsDatasetResponse",
        ""
      ) as LLMObsDatasetResponse;
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
   * @params response Response returned by the server for a request to createLLMObsAnnotationQueue
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createLLMObsAnnotationQueue(
    response: ResponseContext
  ): Promise<LLMObsAnnotationQueueResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: LLMObsAnnotationQueueResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsAnnotationQueueResponse"
      ) as LLMObsAnnotationQueueResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsAnnotationQueueResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsAnnotationQueueResponse",
        ""
      ) as LLMObsAnnotationQueueResponse;
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
   * @params response Response returned by the server for a request to createLLMObsAnnotationQueueInteractions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createLLMObsAnnotationQueueInteractions(
    response: ResponseContext
  ): Promise<LLMObsAnnotationQueueInteractionsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: LLMObsAnnotationQueueInteractionsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsAnnotationQueueInteractionsResponse"
        ) as LLMObsAnnotationQueueInteractionsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsAnnotationQueueInteractionsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsAnnotationQueueInteractionsResponse",
          ""
        ) as LLMObsAnnotationQueueInteractionsResponse;
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
   * @params response Response returned by the server for a request to createLLMObsDataset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createLLMObsDataset(
    response: ResponseContext
  ): Promise<LLMObsDatasetResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200 || response.httpStatusCode === 201) {
      const body: LLMObsDatasetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsDatasetResponse"
      ) as LLMObsDatasetResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsDatasetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsDatasetResponse",
        ""
      ) as LLMObsDatasetResponse;
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
   * @params response Response returned by the server for a request to createLLMObsDatasetRecords
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createLLMObsDatasetRecords(
    response: ResponseContext
  ): Promise<LLMObsDatasetRecordsMutationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200 || response.httpStatusCode === 201) {
      const body: LLMObsDatasetRecordsMutationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsDatasetRecordsMutationResponse"
        ) as LLMObsDatasetRecordsMutationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsDatasetRecordsMutationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsDatasetRecordsMutationResponse",
          ""
        ) as LLMObsDatasetRecordsMutationResponse;
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
   * @params response Response returned by the server for a request to createLLMObsExperiment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createLLMObsExperiment(
    response: ResponseContext
  ): Promise<LLMObsExperimentResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200 || response.httpStatusCode === 201) {
      const body: LLMObsExperimentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsExperimentResponse"
      ) as LLMObsExperimentResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsExperimentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsExperimentResponse",
        ""
      ) as LLMObsExperimentResponse;
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
   * @params response Response returned by the server for a request to createLLMObsExperimentEvents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createLLMObsExperimentEvents(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 202) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
   * @params response Response returned by the server for a request to createLLMObsIntegrationInference
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createLLMObsIntegrationInference(
    response: ResponseContext
  ): Promise<LLMObsIntegrationInferenceResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsIntegrationInferenceResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsIntegrationInferenceResponse"
        ) as LLMObsIntegrationInferenceResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsIntegrationInferenceResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsIntegrationInferenceResponse",
          ""
        ) as LLMObsIntegrationInferenceResponse;
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
   * @params response Response returned by the server for a request to createLLMObsProject
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createLLMObsProject(
    response: ResponseContext
  ): Promise<LLMObsProjectResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200 || response.httpStatusCode === 201) {
      const body: LLMObsProjectResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsProjectResponse"
      ) as LLMObsProjectResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsProjectResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsProjectResponse",
        ""
      ) as LLMObsProjectResponse;
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
   * @params response Response returned by the server for a request to createLLMObsPrompt
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createLLMObsPrompt(
    response: ResponseContext
  ): Promise<LLMObsPromptResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsPromptResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsPromptResponse"
      ) as LLMObsPromptResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsPromptResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsPromptResponse",
        ""
      ) as LLMObsPromptResponse;
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
   * @params response Response returned by the server for a request to createLLMObsPromptVersion
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createLLMObsPromptVersion(
    response: ResponseContext
  ): Promise<LLMObsPromptVersionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsPromptVersionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsPromptVersionResponse"
      ) as LLMObsPromptVersionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsPromptVersionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsPromptVersionResponse",
        ""
      ) as LLMObsPromptVersionResponse;
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
   * @params response Response returned by the server for a request to deleteLLMObsAnnotationQueue
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteLLMObsAnnotationQueue(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
   * @params response Response returned by the server for a request to deleteLLMObsAnnotationQueueInteractions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteLLMObsAnnotationQueueInteractions(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
   * @params response Response returned by the server for a request to deleteLLMObsAnnotations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteLLMObsAnnotations(
    response: ResponseContext
  ): Promise<LLMObsDeleteAnnotationsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsDeleteAnnotationsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsDeleteAnnotationsResponse"
        ) as LLMObsDeleteAnnotationsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsDeleteAnnotationsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsDeleteAnnotationsResponse",
          ""
        ) as LLMObsDeleteAnnotationsResponse;
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
   * @params response Response returned by the server for a request to deleteLLMObsCustomEvalConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteLLMObsCustomEvalConfig(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
   * @params response Response returned by the server for a request to deleteLLMObsData
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteLLMObsData(
    response: ResponseContext
  ): Promise<LLMObsDataDeletionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 202) {
      const body: LLMObsDataDeletionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsDataDeletionResponse"
      ) as LLMObsDataDeletionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsDataDeletionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsDataDeletionResponse",
        ""
      ) as LLMObsDataDeletionResponse;
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
   * @params response Response returned by the server for a request to deleteLLMObsDatasetRecords
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteLLMObsDatasetRecords(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
   * @params response Response returned by the server for a request to deleteLLMObsDatasets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteLLMObsDatasets(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
   * @params response Response returned by the server for a request to deleteLLMObsExperiments
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteLLMObsExperiments(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
   * @params response Response returned by the server for a request to deleteLLMObsPatternsConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteLLMObsPatternsConfig(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
   * @params response Response returned by the server for a request to deleteLLMObsProjects
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteLLMObsProjects(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
   * @params response Response returned by the server for a request to deleteLLMObsPrompt
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteLLMObsPrompt(
    response: ResponseContext
  ): Promise<LLMObsDeletedPromptResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsDeletedPromptResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsDeletedPromptResponse"
      ) as LLMObsDeletedPromptResponse;
      return body;
    }
    if (
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsDeletedPromptResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsDeletedPromptResponse",
        ""
      ) as LLMObsDeletedPromptResponse;
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
   * @params response Response returned by the server for a request to exportLLMObsDataset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async exportLLMObsDataset(response: ResponseContext): Promise<string> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: string = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "string"
      ) as string;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: string = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "string",
        ""
      ) as string;
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
   * @params response Response returned by the server for a request to getLLMObsAnnotatedInteractions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getLLMObsAnnotatedInteractions(
    response: ResponseContext
  ): Promise<LLMObsAnnotatedInteractionsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsAnnotatedInteractionsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsAnnotatedInteractionsResponse"
        ) as LLMObsAnnotatedInteractionsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsAnnotatedInteractionsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsAnnotatedInteractionsResponse",
          ""
        ) as LLMObsAnnotatedInteractionsResponse;
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
   * @params response Response returned by the server for a request to getLLMObsAnnotatedInteractionsByTraceIDs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getLLMObsAnnotatedInteractionsByTraceIDs(
    response: ResponseContext
  ): Promise<LLMObsAnnotatedInteractionsByTraceResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsAnnotatedInteractionsByTraceResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsAnnotatedInteractionsByTraceResponse"
        ) as LLMObsAnnotatedInteractionsByTraceResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsAnnotatedInteractionsByTraceResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsAnnotatedInteractionsByTraceResponse",
          ""
        ) as LLMObsAnnotatedInteractionsByTraceResponse;
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
   * @params response Response returned by the server for a request to getLLMObsAnnotationQueueLabelSchema
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getLLMObsAnnotationQueueLabelSchema(
    response: ResponseContext
  ): Promise<LLMObsAnnotationQueueLabelSchemaResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsAnnotationQueueLabelSchemaResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsAnnotationQueueLabelSchemaResponse"
        ) as LLMObsAnnotationQueueLabelSchemaResponse;
      return body;
    }
    if (
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsAnnotationQueueLabelSchemaResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsAnnotationQueueLabelSchemaResponse",
          ""
        ) as LLMObsAnnotationQueueLabelSchemaResponse;
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
   * @params response Response returned by the server for a request to getLLMObsCustomEvalConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getLLMObsCustomEvalConfig(
    response: ResponseContext
  ): Promise<LLMObsCustomEvalConfigResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsCustomEvalConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsCustomEvalConfigResponse"
      ) as LLMObsCustomEvalConfigResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsCustomEvalConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsCustomEvalConfigResponse",
        ""
      ) as LLMObsCustomEvalConfigResponse;
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
   * @params response Response returned by the server for a request to getLLMObsDatasetDraftState
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getLLMObsDatasetDraftState(
    response: ResponseContext
  ): Promise<LLMObsDatasetDraftStateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsDatasetDraftStateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsDatasetDraftStateResponse"
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
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsDatasetDraftStateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsDatasetDraftStateResponse",
          ""
        ) as LLMObsDatasetDraftStateResponse;
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
   * @params response Response returned by the server for a request to getLLMObsPatternsConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getLLMObsPatternsConfig(
    response: ResponseContext
  ): Promise<LLMObsPatternsConfigResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsPatternsConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsPatternsConfigResponse"
      ) as LLMObsPatternsConfigResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsPatternsConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsPatternsConfigResponse",
        ""
      ) as LLMObsPatternsConfigResponse;
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
   * @params response Response returned by the server for a request to getLLMObsPatternsRunStatus
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getLLMObsPatternsRunStatus(
    response: ResponseContext
  ): Promise<LLMObsPatternsRunStatusResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsPatternsRunStatusResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsPatternsRunStatusResponse"
        ) as LLMObsPatternsRunStatusResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsPatternsRunStatusResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsPatternsRunStatusResponse",
          ""
        ) as LLMObsPatternsRunStatusResponse;
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
   * @params response Response returned by the server for a request to getLLMObsPrompt
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getLLMObsPrompt(
    response: ResponseContext
  ): Promise<LLMObsPromptSDKResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsPromptSDKResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsPromptSDKResponse"
      ) as LLMObsPromptSDKResponse;
      return body;
    }
    if (
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsPromptSDKResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsPromptSDKResponse",
        ""
      ) as LLMObsPromptSDKResponse;
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
   * @params response Response returned by the server for a request to getLLMObsPromptVersion
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getLLMObsPromptVersion(
    response: ResponseContext
  ): Promise<LLMObsPromptVersionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsPromptVersionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsPromptVersionResponse"
      ) as LLMObsPromptVersionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsPromptVersionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsPromptVersionResponse",
        ""
      ) as LLMObsPromptVersionResponse;
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
   * @params response Response returned by the server for a request to listLLMObsAnnotationQueues
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLLMObsAnnotationQueues(
    response: ResponseContext
  ): Promise<LLMObsAnnotationQueuesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsAnnotationQueuesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsAnnotationQueuesResponse"
      ) as LLMObsAnnotationQueuesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsAnnotationQueuesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsAnnotationQueuesResponse",
        ""
      ) as LLMObsAnnotationQueuesResponse;
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
   * @params response Response returned by the server for a request to listLLMObsDatasetRecords
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLLMObsDatasetRecords(
    response: ResponseContext
  ): Promise<LLMObsDatasetRecordsListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsDatasetRecordsListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsDatasetRecordsListResponse"
        ) as LLMObsDatasetRecordsListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsDatasetRecordsListResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsDatasetRecordsListResponse",
          ""
        ) as LLMObsDatasetRecordsListResponse;
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
   * @params response Response returned by the server for a request to listLLMObsDatasets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLLMObsDatasets(
    response: ResponseContext
  ): Promise<LLMObsDatasetsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsDatasetsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsDatasetsResponse"
      ) as LLMObsDatasetsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsDatasetsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsDatasetsResponse",
        ""
      ) as LLMObsDatasetsResponse;
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
   * @params response Response returned by the server for a request to listLLMObsDatasetVersions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLLMObsDatasetVersions(
    response: ResponseContext
  ): Promise<LLMObsDatasetVersionsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsDatasetVersionsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsDatasetVersionsResponse"
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
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsDatasetVersionsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsDatasetVersionsResponse",
        ""
      ) as LLMObsDatasetVersionsResponse;
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
   * @params response Response returned by the server for a request to listLLMObsExperimentEvents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLLMObsExperimentEvents(
    response: ResponseContext
  ): Promise<LLMObsExperimentEventsV2Response> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsExperimentEventsV2Response =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsExperimentEventsV2Response"
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
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsExperimentEventsV2Response =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsExperimentEventsV2Response",
          ""
        ) as LLMObsExperimentEventsV2Response;
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
   * @params response Response returned by the server for a request to listLLMObsExperimentEventsV1
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLLMObsExperimentEventsV1(
    response: ResponseContext
  ): Promise<LLMObsExperimentSpansResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsExperimentSpansResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsExperimentSpansResponse"
      ) as LLMObsExperimentSpansResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsExperimentSpansResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsExperimentSpansResponse",
        ""
      ) as LLMObsExperimentSpansResponse;
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
   * @params response Response returned by the server for a request to listLLMObsExperimentEventsV2
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLLMObsExperimentEventsV2(
    response: ResponseContext
  ): Promise<LLMObsExperimentEventsV2Response> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsExperimentEventsV2Response =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsExperimentEventsV2Response"
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
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsExperimentEventsV2Response =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsExperimentEventsV2Response",
          ""
        ) as LLMObsExperimentEventsV2Response;
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
   * @params response Response returned by the server for a request to listLLMObsExperiments
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLLMObsExperiments(
    response: ResponseContext
  ): Promise<LLMObsExperimentsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsExperimentsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsExperimentsResponse"
      ) as LLMObsExperimentsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsExperimentsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsExperimentsResponse",
        ""
      ) as LLMObsExperimentsResponse;
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
   * @params response Response returned by the server for a request to listLLMObsIntegrationAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLLMObsIntegrationAccounts(
    response: ResponseContext
  ): Promise<Array<LLMObsIntegrationAccount>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: Array<LLMObsIntegrationAccount> =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "Array<LLMObsIntegrationAccount>"
        ) as Array<LLMObsIntegrationAccount>;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: Array<LLMObsIntegrationAccount> =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "Array<LLMObsIntegrationAccount>",
          ""
        ) as Array<LLMObsIntegrationAccount>;
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
   * @params response Response returned by the server for a request to listLLMObsIntegrationModels
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLLMObsIntegrationModels(
    response: ResponseContext
  ): Promise<Array<LLMObsIntegrationModel>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: Array<LLMObsIntegrationModel> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<LLMObsIntegrationModel>"
      ) as Array<LLMObsIntegrationModel>;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: Array<LLMObsIntegrationModel> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<LLMObsIntegrationModel>",
        ""
      ) as Array<LLMObsIntegrationModel>;
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
   * @params response Response returned by the server for a request to listLLMObsPatternsClusteredPoints
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLLMObsPatternsClusteredPoints(
    response: ResponseContext
  ): Promise<LLMObsPatternsClusteredPointsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsPatternsClusteredPointsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsPatternsClusteredPointsResponse"
        ) as LLMObsPatternsClusteredPointsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsPatternsClusteredPointsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsPatternsClusteredPointsResponse",
          ""
        ) as LLMObsPatternsClusteredPointsResponse;
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
   * @params response Response returned by the server for a request to listLLMObsPatternsConfigs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLLMObsPatternsConfigs(
    response: ResponseContext
  ): Promise<LLMObsPatternsConfigsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsPatternsConfigsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsPatternsConfigsResponse"
      ) as LLMObsPatternsConfigsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsPatternsConfigsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsPatternsConfigsResponse",
        ""
      ) as LLMObsPatternsConfigsResponse;
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
   * @params response Response returned by the server for a request to listLLMObsPatternsRuns
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLLMObsPatternsRuns(
    response: ResponseContext
  ): Promise<LLMObsPatternsRunsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsPatternsRunsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsPatternsRunsResponse"
      ) as LLMObsPatternsRunsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsPatternsRunsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsPatternsRunsResponse",
        ""
      ) as LLMObsPatternsRunsResponse;
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
   * @params response Response returned by the server for a request to listLLMObsPatternsTopics
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLLMObsPatternsTopics(
    response: ResponseContext
  ): Promise<LLMObsPatternsTopicsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsPatternsTopicsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsPatternsTopicsResponse"
      ) as LLMObsPatternsTopicsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsPatternsTopicsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsPatternsTopicsResponse",
        ""
      ) as LLMObsPatternsTopicsResponse;
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
   * @params response Response returned by the server for a request to listLLMObsPatternsTopicsWithClusteredPoints
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLLMObsPatternsTopicsWithClusteredPoints(
    response: ResponseContext
  ): Promise<LLMObsPatternsTopicsWithClusteredPointsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsPatternsTopicsWithClusteredPointsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsPatternsTopicsWithClusteredPointsResponse"
        ) as LLMObsPatternsTopicsWithClusteredPointsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsPatternsTopicsWithClusteredPointsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsPatternsTopicsWithClusteredPointsResponse",
          ""
        ) as LLMObsPatternsTopicsWithClusteredPointsResponse;
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
   * @params response Response returned by the server for a request to listLLMObsProjects
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLLMObsProjects(
    response: ResponseContext
  ): Promise<LLMObsProjectsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsProjectsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsProjectsResponse"
      ) as LLMObsProjectsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsProjectsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsProjectsResponse",
        ""
      ) as LLMObsProjectsResponse;
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
   * @params response Response returned by the server for a request to listLLMObsPrompts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLLMObsPrompts(
    response: ResponseContext
  ): Promise<LLMObsPromptsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsPromptsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsPromptsResponse"
      ) as LLMObsPromptsResponse;
      return body;
    }
    if (response.httpStatusCode === 401 || response.httpStatusCode === 403) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsPromptsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsPromptsResponse",
        ""
      ) as LLMObsPromptsResponse;
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
   * @params response Response returned by the server for a request to listLLMObsPromptVersions
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLLMObsPromptVersions(
    response: ResponseContext
  ): Promise<LLMObsPromptVersionsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsPromptVersionsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsPromptVersionsResponse"
      ) as LLMObsPromptVersionsResponse;
      return body;
    }
    if (response.httpStatusCode === 401 || response.httpStatusCode === 403) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsPromptVersionsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsPromptVersionsResponse",
        ""
      ) as LLMObsPromptVersionsResponse;
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
   * @params response Response returned by the server for a request to listLLMObsSpans
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLLMObsSpans(
    response: ResponseContext
  ): Promise<LLMObsSpansResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsSpansResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsSpansResponse"
      ) as LLMObsSpansResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsSpansResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsSpansResponse",
        ""
      ) as LLMObsSpansResponse;
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
   * @params response Response returned by the server for a request to lockLLMObsDatasetDraftState
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async lockLLMObsDatasetDraftState(
    response: ResponseContext
  ): Promise<LLMObsDatasetDraftStateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsDatasetDraftStateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsDatasetDraftStateResponse"
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
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsDatasetDraftStateResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsDatasetDraftStateResponse",
          ""
        ) as LLMObsDatasetDraftStateResponse;
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
   * @params response Response returned by the server for a request to restoreLLMObsDatasetVersion
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async restoreLLMObsDatasetVersion(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
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
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
   * @params response Response returned by the server for a request to searchLLMObsExperimentation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchLLMObsExperimentation(
    response: ResponseContext
  ): Promise<LLMObsExperimentationSearchResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200 || response.httpStatusCode === 206) {
      const body: LLMObsExperimentationSearchResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsExperimentationSearchResponse"
        ) as LLMObsExperimentationSearchResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsExperimentationSearchResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsExperimentationSearchResponse",
          ""
        ) as LLMObsExperimentationSearchResponse;
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
   * @params response Response returned by the server for a request to searchLLMObsSpans
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchLLMObsSpans(
    response: ResponseContext
  ): Promise<LLMObsSpansResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsSpansResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsSpansResponse"
      ) as LLMObsSpansResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsSpansResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsSpansResponse",
        ""
      ) as LLMObsSpansResponse;
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
   * @params response Response returned by the server for a request to simpleSearchLLMObsExperimentation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async simpleSearchLLMObsExperimentation(
    response: ResponseContext
  ): Promise<LLMObsExperimentationSimpleSearchResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsExperimentationSimpleSearchResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsExperimentationSimpleSearchResponse"
        ) as LLMObsExperimentationSimpleSearchResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsExperimentationSimpleSearchResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsExperimentationSimpleSearchResponse",
          ""
        ) as LLMObsExperimentationSimpleSearchResponse;
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
   * @params response Response returned by the server for a request to triggerLLMObsPatterns
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async triggerLLMObsPatterns(
    response: ResponseContext
  ): Promise<LLMObsPatternsTriggerResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 202) {
      const body: LLMObsPatternsTriggerResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsPatternsTriggerResponse"
      ) as LLMObsPatternsTriggerResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsPatternsTriggerResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsPatternsTriggerResponse",
        ""
      ) as LLMObsPatternsTriggerResponse;
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
   * @params response Response returned by the server for a request to unlockLLMObsDatasetDraftState
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async unlockLLMObsDatasetDraftState(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
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
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
   * @params response Response returned by the server for a request to updateLLMObsAnnotationQueue
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateLLMObsAnnotationQueue(
    response: ResponseContext
  ): Promise<LLMObsAnnotationQueueResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsAnnotationQueueResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsAnnotationQueueResponse"
      ) as LLMObsAnnotationQueueResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsAnnotationQueueResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsAnnotationQueueResponse",
        ""
      ) as LLMObsAnnotationQueueResponse;
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
   * @params response Response returned by the server for a request to updateLLMObsAnnotationQueueLabelSchema
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateLLMObsAnnotationQueueLabelSchema(
    response: ResponseContext
  ): Promise<LLMObsAnnotationQueueLabelSchemaResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsAnnotationQueueLabelSchemaResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsAnnotationQueueLabelSchemaResponse"
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
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsAnnotationQueueLabelSchemaResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsAnnotationQueueLabelSchemaResponse",
          ""
        ) as LLMObsAnnotationQueueLabelSchemaResponse;
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
   * @params response Response returned by the server for a request to updateLLMObsCustomEvalConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateLLMObsCustomEvalConfig(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
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
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
   * @params response Response returned by the server for a request to updateLLMObsDataset
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateLLMObsDataset(
    response: ResponseContext
  ): Promise<LLMObsDatasetResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsDatasetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsDatasetResponse"
      ) as LLMObsDatasetResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsDatasetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsDatasetResponse",
        ""
      ) as LLMObsDatasetResponse;
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
   * @params response Response returned by the server for a request to updateLLMObsDatasetRecords
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateLLMObsDatasetRecords(
    response: ResponseContext
  ): Promise<LLMObsDatasetRecordsMutationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsDatasetRecordsMutationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsDatasetRecordsMutationResponse"
        ) as LLMObsDatasetRecordsMutationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsDatasetRecordsMutationResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "LLMObsDatasetRecordsMutationResponse",
          ""
        ) as LLMObsDatasetRecordsMutationResponse;
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
   * @params response Response returned by the server for a request to updateLLMObsExperiment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateLLMObsExperiment(
    response: ResponseContext
  ): Promise<LLMObsExperimentResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsExperimentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsExperimentResponse"
      ) as LLMObsExperimentResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsExperimentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsExperimentResponse",
        ""
      ) as LLMObsExperimentResponse;
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
   * @params response Response returned by the server for a request to updateLLMObsProject
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateLLMObsProject(
    response: ResponseContext
  ): Promise<LLMObsProjectResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsProjectResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsProjectResponse"
      ) as LLMObsProjectResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsProjectResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsProjectResponse",
        ""
      ) as LLMObsProjectResponse;
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
   * @params response Response returned by the server for a request to updateLLMObsPrompt
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateLLMObsPrompt(
    response: ResponseContext
  ): Promise<LLMObsPromptResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsPromptResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsPromptResponse"
      ) as LLMObsPromptResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsPromptResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsPromptResponse",
        ""
      ) as LLMObsPromptResponse;
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
   * @params response Response returned by the server for a request to updateLLMObsPromptVersion
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateLLMObsPromptVersion(
    response: ResponseContext
  ): Promise<LLMObsPromptVersionResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsPromptVersionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsPromptVersionResponse"
      ) as LLMObsPromptVersionResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsPromptVersionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsPromptVersionResponse",
        ""
      ) as LLMObsPromptVersionResponse;
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
   * @params response Response returned by the server for a request to uploadLLMObsDatasetRecordsFile
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async uploadLLMObsDatasetRecordsFile(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
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
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
   * @params response Response returned by the server for a request to upsertLLMObsAnnotations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async upsertLLMObsAnnotations(
    response: ResponseContext
  ): Promise<LLMObsAnnotationsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsAnnotationsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsAnnotationsResponse"
      ) as LLMObsAnnotationsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsAnnotationsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsAnnotationsResponse",
        ""
      ) as LLMObsAnnotationsResponse;
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
   * @params response Response returned by the server for a request to upsertLLMObsPatternsConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async upsertLLMObsPatternsConfig(
    response: ResponseContext
  ): Promise<LLMObsPatternsConfigResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: LLMObsPatternsConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsPatternsConfigResponse"
      ) as LLMObsPatternsConfigResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
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
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
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
      const body: LLMObsPatternsConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LLMObsPatternsConfigResponse",
        ""
      ) as LLMObsPatternsConfigResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
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

export interface LLMObservabilityApiBatchUpdateLLMObsDatasetRequest {
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
   * Batch update payload.
   * @type LLMObsDatasetBatchUpdateRequest
   */
  body: LLMObsDatasetBatchUpdateRequest;
}

export interface LLMObservabilityApiCloneLLMObsDatasetRequest {
  /**
   * The ID of the LLM Observability project.
   * @type string
   */
  projectId: string;
  /**
   * The ID of the source LLM Observability dataset to clone.
   * @type string
   */
  datasetId: string;
  /**
   * Clone dataset payload.
   * @type LLMObsDatasetCloneRequest
   */
  body: LLMObsDatasetCloneRequest;
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

export interface LLMObservabilityApiCreateLLMObsPromptRequest {
  /**
   * Create prompt payload.
   * @type LLMObsCreatePromptRequest
   */
  body: LLMObsCreatePromptRequest;
}

export interface LLMObservabilityApiCreateLLMObsPromptVersionRequest {
  /**
   * The customer-provided identifier of the LLM Observability prompt.
   * @type string
   */
  promptId: string;
  /**
   * Create prompt version payload.
   * @type LLMObsCreatePromptVersionRequest
   */
  body: LLMObsCreatePromptVersionRequest;
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

export interface LLMObservabilityApiDeleteLLMObsAnnotationsRequest {
  /**
   * The ID of the LLM Observability annotation queue.
   * @type string
   */
  queueId: string;
  /**
   * Delete annotations payload.
   * @type LLMObsDeleteAnnotationsRequest
   */
  body: LLMObsDeleteAnnotationsRequest;
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

export interface LLMObservabilityApiDeleteLLMObsPatternsConfigRequest {
  /**
   * The ID of the patterns configuration.
   * @type string
   */
  configId: string;
}

export interface LLMObservabilityApiDeleteLLMObsProjectsRequest {
  /**
   * Delete projects payload.
   * @type LLMObsDeleteProjectsRequest
   */
  body: LLMObsDeleteProjectsRequest;
}

export interface LLMObservabilityApiDeleteLLMObsPromptRequest {
  /**
   * The customer-provided identifier of the LLM Observability prompt.
   * @type string
   */
  promptId: string;
}

export interface LLMObservabilityApiExportLLMObsDatasetRequest {
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
   * Export format for the dataset contents. Only `csv` is currently supported.
   * @type LLMObsDatasetExportFormat
   */
  format?: LLMObsDatasetExportFormat;
  /**
   * Version of the dataset to export. If omitted, the current version is used. Must be between 0 and the current version of the dataset, inclusive.
   * @type number
   */
  version?: number;
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

export interface LLMObservabilityApiGetLLMObsPatternsRunStatusRequest {
  /**
   * The ID of the patterns configuration.
   * @type string
   */
  configId: string;
}

export interface LLMObservabilityApiGetLLMObsPromptRequest {
  /**
   * The customer-provided identifier of the LLM Observability prompt.
   * @type string
   */
  promptId: string;
  /**
   * **Deprecated.** Optional label of the prompt version to return. Do not use this parameter for new integrations. If omitted, the latest version is returned. If the prompt has no labels, the latest version is returned even when a label is requested. If the prompt has labels but none match the requested label, a 404 response is returned.
   * @type string
   */
  label?: string;
}

export interface LLMObservabilityApiGetLLMObsPromptVersionRequest {
  /**
   * The customer-provided identifier of the LLM Observability prompt.
   * @type string
   */
  promptId: string;
  /**
   * The version number of the LLM Observability prompt.
   * @type number
   */
  version: number;
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

export interface LLMObservabilityApiListLLMObsExperimentEventsV1Request {
  /**
   * The ID of the LLM Observability experiment.
   * @type string
   */
  experimentId: string;
}

export interface LLMObservabilityApiListLLMObsExperimentEventsV2Request {
  /**
   * The ID of the LLM Observability experiment.
   * @type string
   */
  experimentId: string;
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
   * Filter experiments by their exact run name.
   * @type string
   */
  filterName?: string;
  /**
   * Filter by logical experiment name. This is the `name` field set when creating an experiment through `POST /experiments`. Returns all experiment runs that share the same name, enabling cross-commit and cross-branch comparisons.
   * @type string
   */
  filterExperiment?: string;
  /**
   * Filter by JSONB metadata containment. Provide a JSON object string where
   * experiments whose metadata contains all specified key-value pairs are returned.
   * For example: `{"commit":"abc123","branch":"main"}`.
   * @type string
   */
  filterMetadata?: string;
  /**
   * Filter experiments by the ID of their parent (baseline) experiment. Returns all experiments that were run against the given baseline. Can be specified multiple times.
   * @type string
   */
  filterParentExperimentId?: string;
  /**
   * When `true`, return only soft-deleted experiments. Defaults to `false`.
   * @type boolean
   */
  filterIsDeleted?: boolean;
  /**
   * When `true`, enrich each experiment with its author's user data in the `author` field.
   * @type boolean
   */
  includeUserData?: boolean;
  /**
   * When `true`, enrich each experiment with its dataset name in the `dataset_name` field.
   * @type boolean
   */
  includeDatasetNames?: boolean;
  /**
   * Use the pagination cursor returned in `meta.after` to retrieve the next page of results.
   * @type string
   */
  pageCursor?: string;
  /**
   * Maximum number of results to return per page. Values above 5000 are clamped
   * to 5000. Defaults to 5000.
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

export interface LLMObservabilityApiListLLMObsPatternsClusteredPointsRequest {
  /**
   * The ID of the topic to retrieve clustered points for.
   * @type string
   */
  topicId: string;
  /**
   * Maximum number of clustered points to return per page.
   * @type number
   */
  pageSize?: number;
  /**
   * Pagination token to retrieve the next page of clustered points.
   * @type string
   */
  pageToken?: string;
}

export interface LLMObservabilityApiListLLMObsPatternsRunsRequest {
  /**
   * The ID of the patterns configuration.
   * @type string
   */
  configId: string;
}

export interface LLMObservabilityApiListLLMObsPatternsTopicsRequest {
  /**
   * The ID of the patterns configuration.
   * @type string
   */
  configId: string;
  /**
   * The ID of a specific patterns run. Defaults to the most recent completed run.
   * @type string
   */
  runId?: string;
}

export interface LLMObservabilityApiListLLMObsPatternsTopicsWithClusteredPointsRequest {
  /**
   * The ID of the patterns configuration.
   * @type string
   */
  configId: string;
  /**
   * The ID of a specific patterns run. Defaults to the most recent completed run.
   * @type string
   */
  runId?: string;
  /**
   * When true, enrich each clustered point with span metrics such as status,
   * duration, token counts, estimated cost, and evaluations.
   * @type boolean
   */
  includeMetrics?: boolean;
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

export interface LLMObservabilityApiListLLMObsPromptsRequest {
  /**
   * Optional filter for prompts by prompt ID.
   * @type string
   */
  filterPromptId?: string;
}

export interface LLMObservabilityApiListLLMObsPromptVersionsRequest {
  /**
   * The customer-provided identifier of the LLM Observability prompt.
   * @type string
   */
  promptId: string;
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

export interface LLMObservabilityApiRestoreLLMObsDatasetVersionRequest {
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
   * Restore dataset version payload.
   * @type LLMObsDatasetRestoreVersionRequest
   */
  body: LLMObsDatasetRestoreVersionRequest;
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

export interface LLMObservabilityApiTriggerLLMObsPatternsRequest {
  /**
   * Trigger patterns payload.
   * @type LLMObsPatternsTriggerRequest
   */
  body: LLMObsPatternsTriggerRequest;
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

export interface LLMObservabilityApiUpdateLLMObsPromptRequest {
  /**
   * The customer-provided identifier of the LLM Observability prompt.
   * @type string
   */
  promptId: string;
  /**
   * Update prompt payload.
   * @type LLMObsUpdatePromptRequest
   */
  body: LLMObsUpdatePromptRequest;
}

export interface LLMObservabilityApiUpdateLLMObsPromptVersionRequest {
  /**
   * The customer-provided identifier of the LLM Observability prompt.
   * @type string
   */
  promptId: string;
  /**
   * The version number of the LLM Observability prompt.
   * @type number
   */
  version: number;
  /**
   * Update prompt version payload.
   * @type LLMObsUpdatePromptVersionRequest
   */
  body: LLMObsUpdatePromptVersionRequest;
}

export interface LLMObservabilityApiUploadLLMObsDatasetRecordsFileRequest {
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
   * Whether to skip records whose `input` already exists in the dataset. Defaults to `false`.
   * @type boolean
   */
  deduplicate?: boolean;
  /**
   * Whether to overwrite existing records that share the same user-provided `id`. Defaults to `true`.
   * @type boolean
   */
  overwrite?: boolean;
  /**
   * Tags to apply to every uploaded record, in addition to any tags defined on individual rows. Can be repeated, e.g. `tags=env:prod&tags=team:ai`.
   * @type Array<string>
   */
  tags?: Array<string>;
  /**
   * Whether to enrich the response with user metadata.
   * @type boolean
   */
  includeUserData?: boolean;
  /**
   * Multipart upload payload containing the records file.
   * @type HttpFile
   */
  file?: HttpFile;
}

export interface LLMObservabilityApiUpsertLLMObsAnnotationsRequest {
  /**
   * The ID of the LLM Observability annotation queue.
   * @type string
   */
  queueId: string;
  /**
   * Payload for creating or updating annotations.
   * @type LLMObsAnnotationsRequest
   */
  body: LLMObsAnnotationsRequest;
}

export interface LLMObservabilityApiUpsertLLMObsPatternsConfigRequest {
  /**
   * Patterns configuration payload.
   * @type LLMObsPatternsConfigUpsertRequest
   */
  body: LLMObsPatternsConfigUpsertRequest;
}

export class LLMObservabilityApi {
  private requestFactory: LLMObservabilityApiRequestFactory;
  private responseProcessor: LLMObservabilityApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: LLMObservabilityApiRequestFactory,
    responseProcessor?: LLMObservabilityApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new LLMObservabilityApiRequestFactory(configuration);
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
    options?: Configuration
  ): Promise<LLMObsExperimentationAnalyticsResponse> {
    const requestContextPromise =
      this.requestFactory.aggregateLLMObsExperimentation(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.aggregateLLMObsExperimentation(
            responseContext
          );
        });
    });
  }

  /**
   * Insert, update, and delete records in a single dataset operation. By default, a new dataset version is created when the batch is applied.
   * @param param The request object
   */
  public batchUpdateLLMObsDataset(
    param: LLMObservabilityApiBatchUpdateLLMObsDatasetRequest,
    options?: Configuration
  ): Promise<LLMObsDatasetRecordsMutationResponse> {
    const requestContextPromise = this.requestFactory.batchUpdateLLMObsDataset(
      param.projectId,
      param.datasetId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.batchUpdateLLMObsDataset(
            responseContext
          );
        });
    });
  }

  /**
   * Clone a dataset, copying its current records into a new dataset within the same project.
   * @param param The request object
   */
  public cloneLLMObsDataset(
    param: LLMObservabilityApiCloneLLMObsDatasetRequest,
    options?: Configuration
  ): Promise<LLMObsDatasetResponse> {
    const requestContextPromise = this.requestFactory.cloneLLMObsDataset(
      param.projectId,
      param.datasetId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.cloneLLMObsDataset(responseContext);
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
    options?: Configuration
  ): Promise<LLMObsAnnotationQueueResponse> {
    const requestContextPromise =
      this.requestFactory.createLLMObsAnnotationQueue(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createLLMObsAnnotationQueue(
            responseContext
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
    options?: Configuration
  ): Promise<LLMObsAnnotationQueueInteractionsResponse> {
    const requestContextPromise =
      this.requestFactory.createLLMObsAnnotationQueueInteractions(
        param.queueId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createLLMObsAnnotationQueueInteractions(
            responseContext
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
    options?: Configuration
  ): Promise<LLMObsDatasetResponse> {
    const requestContextPromise = this.requestFactory.createLLMObsDataset(
      param.projectId,
      param.body,
      options
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
    options?: Configuration
  ): Promise<LLMObsDatasetRecordsMutationResponse> {
    const requestContextPromise =
      this.requestFactory.createLLMObsDatasetRecords(
        param.projectId,
        param.datasetId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createLLMObsDatasetRecords(
            responseContext
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
    options?: Configuration
  ): Promise<LLMObsExperimentResponse> {
    const requestContextPromise = this.requestFactory.createLLMObsExperiment(
      param.body,
      options
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.createLLMObsExperimentEvents(
        param.experimentId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createLLMObsExperimentEvents(
            responseContext
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
    options?: Configuration
  ): Promise<LLMObsIntegrationInferenceResponse> {
    const requestContextPromise =
      this.requestFactory.createLLMObsIntegrationInference(
        param.integration,
        param.accountId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createLLMObsIntegrationInference(
            responseContext
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
    options?: Configuration
  ): Promise<LLMObsProjectResponse> {
    const requestContextPromise = this.requestFactory.createLLMObsProject(
      param.body,
      options
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
   * Create a new prompt (and its first version) in the LLM Observability prompt registry.
   * @param param The request object
   */
  public createLLMObsPrompt(
    param: LLMObservabilityApiCreateLLMObsPromptRequest,
    options?: Configuration
  ): Promise<LLMObsPromptResponse> {
    const requestContextPromise = this.requestFactory.createLLMObsPrompt(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createLLMObsPrompt(responseContext);
        });
    });
  }

  /**
   * Create a new version of an existing LLM Observability prompt.
   * @param param The request object
   */
  public createLLMObsPromptVersion(
    param: LLMObservabilityApiCreateLLMObsPromptVersionRequest,
    options?: Configuration
  ): Promise<LLMObsPromptVersionResponse> {
    const requestContextPromise = this.requestFactory.createLLMObsPromptVersion(
      param.promptId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createLLMObsPromptVersion(
            responseContext
          );
        });
    });
  }

  /**
   * Delete an annotation queue by its ID.
   * @param param The request object
   */
  public deleteLLMObsAnnotationQueue(
    param: LLMObservabilityApiDeleteLLMObsAnnotationQueueRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteLLMObsAnnotationQueue(param.queueId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteLLMObsAnnotationQueue(
            responseContext
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteLLMObsAnnotationQueueInteractions(
        param.queueId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteLLMObsAnnotationQueueInteractions(
            responseContext
          );
        });
    });
  }

  /**
   * Delete one or more annotations from an annotation queue.
   * @param param The request object
   */
  public deleteLLMObsAnnotations(
    param: LLMObservabilityApiDeleteLLMObsAnnotationsRequest,
    options?: Configuration
  ): Promise<LLMObsDeleteAnnotationsResponse> {
    const requestContextPromise = this.requestFactory.deleteLLMObsAnnotations(
      param.queueId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteLLMObsAnnotations(
            responseContext
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteLLMObsCustomEvalConfig(param.evalName, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteLLMObsCustomEvalConfig(
            responseContext
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
    options?: Configuration
  ): Promise<LLMObsDataDeletionResponse> {
    const requestContextPromise = this.requestFactory.deleteLLMObsData(
      param.body,
      options
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteLLMObsDatasetRecords(
        param.projectId,
        param.datasetId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteLLMObsDatasetRecords(
            responseContext
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteLLMObsDatasets(
      param.projectId,
      param.body,
      options
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteLLMObsExperiments(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteLLMObsExperiments(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a patterns configuration by its ID.
   * @param param The request object
   */
  public deleteLLMObsPatternsConfig(
    param: LLMObservabilityApiDeleteLLMObsPatternsConfigRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteLLMObsPatternsConfig(param.configId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteLLMObsPatternsConfig(
            responseContext
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteLLMObsProjects(
      param.body,
      options
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
   * Soft-delete an LLM Observability prompt. The prompt's version rows are retained, but they are no longer accessible through the public prompt registry endpoints.
   * @param param The request object
   */
  public deleteLLMObsPrompt(
    param: LLMObservabilityApiDeleteLLMObsPromptRequest,
    options?: Configuration
  ): Promise<LLMObsDeletedPromptResponse> {
    const requestContextPromise = this.requestFactory.deleteLLMObsPrompt(
      param.promptId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteLLMObsPrompt(responseContext);
        });
    });
  }

  /**
   * Download the contents of a dataset as a CSV file. The download is streamed and includes one row per dataset record.
   * @param param The request object
   */
  public exportLLMObsDataset(
    param: LLMObservabilityApiExportLLMObsDatasetRequest,
    options?: Configuration
  ): Promise<string> {
    const requestContextPromise = this.requestFactory.exportLLMObsDataset(
      param.projectId,
      param.datasetId,
      param.format,
      param.version,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.exportLLMObsDataset(responseContext);
        });
    });
  }

  /**
   * Retrieve all interactions (traces and sessions) and their annotations for a given annotation queue.
   * @param param The request object
   */
  public getLLMObsAnnotatedInteractions(
    param: LLMObservabilityApiGetLLMObsAnnotatedInteractionsRequest,
    options?: Configuration
  ): Promise<LLMObsAnnotatedInteractionsResponse> {
    const requestContextPromise =
      this.requestFactory.getLLMObsAnnotatedInteractions(
        param.queueId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getLLMObsAnnotatedInteractions(
            responseContext
          );
        });
    });
  }

  /**
   * Returns annotated interactions across all annotation queues for the given content IDs.
   * Results include queue metadata (ID and name) for each interaction.
   * @param param The request object
   */
  public getLLMObsAnnotatedInteractionsByTraceIDs(
    param: LLMObservabilityApiGetLLMObsAnnotatedInteractionsByTraceIDsRequest,
    options?: Configuration
  ): Promise<LLMObsAnnotatedInteractionsByTraceResponse> {
    const requestContextPromise =
      this.requestFactory.getLLMObsAnnotatedInteractionsByTraceIDs(
        param.contentIds,
        param.offset,
        param.limit,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getLLMObsAnnotatedInteractionsByTraceIDs(
            responseContext
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
    options?: Configuration
  ): Promise<LLMObsAnnotationQueueLabelSchemaResponse> {
    const requestContextPromise =
      this.requestFactory.getLLMObsAnnotationQueueLabelSchema(
        param.queueId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getLLMObsAnnotationQueueLabelSchema(
            responseContext
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
    options?: Configuration
  ): Promise<LLMObsCustomEvalConfigResponse> {
    const requestContextPromise = this.requestFactory.getLLMObsCustomEvalConfig(
      param.evalName,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getLLMObsCustomEvalConfig(
            responseContext
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
    options?: Configuration
  ): Promise<LLMObsDatasetDraftStateResponse> {
    const requestContextPromise =
      this.requestFactory.getLLMObsDatasetDraftState(
        param.projectId,
        param.datasetId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getLLMObsDatasetDraftState(
            responseContext
          );
        });
    });
  }

  /**
   * Retrieve the patterns configuration for the organization.
   * @param param The request object
   */
  public getLLMObsPatternsConfig(
    options?: Configuration
  ): Promise<LLMObsPatternsConfigResponse> {
    const requestContextPromise =
      this.requestFactory.getLLMObsPatternsConfig(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getLLMObsPatternsConfig(
            responseContext
          );
        });
    });
  }

  /**
   * Retrieve the status and step-by-step progress of the current or most recent
   * patterns run for a configuration.
   * @param param The request object
   */
  public getLLMObsPatternsRunStatus(
    param: LLMObservabilityApiGetLLMObsPatternsRunStatusRequest,
    options?: Configuration
  ): Promise<LLMObsPatternsRunStatusResponse> {
    const requestContextPromise =
      this.requestFactory.getLLMObsPatternsRunStatus(param.configId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getLLMObsPatternsRunStatus(
            responseContext
          );
        });
    });
  }

  /**
   * Get the latest version of an LLM Observability prompt by prompt ID.
   * @param param The request object
   */
  public getLLMObsPrompt(
    param: LLMObservabilityApiGetLLMObsPromptRequest,
    options?: Configuration
  ): Promise<LLMObsPromptSDKResponse> {
    const requestContextPromise = this.requestFactory.getLLMObsPrompt(
      param.promptId,
      param.label,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getLLMObsPrompt(responseContext);
        });
    });
  }

  /**
   * Get the full template of a single, specific version of an LLM Observability prompt.
   * @param param The request object
   */
  public getLLMObsPromptVersion(
    param: LLMObservabilityApiGetLLMObsPromptVersionRequest,
    options?: Configuration
  ): Promise<LLMObsPromptVersionResponse> {
    const requestContextPromise = this.requestFactory.getLLMObsPromptVersion(
      param.promptId,
      param.version,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getLLMObsPromptVersion(responseContext);
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
    options?: Configuration
  ): Promise<LLMObsAnnotationQueuesResponse> {
    const requestContextPromise =
      this.requestFactory.listLLMObsAnnotationQueues(
        param.projectId,
        param.queueIds,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLLMObsAnnotationQueues(
            responseContext
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
    options?: Configuration
  ): Promise<LLMObsDatasetRecordsListResponse> {
    const requestContextPromise = this.requestFactory.listLLMObsDatasetRecords(
      param.projectId,
      param.datasetId,
      param.filterVersion,
      param.pageCursor,
      param.pageLimit,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLLMObsDatasetRecords(
            responseContext
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
    options?: Configuration
  ): Promise<LLMObsDatasetsResponse> {
    const requestContextPromise = this.requestFactory.listLLMObsDatasets(
      param.projectId,
      param.filterName,
      param.filterId,
      param.pageCursor,
      param.pageLimit,
      options
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
    options?: Configuration
  ): Promise<LLMObsDatasetVersionsResponse> {
    const requestContextPromise = this.requestFactory.listLLMObsDatasetVersions(
      param.projectId,
      param.datasetId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLLMObsDatasetVersions(
            responseContext
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
    options?: Configuration
  ): Promise<LLMObsExperimentEventsV2Response> {
    const requestContextPromise =
      this.requestFactory.listLLMObsExperimentEvents(
        param.experimentId,
        param.pageLimit,
        param.pageCursor,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLLMObsExperimentEvents(
            responseContext
          );
        });
    });
  }

  /**
   * Retrieve spans with their evaluation metrics for a given experiment. Returns spans only, with no summary metrics and no pagination. Deprecated in favor of `ListLLMObsExperimentEventsV3`.
   * @param param The request object
   */
  public listLLMObsExperimentEventsV1(
    param: LLMObservabilityApiListLLMObsExperimentEventsV1Request,
    options?: Configuration
  ): Promise<LLMObsExperimentSpansResponse> {
    const requestContextPromise =
      this.requestFactory.listLLMObsExperimentEventsV1(
        param.experimentId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLLMObsExperimentEventsV1(
            responseContext
          );
        });
    });
  }

  /**
   * Retrieve spans and experiment-level summary metrics for a given experiment. Returns the full events payload without pagination. Deprecated: use `ListLLMObsExperimentEventsV3` instead.
   * @param param The request object
   */
  public listLLMObsExperimentEventsV2(
    param: LLMObservabilityApiListLLMObsExperimentEventsV2Request,
    options?: Configuration
  ): Promise<LLMObsExperimentEventsV2Response> {
    const requestContextPromise =
      this.requestFactory.listLLMObsExperimentEventsV2(
        param.experimentId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLLMObsExperimentEventsV2(
            responseContext
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
    options?: Configuration
  ): Promise<LLMObsExperimentsResponse> {
    const requestContextPromise = this.requestFactory.listLLMObsExperiments(
      param.filterProjectId,
      param.filterDatasetId,
      param.filterId,
      param.filterName,
      param.filterExperiment,
      param.filterMetadata,
      param.filterParentExperimentId,
      param.filterIsDeleted,
      param.includeUserData,
      param.includeDatasetNames,
      param.pageCursor,
      param.pageLimit,
      options
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
    options?: Configuration
  ): Promise<Array<LLMObsIntegrationAccount>> {
    const requestContextPromise =
      this.requestFactory.listLLMObsIntegrationAccounts(
        param.integration,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLLMObsIntegrationAccounts(
            responseContext
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
    options?: Configuration
  ): Promise<Array<LLMObsIntegrationModel>> {
    const requestContextPromise =
      this.requestFactory.listLLMObsIntegrationModels(
        param.integration,
        param.accountId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLLMObsIntegrationModels(
            responseContext
          );
        });
    });
  }

  /**
   * List the data points grouped into a topic. For a parent topic, points from all
   * of its leaf topics are returned.
   * @param param The request object
   */
  public listLLMObsPatternsClusteredPoints(
    param: LLMObservabilityApiListLLMObsPatternsClusteredPointsRequest,
    options?: Configuration
  ): Promise<LLMObsPatternsClusteredPointsResponse> {
    const requestContextPromise =
      this.requestFactory.listLLMObsPatternsClusteredPoints(
        param.topicId,
        param.pageSize,
        param.pageToken,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLLMObsPatternsClusteredPoints(
            responseContext
          );
        });
    });
  }

  /**
   * List all patterns configurations for the organization.
   * @param param The request object
   */
  public listLLMObsPatternsConfigs(
    options?: Configuration
  ): Promise<LLMObsPatternsConfigsResponse> {
    const requestContextPromise =
      this.requestFactory.listLLMObsPatternsConfigs(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLLMObsPatternsConfigs(
            responseContext
          );
        });
    });
  }

  /**
   * List the completed patterns runs for a configuration.
   * @param param The request object
   */
  public listLLMObsPatternsRuns(
    param: LLMObservabilityApiListLLMObsPatternsRunsRequest,
    options?: Configuration
  ): Promise<LLMObsPatternsRunsResponse> {
    const requestContextPromise = this.requestFactory.listLLMObsPatternsRuns(
      param.configId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLLMObsPatternsRuns(responseContext);
        });
    });
  }

  /**
   * List the topics discovered by a patterns run. When no run is specified,
   * the most recent completed run is used.
   * @param param The request object
   */
  public listLLMObsPatternsTopics(
    param: LLMObservabilityApiListLLMObsPatternsTopicsRequest,
    options?: Configuration
  ): Promise<LLMObsPatternsTopicsResponse> {
    const requestContextPromise = this.requestFactory.listLLMObsPatternsTopics(
      param.configId,
      param.runId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLLMObsPatternsTopics(
            responseContext
          );
        });
    });
  }

  /**
   * List the topics discovered by a patterns run, with the clustered points attached
   * inline to each leaf topic. When no run is specified, the most recent completed
   * run is used.
   * @param param The request object
   */
  public listLLMObsPatternsTopicsWithClusteredPoints(
    param: LLMObservabilityApiListLLMObsPatternsTopicsWithClusteredPointsRequest,
    options?: Configuration
  ): Promise<LLMObsPatternsTopicsWithClusteredPointsResponse> {
    const requestContextPromise =
      this.requestFactory.listLLMObsPatternsTopicsWithClusteredPoints(
        param.configId,
        param.runId,
        param.includeMetrics,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLLMObsPatternsTopicsWithClusteredPoints(
            responseContext
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
    options?: Configuration
  ): Promise<LLMObsProjectsResponse> {
    const requestContextPromise = this.requestFactory.listLLMObsProjects(
      param.filterId,
      param.filterName,
      param.pageCursor,
      param.pageLimit,
      options
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
   * List all LLM Observability prompts in the prompt registry for the organization.
   * @param param The request object
   */
  public listLLMObsPrompts(
    param: LLMObservabilityApiListLLMObsPromptsRequest = {},
    options?: Configuration
  ): Promise<LLMObsPromptsResponse> {
    const requestContextPromise = this.requestFactory.listLLMObsPrompts(
      param.filterPromptId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLLMObsPrompts(responseContext);
        });
    });
  }

  /**
   * List all versions of an LLM Observability prompt, ordered newest to oldest. If the prompt does not exist, is not registered, or is archived, the response contains an empty list.
   * @param param The request object
   */
  public listLLMObsPromptVersions(
    param: LLMObservabilityApiListLLMObsPromptVersionsRequest,
    options?: Configuration
  ): Promise<LLMObsPromptVersionsResponse> {
    const requestContextPromise = this.requestFactory.listLLMObsPromptVersions(
      param.promptId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLLMObsPromptVersions(
            responseContext
          );
        });
    });
  }

  /**
   * List LLM Observability spans matching the specified filters.
   * @param param The request object
   */
  public listLLMObsSpans(
    param: LLMObservabilityApiListLLMObsSpansRequest = {},
    options?: Configuration
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
      options
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
    options?: Configuration
  ): Promise<LLMObsDatasetDraftStateResponse> {
    const requestContextPromise =
      this.requestFactory.lockLLMObsDatasetDraftState(
        param.projectId,
        param.datasetId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.lockLLMObsDatasetDraftState(
            responseContext
          );
        });
    });
  }

  /**
   * Restore a dataset to a previous version. The dataset's current version is bumped, and its records are replaced with the records from the specified prior version.
   * @param param The request object
   */
  public restoreLLMObsDatasetVersion(
    param: LLMObservabilityApiRestoreLLMObsDatasetVersionRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.restoreLLMObsDatasetVersion(
        param.projectId,
        param.datasetId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.restoreLLMObsDatasetVersion(
            responseContext
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
    options?: Configuration
  ): Promise<LLMObsExperimentationSearchResponse> {
    const requestContextPromise =
      this.requestFactory.searchLLMObsExperimentation(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchLLMObsExperimentation(
            responseContext
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
    options?: Configuration
  ): Promise<LLMObsSpansResponse> {
    const requestContextPromise = this.requestFactory.searchLLMObsSpans(
      param.body,
      options
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
    options?: Configuration
  ): Promise<LLMObsExperimentationSimpleSearchResponse> {
    const requestContextPromise =
      this.requestFactory.simpleSearchLLMObsExperimentation(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.simpleSearchLLMObsExperimentation(
            responseContext
          );
        });
    });
  }

  /**
   * Start a patterns run for a given configuration. The run executes asynchronously.
   * @param param The request object
   */
  public triggerLLMObsPatterns(
    param: LLMObservabilityApiTriggerLLMObsPatternsRequest,
    options?: Configuration
  ): Promise<LLMObsPatternsTriggerResponse> {
    const requestContextPromise = this.requestFactory.triggerLLMObsPatterns(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.triggerLLMObsPatterns(responseContext);
        });
    });
  }

  /**
   * Release the draft lock on a dataset held by the calling user, allowing other users to edit the dataset draft.
   * @param param The request object
   */
  public unlockLLMObsDatasetDraftState(
    param: LLMObservabilityApiUnlockLLMObsDatasetDraftStateRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.unlockLLMObsDatasetDraftState(
        param.projectId,
        param.datasetId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.unlockLLMObsDatasetDraftState(
            responseContext
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
    options?: Configuration
  ): Promise<LLMObsAnnotationQueueResponse> {
    const requestContextPromise =
      this.requestFactory.updateLLMObsAnnotationQueue(
        param.queueId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateLLMObsAnnotationQueue(
            responseContext
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
    options?: Configuration
  ): Promise<LLMObsAnnotationQueueLabelSchemaResponse> {
    const requestContextPromise =
      this.requestFactory.updateLLMObsAnnotationQueueLabelSchema(
        param.queueId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateLLMObsAnnotationQueueLabelSchema(
            responseContext
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
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.updateLLMObsCustomEvalConfig(
        param.evalName,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateLLMObsCustomEvalConfig(
            responseContext
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
    options?: Configuration
  ): Promise<LLMObsDatasetResponse> {
    const requestContextPromise = this.requestFactory.updateLLMObsDataset(
      param.projectId,
      param.datasetId,
      param.body,
      options
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
    options?: Configuration
  ): Promise<LLMObsDatasetRecordsMutationResponse> {
    const requestContextPromise =
      this.requestFactory.updateLLMObsDatasetRecords(
        param.projectId,
        param.datasetId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateLLMObsDatasetRecords(
            responseContext
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
    options?: Configuration
  ): Promise<LLMObsExperimentResponse> {
    const requestContextPromise = this.requestFactory.updateLLMObsExperiment(
      param.experimentId,
      param.body,
      options
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
    options?: Configuration
  ): Promise<LLMObsProjectResponse> {
    const requestContextPromise = this.requestFactory.updateLLMObsProject(
      param.projectId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateLLMObsProject(responseContext);
        });
    });
  }

  /**
   * Update the title, the description, or both, for an LLM Observability prompt.
   * @param param The request object
   */
  public updateLLMObsPrompt(
    param: LLMObservabilityApiUpdateLLMObsPromptRequest,
    options?: Configuration
  ): Promise<LLMObsPromptResponse> {
    const requestContextPromise = this.requestFactory.updateLLMObsPrompt(
      param.promptId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateLLMObsPrompt(responseContext);
        });
    });
  }

  /**
   * Update the description, the feature-flag environments, or both, for a specific version of an LLM Observability prompt.
   * @param param The request object
   */
  public updateLLMObsPromptVersion(
    param: LLMObservabilityApiUpdateLLMObsPromptVersionRequest,
    options?: Configuration
  ): Promise<LLMObsPromptVersionResponse> {
    const requestContextPromise = this.requestFactory.updateLLMObsPromptVersion(
      param.promptId,
      param.version,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateLLMObsPromptVersion(
            responseContext
          );
        });
    });
  }

  /**
   * Upload records to a dataset from a file. The request is a `multipart/form-data` upload containing a single `file` part.
   * Currently only CSV is supported. The CSV must include an `input` column. Optional columns are `id`, `expected_output`, `metadata`, and `tags`.
   *
   * The response is a Server-Sent Events stream (`text/event-stream`) emitting progress updates while records are processed. The stream emits the following named events:
   *   - `progress`: incremental record counts written so far.
   *   - `completed`: terminal event with a JSON body containing `records_created`.
   *   - `error`: terminal event with a JSON body containing an error `message`.
   * @param param The request object
   */
  public uploadLLMObsDatasetRecordsFile(
    param: LLMObservabilityApiUploadLLMObsDatasetRecordsFileRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.uploadLLMObsDatasetRecordsFile(
        param.projectId,
        param.datasetId,
        param.deduplicate,
        param.overwrite,
        param.tags,
        param.includeUserData,
        param.file,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.uploadLLMObsDatasetRecordsFile(
            responseContext
          );
        });
    });
  }

  /**
   * Create or update annotations on interactions in a queue. Each annotation is matched
   * by `interaction_id` and the requesting user's identity.
   * Results and errors in the response are linked to request items by `interaction_id`.
   * Errors for individual items are returned in the `errors` field without blocking the rest of the batch.
   * @param param The request object
   */
  public upsertLLMObsAnnotations(
    param: LLMObservabilityApiUpsertLLMObsAnnotationsRequest,
    options?: Configuration
  ): Promise<LLMObsAnnotationsResponse> {
    const requestContextPromise = this.requestFactory.upsertLLMObsAnnotations(
      param.queueId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.upsertLLMObsAnnotations(
            responseContext
          );
        });
    });
  }

  /**
   * Create a new patterns configuration, or update an existing one when a configuration ID is provided.
   * @param param The request object
   */
  public upsertLLMObsPatternsConfig(
    param: LLMObservabilityApiUpsertLLMObsPatternsConfigRequest,
    options?: Configuration
  ): Promise<LLMObsPatternsConfigResponse> {
    const requestContextPromise =
      this.requestFactory.upsertLLMObsPatternsConfig(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.upsertLLMObsPatternsConfig(
            responseContext
          );
        });
    });
  }
}
