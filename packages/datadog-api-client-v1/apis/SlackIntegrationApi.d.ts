import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { SlackIntegrationChannel } from '../models/SlackIntegrationChannel';
/**
 * no description
 */
export declare class SlackIntegrationApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Add a channel to your Datadog-Slack integration.
     * Create a Slack integration channel
     * @param accountName Your Slack account name.
     * @param body Payload describing Slack channel to be created
     */
    createSlackIntegrationChannel(accountName: string, body: SlackIntegrationChannel, options?: Configuration): Promise<RequestContext>;
    /**
     * Get a channel configured for your Datadog-Slack integration.
     * Get a Slack integration channel
     * @param accountName Your Slack account name.
     * @param channelName The name of the Slack channel being operated on.
     */
    getSlackIntegrationChannel(accountName: string, channelName: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get a list of all channels configured for your Datadog-Slack integration.
     * Get all channels in a Slack integration
     * @param accountName Your Slack account name.
     */
    getSlackIntegrationChannels(accountName: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Remove a channel from your Datadog-Slack integration.
     * Remove a Slack integration channel
     * @param accountName Your Slack account name.
     * @param channelName The name of the Slack channel being operated on.
     */
    removeSlackIntegrationChannel(accountName: string, channelName: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Update a channel used in your Datadog-Slack integration.
     * Update a Slack integration channel
     * @param accountName Your Slack account name.
     * @param channelName The name of the Slack channel being operated on.
     * @param body Payload describing fields and values to be updated.
     */
    updateSlackIntegrationChannel(accountName: string, channelName: string, body: SlackIntegrationChannel, options?: Configuration): Promise<RequestContext>;
}
export declare class SlackIntegrationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSlackIntegrationChannel
     * @throws ApiException if the response code was not in [200, 299]
     */
    createSlackIntegrationChannel(response: ResponseContext): Promise<SlackIntegrationChannel>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSlackIntegrationChannel
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSlackIntegrationChannel(response: ResponseContext): Promise<SlackIntegrationChannel>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSlackIntegrationChannels
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSlackIntegrationChannels(response: ResponseContext): Promise<Array<SlackIntegrationChannel>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeSlackIntegrationChannel
     * @throws ApiException if the response code was not in [200, 299]
     */
    removeSlackIntegrationChannel(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateSlackIntegrationChannel
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateSlackIntegrationChannel(response: ResponseContext): Promise<SlackIntegrationChannel>;
}
