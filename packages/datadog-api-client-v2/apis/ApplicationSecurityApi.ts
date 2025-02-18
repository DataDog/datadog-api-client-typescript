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
import { ApplicationSecurityExclusionFilterRequest } from "../models/ApplicationSecurityExclusionFilterRequest";
import { ApplicationSecurityExclusionFilterResponse } from "../models/ApplicationSecurityExclusionFilterResponse";
import { ApplicationSecurityExclusionFiltersResponse } from "../models/ApplicationSecurityExclusionFiltersResponse";

export class ApplicationSecurityApiRequestFactory extends BaseAPIRequestFactory {
  public async createApplicationSecurityExclusionFilter(
    body: ApplicationSecurityExclusionFilterRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "createApplicationSecurityExclusionFilter"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/remote_config/products/asm/waf/exclusion_filters";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.ApplicationSecurityApi.createApplicationSecurityExclusionFilter"
      )
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "ApplicationSecurityExclusionFilterRequest",
        ""
      ),
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

  public async deleteApplicationSecurityExclusionFilter(
    exclusionFilterId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'exclusionFilterId' is not null or undefined
    if (exclusionFilterId === null || exclusionFilterId === undefined) {
      throw new RequiredError(
        "exclusionFilterId",
        "deleteApplicationSecurityExclusionFilter"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/remote_config/products/asm/waf/exclusion_filters/{exclusion_filter_id}".replace(
        "{exclusion_filter_id}",
        encodeURIComponent(String(exclusionFilterId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.ApplicationSecurityApi.deleteApplicationSecurityExclusionFilter"
      )
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

  public async getApplicationSecurityExclusionFilter(
    exclusionFilterId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'exclusionFilterId' is not null or undefined
    if (exclusionFilterId === null || exclusionFilterId === undefined) {
      throw new RequiredError(
        "exclusionFilterId",
        "getApplicationSecurityExclusionFilter"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/remote_config/products/asm/waf/exclusion_filters/{exclusion_filter_id}".replace(
        "{exclusion_filter_id}",
        encodeURIComponent(String(exclusionFilterId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.ApplicationSecurityApi.getApplicationSecurityExclusionFilter"
      )
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

  public async listApplicationSecurityExclusionFilters(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath =
      "/api/v2/remote_config/products/asm/waf/exclusion_filters";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.ApplicationSecurityApi.listApplicationSecurityExclusionFilters"
      )
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

  public async updateApplicationSecurityExclusionFilter(
    exclusionFilterId: string,
    body: ApplicationSecurityExclusionFilterRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'exclusionFilterId' is not null or undefined
    if (exclusionFilterId === null || exclusionFilterId === undefined) {
      throw new RequiredError(
        "exclusionFilterId",
        "updateApplicationSecurityExclusionFilter"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "updateApplicationSecurityExclusionFilter"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/remote_config/products/asm/waf/exclusion_filters/{exclusion_filter_id}".replace(
        "{exclusion_filter_id}",
        encodeURIComponent(String(exclusionFilterId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.ApplicationSecurityApi.updateApplicationSecurityExclusionFilter"
      )
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "ApplicationSecurityExclusionFilterRequest",
        ""
      ),
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

export class ApplicationSecurityApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createApplicationSecurityExclusionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createApplicationSecurityExclusionFilter(
    response: ResponseContext
  ): Promise<ApplicationSecurityExclusionFilterResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ApplicationSecurityExclusionFilterResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ApplicationSecurityExclusionFilterResponse"
        ) as ApplicationSecurityExclusionFilterResponse;
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
      const body: ApplicationSecurityExclusionFilterResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ApplicationSecurityExclusionFilterResponse",
          ""
        ) as ApplicationSecurityExclusionFilterResponse;
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
   * @params response Response returned by the server for a request to deleteApplicationSecurityExclusionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteApplicationSecurityExclusionFilter(
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
   * @params response Response returned by the server for a request to getApplicationSecurityExclusionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getApplicationSecurityExclusionFilter(
    response: ResponseContext
  ): Promise<ApplicationSecurityExclusionFilterResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ApplicationSecurityExclusionFilterResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ApplicationSecurityExclusionFilterResponse"
        ) as ApplicationSecurityExclusionFilterResponse;
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
      const body: ApplicationSecurityExclusionFilterResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ApplicationSecurityExclusionFilterResponse",
          ""
        ) as ApplicationSecurityExclusionFilterResponse;
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
   * @params response Response returned by the server for a request to listApplicationSecurityExclusionFilters
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listApplicationSecurityExclusionFilters(
    response: ResponseContext
  ): Promise<ApplicationSecurityExclusionFiltersResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ApplicationSecurityExclusionFiltersResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ApplicationSecurityExclusionFiltersResponse"
        ) as ApplicationSecurityExclusionFiltersResponse;
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
      const body: ApplicationSecurityExclusionFiltersResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ApplicationSecurityExclusionFiltersResponse",
          ""
        ) as ApplicationSecurityExclusionFiltersResponse;
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
   * @params response Response returned by the server for a request to updateApplicationSecurityExclusionFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateApplicationSecurityExclusionFilter(
    response: ResponseContext
  ): Promise<ApplicationSecurityExclusionFilterResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ApplicationSecurityExclusionFilterResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ApplicationSecurityExclusionFilterResponse"
        ) as ApplicationSecurityExclusionFilterResponse;
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
      const body: ApplicationSecurityExclusionFilterResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "ApplicationSecurityExclusionFilterResponse",
          ""
        ) as ApplicationSecurityExclusionFilterResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface ApplicationSecurityApiCreateApplicationSecurityExclusionFilterRequest {
  /**
   * The definition of the new exclusion filter.
   * @type ApplicationSecurityExclusionFilterRequest
   */
  body: ApplicationSecurityExclusionFilterRequest;
}

export interface ApplicationSecurityApiDeleteApplicationSecurityExclusionFilterRequest {
  /**
   * The identifier of the exclusion filter.
   * @type string
   */
  exclusionFilterId: string;
}

export interface ApplicationSecurityApiGetApplicationSecurityExclusionFilterRequest {
  /**
   * The identifier of the exclusion filter.
   * @type string
   */
  exclusionFilterId: string;
}

export interface ApplicationSecurityApiUpdateApplicationSecurityExclusionFilterRequest {
  /**
   * The identifier of the exclusion filter.
   * @type string
   */
  exclusionFilterId: string;
  /**
   * The exclusion filter to update.
   * @type ApplicationSecurityExclusionFilterRequest
   */
  body: ApplicationSecurityExclusionFilterRequest;
}

export class ApplicationSecurityApi {
  private requestFactory: ApplicationSecurityApiRequestFactory;
  private responseProcessor: ApplicationSecurityApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: ApplicationSecurityApiRequestFactory,
    responseProcessor?: ApplicationSecurityApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new ApplicationSecurityApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new ApplicationSecurityApiResponseProcessor();
  }

  /**
   * Create a new Application Security exclusion filter with the given parameters.
   *
   * A request matched by an exclusion filter will be ignored by the Application Security product.
   * Go to https://app.datadoghq.com/security/appsec/passlist to review existing exclusion filters (also called passlist entries).
   * @param param The request object
   */
  public createApplicationSecurityExclusionFilter(
    param: ApplicationSecurityApiCreateApplicationSecurityExclusionFilterRequest,
    options?: Configuration
  ): Promise<ApplicationSecurityExclusionFilterResponse> {
    const requestContextPromise =
      this.requestFactory.createApplicationSecurityExclusionFilter(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createApplicationSecurityExclusionFilter(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a specific Application Security exclusion filter using its identifier.
   * @param param The request object
   */
  public deleteApplicationSecurityExclusionFilter(
    param: ApplicationSecurityApiDeleteApplicationSecurityExclusionFilterRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteApplicationSecurityExclusionFilter(
        param.exclusionFilterId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteApplicationSecurityExclusionFilter(
            responseContext
          );
        });
    });
  }

  /**
   * Retrieve a specific Application Security exclusion filter using its identifier.
   * @param param The request object
   */
  public getApplicationSecurityExclusionFilter(
    param: ApplicationSecurityApiGetApplicationSecurityExclusionFilterRequest,
    options?: Configuration
  ): Promise<ApplicationSecurityExclusionFilterResponse> {
    const requestContextPromise =
      this.requestFactory.getApplicationSecurityExclusionFilter(
        param.exclusionFilterId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getApplicationSecurityExclusionFilter(
            responseContext
          );
        });
    });
  }

  /**
   * Retrieve a list of Application Security exclusion filters.
   * @param param The request object
   */
  public listApplicationSecurityExclusionFilters(
    options?: Configuration
  ): Promise<ApplicationSecurityExclusionFiltersResponse> {
    const requestContextPromise =
      this.requestFactory.listApplicationSecurityExclusionFilters(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listApplicationSecurityExclusionFilters(
            responseContext
          );
        });
    });
  }

  /**
   * Update a specific Application Security exclusion filter using its identifier.
   * Returns the exclusion filter object when the request is successful.
   * @param param The request object
   */
  public updateApplicationSecurityExclusionFilter(
    param: ApplicationSecurityApiUpdateApplicationSecurityExclusionFilterRequest,
    options?: Configuration
  ): Promise<ApplicationSecurityExclusionFilterResponse> {
    const requestContextPromise =
      this.requestFactory.updateApplicationSecurityExclusionFilter(
        param.exclusionFilterId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateApplicationSecurityExclusionFilter(
            responseContext
          );
        });
    });
  }
}
