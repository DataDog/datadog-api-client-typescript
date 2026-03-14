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
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { OnPremManagementServiceCreateEnrollmentRequest } from "../models/OnPremManagementServiceCreateEnrollmentRequest";
import { OnPremManagementServiceCreateEnrollmentResponse } from "../models/OnPremManagementServiceCreateEnrollmentResponse";
import { OnPremManagementServiceGetEnrollmentResponse } from "../models/OnPremManagementServiceGetEnrollmentResponse";
import { OnPremManagementServiceRegisterTokenRequest } from "../models/OnPremManagementServiceRegisterTokenRequest";
import { OnPremManagementServiceRegisterTokenResponse } from "../models/OnPremManagementServiceRegisterTokenResponse";

export class OnPremManagementServiceApiRequestFactory extends BaseAPIRequestFactory {
  public async createOnPremManagementServiceEnrollment(
    body: OnPremManagementServiceCreateEnrollmentRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'createOnPremManagementServiceEnrollment'"
    );
    if (
      !_config.unstableOperations["v2.createOnPremManagementServiceEnrollment"]
    ) {
      throw new Error(
        "Unstable operation 'createOnPremManagementServiceEnrollment' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "body",
        "createOnPremManagementServiceEnrollment"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/on-prem-management-service/enrollments";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.OnPremManagementServiceApi.createOnPremManagementServiceEnrollment"
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
        "OnPremManagementServiceCreateEnrollmentRequest",
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

  public async getOnPremManagementServiceEnrollment(
    tokenHash: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'getOnPremManagementServiceEnrollment'"
    );
    if (
      !_config.unstableOperations["v2.getOnPremManagementServiceEnrollment"]
    ) {
      throw new Error(
        "Unstable operation 'getOnPremManagementServiceEnrollment' is disabled"
      );
    }

    // verify required parameter 'tokenHash' is not null or undefined
    if (tokenHash === null || tokenHash === undefined) {
      throw new RequiredError(
        "tokenHash",
        "getOnPremManagementServiceEnrollment"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/on-prem-management-service/enrollments/{token_hash}".replace(
        "{token_hash}",
        encodeURIComponent(String(tokenHash))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.OnPremManagementServiceApi.getOnPremManagementServiceEnrollment"
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

  public async registerOnPremManagementServiceToken(
    body: OnPremManagementServiceRegisterTokenRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'registerOnPremManagementServiceToken'"
    );
    if (
      !_config.unstableOperations["v2.registerOnPremManagementServiceToken"]
    ) {
      throw new Error(
        "Unstable operation 'registerOnPremManagementServiceToken' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "registerOnPremManagementServiceToken");
    }

    // Path Params
    const localVarPath = "/api/v2/on-prem-management-service/tokens/register";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.OnPremManagementServiceApi.registerOnPremManagementServiceToken"
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
        "OnPremManagementServiceRegisterTokenRequest",
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

export class OnPremManagementServiceApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createOnPremManagementServiceEnrollment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createOnPremManagementServiceEnrollment(
    response: ResponseContext
  ): Promise<OnPremManagementServiceCreateEnrollmentResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: OnPremManagementServiceCreateEnrollmentResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "OnPremManagementServiceCreateEnrollmentResponse"
        ) as OnPremManagementServiceCreateEnrollmentResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: OnPremManagementServiceCreateEnrollmentResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "OnPremManagementServiceCreateEnrollmentResponse",
          ""
        ) as OnPremManagementServiceCreateEnrollmentResponse;
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
   * @params response Response returned by the server for a request to getOnPremManagementServiceEnrollment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getOnPremManagementServiceEnrollment(
    response: ResponseContext
  ): Promise<OnPremManagementServiceGetEnrollmentResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: OnPremManagementServiceGetEnrollmentResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "OnPremManagementServiceGetEnrollmentResponse"
        ) as OnPremManagementServiceGetEnrollmentResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: OnPremManagementServiceGetEnrollmentResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "OnPremManagementServiceGetEnrollmentResponse",
          ""
        ) as OnPremManagementServiceGetEnrollmentResponse;
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
   * @params response Response returned by the server for a request to registerOnPremManagementServiceToken
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async registerOnPremManagementServiceToken(
    response: ResponseContext
  ): Promise<OnPremManagementServiceRegisterTokenResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: OnPremManagementServiceRegisterTokenResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "OnPremManagementServiceRegisterTokenResponse"
        ) as OnPremManagementServiceRegisterTokenResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }
    if (response.httpStatusCode === 429) {
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
      const body: OnPremManagementServiceRegisterTokenResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "OnPremManagementServiceRegisterTokenResponse",
          ""
        ) as OnPremManagementServiceRegisterTokenResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface OnPremManagementServiceApiCreateOnPremManagementServiceEnrollmentRequest {
  /**
   * @type OnPremManagementServiceCreateEnrollmentRequest
   */
  body: OnPremManagementServiceCreateEnrollmentRequest;
}

export interface OnPremManagementServiceApiGetOnPremManagementServiceEnrollmentRequest {
  /**
   * The enrollment token hash.
   * @type string
   */
  tokenHash: string;
}

export interface OnPremManagementServiceApiRegisterOnPremManagementServiceTokenRequest {
  /**
   * @type OnPremManagementServiceRegisterTokenRequest
   */
  body: OnPremManagementServiceRegisterTokenRequest;
}

export class OnPremManagementServiceApi {
  private requestFactory: OnPremManagementServiceApiRequestFactory;
  private responseProcessor: OnPremManagementServiceApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: OnPremManagementServiceApiRequestFactory,
    responseProcessor?: OnPremManagementServiceApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory ||
      new OnPremManagementServiceApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new OnPremManagementServiceApiResponseProcessor();
  }

  /**
   * Create a new enrollment for an on-prem runner. This endpoint initiates the enrollment process and returns a token that the runner will use to complete the enrollment.
   * @param param The request object
   */
  public createOnPremManagementServiceEnrollment(
    param: OnPremManagementServiceApiCreateOnPremManagementServiceEnrollmentRequest,
    options?: Configuration
  ): Promise<OnPremManagementServiceCreateEnrollmentResponse> {
    const requestContextPromise =
      this.requestFactory.createOnPremManagementServiceEnrollment(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createOnPremManagementServiceEnrollment(
            responseContext
          );
        });
    });
  }

  /**
   * Get the status of an enrollment for an on-prem runner using the enrollment token hash.
   * @param param The request object
   */
  public getOnPremManagementServiceEnrollment(
    param: OnPremManagementServiceApiGetOnPremManagementServiceEnrollmentRequest,
    options?: Configuration
  ): Promise<OnPremManagementServiceGetEnrollmentResponse> {
    const requestContextPromise =
      this.requestFactory.getOnPremManagementServiceEnrollment(
        param.tokenHash,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getOnPremManagementServiceEnrollment(
            responseContext
          );
        });
    });
  }

  /**
   * Register a token for query execution. This endpoint allows an on-prem runner to register a token that will be used to execute queries on a specific connection.
   * @param param The request object
   */
  public registerOnPremManagementServiceToken(
    param: OnPremManagementServiceApiRegisterOnPremManagementServiceTokenRequest,
    options?: Configuration
  ): Promise<OnPremManagementServiceRegisterTokenResponse> {
    const requestContextPromise =
      this.requestFactory.registerOnPremManagementServiceToken(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.registerOnPremManagementServiceToken(
            responseContext
          );
        });
    });
  }
}
