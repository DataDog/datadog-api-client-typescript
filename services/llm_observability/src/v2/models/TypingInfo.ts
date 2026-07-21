import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { LLMObsAnnotatedInteractionByTraceItem } from "./LLMObsAnnotatedInteractionByTraceItem";
import { LLMObsAnnotatedInteractionsByTraceDataAttributesResponse } from "./LLMObsAnnotatedInteractionsByTraceDataAttributesResponse";
import { LLMObsAnnotatedInteractionsByTraceDataResponse } from "./LLMObsAnnotatedInteractionsByTraceDataResponse";
import { LLMObsAnnotatedInteractionsByTraceResponse } from "./LLMObsAnnotatedInteractionsByTraceResponse";
import { LLMObsAnnotatedInteractionsDataAttributesResponse } from "./LLMObsAnnotatedInteractionsDataAttributesResponse";
import { LLMObsAnnotatedInteractionsDataResponse } from "./LLMObsAnnotatedInteractionsDataResponse";
import { LLMObsAnnotatedInteractionsResponse } from "./LLMObsAnnotatedInteractionsResponse";
import { LLMObsAnnotationError } from "./LLMObsAnnotationError";
import { LLMObsAnnotationItem } from "./LLMObsAnnotationItem";
import { LLMObsAnnotationItemResponse } from "./LLMObsAnnotationItemResponse";
import { LLMObsAnnotationLabelValue } from "./LLMObsAnnotationLabelValue";
import { LLMObsAnnotationLabelValueResponse } from "./LLMObsAnnotationLabelValueResponse";
import { LLMObsAnnotationQueueDataAttributesRequest } from "./LLMObsAnnotationQueueDataAttributesRequest";
import { LLMObsAnnotationQueueDataAttributesResponse } from "./LLMObsAnnotationQueueDataAttributesResponse";
import { LLMObsAnnotationQueueDataRequest } from "./LLMObsAnnotationQueueDataRequest";
import { LLMObsAnnotationQueueDataResponse } from "./LLMObsAnnotationQueueDataResponse";
import { LLMObsAnnotationQueueInteractionsDataAttributesRequest } from "./LLMObsAnnotationQueueInteractionsDataAttributesRequest";
import { LLMObsAnnotationQueueInteractionsDataAttributesResponse } from "./LLMObsAnnotationQueueInteractionsDataAttributesResponse";
import { LLMObsAnnotationQueueInteractionsDataRequest } from "./LLMObsAnnotationQueueInteractionsDataRequest";
import { LLMObsAnnotationQueueInteractionsDataResponse } from "./LLMObsAnnotationQueueInteractionsDataResponse";
import { LLMObsAnnotationQueueInteractionsRequest } from "./LLMObsAnnotationQueueInteractionsRequest";
import { LLMObsAnnotationQueueInteractionsResponse } from "./LLMObsAnnotationQueueInteractionsResponse";
import { LLMObsAnnotationQueueLabelSchemaAttributes } from "./LLMObsAnnotationQueueLabelSchemaAttributes";
import { LLMObsAnnotationQueueLabelSchemaData } from "./LLMObsAnnotationQueueLabelSchemaData";
import { LLMObsAnnotationQueueLabelSchemaResponse } from "./LLMObsAnnotationQueueLabelSchemaResponse";
import { LLMObsAnnotationQueueLabelSchemaUpdateAttributes } from "./LLMObsAnnotationQueueLabelSchemaUpdateAttributes";
import { LLMObsAnnotationQueueLabelSchemaUpdateData } from "./LLMObsAnnotationQueueLabelSchemaUpdateData";
import { LLMObsAnnotationQueueLabelSchemaUpdateRequest } from "./LLMObsAnnotationQueueLabelSchemaUpdateRequest";
import { LLMObsAnnotationQueueRequest } from "./LLMObsAnnotationQueueRequest";
import { LLMObsAnnotationQueueResponse } from "./LLMObsAnnotationQueueResponse";
import { LLMObsAnnotationQueueUpdateDataAttributesRequest } from "./LLMObsAnnotationQueueUpdateDataAttributesRequest";
import { LLMObsAnnotationQueueUpdateDataRequest } from "./LLMObsAnnotationQueueUpdateDataRequest";
import { LLMObsAnnotationQueueUpdateRequest } from "./LLMObsAnnotationQueueUpdateRequest";
import { LLMObsAnnotationQueuesResponse } from "./LLMObsAnnotationQueuesResponse";
import { LLMObsAnnotationSchema } from "./LLMObsAnnotationSchema";
import { LLMObsAnnotationsDataAttributesRequest } from "./LLMObsAnnotationsDataAttributesRequest";
import { LLMObsAnnotationsDataAttributesResponse } from "./LLMObsAnnotationsDataAttributesResponse";
import { LLMObsAnnotationsDataRequest } from "./LLMObsAnnotationsDataRequest";
import { LLMObsAnnotationsDataResponse } from "./LLMObsAnnotationsDataResponse";
import { LLMObsAnnotationsRequest } from "./LLMObsAnnotationsRequest";
import { LLMObsAnnotationsResponse } from "./LLMObsAnnotationsResponse";
import { LLMObsAnthropicMetadata } from "./LLMObsAnthropicMetadata";
import { LLMObsAnthropicThinkingConfig } from "./LLMObsAnthropicThinkingConfig";
import { LLMObsAzureOpenAIMetadata } from "./LLMObsAzureOpenAIMetadata";
import { LLMObsBedrockMetadata } from "./LLMObsBedrockMetadata";
import { LLMObsContentBlock } from "./LLMObsContentBlock";
import { LLMObsContentBlockTimeFrame } from "./LLMObsContentBlockTimeFrame";
import { LLMObsCreatePromptData } from "./LLMObsCreatePromptData";
import { LLMObsCreatePromptDataAttributes } from "./LLMObsCreatePromptDataAttributes";
import { LLMObsCreatePromptRequest } from "./LLMObsCreatePromptRequest";
import { LLMObsCreatePromptVersionData } from "./LLMObsCreatePromptVersionData";
import { LLMObsCreatePromptVersionDataAttributes } from "./LLMObsCreatePromptVersionDataAttributes";
import { LLMObsCreatePromptVersionRequest } from "./LLMObsCreatePromptVersionRequest";
import { LLMObsCursorMeta } from "./LLMObsCursorMeta";
import { LLMObsCustomEvalConfigAssessmentCriteria } from "./LLMObsCustomEvalConfigAssessmentCriteria";
import { LLMObsCustomEvalConfigAttributes } from "./LLMObsCustomEvalConfigAttributes";
import { LLMObsCustomEvalConfigBedrockOptions } from "./LLMObsCustomEvalConfigBedrockOptions";
import { LLMObsCustomEvalConfigData } from "./LLMObsCustomEvalConfigData";
import { LLMObsCustomEvalConfigInferenceParams } from "./LLMObsCustomEvalConfigInferenceParams";
import { LLMObsCustomEvalConfigLLMJudgeConfig } from "./LLMObsCustomEvalConfigLLMJudgeConfig";
import { LLMObsCustomEvalConfigLLMProvider } from "./LLMObsCustomEvalConfigLLMProvider";
import { LLMObsCustomEvalConfigPromptContent } from "./LLMObsCustomEvalConfigPromptContent";
import { LLMObsCustomEvalConfigPromptContentValue } from "./LLMObsCustomEvalConfigPromptContentValue";
import { LLMObsCustomEvalConfigPromptMessage } from "./LLMObsCustomEvalConfigPromptMessage";
import { LLMObsCustomEvalConfigPromptToolCall } from "./LLMObsCustomEvalConfigPromptToolCall";
import { LLMObsCustomEvalConfigPromptToolResult } from "./LLMObsCustomEvalConfigPromptToolResult";
import { LLMObsCustomEvalConfigResponse } from "./LLMObsCustomEvalConfigResponse";
import { LLMObsCustomEvalConfigTarget } from "./LLMObsCustomEvalConfigTarget";
import { LLMObsCustomEvalConfigUpdateAttributes } from "./LLMObsCustomEvalConfigUpdateAttributes";
import { LLMObsCustomEvalConfigUpdateData } from "./LLMObsCustomEvalConfigUpdateData";
import { LLMObsCustomEvalConfigUpdateRequest } from "./LLMObsCustomEvalConfigUpdateRequest";
import { LLMObsCustomEvalConfigUser } from "./LLMObsCustomEvalConfigUser";
import { LLMObsCustomEvalConfigVertexAIOptions } from "./LLMObsCustomEvalConfigVertexAIOptions";
import { LLMObsDataDeletionRequest } from "./LLMObsDataDeletionRequest";
import { LLMObsDataDeletionRequestAttributes } from "./LLMObsDataDeletionRequestAttributes";
import { LLMObsDataDeletionRequestData } from "./LLMObsDataDeletionRequestData";
import { LLMObsDataDeletionResponse } from "./LLMObsDataDeletionResponse";
import { LLMObsDataDeletionResponseAttributes } from "./LLMObsDataDeletionResponseAttributes";
import { LLMObsDataDeletionResponseData } from "./LLMObsDataDeletionResponseData";
import { LLMObsDatasetBatchUpdateDataAttributesRequest } from "./LLMObsDatasetBatchUpdateDataAttributesRequest";
import { LLMObsDatasetBatchUpdateDataRequest } from "./LLMObsDatasetBatchUpdateDataRequest";
import { LLMObsDatasetBatchUpdateInsertRecord } from "./LLMObsDatasetBatchUpdateInsertRecord";
import { LLMObsDatasetBatchUpdateRequest } from "./LLMObsDatasetBatchUpdateRequest";
import { LLMObsDatasetBatchUpdateUpdateRecord } from "./LLMObsDatasetBatchUpdateUpdateRecord";
import { LLMObsDatasetCloneDataAttributesRequest } from "./LLMObsDatasetCloneDataAttributesRequest";
import { LLMObsDatasetCloneDataRequest } from "./LLMObsDatasetCloneDataRequest";
import { LLMObsDatasetCloneRequest } from "./LLMObsDatasetCloneRequest";
import { LLMObsDatasetDataAttributesRequest } from "./LLMObsDatasetDataAttributesRequest";
import { LLMObsDatasetDataAttributesResponse } from "./LLMObsDatasetDataAttributesResponse";
import { LLMObsDatasetDataRequest } from "./LLMObsDatasetDataRequest";
import { LLMObsDatasetDataResponse } from "./LLMObsDatasetDataResponse";
import { LLMObsDatasetDraftStateData } from "./LLMObsDatasetDraftStateData";
import { LLMObsDatasetDraftStateDataAttributes } from "./LLMObsDatasetDraftStateDataAttributes";
import { LLMObsDatasetDraftStateResponse } from "./LLMObsDatasetDraftStateResponse";
import { LLMObsDatasetDraftStateUser } from "./LLMObsDatasetDraftStateUser";
import { LLMObsDatasetRecordDataResponse } from "./LLMObsDatasetRecordDataResponse";
import { LLMObsDatasetRecordItem } from "./LLMObsDatasetRecordItem";
import { LLMObsDatasetRecordTagOperations } from "./LLMObsDatasetRecordTagOperations";
import { LLMObsDatasetRecordUpdateItem } from "./LLMObsDatasetRecordUpdateItem";
import { LLMObsDatasetRecordsDataAttributesRequest } from "./LLMObsDatasetRecordsDataAttributesRequest";
import { LLMObsDatasetRecordsDataRequest } from "./LLMObsDatasetRecordsDataRequest";
import { LLMObsDatasetRecordsListResponse } from "./LLMObsDatasetRecordsListResponse";
import { LLMObsDatasetRecordsMutationData } from "./LLMObsDatasetRecordsMutationData";
import { LLMObsDatasetRecordsMutationResponse } from "./LLMObsDatasetRecordsMutationResponse";
import { LLMObsDatasetRecordsRequest } from "./LLMObsDatasetRecordsRequest";
import { LLMObsDatasetRecordsUpdateDataAttributesRequest } from "./LLMObsDatasetRecordsUpdateDataAttributesRequest";
import { LLMObsDatasetRecordsUpdateDataRequest } from "./LLMObsDatasetRecordsUpdateDataRequest";
import { LLMObsDatasetRecordsUpdateRequest } from "./LLMObsDatasetRecordsUpdateRequest";
import { LLMObsDatasetRequest } from "./LLMObsDatasetRequest";
import { LLMObsDatasetResponse } from "./LLMObsDatasetResponse";
import { LLMObsDatasetRestoreVersionDataAttributesRequest } from "./LLMObsDatasetRestoreVersionDataAttributesRequest";
import { LLMObsDatasetRestoreVersionDataRequest } from "./LLMObsDatasetRestoreVersionDataRequest";
import { LLMObsDatasetRestoreVersionRequest } from "./LLMObsDatasetRestoreVersionRequest";
import { LLMObsDatasetUpdateDataAttributesRequest } from "./LLMObsDatasetUpdateDataAttributesRequest";
import { LLMObsDatasetUpdateDataRequest } from "./LLMObsDatasetUpdateDataRequest";
import { LLMObsDatasetUpdateRequest } from "./LLMObsDatasetUpdateRequest";
import { LLMObsDatasetVersionData } from "./LLMObsDatasetVersionData";
import { LLMObsDatasetVersionDataAttributes } from "./LLMObsDatasetVersionDataAttributes";
import { LLMObsDatasetVersionsResponse } from "./LLMObsDatasetVersionsResponse";
import { LLMObsDatasetsResponse } from "./LLMObsDatasetsResponse";
import { LLMObsDeleteAnnotationError } from "./LLMObsDeleteAnnotationError";
import { LLMObsDeleteAnnotationQueueInteractionsDataAttributesRequest } from "./LLMObsDeleteAnnotationQueueInteractionsDataAttributesRequest";
import { LLMObsDeleteAnnotationQueueInteractionsDataRequest } from "./LLMObsDeleteAnnotationQueueInteractionsDataRequest";
import { LLMObsDeleteAnnotationQueueInteractionsRequest } from "./LLMObsDeleteAnnotationQueueInteractionsRequest";
import { LLMObsDeleteAnnotationsDataAttributesRequest } from "./LLMObsDeleteAnnotationsDataAttributesRequest";
import { LLMObsDeleteAnnotationsDataAttributesResponse } from "./LLMObsDeleteAnnotationsDataAttributesResponse";
import { LLMObsDeleteAnnotationsDataRequest } from "./LLMObsDeleteAnnotationsDataRequest";
import { LLMObsDeleteAnnotationsDataResponse } from "./LLMObsDeleteAnnotationsDataResponse";
import { LLMObsDeleteAnnotationsRequest } from "./LLMObsDeleteAnnotationsRequest";
import { LLMObsDeleteAnnotationsResponse } from "./LLMObsDeleteAnnotationsResponse";
import { LLMObsDeleteDatasetRecordsDataAttributesRequest } from "./LLMObsDeleteDatasetRecordsDataAttributesRequest";
import { LLMObsDeleteDatasetRecordsDataRequest } from "./LLMObsDeleteDatasetRecordsDataRequest";
import { LLMObsDeleteDatasetRecordsRequest } from "./LLMObsDeleteDatasetRecordsRequest";
import { LLMObsDeleteDatasetsDataAttributesRequest } from "./LLMObsDeleteDatasetsDataAttributesRequest";
import { LLMObsDeleteDatasetsDataRequest } from "./LLMObsDeleteDatasetsDataRequest";
import { LLMObsDeleteDatasetsRequest } from "./LLMObsDeleteDatasetsRequest";
import { LLMObsDeleteExperimentsDataAttributesRequest } from "./LLMObsDeleteExperimentsDataAttributesRequest";
import { LLMObsDeleteExperimentsDataRequest } from "./LLMObsDeleteExperimentsDataRequest";
import { LLMObsDeleteExperimentsRequest } from "./LLMObsDeleteExperimentsRequest";
import { LLMObsDeleteProjectsDataAttributesRequest } from "./LLMObsDeleteProjectsDataAttributesRequest";
import { LLMObsDeleteProjectsDataRequest } from "./LLMObsDeleteProjectsDataRequest";
import { LLMObsDeleteProjectsRequest } from "./LLMObsDeleteProjectsRequest";
import { LLMObsDeletedPromptData } from "./LLMObsDeletedPromptData";
import { LLMObsDeletedPromptDataAttributes } from "./LLMObsDeletedPromptDataAttributes";
import { LLMObsDeletedPromptResponse } from "./LLMObsDeletedPromptResponse";
import { LLMObsDisplayBlockAnnotatedInteractionItem } from "./LLMObsDisplayBlockAnnotatedInteractionItem";
import { LLMObsDisplayBlockInteractionItem } from "./LLMObsDisplayBlockInteractionItem";
import { LLMObsDisplayBlockInteractionResponseItem } from "./LLMObsDisplayBlockInteractionResponseItem";
import { LLMObsExperimentDataAttributesRequest } from "./LLMObsExperimentDataAttributesRequest";
import { LLMObsExperimentDataAttributesResponse } from "./LLMObsExperimentDataAttributesResponse";
import { LLMObsExperimentDataRequest } from "./LLMObsExperimentDataRequest";
import { LLMObsExperimentDataResponse } from "./LLMObsExperimentDataResponse";
import { LLMObsExperimentEvalMetricEvent } from "./LLMObsExperimentEvalMetricEvent";
import { LLMObsExperimentEventsDataAttributesRequest } from "./LLMObsExperimentEventsDataAttributesRequest";
import { LLMObsExperimentEventsDataRequest } from "./LLMObsExperimentEventsDataRequest";
import { LLMObsExperimentEventsRequest } from "./LLMObsExperimentEventsRequest";
import { LLMObsExperimentEventsV2DataAttributesResponse } from "./LLMObsExperimentEventsV2DataAttributesResponse";
import { LLMObsExperimentEventsV2DataResponse } from "./LLMObsExperimentEventsV2DataResponse";
import { LLMObsExperimentEventsV2Response } from "./LLMObsExperimentEventsV2Response";
import { LLMObsExperimentMetric } from "./LLMObsExperimentMetric";
import { LLMObsExperimentMetricError } from "./LLMObsExperimentMetricError";
import { LLMObsExperimentRequest } from "./LLMObsExperimentRequest";
import { LLMObsExperimentResponse } from "./LLMObsExperimentResponse";
import { LLMObsExperimentRunDataResponse } from "./LLMObsExperimentRunDataResponse";
import { LLMObsExperimentSpan } from "./LLMObsExperimentSpan";
import { LLMObsExperimentSpanDataResponse } from "./LLMObsExperimentSpanDataResponse";
import { LLMObsExperimentSpanError } from "./LLMObsExperimentSpanError";
import { LLMObsExperimentSpanMeta } from "./LLMObsExperimentSpanMeta";
import { LLMObsExperimentSpanWithEvals } from "./LLMObsExperimentSpanWithEvals";
import { LLMObsExperimentSpansResponse } from "./LLMObsExperimentSpansResponse";
import { LLMObsExperimentUpdateDataAttributesRequest } from "./LLMObsExperimentUpdateDataAttributesRequest";
import { LLMObsExperimentUpdateDataRequest } from "./LLMObsExperimentUpdateDataRequest";
import { LLMObsExperimentUpdateRequest } from "./LLMObsExperimentUpdateRequest";
import { LLMObsExperimentUser } from "./LLMObsExperimentUser";
import { LLMObsExperimentationAnalyticsAggregate } from "./LLMObsExperimentationAnalyticsAggregate";
import { LLMObsExperimentationAnalyticsCompute } from "./LLMObsExperimentationAnalyticsCompute";
import { LLMObsExperimentationAnalyticsDataAttributesRequest } from "./LLMObsExperimentationAnalyticsDataAttributesRequest";
import { LLMObsExperimentationAnalyticsDataAttributesResponse } from "./LLMObsExperimentationAnalyticsDataAttributesResponse";
import { LLMObsExperimentationAnalyticsDataRequest } from "./LLMObsExperimentationAnalyticsDataRequest";
import { LLMObsExperimentationAnalyticsDataResponse } from "./LLMObsExperimentationAnalyticsDataResponse";
import { LLMObsExperimentationAnalyticsGroupBy } from "./LLMObsExperimentationAnalyticsGroupBy";
import { LLMObsExperimentationAnalyticsRequest } from "./LLMObsExperimentationAnalyticsRequest";
import { LLMObsExperimentationAnalyticsResponse } from "./LLMObsExperimentationAnalyticsResponse";
import { LLMObsExperimentationAnalyticsResult } from "./LLMObsExperimentationAnalyticsResult";
import { LLMObsExperimentationAnalyticsSearch } from "./LLMObsExperimentationAnalyticsSearch";
import { LLMObsExperimentationAnalyticsTimeRange } from "./LLMObsExperimentationAnalyticsTimeRange";
import { LLMObsExperimentationAnalyticsValue } from "./LLMObsExperimentationAnalyticsValue";
import { LLMObsExperimentationContentPreview } from "./LLMObsExperimentationContentPreview";
import { LLMObsExperimentationCursorPage } from "./LLMObsExperimentationCursorPage";
import { LLMObsExperimentationFilter } from "./LLMObsExperimentationFilter";
import { LLMObsExperimentationInclude } from "./LLMObsExperimentationInclude";
import { LLMObsExperimentationNumberPage } from "./LLMObsExperimentationNumberPage";
import { LLMObsExperimentationSearchDataAttributesRequest } from "./LLMObsExperimentationSearchDataAttributesRequest";
import { LLMObsExperimentationSearchDataRequest } from "./LLMObsExperimentationSearchDataRequest";
import { LLMObsExperimentationSearchDataResponse } from "./LLMObsExperimentationSearchDataResponse";
import { LLMObsExperimentationSearchRequest } from "./LLMObsExperimentationSearchRequest";
import { LLMObsExperimentationSearchResponse } from "./LLMObsExperimentationSearchResponse";
import { LLMObsExperimentationSearchResults } from "./LLMObsExperimentationSearchResults";
import { LLMObsExperimentationSimpleSearchDataAttributesRequest } from "./LLMObsExperimentationSimpleSearchDataAttributesRequest";
import { LLMObsExperimentationSimpleSearchDataRequest } from "./LLMObsExperimentationSimpleSearchDataRequest";
import { LLMObsExperimentationSimpleSearchDataResponse } from "./LLMObsExperimentationSimpleSearchDataResponse";
import { LLMObsExperimentationSimpleSearchMeta } from "./LLMObsExperimentationSimpleSearchMeta";
import { LLMObsExperimentationSimpleSearchMetaPage } from "./LLMObsExperimentationSimpleSearchMetaPage";
import { LLMObsExperimentationSimpleSearchRequest } from "./LLMObsExperimentationSimpleSearchRequest";
import { LLMObsExperimentationSimpleSearchResponse } from "./LLMObsExperimentationSimpleSearchResponse";
import { LLMObsExperimentationSortField } from "./LLMObsExperimentationSortField";
import { LLMObsExperimentsResponse } from "./LLMObsExperimentsResponse";
import { LLMObsInferenceCode } from "./LLMObsInferenceCode";
import { LLMObsInferenceContent } from "./LLMObsInferenceContent";
import { LLMObsInferenceContentValue } from "./LLMObsInferenceContentValue";
import { LLMObsInferenceErrorResponse } from "./LLMObsInferenceErrorResponse";
import { LLMObsInferenceFunction } from "./LLMObsInferenceFunction";
import { LLMObsInferenceMessage } from "./LLMObsInferenceMessage";
import { LLMObsInferenceRunResult } from "./LLMObsInferenceRunResult";
import { LLMObsInferenceTool } from "./LLMObsInferenceTool";
import { LLMObsInferenceToolCall } from "./LLMObsInferenceToolCall";
import { LLMObsInferenceToolResult } from "./LLMObsInferenceToolResult";
import { LLMObsIntegrationAccount } from "./LLMObsIntegrationAccount";
import { LLMObsIntegrationInferenceRequest } from "./LLMObsIntegrationInferenceRequest";
import { LLMObsIntegrationInferenceResponse } from "./LLMObsIntegrationInferenceResponse";
import { LLMObsIntegrationModel } from "./LLMObsIntegrationModel";
import { LLMObsInternalReasoning } from "./LLMObsInternalReasoning";
import { LLMObsLabelSchema } from "./LLMObsLabelSchema";
import { LLMObsOpenAIMetadata } from "./LLMObsOpenAIMetadata";
import { LLMObsPatternsActivityProgress } from "./LLMObsPatternsActivityProgress";
import { LLMObsPatternsClusteredPoint } from "./LLMObsPatternsClusteredPoint";
import { LLMObsPatternsClusteredPointRef } from "./LLMObsPatternsClusteredPointRef";
import { LLMObsPatternsClusteredPointsResponse } from "./LLMObsPatternsClusteredPointsResponse";
import { LLMObsPatternsClusteredPointsResponseAttributes } from "./LLMObsPatternsClusteredPointsResponseAttributes";
import { LLMObsPatternsClusteredPointsResponseData } from "./LLMObsPatternsClusteredPointsResponseData";
import { LLMObsPatternsConfigAttributes } from "./LLMObsPatternsConfigAttributes";
import { LLMObsPatternsConfigItem } from "./LLMObsPatternsConfigItem";
import { LLMObsPatternsConfigResponse } from "./LLMObsPatternsConfigResponse";
import { LLMObsPatternsConfigResponseData } from "./LLMObsPatternsConfigResponseData";
import { LLMObsPatternsConfigSnapshot } from "./LLMObsPatternsConfigSnapshot";
import { LLMObsPatternsConfigUpsertRequest } from "./LLMObsPatternsConfigUpsertRequest";
import { LLMObsPatternsConfigUpsertRequestAttributes } from "./LLMObsPatternsConfigUpsertRequestAttributes";
import { LLMObsPatternsConfigUpsertRequestData } from "./LLMObsPatternsConfigUpsertRequestData";
import { LLMObsPatternsConfigsResponse } from "./LLMObsPatternsConfigsResponse";
import { LLMObsPatternsConfigsResponseAttributes } from "./LLMObsPatternsConfigsResponseAttributes";
import { LLMObsPatternsConfigsResponseData } from "./LLMObsPatternsConfigsResponseData";
import { LLMObsPatternsRunStatusResponse } from "./LLMObsPatternsRunStatusResponse";
import { LLMObsPatternsRunStatusResponseAttributes } from "./LLMObsPatternsRunStatusResponseAttributes";
import { LLMObsPatternsRunStatusResponseData } from "./LLMObsPatternsRunStatusResponseData";
import { LLMObsPatternsRunSummary } from "./LLMObsPatternsRunSummary";
import { LLMObsPatternsRunsResponse } from "./LLMObsPatternsRunsResponse";
import { LLMObsPatternsRunsResponseAttributes } from "./LLMObsPatternsRunsResponseAttributes";
import { LLMObsPatternsRunsResponseData } from "./LLMObsPatternsRunsResponseData";
import { LLMObsPatternsTopic } from "./LLMObsPatternsTopic";
import { LLMObsPatternsTopicWithClusteredPoints } from "./LLMObsPatternsTopicWithClusteredPoints";
import { LLMObsPatternsTopicsResponse } from "./LLMObsPatternsTopicsResponse";
import { LLMObsPatternsTopicsResponseAttributes } from "./LLMObsPatternsTopicsResponseAttributes";
import { LLMObsPatternsTopicsResponseData } from "./LLMObsPatternsTopicsResponseData";
import { LLMObsPatternsTopicsWithClusteredPointsResponse } from "./LLMObsPatternsTopicsWithClusteredPointsResponse";
import { LLMObsPatternsTopicsWithClusteredPointsResponseAttributes } from "./LLMObsPatternsTopicsWithClusteredPointsResponseAttributes";
import { LLMObsPatternsTopicsWithClusteredPointsResponseData } from "./LLMObsPatternsTopicsWithClusteredPointsResponseData";
import { LLMObsPatternsTriggerRequest } from "./LLMObsPatternsTriggerRequest";
import { LLMObsPatternsTriggerRequestAttributes } from "./LLMObsPatternsTriggerRequestAttributes";
import { LLMObsPatternsTriggerRequestData } from "./LLMObsPatternsTriggerRequestData";
import { LLMObsPatternsTriggerResponse } from "./LLMObsPatternsTriggerResponse";
import { LLMObsPatternsTriggerResponseAttributes } from "./LLMObsPatternsTriggerResponseAttributes";
import { LLMObsPatternsTriggerResponseData } from "./LLMObsPatternsTriggerResponseData";
import { LLMObsProjectDataAttributesRequest } from "./LLMObsProjectDataAttributesRequest";
import { LLMObsProjectDataAttributesResponse } from "./LLMObsProjectDataAttributesResponse";
import { LLMObsProjectDataRequest } from "./LLMObsProjectDataRequest";
import { LLMObsProjectDataResponse } from "./LLMObsProjectDataResponse";
import { LLMObsProjectRequest } from "./LLMObsProjectRequest";
import { LLMObsProjectResponse } from "./LLMObsProjectResponse";
import { LLMObsProjectUpdateDataAttributesRequest } from "./LLMObsProjectUpdateDataAttributesRequest";
import { LLMObsProjectUpdateDataRequest } from "./LLMObsProjectUpdateDataRequest";
import { LLMObsProjectUpdateRequest } from "./LLMObsProjectUpdateRequest";
import { LLMObsProjectsResponse } from "./LLMObsProjectsResponse";
import { LLMObsPromptChatMessage } from "./LLMObsPromptChatMessage";
import { LLMObsPromptData } from "./LLMObsPromptData";
import { LLMObsPromptDataAttributes } from "./LLMObsPromptDataAttributes";
import { LLMObsPromptDataset } from "./LLMObsPromptDataset";
import { LLMObsPromptResponse } from "./LLMObsPromptResponse";
import { LLMObsPromptSDKData } from "./LLMObsPromptSDKData";
import { LLMObsPromptSDKDataAttributes } from "./LLMObsPromptSDKDataAttributes";
import { LLMObsPromptSDKResponse } from "./LLMObsPromptSDKResponse";
import { LLMObsPromptVersionData } from "./LLMObsPromptVersionData";
import { LLMObsPromptVersionDataAttributes } from "./LLMObsPromptVersionDataAttributes";
import { LLMObsPromptVersionListData } from "./LLMObsPromptVersionListData";
import { LLMObsPromptVersionListDataAttributes } from "./LLMObsPromptVersionListDataAttributes";
import { LLMObsPromptVersionResponse } from "./LLMObsPromptVersionResponse";
import { LLMObsPromptVersionsResponse } from "./LLMObsPromptVersionsResponse";
import { LLMObsPromptsResponse } from "./LLMObsPromptsResponse";
import { LLMObsSearchSpansRequest } from "./LLMObsSearchSpansRequest";
import { LLMObsSearchSpansRequestAttributes } from "./LLMObsSearchSpansRequestAttributes";
import { LLMObsSearchSpansRequestData } from "./LLMObsSearchSpansRequestData";
import { LLMObsSpanAttributes } from "./LLMObsSpanAttributes";
import { LLMObsSpanData } from "./LLMObsSpanData";
import { LLMObsSpanEvaluationMetric } from "./LLMObsSpanEvaluationMetric";
import { LLMObsSpanFilter } from "./LLMObsSpanFilter";
import { LLMObsSpanIO } from "./LLMObsSpanIO";
import { LLMObsSpanMessage } from "./LLMObsSpanMessage";
import { LLMObsSpanPageQuery } from "./LLMObsSpanPageQuery";
import { LLMObsSpanSearchOptions } from "./LLMObsSpanSearchOptions";
import { LLMObsSpanToolCall } from "./LLMObsSpanToolCall";
import { LLMObsSpanToolDefinition } from "./LLMObsSpanToolDefinition";
import { LLMObsSpanToolResult } from "./LLMObsSpanToolResult";
import { LLMObsSpansResponse } from "./LLMObsSpansResponse";
import { LLMObsSpansResponseLinks } from "./LLMObsSpansResponseLinks";
import { LLMObsSpansResponseMeta } from "./LLMObsSpansResponseMeta";
import { LLMObsSpansResponsePage } from "./LLMObsSpansResponsePage";
import { LLMObsTraceAnnotatedInteractionItem } from "./LLMObsTraceAnnotatedInteractionItem";
import { LLMObsTraceInteractionItem } from "./LLMObsTraceInteractionItem";
import { LLMObsTraceInteractionResponseItem } from "./LLMObsTraceInteractionResponseItem";
import { LLMObsUpdatePromptData } from "./LLMObsUpdatePromptData";
import { LLMObsUpdatePromptDataAttributes } from "./LLMObsUpdatePromptDataAttributes";
import { LLMObsUpdatePromptRequest } from "./LLMObsUpdatePromptRequest";
import { LLMObsUpdatePromptVersionData } from "./LLMObsUpdatePromptVersionData";
import { LLMObsUpdatePromptVersionDataAttributes } from "./LLMObsUpdatePromptVersionDataAttributes";
import { LLMObsUpdatePromptVersionRequest } from "./LLMObsUpdatePromptVersionRequest";
import { LLMObsUpsertAnnotationItem } from "./LLMObsUpsertAnnotationItem";
import { LLMObsVertexAIMetadata } from "./LLMObsVertexAIMetadata";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    LLMObsAnnotatedInteractionsByTraceType: ["annotated_interactions_by_trace"],
    LLMObsAnnotatedInteractionsType: ["annotated_interactions"],
    LLMObsAnnotationAssessment: ["pass", "fail"],
    LLMObsAnnotationQueueInteractionsType: ["interactions"],
    LLMObsAnnotationQueueType: ["queues"],
    LLMObsAnnotationsType: ["annotations"],
    LLMObsAnthropicEffort: ["low", "medium", "high", "max"],
    LLMObsAnthropicThinkingType: ["enabled", "disabled", "adaptive"],
    LLMObsAnyInteractionType: [
      "trace",
      "experiment_trace",
      "session",
      "display_block",
    ],
    LLMObsContentBlockHeaderLevel: ["sm", "md", "lg", "xl"],
    LLMObsContentBlockLLMObsTraceInteractionType: ["trace", "experiment_trace"],
    LLMObsContentBlockType: [
      "markdown",
      "header",
      "text",
      "json",
      "image",
      "widget",
      "llmobs_trace",
    ],
    LLMObsCustomEvalConfigEvalScope: ["span", "trace", "session"],
    LLMObsCustomEvalConfigIntegrationProvider: [
      "openai",
      "amazon-bedrock",
      "anthropic",
      "azure-openai",
      "vertex-ai",
      "llm-proxy",
    ],
    LLMObsCustomEvalConfigParsingType: ["structured_output", "json"],
    LLMObsCustomEvalConfigType: ["evaluator_config"],
    LLMObsDataDeletionRequestType: ["create_deletion_req"],
    LLMObsDataDeletionResponseType: ["deletion_request"],
    LLMObsDatasetDraftStateType: ["draft_state_data"],
    LLMObsDatasetExportFormat: ["csv"],
    LLMObsDatasetType: ["datasets"],
    LLMObsDatasetVersionType: ["dataset_version"],
    LLMObsDisplayBlockInteractionType: ["display_block"],
    LLMObsEventType: ["events"],
    LLMObsExperimentEventsType: ["experiment_events"],
    LLMObsExperimentSpanStatus: ["ok", "error"],
    LLMObsExperimentSpanType: ["experiments"],
    LLMObsExperimentStatus: ["running", "completed", "failed", "interrupted"],
    LLMObsExperimentType: ["experiments"],
    LLMObsExperimentationSortFieldDirection: ["asc", "desc"],
    LLMObsExperimentationType: ["experimentation"],
    LLMObsIntegrationName: [
      "openai",
      "amazon_bedrock",
      "anthropic",
      "azure_openai",
      "vertex_ai",
      "llmproxy",
    ],
    LLMObsLabelSchemaType: ["score", "categorical", "boolean", "text"],
    LLMObsMetricAssessment: ["pass", "fail"],
    LLMObsMetricScoreType: ["score", "categorical", "boolean", "json"],
    LLMObsOpenAIReasoningEffort: ["none", "low", "medium", "high", "xhigh"],
    LLMObsOpenAIReasoningSummary: ["auto", "concise", "detailed"],
    LLMObsPatternsClusteredPointsType: ["clustered_points_response"],
    LLMObsPatternsConfigType: ["topic_discovery_configs"],
    LLMObsPatternsConfigsListType: ["list_topic_discovery_configs_response"],
    LLMObsPatternsRequestType: ["topic_discovery"],
    LLMObsPatternsRunStatusType: ["topic_discovery_run_status"],
    LLMObsPatternsRunsListType: ["list_topic_discovery_runs_response"],
    LLMObsPatternsTopicsType: ["get_topics_response"],
    LLMObsPatternsTopicsWithClusteredPointsType: [
      "get_topics_with_cluster_points_response",
    ],
    LLMObsPatternsTriggerResponseType: ["topic_discovery_run"],
    LLMObsProjectType: ["projects"],
    LLMObsPromptResponseSource: ["registry", "code"],
    LLMObsPromptType: ["prompt-templates"],
    LLMObsPromptVersionLabel: ["production", "development"],
    LLMObsPromptVersionType: ["prompt-template-versions"],
    LLMObsRecordType: ["records"],
    LLMObsSearchSpansRequestType: ["spans"],
    LLMObsSpanType: ["span"],
    LLMObsTraceInteractionType: ["trace", "experiment_trace", "session"],
  },
  oneOfMap: {
    AnyValue: [
      "string",
      "number",
      "{ [key: string]: any; }",
      "Array<AnyValueItem>",
      "boolean",
    ],
    AnyValueItem: ["string", "number", "{ [key: string]: any; }", "boolean"],
    LLMObsAnnotatedInteractionItem: [
      "LLMObsTraceAnnotatedInteractionItem",
      "LLMObsDisplayBlockAnnotatedInteractionItem",
    ],
    LLMObsAnnotationLabelValueValue: [
      "number",
      "string",
      "Array<string>",
      "boolean",
    ],
    LLMObsAnnotationQueueInteractionItem: [
      "LLMObsTraceInteractionItem",
      "LLMObsDisplayBlockInteractionItem",
    ],
    LLMObsAnnotationQueueInteractionResponseItem: [
      "LLMObsTraceInteractionResponseItem",
      "LLMObsDisplayBlockInteractionResponseItem",
    ],
    LLMObsPromptTemplate: ["string", "Array<LLMObsPromptChatMessage>"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    LLMObsAnnotatedInteractionByTraceItem:
      LLMObsAnnotatedInteractionByTraceItem,
    LLMObsAnnotatedInteractionsByTraceDataAttributesResponse:
      LLMObsAnnotatedInteractionsByTraceDataAttributesResponse,
    LLMObsAnnotatedInteractionsByTraceDataResponse:
      LLMObsAnnotatedInteractionsByTraceDataResponse,
    LLMObsAnnotatedInteractionsByTraceResponse:
      LLMObsAnnotatedInteractionsByTraceResponse,
    LLMObsAnnotatedInteractionsDataAttributesResponse:
      LLMObsAnnotatedInteractionsDataAttributesResponse,
    LLMObsAnnotatedInteractionsDataResponse:
      LLMObsAnnotatedInteractionsDataResponse,
    LLMObsAnnotatedInteractionsResponse: LLMObsAnnotatedInteractionsResponse,
    LLMObsAnnotationError: LLMObsAnnotationError,
    LLMObsAnnotationItem: LLMObsAnnotationItem,
    LLMObsAnnotationItemResponse: LLMObsAnnotationItemResponse,
    LLMObsAnnotationLabelValue: LLMObsAnnotationLabelValue,
    LLMObsAnnotationLabelValueResponse: LLMObsAnnotationLabelValueResponse,
    LLMObsAnnotationQueueDataAttributesRequest:
      LLMObsAnnotationQueueDataAttributesRequest,
    LLMObsAnnotationQueueDataAttributesResponse:
      LLMObsAnnotationQueueDataAttributesResponse,
    LLMObsAnnotationQueueDataRequest: LLMObsAnnotationQueueDataRequest,
    LLMObsAnnotationQueueDataResponse: LLMObsAnnotationQueueDataResponse,
    LLMObsAnnotationQueueInteractionsDataAttributesRequest:
      LLMObsAnnotationQueueInteractionsDataAttributesRequest,
    LLMObsAnnotationQueueInteractionsDataAttributesResponse:
      LLMObsAnnotationQueueInteractionsDataAttributesResponse,
    LLMObsAnnotationQueueInteractionsDataRequest:
      LLMObsAnnotationQueueInteractionsDataRequest,
    LLMObsAnnotationQueueInteractionsDataResponse:
      LLMObsAnnotationQueueInteractionsDataResponse,
    LLMObsAnnotationQueueInteractionsRequest:
      LLMObsAnnotationQueueInteractionsRequest,
    LLMObsAnnotationQueueInteractionsResponse:
      LLMObsAnnotationQueueInteractionsResponse,
    LLMObsAnnotationQueueLabelSchemaAttributes:
      LLMObsAnnotationQueueLabelSchemaAttributes,
    LLMObsAnnotationQueueLabelSchemaData: LLMObsAnnotationQueueLabelSchemaData,
    LLMObsAnnotationQueueLabelSchemaResponse:
      LLMObsAnnotationQueueLabelSchemaResponse,
    LLMObsAnnotationQueueLabelSchemaUpdateAttributes:
      LLMObsAnnotationQueueLabelSchemaUpdateAttributes,
    LLMObsAnnotationQueueLabelSchemaUpdateData:
      LLMObsAnnotationQueueLabelSchemaUpdateData,
    LLMObsAnnotationQueueLabelSchemaUpdateRequest:
      LLMObsAnnotationQueueLabelSchemaUpdateRequest,
    LLMObsAnnotationQueueRequest: LLMObsAnnotationQueueRequest,
    LLMObsAnnotationQueueResponse: LLMObsAnnotationQueueResponse,
    LLMObsAnnotationQueueUpdateDataAttributesRequest:
      LLMObsAnnotationQueueUpdateDataAttributesRequest,
    LLMObsAnnotationQueueUpdateDataRequest:
      LLMObsAnnotationQueueUpdateDataRequest,
    LLMObsAnnotationQueueUpdateRequest: LLMObsAnnotationQueueUpdateRequest,
    LLMObsAnnotationQueuesResponse: LLMObsAnnotationQueuesResponse,
    LLMObsAnnotationSchema: LLMObsAnnotationSchema,
    LLMObsAnnotationsDataAttributesRequest:
      LLMObsAnnotationsDataAttributesRequest,
    LLMObsAnnotationsDataAttributesResponse:
      LLMObsAnnotationsDataAttributesResponse,
    LLMObsAnnotationsDataRequest: LLMObsAnnotationsDataRequest,
    LLMObsAnnotationsDataResponse: LLMObsAnnotationsDataResponse,
    LLMObsAnnotationsRequest: LLMObsAnnotationsRequest,
    LLMObsAnnotationsResponse: LLMObsAnnotationsResponse,
    LLMObsAnthropicMetadata: LLMObsAnthropicMetadata,
    LLMObsAnthropicThinkingConfig: LLMObsAnthropicThinkingConfig,
    LLMObsAzureOpenAIMetadata: LLMObsAzureOpenAIMetadata,
    LLMObsBedrockMetadata: LLMObsBedrockMetadata,
    LLMObsContentBlock: LLMObsContentBlock,
    LLMObsContentBlockTimeFrame: LLMObsContentBlockTimeFrame,
    LLMObsCreatePromptData: LLMObsCreatePromptData,
    LLMObsCreatePromptDataAttributes: LLMObsCreatePromptDataAttributes,
    LLMObsCreatePromptRequest: LLMObsCreatePromptRequest,
    LLMObsCreatePromptVersionData: LLMObsCreatePromptVersionData,
    LLMObsCreatePromptVersionDataAttributes:
      LLMObsCreatePromptVersionDataAttributes,
    LLMObsCreatePromptVersionRequest: LLMObsCreatePromptVersionRequest,
    LLMObsCursorMeta: LLMObsCursorMeta,
    LLMObsCustomEvalConfigAssessmentCriteria:
      LLMObsCustomEvalConfigAssessmentCriteria,
    LLMObsCustomEvalConfigAttributes: LLMObsCustomEvalConfigAttributes,
    LLMObsCustomEvalConfigBedrockOptions: LLMObsCustomEvalConfigBedrockOptions,
    LLMObsCustomEvalConfigData: LLMObsCustomEvalConfigData,
    LLMObsCustomEvalConfigInferenceParams:
      LLMObsCustomEvalConfigInferenceParams,
    LLMObsCustomEvalConfigLLMJudgeConfig: LLMObsCustomEvalConfigLLMJudgeConfig,
    LLMObsCustomEvalConfigLLMProvider: LLMObsCustomEvalConfigLLMProvider,
    LLMObsCustomEvalConfigPromptContent: LLMObsCustomEvalConfigPromptContent,
    LLMObsCustomEvalConfigPromptContentValue:
      LLMObsCustomEvalConfigPromptContentValue,
    LLMObsCustomEvalConfigPromptMessage: LLMObsCustomEvalConfigPromptMessage,
    LLMObsCustomEvalConfigPromptToolCall: LLMObsCustomEvalConfigPromptToolCall,
    LLMObsCustomEvalConfigPromptToolResult:
      LLMObsCustomEvalConfigPromptToolResult,
    LLMObsCustomEvalConfigResponse: LLMObsCustomEvalConfigResponse,
    LLMObsCustomEvalConfigTarget: LLMObsCustomEvalConfigTarget,
    LLMObsCustomEvalConfigUpdateAttributes:
      LLMObsCustomEvalConfigUpdateAttributes,
    LLMObsCustomEvalConfigUpdateData: LLMObsCustomEvalConfigUpdateData,
    LLMObsCustomEvalConfigUpdateRequest: LLMObsCustomEvalConfigUpdateRequest,
    LLMObsCustomEvalConfigUser: LLMObsCustomEvalConfigUser,
    LLMObsCustomEvalConfigVertexAIOptions:
      LLMObsCustomEvalConfigVertexAIOptions,
    LLMObsDataDeletionRequest: LLMObsDataDeletionRequest,
    LLMObsDataDeletionRequestAttributes: LLMObsDataDeletionRequestAttributes,
    LLMObsDataDeletionRequestData: LLMObsDataDeletionRequestData,
    LLMObsDataDeletionResponse: LLMObsDataDeletionResponse,
    LLMObsDataDeletionResponseAttributes: LLMObsDataDeletionResponseAttributes,
    LLMObsDataDeletionResponseData: LLMObsDataDeletionResponseData,
    LLMObsDatasetBatchUpdateDataAttributesRequest:
      LLMObsDatasetBatchUpdateDataAttributesRequest,
    LLMObsDatasetBatchUpdateDataRequest: LLMObsDatasetBatchUpdateDataRequest,
    LLMObsDatasetBatchUpdateInsertRecord: LLMObsDatasetBatchUpdateInsertRecord,
    LLMObsDatasetBatchUpdateRequest: LLMObsDatasetBatchUpdateRequest,
    LLMObsDatasetBatchUpdateUpdateRecord: LLMObsDatasetBatchUpdateUpdateRecord,
    LLMObsDatasetCloneDataAttributesRequest:
      LLMObsDatasetCloneDataAttributesRequest,
    LLMObsDatasetCloneDataRequest: LLMObsDatasetCloneDataRequest,
    LLMObsDatasetCloneRequest: LLMObsDatasetCloneRequest,
    LLMObsDatasetDataAttributesRequest: LLMObsDatasetDataAttributesRequest,
    LLMObsDatasetDataAttributesResponse: LLMObsDatasetDataAttributesResponse,
    LLMObsDatasetDataRequest: LLMObsDatasetDataRequest,
    LLMObsDatasetDataResponse: LLMObsDatasetDataResponse,
    LLMObsDatasetDraftStateData: LLMObsDatasetDraftStateData,
    LLMObsDatasetDraftStateDataAttributes:
      LLMObsDatasetDraftStateDataAttributes,
    LLMObsDatasetDraftStateResponse: LLMObsDatasetDraftStateResponse,
    LLMObsDatasetDraftStateUser: LLMObsDatasetDraftStateUser,
    LLMObsDatasetRecordDataResponse: LLMObsDatasetRecordDataResponse,
    LLMObsDatasetRecordItem: LLMObsDatasetRecordItem,
    LLMObsDatasetRecordTagOperations: LLMObsDatasetRecordTagOperations,
    LLMObsDatasetRecordUpdateItem: LLMObsDatasetRecordUpdateItem,
    LLMObsDatasetRecordsDataAttributesRequest:
      LLMObsDatasetRecordsDataAttributesRequest,
    LLMObsDatasetRecordsDataRequest: LLMObsDatasetRecordsDataRequest,
    LLMObsDatasetRecordsListResponse: LLMObsDatasetRecordsListResponse,
    LLMObsDatasetRecordsMutationData: LLMObsDatasetRecordsMutationData,
    LLMObsDatasetRecordsMutationResponse: LLMObsDatasetRecordsMutationResponse,
    LLMObsDatasetRecordsRequest: LLMObsDatasetRecordsRequest,
    LLMObsDatasetRecordsUpdateDataAttributesRequest:
      LLMObsDatasetRecordsUpdateDataAttributesRequest,
    LLMObsDatasetRecordsUpdateDataRequest:
      LLMObsDatasetRecordsUpdateDataRequest,
    LLMObsDatasetRecordsUpdateRequest: LLMObsDatasetRecordsUpdateRequest,
    LLMObsDatasetRequest: LLMObsDatasetRequest,
    LLMObsDatasetResponse: LLMObsDatasetResponse,
    LLMObsDatasetRestoreVersionDataAttributesRequest:
      LLMObsDatasetRestoreVersionDataAttributesRequest,
    LLMObsDatasetRestoreVersionDataRequest:
      LLMObsDatasetRestoreVersionDataRequest,
    LLMObsDatasetRestoreVersionRequest: LLMObsDatasetRestoreVersionRequest,
    LLMObsDatasetUpdateDataAttributesRequest:
      LLMObsDatasetUpdateDataAttributesRequest,
    LLMObsDatasetUpdateDataRequest: LLMObsDatasetUpdateDataRequest,
    LLMObsDatasetUpdateRequest: LLMObsDatasetUpdateRequest,
    LLMObsDatasetVersionData: LLMObsDatasetVersionData,
    LLMObsDatasetVersionDataAttributes: LLMObsDatasetVersionDataAttributes,
    LLMObsDatasetVersionsResponse: LLMObsDatasetVersionsResponse,
    LLMObsDatasetsResponse: LLMObsDatasetsResponse,
    LLMObsDeleteAnnotationError: LLMObsDeleteAnnotationError,
    LLMObsDeleteAnnotationQueueInteractionsDataAttributesRequest:
      LLMObsDeleteAnnotationQueueInteractionsDataAttributesRequest,
    LLMObsDeleteAnnotationQueueInteractionsDataRequest:
      LLMObsDeleteAnnotationQueueInteractionsDataRequest,
    LLMObsDeleteAnnotationQueueInteractionsRequest:
      LLMObsDeleteAnnotationQueueInteractionsRequest,
    LLMObsDeleteAnnotationsDataAttributesRequest:
      LLMObsDeleteAnnotationsDataAttributesRequest,
    LLMObsDeleteAnnotationsDataAttributesResponse:
      LLMObsDeleteAnnotationsDataAttributesResponse,
    LLMObsDeleteAnnotationsDataRequest: LLMObsDeleteAnnotationsDataRequest,
    LLMObsDeleteAnnotationsDataResponse: LLMObsDeleteAnnotationsDataResponse,
    LLMObsDeleteAnnotationsRequest: LLMObsDeleteAnnotationsRequest,
    LLMObsDeleteAnnotationsResponse: LLMObsDeleteAnnotationsResponse,
    LLMObsDeleteDatasetRecordsDataAttributesRequest:
      LLMObsDeleteDatasetRecordsDataAttributesRequest,
    LLMObsDeleteDatasetRecordsDataRequest:
      LLMObsDeleteDatasetRecordsDataRequest,
    LLMObsDeleteDatasetRecordsRequest: LLMObsDeleteDatasetRecordsRequest,
    LLMObsDeleteDatasetsDataAttributesRequest:
      LLMObsDeleteDatasetsDataAttributesRequest,
    LLMObsDeleteDatasetsDataRequest: LLMObsDeleteDatasetsDataRequest,
    LLMObsDeleteDatasetsRequest: LLMObsDeleteDatasetsRequest,
    LLMObsDeleteExperimentsDataAttributesRequest:
      LLMObsDeleteExperimentsDataAttributesRequest,
    LLMObsDeleteExperimentsDataRequest: LLMObsDeleteExperimentsDataRequest,
    LLMObsDeleteExperimentsRequest: LLMObsDeleteExperimentsRequest,
    LLMObsDeleteProjectsDataAttributesRequest:
      LLMObsDeleteProjectsDataAttributesRequest,
    LLMObsDeleteProjectsDataRequest: LLMObsDeleteProjectsDataRequest,
    LLMObsDeleteProjectsRequest: LLMObsDeleteProjectsRequest,
    LLMObsDeletedPromptData: LLMObsDeletedPromptData,
    LLMObsDeletedPromptDataAttributes: LLMObsDeletedPromptDataAttributes,
    LLMObsDeletedPromptResponse: LLMObsDeletedPromptResponse,
    LLMObsDisplayBlockAnnotatedInteractionItem:
      LLMObsDisplayBlockAnnotatedInteractionItem,
    LLMObsDisplayBlockInteractionItem: LLMObsDisplayBlockInteractionItem,
    LLMObsDisplayBlockInteractionResponseItem:
      LLMObsDisplayBlockInteractionResponseItem,
    LLMObsExperimentDataAttributesRequest:
      LLMObsExperimentDataAttributesRequest,
    LLMObsExperimentDataAttributesResponse:
      LLMObsExperimentDataAttributesResponse,
    LLMObsExperimentDataRequest: LLMObsExperimentDataRequest,
    LLMObsExperimentDataResponse: LLMObsExperimentDataResponse,
    LLMObsExperimentEvalMetricEvent: LLMObsExperimentEvalMetricEvent,
    LLMObsExperimentEventsDataAttributesRequest:
      LLMObsExperimentEventsDataAttributesRequest,
    LLMObsExperimentEventsDataRequest: LLMObsExperimentEventsDataRequest,
    LLMObsExperimentEventsRequest: LLMObsExperimentEventsRequest,
    LLMObsExperimentEventsV2DataAttributesResponse:
      LLMObsExperimentEventsV2DataAttributesResponse,
    LLMObsExperimentEventsV2DataResponse: LLMObsExperimentEventsV2DataResponse,
    LLMObsExperimentEventsV2Response: LLMObsExperimentEventsV2Response,
    LLMObsExperimentMetric: LLMObsExperimentMetric,
    LLMObsExperimentMetricError: LLMObsExperimentMetricError,
    LLMObsExperimentRequest: LLMObsExperimentRequest,
    LLMObsExperimentResponse: LLMObsExperimentResponse,
    LLMObsExperimentRunDataResponse: LLMObsExperimentRunDataResponse,
    LLMObsExperimentSpan: LLMObsExperimentSpan,
    LLMObsExperimentSpanDataResponse: LLMObsExperimentSpanDataResponse,
    LLMObsExperimentSpanError: LLMObsExperimentSpanError,
    LLMObsExperimentSpanMeta: LLMObsExperimentSpanMeta,
    LLMObsExperimentSpanWithEvals: LLMObsExperimentSpanWithEvals,
    LLMObsExperimentSpansResponse: LLMObsExperimentSpansResponse,
    LLMObsExperimentUpdateDataAttributesRequest:
      LLMObsExperimentUpdateDataAttributesRequest,
    LLMObsExperimentUpdateDataRequest: LLMObsExperimentUpdateDataRequest,
    LLMObsExperimentUpdateRequest: LLMObsExperimentUpdateRequest,
    LLMObsExperimentUser: LLMObsExperimentUser,
    LLMObsExperimentationAnalyticsAggregate:
      LLMObsExperimentationAnalyticsAggregate,
    LLMObsExperimentationAnalyticsCompute:
      LLMObsExperimentationAnalyticsCompute,
    LLMObsExperimentationAnalyticsDataAttributesRequest:
      LLMObsExperimentationAnalyticsDataAttributesRequest,
    LLMObsExperimentationAnalyticsDataAttributesResponse:
      LLMObsExperimentationAnalyticsDataAttributesResponse,
    LLMObsExperimentationAnalyticsDataRequest:
      LLMObsExperimentationAnalyticsDataRequest,
    LLMObsExperimentationAnalyticsDataResponse:
      LLMObsExperimentationAnalyticsDataResponse,
    LLMObsExperimentationAnalyticsGroupBy:
      LLMObsExperimentationAnalyticsGroupBy,
    LLMObsExperimentationAnalyticsRequest:
      LLMObsExperimentationAnalyticsRequest,
    LLMObsExperimentationAnalyticsResponse:
      LLMObsExperimentationAnalyticsResponse,
    LLMObsExperimentationAnalyticsResult: LLMObsExperimentationAnalyticsResult,
    LLMObsExperimentationAnalyticsSearch: LLMObsExperimentationAnalyticsSearch,
    LLMObsExperimentationAnalyticsTimeRange:
      LLMObsExperimentationAnalyticsTimeRange,
    LLMObsExperimentationAnalyticsValue: LLMObsExperimentationAnalyticsValue,
    LLMObsExperimentationContentPreview: LLMObsExperimentationContentPreview,
    LLMObsExperimentationCursorPage: LLMObsExperimentationCursorPage,
    LLMObsExperimentationFilter: LLMObsExperimentationFilter,
    LLMObsExperimentationInclude: LLMObsExperimentationInclude,
    LLMObsExperimentationNumberPage: LLMObsExperimentationNumberPage,
    LLMObsExperimentationSearchDataAttributesRequest:
      LLMObsExperimentationSearchDataAttributesRequest,
    LLMObsExperimentationSearchDataRequest:
      LLMObsExperimentationSearchDataRequest,
    LLMObsExperimentationSearchDataResponse:
      LLMObsExperimentationSearchDataResponse,
    LLMObsExperimentationSearchRequest: LLMObsExperimentationSearchRequest,
    LLMObsExperimentationSearchResponse: LLMObsExperimentationSearchResponse,
    LLMObsExperimentationSearchResults: LLMObsExperimentationSearchResults,
    LLMObsExperimentationSimpleSearchDataAttributesRequest:
      LLMObsExperimentationSimpleSearchDataAttributesRequest,
    LLMObsExperimentationSimpleSearchDataRequest:
      LLMObsExperimentationSimpleSearchDataRequest,
    LLMObsExperimentationSimpleSearchDataResponse:
      LLMObsExperimentationSimpleSearchDataResponse,
    LLMObsExperimentationSimpleSearchMeta:
      LLMObsExperimentationSimpleSearchMeta,
    LLMObsExperimentationSimpleSearchMetaPage:
      LLMObsExperimentationSimpleSearchMetaPage,
    LLMObsExperimentationSimpleSearchRequest:
      LLMObsExperimentationSimpleSearchRequest,
    LLMObsExperimentationSimpleSearchResponse:
      LLMObsExperimentationSimpleSearchResponse,
    LLMObsExperimentationSortField: LLMObsExperimentationSortField,
    LLMObsExperimentsResponse: LLMObsExperimentsResponse,
    LLMObsInferenceCode: LLMObsInferenceCode,
    LLMObsInferenceContent: LLMObsInferenceContent,
    LLMObsInferenceContentValue: LLMObsInferenceContentValue,
    LLMObsInferenceErrorResponse: LLMObsInferenceErrorResponse,
    LLMObsInferenceFunction: LLMObsInferenceFunction,
    LLMObsInferenceMessage: LLMObsInferenceMessage,
    LLMObsInferenceRunResult: LLMObsInferenceRunResult,
    LLMObsInferenceTool: LLMObsInferenceTool,
    LLMObsInferenceToolCall: LLMObsInferenceToolCall,
    LLMObsInferenceToolResult: LLMObsInferenceToolResult,
    LLMObsIntegrationAccount: LLMObsIntegrationAccount,
    LLMObsIntegrationInferenceRequest: LLMObsIntegrationInferenceRequest,
    LLMObsIntegrationInferenceResponse: LLMObsIntegrationInferenceResponse,
    LLMObsIntegrationModel: LLMObsIntegrationModel,
    LLMObsInternalReasoning: LLMObsInternalReasoning,
    LLMObsLabelSchema: LLMObsLabelSchema,
    LLMObsOpenAIMetadata: LLMObsOpenAIMetadata,
    LLMObsPatternsActivityProgress: LLMObsPatternsActivityProgress,
    LLMObsPatternsClusteredPoint: LLMObsPatternsClusteredPoint,
    LLMObsPatternsClusteredPointRef: LLMObsPatternsClusteredPointRef,
    LLMObsPatternsClusteredPointsResponse:
      LLMObsPatternsClusteredPointsResponse,
    LLMObsPatternsClusteredPointsResponseAttributes:
      LLMObsPatternsClusteredPointsResponseAttributes,
    LLMObsPatternsClusteredPointsResponseData:
      LLMObsPatternsClusteredPointsResponseData,
    LLMObsPatternsConfigAttributes: LLMObsPatternsConfigAttributes,
    LLMObsPatternsConfigItem: LLMObsPatternsConfigItem,
    LLMObsPatternsConfigResponse: LLMObsPatternsConfigResponse,
    LLMObsPatternsConfigResponseData: LLMObsPatternsConfigResponseData,
    LLMObsPatternsConfigSnapshot: LLMObsPatternsConfigSnapshot,
    LLMObsPatternsConfigUpsertRequest: LLMObsPatternsConfigUpsertRequest,
    LLMObsPatternsConfigUpsertRequestAttributes:
      LLMObsPatternsConfigUpsertRequestAttributes,
    LLMObsPatternsConfigUpsertRequestData:
      LLMObsPatternsConfigUpsertRequestData,
    LLMObsPatternsConfigsResponse: LLMObsPatternsConfigsResponse,
    LLMObsPatternsConfigsResponseAttributes:
      LLMObsPatternsConfigsResponseAttributes,
    LLMObsPatternsConfigsResponseData: LLMObsPatternsConfigsResponseData,
    LLMObsPatternsRunStatusResponse: LLMObsPatternsRunStatusResponse,
    LLMObsPatternsRunStatusResponseAttributes:
      LLMObsPatternsRunStatusResponseAttributes,
    LLMObsPatternsRunStatusResponseData: LLMObsPatternsRunStatusResponseData,
    LLMObsPatternsRunSummary: LLMObsPatternsRunSummary,
    LLMObsPatternsRunsResponse: LLMObsPatternsRunsResponse,
    LLMObsPatternsRunsResponseAttributes: LLMObsPatternsRunsResponseAttributes,
    LLMObsPatternsRunsResponseData: LLMObsPatternsRunsResponseData,
    LLMObsPatternsTopic: LLMObsPatternsTopic,
    LLMObsPatternsTopicWithClusteredPoints:
      LLMObsPatternsTopicWithClusteredPoints,
    LLMObsPatternsTopicsResponse: LLMObsPatternsTopicsResponse,
    LLMObsPatternsTopicsResponseAttributes:
      LLMObsPatternsTopicsResponseAttributes,
    LLMObsPatternsTopicsResponseData: LLMObsPatternsTopicsResponseData,
    LLMObsPatternsTopicsWithClusteredPointsResponse:
      LLMObsPatternsTopicsWithClusteredPointsResponse,
    LLMObsPatternsTopicsWithClusteredPointsResponseAttributes:
      LLMObsPatternsTopicsWithClusteredPointsResponseAttributes,
    LLMObsPatternsTopicsWithClusteredPointsResponseData:
      LLMObsPatternsTopicsWithClusteredPointsResponseData,
    LLMObsPatternsTriggerRequest: LLMObsPatternsTriggerRequest,
    LLMObsPatternsTriggerRequestAttributes:
      LLMObsPatternsTriggerRequestAttributes,
    LLMObsPatternsTriggerRequestData: LLMObsPatternsTriggerRequestData,
    LLMObsPatternsTriggerResponse: LLMObsPatternsTriggerResponse,
    LLMObsPatternsTriggerResponseAttributes:
      LLMObsPatternsTriggerResponseAttributes,
    LLMObsPatternsTriggerResponseData: LLMObsPatternsTriggerResponseData,
    LLMObsProjectDataAttributesRequest: LLMObsProjectDataAttributesRequest,
    LLMObsProjectDataAttributesResponse: LLMObsProjectDataAttributesResponse,
    LLMObsProjectDataRequest: LLMObsProjectDataRequest,
    LLMObsProjectDataResponse: LLMObsProjectDataResponse,
    LLMObsProjectRequest: LLMObsProjectRequest,
    LLMObsProjectResponse: LLMObsProjectResponse,
    LLMObsProjectUpdateDataAttributesRequest:
      LLMObsProjectUpdateDataAttributesRequest,
    LLMObsProjectUpdateDataRequest: LLMObsProjectUpdateDataRequest,
    LLMObsProjectUpdateRequest: LLMObsProjectUpdateRequest,
    LLMObsProjectsResponse: LLMObsProjectsResponse,
    LLMObsPromptChatMessage: LLMObsPromptChatMessage,
    LLMObsPromptData: LLMObsPromptData,
    LLMObsPromptDataAttributes: LLMObsPromptDataAttributes,
    LLMObsPromptDataset: LLMObsPromptDataset,
    LLMObsPromptResponse: LLMObsPromptResponse,
    LLMObsPromptSDKData: LLMObsPromptSDKData,
    LLMObsPromptSDKDataAttributes: LLMObsPromptSDKDataAttributes,
    LLMObsPromptSDKResponse: LLMObsPromptSDKResponse,
    LLMObsPromptVersionData: LLMObsPromptVersionData,
    LLMObsPromptVersionDataAttributes: LLMObsPromptVersionDataAttributes,
    LLMObsPromptVersionListData: LLMObsPromptVersionListData,
    LLMObsPromptVersionListDataAttributes:
      LLMObsPromptVersionListDataAttributes,
    LLMObsPromptVersionResponse: LLMObsPromptVersionResponse,
    LLMObsPromptVersionsResponse: LLMObsPromptVersionsResponse,
    LLMObsPromptsResponse: LLMObsPromptsResponse,
    LLMObsSearchSpansRequest: LLMObsSearchSpansRequest,
    LLMObsSearchSpansRequestAttributes: LLMObsSearchSpansRequestAttributes,
    LLMObsSearchSpansRequestData: LLMObsSearchSpansRequestData,
    LLMObsSpanAttributes: LLMObsSpanAttributes,
    LLMObsSpanData: LLMObsSpanData,
    LLMObsSpanEvaluationMetric: LLMObsSpanEvaluationMetric,
    LLMObsSpanFilter: LLMObsSpanFilter,
    LLMObsSpanIO: LLMObsSpanIO,
    LLMObsSpanMessage: LLMObsSpanMessage,
    LLMObsSpanPageQuery: LLMObsSpanPageQuery,
    LLMObsSpanSearchOptions: LLMObsSpanSearchOptions,
    LLMObsSpanToolCall: LLMObsSpanToolCall,
    LLMObsSpanToolDefinition: LLMObsSpanToolDefinition,
    LLMObsSpanToolResult: LLMObsSpanToolResult,
    LLMObsSpansResponse: LLMObsSpansResponse,
    LLMObsSpansResponseLinks: LLMObsSpansResponseLinks,
    LLMObsSpansResponseMeta: LLMObsSpansResponseMeta,
    LLMObsSpansResponsePage: LLMObsSpansResponsePage,
    LLMObsTraceAnnotatedInteractionItem: LLMObsTraceAnnotatedInteractionItem,
    LLMObsTraceInteractionItem: LLMObsTraceInteractionItem,
    LLMObsTraceInteractionResponseItem: LLMObsTraceInteractionResponseItem,
    LLMObsUpdatePromptData: LLMObsUpdatePromptData,
    LLMObsUpdatePromptDataAttributes: LLMObsUpdatePromptDataAttributes,
    LLMObsUpdatePromptRequest: LLMObsUpdatePromptRequest,
    LLMObsUpdatePromptVersionData: LLMObsUpdatePromptVersionData,
    LLMObsUpdatePromptVersionDataAttributes:
      LLMObsUpdatePromptVersionDataAttributes,
    LLMObsUpdatePromptVersionRequest: LLMObsUpdatePromptVersionRequest,
    LLMObsUpsertAnnotationItem: LLMObsUpsertAnnotationItem,
    LLMObsVertexAIMetadata: LLMObsVertexAIMetadata,
  },
};
