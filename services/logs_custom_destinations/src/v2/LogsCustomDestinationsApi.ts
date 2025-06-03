import {
  ApiException,
  BaseAPIRequestFactory,
  BaseServerConfiguration,
  buildUserAgent,
  Configuration,
  createConfiguration,
  deserialize,
  getPreferredMediaType,
  HttpMethod,
  isBrowser,
  logger,
  normalizeMediaType,
  parse,
  RequiredError,
  RequestContext,
  ResponseContext,
  serialize,
  ServerConfiguration,
  stringify,
  applySecurityAuthentication,
} from "@datadog/datadog-api-client";

import { TypingInfo } from "./models/TypingInfo";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { CustomDestinationCreateRequest } from "./models/CustomDestinationCreateRequest";
import { CustomDestinationResponse } from "./models/CustomDestinationResponse";
import { CustomDestinationsResponse } from "./models/CustomDestinationsResponse";
import { CustomDestinationUpdateRequest } from "./models/CustomDestinationUpdateRequest";
import { version } from "../version";

export class LogsCustomDestinationsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("logs-custom-destinations", version);
    }
  }
  public async createLogsCustomDestination(
    body: CustomDestinationCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createLogsCustomDestination");
    }

    // Path Params
    const localVarPath = "/api/v2/logs/config/custom-destinations";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LogsCustomDestinationsApi.v2.createLogsCustomDestination",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "CustomDestinationCreateRequest", ""),
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

  public async deleteLogsCustomDestination(
    customDestinationId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'customDestinationId' is not null or undefined
    if (customDestinationId === null || customDestinationId === undefined) {
      throw new RequiredError(
        "customDestinationId",
        "deleteLogsCustomDestination",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/logs/config/custom-destinations/{custom_destination_id}".replace(
        "{custom_destination_id}",
        encodeURIComponent(String(customDestinationId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LogsCustomDestinationsApi.v2.deleteLogsCustomDestination",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getLogsCustomDestination(
    customDestinationId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'customDestinationId' is not null or undefined
    if (customDestinationId === null || customDestinationId === undefined) {
      throw new RequiredError(
        "customDestinationId",
        "getLogsCustomDestination",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/logs/config/custom-destinations/{custom_destination_id}".replace(
        "{custom_destination_id}",
        encodeURIComponent(String(customDestinationId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LogsCustomDestinationsApi.v2.getLogsCustomDestination",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listLogsCustomDestinations(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/logs/config/custom-destinations";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LogsCustomDestinationsApi.v2.listLogsCustomDestinations",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateLogsCustomDestination(
    customDestinationId: string,
    body: CustomDestinationUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'customDestinationId' is not null or undefined
    if (customDestinationId === null || customDestinationId === undefined) {
      throw new RequiredError(
        "customDestinationId",
        "updateLogsCustomDestination",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateLogsCustomDestination");
    }

    // Path Params
    const localVarPath =
      "/api/v2/logs/config/custom-destinations/{custom_destination_id}".replace(
        "{custom_destination_id}",
        encodeURIComponent(String(customDestinationId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "LogsCustomDestinationsApi.v2.updateLogsCustomDestination",
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "CustomDestinationUpdateRequest", ""),
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
    response: ResponseContext,
  ): Promise<CustomDestinationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CustomDestinationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CustomDestinationResponse",
      ) as CustomDestinationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CustomDestinationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CustomDestinationResponse",
        "",
      ) as CustomDestinationResponse;
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
   * @params response Response returned by the server for a request to deleteLogsCustomDestination
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteLogsCustomDestination(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
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
      'Unknown API Status Code!\nBody: "' + body + '"',
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
    response: ResponseContext,
  ): Promise<CustomDestinationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CustomDestinationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CustomDestinationResponse",
      ) as CustomDestinationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CustomDestinationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CustomDestinationResponse",
        "",
      ) as CustomDestinationResponse;
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
   * @params response Response returned by the server for a request to listLogsCustomDestinations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listLogsCustomDestinations(
    response: ResponseContext,
  ): Promise<CustomDestinationsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CustomDestinationsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CustomDestinationsResponse",
      ) as CustomDestinationsResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CustomDestinationsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CustomDestinationsResponse",
        "",
      ) as CustomDestinationsResponse;
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
   * @params response Response returned by the server for a request to updateLogsCustomDestination
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateLogsCustomDestination(
    response: ResponseContext,
  ): Promise<CustomDestinationResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CustomDestinationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CustomDestinationResponse",
      ) as CustomDestinationResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CustomDestinationResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CustomDestinationResponse",
        "",
      ) as CustomDestinationResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface LogsCustomDestinationsApiCreateLogsCustomDestinationRequest {
  /**
   * The definition of the new custom destination.
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
   * New definition of the custom destination's fields.
   * @type CustomDestinationUpdateRequest
   */
  body: CustomDestinationUpdateRequest;
}

export class LogsCustomDestinationsApi {
  private requestFactory: LogsCustomDestinationsApiRequestFactory;
  private responseProcessor: LogsCustomDestinationsApiResponseProcessor;
  private configuration: Configuration;

  private static operationServers: {
    [key: string]: BaseServerConfiguration[];
  } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: LogsCustomDestinationsApiRequestFactory,
    responseProcessor?: LogsCustomDestinationsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new LogsCustomDestinationsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new LogsCustomDestinationsApiResponseProcessor();

    // Add operation servers to the configuration
    if (Object.keys(this.operationServers).length > 0) {
      this.configuration.addOperationServers(this.operationServers);
    }
  }

  /**
   * Create a custom destination in your organization.
   * @param param The request object
   */
  public createLogsCustomDestination(
    param: LogsCustomDestinationsApiCreateLogsCustomDestinationRequest,
    options?: Configuration,
  ): Promise<CustomDestinationResponse> {
    const requestContextPromise =
      this.requestFactory.createLogsCustomDestination(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createLogsCustomDestination(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a specific custom destination in your organization.
   * @param param The request object
   */
  public deleteLogsCustomDestination(
    param: LogsCustomDestinationsApiDeleteLogsCustomDestinationRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteLogsCustomDestination(
        param.customDestinationId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteLogsCustomDestination(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a specific custom destination in your organization.
   * @param param The request object
   */
  public getLogsCustomDestination(
    param: LogsCustomDestinationsApiGetLogsCustomDestinationRequest,
    options?: Configuration,
  ): Promise<CustomDestinationResponse> {
    const requestContextPromise = this.requestFactory.getLogsCustomDestination(
      param.customDestinationId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getLogsCustomDestination(
            responseContext,
          );
        });
    });
  }

  /**
   * Get the list of configured custom destinations in your organization with their definitions.
   * @param param The request object
   */
  public listLogsCustomDestinations(
    options?: Configuration,
  ): Promise<CustomDestinationsResponse> {
    const requestContextPromise =
      this.requestFactory.listLogsCustomDestinations(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLogsCustomDestinations(
            responseContext,
          );
        });
    });
  }

  /**
   * Update the given fields of a specific custom destination in your organization.
   * @param param The request object
   */
  public updateLogsCustomDestination(
    param: LogsCustomDestinationsApiUpdateLogsCustomDestinationRequest,
    options?: Configuration,
  ): Promise<CustomDestinationResponse> {
    const requestContextPromise =
      this.requestFactory.updateLogsCustomDestination(
        param.customDestinationId,
        param.body,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateLogsCustomDestination(
            responseContext,
          );
        });
    });
  }
}
