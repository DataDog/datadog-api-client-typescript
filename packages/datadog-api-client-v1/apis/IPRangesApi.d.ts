import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { IPRanges } from '../models/IPRanges';
/**
 * no description
 */
export declare class IPRangesApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Get information about Datadog IP ranges.
     * List IP Ranges
     */
    getIPRanges(options?: Configuration): Promise<RequestContext>;
}
export declare class IPRangesApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIPRanges
     * @throws ApiException if the response code was not in [200, 299]
     */
    getIPRanges(response: ResponseContext): Promise<IPRanges>;
}
