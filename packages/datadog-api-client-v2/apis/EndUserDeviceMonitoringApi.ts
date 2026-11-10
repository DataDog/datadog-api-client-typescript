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
import { Int64Input } from "../../datadog-api-client-common/util";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { DeviceBaseArray } from "../models/DeviceBaseArray";
import { DeviceDetails } from "../models/DeviceDetails";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";

export class EndUserDeviceMonitoringApiRequestFactory extends BaseAPIRequestFactory {
  public async getEUDMDevice(
    deviceId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getEUDMDevice'");
    if (!_config.unstableOperations["v2.getEUDMDevice"]) {
      throw new Error("Unstable operation 'getEUDMDevice' is disabled");
    }

    // verify required parameter 'deviceId' is not null or undefined
    if (deviceId === null || deviceId === undefined) {
      throw new RequiredError("deviceId", "getEUDMDevice");
    }

    // Path Params
    const localVarPath = "/api/v2/eudm/devices/{device_id}".replace(
      "{device_id}",
      encodeURIComponent(String(deviceId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.EndUserDeviceMonitoringApi.getEUDMDevice")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getEUDMDevices(
    bssid?: Array<string>,
    pageLimit?: Int64Input,
    pageCursor?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getEUDMDevices'");
    if (!_config.unstableOperations["v2.getEUDMDevices"]) {
      throw new Error("Unstable operation 'getEUDMDevices' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/eudm/devices";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.EndUserDeviceMonitoringApi.getEUDMDevices")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (bssid !== undefined) {
      requestContext.setQueryParam(
        "bssid",
        ObjectSerializer.serialize(bssid, "Array<string>", ""),
        "multi"
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        ObjectSerializer.serialize(pageLimit, "number", "int64"),
        ""
      );
    }
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        ObjectSerializer.serialize(pageCursor, "string", ""),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class EndUserDeviceMonitoringApiResponseProcessor {
  private configuration?: Configuration;

  public constructor(configuration?: Configuration) {
    this.configuration = configuration;
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getEUDMDevice
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getEUDMDevice(
    response: ResponseContext
  ): Promise<DeviceDetails> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DeviceDetails = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "DeviceDetails",
        "",
        this.configuration?.preserveLargeIntegers
      ) as DeviceDetails;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: DeviceDetails = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "DeviceDetails",
        "",
        this.configuration?.preserveLargeIntegers
      ) as DeviceDetails;
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
   * @params response Response returned by the server for a request to getEUDMDevices
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getEUDMDevices(
    response: ResponseContext
  ): Promise<DeviceBaseArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DeviceBaseArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "DeviceBaseArray",
        "",
        this.configuration?.preserveLargeIntegers
      ) as DeviceBaseArray;
      return body;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: DeviceBaseArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(
          await response.body.text(),
          contentType,
          this.configuration?.preserveLargeIntegers
        ),
        "DeviceBaseArray",
        "",
        this.configuration?.preserveLargeIntegers
      ) as DeviceBaseArray;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface EndUserDeviceMonitoringApiGetEUDMDeviceRequest {
  /**
   * Unique identifier of the device to fetch. Matches the Datadog host identifier.
   * @type string
   */
  deviceId: string;
}

export interface EndUserDeviceMonitoringApiGetEUDMDevicesRequest {
  /**
   * Filter devices to those currently associated with any of the given BSSID values.
   * Each value must be a MAC-48 address; repeat the parameter to pass several values.
   * @type Array<string>
   */
  bssid?: Array<string>;
  /**
   * Maximum number of devices to return in one page. Must be a positive integer.
   * If not set, the response contains all matching devices.
   * @type Int64Input
   */
  pageLimit?: Int64Input;
  /**
   * Opaque cursor that selects the next page. Use the `meta.page.after` value
   * of the previous response. Devices are ordered by ID.
   * @type string
   */
  pageCursor?: string;
}

export class EndUserDeviceMonitoringApi {
  private requestFactory: EndUserDeviceMonitoringApiRequestFactory;
  private responseProcessor: EndUserDeviceMonitoringApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: EndUserDeviceMonitoringApiRequestFactory,
    responseProcessor?: EndUserDeviceMonitoringApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory ||
      new EndUserDeviceMonitoringApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor ||
      new EndUserDeviceMonitoringApiResponseProcessor(configuration);
  }

  /**
   * @param param The request object
   */
  public getEUDMDevice(
    param: EndUserDeviceMonitoringApiGetEUDMDeviceRequest,
    options?: Configuration
  ): Promise<DeviceDetails> {
    const requestContextPromise = this.requestFactory.getEUDMDevice(
      param.deviceId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getEUDMDevice(responseContext);
        });
    });
  }

  /**
   * @param param The request object
   */
  public getEUDMDevices(
    param: EndUserDeviceMonitoringApiGetEUDMDevicesRequest = {},
    options?: Configuration
  ): Promise<DeviceBaseArray> {
    const requestContextPromise = this.requestFactory.getEUDMDevices(
      param.bssid,
      param.pageLimit,
      param.pageCursor,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getEUDMDevices(responseContext);
        });
    });
  }
}
