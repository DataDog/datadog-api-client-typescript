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
import { FastlyAccountCreateRequest } from "../models/FastlyAccountCreateRequest";
import { FastlyAccountResponse } from "../models/FastlyAccountResponse";
import { FastlyAccountsResponse } from "../models/FastlyAccountsResponse";
import { FastlyAccountUpdateRequest } from "../models/FastlyAccountUpdateRequest";
import { FastlyServiceRequest } from "../models/FastlyServiceRequest";
import { FastlyServiceResponse } from "../models/FastlyServiceResponse";
import { FastlyServicesResponse } from "../models/FastlyServicesResponse";

export class FastlyIntegrationApiRequestFactory extends BaseAPIRequestFactory {

  public async createFastlyAccount(body: FastlyAccountCreateRequest,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError('body', 'createFastlyAccount');
    }

    // Path Params
    const localVarPath = '/api/v2/integrations/fastly/accounts';

    // Make Request Context
    const requestContext = _config.getServer('v2.FastlyIntegrationApi.createFastlyAccount').makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "FastlyAccountCreateRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }

  public async createFastlyService(accountId: string,body: FastlyServiceRequest,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError('accountId', 'createFastlyService');
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError('body', 'createFastlyService');
    }

    // Path Params
    const localVarPath = '/api/v2/integrations/fastly/accounts/{account_id}/services'
      .replace('{account_id}', encodeURIComponent(String(accountId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.FastlyIntegrationApi.createFastlyService').makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "FastlyServiceRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }

  public async deleteFastlyAccount(accountId: string,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError('accountId', 'deleteFastlyAccount');
    }

    // Path Params
    const localVarPath = '/api/v2/integrations/fastly/accounts/{account_id}'
      .replace('{account_id}', encodeURIComponent(String(accountId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.FastlyIntegrationApi.deleteFastlyAccount').makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }

  public async deleteFastlyService(accountId: string,serviceId: string,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError('accountId', 'deleteFastlyService');
    }

    // verify required parameter 'serviceId' is not null or undefined
    if (serviceId === null || serviceId === undefined) {
      throw new RequiredError('serviceId', 'deleteFastlyService');
    }

    // Path Params
    const localVarPath = '/api/v2/integrations/fastly/accounts/{account_id}/services/{service_id}'
      .replace('{account_id}', encodeURIComponent(String(accountId)))
      .replace('{service_id}', encodeURIComponent(String(serviceId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.FastlyIntegrationApi.deleteFastlyService').makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }

  public async getFastlyAccount(accountId: string,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError('accountId', 'getFastlyAccount');
    }

    // Path Params
    const localVarPath = '/api/v2/integrations/fastly/accounts/{account_id}'
      .replace('{account_id}', encodeURIComponent(String(accountId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.FastlyIntegrationApi.getFastlyAccount').makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }

  public async getFastlyService(accountId: string,serviceId: string,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError('accountId', 'getFastlyService');
    }

    // verify required parameter 'serviceId' is not null or undefined
    if (serviceId === null || serviceId === undefined) {
      throw new RequiredError('serviceId', 'getFastlyService');
    }

    // Path Params
    const localVarPath = '/api/v2/integrations/fastly/accounts/{account_id}/services/{service_id}'
      .replace('{account_id}', encodeURIComponent(String(accountId)))
      .replace('{service_id}', encodeURIComponent(String(serviceId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.FastlyIntegrationApi.getFastlyService').makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }

  public async listFastlyAccounts(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = '/api/v2/integrations/fastly/accounts';

    // Make Request Context
    const requestContext = _config.getServer('v2.FastlyIntegrationApi.listFastlyAccounts').makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }

  public async listFastlyServices(accountId: string,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError('accountId', 'listFastlyServices');
    }

    // Path Params
    const localVarPath = '/api/v2/integrations/fastly/accounts/{account_id}/services'
      .replace('{account_id}', encodeURIComponent(String(accountId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.FastlyIntegrationApi.listFastlyServices').makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }

  public async updateFastlyAccount(accountId: string,body: FastlyAccountUpdateRequest,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError('accountId', 'updateFastlyAccount');
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError('body', 'updateFastlyAccount');
    }

    // Path Params
    const localVarPath = '/api/v2/integrations/fastly/accounts/{account_id}'
      .replace('{account_id}', encodeURIComponent(String(accountId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.FastlyIntegrationApi.updateFastlyAccount').makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "FastlyAccountUpdateRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }

  public async updateFastlyService(accountId: string,serviceId: string,body: FastlyServiceRequest,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError('accountId', 'updateFastlyService');
    }

    // verify required parameter 'serviceId' is not null or undefined
    if (serviceId === null || serviceId === undefined) {
      throw new RequiredError('serviceId', 'updateFastlyService');
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError('body', 'updateFastlyService');
    }

    // Path Params
    const localVarPath = '/api/v2/integrations/fastly/accounts/{account_id}/services/{service_id}'
      .replace('{account_id}', encodeURIComponent(String(accountId)))
      .replace('{service_id}', encodeURIComponent(String(serviceId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.FastlyIntegrationApi.updateFastlyService').makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "FastlyServiceRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth", "appKeyAuth"]);

    return requestContext;
  }
}

export class FastlyIntegrationApiResponseProcessor {

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createFastlyAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async createFastlyAccount(response: ResponseContext): Promise<FastlyAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: FastlyAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FastlyAccountResponse"
      ) as FastlyAccountResponse;
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
      const body: FastlyAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FastlyAccountResponse", ""
      ) as FastlyAccountResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createFastlyService
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async createFastlyService(response: ResponseContext): Promise<FastlyServiceResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: FastlyServiceResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FastlyServiceResponse"
      ) as FastlyServiceResponse;
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
      const body: FastlyServiceResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FastlyServiceResponse", ""
      ) as FastlyServiceResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteFastlyAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async deleteFastlyAccount(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
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
   * @params response Response returned by the server for a request to deleteFastlyService
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async deleteFastlyService(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
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
   * @params response Response returned by the server for a request to getFastlyAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async getFastlyAccount(response: ResponseContext): Promise<FastlyAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: FastlyAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FastlyAccountResponse"
      ) as FastlyAccountResponse;
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
      const body: FastlyAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FastlyAccountResponse", ""
      ) as FastlyAccountResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getFastlyService
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async getFastlyService(response: ResponseContext): Promise<FastlyServiceResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: FastlyServiceResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FastlyServiceResponse"
      ) as FastlyServiceResponse;
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
      const body: FastlyServiceResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FastlyServiceResponse", ""
      ) as FastlyServiceResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listFastlyAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async listFastlyAccounts(response: ResponseContext): Promise<FastlyAccountsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: FastlyAccountsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FastlyAccountsResponse"
      ) as FastlyAccountsResponse;
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
      const body: FastlyAccountsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FastlyAccountsResponse", ""
      ) as FastlyAccountsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listFastlyServices
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async listFastlyServices(response: ResponseContext): Promise<FastlyServicesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: FastlyServicesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FastlyServicesResponse"
      ) as FastlyServicesResponse;
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
      const body: FastlyServicesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FastlyServicesResponse", ""
      ) as FastlyServicesResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateFastlyAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async updateFastlyAccount(response: ResponseContext): Promise<FastlyAccountResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: FastlyAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FastlyAccountResponse"
      ) as FastlyAccountResponse;
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
      const body: FastlyAccountResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FastlyAccountResponse", ""
      ) as FastlyAccountResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateFastlyService
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async updateFastlyService(response: ResponseContext): Promise<FastlyServiceResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: FastlyServiceResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FastlyServiceResponse"
      ) as FastlyServiceResponse;
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
      const body: FastlyServiceResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FastlyServiceResponse", ""
      ) as FastlyServiceResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }
}

export interface FastlyIntegrationApiCreateFastlyAccountRequest {
  /**
   * @type FastlyAccountCreateRequest
   */
  body: FastlyAccountCreateRequest
}

export interface FastlyIntegrationApiCreateFastlyServiceRequest {
  /**
   * Fastly Account id.
   * @type string
   */
  accountId: string
  /**
   * @type FastlyServiceRequest
   */
  body: FastlyServiceRequest
}

export interface FastlyIntegrationApiDeleteFastlyAccountRequest {
  /**
   * Fastly Account id.
   * @type string
   */
  accountId: string
}

export interface FastlyIntegrationApiDeleteFastlyServiceRequest {
  /**
   * Fastly Account id.
   * @type string
   */
  accountId: string
  /**
   * Fastly Service ID.
   * @type string
   */
  serviceId: string
}

export interface FastlyIntegrationApiGetFastlyAccountRequest {
  /**
   * Fastly Account id.
   * @type string
   */
  accountId: string
}

export interface FastlyIntegrationApiGetFastlyServiceRequest {
  /**
   * Fastly Account id.
   * @type string
   */
  accountId: string
  /**
   * Fastly Service ID.
   * @type string
   */
  serviceId: string
}

export interface FastlyIntegrationApiListFastlyServicesRequest {
  /**
   * Fastly Account id.
   * @type string
   */
  accountId: string
}

export interface FastlyIntegrationApiUpdateFastlyAccountRequest {
  /**
   * Fastly Account id.
   * @type string
   */
  accountId: string
  /**
   * @type FastlyAccountUpdateRequest
   */
  body: FastlyAccountUpdateRequest
}

export interface FastlyIntegrationApiUpdateFastlyServiceRequest {
  /**
   * Fastly Account id.
   * @type string
   */
  accountId: string
  /**
   * Fastly Service ID.
   * @type string
   */
  serviceId: string
  /**
   * @type FastlyServiceRequest
   */
  body: FastlyServiceRequest
}

export class FastlyIntegrationApi {
  private requestFactory: FastlyIntegrationApiRequestFactory;
  private responseProcessor: FastlyIntegrationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(configuration: Configuration, requestFactory?: FastlyIntegrationApiRequestFactory, responseProcessor?: FastlyIntegrationApiResponseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new FastlyIntegrationApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new FastlyIntegrationApiResponseProcessor();
  }

  /**
   * Create a Fastly account.
   * @param param The request object
   */
  public createFastlyAccount(param: FastlyIntegrationApiCreateFastlyAccountRequest, options?: Configuration): Promise<FastlyAccountResponse> {
    const requestContextPromise = this.requestFactory.createFastlyAccount(param.body,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.createFastlyAccount(responseContext);
        });
    });
  }

  /**
   * Create a Fastly service for an account.
   * @param param The request object
   */
  public createFastlyService(param: FastlyIntegrationApiCreateFastlyServiceRequest, options?: Configuration): Promise<FastlyServiceResponse> {
    const requestContextPromise = this.requestFactory.createFastlyService(param.accountId,param.body,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.createFastlyService(responseContext);
        });
    });
  }

  /**
   * Delete a Fastly account.
   * @param param The request object
   */
  public deleteFastlyAccount(param: FastlyIntegrationApiDeleteFastlyAccountRequest, options?: Configuration): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteFastlyAccount(param.accountId,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.deleteFastlyAccount(responseContext);
        });
    });
  }

  /**
   * Delete a Fastly service for an account.
   * @param param The request object
   */
  public deleteFastlyService(param: FastlyIntegrationApiDeleteFastlyServiceRequest, options?: Configuration): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteFastlyService(param.accountId,param.serviceId,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.deleteFastlyService(responseContext);
        });
    });
  }

  /**
   * Get a Fastly account.
   * @param param The request object
   */
  public getFastlyAccount(param: FastlyIntegrationApiGetFastlyAccountRequest, options?: Configuration): Promise<FastlyAccountResponse> {
    const requestContextPromise = this.requestFactory.getFastlyAccount(param.accountId,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.getFastlyAccount(responseContext);
        });
    });
  }

  /**
   * Get a Fastly service for an account.
   * @param param The request object
   */
  public getFastlyService(param: FastlyIntegrationApiGetFastlyServiceRequest, options?: Configuration): Promise<FastlyServiceResponse> {
    const requestContextPromise = this.requestFactory.getFastlyService(param.accountId,param.serviceId,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.getFastlyService(responseContext);
        });
    });
  }

  /**
   * List Fastly accounts.
   * @param param The request object
   */
  public listFastlyAccounts( options?: Configuration): Promise<FastlyAccountsResponse> {
    const requestContextPromise = this.requestFactory.listFastlyAccounts(options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.listFastlyAccounts(responseContext);
        });
    });
  }

  /**
   * List Fastly services for an account.
   * @param param The request object
   */
  public listFastlyServices(param: FastlyIntegrationApiListFastlyServicesRequest, options?: Configuration): Promise<FastlyServicesResponse> {
    const requestContextPromise = this.requestFactory.listFastlyServices(param.accountId,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.listFastlyServices(responseContext);
        });
    });
  }

  /**
   * Update a Fastly account.
   * @param param The request object
   */
  public updateFastlyAccount(param: FastlyIntegrationApiUpdateFastlyAccountRequest, options?: Configuration): Promise<FastlyAccountResponse> {
    const requestContextPromise = this.requestFactory.updateFastlyAccount(param.accountId,param.body,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.updateFastlyAccount(responseContext);
        });
    });
  }

  /**
   * Update a Fastly service for an account.
   * @param param The request object
   */
  public updateFastlyService(param: FastlyIntegrationApiUpdateFastlyServiceRequest, options?: Configuration): Promise<FastlyServiceResponse> {
    const requestContextPromise = this.requestFactory.updateFastlyService(param.accountId,param.serviceId,param.body,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.updateFastlyService(responseContext);
        });
    });
  }
}