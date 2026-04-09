import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { LLMObsAnnotatedInteractionItem } from "./LLMObsAnnotatedInteractionItem";
import { LLMObsAnnotatedInteractionsDataAttributesResponse } from "./LLMObsAnnotatedInteractionsDataAttributesResponse";
import { LLMObsAnnotatedInteractionsDataResponse } from "./LLMObsAnnotatedInteractionsDataResponse";
import { LLMObsAnnotatedInteractionsResponse } from "./LLMObsAnnotatedInteractionsResponse";
import { LLMObsAnnotationItem } from "./LLMObsAnnotationItem";
import { LLMObsAnnotationQueueDataAttributesRequest } from "./LLMObsAnnotationQueueDataAttributesRequest";
import { LLMObsAnnotationQueueDataAttributesResponse } from "./LLMObsAnnotationQueueDataAttributesResponse";
import { LLMObsAnnotationQueueDataRequest } from "./LLMObsAnnotationQueueDataRequest";
import { LLMObsAnnotationQueueDataResponse } from "./LLMObsAnnotationQueueDataResponse";
import { LLMObsAnnotationQueueInteractionItem } from "./LLMObsAnnotationQueueInteractionItem";
import { LLMObsAnnotationQueueInteractionResponseItem } from "./LLMObsAnnotationQueueInteractionResponseItem";
import { LLMObsAnnotationQueueInteractionsDataAttributesRequest } from "./LLMObsAnnotationQueueInteractionsDataAttributesRequest";
import { LLMObsAnnotationQueueInteractionsDataAttributesResponse } from "./LLMObsAnnotationQueueInteractionsDataAttributesResponse";
import { LLMObsAnnotationQueueInteractionsDataRequest } from "./LLMObsAnnotationQueueInteractionsDataRequest";
import { LLMObsAnnotationQueueInteractionsDataResponse } from "./LLMObsAnnotationQueueInteractionsDataResponse";
import { LLMObsAnnotationQueueInteractionsRequest } from "./LLMObsAnnotationQueueInteractionsRequest";
import { LLMObsAnnotationQueueInteractionsResponse } from "./LLMObsAnnotationQueueInteractionsResponse";
import { LLMObsAnnotationQueueRequest } from "./LLMObsAnnotationQueueRequest";
import { LLMObsAnnotationQueueResponse } from "./LLMObsAnnotationQueueResponse";
import { LLMObsAnnotationQueueUpdateDataAttributesRequest } from "./LLMObsAnnotationQueueUpdateDataAttributesRequest";
import { LLMObsAnnotationQueueUpdateDataRequest } from "./LLMObsAnnotationQueueUpdateDataRequest";
import { LLMObsAnnotationQueueUpdateRequest } from "./LLMObsAnnotationQueueUpdateRequest";
import { LLMObsAnnotationQueuesResponse } from "./LLMObsAnnotationQueuesResponse";
import { LLMObsCursorMeta } from "./LLMObsCursorMeta";
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
import { LLMObsExperimentDataAttributesRequest } from "./LLMObsExperimentDataAttributesRequest";
import { LLMObsExperimentDataAttributesResponse } from "./LLMObsExperimentDataAttributesResponse";
import { LLMObsExperimentDataRequest } from "./LLMObsExperimentDataRequest";
import { LLMObsExperimentDataResponse } from "./LLMObsExperimentDataResponse";
import { LLMObsExperimentEventsDataAttributesRequest } from "./LLMObsExperimentEventsDataAttributesRequest";
import { LLMObsExperimentEventsDataRequest } from "./LLMObsExperimentEventsDataRequest";
import { LLMObsExperimentEventsRequest } from "./LLMObsExperimentEventsRequest";
import { LLMObsExperimentMetric } from "./LLMObsExperimentMetric";
import { LLMObsExperimentMetricError } from "./LLMObsExperimentMetricError";
import { LLMObsExperimentRequest } from "./LLMObsExperimentRequest";
import { LLMObsExperimentResponse } from "./LLMObsExperimentResponse";
import { LLMObsExperimentSpan } from "./LLMObsExperimentSpan";
import { LLMObsExperimentSpanError } from "./LLMObsExperimentSpanError";
import { LLMObsExperimentSpanMeta } from "./LLMObsExperimentSpanMeta";
import { LLMObsExperimentUpdateDataAttributesRequest } from "./LLMObsExperimentUpdateDataAttributesRequest";
import { LLMObsExperimentUpdateDataRequest } from "./LLMObsExperimentUpdateDataRequest";
import { LLMObsExperimentUpdateRequest } from "./LLMObsExperimentUpdateRequest";
import { LLMObsExperimentsResponse } from "./LLMObsExperimentsResponse";
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

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    LLMObsAnnotatedInteractionsType: ["annotated_interactions"],
    LLMObsAnnotationQueueInteractionsType: ["interactions"],
    LLMObsAnnotationQueueType: ["queues"],
    LLMObsDatasetType: ["datasets"],
    LLMObsEventType: ["events"],
    LLMObsExperimentSpanStatus: ["ok", "error"],
    LLMObsExperimentType: ["experiments"],
    LLMObsInteractionType: ["trace", "experiment_trace"],
    LLMObsMetricAssessment: ["pass", "fail"],
    LLMObsMetricScoreType: ["score", "categorical", "boolean", "json"],
    LLMObsProjectType: ["projects"],
    LLMObsRecordType: ["records"],
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
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    LLMObsAnnotatedInteractionItem: LLMObsAnnotatedInteractionItem,
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
    LLMObsAnnotationQueueInteractionItem: LLMObsAnnotationQueueInteractionItem,
    LLMObsAnnotationQueueInteractionResponseItem:
      LLMObsAnnotationQueueInteractionResponseItem,
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
    LLMObsAnnotationQueueRequest: LLMObsAnnotationQueueRequest,
    LLMObsAnnotationQueueResponse: LLMObsAnnotationQueueResponse,
    LLMObsAnnotationQueueUpdateDataAttributesRequest:
      LLMObsAnnotationQueueUpdateDataAttributesRequest,
    LLMObsAnnotationQueueUpdateDataRequest:
      LLMObsAnnotationQueueUpdateDataRequest,
    LLMObsAnnotationQueueUpdateRequest: LLMObsAnnotationQueueUpdateRequest,
    LLMObsAnnotationQueuesResponse: LLMObsAnnotationQueuesResponse,
    LLMObsCursorMeta: LLMObsCursorMeta,
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
    LLMObsExperimentDataAttributesRequest:
      LLMObsExperimentDataAttributesRequest,
    LLMObsExperimentDataAttributesResponse:
      LLMObsExperimentDataAttributesResponse,
    LLMObsExperimentDataRequest: LLMObsExperimentDataRequest,
    LLMObsExperimentDataResponse: LLMObsExperimentDataResponse,
    LLMObsExperimentEventsDataAttributesRequest:
      LLMObsExperimentEventsDataAttributesRequest,
    LLMObsExperimentEventsDataRequest: LLMObsExperimentEventsDataRequest,
    LLMObsExperimentEventsRequest: LLMObsExperimentEventsRequest,
    LLMObsExperimentMetric: LLMObsExperimentMetric,
    LLMObsExperimentMetricError: LLMObsExperimentMetricError,
    LLMObsExperimentRequest: LLMObsExperimentRequest,
    LLMObsExperimentResponse: LLMObsExperimentResponse,
    LLMObsExperimentSpan: LLMObsExperimentSpan,
    LLMObsExperimentSpanError: LLMObsExperimentSpanError,
    LLMObsExperimentSpanMeta: LLMObsExperimentSpanMeta,
    LLMObsExperimentUpdateDataAttributesRequest:
      LLMObsExperimentUpdateDataAttributesRequest,
    LLMObsExperimentUpdateDataRequest: LLMObsExperimentUpdateDataRequest,
    LLMObsExperimentUpdateRequest: LLMObsExperimentUpdateRequest,
    LLMObsExperimentsResponse: LLMObsExperimentsResponse,
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
  },
};
