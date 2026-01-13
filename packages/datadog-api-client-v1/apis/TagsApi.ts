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
import { HostTags } from "../models/HostTags";
import { TagToHosts } from "../models/TagToHosts";

export class TagsApiRequestFactory extends BaseAPIRequestFactory {
  public async createHostTags(
    hostName: string,
    body: HostTags,
    source?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'hostName' is not null or undefined
    if (hostName === null || hostName === undefined) {
      throw new RequiredError("hostName", "createHostTags");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createHostTags");
    }

    // Path Params
    const localVarPath = "/api/v1/tags/hosts/{host_name}".replace(
      "{host_name}",
      encodeURIComponent(String(hostName))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.TagsApi.createHostTags")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (source !== undefined) {
      requestContext.setQueryParam(
        "source",
        ObjectSerializer.serialize(source, "string", ""),
        ""
      );
    }

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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteHostTags(
    hostName: string,
    source?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'hostName' is not null or undefined
    if (hostName === null || hostName === undefined) {
      throw new RequiredError("hostName", "deleteHostTags");
    }

    // Path Params
    const localVarPath = "/api/v1/tags/hosts/{host_name}".replace(
      "{host_name}",
      encodeURIComponent(String(hostName))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.TagsApi.deleteHostTags")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (source !== undefined) {
      requestContext.setQueryParam(
        "source",
        ObjectSerializer.serialize(source, "string", ""),
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

  public async getHostTags(
    hostName: string,
    source?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'hostName' is not null or undefined
    if (hostName === null || hostName === undefined) {
      throw new RequiredError("hostName", "getHostTags");
    }

    // Path Params
    const localVarPath = "/api/v1/tags/hosts/{host_name}".replace(
      "{host_name}",
      encodeURIComponent(String(hostName))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.TagsApi.getHostTags")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (source !== undefined) {
      requestContext.setQueryParam(
        "source",
        ObjectSerializer.serialize(source, "string", ""),
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

  public async listHostTags(
    source?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/tags/hosts";

    // Make Request Context
    const requestContext = _config
      .getServer("v1.TagsApi.listHostTags")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (source !== undefined) {
      requestContext.setQueryParam(
        "source",
        ObjectSerializer.serialize(source, "string", ""),
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

  public async updateHostTags(
    hostName: string,
    body: HostTags,
    source?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'hostName' is not null or undefined
    if (hostName === null || hostName === undefined) {
      throw new RequiredError("hostName", "updateHostTags");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateHostTags");
    }

    // Path Params
    const localVarPath = "/api/v1/tags/hosts/{host_name}".replace(
      "{host_name}",
      encodeURIComponent(String(hostName))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v1.TagsApi.updateHostTags")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (source !== undefined) {
      requestContext.setQueryParam(
        "source",
        ObjectSerializer.serialize(source, "string", ""),
        ""
      );
    }

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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

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
    if (response.httpStatusCode === 201) {
      const body: HostTags = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HostTags"
      ) as HostTags;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
      return;
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
    if (response.httpStatusCode === 200) {
      const body: HostTags = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HostTags"
      ) as HostTags;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
    if (response.httpStatusCode === 200) {
      const body: TagToHosts = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TagToHosts"
      ) as TagToHosts;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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
    if (response.httpStatusCode === 201) {
      const body: HostTags = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HostTags"
      ) as HostTags;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
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

export interface TagsApiCreateHostTagsRequest {
  /**
   * Specified host name to add new tags
   * @type string
   */
  hostName: string;
  /**
   * Update host tags request body.
   * @type HostTags
   */
  body: HostTags;
  /**
   * Source to add tags. [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value). Use "user" source for custom-defined tags. If no source is specified, defaults to "user".
   * @type string
   */
  source?: string;
}

export interface TagsApiDeleteHostTagsRequest {
  /**
   * Specified host name to delete tags
   * @type string
   */
  hostName: string;
  /**
   * Source of the tags to be deleted. [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value). Use "user" source for custom-defined tags.
   * @type string
   */
  source?: string;
}

export interface TagsApiGetHostTagsRequest {
  /**
   * Name of the host to retrieve tags for
   * @type string
   */
  hostName: string;
  /**
   * Source to filter. [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value). Use "user" source for custom-defined tags.
   * @type string
   */
  source?: string;
}

export interface TagsApiListHostTagsRequest {
  /**
   * Source to filter. [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value). Use "user" source for custom-defined tags.
   * @type string
   */
  source?: string;
}

export interface TagsApiUpdateHostTagsRequest {
  /**
   * Specified host name to change tags
   * @type string
   */
  hostName: string;
  /**
   * Add tags to host
   * @type HostTags
   */
  body: HostTags;
  /**
   * Source to update tags. [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value). Use "user" source for custom-defined tags. If no source specified, defaults to "user".
   * @type string
   */
  source?: string;
}

export class TagsApi {
  private requestFactory: TagsApiRequestFactory;
  private responseProcessor: TagsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: TagsApiRequestFactory,
    responseProcessor?: TagsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new TagsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new TagsApiResponseProcessor();
  }

  /**
   * This endpoint allows you to add new tags to a host,
   * optionally specifying what source these tags come from. If tags already exist, appends new tags to the tag list. If no source is specified, defaults to "user".
   * @param param The request object
   */
  public createHostTags(
    param: TagsApiCreateHostTagsRequest,
    options?: Configuration
  ): Promise<HostTags> {
    const requestContextPromise = this.requestFactory.createHostTags(
      param.hostName,
      param.body,
      param.source,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createHostTags(responseContext);
        });
    });
  }

  /**
   * This endpoint allows you to remove all tags
   * for a single host. If no source is specified, only deletes from the source "User".
   * @param param The request object
   */
  public deleteHostTags(
    param: TagsApiDeleteHostTagsRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteHostTags(
      param.hostName,
      param.source,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteHostTags(responseContext);
        });
    });
  }

  /**
   * Return the list of tags that apply to a given host.
   * @param param The request object
   */
  public getHostTags(
    param: TagsApiGetHostTagsRequest,
    options?: Configuration
  ): Promise<HostTags> {
    const requestContextPromise = this.requestFactory.getHostTags(
      param.hostName,
      param.source,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getHostTags(responseContext);
        });
    });
  }

  /**
   * Returns a mapping of tags to hosts. For each tag, the response returns a list of host names that contain this tag. There is a restriction of 10k total host names from the org that can be attached to tags and returned.
   * @param param The request object
   */
  public listHostTags(
    param: TagsApiListHostTagsRequest = {},
    options?: Configuration
  ): Promise<TagToHosts> {
    const requestContextPromise = this.requestFactory.listHostTags(
      param.source,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listHostTags(responseContext);
        });
    });
  }

  /**
   * This endpoint allows you to update/replace all tags in
   * an integration source with those supplied in the request.
   * @param param The request object
   */
  public updateHostTags(
    param: TagsApiUpdateHostTagsRequest,
    options?: Configuration
  ): Promise<HostTags> {
    const requestContextPromise = this.requestFactory.updateHostTags(
      param.hostName,
      param.body,
      param.source,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateHostTags(responseContext);
        });
    });
  }
}
