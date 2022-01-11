// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from "./baseapi";
import { Configuration, getServer } from "../configuration";
import { RequestContext, HttpMethod, ResponseContext } from "../http/http";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "./exception";
import { isCodeInRange } from "../util";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { HostListResponse } from "../models/HostListResponse";
import { HostMuteResponse } from "../models/HostMuteResponse";
import { HostMuteSettings } from "../models/HostMuteSettings";
import { HostTotals } from "../models/HostTotals";

/**
 * no description
 */
export class HostsApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * This endpoint returns the total number of active and up hosts in your Datadog account. Active means the host has reported in the past hour, and up means it has reported in the past two hours.
   * Get the total number of active hosts
   * @param from Number of seconds from which you want to get total number of active hosts.
   */
  public async getHostTotals(
    from?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/hosts/totals";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "HostsApi.getHostTotals"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (from !== undefined) {
      requestContext.setQueryParam(
        "from",
        ObjectSerializer.serialize(from, "number", "int64")
      );
    }

    let authMethod = null;
    // Apply auth methods
    authMethod = _config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * This endpoint allows searching for hosts by name, alias, or tag. Hosts live within the past 3 hours are included by default. Retention is 7 days. Results are paginated with a max of 1000 results at a time.
   * Get all hosts for your organization
   * @param filter String to filter search results.
   * @param sortField Sort hosts by this field.
   * @param sortDir Direction of sort. Options include &#x60;asc&#x60; and &#x60;desc&#x60;.
   * @param start Host result to start search from.
   * @param count Number of hosts to return. Max 1000.
   * @param from Number of seconds since UNIX epoch from which you want to search your hosts.
   * @param includeMutedHostsData Include information on the muted status of hosts and when the mute expires.
   * @param includeHostsMetadata Include additional metadata about the hosts (agent_version, machine, platform, processor, etc.).
   */
  public async listHosts(
    filter?: string,
    sortField?: string,
    sortDir?: string,
    start?: number,
    count?: number,
    from?: number,
    includeMutedHostsData?: boolean,
    includeHostsMetadata?: boolean,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/hosts";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "HostsApi.listHosts"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filter !== undefined) {
      requestContext.setQueryParam(
        "filter",
        ObjectSerializer.serialize(filter, "string", "")
      );
    }
    if (sortField !== undefined) {
      requestContext.setQueryParam(
        "sort_field",
        ObjectSerializer.serialize(sortField, "string", "")
      );
    }
    if (sortDir !== undefined) {
      requestContext.setQueryParam(
        "sort_dir",
        ObjectSerializer.serialize(sortDir, "string", "")
      );
    }
    if (start !== undefined) {
      requestContext.setQueryParam(
        "start",
        ObjectSerializer.serialize(start, "number", "int64")
      );
    }
    if (count !== undefined) {
      requestContext.setQueryParam(
        "count",
        ObjectSerializer.serialize(count, "number", "int64")
      );
    }
    if (from !== undefined) {
      requestContext.setQueryParam(
        "from",
        ObjectSerializer.serialize(from, "number", "int64")
      );
    }
    if (includeMutedHostsData !== undefined) {
      requestContext.setQueryParam(
        "include_muted_hosts_data",
        ObjectSerializer.serialize(includeMutedHostsData, "boolean", "")
      );
    }
    if (includeHostsMetadata !== undefined) {
      requestContext.setQueryParam(
        "include_hosts_metadata",
        ObjectSerializer.serialize(includeHostsMetadata, "boolean", "")
      );
    }

    let authMethod = null;
    // Apply auth methods
    authMethod = _config.authMethods["AuthZ"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Mute a host.
   * Mute a host
   * @param hostName Name of the host to mute.
   * @param body Mute a host request body.
   */
  public async muteHost(
    hostName: string,
    body: HostMuteSettings,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'hostName' is not null or undefined
    if (hostName === null || hostName === undefined) {
      throw new RequiredError(
        "Required parameter hostName was null or undefined when calling muteHost."
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling muteHost."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/host/{host_name}/mute".replace(
      "{" + "host_name" + "}",
      encodeURIComponent(String(hostName))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "HostsApi.muteHost"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "HostMuteSettings", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = _config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Unmutes a host. This endpoint takes no JSON arguments.
   * Unmute a host
   * @param hostName Name of the host to unmute.
   */
  public async unmuteHost(
    hostName: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'hostName' is not null or undefined
    if (hostName === null || hostName === undefined) {
      throw new RequiredError(
        "Required parameter hostName was null or undefined when calling unmuteHost."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/host/{host_name}/unmute".replace(
      "{" + "host_name" + "}",
      encodeURIComponent(String(hostName))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "HostsApi.unmuteHost"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    let authMethod = null;
    // Apply auth methods
    authMethod = _config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

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
  public async getHostTotals(response: ResponseContext): Promise<HostTotals> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: HostTotals = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HostTotals",
        ""
      ) as HostTotals;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: HostTotals = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HostTotals",
        ""
      ) as HostTotals;
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
   * @params response Response returned by the server for a request to listHosts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listHosts(response: ResponseContext): Promise<HostListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: HostListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HostListResponse",
        ""
      ) as HostListResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: HostListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HostListResponse",
        ""
      ) as HostListResponse;
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
   * @params response Response returned by the server for a request to muteHost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async muteHost(response: ResponseContext): Promise<HostMuteResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: HostMuteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HostMuteResponse",
        ""
      ) as HostMuteResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: HostMuteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HostMuteResponse",
        ""
      ) as HostMuteResponse;
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
   * @params response Response returned by the server for a request to unmuteHost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async unmuteHost(
    response: ResponseContext
  ): Promise<HostMuteResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: HostMuteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HostMuteResponse",
        ""
      ) as HostMuteResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: HostMuteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HostMuteResponse",
        ""
      ) as HostMuteResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}
