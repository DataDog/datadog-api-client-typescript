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
import { CloudflareAccountCreateRequest } from "./models/CloudflareAccountCreateRequest";
import { CloudflareAccountResponse } from "./models/CloudflareAccountResponse";
import { CloudflareAccountsResponse } from "./models/CloudflareAccountsResponse";
import { CloudflareAccountUpdateRequest } from "./models/CloudflareAccountUpdateRequest";

export class CloudflareIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public async createCloudflareAccount(
    body: CloudflareAccountCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCloudflareAccount");
    }

    // Path Params
    const localVarPath = "/api/v2/integrations/cloudflare/accounts";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudflareIntegrationApi.createCloudflareAccount")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "CloudflareAccountCreateRequest", ""),
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

  public async deleteCloudflareAccount(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "deleteCloudflareAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/cloudflare/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudflareIntegrationApi.deleteCloudflareAccount")
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

  public async getCloudflareAccount(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "getCloudflareAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/cloudflare/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudflareIntegrationApi.getCloudflareAccount")
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

  public async listCloudflareAccounts(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/integrations/cloudflare/accounts";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudflareIntegrationApi.listCloudflareAccounts")
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

  public async updateCloudflareAccount(
    accountId: string,
    body: CloudflareAccountUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "updateCloudflareAccount");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateCloudflareAccount");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integrations/cloudflare/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudflareIntegrationApi.updateCloudflareAccount")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "CloudflareAccountUpdateRequest", ""),
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

export class CloudflareIntegrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createCloudflareAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCloudflareAccount(
    response: ResponseContext,
  ): Promise<CloudflareAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 201) {
      const body: CloudflareAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudflareAccountResponse",
      ) as CloudflareAccountResponse;
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
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CloudflareAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudflareAccountResponse",
        "",
      ) as CloudflareAccountResponse;
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
   * @params response Response returned by the server for a request to deleteCloudflareAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteCloudflareAccount(
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
   * @params response Response returned by the server for a request to getCloudflareAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCloudflareAccount(
    response: ResponseContext,
  ): Promise<CloudflareAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: CloudflareAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudflareAccountResponse",
      ) as CloudflareAccountResponse;
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
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CloudflareAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudflareAccountResponse",
        "",
      ) as CloudflareAccountResponse;
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
   * @params response Response returned by the server for a request to listCloudflareAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCloudflareAccounts(
    response: ResponseContext,
  ): Promise<CloudflareAccountsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: CloudflareAccountsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudflareAccountsResponse",
      ) as CloudflareAccountsResponse;
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
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CloudflareAccountsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudflareAccountsResponse",
        "",
      ) as CloudflareAccountsResponse;
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
   * @params response Response returned by the server for a request to updateCloudflareAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateCloudflareAccount(
    response: ResponseContext,
  ): Promise<CloudflareAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: CloudflareAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudflareAccountResponse",
      ) as CloudflareAccountResponse;
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
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CloudflareAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CloudflareAccountResponse",
        "",
      ) as CloudflareAccountResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface CloudflareIntegrationApiCreateCloudflareAccountRequest {
  /**
   * @type CloudflareAccountCreateRequest
   */
  body: CloudflareAccountCreateRequest;
}

export interface CloudflareIntegrationApiDeleteCloudflareAccountRequest {
  /**
   * None
   * @type string
   */
  accountId: string;
}

export interface CloudflareIntegrationApiGetCloudflareAccountRequest {
  /**
   * None
   * @type string
   */
  accountId: string;
}

export interface CloudflareIntegrationApiUpdateCloudflareAccountRequest {
  /**
   * None
   * @type string
   */
  accountId: string;
  /**
   * @type CloudflareAccountUpdateRequest
   */
  body: CloudflareAccountUpdateRequest;
}

export class CloudflareIntegrationApi {
  private requestFactory: CloudflareIntegrationApiRequestFactory;
  private responseProcessor: CloudflareIntegrationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: CloudflareIntegrationApiRequestFactory,
    responseProcessor?: CloudflareIntegrationApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new CloudflareIntegrationApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new CloudflareIntegrationApiResponseProcessor();
  }

  /**
   * Create a Cloudflare account.
   * @param param The request object
   */
  public createCloudflareAccount(
    param: CloudflareIntegrationApiCreateCloudflareAccountRequest,
    options?: Configuration,
  ): Promise<CloudflareAccountResponse> {
    const requestContextPromise = this.requestFactory.createCloudflareAccount(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createCloudflareAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a Cloudflare account.
   * @param param The request object
   */
  public deleteCloudflareAccount(
    param: CloudflareIntegrationApiDeleteCloudflareAccountRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteCloudflareAccount(
      param.accountId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteCloudflareAccount(
            responseContext,
          );
        });
    });
  }

  /**
   * Get a Cloudflare account.
   * @param param The request object
   */
  public getCloudflareAccount(
    param: CloudflareIntegrationApiGetCloudflareAccountRequest,
    options?: Configuration,
  ): Promise<CloudflareAccountResponse> {
    const requestContextPromise = this.requestFactory.getCloudflareAccount(
      param.accountId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCloudflareAccount(responseContext);
        });
    });
  }

  /**
   * List Cloudflare accounts.
   * @param param The request object
   */
  public listCloudflareAccounts(
    options?: Configuration,
  ): Promise<CloudflareAccountsResponse> {
    const requestContextPromise =
      this.requestFactory.listCloudflareAccounts(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCloudflareAccounts(responseContext);
        });
    });
  }

  /**
   * Update a Cloudflare account.
   * @param param The request object
   */
  public updateCloudflareAccount(
    param: CloudflareIntegrationApiUpdateCloudflareAccountRequest,
    options?: Configuration,
  ): Promise<CloudflareAccountResponse> {
    const requestContextPromise = this.requestFactory.updateCloudflareAccount(
      param.accountId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateCloudflareAccount(
            responseContext,
          );
        });
    });
  }
}
