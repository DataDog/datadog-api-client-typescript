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
import { AWSAccountCreateRequest } from "../models/AWSAccountCreateRequest";
import { AWSAccountPatchRequest } from "../models/AWSAccountPatchRequest";
import { AWSAccountResponse } from "../models/AWSAccountResponse";
import { AWSAccountsResponse } from "../models/AWSAccountsResponse";

export class AWSIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public async createAWSAccount(
    body: AWSAccountCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createAWSAccount'");
    if (!_config.unstableOperations["v2.createAWSAccount"]) {
      throw new Error("Unstable operation 'createAWSAccount' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createAWSAccount");
    }

    // Path Params
    const localVarPath = "/api/v2/integration/aws/accounts";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AWSIntegrationApi.createAWSAccount")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "AWSAccountCreateRequest", ""),
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

  public async deleteAWSAccount(
    awsAccountId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteAWSAccount'");
    if (!_config.unstableOperations["v2.deleteAWSAccount"]) {
      throw new Error("Unstable operation 'deleteAWSAccount' is disabled");
    }

    // verify required parameter 'awsAccountId' is not null or undefined
    if (awsAccountId === null || awsAccountId === undefined) {
      throw new RequiredError("awsAccountId", "deleteAWSAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/aws/accounts/{aws_account_id}".replace(
        "{aws_account_id}",
        encodeURIComponent(String(awsAccountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AWSIntegrationApi.deleteAWSAccount")
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

  public async getAWSAccount(
    awsAccountId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getAWSAccount'");
    if (!_config.unstableOperations["v2.getAWSAccount"]) {
      throw new Error("Unstable operation 'getAWSAccount' is disabled");
    }

    // verify required parameter 'awsAccountId' is not null or undefined
    if (awsAccountId === null || awsAccountId === undefined) {
      throw new RequiredError("awsAccountId", "getAWSAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/aws/accounts/{aws_account_id}".replace(
        "{aws_account_id}",
        encodeURIComponent(String(awsAccountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AWSIntegrationApi.getAWSAccount")
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

  public async listAWSAccounts(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listAWSAccounts'");
    if (!_config.unstableOperations["v2.listAWSAccounts"]) {
      throw new Error("Unstable operation 'listAWSAccounts' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/integration/aws/accounts";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AWSIntegrationApi.listAWSAccounts")
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

  public async updateAWSAccount(
    awsAccountId: string,
    body: AWSAccountPatchRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateAWSAccount'");
    if (!_config.unstableOperations["v2.updateAWSAccount"]) {
      throw new Error("Unstable operation 'updateAWSAccount' is disabled");
    }

    // verify required parameter 'awsAccountId' is not null or undefined
    if (awsAccountId === null || awsAccountId === undefined) {
      throw new RequiredError("awsAccountId", "updateAWSAccount");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateAWSAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/aws/accounts/{aws_account_id}".replace(
        "{aws_account_id}",
        encodeURIComponent(String(awsAccountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AWSIntegrationApi.updateAWSAccount")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "AWSAccountPatchRequest", ""),
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

export class AWSIntegrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createAWSAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAWSAccount(
    response: ResponseContext
  ): Promise<AWSAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AWSAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSAccountResponse"
      ) as AWSAccountResponse;
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
      const body: AWSAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSAccountResponse",
        ""
      ) as AWSAccountResponse;
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
   * @params response Response returned by the server for a request to deleteAWSAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAWSAccount(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
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
   * @params response Response returned by the server for a request to getAWSAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAWSAccount(
    response: ResponseContext
  ): Promise<AWSAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AWSAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSAccountResponse"
      ) as AWSAccountResponse;
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
      const body: AWSAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSAccountResponse",
        ""
      ) as AWSAccountResponse;
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
   * @params response Response returned by the server for a request to listAWSAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAWSAccounts(
    response: ResponseContext
  ): Promise<AWSAccountsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AWSAccountsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSAccountsResponse"
      ) as AWSAccountsResponse;
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
      const body: AWSAccountsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSAccountsResponse",
        ""
      ) as AWSAccountsResponse;
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
   * @params response Response returned by the server for a request to updateAWSAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAWSAccount(
    response: ResponseContext
  ): Promise<AWSAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AWSAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSAccountResponse"
      ) as AWSAccountResponse;
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
      const body: AWSAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSAccountResponse",
        ""
      ) as AWSAccountResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface AWSIntegrationApiCreateAWSAccountRequest {
  /**
   * @type AWSAccountCreateRequest
   */
  body: AWSAccountCreateRequest;
}

export interface AWSIntegrationApiDeleteAWSAccountRequest {
  /**
   * The ID of the AWS Account Integration Config
   * @type string
   */
  awsAccountId: string;
}

export interface AWSIntegrationApiGetAWSAccountRequest {
  /**
   * The ID of the AWS Account Integration Config
   * @type string
   */
  awsAccountId: string;
}

export interface AWSIntegrationApiUpdateAWSAccountRequest {
  /**
   * The ID of the AWS Account Integration Config
   * @type string
   */
  awsAccountId: string;
  /**
   * @type AWSAccountPatchRequest
   */
  body: AWSAccountPatchRequest;
}

export class AWSIntegrationApi {
  private requestFactory: AWSIntegrationApiRequestFactory;
  private responseProcessor: AWSIntegrationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: AWSIntegrationApiRequestFactory,
    responseProcessor?: AWSIntegrationApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new AWSIntegrationApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new AWSIntegrationApiResponseProcessor();
  }

  /**
   * Create a new AWS Account Integration Config
   * @param param The request object
   */
  public createAWSAccount(
    param: AWSIntegrationApiCreateAWSAccountRequest,
    options?: Configuration
  ): Promise<AWSAccountResponse> {
    const requestContextPromise = this.requestFactory.createAWSAccount(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAWSAccount(responseContext);
        });
    });
  }

  /**
   * Delete an AWS Account Integration Config
   * @param param The request object
   */
  public deleteAWSAccount(
    param: AWSIntegrationApiDeleteAWSAccountRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteAWSAccount(
      param.awsAccountId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAWSAccount(responseContext);
        });
    });
  }

  /**
   * Get an AWS Account Integration Config
   * @param param The request object
   */
  public getAWSAccount(
    param: AWSIntegrationApiGetAWSAccountRequest,
    options?: Configuration
  ): Promise<AWSAccountResponse> {
    const requestContextPromise = this.requestFactory.getAWSAccount(
      param.awsAccountId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAWSAccount(responseContext);
        });
    });
  }

  /**
   * Get all AWS Account Integration Configs
   * @param param The request object
   */
  public listAWSAccounts(
    options?: Configuration
  ): Promise<AWSAccountsResponse> {
    const requestContextPromise = this.requestFactory.listAWSAccounts(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAWSAccounts(responseContext);
        });
    });
  }

  /**
   * Update an AWS Account Integration Config
   * @param param The request object
   */
  public updateAWSAccount(
    param: AWSIntegrationApiUpdateAWSAccountRequest,
    options?: Configuration
  ): Promise<AWSAccountResponse> {
    const requestContextPromise = this.requestFactory.updateAWSAccount(
      param.awsAccountId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAWSAccount(responseContext);
        });
    });
  }
}
