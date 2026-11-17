import { ModelTypingInfo } from "@datadog/datadog-api-client-core";

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
import { ServiceCheck } from "./ServiceCheck";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    DistributionPointsContentEncoding: ["deflate"],
    DistributionPointsType: ["distribution"],
    MetricContentEncoding: ["deflate", "gzip"],
    ServiceCheckStatus: [0, 1, 2, 3],
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
    ServiceCheck: ServiceCheck,
  },
};
