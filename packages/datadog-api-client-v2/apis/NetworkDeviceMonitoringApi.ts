import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
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

export class NetworkDeviceMonitoringApiRequestFactory extends BaseAPIRequestFactory {
  public async listDevices(
    pageNumber?: number,
    pageSize?: number,
    sort?: string,
    filterTag?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/ndm/devices";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.NetworkDeviceMonitoringApi.listDevices")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        ObjectSerializer.serialize(pageNumber, "number", "int64")
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", "int64")
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "string", "")
      );
    }
    if (filterTag !== undefined) {
      requestContext.setQueryParam(
        "filter[tag]",
        ObjectSerializer.serialize(filterTag, "string", "")
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

export class NetworkDeviceMonitoringApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listDevices
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listDevices(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any"
      ) as any;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface NetworkDeviceMonitoringApiListDevicesRequest {
  /**
   * The page number to fetch.
   * @type number
   */
  pageNumber?: number;
  /**
   * The number of devices to return per page.
   * @type number
   */
  pageSize?: number;
  /**
   * The field to sort the devices by.
   * @type string
   */
  sort?: string;
  /**
   * Filter devices by tag.
   * @type string
   */
  filterTag?: string;
}

export class NetworkDeviceMonitoringApi {
  private requestFactory: NetworkDeviceMonitoringApiRequestFactory;
  private responseProcessor: NetworkDeviceMonitoringApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: NetworkDeviceMonitoringApiRequestFactory,
    responseProcessor?: NetworkDeviceMonitoringApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory ||
      new NetworkDeviceMonitoringApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new NetworkDeviceMonitoringApiResponseProcessor();
  }

  /**
   * Get the list of devices.
   * @param param The request object
   */
  public listDevices(
    param: NetworkDeviceMonitoringApiListDevicesRequest = {},
    options?: Configuration
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.listDevices(
      param.pageNumber,
      param.pageSize,
      param.sort,
      param.filterTag,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listDevices(responseContext);
        });
    });
  }
}
