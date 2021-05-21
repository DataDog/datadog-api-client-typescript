import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { LogsMetricCreateRequest } from '../models/LogsMetricCreateRequest';
import { LogsMetricResponse } from '../models/LogsMetricResponse';
import { LogsMetricUpdateRequest } from '../models/LogsMetricUpdateRequest';
import { LogsMetricsResponse } from '../models/LogsMetricsResponse';
/**
 * no description
 */
export declare class LogsMetricsApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Create a metric based on your ingested logs in your organization. Returns the log-based metric object from the request body when the request is successful.
     * Create a log-based metric
     * @param body The definition of the new log-based metric.
     */
    createLogsMetric(body: LogsMetricCreateRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a specific log-based metric from your organization.
     * Delete a log-based metric
     * @param metricId The name of the log-based metric.
     */
    deleteLogsMetric(metricId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get a specific log-based metric from your organization.
     * Get a log-based metric
     * @param metricId The name of the log-based metric.
     */
    getLogsMetric(metricId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get the list of configured log-based metrics with their definitions.
     * Get all log-based metrics
     */
    listLogsMetrics(options?: Configuration): Promise<RequestContext>;
    /**
     * Update a specific log-based metric from your organization. Returns the log-based metric object from the request body when the request is successful.
     * Update a log-based metric
     * @param metricId The name of the log-based metric.
     * @param body New definition of the log-based metric.
     */
    updateLogsMetric(metricId: string, body: LogsMetricUpdateRequest, options?: Configuration): Promise<RequestContext>;
}
export declare class LogsMetricsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createLogsMetric
     * @throws ApiException if the response code was not in [200, 299]
     */
    createLogsMetric(response: ResponseContext): Promise<LogsMetricResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteLogsMetric
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteLogsMetric(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getLogsMetric
     * @throws ApiException if the response code was not in [200, 299]
     */
    getLogsMetric(response: ResponseContext): Promise<LogsMetricResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLogsMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
    listLogsMetrics(response: ResponseContext): Promise<LogsMetricsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateLogsMetric
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateLogsMetric(response: ResponseContext): Promise<LogsMetricResponse>;
}
