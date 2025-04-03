import {
  BaseAPIRequestFactory,
  Configuration,
  applySecurityAuthentication,
  RequestContext,
  HttpMethod,
  ResponseContext,
  logger,
  RequiredError,
  ApiException,
  createConfiguration,
} from "@datadog/datadog-api-client";

import { ObjectSerializer } from "./models/ObjectSerializer";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { HostListResponse } from "./models/HostListResponse";
import { HostMuteResponse } from "./models/HostMuteResponse";
import { HostMuteSettings } from "./models/HostMuteSettings";
import { HostTotals } from "./models/HostTotals";

export class HostsApiRequestFactory extends BaseAPIRequestFactory {
  public async getHostTotals(
    from?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/hosts/totals";

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.HostsApi.getHostTotals")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (from !== undefined) {
      requestContext.setQueryParam(
        "from",
        ObjectSerializer.serialize(from, "number", "int64"),
        "",
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

  public async listHosts(
    filter?: string,
    sortField?: string,
    sortDir?: string,
    start?: number,
    count?: number,
    from?: number,
    includeMutedHostsData?: boolean,
    includeHostsMetadata?: boolean,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/hosts";

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.HostsApi.listHosts")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filter !== undefined) {
      requestContext.setQueryParam(
        "filter",
        ObjectSerializer.serialize(filter, "string", ""),
        "",
      );
    }
    if (sortField !== undefined) {
      requestContext.setQueryParam(
        "sort_field",
        ObjectSerializer.serialize(sortField, "string", ""),
        "",
      );
    }
    if (sortDir !== undefined) {
      requestContext.setQueryParam(
        "sort_dir",
        ObjectSerializer.serialize(sortDir, "string", ""),
        "",
      );
    }
    if (start !== undefined) {
      requestContext.setQueryParam(
        "start",
        ObjectSerializer.serialize(start, "number", "int64"),
        "",
      );
    }
    if (count !== undefined) {
      requestContext.setQueryParam(
        "count",
        ObjectSerializer.serialize(count, "number", "int64"),
        "",
      );
    }
    if (from !== undefined) {
      requestContext.setQueryParam(
        "from",
        ObjectSerializer.serialize(from, "number", "int64"),
        "",
      );
    }
    if (includeMutedHostsData !== undefined) {
      requestContext.setQueryParam(
        "include_muted_hosts_data",
        ObjectSerializer.serialize(includeMutedHostsData, "boolean", ""),
        "",
      );
    }
    if (includeHostsMetadata !== undefined) {
      requestContext.setQueryParam(
        "include_hosts_metadata",
        ObjectSerializer.serialize(includeHostsMetadata, "boolean", ""),
        "",
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

  public async muteHost(
    hostName: string,
    body: HostMuteSettings,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'hostName' is not null or undefined
    if (hostName === null || hostName === undefined) {
      throw new RequiredError("hostName", "muteHost");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "muteHost");
    }

    // Path Params
    const localVarPath = "/api/v1/host/{host_name}/mute".replace(
      "{host_name}",
      encodeURIComponent(String(hostName)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.HostsApi.muteHost")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "HostMuteSettings", ""),
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

  public async unmuteHost(
    hostName: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'hostName' is not null or undefined
    if (hostName === null || hostName === undefined) {
      throw new RequiredError("hostName", "unmuteHost");
    }

    // Path Params
    const localVarPath = "/api/v1/host/{host_name}/unmute".replace(
      "{host_name}",
      encodeURIComponent(String(hostName)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.HostsApi.unmuteHost")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class HostsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getHostTotals
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getHostTotals(
    response: ResponseContext,
  ): Promise<HostTotals> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: HostTotals = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HostTotals",
      ) as HostTotals;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: HostTotals = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HostTotals",
        "",
      ) as HostTotals;
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
   * @params response Response returned by the server for a request to listHosts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listHosts(
    response: ResponseContext,
  ): Promise<HostListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: HostListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HostListResponse",
      ) as HostListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: HostListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HostListResponse",
        "",
      ) as HostListResponse;
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
   * @params response Response returned by the server for a request to muteHost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async muteHost(
    response: ResponseContext,
  ): Promise<HostMuteResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: HostMuteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HostMuteResponse",
      ) as HostMuteResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: HostMuteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HostMuteResponse",
        "",
      ) as HostMuteResponse;
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
   * @params response Response returned by the server for a request to unmuteHost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async unmuteHost(
    response: ResponseContext,
  ): Promise<HostMuteResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: HostMuteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HostMuteResponse",
      ) as HostMuteResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: HostMuteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HostMuteResponse",
        "",
      ) as HostMuteResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface HostsApiGetHostTotalsRequest {
  /**
   * Number of seconds from which you want to get total number of active hosts.
   * @type number
   */
  from?: number;
}

export interface HostsApiListHostsRequest {
  /**
   * String to filter search results.
   * @type string
   */
  filter?: string;
  /**
   * Sort hosts by this field.
   * @type string
   */
  sortField?: string;
  /**
   * Direction of sort. Options include `asc` and `desc`.
   * @type string
   */
  sortDir?: string;
  /**
   * Specify the starting point for the host search results. For example, if you set `count` to 100 and the first 100 results have already been returned, you can set `start` to `101` to get the next 100 results.
   * @type number
   */
  start?: number;
  /**
   * Number of hosts to return. Max 1000.
   * @type number
   */
  count?: number;
  /**
   * Number of seconds since UNIX epoch from which you want to search your hosts.
   * @type number
   */
  from?: number;
  /**
   * Include information on the muted status of hosts and when the mute expires.
   * @type boolean
   */
  includeMutedHostsData?: boolean;
  /**
   * Include additional metadata about the hosts (agent_version, machine, platform, processor, etc.).
   * @type boolean
   */
  includeHostsMetadata?: boolean;
}

export interface HostsApiMuteHostRequest {
  /**
   * Name of the host to mute.
   * @type string
   */
  hostName: string;
  /**
   * Mute a host request body.
   * @type HostMuteSettings
   */
  body: HostMuteSettings;
}

export interface HostsApiUnmuteHostRequest {
  /**
   * Name of the host to unmute.
   * @type string
   */
  hostName: string;
}

export class HostsApi {
  private requestFactory: HostsApiRequestFactory;
  private responseProcessor: HostsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: HostsApiRequestFactory,
    responseProcessor?: HostsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new HostsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new HostsApiResponseProcessor();
  }

  /**
   * This endpoint returns the total number of active and up hosts in your Datadog account.
   * Active means the host has reported in the past hour, and up means it has reported in the past two hours.
   * @param param The request object
   */
  public getHostTotals(
    param: HostsApiGetHostTotalsRequest = {},
    options?: Configuration,
  ): Promise<HostTotals> {
    const requestContextPromise = this.requestFactory.getHostTotals(
      param.from,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getHostTotals(responseContext);
        });
    });
  }

  /**
   * This endpoint allows searching for hosts by name, alias, or tag.
   * Hosts live within the past 3 hours are included by default.
   * Retention is 7 days.
   * Results are paginated with a max of 1000 results at a time.
   * @param param The request object
   */
  public listHosts(
    param: HostsApiListHostsRequest = {},
    options?: Configuration,
  ): Promise<HostListResponse> {
    const requestContextPromise = this.requestFactory.listHosts(
      param.filter,
      param.sortField,
      param.sortDir,
      param.start,
      param.count,
      param.from,
      param.includeMutedHostsData,
      param.includeHostsMetadata,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listHosts(responseContext);
        });
    });
  }

  /**
   * Mute a host. **Note:** This creates a [Downtime V2](https://docs.datadoghq.com/api/latest/downtimes/#schedule-a-downtime) for the host.
   * @param param The request object
   */
  public muteHost(
    param: HostsApiMuteHostRequest,
    options?: Configuration,
  ): Promise<HostMuteResponse> {
    const requestContextPromise = this.requestFactory.muteHost(
      param.hostName,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.muteHost(responseContext);
        });
    });
  }

  /**
   * Unmutes a host. This endpoint takes no JSON arguments.
   * @param param The request object
   */
  public unmuteHost(
    param: HostsApiUnmuteHostRequest,
    options?: Configuration,
  ): Promise<HostMuteResponse> {
    const requestContextPromise = this.requestFactory.unmuteHost(
      param.hostName,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.unmuteHost(responseContext);
        });
    });
  }
}
