import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { ContentEncoding } from '../models/ContentEncoding';
import { HTTPLogItem } from '../models/HTTPLogItem';
import { LogsListRequest } from '../models/LogsListRequest';
import { LogsListResponse } from '../models/LogsListResponse';
/**
 * no description
 */
export declare class LogsApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * List endpoint returns logs that match a log search query. [Results are paginated][1].  **If you are considering archiving logs for your organization, consider use of the Datadog archive capabilities instead of the log list API. See [Datadog Logs Archive documentation][2].**  [1]: /logs/guide/collect-multiple-logs-with-pagination [2]: https://docs.datadoghq.com/logs/archives
     * Search logs
     * @param body Logs filter
     */
    listLogs(body: LogsListRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * Send your logs to your Datadog platform over HTTP. Limits per HTTP request are:  - Maximum content size per payload (uncompressed): 5MB - Maximum size for a single log: 1MB - Maximum array size if sending multiple logs in an array: 1000 entries  Any log exceeding 1MB is accepted and truncated by Datadog: - For a single log request, the API truncates the log at 1MB and returns a 2xx. - For a multi-logs request, the API processes all logs, truncates only logs larger than 1MB, and returns a 2xx.  Datadog recommends sending your logs compressed. Add the `Content-Encoding: gzip` header to the request when sending compressed logs.  The status codes answered by the HTTP API are: - 200: OK - 400: Bad request (likely an issue in the payload formatting) - 403: Permission issue (likely using an invalid API Key) - 413: Payload too large (batch is above 5MB uncompressed) - 5xx: Internal error, request should be retried after some time
     * Send logs
     * @param body Log to send (JSON format).
     * @param contentEncoding HTTP header used to compress the media-type.
     * @param ddtags Log tags can be passed as query parameters with &#x60;text/plain&#x60; content type.
     */
    submitLog(body: Array<HTTPLogItem>, contentEncoding?: ContentEncoding, ddtags?: string, options?: Configuration): Promise<RequestContext>;
}
export declare class LogsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLogs
     * @throws ApiException if the response code was not in [200, 299]
     */
    listLogs(response: ResponseContext): Promise<LogsListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to submitLog
     * @throws ApiException if the response code was not in [200, 299]
     */
    submitLog(response: ResponseContext): Promise<any>;
}
