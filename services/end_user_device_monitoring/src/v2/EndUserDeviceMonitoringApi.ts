import {
  ApiException,
  BaseAPIRequestFactory,
  BaseServerConfiguration,
  buildUserAgent,
  Configuration,
  createConfiguration,
  deserialize,
  getPreferredMediaType,
  HttpMethod,
  isBrowser,
  logger,
  normalizeMediaType,
  parse,
  RequiredError,
  RequestContext,
  ResponseContext,
  serialize,
  ServerConfiguration,
  stringify,
  applySecurityAuthentication,
} from "@datadog/datadog-api-client";

import { TypingInfo } from "./models/TypingInfo";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { DeviceBaseArray } from "./models/DeviceBaseArray";
import { DeviceDetails } from "./models/DeviceDetails";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { version } from "../version";

export class EndUserDeviceMonitoringApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("end-user-device-monitoring", version);
    }
  }
  public async getEUDMDevice(
    deviceId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations["EndUserDeviceMonitoringApi.v2.getEUDMDevice"]
    ) {
      throw new Error(
        "Unstable operation 'getEUDMDevice' is disabled. Enable it by setting `configuration.unstableOperations['EndUserDeviceMonitoringApi.v2.getEUDMDevice'] = true`",
      );
    }

    // verify required parameter 'deviceId' is not null or undefined
    if (deviceId === null || deviceId === undefined) {
      throw new RequiredError("deviceId", "getEUDMDevice");
    }

    // Path Params
    const localVarPath = "/api/v2/eudm/devices/{device_id}".replace(
      "{device_id}",
      encodeURIComponent(String(deviceId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "EndUserDeviceMonitoringApi.v2.getEUDMDevice",
      EndUserDeviceMonitoringApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

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
    pageLimit?: number,
    pageCursor?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "EndUserDeviceMonitoringApi.v2.getEUDMDevices"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getEUDMDevices' is disabled. Enable it by setting `configuration.unstableOperations['EndUserDeviceMonitoringApi.v2.getEUDMDevices'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/eudm/devices";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "EndUserDeviceMonitoringApi.v2.getEUDMDevices",
      EndUserDeviceMonitoringApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (bssid !== undefined) {
      requestContext.setQueryParam(
        "bssid",
        serialize(bssid, TypingInfo, "Array<string>", ""),
        "multi",
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        serialize(pageLimit, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        serialize(pageCursor, TypingInfo, "string", ""),
        "",
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
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getEUDMDevice
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getEUDMDevice(
    response: ResponseContext,
  ): Promise<DeviceDetails> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DeviceDetails = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeviceDetails",
      ) as DeviceDetails;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: DeviceDetails = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeviceDetails",
        "",
      ) as DeviceDetails;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
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
    response: ResponseContext,
  ): Promise<DeviceBaseArray> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DeviceBaseArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeviceBaseArray",
      ) as DeviceBaseArray;
      return body;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: DeviceBaseArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeviceBaseArray",
        "",
      ) as DeviceBaseArray;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
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
   * @type number
   */
  pageLimit?: number;
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

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: EndUserDeviceMonitoringApiRequestFactory,
    responseProcessor?: EndUserDeviceMonitoringApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new EndUserDeviceMonitoringApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new EndUserDeviceMonitoringApiResponseProcessor();
  }

  /**
   * @param param The request object
   */
  public getEUDMDevice(
    param: EndUserDeviceMonitoringApiGetEUDMDeviceRequest,
    options?: Configuration,
  ): Promise<DeviceDetails> {
    const requestContextPromise = this.requestFactory.getEUDMDevice(
      param.deviceId,
      options,
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
    options?: Configuration,
  ): Promise<DeviceBaseArray> {
    const requestContextPromise = this.requestFactory.getEUDMDevices(
      param.bssid,
      param.pageLimit,
      param.pageCursor,
      options,
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
