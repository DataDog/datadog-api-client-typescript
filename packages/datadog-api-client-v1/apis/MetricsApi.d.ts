import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { IntakePayloadAccepted } from '../models/IntakePayloadAccepted';
import { MetricMetadata } from '../models/MetricMetadata';
import { MetricSearchResponse } from '../models/MetricSearchResponse';
import { MetricsListResponse } from '../models/MetricsListResponse';
import { MetricsPayload } from '../models/MetricsPayload';
import { MetricsQueryResponse } from '../models/MetricsQueryResponse';
/**
 * no description
 */
export declare class MetricsApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Get metadata about a specific metric.
     * Get metric metadata
     * @param metricName Name of the metric for which to get metadata.
     */
    getMetricMetadata(metricName: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get the list of actively reporting metrics from a given time until now.
     * Get active metrics list
     * @param from Seconds since the Unix epoch.
     * @param host Hostname for filtering the list of metrics returned. If set, metrics retrieved are those with the corresponding hostname tag.
     * @param tagFilter Filter metrics that have been submitted with the given tags. Supports boolean and wildcard expressions. Cannot be combined with other filters.
     */
    listActiveMetrics(from: number, host?: string, tagFilter?: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Search for metrics from the last 24 hours in Datadog.
     * Search metrics
     * @param q Query string to search metrics upon. Must be prefixed with &#x60;metrics:&#x60;.
     */
    listMetrics(q: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Query timeseries points.
     * Query timeseries points
     * @param from Start of the queried time period, seconds since the Unix epoch.
     * @param to End of the queried time period, seconds since the Unix epoch.
     * @param query Query string.
     */
    queryMetrics(from: number, to: number, query: string, options?: Configuration): Promise<RequestContext>;
    /**
     * The metrics end-point allows you to post time-series data that can be graphed on Datadog’s dashboards. The maximum payload size is 3.2 megabytes (3200000 bytes). Compressed payloads must have a decompressed size of less than 62 megabytes (62914560 bytes).  If you’re submitting metrics directly to the Datadog API without using DogStatsD, expect:  - 64 bits for the timestamp - 32 bits for the value - 20 bytes for the metric names - 50 bytes for the timeseries - The full payload is approximately 100 bytes. However, with the DogStatsD API, compression is applied, which reduces the payload size.
     * Submit metrics
     * @param body
     */
    submitMetrics(body: MetricsPayload, options?: Configuration): Promise<RequestContext>;
    /**
     * Edit metadata of a specific metric. Find out more about [supported types](https://docs.datadoghq.com/developers/metrics).
     * Edit metric metadata
     * @param metricName Name of the metric for which to edit metadata.
     * @param body New metadata.
     */
    updateMetricMetadata(metricName: string, body: MetricMetadata, options?: Configuration): Promise<RequestContext>;
}
export declare class MetricsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMetricMetadata
     * @throws ApiException if the response code was not in [200, 299]
     */
    getMetricMetadata(response: ResponseContext): Promise<MetricMetadata>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listActiveMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
    listActiveMetrics(response: ResponseContext): Promise<MetricsListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
    listMetrics(response: ResponseContext): Promise<MetricSearchResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to queryMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
    queryMetrics(response: ResponseContext): Promise<MetricsQueryResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to submitMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
    submitMetrics(response: ResponseContext): Promise<IntakePayloadAccepted>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateMetricMetadata
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateMetricMetadata(response: ResponseContext): Promise<MetricMetadata>;
}
