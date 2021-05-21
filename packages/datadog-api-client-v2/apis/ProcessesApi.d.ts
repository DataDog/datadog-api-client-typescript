import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { ProcessSummariesResponse } from '../models/ProcessSummariesResponse';
/**
 * no description
 */
export declare class ProcessesApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Get all processes for your organization.
     * Get all processes
     * @param search String to search processes by.
     * @param tags Comma-separated list of tags to filter processes by.
     * @param from Unix timestamp (number of seconds since epoch) of the start of the query window. If not provided, the start of the query window will be 15 minutes before the &#x60;to&#x60; timestamp. If neither &#x60;from&#x60; nor &#x60;to&#x60; are provided, the query window will be &#x60;[now - 15m, now]&#x60;.
     * @param to Unix timestamp (number of seconds since epoch) of the end of the query window. If not provided, the end of the query window will be 15 minutes after the &#x60;from&#x60; timestamp. If neither &#x60;from&#x60; nor &#x60;to&#x60; are provided, the query window will be &#x60;[now - 15m, now]&#x60;.
     * @param pageLimit Maximum number of results returned.
     * @param pageCursor String to query the next page of results. This key is provided with each valid response from the API in &#x60;meta.page.after&#x60;.
     */
    listProcesses(search?: string, tags?: string, from?: number, to?: number, pageLimit?: number, pageCursor?: string, options?: Configuration): Promise<RequestContext>;
}
export declare class ProcessesApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listProcesses
     * @throws ApiException if the response code was not in [200, 299]
     */
    listProcesses(response: ResponseContext): Promise<ProcessSummariesResponse>;
}
