import {
  ApiException,
  BaseAPIRequestFactory,
  BaseServerConfiguration,
  buildUserAgent,
  Configuration,
  createConfiguration,
  deserialize,
  getPreferredMediaType,
  HttpMethod,
  isBrowser,
  logger,
  normalizeMediaType,
  parse,
  RequiredError,
  RequestContext,
  ResponseContext,
  serialize,
  ServerConfiguration,
  stringify,
  applySecurityAuthentication,
} from "@datadog/datadog-api-client";

import { TypingInfo } from "./models/TypingInfo";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { BulkDeleteAppsDatastoreItemsRequest } from "./models/BulkDeleteAppsDatastoreItemsRequest";
import { BulkPutAppsDatastoreItemsRequest } from "./models/BulkPutAppsDatastoreItemsRequest";
import { CreateAppsDatastoreRequest } from "./models/CreateAppsDatastoreRequest";
import { CreateAppsDatastoreResponse } from "./models/CreateAppsDatastoreResponse";
import { Datastore } from "./models/Datastore";
import { DatastoreArray } from "./models/DatastoreArray";
import { DeleteAppsDatastoreItemRequest } from "./models/DeleteAppsDatastoreItemRequest";
import { DeleteAppsDatastoreItemResponse } from "./models/DeleteAppsDatastoreItemResponse";
import { DeleteAppsDatastoreItemResponseArray } from "./models/DeleteAppsDatastoreItemResponseArray";
import { ItemApiPayload } from "./models/ItemApiPayload";
import { ItemApiPayloadArray } from "./models/ItemApiPayloadArray";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { PutAppsDatastoreItemResponseArray } from "./models/PutAppsDatastoreItemResponseArray";
import { UpdateAppsDatastoreItemRequest } from "./models/UpdateAppsDatastoreItemRequest";
import { UpdateAppsDatastoreRequest } from "./models/UpdateAppsDatastoreRequest";
import { version } from "../version";

export class ActionsDatastoresApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("actions-datastores", version);
    }
  }
  public async bulkDeleteDatastoreItems(
    datastoreId: string,
    body: BulkDeleteAppsDatastoreItemsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'datastoreId' is not null or undefined
    if (datastoreId === null || datastoreId === undefined) {
      throw new RequiredError("datastoreId", "bulkDeleteDatastoreItems");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "bulkDeleteDatastoreItems");
    }

    // Path Params
    const localVarPath =
      "/api/v2/actions-datastores/{datastore_id}/items/bulk".replace(
        "{datastore_id}",
        encodeURIComponent(String(datastoreId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ActionsDatastoresApi.v2.bulkDeleteDatastoreItems",
      ActionsDatastoresApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "BulkDeleteAppsDatastoreItemsRequest", ""),
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

  public async bulkWriteDatastoreItems(
    datastoreId: string,
    body: BulkPutAppsDatastoreItemsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'datastoreId' is not null or undefined
    if (datastoreId === null || datastoreId === undefined) {
      throw new RequiredError("datastoreId", "bulkWriteDatastoreItems");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "bulkWriteDatastoreItems");
    }

    // Path Params
    const localVarPath =
      "/api/v2/actions-datastores/{datastore_id}/items/bulk".replace(
        "{datastore_id}",
        encodeURIComponent(String(datastoreId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ActionsDatastoresApi.v2.bulkWriteDatastoreItems",
      ActionsDatastoresApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "BulkPutAppsDatastoreItemsRequest", ""),
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

  public async createDatastore(
    body: CreateAppsDatastoreRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createDatastore");
    }

    // Path Params
    const localVarPath = "/api/v2/actions-datastores";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ActionsDatastoresApi.v2.createDatastore",
      ActionsDatastoresApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "CreateAppsDatastoreRequest", ""),
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

  public async deleteDatastore(
    datastoreId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'datastoreId' is not null or undefined
    if (datastoreId === null || datastoreId === undefined) {
      throw new RequiredError("datastoreId", "deleteDatastore");
    }

    // Path Params
    const localVarPath = "/api/v2/actions-datastores/{datastore_id}".replace(
      "{datastore_id}",
      encodeURIComponent(String(datastoreId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ActionsDatastoresApi.v2.deleteDatastore",
      ActionsDatastoresApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteDatastoreItem(
    datastoreId: string,
    body: DeleteAppsDatastoreItemRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'datastoreId' is not null or undefined
    if (datastoreId === null || datastoreId === undefined) {
      throw new RequiredError("datastoreId", "deleteDatastoreItem");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deleteDatastoreItem");
    }

    // Path Params
    const localVarPath =
      "/api/v2/actions-datastores/{datastore_id}/items".replace(
        "{datastore_id}",
        encodeURIComponent(String(datastoreId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ActionsDatastoresApi.v2.deleteDatastoreItem",
      ActionsDatastoresApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "DeleteAppsDatastoreItemRequest", ""),
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

  public async getDatastore(
    datastoreId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'datastoreId' is not null or undefined
    if (datastoreId === null || datastoreId === undefined) {
      throw new RequiredError("datastoreId", "getDatastore");
    }

    // Path Params
    const localVarPath = "/api/v2/actions-datastores/{datastore_id}".replace(
      "{datastore_id}",
      encodeURIComponent(String(datastoreId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ActionsDatastoresApi.v2.getDatastore",
      ActionsDatastoresApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listDatastoreItems(
    datastoreId: string,
    filter?: string,
    itemKey?: string,
    pageLimit?: number,
    pageOffset?: number,
    sort?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'datastoreId' is not null or undefined
    if (datastoreId === null || datastoreId === undefined) {
      throw new RequiredError("datastoreId", "listDatastoreItems");
    }

    // Path Params
    const localVarPath =
      "/api/v2/actions-datastores/{datastore_id}/items".replace(
        "{datastore_id}",
        encodeURIComponent(String(datastoreId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ActionsDatastoresApi.v2.listDatastoreItems",
      ActionsDatastoresApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Query Params
    if (filter !== undefined) {
      requestContext.setQueryParam(
        "filter",
        serialize(filter, TypingInfo, "string", ""),
        "",
      );
    }
    if (itemKey !== undefined) {
      requestContext.setQueryParam(
        "item_key",
        serialize(itemKey, TypingInfo, "string", ""),
        "",
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        serialize(pageLimit, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        serialize(pageOffset, TypingInfo, "number", "int64"),
        "",
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        serialize(sort, TypingInfo, "string", ""),
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

  public async listDatastores(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/actions-datastores";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ActionsDatastoresApi.v2.listDatastores",
      ActionsDatastoresApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateDatastore(
    datastoreId: string,
    body: UpdateAppsDatastoreRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'datastoreId' is not null or undefined
    if (datastoreId === null || datastoreId === undefined) {
      throw new RequiredError("datastoreId", "updateDatastore");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateDatastore");
    }

    // Path Params
    const localVarPath = "/api/v2/actions-datastores/{datastore_id}".replace(
      "{datastore_id}",
      encodeURIComponent(String(datastoreId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ActionsDatastoresApi.v2.updateDatastore",
      ActionsDatastoresApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "UpdateAppsDatastoreRequest", ""),
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

  public async updateDatastoreItem(
    datastoreId: string,
    body: UpdateAppsDatastoreItemRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'datastoreId' is not null or undefined
    if (datastoreId === null || datastoreId === undefined) {
      throw new RequiredError("datastoreId", "updateDatastoreItem");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateDatastoreItem");
    }

    // Path Params
    const localVarPath =
      "/api/v2/actions-datastores/{datastore_id}/items".replace(
        "{datastore_id}",
        encodeURIComponent(String(datastoreId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "ActionsDatastoresApi.v2.updateDatastoreItem",
      ActionsDatastoresApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "UpdateAppsDatastoreItemRequest", ""),
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

export class ActionsDatastoresApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to bulkDeleteDatastoreItems
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async bulkDeleteDatastoreItems(
    response: ResponseContext,
  ): Promise<DeleteAppsDatastoreItemResponseArray> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DeleteAppsDatastoreItemResponseArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeleteAppsDatastoreItemResponseArray",
      ) as DeleteAppsDatastoreItemResponseArray;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
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
      const body: DeleteAppsDatastoreItemResponseArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeleteAppsDatastoreItemResponseArray",
        "",
      ) as DeleteAppsDatastoreItemResponseArray;
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
   * @params response Response returned by the server for a request to bulkWriteDatastoreItems
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async bulkWriteDatastoreItems(
    response: ResponseContext,
  ): Promise<PutAppsDatastoreItemResponseArray> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: PutAppsDatastoreItemResponseArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "PutAppsDatastoreItemResponseArray",
      ) as PutAppsDatastoreItemResponseArray;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
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
      const body: PutAppsDatastoreItemResponseArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "PutAppsDatastoreItemResponseArray",
        "",
      ) as PutAppsDatastoreItemResponseArray;
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
   * @params response Response returned by the server for a request to createDatastore
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createDatastore(
    response: ResponseContext,
  ): Promise<CreateAppsDatastoreResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CreateAppsDatastoreResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CreateAppsDatastoreResponse",
      ) as CreateAppsDatastoreResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
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
      const body: CreateAppsDatastoreResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CreateAppsDatastoreResponse",
        "",
      ) as CreateAppsDatastoreResponse;
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
   * @params response Response returned by the server for a request to deleteDatastore
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteDatastore(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      return;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
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
   * @params response Response returned by the server for a request to deleteDatastoreItem
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteDatastoreItem(
    response: ResponseContext,
  ): Promise<DeleteAppsDatastoreItemResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DeleteAppsDatastoreItemResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeleteAppsDatastoreItemResponse",
      ) as DeleteAppsDatastoreItemResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
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
      const body: DeleteAppsDatastoreItemResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DeleteAppsDatastoreItemResponse",
        "",
      ) as DeleteAppsDatastoreItemResponse;
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
   * @params response Response returned by the server for a request to getDatastore
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getDatastore(response: ResponseContext): Promise<Datastore> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: Datastore = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Datastore",
      ) as Datastore;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
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
      const body: Datastore = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Datastore",
        "",
      ) as Datastore;
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
   * @params response Response returned by the server for a request to listDatastoreItems
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listDatastoreItems(
    response: ResponseContext,
  ): Promise<ItemApiPayloadArray> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ItemApiPayloadArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ItemApiPayloadArray",
      ) as ItemApiPayloadArray;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
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
      const body: ItemApiPayloadArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ItemApiPayloadArray",
        "",
      ) as ItemApiPayloadArray;
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
   * @params response Response returned by the server for a request to listDatastores
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listDatastores(
    response: ResponseContext,
  ): Promise<DatastoreArray> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: DatastoreArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DatastoreArray",
      ) as DatastoreArray;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
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
      const body: DatastoreArray = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DatastoreArray",
        "",
      ) as DatastoreArray;
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
   * @params response Response returned by the server for a request to updateDatastore
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateDatastore(response: ResponseContext): Promise<Datastore> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: Datastore = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Datastore",
      ) as Datastore;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
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
      const body: Datastore = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "Datastore",
        "",
      ) as Datastore;
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
   * @params response Response returned by the server for a request to updateDatastoreItem
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateDatastoreItem(
    response: ResponseContext,
  ): Promise<ItemApiPayload> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ItemApiPayload = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ItemApiPayload",
      ) as ItemApiPayload;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
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
      const body: ItemApiPayload = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ItemApiPayload",
        "",
      ) as ItemApiPayload;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface ActionsDatastoresApiBulkDeleteDatastoreItemsRequest {
  /**
   * The ID of the datastore.
   * @type string
   */
  datastoreId: string;
  /**
   * @type BulkDeleteAppsDatastoreItemsRequest
   */
  body: BulkDeleteAppsDatastoreItemsRequest;
}

export interface ActionsDatastoresApiBulkWriteDatastoreItemsRequest {
  /**
   * The unique identifier of the datastore to retrieve.
   * @type string
   */
  datastoreId: string;
  /**
   * @type BulkPutAppsDatastoreItemsRequest
   */
  body: BulkPutAppsDatastoreItemsRequest;
}

export interface ActionsDatastoresApiCreateDatastoreRequest {
  /**
   * @type CreateAppsDatastoreRequest
   */
  body: CreateAppsDatastoreRequest;
}

export interface ActionsDatastoresApiDeleteDatastoreRequest {
  /**
   * The unique identifier of the datastore to retrieve.
   * @type string
   */
  datastoreId: string;
}

export interface ActionsDatastoresApiDeleteDatastoreItemRequest {
  /**
   * The unique identifier of the datastore to retrieve.
   * @type string
   */
  datastoreId: string;
  /**
   * @type DeleteAppsDatastoreItemRequest
   */
  body: DeleteAppsDatastoreItemRequest;
}

export interface ActionsDatastoresApiGetDatastoreRequest {
  /**
   * The unique identifier of the datastore to retrieve.
   * @type string
   */
  datastoreId: string;
}

export interface ActionsDatastoresApiListDatastoreItemsRequest {
  /**
   * The unique identifier of the datastore to retrieve.
   * @type string
   */
  datastoreId: string;
  /**
   * Optional query filter to search items using the [logs search syntax](https://docs.datadoghq.com/logs/explorer/search_syntax/).
   * @type string
   */
  filter?: string;
  /**
   * Optional primary key value to retrieve a specific item. Cannot be used together with the filter parameter.
   * @type string
   */
  itemKey?: string;
  /**
   * Optional field to limit the number of items to return per page for pagination. Up to 100 items can be returned per page.
   * @type number
   */
  pageLimit?: number;
  /**
   * Optional field to offset the number of items to skip from the beginning of the result set for pagination.
   * @type number
   */
  pageOffset?: number;
  /**
   * Optional field to sort results by. Prefix with '-' for descending order (e.g., '-created_at').
   * @type string
   */
  sort?: string;
}

export interface ActionsDatastoresApiUpdateDatastoreRequest {
  /**
   * The unique identifier of the datastore to retrieve.
   * @type string
   */
  datastoreId: string;
  /**
   * @type UpdateAppsDatastoreRequest
   */
  body: UpdateAppsDatastoreRequest;
}

export interface ActionsDatastoresApiUpdateDatastoreItemRequest {
  /**
   * The unique identifier of the datastore to retrieve.
   * @type string
   */
  datastoreId: string;
  /**
   * @type UpdateAppsDatastoreItemRequest
   */
  body: UpdateAppsDatastoreItemRequest;
}

export class ActionsDatastoresApi {
  private requestFactory: ActionsDatastoresApiRequestFactory;
  private responseProcessor: ActionsDatastoresApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: ActionsDatastoresApiRequestFactory,
    responseProcessor?: ActionsDatastoresApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new ActionsDatastoresApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new ActionsDatastoresApiResponseProcessor();
  }

  /**
   * Deletes multiple items from a datastore by their keys in a single operation.
   * @param param The request object
   */
  public bulkDeleteDatastoreItems(
    param: ActionsDatastoresApiBulkDeleteDatastoreItemsRequest,
    options?: Configuration,
  ): Promise<DeleteAppsDatastoreItemResponseArray> {
    const requestContextPromise = this.requestFactory.bulkDeleteDatastoreItems(
      param.datastoreId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.bulkDeleteDatastoreItems(
            responseContext,
          );
        });
    });
  }

  /**
   * Creates or replaces multiple items in a datastore by their keys in a single operation.
   * @param param The request object
   */
  public bulkWriteDatastoreItems(
    param: ActionsDatastoresApiBulkWriteDatastoreItemsRequest,
    options?: Configuration,
  ): Promise<PutAppsDatastoreItemResponseArray> {
    const requestContextPromise = this.requestFactory.bulkWriteDatastoreItems(
      param.datastoreId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.bulkWriteDatastoreItems(
            responseContext,
          );
        });
    });
  }

  /**
   * Creates a new datastore.
   * @param param The request object
   */
  public createDatastore(
    param: ActionsDatastoresApiCreateDatastoreRequest,
    options?: Configuration,
  ): Promise<CreateAppsDatastoreResponse> {
    const requestContextPromise = this.requestFactory.createDatastore(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createDatastore(responseContext);
        });
    });
  }

  /**
   * Deletes a datastore by its unique identifier.
   * @param param The request object
   */
  public deleteDatastore(
    param: ActionsDatastoresApiDeleteDatastoreRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteDatastore(
      param.datastoreId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteDatastore(responseContext);
        });
    });
  }

  /**
   * Deletes an item from a datastore by its key.
   * @param param The request object
   */
  public deleteDatastoreItem(
    param: ActionsDatastoresApiDeleteDatastoreItemRequest,
    options?: Configuration,
  ): Promise<DeleteAppsDatastoreItemResponse> {
    const requestContextPromise = this.requestFactory.deleteDatastoreItem(
      param.datastoreId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteDatastoreItem(responseContext);
        });
    });
  }

  /**
   * Retrieves a specific datastore by its ID.
   * @param param The request object
   */
  public getDatastore(
    param: ActionsDatastoresApiGetDatastoreRequest,
    options?: Configuration,
  ): Promise<Datastore> {
    const requestContextPromise = this.requestFactory.getDatastore(
      param.datastoreId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getDatastore(responseContext);
        });
    });
  }

  /**
   * Lists items from a datastore. You can filter the results by specifying either an item key or a filter query parameter, but not both at the same time. Supports server-side pagination for large datasets.
   * @param param The request object
   */
  public listDatastoreItems(
    param: ActionsDatastoresApiListDatastoreItemsRequest,
    options?: Configuration,
  ): Promise<ItemApiPayloadArray> {
    const requestContextPromise = this.requestFactory.listDatastoreItems(
      param.datastoreId,
      param.filter,
      param.itemKey,
      param.pageLimit,
      param.pageOffset,
      param.sort,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listDatastoreItems(responseContext);
        });
    });
  }

  /**
   * Lists all datastores for the organization.
   * @param param The request object
   */
  public listDatastores(options?: Configuration): Promise<DatastoreArray> {
    const requestContextPromise = this.requestFactory.listDatastores(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listDatastores(responseContext);
        });
    });
  }

  /**
   * Updates an existing datastore's attributes.
   * @param param The request object
   */
  public updateDatastore(
    param: ActionsDatastoresApiUpdateDatastoreRequest,
    options?: Configuration,
  ): Promise<Datastore> {
    const requestContextPromise = this.requestFactory.updateDatastore(
      param.datastoreId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateDatastore(responseContext);
        });
    });
  }

  /**
   * Partially updates an item in a datastore by its key.
   * @param param The request object
   */
  public updateDatastoreItem(
    param: ActionsDatastoresApiUpdateDatastoreItemRequest,
    options?: Configuration,
  ): Promise<ItemApiPayload> {
    const requestContextPromise = this.requestFactory.updateDatastoreItem(
      param.datastoreId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateDatastoreItem(responseContext);
        });
    });
  }
}
