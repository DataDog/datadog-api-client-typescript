import { BaseAPIRequestFactory, RequiredError } from "../../datadog-api-client-common/baseapi";
import { Configuration, applySecurityAuthentication} from "../../datadog-api-client-common/configuration";
import {
  RequestContext,
  HttpMethod,
  ResponseContext,
  HttpFile
  } from "../../datadog-api-client-common/http/http";

import FormData from "form-data";

import { logger } from "../../../logger";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "../../datadog-api-client-common/exception";


import { APIErrorResponse } from "../models/APIErrorResponse";
import { GCPSTSDelegateAccountResponse } from "../models/GCPSTSDelegateAccountResponse";
import { GCPSTSServiceAccountCreateRequest } from "../models/GCPSTSServiceAccountCreateRequest";
import { GCPSTSServiceAccountResponse } from "../models/GCPSTSServiceAccountResponse";
import { GCPSTSServiceAccountsResponse } from "../models/GCPSTSServiceAccountsResponse";
import { GCPSTSServiceAccountUpdateRequest } from "../models/GCPSTSServiceAccountUpdateRequest";

export class GCPIntegrationApiRequestFactory extends BaseAPIRequestFactory {

  public async createGCPSTSAccount(body: GCPSTSServiceAccountCreateRequest,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError('body', 'createGCPSTSAccount');
    }

    // Path Params
    const localVarPath = '/api/v2/integration/gcp/accounts';

    // Make Request Context
    const requestContext = _config.getServer('v2.GCPIntegrationApi.createGCPSTSAccount').makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "GCPSTSServiceAccountCreateRequest", ""),
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

  public async deleteGCPSTSAccount(accountId: string,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError('accountId', 'deleteGCPSTSAccount');
    }

    // Path Params
    const localVarPath = '/api/v2/integration/gcp/accounts/{account_id}'
      .replace('{account_id}', encodeURIComponent(String(accountId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.GCPIntegrationApi.deleteGCPSTSAccount').makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getGCPSTSDelegate(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = '/api/v2/integration/gcp/sts_delegate';

    // Make Request Context
    const requestContext = _config.getServer('v2.GCPIntegrationApi.getGCPSTSDelegate').makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listGCPSTSAccounts(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = '/api/v2/integration/gcp/accounts';

    // Make Request Context
    const requestContext = _config.getServer('v2.GCPIntegrationApi.listGCPSTSAccounts').makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async makeGCPSTSDelegate(body?: any,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = '/api/v2/integration/gcp/sts_delegate';

    // Make Request Context
    const requestContext = _config.getServer('v2.GCPIntegrationApi.makeGCPSTSDelegate').makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "any", ""),
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

  public async updateGCPSTSAccount(accountId: string,body: GCPSTSServiceAccountUpdateRequest,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError('accountId', 'updateGCPSTSAccount');
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError('body', 'updateGCPSTSAccount');
    }

    // Path Params
    const localVarPath = '/api/v2/integration/gcp/accounts/{account_id}'
      .replace('{account_id}', encodeURIComponent(String(accountId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.GCPIntegrationApi.updateGCPSTSAccount').makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "GCPSTSServiceAccountUpdateRequest", ""),
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

export class GCPIntegrationApiResponseProcessor {

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createGCPSTSAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async createGCPSTSAccount(response: ResponseContext): Promise<GCPSTSServiceAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: GCPSTSServiceAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GCPSTSServiceAccountResponse"
      ) as GCPSTSServiceAccountResponse;
      return body;
    }
    if (response.httpStatusCode === 400||response.httpStatusCode === 401||response.httpStatusCode === 403||response.httpStatusCode === 409||response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: GCPSTSServiceAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GCPSTSServiceAccountResponse", ""
      ) as GCPSTSServiceAccountResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteGCPSTSAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async deleteGCPSTSAccount(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 400||response.httpStatusCode === 403||response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void", ""
      ) as void;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getGCPSTSDelegate
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async getGCPSTSDelegate(response: ResponseContext): Promise<GCPSTSDelegateAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GCPSTSDelegateAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GCPSTSDelegateAccountResponse"
      ) as GCPSTSDelegateAccountResponse;
      return body;
    }
    if (response.httpStatusCode === 403||response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: GCPSTSDelegateAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GCPSTSDelegateAccountResponse", ""
      ) as GCPSTSDelegateAccountResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listGCPSTSAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async listGCPSTSAccounts(response: ResponseContext): Promise<GCPSTSServiceAccountsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GCPSTSServiceAccountsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GCPSTSServiceAccountsResponse"
      ) as GCPSTSServiceAccountsResponse;
      return body;
    }
    if (response.httpStatusCode === 403||response.httpStatusCode === 404||response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: GCPSTSServiceAccountsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GCPSTSServiceAccountsResponse", ""
      ) as GCPSTSServiceAccountsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to makeGCPSTSDelegate
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async makeGCPSTSDelegate(response: ResponseContext): Promise<GCPSTSDelegateAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: GCPSTSDelegateAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GCPSTSDelegateAccountResponse"
      ) as GCPSTSDelegateAccountResponse;
      return body;
    }
    if (response.httpStatusCode === 403||response.httpStatusCode === 409||response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: GCPSTSDelegateAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GCPSTSDelegateAccountResponse", ""
      ) as GCPSTSDelegateAccountResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateGCPSTSAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async updateGCPSTSAccount(response: ResponseContext): Promise<GCPSTSServiceAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: GCPSTSServiceAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GCPSTSServiceAccountResponse"
      ) as GCPSTSServiceAccountResponse;
      return body;
    }
    if (response.httpStatusCode === 400||response.httpStatusCode === 403||response.httpStatusCode === 404||response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: GCPSTSServiceAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GCPSTSServiceAccountResponse", ""
      ) as GCPSTSServiceAccountResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }
}

export interface GCPIntegrationApiCreateGCPSTSAccountRequest {
  /**
   * @type GCPSTSServiceAccountCreateRequest
   */
  body: GCPSTSServiceAccountCreateRequest
}

export interface GCPIntegrationApiDeleteGCPSTSAccountRequest {
  /**
   * Your GCP STS enabled service account's unique ID.
   * @type string
   */
  accountId: string
}

export interface GCPIntegrationApiMakeGCPSTSDelegateRequest {
  /**
   * Create a delegate service account within Datadog.
   * @type any
   */
  body?: any
}

export interface GCPIntegrationApiUpdateGCPSTSAccountRequest {
  /**
   * Your GCP STS enabled service account's unique ID.
   * @type string
   */
  accountId: string
  /**
   * @type GCPSTSServiceAccountUpdateRequest
   */
  body: GCPSTSServiceAccountUpdateRequest
}

export class GCPIntegrationApi {
  private requestFactory: GCPIntegrationApiRequestFactory;
  private responseProcessor: GCPIntegrationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(configuration: Configuration, requestFactory?: GCPIntegrationApiRequestFactory, responseProcessor?: GCPIntegrationApiResponseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new GCPIntegrationApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new GCPIntegrationApiResponseProcessor();
  }

  /**
   * Create a new entry within Datadog for your STS enabled service account.
   * @param param The request object
   */
  public createGCPSTSAccount(param: GCPIntegrationApiCreateGCPSTSAccountRequest, options?: Configuration): Promise<GCPSTSServiceAccountResponse> {
    const requestContextPromise = this.requestFactory.createGCPSTSAccount(param.body,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.createGCPSTSAccount(responseContext);
        });
    });
  }

  /**
   * Delete an STS enabled GCP account from within Datadog.
   * @param param The request object
   */
  public deleteGCPSTSAccount(param: GCPIntegrationApiDeleteGCPSTSAccountRequest, options?: Configuration): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteGCPSTSAccount(param.accountId,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.deleteGCPSTSAccount(responseContext);
        });
    });
  }

  /**
   * List your Datadog-GCP STS delegate account configured in your Datadog account.
   * @param param The request object
   */
  public getGCPSTSDelegate( options?: Configuration): Promise<GCPSTSDelegateAccountResponse> {
    const requestContextPromise = this.requestFactory.getGCPSTSDelegate(options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.getGCPSTSDelegate(responseContext);
        });
    });
  }

  /**
   * List all GCP STS-enabled service accounts configured in your Datadog account.
   * @param param The request object
   */
  public listGCPSTSAccounts( options?: Configuration): Promise<GCPSTSServiceAccountsResponse> {
    const requestContextPromise = this.requestFactory.listGCPSTSAccounts(options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.listGCPSTSAccounts(responseContext);
        });
    });
  }

  /**
   * Create a Datadog GCP principal.
   * @param param The request object
   */
  public makeGCPSTSDelegate(param: GCPIntegrationApiMakeGCPSTSDelegateRequest = {}, options?: Configuration): Promise<GCPSTSDelegateAccountResponse> {
    const requestContextPromise = this.requestFactory.makeGCPSTSDelegate(param.body,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.makeGCPSTSDelegate(responseContext);
        });
    });
  }

  /**
   * Update an STS enabled service account.
   * @param param The request object
   */
  public updateGCPSTSAccount(param: GCPIntegrationApiUpdateGCPSTSAccountRequest, options?: Configuration): Promise<GCPSTSServiceAccountResponse> {
    const requestContextPromise = this.requestFactory.updateGCPSTSAccount(param.accountId,param.body,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.updateGCPSTSAccount(responseContext);
        });
    });
  }
}