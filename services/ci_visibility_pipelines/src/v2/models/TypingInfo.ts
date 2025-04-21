import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { CIAppAggregateBucketValueTimeseriesPoint } from "./CIAppAggregateBucketValueTimeseriesPoint";
import { CIAppAggregateSort } from "./CIAppAggregateSort";
import { CIAppCIError } from "./CIAppCIError";
import { CIAppCompute } from "./CIAppCompute";
import { CIAppCreatePipelineEventRequest } from "./CIAppCreatePipelineEventRequest";
import { CIAppCreatePipelineEventRequestAttributes } from "./CIAppCreatePipelineEventRequestAttributes";
import { CIAppCreatePipelineEventRequestData } from "./CIAppCreatePipelineEventRequestData";
import { CIAppGitInfo } from "./CIAppGitInfo";
import { CIAppGroupByHistogram } from "./CIAppGroupByHistogram";
import { CIAppHostInfo } from "./CIAppHostInfo";
import { CIAppPipelineEvent } from "./CIAppPipelineEvent";
import { CIAppPipelineEventAttributes } from "./CIAppPipelineEventAttributes";
import { CIAppPipelineEventFinishedPipeline } from "./CIAppPipelineEventFinishedPipeline";
import { CIAppPipelineEventInProgressPipeline } from "./CIAppPipelineEventInProgressPipeline";
import { CIAppPipelineEventJob } from "./CIAppPipelineEventJob";
import { CIAppPipelineEventParentPipeline } from "./CIAppPipelineEventParentPipeline";
import { CIAppPipelineEventPreviousPipeline } from "./CIAppPipelineEventPreviousPipeline";
import { CIAppPipelineEventStage } from "./CIAppPipelineEventStage";
import { CIAppPipelineEventStep } from "./CIAppPipelineEventStep";
import { CIAppPipelineEventsRequest } from "./CIAppPipelineEventsRequest";
import { CIAppPipelineEventsResponse } from "./CIAppPipelineEventsResponse";
import { CIAppPipelinesAggregateRequest } from "./CIAppPipelinesAggregateRequest";
import { CIAppPipelinesAggregationBucketsResponse } from "./CIAppPipelinesAggregationBucketsResponse";
import { CIAppPipelinesAnalyticsAggregateResponse } from "./CIAppPipelinesAnalyticsAggregateResponse";
import { CIAppPipelinesBucketResponse } from "./CIAppPipelinesBucketResponse";
import { CIAppPipelinesGroupBy } from "./CIAppPipelinesGroupBy";
import { CIAppPipelinesQueryFilter } from "./CIAppPipelinesQueryFilter";
import { CIAppQueryOptions } from "./CIAppQueryOptions";
import { CIAppQueryPageOptions } from "./CIAppQueryPageOptions";
import { CIAppResponseLinks } from "./CIAppResponseLinks";
import { CIAppResponseMetadata } from "./CIAppResponseMetadata";
import { CIAppResponseMetadataWithPagination } from "./CIAppResponseMetadataWithPagination";
import { CIAppResponsePage } from "./CIAppResponsePage";
import { CIAppWarning } from "./CIAppWarning";
import { HTTPCIAppError } from "./HTTPCIAppError";
import { HTTPCIAppErrors } from "./HTTPCIAppErrors";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    CIAppAggregateSortType: ["alphabetical", "measure"],
    CIAppAggregationFunction: [
      "count",
      "cardinality",
      "pc75",
      "pc90",
      "pc95",
      "pc98",
      "pc99",
      "sum",
      "min",
      "max",
      "avg",
      "median",
      "latest",
      "earliest",
      "most_frequent",
      "delta",
    ],
    CIAppCIErrorDomain: ["provider", "user", "unknown"],
    CIAppComputeType: ["timeseries", "total"],
    CIAppCreatePipelineEventRequestDataType: ["cipipeline_resource_request"],
    CIAppPipelineEventJobLevel: ["job"],
    CIAppPipelineEventJobStatus: ["success", "error", "canceled", "skipped"],
    CIAppPipelineEventPipelineInProgressStatus: ["running"],
    CIAppPipelineEventPipelineLevel: ["pipeline"],
    CIAppPipelineEventPipelineStatus: [
      "success",
      "error",
      "canceled",
      "skipped",
      "blocked",
    ],
    CIAppPipelineEventStageLevel: ["stage"],
    CIAppPipelineEventStageStatus: ["success", "error", "canceled", "skipped"],
    CIAppPipelineEventStepLevel: ["step"],
    CIAppPipelineEventStepStatus: ["success", "error"],
    CIAppPipelineEventTypeName: ["cipipeline"],
    CIAppPipelineLevel: ["pipeline", "stage", "job", "step", "custom"],
    CIAppResponseStatus: ["done", "timeout"],
    CIAppSort: ["timestamp", "-timestamp"],
    CIAppSortOrder: ["asc", "desc"],
  },
  oneOfMap: {
    CIAppAggregateBucketValue: [
      "string",
      "number",
      "Array<CIAppAggregateBucketValueTimeseriesPoint>",
    ],
    CIAppCreatePipelineEventRequestAttributesResource: [
      "CIAppPipelineEventPipeline",
      "CIAppPipelineEventStage",
      "CIAppPipelineEventJob",
      "CIAppPipelineEventStep",
    ],
    CIAppGroupByMissing: ["string", "number"],
    CIAppGroupByTotal: ["boolean", "string", "number"],
    CIAppPipelineEventPipeline: [
      "CIAppPipelineEventFinishedPipeline",
      "CIAppPipelineEventInProgressPipeline",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    CIAppAggregateBucketValueTimeseriesPoint:
      CIAppAggregateBucketValueTimeseriesPoint,
    CIAppAggregateSort: CIAppAggregateSort,
    CIAppCIError: CIAppCIError,
    CIAppCompute: CIAppCompute,
    CIAppCreatePipelineEventRequest: CIAppCreatePipelineEventRequest,
    CIAppCreatePipelineEventRequestAttributes:
      CIAppCreatePipelineEventRequestAttributes,
    CIAppCreatePipelineEventRequestData: CIAppCreatePipelineEventRequestData,
    CIAppGitInfo: CIAppGitInfo,
    CIAppGroupByHistogram: CIAppGroupByHistogram,
    CIAppHostInfo: CIAppHostInfo,
    CIAppPipelineEvent: CIAppPipelineEvent,
    CIAppPipelineEventAttributes: CIAppPipelineEventAttributes,
    CIAppPipelineEventFinishedPipeline: CIAppPipelineEventFinishedPipeline,
    CIAppPipelineEventInProgressPipeline: CIAppPipelineEventInProgressPipeline,
    CIAppPipelineEventJob: CIAppPipelineEventJob,
    CIAppPipelineEventParentPipeline: CIAppPipelineEventParentPipeline,
    CIAppPipelineEventPreviousPipeline: CIAppPipelineEventPreviousPipeline,
    CIAppPipelineEventStage: CIAppPipelineEventStage,
    CIAppPipelineEventStep: CIAppPipelineEventStep,
    CIAppPipelineEventsRequest: CIAppPipelineEventsRequest,
    CIAppPipelineEventsResponse: CIAppPipelineEventsResponse,
    CIAppPipelinesAggregateRequest: CIAppPipelinesAggregateRequest,
    CIAppPipelinesAggregationBucketsResponse:
      CIAppPipelinesAggregationBucketsResponse,
    CIAppPipelinesAnalyticsAggregateResponse:
      CIAppPipelinesAnalyticsAggregateResponse,
    CIAppPipelinesBucketResponse: CIAppPipelinesBucketResponse,
    CIAppPipelinesGroupBy: CIAppPipelinesGroupBy,
    CIAppPipelinesQueryFilter: CIAppPipelinesQueryFilter,
    CIAppQueryOptions: CIAppQueryOptions,
    CIAppQueryPageOptions: CIAppQueryPageOptions,
    CIAppResponseLinks: CIAppResponseLinks,
    CIAppResponseMetadata: CIAppResponseMetadata,
    CIAppResponseMetadataWithPagination: CIAppResponseMetadataWithPagination,
    CIAppResponsePage: CIAppResponsePage,
    CIAppWarning: CIAppWarning,
    HTTPCIAppError: HTTPCIAppError,
    HTTPCIAppErrors: HTTPCIAppErrors,
  },
};
