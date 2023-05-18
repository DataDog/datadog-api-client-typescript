import {
  BaseAPIRequestFactory,
  RequiredError,
} from "../../datadog-api-client-common/baseapi";
import {
  Configuration,
  getServer,
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

import { AccountCreationResponse } from "../models/AccountCreationResponse";
import { AccountPatchBody } from "../models/AccountPatchBody";
import { APIErrorResponse } from "../models/APIErrorResponse";
import { DelegateCreationResponse } from "../models/DelegateCreationResponse";
import { ServiceAccountToBeCreatedData } from "../models/ServiceAccountToBeCreatedData";
import { STSEnabledAccountData } from "../models/STSEnabledAccountData";

export class GCPIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public async createGCPSTSAccountsV2(
    body: ServiceAccountToBeCreatedData,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createGCPSTSAccountsV2");
    }

    // Path Params
    const localVarPath = "/api/v2/integration/gcp/accounts";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.GCPIntegrationApi.createGCPSTSAccountsV2"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "ServiceAccountToBeCreatedData", ""),
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

  public async deleteGCPSTSAccountsV2(
    accountId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "deleteGCPSTSAccountsV2");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/gcp/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId))
      );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.GCPIntegrationApi.deleteGCPSTSAccountsV2"
    ).makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getDelegateV2(
    body?: any,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/integration/gcp/sts_delegate";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.GCPIntegrationApi.getDelegateV2"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
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

  public async listGCPSTSAccountsV2(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/integration/gcp/accounts";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.GCPIntegrationApi.listGCPSTSAccountsV2"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async makeDelegateV2(
    body?: any,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/integration/gcp/sts_delegate";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.GCPIntegrationApi.makeDelegateV2"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
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

  public async updateGCPSTSAccountsV2(
    accountId: string,
    body: AccountPatchBody,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "updateGCPSTSAccountsV2");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateGCPSTSAccountsV2");
    }

    // Path Params
    const localVarPath =
      "/api/v2/integration/gcp/accounts/{account_id}".replace(
        "{account_id}",
        encodeURIComponent(String(accountId))
      );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.GCPIntegrationApi.updateGCPSTSAccountsV2"
    ).makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "AccountPatchBody", ""),
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
   * @params response Response returned by the server for a request to createGCPSTSAccountsV2
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createGCPSTSAccountsV2(
    response: ResponseContext
  ): Promise<AccountCreationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 201) {
      const body: AccountCreationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AccountCreationResponse"
      ) as AccountCreationResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
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
      const body: AccountCreationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AccountCreationResponse",
        ""
      ) as AccountCreationResponse;
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
   * @params response Response returned by the server for a request to deleteGCPSTSAccountsV2
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteGCPSTSAccountsV2(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 204) {
      return;
    }
    if (response.httpStatusCode == 400 || response.httpStatusCode == 429) {
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
   * @params response Response returned by the server for a request to getDelegateV2
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getDelegateV2(
    response: ResponseContext
  ): Promise<DelegateCreationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: DelegateCreationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DelegateCreationResponse"
      ) as DelegateCreationResponse;
      return body;
    }
    if (response.httpStatusCode == 429 || response.httpStatusCode == 500) {
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
      const body: DelegateCreationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DelegateCreationResponse",
        ""
      ) as DelegateCreationResponse;
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
   * @params response Response returned by the server for a request to listGCPSTSAccountsV2
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listGCPSTSAccountsV2(
    response: ResponseContext
  ): Promise<STSEnabledAccountData> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: STSEnabledAccountData = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "STSEnabledAccountData"
      ) as STSEnabledAccountData;
      return body;
    }
    if (response.httpStatusCode == 404 || response.httpStatusCode == 429) {
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
      const body: STSEnabledAccountData = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "STSEnabledAccountData",
        ""
      ) as STSEnabledAccountData;
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
   * @params response Response returned by the server for a request to makeDelegateV2
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async makeDelegateV2(
    response: ResponseContext
  ): Promise<DelegateCreationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: DelegateCreationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DelegateCreationResponse"
      ) as DelegateCreationResponse;
      return body;
    }
    if (response.httpStatusCode == 409 || response.httpStatusCode == 429) {
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
      const body: DelegateCreationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DelegateCreationResponse",
        ""
      ) as DelegateCreationResponse;
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
   * @params response Response returned by the server for a request to updateGCPSTSAccountsV2
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateGCPSTSAccountsV2(
    response: ResponseContext
  ): Promise<AccountPatchBody> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 201) {
      const body: AccountPatchBody = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AccountPatchBody"
      ) as AccountPatchBody;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
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
      const body: AccountPatchBody = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AccountPatchBody",
        ""
      ) as AccountPatchBody;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface GCPIntegrationApiCreateGCPSTSAccountsV2Request {
  /**
   * @type ServiceAccountToBeCreatedData
   */
  body: ServiceAccountToBeCreatedData;
}

export interface GCPIntegrationApiDeleteGCPSTSAccountsV2Request {
  /**
   * Your GCP STS enabled service account's unique ID.
   * @type string
   */
  accountId: string;
}

export interface GCPIntegrationApiGetDelegateV2Request {
  /**
   * Get a Datadog GCP STS delegate account.
   * @type any
   */
  body?: any;
}

export interface GCPIntegrationApiMakeDelegateV2Request {
  /**
   * Create a delegate service account within Datadog.
   * @type any
   */
  body?: any;
}

export interface GCPIntegrationApiUpdateGCPSTSAccountsV2Request {
  /**
   * Your GCP STS enabled service account's unique ID.
   * @type string
   */
  accountId: string;
  /**
   * @type AccountPatchBody
   */
  body: AccountPatchBody;
}

export class GCPIntegrationApi {
  private requestFactory: GCPIntegrationApiRequestFactory;
  private responseProcessor: GCPIntegrationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: GCPIntegrationApiRequestFactory,
    responseProcessor?: GCPIntegrationApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new GCPIntegrationApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new GCPIntegrationApiResponseProcessor();
  }

  /**
   * Create a new entry within Datadog for your STS enabled service account.
   * @param param The request object
   */
  public createGCPSTSAccountsV2(
    param: GCPIntegrationApiCreateGCPSTSAccountsV2Request,
    options?: Configuration
  ): Promise<AccountCreationResponse> {
    const requestContextPromise = this.requestFactory.createGCPSTSAccountsV2(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createGCPSTSAccountsV2(responseContext);
        });
    });
  }

  /**
   * Delete an STS enabled GCP account from within Datadog.
   * @param param The request object
   */
  public deleteGCPSTSAccountsV2(
    param: GCPIntegrationApiDeleteGCPSTSAccountsV2Request,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteGCPSTSAccountsV2(
      param.accountId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteGCPSTSAccountsV2(responseContext);
        });
    });
  }

  /**
   * List your Datadog-GCP STS delegate account configured in your Datadog account.
   * @param param The request object
   */
  public getDelegateV2(
    param: GCPIntegrationApiGetDelegateV2Request = {},
    options?: Configuration
  ): Promise<DelegateCreationResponse> {
    const requestContextPromise = this.requestFactory.getDelegateV2(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getDelegateV2(responseContext);
        });
    });
  }

  /**
   * List all GCP STS-enabled service accounts configured in your Datadog account.
   * @param param The request object
   */
  public listGCPSTSAccountsV2(
    options?: Configuration
  ): Promise<STSEnabledAccountData> {
    const requestContextPromise =
      this.requestFactory.listGCPSTSAccountsV2(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listGCPSTSAccountsV2(responseContext);
        });
    });
  }

  /**
   * Create a Datadog GCP principal.
   * @param param The request object
   */
  public makeDelegateV2(
    param: GCPIntegrationApiMakeDelegateV2Request = {},
    options?: Configuration
  ): Promise<DelegateCreationResponse> {
    const requestContextPromise = this.requestFactory.makeDelegateV2(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.makeDelegateV2(responseContext);
        });
    });
  }

  /**
   * Update an STS enabled service account.
   * @param param The request object
   */
  public updateGCPSTSAccountsV2(
    param: GCPIntegrationApiUpdateGCPSTSAccountsV2Request,
    options?: Configuration
  ): Promise<AccountPatchBody> {
    const requestContextPromise = this.requestFactory.updateGCPSTSAccountsV2(
      param.accountId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateGCPSTSAccountsV2(responseContext);
        });
    });
  }
}
