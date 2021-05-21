import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { LogsAggregateRequest } from '../models/LogsAggregateRequest';
import { LogsAggregateResponse } from '../models/LogsAggregateResponse';
import { LogsListRequest } from '../models/LogsListRequest';
import { LogsListResponse } from '../models/LogsListResponse';
import { LogsSort } from '../models/LogsSort';
/**
 * no description
 */
export declare class LogsApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * The API endpoint to aggregate events into buckets and compute metrics and timeseries.
     * Aggregate events
     * @param body
     */
    aggregateLogs(body: LogsAggregateRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * List endpoint returns logs that match a log search query. [Results are paginated][1].  Use this endpoint to build complex logs filtering and search.  **If you are considering archiving logs for your organization, consider use of the Datadog archive capabilities instead of the log list API. See [Datadog Logs Archive documentation][2].**  [1]: /logs/guide/collect-multiple-logs-with-pagination [2]: https://docs.datadoghq.com/logs/archives
     * Search logs
     * @param body
     */
    listLogs(body?: LogsListRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * List endpoint returns logs that match a log search query. [Results are paginated][1].  Use this endpoint to see your latest logs.  **If you are considering archiving logs for your organization, consider use of the Datadog archive capabilities instead of the log list API. See [Datadog Logs Archive documentation][2].**  [1]: /logs/guide/collect-multiple-logs-with-pagination [2]: https://docs.datadoghq.com/logs/archives
     * Get a list of logs
     * @param filterQuery Search query following logs syntax.
     * @param filterIndex For customers with multiple indexes, the indexes to search Defaults to &#39;*&#39; which means all indexes
     * @param filterFrom Minimum timestamp for requested logs.
     * @param filterTo Maximum timestamp for requested logs.
     * @param sort Order of logs in results.
     * @param pageCursor List following results with a cursor provided in the previous query.
     * @param pageLimit Maximum number of logs in the response.
     */
    listLogsGet(filterQuery?: string, filterIndex?: string, filterFrom?: Date, filterTo?: Date, sort?: LogsSort, pageCursor?: string, pageLimit?: number, options?: Configuration): Promise<RequestContext>;
}
export declare class LogsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to aggregateLogs
     * @throws ApiException if the response code was not in [200, 299]
     */
    aggregateLogs(response: ResponseContext): Promise<LogsAggregateResponse>;
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
     * @params response Response returned by the server for a request to listLogsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
    listLogsGet(response: ResponseContext): Promise<LogsListResponse>;
}
