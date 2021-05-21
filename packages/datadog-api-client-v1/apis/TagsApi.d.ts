import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { HostTags } from '../models/HostTags';
import { TagToHosts } from '../models/TagToHosts';
/**
 * no description
 */
export declare class TagsApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * This endpoint allows you to add new tags to a host, optionally specifying where these tags come from.
     * Add tags to a host
     * @param hostName This endpoint allows you to add new tags to a host, optionally specifying where the tags came from.
     * @param body Update host tags request body.
     * @param source The source of the tags. [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value).
     */
    createHostTags(hostName: string, body: HostTags, source?: string, options?: Configuration): Promise<RequestContext>;
    /**
     * This endpoint allows you to remove all user-assigned tags for a single host.
     * Remove host tags
     * @param hostName This endpoint allows you to remove all user-assigned tags for a single host.
     * @param source The source of the tags (e.g. chef, puppet). [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value).
     */
    deleteHostTags(hostName: string, source?: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Return the list of tags that apply to a given host.
     * Get host tags
     * @param hostName When specified, filters list of tags to those tags with the specified source.
     * @param source Source to filter.
     */
    getHostTags(hostName: string, source?: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Return a mapping of tags to hosts for your whole infrastructure.
     * Get Tags
     * @param source When specified, filters host list to those tags with the specified source.
     */
    listHostTags(source?: string, options?: Configuration): Promise<RequestContext>;
    /**
     * This endpoint allows you to update/replace all tags in an integration source with those supplied in the request.
     * Update host tags
     * @param hostName This endpoint allows you to update/replace all in an integration source with those supplied in the request.
     * @param body Add tags to host
     * @param source The source of the tags (e.g. chef, puppet). [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value)
     */
    updateHostTags(hostName: string, body: HostTags, source?: string, options?: Configuration): Promise<RequestContext>;
}
export declare class TagsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createHostTags
     * @throws ApiException if the response code was not in [200, 299]
     */
    createHostTags(response: ResponseContext): Promise<HostTags>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteHostTags
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteHostTags(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getHostTags
     * @throws ApiException if the response code was not in [200, 299]
     */
    getHostTags(response: ResponseContext): Promise<HostTags>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listHostTags
     * @throws ApiException if the response code was not in [200, 299]
     */
    listHostTags(response: ResponseContext): Promise<TagToHosts>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateHostTags
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateHostTags(response: ResponseContext): Promise<HostTags>;
}
