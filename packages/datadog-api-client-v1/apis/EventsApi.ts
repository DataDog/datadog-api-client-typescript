import { BaseAPIRequestFactory, RequiredError } from "../../datadog-api-client-common/baseapi";
import { Configuration, applySecurityAuthentication} from "../../datadog-api-client-common/configuration";
import {
  RequestContext,
  HttpMethod,
  ResponseContext,
  HttpFile
  } from "../../datadog-api-client-common/http/http";

import FormData from "form-data";

import { logger } from "../../../logger";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "../../datadog-api-client-common/exception";


import { APIErrorResponse } from "../models/APIErrorResponse";
import { EventCreateRequest } from "../models/EventCreateRequest";
import { EventCreateResponse } from "../models/EventCreateResponse";
import { EventListResponse } from "../models/EventListResponse";
import { EventPriority } from "../models/EventPriority";
import { EventResponse } from "../models/EventResponse";

export class EventsApiRequestFactory extends BaseAPIRequestFactory {

  public async createEvent(body: EventCreateRequest,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError('body', 'createEvent');
    }

    // Path Params
    const localVarPath = '/api/v1/events';

    // Make Request Context
    const requestContext = _config.getServer('v1.EventsApi.createEvent').makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "EventCreateRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
    ]);

    return requestContext;
  }

  public async getEvent(eventId: number,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'eventId' is not null or undefined
    if (eventId === null || eventId === undefined) {
      throw new RequiredError('eventId', 'getEvent');
    }

    // Path Params
    const localVarPath = '/api/v1/events/{event_id}'
      .replace('{event_id}', encodeURIComponent(String(eventId)));

    // Make Request Context
    const requestContext = _config.getServer('v1.EventsApi.getEvent').makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listEvents(start: number,end: number,priority?: EventPriority,sources?: string,tags?: string,unaggregated?: boolean,excludeAggregate?: boolean,page?: number,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'start' is not null or undefined
    if (start === null || start === undefined) {
      throw new RequiredError('start', 'listEvents');
    }

    // verify required parameter 'end' is not null or undefined
    if (end === null || end === undefined) {
      throw new RequiredError('end', 'listEvents');
    }

    // Path Params
    const localVarPath = '/api/v1/events';

    // Make Request Context
    const requestContext = _config.getServer('v1.EventsApi.listEvents').makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (start !== undefined) {
      requestContext.setQueryParam("start", ObjectSerializer.serialize(start, "number", "int64"), "");
    }
    if (end !== undefined) {
      requestContext.setQueryParam("end", ObjectSerializer.serialize(end, "number", "int64"), "");
    }
    if (priority !== undefined) {
      requestContext.setQueryParam("priority", ObjectSerializer.serialize(priority, "EventPriority", ""), "");
    }
    if (sources !== undefined) {
      requestContext.setQueryParam("sources", ObjectSerializer.serialize(sources, "string", ""), "");
    }
    if (tags !== undefined) {
      requestContext.setQueryParam("tags", ObjectSerializer.serialize(tags, "string", ""), "");
    }
    if (unaggregated !== undefined) {
      requestContext.setQueryParam("unaggregated", ObjectSerializer.serialize(unaggregated, "boolean", ""), "");
    }
    if (excludeAggregate !== undefined) {
      requestContext.setQueryParam("exclude_aggregate", ObjectSerializer.serialize(excludeAggregate, "boolean", ""), "");
    }
    if (page !== undefined) {
      requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", "int32"), "");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }
}

export class EventsApiResponseProcessor {

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createEvent
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async createEvent(response: ResponseContext): Promise<EventCreateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 202) {
      const body: EventCreateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "EventCreateResponse"
      ) as EventCreateResponse;
      return body;
    }
    if (response.httpStatusCode === 400||response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: EventCreateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "EventCreateResponse", ""
      ) as EventCreateResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getEvent
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async getEvent(response: ResponseContext): Promise<EventResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: EventResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "EventResponse"
      ) as EventResponse;
      return body;
    }
    if (response.httpStatusCode === 403||response.httpStatusCode === 404||response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: EventResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "EventResponse", ""
      ) as EventResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listEvents
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async listEvents(response: ResponseContext): Promise<EventListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: EventListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "EventListResponse"
      ) as EventListResponse;
      return body;
    }
    if (response.httpStatusCode === 400||response.httpStatusCode === 403||response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: EventListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "EventListResponse", ""
      ) as EventListResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }
}

export interface EventsApiCreateEventRequest {
  /**
   * Event request object
   * @type EventCreateRequest
   */
  body: EventCreateRequest
}

export interface EventsApiGetEventRequest {
  /**
   * The ID of the event.
   * @type number
   */
  eventId: number
}

export interface EventsApiListEventsRequest {
  /**
   * POSIX timestamp.
   * @type number
   */
  start: number
  /**
   * POSIX timestamp.
   * @type number
   */
  end: number
  /**
   * Priority of your events, either `low` or `normal`.
   * @type EventPriority
   */
  priority?: EventPriority
  /**
   * A comma separated string of sources.
   * @type string
   */
  sources?: string
  /**
   * A comma separated list indicating what tags, if any, should be used to filter the list of events.
   * @type string
   */
  tags?: string
  /**
   * Set unaggregated to `true` to return all events within the specified [`start`,`end`] timeframe.
   * Otherwise if an event is aggregated to a parent event with a timestamp outside of the timeframe,
   * it won't be available in the output. Aggregated events with `is_aggregate=true` in the response will still be returned unless exclude_aggregate is set to `true.`
   * @type boolean
   */
  unaggregated?: boolean
  /**
   * Set `exclude_aggregate` to `true` to only return unaggregated events where `is_aggregate=false` in the response. If the `exclude_aggregate` parameter is set to `true`,
   * then the unaggregated parameter is ignored and will be `true` by default.
   * @type boolean
   */
  excludeAggregate?: boolean
  /**
   * By default 1000 results are returned per request. Set page to the number of the page to return with `0` being the first page. The page parameter can only be used
   * when either unaggregated or exclude_aggregate is set to `true.`
   * @type number
   */
  page?: number
}

export class EventsApi {
  private requestFactory: EventsApiRequestFactory;
  private responseProcessor: EventsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(configuration: Configuration, requestFactory?: EventsApiRequestFactory, responseProcessor?: EventsApiResponseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new EventsApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new EventsApiResponseProcessor();
  }

  /**
   * This endpoint allows you to post events to the stream.
   * Tag them, set priority and event aggregate them with other events.
   * @param param The request object
   */
  public createEvent(param: EventsApiCreateEventRequest, options?: Configuration): Promise<EventCreateResponse> {
    const requestContextPromise = this.requestFactory.createEvent(param.body,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.createEvent(responseContext);
        });
    });
  }

  /**
   * This endpoint allows you to query for event details.
   * 
   * **Note**: If the event you’re querying contains markdown formatting of any kind,
   * you may see characters such as `%`,`\`,`n` in your output.
   * @param param The request object
   */
  public getEvent(param: EventsApiGetEventRequest, options?: Configuration): Promise<EventResponse> {
    const requestContextPromise = this.requestFactory.getEvent(param.eventId,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.getEvent(responseContext);
        });
    });
  }

  /**
   * The event stream can be queried and filtered by time, priority, sources and tags.
   * 
   * **Notes**:
   * - If the event you’re querying contains markdown formatting of any kind,
   * you may see characters such as `%`,`\`,`n` in your output.
   * 
   * - This endpoint returns a maximum of `1000` most recent results. To return additional results,
   * identify the last timestamp of the last result and set that as the `end` query time to
   * paginate the results. You can also use the page parameter to specify which set of `1000` results to return.
   * @param param The request object
   */
  public listEvents(param: EventsApiListEventsRequest, options?: Configuration): Promise<EventListResponse> {
    const requestContextPromise = this.requestFactory.listEvents(param.start,param.end,param.priority,param.sources,param.tags,param.unaggregated,param.excludeAggregate,param.page,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.listEvents(responseContext);
        });
    });
  }
}