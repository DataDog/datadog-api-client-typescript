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
import { Snapshot } from "../models/Snapshot";
import { SnapshotArray } from "../models/SnapshotArray";
import { SnapshotCreateRequest } from "../models/SnapshotCreateRequest";
import { SnapshotUpdateRequest } from "../models/SnapshotUpdateRequest";

export class RumReplayHeatmapsApiRequestFactory extends BaseAPIRequestFactory {
  public async createReplayHeatmapSnapshot(
    body: SnapshotCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createReplayHeatmapSnapshot");
    }

    // Path Params
    const localVarPath = "/api/v2/replay/heatmap/snapshots";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumReplayHeatmapsApi.createReplayHeatmapSnapshot")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SnapshotCreateRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteReplayHeatmapSnapshot(
    snapshotId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'snapshotId' is not null or undefined
    if (snapshotId === null || snapshotId === undefined) {
      throw new RequiredError("snapshotId", "deleteReplayHeatmapSnapshot");
    }

    // Path Params
    const localVarPath =
      "/api/v2/replay/heatmap/snapshots/{snapshot_id}".replace(
        "{snapshot_id}",
        encodeURIComponent(String(snapshotId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumReplayHeatmapsApi.deleteReplayHeatmapSnapshot")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listReplayHeatmapSnapshots(
    filterViewName: string,
    filterDeviceType?: string,
    pageLimit?: number,
    filterApplicationId?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'filterViewName' is not null or undefined
    if (filterViewName === null || filterViewName === undefined) {
      throw new RequiredError("filterViewName", "listReplayHeatmapSnapshots");
    }

    // Path Params
    const localVarPath = "/api/v2/replay/heatmap/snapshots";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumReplayHeatmapsApi.listReplayHeatmapSnapshots")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filterDeviceType !== undefined) {
      requestContext.setQueryParam(
        "filter[device_type]",
        ObjectSerializer.serialize(filterDeviceType, "string", ""),
        ""
      );
    }
    if (filterViewName !== undefined) {
      requestContext.setQueryParam(
        "filter[view_name]",
        ObjectSerializer.serialize(filterViewName, "string", ""),
        ""
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        ObjectSerializer.serialize(pageLimit, "number", ""),
        ""
      );
    }
    if (filterApplicationId !== undefined) {
      requestContext.setQueryParam(
        "filter[application_id]",
        ObjectSerializer.serialize(filterApplicationId, "string", ""),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async updateReplayHeatmapSnapshot(
    snapshotId: string,
    body: SnapshotUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'snapshotId' is not null or undefined
    if (snapshotId === null || snapshotId === undefined) {
      throw new RequiredError("snapshotId", "updateReplayHeatmapSnapshot");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateReplayHeatmapSnapshot");
    }

    // Path Params
    const localVarPath =
      "/api/v2/replay/heatmap/snapshots/{snapshot_id}".replace(
        "{snapshot_id}",
        encodeURIComponent(String(snapshotId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RumReplayHeatmapsApi.updateReplayHeatmapSnapshot")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SnapshotUpdateRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }
}

export class RumReplayHeatmapsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createReplayHeatmapSnapshot
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createReplayHeatmapSnapshot(
    response: ResponseContext
  ): Promise<Snapshot> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: Snapshot = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Snapshot"
      ) as Snapshot;
      return body;
    }
    if (response.httpStatusCode === 429) {
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
      const body: Snapshot = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Snapshot",
        ""
      ) as Snapshot;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteReplayHeatmapSnapshot
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteReplayHeatmapSnapshot(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 429) {
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
      return;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listReplayHeatmapSnapshots
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listReplayHeatmapSnapshots(
    response: ResponseContext
  ): Promise<SnapshotArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SnapshotArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SnapshotArray"
      ) as SnapshotArray;
      return body;
    }
    if (response.httpStatusCode === 429) {
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
      const body: SnapshotArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SnapshotArray",
        ""
      ) as SnapshotArray;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateReplayHeatmapSnapshot
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateReplayHeatmapSnapshot(
    response: ResponseContext
  ): Promise<Snapshot> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: Snapshot = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Snapshot"
      ) as Snapshot;
      return body;
    }
    if (response.httpStatusCode === 429) {
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
      const body: Snapshot = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Snapshot",
        ""
      ) as Snapshot;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface RumReplayHeatmapsApiCreateReplayHeatmapSnapshotRequest {
  /**
   * @type SnapshotCreateRequest
   */
  body: SnapshotCreateRequest;
}

export interface RumReplayHeatmapsApiDeleteReplayHeatmapSnapshotRequest {
  /**
   * Unique identifier of the heatmap snapshot.
   * @type string
   */
  snapshotId: string;
}

export interface RumReplayHeatmapsApiListReplayHeatmapSnapshotsRequest {
  /**
   * View name to filter snapshots.
   * @type string
   */
  filterViewName: string;
  /**
   * Device type to filter snapshots.
   * @type string
   */
  filterDeviceType?: string;
  /**
   * Maximum number of snapshots to return.
   * @type number
   */
  pageLimit?: number;
  /**
   * Filter by application ID.
   * @type string
   */
  filterApplicationId?: string;
}

export interface RumReplayHeatmapsApiUpdateReplayHeatmapSnapshotRequest {
  /**
   * Unique identifier of the heatmap snapshot.
   * @type string
   */
  snapshotId: string;
  /**
   * @type SnapshotUpdateRequest
   */
  body: SnapshotUpdateRequest;
}

export class RumReplayHeatmapsApi {
  private requestFactory: RumReplayHeatmapsApiRequestFactory;
  private responseProcessor: RumReplayHeatmapsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: RumReplayHeatmapsApiRequestFactory,
    responseProcessor?: RumReplayHeatmapsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new RumReplayHeatmapsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new RumReplayHeatmapsApiResponseProcessor();
  }

  /**
   * Create a heatmap snapshot.
   * @param param The request object
   */
  public createReplayHeatmapSnapshot(
    param: RumReplayHeatmapsApiCreateReplayHeatmapSnapshotRequest,
    options?: Configuration
  ): Promise<Snapshot> {
    const requestContextPromise =
      this.requestFactory.createReplayHeatmapSnapshot(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createReplayHeatmapSnapshot(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a heatmap snapshot.
   * @param param The request object
   */
  public deleteReplayHeatmapSnapshot(
    param: RumReplayHeatmapsApiDeleteReplayHeatmapSnapshotRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteReplayHeatmapSnapshot(
        param.snapshotId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteReplayHeatmapSnapshot(
            responseContext
          );
        });
    });
  }

  /**
   * List heatmap snapshots.
   * @param param The request object
   */
  public listReplayHeatmapSnapshots(
    param: RumReplayHeatmapsApiListReplayHeatmapSnapshotsRequest,
    options?: Configuration
  ): Promise<SnapshotArray> {
    const requestContextPromise =
      this.requestFactory.listReplayHeatmapSnapshots(
        param.filterViewName,
        param.filterDeviceType,
        param.pageLimit,
        param.filterApplicationId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listReplayHeatmapSnapshots(
            responseContext
          );
        });
    });
  }

  /**
   * Update a heatmap snapshot.
   * @param param The request object
   */
  public updateReplayHeatmapSnapshot(
    param: RumReplayHeatmapsApiUpdateReplayHeatmapSnapshotRequest,
    options?: Configuration
  ): Promise<Snapshot> {
    const requestContextPromise =
      this.requestFactory.updateReplayHeatmapSnapshot(
        param.snapshotId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateReplayHeatmapSnapshot(
            responseContext
          );
        });
    });
  }
}
