import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { SingleAggregatedConnectionResponseArray } from "./SingleAggregatedConnectionResponseArray";
import { SingleAggregatedConnectionResponseData } from "./SingleAggregatedConnectionResponseData";
import { SingleAggregatedConnectionResponseDataAttributes } from "./SingleAggregatedConnectionResponseDataAttributes";
import { SingleAggregatedDnsResponseArray } from "./SingleAggregatedDnsResponseArray";
import { SingleAggregatedDnsResponseData } from "./SingleAggregatedDnsResponseData";
import { SingleAggregatedDnsResponseDataAttributes } from "./SingleAggregatedDnsResponseDataAttributes";
import { SingleAggregatedDnsResponseDataAttributesGroupByItems } from "./SingleAggregatedDnsResponseDataAttributesGroupByItems";
import { SingleAggregatedDnsResponseDataAttributesMetricsItems } from "./SingleAggregatedDnsResponseDataAttributesMetricsItems";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    DnsMetricKey: [
      "dns_total_requests",
      "dns_failures",
      "dns_successful_responses",
      "dns_failed_responses",
      "dns_timeouts",
      "dns_responses.nxdomain",
      "dns_responses.servfail",
      "dns_responses.other",
      "dns_success_latency_percentile",
      "dns_failure_latency_percentile",
    ],
    SingleAggregatedConnectionResponseDataType: ["aggregated_connection"],
    SingleAggregatedDnsResponseDataType: ["aggregated_dns"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    SingleAggregatedConnectionResponseArray:
      SingleAggregatedConnectionResponseArray,
    SingleAggregatedConnectionResponseData:
      SingleAggregatedConnectionResponseData,
    SingleAggregatedConnectionResponseDataAttributes:
      SingleAggregatedConnectionResponseDataAttributes,
    SingleAggregatedDnsResponseArray: SingleAggregatedDnsResponseArray,
    SingleAggregatedDnsResponseData: SingleAggregatedDnsResponseData,
    SingleAggregatedDnsResponseDataAttributes:
      SingleAggregatedDnsResponseDataAttributes,
    SingleAggregatedDnsResponseDataAttributesGroupByItems:
      SingleAggregatedDnsResponseDataAttributesGroupByItems,
    SingleAggregatedDnsResponseDataAttributesMetricsItems:
      SingleAggregatedDnsResponseDataAttributesMetricsItems,
  },
};
