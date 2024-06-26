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
import { ReorderRetentionFiltersRequest } from "../models/ReorderRetentionFiltersRequest";
import { RetentionFilterCreateRequest } from "../models/RetentionFilterCreateRequest";
import { RetentionFilterCreateResponse } from "../models/RetentionFilterCreateResponse";
import { RetentionFilterResponse } from "../models/RetentionFilterResponse";
import { RetentionFiltersResponse } from "../models/RetentionFiltersResponse";
import { RetentionFilterUpdateRequest } from "../models/RetentionFilterUpdateRequest";

export class APMRetentionFiltersApiRequestFactory extends BaseAPIRequestFactory {
  public async createApmRetentionFilter(
    body: RetentionFilterCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createApmRetentionFilter");
    }

    // Path Params
    const localVarPath = "/api/v2/apm/config/retention-filters";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.APMRetentionFiltersApi.createApmRetentionFilter")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "RetentionFilterCreateRequest", ""),
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

  public async deleteApmRetentionFilter(
    filterId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'filterId' is not null or undefined
    if (filterId === null || filterId === undefined) {
      throw new RequiredError("filterId", "deleteApmRetentionFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/apm/config/retention-filters/{filter_id}".replace(
        "{filter_id}",
        encodeURIComponent(String(filterId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.APMRetentionFiltersApi.deleteApmRetentionFilter")
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

  public async getApmRetentionFilter(
    filterId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'filterId' is not null or undefined
    if (filterId === null || filterId === undefined) {
      throw new RequiredError("filterId", "getApmRetentionFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/apm/config/retention-filters/{filter_id}".replace(
        "{filter_id}",
        encodeURIComponent(String(filterId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.APMRetentionFiltersApi.getApmRetentionFilter")
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

  public async listApmRetentionFilters(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/apm/config/retention-filters";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.APMRetentionFiltersApi.listApmRetentionFilters")
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

  public async reorderApmRetentionFilters(
    body: ReorderRetentionFiltersRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "reorderApmRetentionFilters");
    }

    // Path Params
    const localVarPath = "/api/v2/apm/config/retention-filters-execution-order";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.APMRetentionFiltersApi.reorderApmRetentionFilters")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "ReorderRetentionFiltersRequest", ""),
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

  public async updateApmRetentionFilter(
    filterId: string,
    body: RetentionFilterUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'filterId' is not null or undefined
    if (filterId === null || filterId === undefined) {
      throw new RequiredError("filterId", "updateApmRetentionFilter");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateApmRetentionFilter");
    }

    // Path Params
    const localVarPath =
      "/api/v2/apm/config/retention-filters/{filter_id}".replace(
        "{filter_id}",
        encodeURIComponent(String(filterId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.APMRetentionFiltersApi.updateApmRetentionFilter")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "RetentionFilterUpdateRequest", ""),
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

export class APMRetentionFiltersApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createApmRetentionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createApmRetentionFilter(
    response: ResponseContext
  ): Promise<RetentionFilterCreateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RetentionFilterCreateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RetentionFilterCreateResponse"
      ) as RetentionFilterCreateResponse;
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
      const body: RetentionFilterCreateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RetentionFilterCreateResponse",
        ""
      ) as RetentionFilterCreateResponse;
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
   * @params response Response returned by the server for a request to deleteApmRetentionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteApmRetentionFilter(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
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
   * @params response Response returned by the server for a request to getApmRetentionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getApmRetentionFilter(
    response: ResponseContext
  ): Promise<RetentionFilterResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RetentionFilterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RetentionFilterResponse"
      ) as RetentionFilterResponse;
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
      const body: RetentionFilterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RetentionFilterResponse",
        ""
      ) as RetentionFilterResponse;
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
   * @params response Response returned by the server for a request to listApmRetentionFilters
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listApmRetentionFilters(
    response: ResponseContext
  ): Promise<RetentionFiltersResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RetentionFiltersResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RetentionFiltersResponse"
      ) as RetentionFiltersResponse;
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
      const body: RetentionFiltersResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RetentionFiltersResponse",
        ""
      ) as RetentionFiltersResponse;
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
   * @params response Response returned by the server for a request to reorderApmRetentionFilters
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async reorderApmRetentionFilters(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
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
   * @params response Response returned by the server for a request to updateApmRetentionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateApmRetentionFilter(
    response: ResponseContext
  ): Promise<RetentionFilterResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RetentionFilterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RetentionFilterResponse"
      ) as RetentionFilterResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: RetentionFilterResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RetentionFilterResponse",
        ""
      ) as RetentionFilterResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface APMRetentionFiltersApiCreateApmRetentionFilterRequest {
  /**
   * The definition of the new retention filter.
   * @type RetentionFilterCreateRequest
   */
  body: RetentionFilterCreateRequest;
}

export interface APMRetentionFiltersApiDeleteApmRetentionFilterRequest {
  /**
   * The ID of the retention filter.
   * @type string
   */
  filterId: string;
}

export interface APMRetentionFiltersApiGetApmRetentionFilterRequest {
  /**
   * The ID of the retention filter.
   * @type string
   */
  filterId: string;
}

export interface APMRetentionFiltersApiReorderApmRetentionFiltersRequest {
  /**
   * The list of retention filters in the new order.
   * @type ReorderRetentionFiltersRequest
   */
  body: ReorderRetentionFiltersRequest;
}

export interface APMRetentionFiltersApiUpdateApmRetentionFilterRequest {
  /**
   * The ID of the retention filter.
   * @type string
   */
  filterId: string;
  /**
   * The updated definition of the retention filter.
   * @type RetentionFilterUpdateRequest
   */
  body: RetentionFilterUpdateRequest;
}

export class APMRetentionFiltersApi {
  private requestFactory: APMRetentionFiltersApiRequestFactory;
  private responseProcessor: APMRetentionFiltersApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: APMRetentionFiltersApiRequestFactory,
    responseProcessor?: APMRetentionFiltersApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new APMRetentionFiltersApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new APMRetentionFiltersApiResponseProcessor();
  }

  /**
   * Create a retention filter to index spans in your organization.
   * Returns the retention filter definition when the request is successful.
   *
   * Default filters with types spans-errors-sampling-processor and spans-appsec-sampling-processor cannot be created.
   * @param param The request object
   */
  public createApmRetentionFilter(
    param: APMRetentionFiltersApiCreateApmRetentionFilterRequest,
    options?: Configuration
  ): Promise<RetentionFilterCreateResponse> {
    const requestContextPromise = this.requestFactory.createApmRetentionFilter(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createApmRetentionFilter(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a specific retention filter from your organization.
   *
   * Default filters with types spans-errors-sampling-processor and spans-appsec-sampling-processor cannot be deleted.
   * @param param The request object
   */
  public deleteApmRetentionFilter(
    param: APMRetentionFiltersApiDeleteApmRetentionFilterRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteApmRetentionFilter(
      param.filterId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteApmRetentionFilter(
            responseContext
          );
        });
    });
  }

  /**
   * Get an APM retention filter.
   * @param param The request object
   */
  public getApmRetentionFilter(
    param: APMRetentionFiltersApiGetApmRetentionFilterRequest,
    options?: Configuration
  ): Promise<RetentionFilterResponse> {
    const requestContextPromise = this.requestFactory.getApmRetentionFilter(
      param.filterId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getApmRetentionFilter(responseContext);
        });
    });
  }

  /**
   * Get the list of APM retention filters.
   * @param param The request object
   */
  public listApmRetentionFilters(
    options?: Configuration
  ): Promise<RetentionFiltersResponse> {
    const requestContextPromise =
      this.requestFactory.listApmRetentionFilters(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listApmRetentionFilters(
            responseContext
          );
        });
    });
  }

  /**
   * Re-order the execution order of retention filters.
   * @param param The request object
   */
  public reorderApmRetentionFilters(
    param: APMRetentionFiltersApiReorderApmRetentionFiltersRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.reorderApmRetentionFilters(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.reorderApmRetentionFilters(
            responseContext
          );
        });
    });
  }

  /**
   * Update a retention filter from your organization.
   *
   * Default filters (filters with types spans-errors-sampling-processor and spans-appsec-sampling-processor) cannot be renamed or removed.
   * @param param The request object
   */
  public updateApmRetentionFilter(
    param: APMRetentionFiltersApiUpdateApmRetentionFilterRequest,
    options?: Configuration
  ): Promise<RetentionFilterResponse> {
    const requestContextPromise = this.requestFactory.updateApmRetentionFilter(
      param.filterId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateApmRetentionFilter(
            responseContext
          );
        });
    });
  }
}
