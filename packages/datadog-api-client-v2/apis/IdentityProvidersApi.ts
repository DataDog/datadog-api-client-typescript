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
import { IdentityProviderResponse } from "../models/IdentityProviderResponse";
import { IdentityProvidersResponse } from "../models/IdentityProvidersResponse";
import { IdentityProviderUpdateRequest } from "../models/IdentityProviderUpdateRequest";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { QuerySortOrder } from "../models/QuerySortOrder";
import { User } from "../models/User";
import { UsersResponse } from "../models/UsersResponse";

export class IdentityProvidersApiRequestFactory extends BaseAPIRequestFactory {


  public async listIdentityProviders(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = '/api/v2/identity_providers';

    // Make Request Context
    const requestContext = _config.getServer('v2.IdentityProvidersApi.listIdentityProviders').makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
      applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }


  public async listIdentityProviderUsers(idpId: string,pageSize?: number,pageNumber?: number,sort?: string,sortDir?: QuerySortOrder,filter?: string,filterStatus?: string,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'idpId' is not null or undefined
    if (idpId === null || idpId === undefined) {
      throw new RequiredError('idpId', 'listIdentityProviderUsers');
    }

    // Path Params
    const localVarPath = '/api/v2/identity_providers/{idp_id}/users'
      .replace('{idp_id}', encodeURIComponent(String(idpId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.IdentityProvidersApi.listIdentityProviderUsers').makeRequestContext(localVarPath, HttpMethod.GET);
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
  if (sortDir !== undefined) {
      requestContext.setQueryParam("sort_dir", ObjectSerializer.serialize(sortDir, "QuerySortOrder", ""
), "");
    }
  if (filter !== undefined) {
      requestContext.setQueryParam("filter", ObjectSerializer.serialize(filter, "string", ""
), "");
    }
  if (filterStatus !== undefined) {
      requestContext.setQueryParam("filter[status]", ObjectSerializer.serialize(filterStatus, "string", ""
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


  public async updateIdentityProvider(idpId: string,body: IdentityProviderUpdateRequest,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'idpId' is not null or undefined
    if (idpId === null || idpId === undefined) {
      throw new RequiredError('idpId', 'updateIdentityProvider');
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError('body', 'updateIdentityProvider');
    }

    // Path Params
    const localVarPath = '/api/v2/identity_providers/{idp_id}'
      .replace('{idp_id}', encodeURIComponent(String(idpId)));

    // Make Request Context
    const requestContext = _config.getServer('v2.IdentityProvidersApi.updateIdentityProvider').makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IdentityProviderUpdateRequest", ""),
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

export class IdentityProvidersApiResponseProcessor {


  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listIdentityProviders
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async listIdentityProviders(response: ResponseContext): Promise<IdentityProvidersResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IdentityProvidersResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IdentityProvidersResponse"
      ) as IdentityProvidersResponse;
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
      const body: IdentityProvidersResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IdentityProvidersResponse",
        "",
      ) as IdentityProvidersResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }


  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listIdentityProviderUsers
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async listIdentityProviderUsers(response: ResponseContext): Promise<UsersResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: UsersResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsersResponse"
      ) as UsersResponse;
      return body;
    }
    if (response.httpStatusCode === 400||response.httpStatusCode === 403||response.httpStatusCode === 404) {
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
      const body: UsersResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UsersResponse",
        "",
      ) as UsersResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }


  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateIdentityProvider
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async updateIdentityProvider(response: ResponseContext): Promise<IdentityProviderResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: IdentityProviderResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IdentityProviderResponse"
      ) as IdentityProviderResponse;
      return body;
    }
    if (response.httpStatusCode === 400||response.httpStatusCode === 403||response.httpStatusCode === 404) {
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
      const body: IdentityProviderResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IdentityProviderResponse",
        "",
      ) as IdentityProviderResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }
}

export interface IdentityProvidersApiListIdentityProviderUsersRequest {
  /**
   * The ID of the identity provider.
   * @type string
   */
  idpId: string
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
   * User attribute to order results by. Options include `email` and `name`.
   * @type string
   */
  sort?: string
  /**
   * Direction of sort. Options: `asc`, `desc`.
   * @type QuerySortOrder
   */
  sortDir?: QuerySortOrder
  /**
   * Filter users by the given string. Defaults to no filtering.
   * @type string
   */
  filter?: string
  /**
   * Filter on status attribute.
   * Comma-separated list, with possible values `Active`, `Pending`, and `Disabled`.
   * Defaults to no filtering.
   * @type string
   */
  filterStatus?: string
}

export interface IdentityProvidersApiUpdateIdentityProviderRequest {
  /**
   * The ID of the identity provider.
   * @type string
   */
  idpId: string
  /**
   * @type IdentityProviderUpdateRequest
   */
  body: IdentityProviderUpdateRequest
}

export class IdentityProvidersApi {
  private requestFactory: IdentityProvidersApiRequestFactory;
  private responseProcessor: IdentityProvidersApiResponseProcessor;
  private configuration: Configuration;

  public constructor(configuration: Configuration, requestFactory?: IdentityProvidersApiRequestFactory, responseProcessor?: IdentityProvidersApiResponseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new IdentityProvidersApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new IdentityProvidersApiResponseProcessor();
  }

  /**
   * Get all identity providers available for the current organization.
   * @param param The request object
   */
  public listIdentityProviders( options?: Configuration): Promise<IdentityProvidersResponse> {
    const requestContextPromise = this.requestFactory.listIdentityProviders(options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.listIdentityProviders(responseContext);
        });
    });
  }

  /**
   * Get all users in the organization whose login method has been overridden
   * to use the specified identity provider.
   * @param param The request object
   */
  public listIdentityProviderUsers(param: IdentityProvidersApiListIdentityProviderUsersRequest, options?: Configuration): Promise<UsersResponse> {
    const requestContextPromise = this.requestFactory.listIdentityProviderUsers(param.idpId,param.pageSize,param.pageNumber,param.sort,param.sortDir,param.filter,param.filterStatus,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.listIdentityProviderUsers(responseContext);
        });
    });
  }

/**
   * Provide a paginated version of listIdentityProviderUsers returning a generator with all the items.
   */
  public async *listIdentityProviderUsersWithPagination(
    param: IdentityProvidersApiListIdentityProviderUsersRequest, options?: Configuration,
  ): AsyncGenerator<User> {

    let pageSize = 10;
    if (param.pageSize !== undefined) {
      pageSize = param.pageSize;
    }
    param.pageSize = pageSize;
    param.pageNumber = 0;
    while (true) {
      const requestContext = await this.requestFactory.listIdentityProviderUsers(param.idpId,param.pageSize,param.pageNumber,param.sort,param.sortDir,param.filter,param.filterStatus,options);
      const responseContext = await this.configuration.httpApi.send(requestContext);

      const response = await this.responseProcessor.listIdentityProviderUsers(responseContext);
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
   * Enable or disable an identity provider for the current organization.
   * @param param The request object
   */
  public updateIdentityProvider(param: IdentityProvidersApiUpdateIdentityProviderRequest, options?: Configuration): Promise<IdentityProviderResponse> {
    const requestContextPromise = this.requestFactory.updateIdentityProvider(param.idpId,param.body,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.updateIdentityProvider(responseContext);
        });
    });
  }
}