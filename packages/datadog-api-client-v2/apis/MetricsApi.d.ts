import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { MetricAllTagsResponse } from '../models/MetricAllTagsResponse';
import { MetricTagConfigurationCreateRequest } from '../models/MetricTagConfigurationCreateRequest';
import { MetricTagConfigurationMetricTypes } from '../models/MetricTagConfigurationMetricTypes';
import { MetricTagConfigurationResponse } from '../models/MetricTagConfigurationResponse';
import { MetricTagConfigurationUpdateRequest } from '../models/MetricTagConfigurationUpdateRequest';
import { MetricVolumesResponse } from '../models/MetricVolumesResponse';
import { MetricsAndMetricTagConfigurationsResponse } from '../models/MetricsAndMetricTagConfigurationsResponse';
/**
 * no description
 */
export declare class MetricsApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Create and define a list of queryable tag keys for an existing count/gauge/rate/distribution metric. Optionally, include percentile aggregations on any distribution metric. Can only be used with application keys of users with the `Manage Tags for Metrics` permission.
     * Create a tag configuration
     * @param metricName The name of the metric.
     * @param body
     */
    createTagConfiguration(metricName: string, body: MetricTagConfigurationCreateRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * Deletes a metric's tag configuration. Can only be used with application keys from users with the `Manage Tags for Metrics` permission.
     * Delete a tag configuration
     * @param metricName The name of the metric.
     */
    deleteTagConfiguration(metricName: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Returns the tag configuration for the given metric name.
     * List tag configuration by name
     * @param metricName The name of the metric.
     */
    listTagConfigurationByName(metricName: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Returns all configured count/gauge/rate/distribution metric names (with additional filters if specified).
     * List tag configurations
     * @param filterConfigured Filter metrics that have configured tags.
     * @param filterTagsConfigured Filter tag configurations by configured tags.
     * @param filterMetricType Filter tag configurations by metric type.
     * @param filterIncludePercentiles Filter distributions with additional percentile aggregations enabled or disabled.
     * @param filterTags Filter metrics that have been submitted with the given tags. Supports boolean and wildcard expressions. Cannot be combined with other filters.
     * @param windowSeconds The number of seconds of look back (from now) to apply to a filter[tag] query. Defaults value is 3600 (1 hour), maximum value is 172,800 (2 days).
     */
    listTagConfigurations(filterConfigured?: boolean, filterTagsConfigured?: string, filterMetricType?: MetricTagConfigurationMetricTypes, filterIncludePercentiles?: boolean, filterTags?: string, windowSeconds?: number, options?: Configuration): Promise<RequestContext>;
    /**
     * View indexed tag key-value pairs for a given metric name.
     * List tags by metric name
     * @param metricName The name of the metric.
     */
    listTagsByMetricName(metricName: string, options?: Configuration): Promise<RequestContext>;
    /**
     * View distinct metrics volumes for the given metric name.  Custom distribution metrics will return both ingested and indexed custom metric volumes. For Metrics without Limits&trade; beta customers, all metrics will return both ingested/indexed volumes. Custom metrics generated in-app from other products will return `null` for ingested volumes.
     * List distinct metric volumes by metric name
     * @param metricName The name of the metric.
     */
    listVolumesByMetricName(metricName: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Update the tag configuration of a metric or percentile aggregations of a distribution metric. Can only be used with application keys from users with the `Manage Tags for Metrics` permission.
     * Update a tag configuration
     * @param metricName The name of the metric.
     * @param body
     */
    updateTagConfiguration(metricName: string, body: MetricTagConfigurationUpdateRequest, options?: Configuration): Promise<RequestContext>;
}
export declare class MetricsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createTagConfiguration
     * @throws ApiException if the response code was not in [200, 299]
     */
    createTagConfiguration(response: ResponseContext): Promise<MetricTagConfigurationResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteTagConfiguration
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteTagConfiguration(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listTagConfigurationByName
     * @throws ApiException if the response code was not in [200, 299]
     */
    listTagConfigurationByName(response: ResponseContext): Promise<MetricTagConfigurationResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listTagConfigurations
     * @throws ApiException if the response code was not in [200, 299]
     */
    listTagConfigurations(response: ResponseContext): Promise<MetricsAndMetricTagConfigurationsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listTagsByMetricName
     * @throws ApiException if the response code was not in [200, 299]
     */
    listTagsByMetricName(response: ResponseContext): Promise<MetricAllTagsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listVolumesByMetricName
     * @throws ApiException if the response code was not in [200, 299]
     */
    listVolumesByMetricName(response: ResponseContext): Promise<MetricVolumesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateTagConfiguration
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateTagConfiguration(response: ResponseContext): Promise<MetricTagConfigurationResponse>;
}
