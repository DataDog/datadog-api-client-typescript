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
import { DeviceBaseArray } from "../models/DeviceBaseArray";
import { DeviceDetails } from "../models/DeviceDetails";
import { GraphItemArray } from "../models/GraphItemArray";
import { IssueDefinitionArray } from "../models/IssueDefinitionArray";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { OverviewItemArray } from "../models/OverviewItemArray";

export class EndUserDeviceMonitoringApiRequestFactory extends BaseAPIRequestFactory {
  public async getEUDMDevice(
    deviceId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getEUDMDevices(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/eudm/devices";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.EndUserDeviceMonitoringApi.getEUDMDevices")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'by' is not null or undefined
    if (by === null || by === undefined) {
      throw new RequiredError("by", "getEUDMGraph");
    }

    // Path Params
    const localVarPath = "/api/v2/eudm/graph";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.EndUserDeviceMonitoringApi.getEUDMGraph")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (by !== undefined) {
      requestContext.setQueryParam(
        "by",
        ObjectSerializer.serialize(by, "string", ""),
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

  public async getEUDMIssues(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/eudm/issues";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.EndUserDeviceMonitoringApi.getEUDMIssues")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getEUDMOverview(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/eudm/overview";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.EndUserDeviceMonitoringApi.getEUDMOverview")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

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
    response: ResponseContext
  ): Promise<DeviceDetails> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DeviceDetails = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DeviceDetails"
      ) as DeviceDetails;
      return body;
    }
    if (response.httpStatusCode === 404) {
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
      const body: DeviceDetails = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DeviceDetails",
        ""
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
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DeviceBaseArray"
      ) as DeviceBaseArray;
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
      const body: DeviceBaseArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DeviceBaseArray",
        ""
      ) as DeviceBaseArray;
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
   * @params response Response returned by the server for a request to getEUDMGraph
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getEUDMGraph(
    response: ResponseContext
  ): Promise<GraphItemArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GraphItemArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GraphItemArray"
      ) as GraphItemArray;
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
      const body: GraphItemArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GraphItemArray",
        ""
      ) as GraphItemArray;
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
   * @params response Response returned by the server for a request to getEUDMIssues
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getEUDMIssues(
    response: ResponseContext
  ): Promise<IssueDefinitionArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IssueDefinitionArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IssueDefinitionArray"
      ) as IssueDefinitionArray;
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
      const body: IssueDefinitionArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IssueDefinitionArray",
        ""
      ) as IssueDefinitionArray;
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
   * @params response Response returned by the server for a request to getEUDMOverview
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getEUDMOverview(
    response: ResponseContext
  ): Promise<OverviewItemArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: OverviewItemArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OverviewItemArray"
      ) as OverviewItemArray;
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
      const body: OverviewItemArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OverviewItemArray",
        ""
      ) as OverviewItemArray;
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
      responseProcessor || new EndUserDeviceMonitoringApiResponseProcessor();
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
    options?: Configuration
  ): Promise<GraphItemArray> {
    const requestContextPromise = this.requestFactory.getEUDMGraph(
      param.by,
      options
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
