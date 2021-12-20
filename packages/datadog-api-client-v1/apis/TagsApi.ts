// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from "./baseapi";
import { Configuration, getServer } from "../configuration";
import { RequestContext, HttpMethod, ResponseContext } from "../http/http";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "./exception";
import { isCodeInRange } from "../util";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { HostTags } from "../models/HostTags";
import { TagToHosts } from "../models/TagToHosts";

/**
 * no description
 */
export class TagsApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * This endpoint allows you to add new tags to a host, optionally specifying where these tags come from.
   * Add tags to a host
   * @param hostName This endpoint allows you to add new tags to a host, optionally specifying where the tags came from.
   * @param body Update host tags request body.
   * @param source The source of the tags. [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value).
   */
  public async createHostTags(
    hostName: string,
    body: HostTags,
    source?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'hostName' is not null or undefined
    if (hostName === null || hostName === undefined) {
      throw new RequiredError(
        "Required parameter hostName was null or undefined when calling createHostTags."
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling createHostTags."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/tags/hosts/{host_name}".replace(
      "{" + "host_name" + "}",
      encodeURIComponent(String(hostName))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "TagsApi.createHostTags"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (source !== undefined) {
      requestContext.setQueryParam(
        "source",
        ObjectSerializer.serialize(source, "string", "")
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "HostTags", ""),
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
   * This endpoint allows you to remove all user-assigned tags for a single host.
   * Remove host tags
   * @param hostName This endpoint allows you to remove all user-assigned tags for a single host.
   * @param source The source of the tags (for example chef, puppet). [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value).
   */
  public async deleteHostTags(
    hostName: string,
    source?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'hostName' is not null or undefined
    if (hostName === null || hostName === undefined) {
      throw new RequiredError(
        "Required parameter hostName was null or undefined when calling deleteHostTags."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/tags/hosts/{host_name}".replace(
      "{" + "host_name" + "}",
      encodeURIComponent(String(hostName))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "TagsApi.deleteHostTags"
    ).makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (source !== undefined) {
      requestContext.setQueryParam(
        "source",
        ObjectSerializer.serialize(source, "string", "")
      );
    }

    // Header Params

    // Form Params

    // Body Params

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
   * Return the list of tags that apply to a given host.
   * Get host tags
   * @param hostName When specified, filters list of tags to those tags with the specified source.
   * @param source Source to filter.
   */
  public async getHostTags(
    hostName: string,
    source?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'hostName' is not null or undefined
    if (hostName === null || hostName === undefined) {
      throw new RequiredError(
        "Required parameter hostName was null or undefined when calling getHostTags."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/tags/hosts/{host_name}".replace(
      "{" + "host_name" + "}",
      encodeURIComponent(String(hostName))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "TagsApi.getHostTags"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (source !== undefined) {
      requestContext.setQueryParam(
        "source",
        ObjectSerializer.serialize(source, "string", "")
      );
    }

    // Header Params

    // Form Params

    // Body Params

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
   * Return a mapping of tags to hosts for your whole infrastructure.
   * Get Tags
   * @param source When specified, filters host list to those tags with the specified source.
   */
  public async listHostTags(
    source?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/tags/hosts";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "TagsApi.listHostTags"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (source !== undefined) {
      requestContext.setQueryParam(
        "source",
        ObjectSerializer.serialize(source, "string", "")
      );
    }

    // Header Params

    // Form Params

    // Body Params

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
   * This endpoint allows you to update/replace all tags in an integration source with those supplied in the request.
   * Update host tags
   * @param hostName This endpoint allows you to update/replace all in an integration source with those supplied in the request.
   * @param body Add tags to host
   * @param source The source of the tags (for example chef, puppet). [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value)
   */
  public async updateHostTags(
    hostName: string,
    body: HostTags,
    source?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'hostName' is not null or undefined
    if (hostName === null || hostName === undefined) {
      throw new RequiredError(
        "Required parameter hostName was null or undefined when calling updateHostTags."
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling updateHostTags."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/tags/hosts/{host_name}".replace(
      "{" + "host_name" + "}",
      encodeURIComponent(String(hostName))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "TagsApi.updateHostTags"
    ).makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (source !== undefined) {
      requestContext.setQueryParam(
        "source",
        ObjectSerializer.serialize(source, "string", "")
      );
    }

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "HostTags", ""),
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
}

export class TagsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createHostTags
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createHostTags(response: ResponseContext): Promise<HostTags> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: HostTags = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HostTags",
        ""
      ) as HostTags;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
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
      const body: HostTags = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HostTags",
        ""
      ) as HostTags;
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
   * @params response Response returned by the server for a request to deleteHostTags
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteHostTags(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("204", response.httpStatusCode)) {
      return;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
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
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
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
   * @params response Response returned by the server for a request to getHostTags
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getHostTags(response: ResponseContext): Promise<HostTags> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: HostTags = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HostTags",
        ""
      ) as HostTags;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
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
      const body: HostTags = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HostTags",
        ""
      ) as HostTags;
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
   * @params response Response returned by the server for a request to listHostTags
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listHostTags(response: ResponseContext): Promise<TagToHosts> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: TagToHosts = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TagToHosts",
        ""
      ) as TagToHosts;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
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
      const body: TagToHosts = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TagToHosts",
        ""
      ) as TagToHosts;
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
   * @params response Response returned by the server for a request to updateHostTags
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateHostTags(response: ResponseContext): Promise<HostTags> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: HostTags = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HostTags",
        ""
      ) as HostTags;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
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
      const body: HostTags = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HostTags",
        ""
      ) as HostTags;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}
