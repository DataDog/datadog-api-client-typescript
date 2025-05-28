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
import { ContentEncoding } from "../models/ContentEncoding";
import { HTTPLog } from "../models/HTTPLog";
import { HTTPLogError } from "../models/HTTPLogError";
import { HTTPLogItem } from "../models/HTTPLogItem";
import { LogsAPIErrorResponse } from "../models/LogsAPIErrorResponse";
import { LogsListRequest } from "../models/LogsListRequest";
import { LogsListResponse } from "../models/LogsListResponse";

export class LogsApiRequestFactory extends BaseAPIRequestFactory {

  public async listLogs(body: LogsListRequest,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError('body', 'listLogs');
    }

    // Path Params
    const localVarPath = '/api/v1/logs-queries/list';

    // Make Request Context
    const requestContext = _config.getServer('v1.LogsApi.listLogs').makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "LogsListRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }

  public async submitLog(body: Array<HTTPLogItem>,contentEncoding?: ContentEncoding,ddtags?: string,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError('body', 'submitLog');
    }

    // Path Params
    const localVarPath = '/v1/input';

    // Make Request Context
    const requestContext = _config.getServer('v1.LogsApi.submitLog').makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (ddtags !== undefined) {
      requestContext.setQueryParam("ddtags", ObjectSerializer.serialize(ddtags, "string", ""), "");
    }

    // Header Params
    if (contentEncoding !== undefined) {
      requestContext.setHeaderParam("Content-Encoding", ObjectSerializer.serialize(contentEncoding, "ContentEncoding", ""));
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
      "application/json;simple",
      "application/logplex-1",
      "text/plain"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "Array<HTTPLogItem>", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth"]);

    return requestContext;
  }
}

export class LogsApiResponseProcessor {

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listLogs
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async listLogs(response: ResponseContext): Promise<LogsListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: LogsListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsListResponse"
      ) as LogsListResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: LogsAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "LogsAPIErrorResponse"
        ) as LogsAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<LogsAPIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<LogsAPIErrorResponse>(response.httpStatusCode, body);
    }
    if (response.httpStatusCode === 403||response.httpStatusCode === 429) {
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
      const body: LogsListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogsListResponse", ""
      ) as LogsListResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to submitLog
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async submitLog(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any"
      ) as any;
      return body;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: HTTPLogError;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "HTTPLogError"
        ) as HTTPLogError;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<HTTPLogError>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<HTTPLogError>(response.httpStatusCode, body);
    }
    if (response.httpStatusCode === 429) {
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
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any", ""
      ) as any;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }
}

export interface LogsApiListLogsRequest {
  /**
   * Logs filter
   * @type LogsListRequest
   */
  body: LogsListRequest
}

export interface LogsApiSubmitLogRequest {
  /**
   * Log to send (JSON format).
   * @type Array<HTTPLogItem>
   */
  body: Array<HTTPLogItem>
  /**
   * HTTP header used to compress the media-type.
   * @type ContentEncoding
   */
  contentEncoding?: ContentEncoding
  /**
   * Log tags can be passed as query parameters with `text/plain` content type.
   * @type string
   */
  ddtags?: string
}

export class LogsApi {
  private requestFactory: LogsApiRequestFactory;
  private responseProcessor: LogsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(configuration: Configuration, requestFactory?: LogsApiRequestFactory, responseProcessor?: LogsApiResponseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new LogsApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new LogsApiResponseProcessor();
  }

  /**
   * List endpoint returns logs that match a log search query.
   * [Results are paginated][1].
   * 
   * **If you are considering archiving logs for your organization,
   * consider use of the Datadog archive capabilities instead of the log list API.
   * See [Datadog Logs Archive documentation][2].**
   * 
   * [1]: /logs/guide/collect-multiple-logs-with-pagination
   * [2]: https://docs.datadoghq.com/logs/archives
   * @param param The request object
   */
  public listLogs(param: LogsApiListLogsRequest, options?: Configuration): Promise<LogsListResponse> {
    const requestContextPromise = this.requestFactory.listLogs(param.body,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.listLogs(responseContext);
        });
    });
  }

  /**
   * Send your logs to your Datadog platform over HTTP. Limits per HTTP request are:
   * 
   * - Maximum content size per payload (uncompressed): 5MB
   * - Maximum size for a single log: 1MB
   * - Maximum array size if sending multiple logs in an array: 1000 entries
   * 
   * Any log exceeding 1MB is accepted and truncated by Datadog:
   * - For a single log request, the API truncates the log at 1MB and returns a 2xx.
   * - For a multi-logs request, the API processes all logs, truncates only logs larger than 1MB, and returns a 2xx.
   * 
   * Datadog recommends sending your logs compressed.
   * Add the `Content-Encoding: gzip` header to the request when sending compressed logs.
   * 
   * The status codes answered by the HTTP API are:
   * - 200: OK
   * - 400: Bad request (likely an issue in the payload formatting)
   * - 403: Permission issue (likely using an invalid API Key)
   * - 413: Payload too large (batch is above 5MB uncompressed)
   * - 5xx: Internal error, request should be retried after some time
   * @param param The request object
   */
  public submitLog(param: LogsApiSubmitLogRequest, options?: Configuration): Promise<any> {
    const requestContextPromise = this.requestFactory.submitLog(param.body,param.contentEncoding,param.ddtags,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.submitLog(responseContext);
        });
    });
  }
}