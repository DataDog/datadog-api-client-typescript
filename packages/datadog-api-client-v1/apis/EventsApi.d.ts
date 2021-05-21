import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { EventCreateRequest } from '../models/EventCreateRequest';
import { EventCreateResponse } from '../models/EventCreateResponse';
import { EventListResponse } from '../models/EventListResponse';
import { EventPriority } from '../models/EventPriority';
import { EventResponse } from '../models/EventResponse';
/**
 * no description
 */
export declare class EventsApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * This endpoint allows you to post events to the stream. Tag them, set priority and event aggregate them with other events.
     * Post an event
     * @param body Event request object
     */
    createEvent(body: EventCreateRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * This endpoint allows you to query for event details.  **Note**: If the event you’re querying contains markdown formatting of any kind, you may see characters such as `%`,`\\`,`n` in your output.
     * Get an event
     * @param eventId The ID of the event.
     */
    getEvent(eventId: number, options?: Configuration): Promise<RequestContext>;
    /**
     * The event stream can be queried and filtered by time, priority, sources and tags.  **Notes**: - If the event you’re querying contains markdown formatting of any kind, you may see characters such as `%`,`\\`,`n` in your output.  - This endpoint returns a maximum of `1000` most recent results. To return additional results, identify the last timestamp of the last result and set that as the `end` query time to paginate the results. You can also use the page parameter to specify which set of `1000` results to return.
     * Query the event stream
     * @param start POSIX timestamp.
     * @param end POSIX timestamp.
     * @param priority Priority of your events, either &#x60;low&#x60; or &#x60;normal&#x60;.
     * @param sources A comma separated string of sources.
     * @param tags A comma separated list indicating what tags, if any, should be used to filter the list of monitors by scope.
     * @param unaggregated Set unaggregated to &#x60;true&#x60; to return all events within the specified [&#x60;start&#x60;,&#x60;end&#x60;] timeframe. Otherwise if an event is aggregated to a parent event with a timestamp outside of the timeframe, it won&#39;t be available in the output. Aggregated events with &#x60;is_aggregate&#x3D;true&#x60; in the response will still be returned unless exclude_aggregate is set to &#x60;true.&#x60;
     * @param excludeAggregate Set &#x60;exclude_aggregate&#x60; to &#x60;true&#x60; to only return unaggregated events where &#x60;is_aggregate&#x3D;false&#x60; in the response. If the &#x60;exclude_aggregate&#x60; parameter is set to &#x60;true&#x60;, then the unaggregated parameter is ignored and will be &#x60;true&#x60; by default.
     * @param page By default 1000 results are returned per request. Set page to the number of the page to return with &#x60;0&#x60; being the first page. The page parameter can only be used when either unaggregated or exclude_aggregate is set to &#x60;true.&#x60;
     */
    listEvents(start: number, end: number, priority?: EventPriority, sources?: string, tags?: string, unaggregated?: boolean, excludeAggregate?: boolean, page?: number, options?: Configuration): Promise<RequestContext>;
}
export declare class EventsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createEvent
     * @throws ApiException if the response code was not in [200, 299]
     */
    createEvent(response: ResponseContext): Promise<EventCreateResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEvent
     * @throws ApiException if the response code was not in [200, 299]
     */
    getEvent(response: ResponseContext): Promise<EventResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
    listEvents(response: ResponseContext): Promise<EventListResponse>;
}
