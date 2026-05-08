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
import { CloudInventorySyncConfigResponse } from "../models/CloudInventorySyncConfigResponse";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { UpsertCloudInventorySyncConfigRequest } from "../models/UpsertCloudInventorySyncConfigRequest";

export class StorageManagementApiRequestFactory extends BaseAPIRequestFactory {
  public async upsertSyncConfig(
    body: UpsertCloudInventorySyncConfigRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "upsertSyncConfig");
    }

    // Path Params
    const localVarPath = "/api/v2/cloudinventoryservice/syncconfigs";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StorageManagementApi.upsertSyncConfig")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "UpsertCloudInventorySyncConfigRequest",
        ""
      ),
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

export class StorageManagementApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to upsertSyncConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async upsertSyncConfig(
    response: ResponseContext
  ): Promise<CloudInventorySyncConfigResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CloudInventorySyncConfigResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "CloudInventorySyncConfigResponse"
        ) as CloudInventorySyncConfigResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
      const body: CloudInventorySyncConfigResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "CloudInventorySyncConfigResponse",
          ""
        ) as CloudInventorySyncConfigResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface StorageManagementApiUpsertSyncConfigRequest {
  /**
   * @type UpsertCloudInventorySyncConfigRequest
   */
  body: UpsertCloudInventorySyncConfigRequest;
}

export class StorageManagementApi {
  private requestFactory: StorageManagementApiRequestFactory;
  private responseProcessor: StorageManagementApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: StorageManagementApiRequestFactory,
    responseProcessor?: StorageManagementApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new StorageManagementApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new StorageManagementApiResponseProcessor();
  }

  /**
   * Enable Storage Management for an S3 bucket, GCS bucket, or Azure container by registering the destination that holds its inventory reports. Set `data.id` to the cloud provider (`aws`, `gcp`, or `azure`) and provide the matching settings under data.attributes. Calling this endpoint with the same provider replaces the existing configuration.
   * @param param The request object
   */
  public upsertSyncConfig(
    param: StorageManagementApiUpsertSyncConfigRequest,
    options?: Configuration
  ): Promise<CloudInventorySyncConfigResponse> {
    const requestContextPromise = this.requestFactory.upsertSyncConfig(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.upsertSyncConfig(responseContext);
        });
    });
  }
}
