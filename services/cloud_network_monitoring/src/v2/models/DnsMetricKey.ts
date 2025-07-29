import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The metric key for DNS metrics.
 */
export type DnsMetricKey =
  | typeof DNS_TOTAL_REQUESTS
  | typeof DNS_FAILURES
  | typeof DNS_SUCCESSFUL_RESPONSES
  | typeof DNS_FAILED_RESPONSES
  | typeof DNS_TIMEOUTS
  | typeof DNS_RESPONSES_NXDOMAIN
  | typeof DNS_RESPONSES_SERVFAIL
  | typeof DNS_RESPONSES_OTHER
  | typeof DNS_SUCCESS_LATENCY_PERCENTILE
  | typeof DNS_FAILURE_LATENCY_PERCENTILE
  | UnparsedObject;
export const DNS_TOTAL_REQUESTS = "dns_total_requests";
export const DNS_FAILURES = "dns_failures";
export const DNS_SUCCESSFUL_RESPONSES = "dns_successful_responses";
export const DNS_FAILED_RESPONSES = "dns_failed_responses";
export const DNS_TIMEOUTS = "dns_timeouts";
export const DNS_RESPONSES_NXDOMAIN = "dns_responses.nxdomain";
export const DNS_RESPONSES_SERVFAIL = "dns_responses.servfail";
export const DNS_RESPONSES_OTHER = "dns_responses.other";
export const DNS_SUCCESS_LATENCY_PERCENTILE = "dns_success_latency_percentile";
export const DNS_FAILURE_LATENCY_PERCENTILE = "dns_failure_latency_percentile";
