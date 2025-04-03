import {
  BaseAPIRequestFactory,
  Configuration,
  applySecurityAuthentication,
  RequestContext,
  HttpMethod,
  ResponseContext,
  logger,
  RequiredError,
  ApiException,
  createConfiguration,
} from "@datadog/datadog-api-client";

import { ObjectSerializer } from "./models/ObjectSerializer";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { AWSAccountCreateRequest } from "./models/AWSAccountCreateRequest";
import { AWSAccountResponse } from "./models/AWSAccountResponse";
import { AWSAccountsResponse } from "./models/AWSAccountsResponse";
import { AWSAccountUpdateRequest } from "./models/AWSAccountUpdateRequest";
import { AWSNamespacesResponse } from "./models/AWSNamespacesResponse";
import { AWSNewExternalIDResponse } from "./models/AWSNewExternalIDResponse";

export class AWSIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public async createAWSAccount(
    body: AWSAccountCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createAWSAccount'");
    if (!_config.unstableOperations["0.0.1.createAWSAccount"]) {
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
      .getServer("0.0.1.AWSIntegrationApi.createAWSAccount")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "AWSAccountCreateRequest", ""),
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

  public async createNewAWSExternalID(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createNewAWSExternalID'");
    if (!_config.unstableOperations["0.0.1.createNewAWSExternalID"]) {
      throw new Error("Unstable operation 'createNewAWSExternalID' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/integration/aws/generate_new_external_id";

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.AWSIntegrationApi.createNewAWSExternalID")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteAWSAccount(
    awsAccountConfigId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteAWSAccount'");
    if (!_config.unstableOperations["0.0.1.deleteAWSAccount"]) {
      throw new Error("Unstable operation 'deleteAWSAccount' is disabled");
    }

    // verify required parameter 'awsAccountConfigId' is not null or undefined
    if (awsAccountConfigId === null || awsAccountConfigId === undefined) {
      throw new RequiredError("awsAccountConfigId", "deleteAWSAccount");
    }

    // Path Params
    const localVarPath = "/api/v2/integration/aws/accounts/{aws_account_config_id}".replace(
      "{aws_account_config_id}",
      encodeURIComponent(String(awsAccountConfigId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.AWSIntegrationApi.deleteAWSAccount")
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
    awsAccountConfigId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getAWSAccount'");
    if (!_config.unstableOperations["0.0.1.getAWSAccount"]) {
      throw new Error("Unstable operation 'getAWSAccount' is disabled");
    }

    // verify required parameter 'awsAccountConfigId' is not null or undefined
    if (awsAccountConfigId === null || awsAccountConfigId === undefined) {
      throw new RequiredError("awsAccountConfigId", "getAWSAccount");
    }

    // Path Params
    const localVarPath = "/api/v2/integration/aws/accounts/{aws_account_config_id}".replace(
      "{aws_account_config_id}",
      encodeURIComponent(String(awsAccountConfigId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.AWSIntegrationApi.getAWSAccount")
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
    awsAccountId?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listAWSAccounts'");
    if (!_config.unstableOperations["0.0.1.listAWSAccounts"]) {
      throw new Error("Unstable operation 'listAWSAccounts' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/integration/aws/accounts";

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.AWSIntegrationApi.listAWSAccounts")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (awsAccountId !== undefined) {
      requestContext.setQueryParam(
        "aws_account_id",
        ObjectSerializer.serialize(awsAccountId, "string", ""),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listAWSNamespaces(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listAWSNamespaces'");
    if (!_config.unstableOperations["0.0.1.listAWSNamespaces"]) {
      throw new Error("Unstable operation 'listAWSNamespaces' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/integration/aws/available_namespaces";

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.AWSIntegrationApi.listAWSNamespaces")
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
    awsAccountConfigId: string,
    body: AWSAccountUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateAWSAccount'");
    if (!_config.unstableOperations["0.0.1.updateAWSAccount"]) {
      throw new Error("Unstable operation 'updateAWSAccount' is disabled");
    }

    // verify required parameter 'awsAccountConfigId' is not null or undefined
    if (awsAccountConfigId === null || awsAccountConfigId === undefined) {
      throw new RequiredError("awsAccountConfigId", "updateAWSAccount");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateAWSAccount");
    }

    // Path Params
    const localVarPath = "/api/v2/integration/aws/accounts/{aws_account_config_id}".replace(
      "{aws_account_config_id}",
      encodeURIComponent(String(awsAccountConfigId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.AWSIntegrationApi.updateAWSAccount")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "AWSAccountUpdateRequest", ""),
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

export class AWSIntegrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createAWSAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAWSAccount(
    response: ResponseContext,
  ): Promise<AWSAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: AWSAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSAccountResponse",
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
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AWSAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSAccountResponse",
        "",
      ) as AWSAccountResponse;
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
   * @params response Response returned by the server for a request to createNewAWSExternalID
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createNewAWSExternalID(
    response: ResponseContext,
  ): Promise<AWSNewExternalIDResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: AWSNewExternalIDResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSNewExternalIDResponse",
      ) as AWSNewExternalIDResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AWSNewExternalIDResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSNewExternalIDResponse",
        "",
      ) as AWSNewExternalIDResponse;
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
   * @params response Response returned by the server for a request to deleteAWSAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAWSAccount(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
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
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
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
   * @params response Response returned by the server for a request to getAWSAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAWSAccount(
    response: ResponseContext,
  ): Promise<AWSAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: AWSAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSAccountResponse",
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
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AWSAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSAccountResponse",
        "",
      ) as AWSAccountResponse;
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
   * @params response Response returned by the server for a request to listAWSAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAWSAccounts(
    response: ResponseContext,
  ): Promise<AWSAccountsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: AWSAccountsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSAccountsResponse",
      ) as AWSAccountsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AWSAccountsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSAccountsResponse",
        "",
      ) as AWSAccountsResponse;
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
   * @params response Response returned by the server for a request to listAWSNamespaces
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAWSNamespaces(
    response: ResponseContext,
  ): Promise<AWSNamespacesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: AWSNamespacesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSNamespacesResponse",
      ) as AWSNamespacesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AWSNamespacesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSNamespacesResponse",
        "",
      ) as AWSNamespacesResponse;
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
   * @params response Response returned by the server for a request to updateAWSAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAWSAccount(
    response: ResponseContext,
  ): Promise<AWSAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: AWSAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSAccountResponse",
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
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AWSAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSAccountResponse",
        "",
      ) as AWSAccountResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
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
   * Unique Datadog ID of the AWS Account Integration Config. To get the config ID for an account, use the
   * [List all AWS integrations](https://docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations) endpoint and query by AWS Account ID.
   * @type string
   */
  awsAccountConfigId: string;
}

export interface AWSIntegrationApiGetAWSAccountRequest {
  /**
   * Unique Datadog ID of the AWS Account Integration Config. To get the config ID for an account, use the
   * [List all AWS integrations](https://docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations) endpoint and query by AWS Account ID.
   * @type string
   */
  awsAccountConfigId: string;
}

export interface AWSIntegrationApiListAWSAccountsRequest {
  /**
   * Optional query parameter to filter accounts by AWS Account ID. If not provided, all accounts are returned.
   * @type string
   */
  awsAccountId?: string;
}

export interface AWSIntegrationApiUpdateAWSAccountRequest {
  /**
   * Unique Datadog ID of the AWS Account Integration Config. To get the config ID for an account, use the
   * [List all AWS integrations](https://docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations) endpoint and query by AWS Account ID.
   * @type string
   */
  awsAccountConfigId: string;
  /**
   * @type AWSAccountUpdateRequest
   */
  body: AWSAccountUpdateRequest;
}

export class AWSIntegrationApi {
  private requestFactory: AWSIntegrationApiRequestFactory;
  private responseProcessor: AWSIntegrationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: AWSIntegrationApiRequestFactory,
    responseProcessor?: AWSIntegrationApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new AWSIntegrationApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new AWSIntegrationApiResponseProcessor();
  }

  /**
   * Create a new AWS Account Integration Config.
   * @param param The request object
   */
  public createAWSAccount(
    param: AWSIntegrationApiCreateAWSAccountRequest,
    options?: Configuration,
  ): Promise<AWSAccountResponse> {
    const requestContextPromise = this.requestFactory.createAWSAccount(
      param.body,
      options,
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
   * Generate a new external ID for AWS role-based authentication.
   * @param param The request object
   */
  public createNewAWSExternalID(options?: Configuration,
  ): Promise<AWSNewExternalIDResponse> {
    const requestContextPromise = this.requestFactory.createNewAWSExternalID(
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createNewAWSExternalID(responseContext);
        });
    });
  }

  /**
   * Delete an AWS Account Integration Config by config ID.
   * @param param The request object
   */
  public deleteAWSAccount(
    param: AWSIntegrationApiDeleteAWSAccountRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteAWSAccount(
      param.awsAccountConfigId,
      options,
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
   * Get an AWS Account Integration Config by config ID.
   * @param param The request object
   */
  public getAWSAccount(
    param: AWSIntegrationApiGetAWSAccountRequest,
    options?: Configuration,
  ): Promise<AWSAccountResponse> {
    const requestContextPromise = this.requestFactory.getAWSAccount(
      param.awsAccountConfigId,
      options,
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
   * Get a list of AWS Account Integration Configs.
   * @param param The request object
   */
  public listAWSAccounts(
    param: AWSIntegrationApiListAWSAccountsRequest = {},
    options?: Configuration,
  ): Promise<AWSAccountsResponse> {
    const requestContextPromise = this.requestFactory.listAWSAccounts(
      param.awsAccountId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAWSAccounts(responseContext);
        });
    });
  }

  /**
   * Get a list of available AWS CloudWatch namespaces that can send metrics to Datadog.
   * @param param The request object
   */
  public listAWSNamespaces(options?: Configuration,
  ): Promise<AWSNamespacesResponse> {
    const requestContextPromise = this.requestFactory.listAWSNamespaces(
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAWSNamespaces(responseContext);
        });
    });
  }

  /**
   * Update an AWS Account Integration Config by config ID.
   * @param param The request object
   */
  public updateAWSAccount(
    param: AWSIntegrationApiUpdateAWSAccountRequest,
    options?: Configuration,
  ): Promise<AWSAccountResponse> {
    const requestContextPromise = this.requestFactory.updateAWSAccount(
      param.awsAccountConfigId,
      param.body,
      options,
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
