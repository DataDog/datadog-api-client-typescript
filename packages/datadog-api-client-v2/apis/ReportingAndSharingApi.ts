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
import { CreateSnapshotRequest } from "../models/CreateSnapshotRequest";
import { CreateSnapshotResponse } from "../models/CreateSnapshotResponse";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";

export class ReportingAndSharingApiRequestFactory extends BaseAPIRequestFactory {
  public async createSnapshot(
    body: CreateSnapshotRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createSnapshot'");
    if (!_config.unstableOperations["v2.createSnapshot"]) {
      throw new Error("Unstable operation 'createSnapshot' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createSnapshot");
    }

    // Path Params
    const localVarPath = "/api/v2/snapshot";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ReportingAndSharingApi.createSnapshot")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CreateSnapshotRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class ReportingAndSharingApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createSnapshot
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createSnapshot(
    response: ResponseContext
  ): Promise<CreateSnapshotResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CreateSnapshotResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CreateSnapshotResponse"
      ) as CreateSnapshotResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: CreateSnapshotResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CreateSnapshotResponse",
        ""
      ) as CreateSnapshotResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface ReportingAndSharingApiCreateSnapshotRequest {
  /**
   * @type CreateSnapshotRequest
   */
  body: CreateSnapshotRequest;
}

export class ReportingAndSharingApi {
  private requestFactory: ReportingAndSharingApiRequestFactory;
  private responseProcessor: ReportingAndSharingApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: ReportingAndSharingApiRequestFactory,
    responseProcessor?: ReportingAndSharingApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new ReportingAndSharingApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new ReportingAndSharingApiResponseProcessor();
  }

  /**
   * Create a snapshot of a graph widget. The snapshot is rendered asynchronously; the returned URL can be polled until the image is ready.
   * @param param The request object
   */
  public createSnapshot(
    param: ReportingAndSharingApiCreateSnapshotRequest,
    options?: Configuration
  ): Promise<CreateSnapshotResponse> {
    const requestContextPromise = this.requestFactory.createSnapshot(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSnapshot(responseContext);
        });
    });
  }
}
