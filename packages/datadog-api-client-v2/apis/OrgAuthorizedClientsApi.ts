import { BaseAPIRequestFactory, RequiredError } from "../../datadog-api-client-common/baseapi";
import { Configuration,
  applySecurityAuthentication,} from "../../datadog-api-client-common/configuration";
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
import { OrgAuthorizedClientData } from "../models/OrgAuthorizedClientData";
import { OrgAuthorizedClientResponse } from "../models/OrgAuthorizedClientResponse";
import { OrgAuthorizedClientsResponse } from "../models/OrgAuthorizedClientsResponse";
import { OrgAuthorizedClientUpdateRequest } from "../models/OrgAuthorizedClientUpdateRequest";
import { OrgAuthorizedClientUserAuthorizationsSort } from "../models/OrgAuthorizedClientUserAuthorizationsSort";
import { UserAuthorizedClientData } from "../models/UserAuthorizedClientData";
import { UserAuthorizedClientsResponse } from "../models/UserAuthorizedClientsResponse";

export class OrgAuthorizedClientsApiRequestFactory extends BaseAPIRequestFactory {


  public async deleteOrgAuthorizedClient(orgAuthorizedClientId: string,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'orgAuthorizedClientId' is not null or undefined
    if (orgAuthorizedClientId === null || orgAuthorizedClientId === undefined) {
      throw new RequiredError('orgAuthorizedClientId', 'deleteOrgAuthorizedClient');
    }

    // Path Params
    const localVarPath = '/api/v2/org_authorized_clients/{org_authorized_client_id}'
      .replace('{org_authorized_client_id}', encodeURIComponent(String(orgAuthorizedClientId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.OrgAuthorizedClientsApi.deleteOrgAuthorizedClient').makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
      applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }


  public async deleteOrgAuthorizedClientAllUserAuthorizations(orgAuthorizedClientId: string,userId: string,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'orgAuthorizedClientId' is not null or undefined
    if (orgAuthorizedClientId === null || orgAuthorizedClientId === undefined) {
      throw new RequiredError('orgAuthorizedClientId', 'deleteOrgAuthorizedClientAllUserAuthorizations');
    }

    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
      throw new RequiredError('userId', 'deleteOrgAuthorizedClientAllUserAuthorizations');
    }

    // Path Params
    const localVarPath = '/api/v2/org_authorized_clients/{org_authorized_client_id}/user/{user_id}'
      .replace('{org_authorized_client_id}', encodeURIComponent(String(orgAuthorizedClientId)))
      .replace('{user_id}', encodeURIComponent(String(userId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.OrgAuthorizedClientsApi.deleteOrgAuthorizedClientAllUserAuthorizations').makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
      applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }


  public async deleteOrgAuthorizedClientUserAuthorization(orgAuthorizedClientId: string,userAuthorizedClientId: string,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'orgAuthorizedClientId' is not null or undefined
    if (orgAuthorizedClientId === null || orgAuthorizedClientId === undefined) {
      throw new RequiredError('orgAuthorizedClientId', 'deleteOrgAuthorizedClientUserAuthorization');
    }

    // verify required parameter 'userAuthorizedClientId' is not null or undefined
    if (userAuthorizedClientId === null || userAuthorizedClientId === undefined) {
      throw new RequiredError('userAuthorizedClientId', 'deleteOrgAuthorizedClientUserAuthorization');
    }

    // Path Params
    const localVarPath = '/api/v2/org_authorized_clients/{org_authorized_client_id}/user_authorized_clients/{user_authorized_client_id}'
      .replace('{org_authorized_client_id}', encodeURIComponent(String(orgAuthorizedClientId)))
      .replace('{user_authorized_client_id}', encodeURIComponent(String(userAuthorizedClientId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.OrgAuthorizedClientsApi.deleteOrgAuthorizedClientUserAuthorization').makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
      applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }


  public async getOrgAuthorizedClient(orgAuthorizedClientId: string,include?: string,filterUserAuthorizedClientsDisabled?: string,filterUserAuthorizedClientsUserDisabled?: string,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'orgAuthorizedClientId' is not null or undefined
    if (orgAuthorizedClientId === null || orgAuthorizedClientId === undefined) {
      throw new RequiredError('orgAuthorizedClientId', 'getOrgAuthorizedClient');
    }

    // Path Params
    const localVarPath = '/api/v2/org_authorized_clients/{org_authorized_client_id}'
      .replace('{org_authorized_client_id}', encodeURIComponent(String(orgAuthorizedClientId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.OrgAuthorizedClientsApi.getOrgAuthorizedClient').makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
  if (include !== undefined) {
      requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "string", ""
), "");
    }
  if (filterUserAuthorizedClientsDisabled !== undefined) {
      requestContext.setQueryParam("filter[user_authorized_clients][disabled]", ObjectSerializer.serialize(filterUserAuthorizedClientsDisabled, "string", ""
), "");
    }
  if (filterUserAuthorizedClientsUserDisabled !== undefined) {
      requestContext.setQueryParam("filter[user_authorized_clients][user][disabled]", ObjectSerializer.serialize(filterUserAuthorizedClientsUserDisabled, "string", ""
), "");
    }

    // Apply auth methods
      applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }


  public async listOrgAuthorizedClients(pageSize?: number,pageNumber?: number,sort?: string,filter?: string,filterOauth2ClientName?: string,filterDisabled?: string,include?: string,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = '/api/v2/org_authorized_clients';

    // Make Request Context
    const requestContext = _config.getServer('v2.OrgAuthorizedClientsApi.listOrgAuthorizedClients').makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
  if (pageSize !== undefined) {
      requestContext.setQueryParam("page[size]", ObjectSerializer.serialize(pageSize, "number", "int64"
), "");
    }
  if (pageNumber !== undefined) {
      requestContext.setQueryParam("page[number]", ObjectSerializer.serialize(pageNumber, "number", "int64"
), "");
    }
  if (sort !== undefined) {
      requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "string", ""
), "");
    }
  if (filter !== undefined) {
      requestContext.setQueryParam("filter", ObjectSerializer.serialize(filter, "string", ""
), "");
    }
  if (filterOauth2ClientName !== undefined) {
      requestContext.setQueryParam("filter[oauth2_client][name]", ObjectSerializer.serialize(filterOauth2ClientName, "string", ""
), "");
    }
  if (filterDisabled !== undefined) {
      requestContext.setQueryParam("filter[disabled]", ObjectSerializer.serialize(filterDisabled, "string", ""
), "");
    }
  if (include !== undefined) {
      requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "string", ""
), "");
    }

    // Apply auth methods
      applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }


  public async listOrgAuthorizedClientUserAuthorizations(orgAuthorizedClientId: string,pageSize?: number,pageNumber?: number,sort?: OrgAuthorizedClientUserAuthorizationsSort,filterDisabled?: string,filterUserName?: string,filterUserEmail?: string,filterUserDisabled?: string,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'orgAuthorizedClientId' is not null or undefined
    if (orgAuthorizedClientId === null || orgAuthorizedClientId === undefined) {
      throw new RequiredError('orgAuthorizedClientId', 'listOrgAuthorizedClientUserAuthorizations');
    }

    // Path Params
    const localVarPath = '/api/v2/org_authorized_clients/{org_authorized_client_id}/user_authorized_clients'
      .replace('{org_authorized_client_id}', encodeURIComponent(String(orgAuthorizedClientId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.OrgAuthorizedClientsApi.listOrgAuthorizedClientUserAuthorizations').makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
  if (pageSize !== undefined) {
      requestContext.setQueryParam("page[size]", ObjectSerializer.serialize(pageSize, "number", "int64"
), "");
    }
  if (pageNumber !== undefined) {
      requestContext.setQueryParam("page[number]", ObjectSerializer.serialize(pageNumber, "number", "int64"
), "");
    }
  if (sort !== undefined) {
      requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "OrgAuthorizedClientUserAuthorizationsSort", ""
), "");
    }
  if (filterDisabled !== undefined) {
      requestContext.setQueryParam("filter[disabled]", ObjectSerializer.serialize(filterDisabled, "string", ""
), "");
    }
  if (filterUserName !== undefined) {
      requestContext.setQueryParam("filter[user][name]", ObjectSerializer.serialize(filterUserName, "string", ""
), "");
    }
  if (filterUserEmail !== undefined) {
      requestContext.setQueryParam("filter[user][email]", ObjectSerializer.serialize(filterUserEmail, "string", ""
), "");
    }
  if (filterUserDisabled !== undefined) {
      requestContext.setQueryParam("filter[user][disabled]", ObjectSerializer.serialize(filterUserDisabled, "string", ""
), "");
    }

    // Apply auth methods
      applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }


  public async updateOrgAuthorizedClient(orgAuthorizedClientId: string,body: OrgAuthorizedClientUpdateRequest,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'orgAuthorizedClientId' is not null or undefined
    if (orgAuthorizedClientId === null || orgAuthorizedClientId === undefined) {
      throw new RequiredError('orgAuthorizedClientId', 'updateOrgAuthorizedClient');
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError('body', 'updateOrgAuthorizedClient');
    }

    // Path Params
    const localVarPath = '/api/v2/org_authorized_clients/{org_authorized_client_id}'
      .replace('{org_authorized_client_id}', encodeURIComponent(String(orgAuthorizedClientId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.OrgAuthorizedClientsApi.updateOrgAuthorizedClient').makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "OrgAuthorizedClientUpdateRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
      applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }
}

export class OrgAuthorizedClientsApiResponseProcessor {


  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteOrgAuthorizedClient
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async deleteOrgAuthorizedClient(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 403||response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<JSONAPIErrorResponse>(response.httpStatusCode, body);
    }
    if (response.httpStatusCode === 429) {
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
      return;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }


  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteOrgAuthorizedClientAllUserAuthorizations
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async deleteOrgAuthorizedClientAllUserAuthorizations(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 403||response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<JSONAPIErrorResponse>(response.httpStatusCode, body);
    }
    if (response.httpStatusCode === 429) {
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
      return;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }


  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteOrgAuthorizedClientUserAuthorization
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async deleteOrgAuthorizedClientUserAuthorization(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 403||response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<JSONAPIErrorResponse>(response.httpStatusCode, body);
    }
    if (response.httpStatusCode === 429) {
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
      return;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }


  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getOrgAuthorizedClient
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async getOrgAuthorizedClient(response: ResponseContext): Promise<OrgAuthorizedClientResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OrgAuthorizedClientResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OrgAuthorizedClientResponse"
      ) as OrgAuthorizedClientResponse;
      return body;
    }
    if (response.httpStatusCode === 403||response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<JSONAPIErrorResponse>(response.httpStatusCode, body);
    }
    if (response.httpStatusCode === 429) {
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
      const body: OrgAuthorizedClientResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OrgAuthorizedClientResponse",
        "",
      ) as OrgAuthorizedClientResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }


  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listOrgAuthorizedClients
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async listOrgAuthorizedClients(response: ResponseContext): Promise<OrgAuthorizedClientsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OrgAuthorizedClientsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OrgAuthorizedClientsResponse"
      ) as OrgAuthorizedClientsResponse;
      return body;
    }
    if (response.httpStatusCode === 403) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<JSONAPIErrorResponse>(response.httpStatusCode, body);
    }
    if (response.httpStatusCode === 429) {
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
      const body: OrgAuthorizedClientsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OrgAuthorizedClientsResponse",
        "",
      ) as OrgAuthorizedClientsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }


  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listOrgAuthorizedClientUserAuthorizations
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async listOrgAuthorizedClientUserAuthorizations(response: ResponseContext): Promise<UserAuthorizedClientsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: UserAuthorizedClientsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UserAuthorizedClientsResponse"
      ) as UserAuthorizedClientsResponse;
      return body;
    }
    if (response.httpStatusCode === 403||response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<JSONAPIErrorResponse>(response.httpStatusCode, body);
    }
    if (response.httpStatusCode === 429) {
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
      const body: UserAuthorizedClientsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UserAuthorizedClientsResponse",
        "",
      ) as UserAuthorizedClientsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }


  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateOrgAuthorizedClient
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async updateOrgAuthorizedClient(response: ResponseContext): Promise<OrgAuthorizedClientResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: OrgAuthorizedClientResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OrgAuthorizedClientResponse"
      ) as OrgAuthorizedClientResponse;
      return body;
    }
    if (response.httpStatusCode === 400||response.httpStatusCode === 403||response.httpStatusCode === 404||response.httpStatusCode === 422) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<JSONAPIErrorResponse>(response.httpStatusCode, body);
    }
    if (response.httpStatusCode === 429) {
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
      const body: OrgAuthorizedClientResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "OrgAuthorizedClientResponse",
        "",
      ) as OrgAuthorizedClientResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }
}

export interface OrgAuthorizedClientsApiDeleteOrgAuthorizedClientRequest {
  /**
   * The ID of the org authorized client.
   * @type string
   */
  orgAuthorizedClientId: string
}

export interface OrgAuthorizedClientsApiDeleteOrgAuthorizedClientAllUserAuthorizationsRequest {
  /**
   * The ID of the org authorized client.
   * @type string
   */
  orgAuthorizedClientId: string
  /**
   * The ID of the user.
   * @type string
   */
  userId: string
}

export interface OrgAuthorizedClientsApiDeleteOrgAuthorizedClientUserAuthorizationRequest {
  /**
   * The ID of the org authorized client.
   * @type string
   */
  orgAuthorizedClientId: string
  /**
   * The ID of the user authorized client.
   * @type string
   */
  userAuthorizedClientId: string
}

export interface OrgAuthorizedClientsApiGetOrgAuthorizedClientRequest {
  /**
   * The ID of the org authorized client.
   * @type string
   */
  orgAuthorizedClientId: string
  /**
   * Comma-separated list of related resources to include.
   * Options: `oauth2_client`, `oauth2_client.app`, `oauth2_client.scopes`, `user_authorized_clients.user`.
   * @type string
   */
  include?: string
  /**
   * Filter included user authorized clients by disabled status.
   * @type string
   */
  filterUserAuthorizedClientsDisabled?: string
  /**
   * Filter included user authorized clients by user disabled status.
   * @type string
   */
  filterUserAuthorizedClientsUserDisabled?: string
}

export interface OrgAuthorizedClientsApiListOrgAuthorizedClientsRequest {
  /**
   * Size for a given page. The maximum allowed value is 100.
   * @type number
   */
  pageSize?: number
  /**
   * Specific page number to return.
   * @type number
   */
  pageNumber?: number
  /**
   * Field to sort results by. Options include `oauth2_client.name`.
   * @type string
   */
  sort?: string
  /**
   * Filter results by client name, app title, or app description.
   * @type string
   */
  filter?: string
  /**
   * Filter results by the OAuth2 client name.
   * @type string
   */
  filterOauth2ClientName?: string
  /**
   * Filter results by the org-level disabled status.
   * @type string
   */
  filterDisabled?: string
  /**
   * Comma-separated list of related resources to include.
   * Options: `oauth2_client`, `oauth2_client.app`, `user_authorized_clients.user`.
   * @type string
   */
  include?: string
}

export interface OrgAuthorizedClientsApiListOrgAuthorizedClientUserAuthorizationsRequest {
  /**
   * The ID of the org authorized client.
   * @type string
   */
  orgAuthorizedClientId: string
  /**
   * Size for a given page. The maximum allowed value is 100.
   * @type number
   */
  pageSize?: number
  /**
   * Specific page number to return.
   * @type number
   */
  pageNumber?: number
  /**
   * Field to sort results by. Options: `user.name`, `user.email`, `oauth2_client.name`.
   * @type OrgAuthorizedClientUserAuthorizationsSort
   */
  sort?: OrgAuthorizedClientUserAuthorizationsSort
  /**
   * Filter results by the user authorization disabled status.
   * @type string
   */
  filterDisabled?: string
  /**
   * Filter results by user name.
   * @type string
   */
  filterUserName?: string
  /**
   * Filter results by user email.
   * @type string
   */
  filterUserEmail?: string
  /**
   * Filter results by whether the user is disabled.
   * @type string
   */
  filterUserDisabled?: string
}

export interface OrgAuthorizedClientsApiUpdateOrgAuthorizedClientRequest {
  /**
   * The ID of the org authorized client.
   * @type string
   */
  orgAuthorizedClientId: string
  /**
   * @type OrgAuthorizedClientUpdateRequest
   */
  body: OrgAuthorizedClientUpdateRequest
}

export class OrgAuthorizedClientsApi {
  private requestFactory: OrgAuthorizedClientsApiRequestFactory;
  private responseProcessor: OrgAuthorizedClientsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(configuration: Configuration, requestFactory?: OrgAuthorizedClientsApiRequestFactory, responseProcessor?: OrgAuthorizedClientsApiResponseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new OrgAuthorizedClientsApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new OrgAuthorizedClientsApiResponseProcessor();
  }

  /**
   * Disable an OAuth2 client authorization for the current organization, revoking access for all users.
   * @param param The request object
   */
  public deleteOrgAuthorizedClient(param: OrgAuthorizedClientsApiDeleteOrgAuthorizedClientRequest, options?: Configuration): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteOrgAuthorizedClient(param.orgAuthorizedClientId,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.deleteOrgAuthorizedClient(responseContext);
        });
    });
  }

  /**
   * Disable all authorizations for a specific user for the specified OAuth2 client in the current organization.
   * @param param The request object
   */
  public deleteOrgAuthorizedClientAllUserAuthorizations(param: OrgAuthorizedClientsApiDeleteOrgAuthorizedClientAllUserAuthorizationsRequest, options?: Configuration): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteOrgAuthorizedClientAllUserAuthorizations(param.orgAuthorizedClientId,param.userId,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.deleteOrgAuthorizedClientAllUserAuthorizations(responseContext);
        });
    });
  }

  /**
   * Disable a specific user authorization for the specified OAuth2 client in the current organization.
   * @param param The request object
   */
  public deleteOrgAuthorizedClientUserAuthorization(param: OrgAuthorizedClientsApiDeleteOrgAuthorizedClientUserAuthorizationRequest, options?: Configuration): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteOrgAuthorizedClientUserAuthorization(param.orgAuthorizedClientId,param.userAuthorizedClientId,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.deleteOrgAuthorizedClientUserAuthorization(responseContext);
        });
    });
  }

  /**
   * Get a single OAuth2 client authorized for the current organization.
   * @param param The request object
   */
  public getOrgAuthorizedClient(param: OrgAuthorizedClientsApiGetOrgAuthorizedClientRequest, options?: Configuration): Promise<OrgAuthorizedClientResponse> {
    const requestContextPromise = this.requestFactory.getOrgAuthorizedClient(param.orgAuthorizedClientId,param.include,param.filterUserAuthorizedClientsDisabled,param.filterUserAuthorizedClientsUserDisabled,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.getOrgAuthorizedClient(responseContext);
        });
    });
  }

  /**
   * Get a list of all OAuth2 clients authorized for the current organization.
   * @param param The request object
   */
  public listOrgAuthorizedClients(param: OrgAuthorizedClientsApiListOrgAuthorizedClientsRequest = {}, options?: Configuration): Promise<OrgAuthorizedClientsResponse> {
    const requestContextPromise = this.requestFactory.listOrgAuthorizedClients(param.pageSize,param.pageNumber,param.sort,param.filter,param.filterOauth2ClientName,param.filterDisabled,param.include,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.listOrgAuthorizedClients(responseContext);
        });
    });
  }

/**
   * Provide a paginated version of listOrgAuthorizedClients returning a generator with all the items.
   */
  public async *listOrgAuthorizedClientsWithPagination(
    param: OrgAuthorizedClientsApiListOrgAuthorizedClientsRequest = {}, options?: Configuration,
  ): AsyncGenerator<OrgAuthorizedClientData> {

    let pageSize = 10;
    if (param.pageSize !== undefined) {
      pageSize = param.pageSize;
    }
    param.pageSize = pageSize;
    param.pageNumber = 0;
    while (true) {
      const requestContext = await this.requestFactory.listOrgAuthorizedClients(param.pageSize,param.pageNumber,param.sort,param.filter,param.filterOauth2ClientName,param.filterDisabled,param.include,options);
      const responseContext = await this.configuration.httpApi.send(requestContext);

      const response = await this.responseProcessor.listOrgAuthorizedClients(responseContext);
      const responseData = response.data;
      if (responseData === undefined) {
        break;
      }
      const results = responseData;
      for (const item of results) {
        yield item;
      }
      if (results.length < pageSize) {
        break;
      }
      param.pageNumber = param.pageNumber + 1;
    }
  }

  /**
   * Get a list of user authorizations for the specified OAuth2 client in the current organization.
   * @param param The request object
   */
  public listOrgAuthorizedClientUserAuthorizations(param: OrgAuthorizedClientsApiListOrgAuthorizedClientUserAuthorizationsRequest, options?: Configuration): Promise<UserAuthorizedClientsResponse> {
    const requestContextPromise = this.requestFactory.listOrgAuthorizedClientUserAuthorizations(param.orgAuthorizedClientId,param.pageSize,param.pageNumber,param.sort,param.filterDisabled,param.filterUserName,param.filterUserEmail,param.filterUserDisabled,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.listOrgAuthorizedClientUserAuthorizations(responseContext);
        });
    });
  }

/**
   * Provide a paginated version of listOrgAuthorizedClientUserAuthorizations returning a generator with all the items.
   */
  public async *listOrgAuthorizedClientUserAuthorizationsWithPagination(
    param: OrgAuthorizedClientsApiListOrgAuthorizedClientUserAuthorizationsRequest, options?: Configuration,
  ): AsyncGenerator<UserAuthorizedClientData> {

    let pageSize = 10;
    if (param.pageSize !== undefined) {
      pageSize = param.pageSize;
    }
    param.pageSize = pageSize;
    param.pageNumber = 0;
    while (true) {
      const requestContext = await this.requestFactory.listOrgAuthorizedClientUserAuthorizations(param.orgAuthorizedClientId,param.pageSize,param.pageNumber,param.sort,param.filterDisabled,param.filterUserName,param.filterUserEmail,param.filterUserDisabled,options);
      const responseContext = await this.configuration.httpApi.send(requestContext);

      const response = await this.responseProcessor.listOrgAuthorizedClientUserAuthorizations(responseContext);
      const responseData = response.data;
      if (responseData === undefined) {
        break;
      }
      const results = responseData;
      for (const item of results) {
        yield item;
      }
      if (results.length < pageSize) {
        break;
      }
      param.pageNumber = param.pageNumber + 1;
    }
  }

  /**
   * Enable or disable an OAuth2 client authorization for the current organization.
   * @param param The request object
   */
  public updateOrgAuthorizedClient(param: OrgAuthorizedClientsApiUpdateOrgAuthorizedClientRequest, options?: Configuration): Promise<OrgAuthorizedClientResponse> {
    const requestContextPromise = this.requestFactory.updateOrgAuthorizedClient(param.orgAuthorizedClientId,param.body,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.updateOrgAuthorizedClient(responseContext);
        });
    });
  }
}