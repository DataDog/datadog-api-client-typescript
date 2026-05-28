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
import { GraphItemArray } from "./models/GraphItemArray";
import { IssueDefinitionArray } from "./models/IssueDefinitionArray";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { OverviewItemArray } from "./models/OverviewItemArray";
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getEUDMDevices(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getEUDMGraph(
    by: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'by' is not null or undefined
    if (by === null || by === undefined) {
      throw new RequiredError("by", "getEUDMGraph");
    }

    // Path Params
    const localVarPath = "/api/v2/eudm/graph";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "EndUserDeviceMonitoringApi.v2.getEUDMGraph",
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

    // Query Params
    if (by !== undefined) {
      requestContext.setQueryParam(
        "by",
        serialize(by, TypingInfo, "string", ""),
        "",
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

  public async getEUDMIssues(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/eudm/issues";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "EndUserDeviceMonitoringApi.v2.getEUDMIssues",
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getEUDMOverview(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/eudm/overview";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "EndUserDeviceMonitoringApi.v2.getEUDMOverview",
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
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
    if (response.httpStatusCode === 404) {
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

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getEUDMGraph
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getEUDMGraph(
    response: ResponseContext,
  ): Promise<GraphItemArray> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GraphItemArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GraphItemArray",
      ) as GraphItemArray;
      return body;
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
      const body: GraphItemArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GraphItemArray",
        "",
      ) as GraphItemArray;
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
   * @params response Response returned by the server for a request to getEUDMIssues
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getEUDMIssues(
    response: ResponseContext,
  ): Promise<IssueDefinitionArray> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IssueDefinitionArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IssueDefinitionArray",
      ) as IssueDefinitionArray;
      return body;
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
      const body: IssueDefinitionArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "IssueDefinitionArray",
        "",
      ) as IssueDefinitionArray;
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
   * @params response Response returned by the server for a request to getEUDMOverview
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getEUDMOverview(
    response: ResponseContext,
  ): Promise<OverviewItemArray> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OverviewItemArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OverviewItemArray",
      ) as OverviewItemArray;
      return body;
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
      const body: OverviewItemArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "OverviewItemArray",
        "",
      ) as OverviewItemArray;
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

export interface EndUserDeviceMonitoringApiGetEUDMGraphRequest {
  /**
   * Device attribute to group by (for example, `os` or `type`).
   * Determines which column the response counts are bucketed against.
   * @type string
   */
  by: string;
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
  public getEUDMDevices(options?: Configuration): Promise<DeviceBaseArray> {
    const requestContextPromise = this.requestFactory.getEUDMDevices(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getEUDMDevices(responseContext);
        });
    });
  }

  /**
   * @param param The request object
   */
  public getEUDMGraph(
    param: EndUserDeviceMonitoringApiGetEUDMGraphRequest,
    options?: Configuration,
  ): Promise<GraphItemArray> {
    const requestContextPromise = this.requestFactory.getEUDMGraph(
      param.by,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getEUDMGraph(responseContext);
        });
    });
  }

  /**
   * @param param The request object
   */
  public getEUDMIssues(options?: Configuration): Promise<IssueDefinitionArray> {
    const requestContextPromise = this.requestFactory.getEUDMIssues(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getEUDMIssues(responseContext);
        });
    });
  }

  /**
   * @param param The request object
   */
  public getEUDMOverview(options?: Configuration): Promise<OverviewItemArray> {
    const requestContextPromise = this.requestFactory.getEUDMOverview(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getEUDMOverview(responseContext);
        });
    });
  }
}
