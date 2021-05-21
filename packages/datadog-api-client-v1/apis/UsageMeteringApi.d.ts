import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { UsageAnalyzedLogsResponse } from '../models/UsageAnalyzedLogsResponse';
import { UsageAttributionResponse } from '../models/UsageAttributionResponse';
import { UsageAttributionSort } from '../models/UsageAttributionSort';
import { UsageAttributionSupportedMetrics } from '../models/UsageAttributionSupportedMetrics';
import { UsageBillableSummaryResponse } from '../models/UsageBillableSummaryResponse';
import { UsageComplianceResponse } from '../models/UsageComplianceResponse';
import { UsageCustomReportsResponse } from '../models/UsageCustomReportsResponse';
import { UsageFargateResponse } from '../models/UsageFargateResponse';
import { UsageHostsResponse } from '../models/UsageHostsResponse';
import { UsageIncidentManagementResponse } from '../models/UsageIncidentManagementResponse';
import { UsageIndexedSpansResponse } from '../models/UsageIndexedSpansResponse';
import { UsageIngestedSpansResponse } from '../models/UsageIngestedSpansResponse';
import { UsageIoTResponse } from '../models/UsageIoTResponse';
import { UsageLambdaResponse } from '../models/UsageLambdaResponse';
import { UsageLogsByIndexResponse } from '../models/UsageLogsByIndexResponse';
import { UsageLogsByRetentionResponse } from '../models/UsageLogsByRetentionResponse';
import { UsageLogsResponse } from '../models/UsageLogsResponse';
import { UsageNetworkFlowsResponse } from '../models/UsageNetworkFlowsResponse';
import { UsageNetworkHostsResponse } from '../models/UsageNetworkHostsResponse';
import { UsageProfilingResponse } from '../models/UsageProfilingResponse';
import { UsageRumSessionsResponse } from '../models/UsageRumSessionsResponse';
import { UsageSNMPResponse } from '../models/UsageSNMPResponse';
import { UsageSort } from '../models/UsageSort';
import { UsageSortDirection } from '../models/UsageSortDirection';
import { UsageSpecifiedCustomReportsResponse } from '../models/UsageSpecifiedCustomReportsResponse';
import { UsageSummaryResponse } from '../models/UsageSummaryResponse';
import { UsageSyntheticsAPIResponse } from '../models/UsageSyntheticsAPIResponse';
import { UsageSyntheticsBrowserResponse } from '../models/UsageSyntheticsBrowserResponse';
import { UsageSyntheticsResponse } from '../models/UsageSyntheticsResponse';
import { UsageTimeseriesResponse } from '../models/UsageTimeseriesResponse';
import { UsageTopAvgMetricsResponse } from '../models/UsageTopAvgMetricsResponse';
import { UsageTraceResponse } from '../models/UsageTraceResponse';
import { UsageTracingWithoutLimitsResponse } from '../models/UsageTracingWithoutLimitsResponse';
/**
 * no description
 */
export declare class UsageMeteringApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Get daily custom reports.
     * Get the list of available daily custom reports
     * @param pageSize The number of files to return in the response. &#x60;[default&#x3D;60]&#x60;.
     * @param pageNumber The identifier of the first page to return. This parameter is used for the pagination feature &#x60;[default&#x3D;0]&#x60;.
     * @param sortDir The direction to sort by: &#x60;[desc, asc]&#x60;.
     * @param sort The field to sort by: &#x60;[computed_on, size, start_date, end_date]&#x60;.
     */
    getDailyCustomReports(pageSize?: number, pageNumber?: number, sortDir?: UsageSortDirection, sort?: UsageSort, options?: Configuration): Promise<RequestContext>;
    /**
     * Get hourly usage for incident management.
     * Get hourly usage for incident management
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    getIncidentManagement(startHr: Date, endHr?: Date, options?: Configuration): Promise<RequestContext>;
    /**
     * Get hourly usage for ingested spans.
     * Get hourly usage for ingested spans
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    getIngestedSpans(startHr: Date, endHr?: Date, options?: Configuration): Promise<RequestContext>;
    /**
     * Get monthly custom reports.
     * Get the list of available monthly custom reports
     * @param pageSize The number of files to return in the response &#x60;[default&#x3D;60].&#x60;
     * @param pageNumber The identifier of the first page to return. This parameter is used for the pagination feature &#x60;[default&#x3D;0]&#x60;.
     * @param sortDir The direction to sort by: &#x60;[desc, asc]&#x60;.
     * @param sort The field to sort by: &#x60;[computed_on, size, start_date, end_date]&#x60;.
     */
    getMonthlyCustomReports(pageSize?: number, pageNumber?: number, sortDir?: UsageSortDirection, sort?: UsageSort, options?: Configuration): Promise<RequestContext>;
    /**
     * Get specified daily custom reports.
     * Get specified daily custom reports
     * @param reportId The specified ID to search results for.
     */
    getSpecifiedDailyCustomReports(reportId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get specified monthly custom reports.
     * Get specified monthly custom reports
     * @param reportId The specified ID to search results for.
     */
    getSpecifiedMonthlyCustomReports(reportId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get hourly usage for tracing without limits.  **Note** This endpoint has been renamed to `/api/v1/usage/ingested-spans`.
     * Get hourly usage for tracing without limits
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    getTracingWithoutLimits(startHr: Date, endHr?: Date, options?: Configuration): Promise<RequestContext>;
    /**
     * Get hourly usage for analyzed logs (Security Monitoring).
     * Get hourly usage for analyzed logs
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    getUsageAnalyzedLogs(startHr: Date, endHr?: Date, options?: Configuration): Promise<RequestContext>;
    /**
     * Get Usage Attribution.
     * Get Usage Attribution
     * @param startMonth Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage beginning in this month. Maximum of 15 months ago.
     * @param fields Comma-separated list of usage types to return, or &#x60;*&#x60; for all usage types.
     * @param endMonth Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage ending this month.
     * @param sortDirection The direction to sort by: &#x60;[desc, asc]&#x60;.
     * @param sortName The field to sort by.
     */
    getUsageAttribution(startMonth: Date, fields: UsageAttributionSupportedMetrics, endMonth?: Date, sortDirection?: UsageSortDirection, sortName?: UsageAttributionSort, options?: Configuration): Promise<RequestContext>;
    /**
     * Get billable usage across your account.
     * Get billable usage across your account
     * @param month Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage starting this month.
     */
    getUsageBillableSummary(month?: Date, options?: Configuration): Promise<RequestContext>;
    /**
     * Get hourly usage for Compliance Monitoring.
     * Get hourly usage for Compliance Monitoring
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    getUsageComplianceMonitoring(startHr: Date, endHr?: Date, options?: Configuration): Promise<RequestContext>;
    /**
     * Get hourly usage for [Fargate](https://docs.datadoghq.com/integrations/ecs_fargate/).
     * Get hourly usage for Fargate
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    getUsageFargate(startHr: Date, endHr?: Date, options?: Configuration): Promise<RequestContext>;
    /**
     * Get hourly usage for hosts and containers.
     * Get hourly usage for hosts and containers
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    getUsageHosts(startHr: Date, endHr?: Date, options?: Configuration): Promise<RequestContext>;
    /**
     * Get hourly usage for indexed spans.
     * Get hourly usage for indexed spans
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    getUsageIndexedSpans(startHr: Date, endHr?: Date, options?: Configuration): Promise<RequestContext>;
    /**
     * Get hourly usage for IoT.
     * Get hourly usage for IoT
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    getUsageInternetOfThings(startHr: Date, endHr?: Date, options?: Configuration): Promise<RequestContext>;
    /**
     * Get hourly usage for lambda.
     * Get hourly usage for Lambda
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    getUsageLambda(startHr: Date, endHr?: Date, options?: Configuration): Promise<RequestContext>;
    /**
     * Get hourly usage for logs.
     * Get hourly usage for Logs
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    getUsageLogs(startHr: Date, endHr?: Date, options?: Configuration): Promise<RequestContext>;
    /**
     * Get hourly usage for logs by index.
     * Get hourly usage for Logs by Index
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     * @param indexName Comma-separated list of log index names.
     */
    getUsageLogsByIndex(startHr: Date, endHr?: Date, indexName?: Array<string>, options?: Configuration): Promise<RequestContext>;
    /**
     * Get hourly usage for indexed logs by retention period.
     * Get hourly logs usage by retention
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    getUsageLogsByRetention(startHr: Date, endHr?: Date, options?: Configuration): Promise<RequestContext>;
    /**
     * Get hourly usage for network flows.
     * Get hourly usage for Network Flows
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    getUsageNetworkFlows(startHr: Date, endHr?: Date, options?: Configuration): Promise<RequestContext>;
    /**
     * Get hourly usage for network hosts.
     * Get hourly usage for Network Hosts
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    getUsageNetworkHosts(startHr: Date, endHr?: Date, options?: Configuration): Promise<RequestContext>;
    /**
     * Get hourly usage for profiled hosts.
     * Get hourly usage for profiled hosts
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    getUsageProfiling(startHr: Date, endHr?: Date, options?: Configuration): Promise<RequestContext>;
    /**
     * Get hourly usage for [RUM](https://docs.datadoghq.com/real_user_monitoring/) Sessions.
     * Get hourly usage for RUM Sessions
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     * @param type RUM type: &#x60;[browser, mobile]&#x60;. Defaults to &#x60;browser&#x60;.
     */
    getUsageRumSessions(startHr: Date, endHr?: Date, type?: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get hourly usage for SNMP devices.
     * Get hourly usage for SNMP devices
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    getUsageSNMP(startHr: Date, endHr?: Date, options?: Configuration): Promise<RequestContext>;
    /**
     * Get usage across your multi-org account. You must have the multi-org feature enabled.
     * Get usage across your multi-org account
     * @param startMonth Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage beginning in this month. Maximum of 15 months ago.
     * @param endMonth Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage ending this month.
     * @param includeOrgDetails Include usage summaries for each sub-org.
     */
    getUsageSummary(startMonth: Date, endMonth?: Date, includeOrgDetails?: boolean, options?: Configuration): Promise<RequestContext>;
    /**
     * Get hourly usage for [Synthetics checks](https://docs.datadoghq.com/synthetics/).
     * Get hourly usage for Synthetics Checks
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    getUsageSynthetics(startHr: Date, endHr?: Date, options?: Configuration): Promise<RequestContext>;
    /**
     * Get hourly usage for [synthetics API checks](https://docs.datadoghq.com/synthetics/).
     * Get hourly usage for Synthetics API Checks
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    getUsageSyntheticsAPI(startHr: Date, endHr?: Date, options?: Configuration): Promise<RequestContext>;
    /**
     * Get hourly usage for synthetics browser checks.
     * Get hourly usage for Synthetics Browser Checks
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    getUsageSyntheticsBrowser(startHr: Date, endHr?: Date, options?: Configuration): Promise<RequestContext>;
    /**
     * Get hourly usage for [custom metrics](https://docs.datadoghq.com/developers/metrics/custom_metrics/).
     * Get hourly usage for custom metrics
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    getUsageTimeseries(startHr: Date, endHr?: Date, options?: Configuration): Promise<RequestContext>;
    /**
     * Get all [custom metrics](https://docs.datadoghq.com/developers/metrics/custom_metrics/) by hourly average. Use the month parameter to get a month-to-date data resolution or use the day parameter to get a daily resolution. One of the two is required, and only one of the two is allowed.
     * Get all custom metrics by hourly average
     * @param month Datetime in ISO-8601 format, UTC, precise to month: [YYYY-MM] for usage beginning at this hour. (Either month or day should be specified, but not both)
     * @param day Datetime in ISO-8601 format, UTC, precise to day: [YYYY-MM-DD] for usage beginning at this hour. (Either month or day should be specified, but not both)
     * @param names Comma-separated list of metric names.
     * @param limit Maximum number of results to return (between 1 and 5000) - defaults to 500 results if limit not specified.
     * @param nextRecordId List following results with a next_record_id provided in the previous query.
     */
    getUsageTopAvgMetrics(month?: Date, day?: Date, names?: Array<string>, limit?: number, nextRecordId?: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get hourly usage for trace search.  **Note** This endpoint has been renamed to `/api/v1/usage/indexed-spans`.
     * Get hourly usage for Trace Search
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    getUsageTrace(startHr: Date, endHr?: Date, options?: Configuration): Promise<RequestContext>;
}
export declare class UsageMeteringApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDailyCustomReports
     * @throws ApiException if the response code was not in [200, 299]
     */
    getDailyCustomReports(response: ResponseContext): Promise<UsageCustomReportsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIncidentManagement
     * @throws ApiException if the response code was not in [200, 299]
     */
    getIncidentManagement(response: ResponseContext): Promise<UsageIncidentManagementResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIngestedSpans
     * @throws ApiException if the response code was not in [200, 299]
     */
    getIngestedSpans(response: ResponseContext): Promise<UsageIngestedSpansResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMonthlyCustomReports
     * @throws ApiException if the response code was not in [200, 299]
     */
    getMonthlyCustomReports(response: ResponseContext): Promise<UsageCustomReportsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSpecifiedDailyCustomReports
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSpecifiedDailyCustomReports(response: ResponseContext): Promise<UsageSpecifiedCustomReportsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSpecifiedMonthlyCustomReports
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSpecifiedMonthlyCustomReports(response: ResponseContext): Promise<UsageSpecifiedCustomReportsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTracingWithoutLimits
     * @throws ApiException if the response code was not in [200, 299]
     */
    getTracingWithoutLimits(response: ResponseContext): Promise<UsageTracingWithoutLimitsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageAnalyzedLogs
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageAnalyzedLogs(response: ResponseContext): Promise<UsageAnalyzedLogsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageAttribution
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageAttribution(response: ResponseContext): Promise<UsageAttributionResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageBillableSummary
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageBillableSummary(response: ResponseContext): Promise<UsageBillableSummaryResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageComplianceMonitoring
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageComplianceMonitoring(response: ResponseContext): Promise<UsageComplianceResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageFargate
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageFargate(response: ResponseContext): Promise<UsageFargateResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageHosts
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageHosts(response: ResponseContext): Promise<UsageHostsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageIndexedSpans
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageIndexedSpans(response: ResponseContext): Promise<UsageIndexedSpansResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageInternetOfThings
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageInternetOfThings(response: ResponseContext): Promise<UsageIoTResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageLambda
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageLambda(response: ResponseContext): Promise<UsageLambdaResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageLogs
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageLogs(response: ResponseContext): Promise<UsageLogsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageLogsByIndex
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageLogsByIndex(response: ResponseContext): Promise<UsageLogsByIndexResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageLogsByRetention
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageLogsByRetention(response: ResponseContext): Promise<UsageLogsByRetentionResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageNetworkFlows
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageNetworkFlows(response: ResponseContext): Promise<UsageNetworkFlowsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageNetworkHosts
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageNetworkHosts(response: ResponseContext): Promise<UsageNetworkHostsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageProfiling
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageProfiling(response: ResponseContext): Promise<UsageProfilingResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageRumSessions
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageRumSessions(response: ResponseContext): Promise<UsageRumSessionsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageSNMP
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageSNMP(response: ResponseContext): Promise<UsageSNMPResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageSummary
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageSummary(response: ResponseContext): Promise<UsageSummaryResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageSynthetics
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageSynthetics(response: ResponseContext): Promise<UsageSyntheticsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageSyntheticsAPI
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageSyntheticsAPI(response: ResponseContext): Promise<UsageSyntheticsAPIResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageSyntheticsBrowser
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageSyntheticsBrowser(response: ResponseContext): Promise<UsageSyntheticsBrowserResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageTimeseries
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageTimeseries(response: ResponseContext): Promise<UsageTimeseriesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageTopAvgMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageTopAvgMetrics(response: ResponseContext): Promise<UsageTopAvgMetricsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageTrace
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageTrace(response: ResponseContext): Promise<UsageTraceResponse>;
}
