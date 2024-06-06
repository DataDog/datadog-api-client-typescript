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
  public async createAWSAccountv2(
    body: AWSAccountCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createAWSAccountv2'");
    if (!_config.unstableOperations["v2.createAWSAccountv2"]) {
      throw new Error("Unstable operation 'createAWSAccountv2' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createAWSAccountv2");
    }

    // Path Params
    const localVarPath = "/api/v2/integration/aws/accounts";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AWSIntegrationApi.createAWSAccountv2")
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

  public async deleteAWSAccountv2(
    awsAccountConfigId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteAWSAccountv2'");
    if (!_config.unstableOperations["v2.deleteAWSAccountv2"]) {
      throw new Error("Unstable operation 'deleteAWSAccountv2' is disabled");
    }

    // verify required parameter 'awsAccountConfigId' is not null or undefined
    if (awsAccountConfigId === null || awsAccountConfigId === undefined) {
      throw new RequiredError("awsAccountConfigId", "deleteAWSAccountv2");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/aws/accounts/{aws_account_config_id}".replace(
        "{aws_account_config_id}",
        encodeURIComponent(String(awsAccountConfigId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AWSIntegrationApi.deleteAWSAccountv2")
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

  public async getAWSAccountv2(
    awsAccountConfigId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getAWSAccountv2'");
    if (!_config.unstableOperations["v2.getAWSAccountv2"]) {
      throw new Error("Unstable operation 'getAWSAccountv2' is disabled");
    }

    // verify required parameter 'awsAccountConfigId' is not null or undefined
    if (awsAccountConfigId === null || awsAccountConfigId === undefined) {
      throw new RequiredError("awsAccountConfigId", "getAWSAccountv2");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/aws/accounts/{aws_account_config_id}".replace(
        "{aws_account_config_id}",
        encodeURIComponent(String(awsAccountConfigId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AWSIntegrationApi.getAWSAccountv2")
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

  public async listAWSAccountsv2(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listAWSAccountsv2'");
    if (!_config.unstableOperations["v2.listAWSAccountsv2"]) {
      throw new Error("Unstable operation 'listAWSAccountsv2' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/integration/aws/accounts";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AWSIntegrationApi.listAWSAccountsv2")
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

  public async patchAWSAccountv2(
    awsAccountConfigId: string,
    body: AWSAccountPatchRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'patchAWSAccountv2'");
    if (!_config.unstableOperations["v2.patchAWSAccountv2"]) {
      throw new Error("Unstable operation 'patchAWSAccountv2' is disabled");
    }

    // verify required parameter 'awsAccountConfigId' is not null or undefined
    if (awsAccountConfigId === null || awsAccountConfigId === undefined) {
      throw new RequiredError("awsAccountConfigId", "patchAWSAccountv2");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "patchAWSAccountv2");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/aws/accounts/{aws_account_config_id}".replace(
        "{aws_account_config_id}",
        encodeURIComponent(String(awsAccountConfigId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AWSIntegrationApi.patchAWSAccountv2")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "*/*");
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
   * @params response Response returned by the server for a request to createAWSAccountv2
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAWSAccountv2(
    response: ResponseContext
  ): Promise<AWSAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: AWSAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSAccountResponse"
      ) as AWSAccountResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
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
   * @params response Response returned by the server for a request to deleteAWSAccountv2
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAWSAccountv2(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
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
   * @params response Response returned by the server for a request to getAWSAccountv2
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAWSAccountv2(
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
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
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
   * @params response Response returned by the server for a request to listAWSAccountsv2
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAWSAccountsv2(
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
   * @params response Response returned by the server for a request to patchAWSAccountv2
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async patchAWSAccountv2(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
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
}

export interface AWSIntegrationApiCreateAWSAccountv2Request {
  /**
   * @type AWSAccountCreateRequest
   */
  body: AWSAccountCreateRequest;
}

export interface AWSIntegrationApiDeleteAWSAccountv2Request {
  /**
   * None
   * @type string
   */
  awsAccountConfigId: string;
}

export interface AWSIntegrationApiGetAWSAccountv2Request {
  /**
   * None
   * @type string
   */
  awsAccountConfigId: string;
}

export interface AWSIntegrationApiPatchAWSAccountv2Request {
  /**
   * None
   * @type string
   */
  awsAccountConfigId: string;
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
   * Create a new AWS account
   * @param param The request object
   */
  public createAWSAccountv2(
    param: AWSIntegrationApiCreateAWSAccountv2Request,
    options?: Configuration
  ): Promise<AWSAccountResponse> {
    const requestContextPromise = this.requestFactory.createAWSAccountv2(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAWSAccountv2(responseContext);
        });
    });
  }

  /**
   * Delete an AWS account
   * @param param The request object
   */
  public deleteAWSAccountv2(
    param: AWSIntegrationApiDeleteAWSAccountv2Request,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteAWSAccountv2(
      param.awsAccountConfigId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAWSAccountv2(responseContext);
        });
    });
  }

  /**
   * Get an AWS account
   * @param param The request object
   */
  public getAWSAccountv2(
    param: AWSIntegrationApiGetAWSAccountv2Request,
    options?: Configuration
  ): Promise<AWSAccountResponse> {
    const requestContextPromise = this.requestFactory.getAWSAccountv2(
      param.awsAccountConfigId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAWSAccountv2(responseContext);
        });
    });
  }

  /**
   * Get all AWS accounts
   * @param param The request object
   */
  public listAWSAccountsv2(
    options?: Configuration
  ): Promise<AWSAccountsResponse> {
    const requestContextPromise =
      this.requestFactory.listAWSAccountsv2(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAWSAccountsv2(responseContext);
        });
    });
  }

  /**
   * Patch an AWS account
   * @param param The request object
   */
  public patchAWSAccountv2(
    param: AWSIntegrationApiPatchAWSAccountv2Request,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.patchAWSAccountv2(
      param.awsAccountConfigId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.patchAWSAccountv2(responseContext);
        });
    });
  }
}
