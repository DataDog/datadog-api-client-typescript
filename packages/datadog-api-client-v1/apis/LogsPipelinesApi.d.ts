import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { LogsPipeline } from '../models/LogsPipeline';
import { LogsPipelinesOrder } from '../models/LogsPipelinesOrder';
/**
 * no description
 */
export declare class LogsPipelinesApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Create a pipeline in your organization.
     * Create a pipeline
     * @param body Definition of the new pipeline.
     */
    createLogsPipeline(body: LogsPipeline, options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a given pipeline from your organization. This endpoint takes no JSON arguments.
     * Delete a pipeline
     * @param pipelineId ID of the pipeline to delete.
     */
    deleteLogsPipeline(pipelineId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get a specific pipeline from your organization. This endpoint takes no JSON arguments.
     * Get a pipeline
     * @param pipelineId ID of the pipeline to get.
     */
    getLogsPipeline(pipelineId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get the current order of your pipelines. This endpoint takes no JSON arguments.
     * Get pipeline order
     */
    getLogsPipelineOrder(options?: Configuration): Promise<RequestContext>;
    /**
     * Get all pipelines from your organization. This endpoint takes no JSON arguments.
     * Get all pipelines
     */
    listLogsPipelines(options?: Configuration): Promise<RequestContext>;
    /**
     * Update a given pipeline configuration to change it’s processors or their order.  **Note**: Using this method updates your pipeline configuration by **replacing** your current configuration with the new one sent to your Datadog organization.
     * Update a pipeline
     * @param pipelineId ID of the pipeline to delete.
     * @param body New definition of the pipeline.
     */
    updateLogsPipeline(pipelineId: string, body: LogsPipeline, options?: Configuration): Promise<RequestContext>;
    /**
     * Update the order of your pipelines. Since logs are processed sequentially, reordering a pipeline may change the structure and content of the data processed by other pipelines and their processors.  **Note**: Using the `PUT` method updates your pipeline order by replacing your current order with the new one sent to your Datadog organization.
     * Update pipeline order
     * @param body Object containing the new ordered list of pipeline IDs.
     */
    updateLogsPipelineOrder(body: LogsPipelinesOrder, options?: Configuration): Promise<RequestContext>;
}
export declare class LogsPipelinesApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createLogsPipeline
     * @throws ApiException if the response code was not in [200, 299]
     */
    createLogsPipeline(response: ResponseContext): Promise<LogsPipeline>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteLogsPipeline
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteLogsPipeline(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getLogsPipeline
     * @throws ApiException if the response code was not in [200, 299]
     */
    getLogsPipeline(response: ResponseContext): Promise<LogsPipeline>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getLogsPipelineOrder
     * @throws ApiException if the response code was not in [200, 299]
     */
    getLogsPipelineOrder(response: ResponseContext): Promise<LogsPipelinesOrder>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLogsPipelines
     * @throws ApiException if the response code was not in [200, 299]
     */
    listLogsPipelines(response: ResponseContext): Promise<Array<LogsPipeline>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateLogsPipeline
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateLogsPipeline(response: ResponseContext): Promise<LogsPipeline>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateLogsPipelineOrder
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateLogsPipelineOrder(response: ResponseContext): Promise<LogsPipelinesOrder>;
}
