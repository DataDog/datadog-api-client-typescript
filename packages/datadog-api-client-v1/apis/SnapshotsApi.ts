// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from "./baseapi";
import { Configuration, getServer } from "../configuration";
import { RequestContext, HttpMethod, ResponseContext } from "../http/http";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "./exception";
import { isCodeInRange } from "../util";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { GraphSnapshot } from "../models/GraphSnapshot";

/**
 * no description
 */
export class SnapshotsApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * Take graph snapshots. **Note**: When a snapshot is created, there is some delay before it is available.
   * Take graph snapshots
   * @param start The POSIX timestamp of the start of the query.
   * @param end The POSIX timestamp of the end of the query.
   * @param metricQuery The metric query.
   * @param eventQuery A query that adds event bands to the graph.
   * @param graphDef A JSON document defining the graph. &#x60;graph_def&#x60; can be used instead of &#x60;metric_query&#x60;. The JSON document uses the [grammar defined here](https://docs.datadoghq.com/graphing/graphing_json/#grammar) and should be formatted to a single line then URL encoded.
   * @param title A title for the graph. If no title is specified, the graph does not have a title.
   */
  public async getGraphSnapshot(
    start: number,
    end: number,
    metricQuery?: string,
    eventQuery?: string,
    graphDef?: string,
    title?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'start' is not null or undefined
    if (start === null || start === undefined) {
      throw new RequiredError(
        "Required parameter start was null or undefined when calling getGraphSnapshot."
      );
    }

    // verify required parameter 'end' is not null or undefined
    if (end === null || end === undefined) {
      throw new RequiredError(
        "Required parameter end was null or undefined when calling getGraphSnapshot."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/graph/snapshot";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "SnapshotsApi.getGraphSnapshot"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (metricQuery !== undefined) {
      requestContext.setQueryParam(
        "metric_query",
        ObjectSerializer.serialize(metricQuery, "string", "")
      );
    }
    if (start !== undefined) {
      requestContext.setQueryParam(
        "start",
        ObjectSerializer.serialize(start, "number", "int64")
      );
    }
    if (end !== undefined) {
      requestContext.setQueryParam(
        "end",
        ObjectSerializer.serialize(end, "number", "int64")
      );
    }
    if (eventQuery !== undefined) {
      requestContext.setQueryParam(
        "event_query",
        ObjectSerializer.serialize(eventQuery, "string", "")
      );
    }
    if (graphDef !== undefined) {
      requestContext.setQueryParam(
        "graph_def",
        ObjectSerializer.serialize(graphDef, "string", "")
      );
    }
    if (title !== undefined) {
      requestContext.setQueryParam(
        "title",
        ObjectSerializer.serialize(title, "string", "")
      );
    }

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = _config.authMethods["AuthZ"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

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
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: GraphSnapshot = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GraphSnapshot",
        ""
      ) as GraphSnapshot;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
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
