import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { LLMObsAnnotatedInteractionsDataAttributesResponse } from "./LLMObsAnnotatedInteractionsDataAttributesResponse";
import { LLMObsAnnotatedInteractionsDataResponse } from "./LLMObsAnnotatedInteractionsDataResponse";
import { LLMObsAnnotatedInteractionsResponse } from "./LLMObsAnnotatedInteractionsResponse";
import { LLMObsAnnotationItem } from "./LLMObsAnnotationItem";
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
import { LLMObsContentBlock } from "./LLMObsContentBlock";
import { LLMObsContentBlockTimeFrame } from "./LLMObsContentBlockTimeFrame";
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
import { LLMObsDatasetDataAttributesRequest } from "./LLMObsDatasetDataAttributesRequest";
import { LLMObsDatasetDataAttributesResponse } from "./LLMObsDatasetDataAttributesResponse";
import { LLMObsDatasetDataRequest } from "./LLMObsDatasetDataRequest";
import { LLMObsDatasetDataResponse } from "./LLMObsDatasetDataResponse";
import { LLMObsDatasetRecordDataResponse } from "./LLMObsDatasetRecordDataResponse";
import { LLMObsDatasetRecordItem } from "./LLMObsDatasetRecordItem";
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
import { LLMObsDatasetUpdateDataAttributesRequest } from "./LLMObsDatasetUpdateDataAttributesRequest";
import { LLMObsDatasetUpdateDataRequest } from "./LLMObsDatasetUpdateDataRequest";
import { LLMObsDatasetUpdateRequest } from "./LLMObsDatasetUpdateRequest";
import { LLMObsDatasetsResponse } from "./LLMObsDatasetsResponse";
import { LLMObsDeleteAnnotationQueueInteractionsDataAttributesRequest } from "./LLMObsDeleteAnnotationQueueInteractionsDataAttributesRequest";
import { LLMObsDeleteAnnotationQueueInteractionsDataRequest } from "./LLMObsDeleteAnnotationQueueInteractionsDataRequest";
import { LLMObsDeleteAnnotationQueueInteractionsRequest } from "./LLMObsDeleteAnnotationQueueInteractionsRequest";
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
import { LLMObsExperimentSpanError } from "./LLMObsExperimentSpanError";
import { LLMObsExperimentSpanMeta } from "./LLMObsExperimentSpanMeta";
import { LLMObsExperimentSpanWithEvals } from "./LLMObsExperimentSpanWithEvals";
import { LLMObsExperimentUpdateDataAttributesRequest } from "./LLMObsExperimentUpdateDataAttributesRequest";
import { LLMObsExperimentUpdateDataRequest } from "./LLMObsExperimentUpdateDataRequest";
import { LLMObsExperimentUpdateRequest } from "./LLMObsExperimentUpdateRequest";
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
import { LLMObsLabelSchema } from "./LLMObsLabelSchema";
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
import { LLMObsTraceAnnotatedInteractionItem } from "./LLMObsTraceAnnotatedInteractionItem";
import { LLMObsTraceInteractionItem } from "./LLMObsTraceInteractionItem";
import { LLMObsTraceInteractionResponseItem } from "./LLMObsTraceInteractionResponseItem";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    LLMObsAnnotatedInteractionsType: ["annotated_interactions"],
    LLMObsAnnotationQueueInteractionsType: ["interactions"],
    LLMObsAnnotationQueueType: ["queues"],
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
    LLMObsDatasetType: ["datasets"],
    LLMObsDisplayBlockInteractionType: ["display_block"],
    LLMObsEventType: ["events"],
    LLMObsExperimentEventsType: ["experiment_events"],
    LLMObsExperimentSpanStatus: ["ok", "error"],
    LLMObsExperimentType: ["experiments"],
    LLMObsExperimentationSortFieldDirection: ["asc", "desc"],
    LLMObsExperimentationType: ["experimentation"],
    LLMObsLabelSchemaType: ["score", "categorical", "boolean", "text"],
    LLMObsMetricAssessment: ["pass", "fail"],
    LLMObsMetricScoreType: ["score", "categorical", "boolean", "json"],
    LLMObsProjectType: ["projects"],
    LLMObsRecordType: ["records"],
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
    LLMObsAnnotationQueueInteractionItem: [
      "LLMObsTraceInteractionItem",
      "LLMObsDisplayBlockInteractionItem",
    ],
    LLMObsAnnotationQueueInteractionResponseItem: [
      "LLMObsTraceInteractionResponseItem",
      "LLMObsDisplayBlockInteractionResponseItem",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    LLMObsAnnotatedInteractionsDataAttributesResponse:
      LLMObsAnnotatedInteractionsDataAttributesResponse,
    LLMObsAnnotatedInteractionsDataResponse:
      LLMObsAnnotatedInteractionsDataResponse,
    LLMObsAnnotatedInteractionsResponse: LLMObsAnnotatedInteractionsResponse,
    LLMObsAnnotationItem: LLMObsAnnotationItem,
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
    LLMObsContentBlock: LLMObsContentBlock,
    LLMObsContentBlockTimeFrame: LLMObsContentBlockTimeFrame,
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
    LLMObsDatasetDataAttributesRequest: LLMObsDatasetDataAttributesRequest,
    LLMObsDatasetDataAttributesResponse: LLMObsDatasetDataAttributesResponse,
    LLMObsDatasetDataRequest: LLMObsDatasetDataRequest,
    LLMObsDatasetDataResponse: LLMObsDatasetDataResponse,
    LLMObsDatasetRecordDataResponse: LLMObsDatasetRecordDataResponse,
    LLMObsDatasetRecordItem: LLMObsDatasetRecordItem,
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
    LLMObsDatasetUpdateDataAttributesRequest:
      LLMObsDatasetUpdateDataAttributesRequest,
    LLMObsDatasetUpdateDataRequest: LLMObsDatasetUpdateDataRequest,
    LLMObsDatasetUpdateRequest: LLMObsDatasetUpdateRequest,
    LLMObsDatasetsResponse: LLMObsDatasetsResponse,
    LLMObsDeleteAnnotationQueueInteractionsDataAttributesRequest:
      LLMObsDeleteAnnotationQueueInteractionsDataAttributesRequest,
    LLMObsDeleteAnnotationQueueInteractionsDataRequest:
      LLMObsDeleteAnnotationQueueInteractionsDataRequest,
    LLMObsDeleteAnnotationQueueInteractionsRequest:
      LLMObsDeleteAnnotationQueueInteractionsRequest,
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
    LLMObsExperimentSpanError: LLMObsExperimentSpanError,
    LLMObsExperimentSpanMeta: LLMObsExperimentSpanMeta,
    LLMObsExperimentSpanWithEvals: LLMObsExperimentSpanWithEvals,
    LLMObsExperimentUpdateDataAttributesRequest:
      LLMObsExperimentUpdateDataAttributesRequest,
    LLMObsExperimentUpdateDataRequest: LLMObsExperimentUpdateDataRequest,
    LLMObsExperimentUpdateRequest: LLMObsExperimentUpdateRequest,
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
    LLMObsLabelSchema: LLMObsLabelSchema,
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
    LLMObsTraceAnnotatedInteractionItem: LLMObsTraceAnnotatedInteractionItem,
    LLMObsTraceInteractionItem: LLMObsTraceInteractionItem,
    LLMObsTraceInteractionResponseItem: LLMObsTraceInteractionResponseItem,
  },
};
