import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { DistributionPointsPayload } from "./DistributionPointsPayload";
import { DistributionPointsSeries } from "./DistributionPointsSeries";
import { IntakePayloadAccepted } from "./IntakePayloadAccepted";
import { MetricMetadata } from "./MetricMetadata";
import { MetricSearchResponse } from "./MetricSearchResponse";
import { MetricSearchResponseResults } from "./MetricSearchResponseResults";
import { MetricsListResponse } from "./MetricsListResponse";
import { MetricsPayload } from "./MetricsPayload";
import { MetricsQueryMetadata } from "./MetricsQueryMetadata";
import { MetricsQueryResponse } from "./MetricsQueryResponse";
import { MetricsQueryUnit } from "./MetricsQueryUnit";
import { Series } from "./Series";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    DistributionPointsContentEncoding: ["deflate"],
    DistributionPointsType: ["distribution"],
    MetricContentEncoding: ["deflate", "gzip"],
  },
  oneOfMap: {
    DistributionPointItem: ["number", "Array<number>"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    DistributionPointsPayload: DistributionPointsPayload,
    DistributionPointsSeries: DistributionPointsSeries,
    IntakePayloadAccepted: IntakePayloadAccepted,
    MetricMetadata: MetricMetadata,
    MetricSearchResponse: MetricSearchResponse,
    MetricSearchResponseResults: MetricSearchResponseResults,
    MetricsListResponse: MetricsListResponse,
    MetricsPayload: MetricsPayload,
    MetricsQueryMetadata: MetricsQueryMetadata,
    MetricsQueryResponse: MetricsQueryResponse,
    MetricsQueryUnit: MetricsQueryUnit,
    Series: Series,
  },
};
