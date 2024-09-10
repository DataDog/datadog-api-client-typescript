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
import { ASMExclusionFilterCreateRequest } from "../models/ASMExclusionFilterCreateRequest";
import { ASMExclusionFilterListResponse } from "../models/ASMExclusionFilterListResponse";
import { ASMExclusionFilterResponse } from "../models/ASMExclusionFilterResponse";
import { ASMExclusionFilterUpdateRequest } from "../models/ASMExclusionFilterUpdateRequest";

export class ASMExclusionFiltersApiRequestFactory extends BaseAPIRequestFactory {
  public async createASMExclusionFilter(
    body: ASMExclusionFilterCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createASMExclusionFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/remote_config/products/asm/waf/exclusion_filters";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ASMExclusionFiltersApi.createASMExclusionFilter")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "ASMExclusionFilterCreateRequest", ""),
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

  public async deleteASMExclusionFilter(
    exclusionFilterId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'exclusionFilterId' is not null or undefined
    if (exclusionFilterId === null || exclusionFilterId === undefined) {
      throw new RequiredError("exclusionFilterId", "deleteASMExclusionFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/remote_config/products/asm/waf/exclusion_filters/{exclusion_filter_id}".replace(
        "{exclusion_filter_id}",
        encodeURIComponent(String(exclusionFilterId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ASMExclusionFiltersApi.deleteASMExclusionFilter")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getASMExclusionFilters(
    exclusionFilterId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'exclusionFilterId' is not null or undefined
    if (exclusionFilterId === null || exclusionFilterId === undefined) {
      throw new RequiredError("exclusionFilterId", "getASMExclusionFilters");
    }

    // Path Params
    const localVarPath =
      "/api/v2/remote_config/products/asm/waf/exclusion_filters/{exclusion_filter_id}".replace(
        "{exclusion_filter_id}",
        encodeURIComponent(String(exclusionFilterId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ASMExclusionFiltersApi.getASMExclusionFilters")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listASMExclusionFilters(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath =
      "/api/v2/remote_config/products/asm/waf/exclusion_filters";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ASMExclusionFiltersApi.listASMExclusionFilters")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateASMExclusionFilter(
    exclusionFilterId: string,
    body: ASMExclusionFilterUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'exclusionFilterId' is not null or undefined
    if (exclusionFilterId === null || exclusionFilterId === undefined) {
      throw new RequiredError("exclusionFilterId", "updateASMExclusionFilter");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateASMExclusionFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/remote_config/products/asm/waf/exclusion_filters/{exclusion_filter_id}".replace(
        "{exclusion_filter_id}",
        encodeURIComponent(String(exclusionFilterId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ASMExclusionFiltersApi.updateASMExclusionFilter")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "ASMExclusionFilterUpdateRequest", ""),
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

export class ASMExclusionFiltersApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createASMExclusionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createASMExclusionFilter(
    response: ResponseContext
  ): Promise<ASMExclusionFilterResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ASMExclusionFilterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ASMExclusionFilterResponse"
      ) as ASMExclusionFilterResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409 ||
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
      const body: ASMExclusionFilterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ASMExclusionFilterResponse",
        ""
      ) as ASMExclusionFilterResponse;
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
   * @params response Response returned by the server for a request to deleteASMExclusionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteASMExclusionFilter(
    response: ResponseContext
  ): Promise<void> {
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
   * @params response Response returned by the server for a request to getASMExclusionFilters
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getASMExclusionFilters(
    response: ResponseContext
  ): Promise<ASMExclusionFilterResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ASMExclusionFilterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ASMExclusionFilterResponse"
      ) as ASMExclusionFilterResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
      const body: ASMExclusionFilterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ASMExclusionFilterResponse",
        ""
      ) as ASMExclusionFilterResponse;
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
   * @params response Response returned by the server for a request to listASMExclusionFilters
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listASMExclusionFilters(
    response: ResponseContext
  ): Promise<ASMExclusionFilterListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ASMExclusionFilterListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ASMExclusionFilterListResponse"
      ) as ASMExclusionFilterListResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
      const body: ASMExclusionFilterListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ASMExclusionFilterListResponse",
        ""
      ) as ASMExclusionFilterListResponse;
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
   * @params response Response returned by the server for a request to updateASMExclusionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateASMExclusionFilter(
    response: ResponseContext
  ): Promise<ASMExclusionFilterResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ASMExclusionFilterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ASMExclusionFilterResponse"
      ) as ASMExclusionFilterResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409 ||
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
      const body: ASMExclusionFilterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ASMExclusionFilterResponse",
        ""
      ) as ASMExclusionFilterResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface ASMExclusionFiltersApiCreateASMExclusionFilterRequest {
  /**
   * The definition of the new Exclusion filter.
   * @type ASMExclusionFilterCreateRequest
   */
  body: ASMExclusionFilterCreateRequest;
}

export interface ASMExclusionFiltersApiDeleteASMExclusionFilterRequest {
  /**
   * The ID of the exclusion filter.
   * @type string
   */
  exclusionFilterId: string;
}

export interface ASMExclusionFiltersApiGetASMExclusionFiltersRequest {
  /**
   * The ID of the exclusion filter.
   * @type string
   */
  exclusionFilterId: string;
}

export interface ASMExclusionFiltersApiUpdateASMExclusionFilterRequest {
  /**
   * The ID of the exclusion filter.
   * @type string
   */
  exclusionFilterId: string;
  /**
   * New definition of the Exclusion filter.
   * @type ASMExclusionFilterUpdateRequest
   */
  body: ASMExclusionFilterUpdateRequest;
}

export class ASMExclusionFiltersApi {
  private requestFactory: ASMExclusionFiltersApiRequestFactory;
  private responseProcessor: ASMExclusionFiltersApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: ASMExclusionFiltersApiRequestFactory,
    responseProcessor?: ASMExclusionFiltersApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new ASMExclusionFiltersApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new ASMExclusionFiltersApiResponseProcessor();
  }

  /**
   * Create a new exclusion filter with the given parameters.
   * @param param The request object
   */
  public createASMExclusionFilter(
    param: ASMExclusionFiltersApiCreateASMExclusionFilterRequest,
    options?: Configuration
  ): Promise<ASMExclusionFilterResponse> {
    const requestContextPromise = this.requestFactory.createASMExclusionFilter(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createASMExclusionFilter(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a specific ASM Exclusion filter.
   * @param param The request object
   */
  public deleteASMExclusionFilter(
    param: ASMExclusionFiltersApiDeleteASMExclusionFilterRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteASMExclusionFilter(
      param.exclusionFilterId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteASMExclusionFilter(
            responseContext
          );
        });
    });
  }

  /**
   * Retrieve a specific ASM exclusion filter by ID.
   * @param param The request object
   */
  public getASMExclusionFilters(
    param: ASMExclusionFiltersApiGetASMExclusionFiltersRequest,
    options?: Configuration
  ): Promise<ASMExclusionFilterResponse> {
    const requestContextPromise = this.requestFactory.getASMExclusionFilters(
      param.exclusionFilterId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getASMExclusionFilters(responseContext);
        });
    });
  }

  /**
   * Retrieve a list of ASM exclusion filters.
   * @param param The request object
   */
  public listASMExclusionFilters(
    options?: Configuration
  ): Promise<ASMExclusionFilterListResponse> {
    const requestContextPromise =
      this.requestFactory.listASMExclusionFilters(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listASMExclusionFilters(
            responseContext
          );
        });
    });
  }

  /**
   * Update a specific Exclusion filter.
   * Returns the Exclusion filter object when the request is successful.
   * @param param The request object
   */
  public updateASMExclusionFilter(
    param: ASMExclusionFiltersApiUpdateASMExclusionFilterRequest,
    options?: Configuration
  ): Promise<ASMExclusionFilterResponse> {
    const requestContextPromise = this.requestFactory.updateASMExclusionFilter(
      param.exclusionFilterId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateASMExclusionFilter(
            responseContext
          );
        });
    });
  }
}
