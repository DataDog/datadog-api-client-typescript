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
import { CustomDestinationCreateRequest } from "../models/CustomDestinationCreateRequest";
import { CustomDestinationDeleteResponse } from "../models/CustomDestinationDeleteResponse";
import { CustomDestinationListResponse } from "../models/CustomDestinationListResponse";
import { CustomDestinationResponse } from "../models/CustomDestinationResponse";
import { CustomDestinationUpdateRequest } from "../models/CustomDestinationUpdateRequest";

export class LogsCustomDestinationsApiRequestFactory extends BaseAPIRequestFactory {
  public async createLogsCustomDestination(
    body: CustomDestinationCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createLogsCustomDestination'");
    if (!_config.unstableOperations["v2.createLogsCustomDestination"]) {
      throw new Error(
        "Unstable operation 'createLogsCustomDestination' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createLogsCustomDestination");
    }

    // Path Params
    const localVarPath = "/api/v2/logs/config/custom_destinations";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsCustomDestinationsApi.createLogsCustomDestination")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CustomDestinationCreateRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteLogsCustomDestination(
    customDestinationId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteLogsCustomDestination'");
    if (!_config.unstableOperations["v2.deleteLogsCustomDestination"]) {
      throw new Error(
        "Unstable operation 'deleteLogsCustomDestination' is disabled"
      );
    }

    // verify required parameter 'customDestinationId' is not null or undefined
    if (customDestinationId === null || customDestinationId === undefined) {
      throw new RequiredError(
        "customDestinationId",
        "deleteLogsCustomDestination"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/logs/config/custom_destinations/{custom_destination_id}".replace(
        "{custom_destination_id}",
        encodeURIComponent(String(customDestinationId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsCustomDestinationsApi.deleteLogsCustomDestination")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getLogsCustomDestination(
    customDestinationId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getLogsCustomDestination'");
    if (!_config.unstableOperations["v2.getLogsCustomDestination"]) {
      throw new Error(
        "Unstable operation 'getLogsCustomDestination' is disabled"
      );
    }

    // verify required parameter 'customDestinationId' is not null or undefined
    if (customDestinationId === null || customDestinationId === undefined) {
      throw new RequiredError(
        "customDestinationId",
        "getLogsCustomDestination"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/logs/config/custom_destinations/{custom_destination_id}".replace(
        "{custom_destination_id}",
        encodeURIComponent(String(customDestinationId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsCustomDestinationsApi.getLogsCustomDestination")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listLogsCustomDestinations(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listLogsCustomDestinations'");
    if (!_config.unstableOperations["v2.listLogsCustomDestinations"]) {
      throw new Error(
        "Unstable operation 'listLogsCustomDestinations' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/logs/config/custom_destinations";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsCustomDestinationsApi.listLogsCustomDestinations")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateLogsCustomDestination(
    customDestinationId: string,
    body: CustomDestinationUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateLogsCustomDestination'");
    if (!_config.unstableOperations["v2.updateLogsCustomDestination"]) {
      throw new Error(
        "Unstable operation 'updateLogsCustomDestination' is disabled"
      );
    }

    // verify required parameter 'customDestinationId' is not null or undefined
    if (customDestinationId === null || customDestinationId === undefined) {
      throw new RequiredError(
        "customDestinationId",
        "updateLogsCustomDestination"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateLogsCustomDestination");
    }

    // Path Params
    const localVarPath =
      "/api/v2/logs/config/custom_destinations/{custom_destination_id}".replace(
        "{custom_destination_id}",
        encodeURIComponent(String(customDestinationId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.LogsCustomDestinationsApi.updateLogsCustomDestination")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CustomDestinationUpdateRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class LogsCustomDestinationsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createLogsCustomDestination
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createLogsCustomDestination(
    response: ResponseContext
  ): Promise<CustomDestinationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: CustomDestinationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CustomDestinationResponse"
      ) as CustomDestinationResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
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
      const body: CustomDestinationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CustomDestinationResponse",
        ""
      ) as CustomDestinationResponse;
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
   * @params response Response returned by the server for a request to deleteLogsCustomDestination
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteLogsCustomDestination(
    response: ResponseContext
  ): Promise<CustomDestinationDeleteResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: CustomDestinationDeleteResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "CustomDestinationDeleteResponse"
        ) as CustomDestinationDeleteResponse;
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
      const body: CustomDestinationDeleteResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "CustomDestinationDeleteResponse",
          ""
        ) as CustomDestinationDeleteResponse;
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
   * @params response Response returned by the server for a request to getLogsCustomDestination
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getLogsCustomDestination(
    response: ResponseContext
  ): Promise<CustomDestinationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: CustomDestinationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CustomDestinationResponse"
      ) as CustomDestinationResponse;
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
      const body: CustomDestinationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CustomDestinationResponse",
        ""
      ) as CustomDestinationResponse;
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
   * @params response Response returned by the server for a request to listLogsCustomDestinations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLogsCustomDestinations(
    response: ResponseContext
  ): Promise<CustomDestinationListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: CustomDestinationListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CustomDestinationListResponse"
      ) as CustomDestinationListResponse;
      return body;
    }
    if (response.httpStatusCode == 403 || response.httpStatusCode == 429) {
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
      const body: CustomDestinationListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CustomDestinationListResponse",
        ""
      ) as CustomDestinationListResponse;
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
   * @params response Response returned by the server for a request to updateLogsCustomDestination
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateLogsCustomDestination(
    response: ResponseContext
  ): Promise<CustomDestinationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: CustomDestinationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CustomDestinationResponse"
      ) as CustomDestinationResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 409 ||
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
      const body: CustomDestinationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CustomDestinationResponse",
        ""
      ) as CustomDestinationResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface LogsCustomDestinationsApiCreateLogsCustomDestinationRequest {
  /**
   * @type CustomDestinationCreateRequest
   */
  body: CustomDestinationCreateRequest;
}

export interface LogsCustomDestinationsApiDeleteLogsCustomDestinationRequest {
  /**
   * The ID of the custom destination.
   * @type string
   */
  customDestinationId: string;
}

export interface LogsCustomDestinationsApiGetLogsCustomDestinationRequest {
  /**
   * The ID of the custom destination.
   * @type string
   */
  customDestinationId: string;
}

export interface LogsCustomDestinationsApiUpdateLogsCustomDestinationRequest {
  /**
   * The ID of the custom destination.
   * @type string
   */
  customDestinationId: string;
  /**
   * @type CustomDestinationUpdateRequest
   */
  body: CustomDestinationUpdateRequest;
}

export class LogsCustomDestinationsApi {
  private requestFactory: LogsCustomDestinationsApiRequestFactory;
  private responseProcessor: LogsCustomDestinationsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: LogsCustomDestinationsApiRequestFactory,
    responseProcessor?: LogsCustomDestinationsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory ||
      new LogsCustomDestinationsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new LogsCustomDestinationsApiResponseProcessor();
  }

  /**
   * Create a new custom destination for your organization.
   * @param param The request object
   */
  public createLogsCustomDestination(
    param: LogsCustomDestinationsApiCreateLogsCustomDestinationRequest,
    options?: Configuration
  ): Promise<CustomDestinationResponse> {
    const requestContextPromise =
      this.requestFactory.createLogsCustomDestination(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createLogsCustomDestination(
            responseContext
          );
        });
    });
  }

  /**
   * Deletes a custom destination.
   * @param param The request object
   */
  public deleteLogsCustomDestination(
    param: LogsCustomDestinationsApiDeleteLogsCustomDestinationRequest,
    options?: Configuration
  ): Promise<CustomDestinationDeleteResponse> {
    const requestContextPromise =
      this.requestFactory.deleteLogsCustomDestination(
        param.customDestinationId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteLogsCustomDestination(
            responseContext
          );
        });
    });
  }

  /**
   * Get a custom destination in the organization specified by the custom destination's `custom_destination_id`.
   * @param param The request object
   */
  public getLogsCustomDestination(
    param: LogsCustomDestinationsApiGetLogsCustomDestinationRequest,
    options?: Configuration
  ): Promise<CustomDestinationResponse> {
    const requestContextPromise = this.requestFactory.getLogsCustomDestination(
      param.customDestinationId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getLogsCustomDestination(
            responseContext
          );
        });
    });
  }

  /**
   * Returns all custom destinations, including their attributes and IDs.
   * @param param The request object
   */
  public listLogsCustomDestinations(
    options?: Configuration
  ): Promise<CustomDestinationListResponse> {
    const requestContextPromise =
      this.requestFactory.listLogsCustomDestinations(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLogsCustomDestinations(
            responseContext
          );
        });
    });
  }

  /**
   * Edit a custom destination.
   * @param param The request object
   */
  public updateLogsCustomDestination(
    param: LogsCustomDestinationsApiUpdateLogsCustomDestinationRequest,
    options?: Configuration
  ): Promise<CustomDestinationResponse> {
    const requestContextPromise =
      this.requestFactory.updateLogsCustomDestination(
        param.customDestinationId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateLogsCustomDestination(
            responseContext
          );
        });
    });
  }
}
