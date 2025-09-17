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
import { DevicesListData } from "./models/DevicesListData";
import { GetDeviceResponse } from "./models/GetDeviceResponse";
import { GetInterfacesResponse } from "./models/GetInterfacesResponse";
import { ListDevicesResponse } from "./models/ListDevicesResponse";
import { ListTagsResponse } from "./models/ListTagsResponse";
import { version } from "../version";

export class NetworkDeviceMonitoringApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("network-device-monitoring", version);
    }
  }
  public async getDevice(
    deviceId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'deviceId' is not null or undefined
    if (deviceId === null || deviceId === undefined) {
      throw new RequiredError("deviceId", "getDevice");
    }

    // Path Params
    const localVarPath = "/api/v2/ndm/devices/{device_id}".replace(
      "{device_id}",
      encodeURIComponent(String(deviceId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "NetworkDeviceMonitoringApi.v2.getDevice",
      NetworkDeviceMonitoringApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getInterfaces(
    deviceId: string,
    getIpAddresses?: boolean,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'deviceId' is not null or undefined
    if (deviceId === null || deviceId === undefined) {
      throw new RequiredError("deviceId", "getInterfaces");
    }

    // Path Params
    const localVarPath = "/api/v2/ndm/interfaces";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "NetworkDeviceMonitoringApi.v2.getInterfaces",
      NetworkDeviceMonitoringApi.operationServers,
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

    // Query Params
    if (deviceId !== undefined) {
      requestContext.setQueryParam(
        "device_id",
        serialize(deviceId, TypingInfo, "string", ""),
        "",
      );
    }
    if (getIpAddresses !== undefined) {
      requestContext.setQueryParam(
        "get_ip_addresses",
        serialize(getIpAddresses, TypingInfo, "boolean", ""),
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

  public async listDevices(
    pageSize?: number,
    pageNumber?: number,
    sort?: string,
    filterTag?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/ndm/devices";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "NetworkDeviceMonitoringApi.v2.listDevices",
      NetworkDeviceMonitoringApi.operationServers,
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

    // Query Params
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        serialize(pageSize, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        serialize(pageNumber, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterTag !== undefined) {
      requestContext.setQueryParam(
        "filter[tag]",
        serialize(filterTag, TypingInfo, "string", ""),
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

  public async listDeviceUserTags(
    deviceId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'deviceId' is not null or undefined
    if (deviceId === null || deviceId === undefined) {
      throw new RequiredError("deviceId", "listDeviceUserTags");
    }

    // Path Params
    const localVarPath = "/api/v2/ndm/tags/devices/{device_id}".replace(
      "{device_id}",
      encodeURIComponent(String(deviceId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "NetworkDeviceMonitoringApi.v2.listDeviceUserTags",
      NetworkDeviceMonitoringApi.operationServers,
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateDeviceUserTags(
    deviceId: string,
    body: ListTagsResponse,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'deviceId' is not null or undefined
    if (deviceId === null || deviceId === undefined) {
      throw new RequiredError("deviceId", "updateDeviceUserTags");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateDeviceUserTags");
    }

    // Path Params
    const localVarPath = "/api/v2/ndm/tags/devices/{device_id}".replace(
      "{device_id}",
      encodeURIComponent(String(deviceId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "NetworkDeviceMonitoringApi.v2.updateDeviceUserTags",
      NetworkDeviceMonitoringApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "ListTagsResponse", ""),
      contentType,
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

export class NetworkDeviceMonitoringApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getDevice
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getDevice(
    response: ResponseContext,
  ): Promise<GetDeviceResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GetDeviceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetDeviceResponse",
      ) as GetDeviceResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: GetDeviceResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetDeviceResponse",
        "",
      ) as GetDeviceResponse;
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
   * @params response Response returned by the server for a request to getInterfaces
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getInterfaces(
    response: ResponseContext,
  ): Promise<GetInterfacesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GetInterfacesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetInterfacesResponse",
      ) as GetInterfacesResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
      const body: GetInterfacesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GetInterfacesResponse",
        "",
      ) as GetInterfacesResponse;
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
   * @params response Response returned by the server for a request to listDevices
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listDevices(
    response: ResponseContext,
  ): Promise<ListDevicesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListDevicesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListDevicesResponse",
      ) as ListDevicesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
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
      const body: ListDevicesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListDevicesResponse",
        "",
      ) as ListDevicesResponse;
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
   * @params response Response returned by the server for a request to listDeviceUserTags
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listDeviceUserTags(
    response: ResponseContext,
  ): Promise<ListTagsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListTagsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListTagsResponse",
      ) as ListTagsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: ListTagsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListTagsResponse",
        "",
      ) as ListTagsResponse;
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
   * @params response Response returned by the server for a request to updateDeviceUserTags
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateDeviceUserTags(
    response: ResponseContext,
  ): Promise<ListTagsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListTagsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListTagsResponse",
      ) as ListTagsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
      const body: ListTagsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListTagsResponse",
        "",
      ) as ListTagsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface NetworkDeviceMonitoringApiGetDeviceRequest {
  /**
   * The id of the device to fetch.
   * @type string
   */
  deviceId: string;
}

export interface NetworkDeviceMonitoringApiGetInterfacesRequest {
  /**
   * The ID of the device to get interfaces from.
   * @type string
   */
  deviceId: string;
  /**
   * Whether to get the IP addresses of the interfaces.
   * @type boolean
   */
  getIpAddresses?: boolean;
}

export interface NetworkDeviceMonitoringApiListDevicesRequest {
  /**
   * Size for a given page. The maximum allowed value is 100. Test change to trigger client generation.
   * @type number
   */
  pageSize?: number;
  /**
   * Specific page number to return.
   * @type number
   */
  pageNumber?: number;
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

export interface NetworkDeviceMonitoringApiListDeviceUserTagsRequest {
  /**
   * The id of the device to fetch tags for.
   * @type string
   */
  deviceId: string;
}

export interface NetworkDeviceMonitoringApiUpdateDeviceUserTagsRequest {
  /**
   * The id of the device to update tags for.
   * @type string
   */
  deviceId: string;
  /**
   * @type ListTagsResponse
   */
  body: ListTagsResponse;
}

export class NetworkDeviceMonitoringApi {
  private requestFactory: NetworkDeviceMonitoringApiRequestFactory;
  private responseProcessor: NetworkDeviceMonitoringApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: NetworkDeviceMonitoringApiRequestFactory,
    responseProcessor?: NetworkDeviceMonitoringApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new NetworkDeviceMonitoringApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new NetworkDeviceMonitoringApiResponseProcessor();
  }

  /**
   * Get the device details.
   * @param param The request object
   */
  public getDevice(
    param: NetworkDeviceMonitoringApiGetDeviceRequest,
    options?: Configuration,
  ): Promise<GetDeviceResponse> {
    const requestContextPromise = this.requestFactory.getDevice(
      param.deviceId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getDevice(responseContext);
        });
    });
  }

  /**
   * Get the list of interfaces of the device.
   * @param param The request object
   */
  public getInterfaces(
    param: NetworkDeviceMonitoringApiGetInterfacesRequest,
    options?: Configuration,
  ): Promise<GetInterfacesResponse> {
    const requestContextPromise = this.requestFactory.getInterfaces(
      param.deviceId,
      param.getIpAddresses,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getInterfaces(responseContext);
        });
    });
  }

  /**
   * Get the list of devices.
   * @param param The request object
   */
  public listDevices(
    param: NetworkDeviceMonitoringApiListDevicesRequest = {},
    options?: Configuration,
  ): Promise<ListDevicesResponse> {
    const requestContextPromise = this.requestFactory.listDevices(
      param.pageSize,
      param.pageNumber,
      param.sort,
      param.filterTag,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listDevices(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listDevices returning a generator with all the items.
   */
  public async *listDevicesWithPagination(
    param: NetworkDeviceMonitoringApiListDevicesRequest = {},
    options?: Configuration,
  ): AsyncGenerator<DevicesListData> {
    let pageSize = 10;
    if (param.pageSize !== undefined) {
      pageSize = param.pageSize;
    }
    param.pageSize = pageSize;
    param.pageNumber = 0;
    while (true) {
      const requestContext = await this.requestFactory.listDevices(
        param.pageSize,
        param.pageNumber,
        param.sort,
        param.filterTag,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.listDevices(responseContext);
      const responseData = response.data;
      if (responseData === undefined) {
        break;
      }
      const results = responseData;
      for (const item of results) {
        yield item;
      }
      if (results.length < pageSize) {
        break;
      }
      param.pageNumber = param.pageNumber + 1;
    }
  }

  /**
   * Get the list of tags for a device.
   * @param param The request object
   */
  public listDeviceUserTags(
    param: NetworkDeviceMonitoringApiListDeviceUserTagsRequest,
    options?: Configuration,
  ): Promise<ListTagsResponse> {
    const requestContextPromise = this.requestFactory.listDeviceUserTags(
      param.deviceId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listDeviceUserTags(responseContext);
        });
    });
  }

  /**
   * Update the tags for a device.
   * @param param The request object
   */
  public updateDeviceUserTags(
    param: NetworkDeviceMonitoringApiUpdateDeviceUserTagsRequest,
    options?: Configuration,
  ): Promise<ListTagsResponse> {
    const requestContextPromise = this.requestFactory.updateDeviceUserTags(
      param.deviceId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateDeviceUserTags(responseContext);
        });
    });
  }
}
