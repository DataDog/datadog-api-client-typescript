import {
  BaseAPIRequestFactory,
  RequiredError,
} from "../../datadog-api-client-common/baseapi";
import {
  Configuration,
  getServer,
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
    const requestContext = getServer(
      _config,
      "v1.TagsApi.createHostTags"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (source !== undefined) {
      requestContext.setQueryParam(
        "source",
        ObjectSerializer.serialize(source, "string", "")
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
    const requestContext = getServer(
      _config,
      "v1.TagsApi.deleteHostTags"
    ).makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (source !== undefined) {
      requestContext.setQueryParam(
        "source",
        ObjectSerializer.serialize(source, "string", "")
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
    const requestContext = getServer(
      _config,
      "v1.TagsApi.getHostTags"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (source !== undefined) {
      requestContext.setQueryParam(
        "source",
        ObjectSerializer.serialize(source, "string", "")
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
    const requestContext = getServer(
      _config,
      "v1.TagsApi.listHostTags"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (source !== undefined) {
      requestContext.setQueryParam(
        "source",
        ObjectSerializer.serialize(source, "string", "")
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
    const requestContext = getServer(
      _config,
      "v1.TagsApi.updateHostTags"
    ).makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (source !== undefined) {
      requestContext.setQueryParam(
        "source",
        ObjectSerializer.serialize(source, "string", "")
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
    if (response.httpStatusCode == 201) {
      const body: HostTags = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HostTags"
      ) as HostTags;
      return body;
    }
    if (
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 429
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
        logger.info(`Got error deserializing error: ${error}`);
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
    if (response.httpStatusCode == 204) {
      return;
    }
    if (
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 429
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
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
    if (response.httpStatusCode == 200) {
      const body: HostTags = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HostTags"
      ) as HostTags;
      return body;
    }
    if (
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 429
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
        logger.info(`Got error deserializing error: ${error}`);
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
    if (response.httpStatusCode == 200) {
      const body: TagToHosts = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TagToHosts"
      ) as TagToHosts;
      return body;
    }
    if (
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 429
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
        logger.info(`Got error deserializing error: ${error}`);
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
    if (response.httpStatusCode == 201) {
      const body: HostTags = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HostTags"
      ) as HostTags;
      return body;
    }
    if (
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 429
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
        logger.info(`Got error deserializing error: ${error}`);
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
   * This endpoint allows you to add new tags to a host, optionally specifying where the tags came from.
   * @type string
   */
  hostName: string;
  /**
   * Update host tags request body.
   * @type HostTags
   */
  body: HostTags;
  /**
   * The source of the tags.
   * [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value).
   * @type string
   */
  source?: string;
}

export interface TagsApiDeleteHostTagsRequest {
  /**
   * This endpoint allows you to remove all user-assigned tags for a single host.
   * @type string
   */
  hostName: string;
  /**
   * The source of the tags (for example chef, puppet).
   * [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value).
   * @type string
   */
  source?: string;
}

export interface TagsApiGetHostTagsRequest {
  /**
   * When specified, filters list of tags to those tags with the specified source.
   * @type string
   */
  hostName: string;
  /**
   * Source to filter.
   * @type string
   */
  source?: string;
}

export interface TagsApiListHostTagsRequest {
  /**
   * When specified, filters host list to those tags with the specified source.
   * @type string
   */
  source?: string;
}

export interface TagsApiUpdateHostTagsRequest {
  /**
   * This endpoint allows you to update/replace all in an integration source with those supplied in the request.
   * @type string
   */
  hostName: string;
  /**
   * Add tags to host
   * @type HostTags
   */
  body: HostTags;
  /**
   * The source of the tags (for example chef, puppet).
   * [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value)
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
   * optionally specifying where these tags come from.
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
   * This endpoint allows you to remove all user-assigned tags
   * for a single host.
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
   * Return a mapping of tags to hosts for your whole infrastructure.
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
