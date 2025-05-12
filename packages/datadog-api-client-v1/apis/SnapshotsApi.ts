import {
  BaseAPIRequestFactory,
  RequiredError,
} from "../../datadog-api-client-common/baseapi";
import {
  Configuration,
  applySecurityAuthentication,
} from "../../datadog-api-client-common/configuration";
import {
  RequestContext,
  HttpMethod,
  ResponseContext,
} from "../../datadog-api-client-common/http/http";

import { logger } from "../../../logger";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "../../datadog-api-client-common/exception";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { GraphSnapshot } from "../models/GraphSnapshot";

export class SnapshotsApiRequestFactory extends BaseAPIRequestFactory {
  public async getGraphSnapshot(
    start: number,
    end: number,
    metricQuery?: string,
    eventQuery?: string,
    graphDef?: string,
    title?: string,
    height?: number,
    width?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'start' is not null or undefined
    if (start === null || start === undefined) {
      throw new RequiredError("start", "getGraphSnapshot");
    }

    // verify required parameter 'end' is not null or undefined
    if (end === null || end === undefined) {
      throw new RequiredError("end", "getGraphSnapshot");
    }

    // Path Params
    const localVarPath = "/api/v1/graph/snapshot";

    // Make Request Context
    const requestContext = _config
      .getServer("v1.SnapshotsApi.getGraphSnapshot")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (metricQuery !== undefined) {
      requestContext.setQueryParam(
        "metric_query",
        ObjectSerializer.serialize(metricQuery, "string", ""),
        ""
      );
    }
    if (start !== undefined) {
      requestContext.setQueryParam(
        "start",
        ObjectSerializer.serialize(start, "number", "int64"),
        ""
      );
    }
    if (end !== undefined) {
      requestContext.setQueryParam(
        "end",
        ObjectSerializer.serialize(end, "number", "int64"),
        ""
      );
    }
    if (eventQuery !== undefined) {
      requestContext.setQueryParam(
        "event_query",
        ObjectSerializer.serialize(eventQuery, "string", ""),
        ""
      );
    }
    if (graphDef !== undefined) {
      requestContext.setQueryParam(
        "graph_def",
        ObjectSerializer.serialize(graphDef, "string", ""),
        ""
      );
    }
    if (title !== undefined) {
      requestContext.setQueryParam(
        "title",
        ObjectSerializer.serialize(title, "string", ""),
        ""
      );
    }
    if (height !== undefined) {
      requestContext.setQueryParam(
        "height",
        ObjectSerializer.serialize(height, "number", "int64"),
        ""
      );
    }
    if (width !== undefined) {
      requestContext.setQueryParam(
        "width",
        ObjectSerializer.serialize(width, "number", "int64"),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class SnapshotsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getGraphSnapshot
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getGraphSnapshot(
    response: ResponseContext
  ): Promise<GraphSnapshot> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GraphSnapshot = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GraphSnapshot"
      ) as GraphSnapshot;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: GraphSnapshot = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GraphSnapshot",
        ""
      ) as GraphSnapshot;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface SnapshotsApiGetGraphSnapshotRequest {
  /**
   * The POSIX timestamp of the start of the query in seconds.
   * @type number
   */
  start: number;
  /**
   * The POSIX timestamp of the end of the query in seconds.
   * @type number
   */
  end: number;
  /**
   * The metric query.
   * @type string
   */
  metricQuery?: string;
  /**
   * A query that adds event bands to the graph.
   * @type string
   */
  eventQuery?: string;
  /**
   * A JSON document defining the graph. `graph_def` can be used instead of `metric_query`.
   * The JSON document uses the [grammar defined here](https://docs.datadoghq.com/graphing/graphing_json/#grammar)
   * and should be formatted to a single line then URL encoded.
   * @type string
   */
  graphDef?: string;
  /**
   * A title for the graph. If no title is specified, the graph does not have a title.
   * @type string
   */
  title?: string;
  /**
   * The height of the graph. If no height is specified, the graph's original height is used.
   * @type number
   */
  height?: number;
  /**
   * The width of the graph. If no width is specified, the graph's original width is used.
   * @type number
   */
  width?: number;
}

export class SnapshotsApi {
  private requestFactory: SnapshotsApiRequestFactory;
  private responseProcessor: SnapshotsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: SnapshotsApiRequestFactory,
    responseProcessor?: SnapshotsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new SnapshotsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new SnapshotsApiResponseProcessor();
  }

  /**
   * Take graph snapshots.
   * **Note**: When a snapshot is created, there is some delay before it is available.
   * @param param The request object
   */
  public getGraphSnapshot(
    param: SnapshotsApiGetGraphSnapshotRequest,
    options?: Configuration
  ): Promise<GraphSnapshot> {
    const requestContextPromise = this.requestFactory.getGraphSnapshot(
      param.start,
      param.end,
      param.metricQuery,
      param.eventQuery,
      param.graphDef,
      param.title,
      param.height,
      param.width,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getGraphSnapshot(responseContext);
        });
    });
  }
}
