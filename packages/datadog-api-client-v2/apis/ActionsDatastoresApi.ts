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
import { BulkPutAppsDatastoreItemsRequest } from "../models/BulkPutAppsDatastoreItemsRequest";
import { CreateAppsDatastoreFromImportRequest } from "../models/CreateAppsDatastoreFromImportRequest";
import { CreateAppsDatastoreFromImportResponse } from "../models/CreateAppsDatastoreFromImportResponse";
import { CreateAppsDatastoreRequest } from "../models/CreateAppsDatastoreRequest";
import { CreateAppsDatastoreResponse } from "../models/CreateAppsDatastoreResponse";
import { Datastore } from "../models/Datastore";
import { DatastoreArray } from "../models/DatastoreArray";
import { DeleteAppsDatastoreItemRequest } from "../models/DeleteAppsDatastoreItemRequest";
import { DeleteAppsDatastoreItemResponse } from "../models/DeleteAppsDatastoreItemResponse";
import { ItemApiPayloadArray } from "../models/ItemApiPayloadArray";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { PutAppsDatastoreItemRequest } from "../models/PutAppsDatastoreItemRequest";
import { PutAppsDatastoreItemResponse } from "../models/PutAppsDatastoreItemResponse";
import { PutAppsDatastoreItemResponseArray } from "../models/PutAppsDatastoreItemResponseArray";
import { UpdateAppsDatastoreRequest } from "../models/UpdateAppsDatastoreRequest";

export class ActionsDatastoresApiRequestFactory extends BaseAPIRequestFactory {
  public async bulkPutDatastoreItems(
    datastoreId: string,
    body: BulkPutAppsDatastoreItemsRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'datastoreId' is not null or undefined
    if (datastoreId === null || datastoreId === undefined) {
      throw new RequiredError("datastoreId", "bulkPutDatastoreItems");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "bulkPutDatastoreItems");
    }

    // Path Params
    const localVarPath =
      "/api/v2/actions-datastores/{datastore_id}/items/bulk".replace(
        "{datastore_id}",
        encodeURIComponent(String(datastoreId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ActionsDatastoresApi.bulkPutDatastoreItems")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "BulkPutAppsDatastoreItemsRequest", ""),
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

  public async createDatastore(
    body: CreateAppsDatastoreRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createDatastore");
    }

    // Path Params
    const localVarPath = "/api/v2/actions-datastores";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ActionsDatastoresApi.createDatastore")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CreateAppsDatastoreRequest", ""),
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

  public async createDatastoreFromImport(
    body: CreateAppsDatastoreFromImportRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createDatastoreFromImport");
    }

    // Path Params
    const localVarPath = "/api/v2/actions-datastores/import";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ActionsDatastoresApi.createDatastoreFromImport")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "CreateAppsDatastoreFromImportRequest",
        ""
      ),
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

  public async deleteDatastore(
    datastoreId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'datastoreId' is not null or undefined
    if (datastoreId === null || datastoreId === undefined) {
      throw new RequiredError("datastoreId", "deleteDatastore");
    }

    // Path Params
    const localVarPath = "/api/v2/actions-datastores/{datastore_id}".replace(
      "{datastore_id}",
      encodeURIComponent(String(datastoreId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ActionsDatastoresApi.deleteDatastore")
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

  public async deleteDatastoreItem(
    datastoreId: string,
    body: DeleteAppsDatastoreItemRequest,
    _options?: Configuration
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
        encodeURIComponent(String(datastoreId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ActionsDatastoresApi.deleteDatastoreItem")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "DeleteAppsDatastoreItemRequest", ""),
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

  public async getDatastore(
    datastoreId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'datastoreId' is not null or undefined
    if (datastoreId === null || datastoreId === undefined) {
      throw new RequiredError("datastoreId", "getDatastore");
    }

    // Path Params
    const localVarPath = "/api/v2/actions-datastores/{datastore_id}".replace(
      "{datastore_id}",
      encodeURIComponent(String(datastoreId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ActionsDatastoresApi.getDatastore")
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

  public async listDatastoreItems(
    datastoreId: string,
    filter?: string,
    itemKey?: string,
    pageLimit?: number,
    pageOffset?: number,
    sort?: string,
    _options?: Configuration
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
        encodeURIComponent(String(datastoreId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ActionsDatastoresApi.listDatastoreItems")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filter !== undefined) {
      requestContext.setQueryParam(
        "filter",
        ObjectSerializer.serialize(filter, "string", ""),
        ""
      );
    }
    if (itemKey !== undefined) {
      requestContext.setQueryParam(
        "item_key",
        ObjectSerializer.serialize(itemKey, "string", ""),
        ""
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        ObjectSerializer.serialize(pageLimit, "number", "int64"),
        ""
      );
    }
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        ObjectSerializer.serialize(pageOffset, "number", "int64"),
        ""
      );
    }
    if (sort !== undefined) {
      requestContext.setQueryParam(
        "sort",
        ObjectSerializer.serialize(sort, "string", ""),
        ""
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
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/actions-datastores";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ActionsDatastoresApi.listDatastores")
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

  public async putDatastoreItem(
    datastoreId: string,
    body: PutAppsDatastoreItemRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'datastoreId' is not null or undefined
    if (datastoreId === null || datastoreId === undefined) {
      throw new RequiredError("datastoreId", "putDatastoreItem");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "putDatastoreItem");
    }

    // Path Params
    const localVarPath =
      "/api/v2/actions-datastores/{datastore_id}/items".replace(
        "{datastore_id}",
        encodeURIComponent(String(datastoreId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ActionsDatastoresApi.putDatastoreItem")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "PutAppsDatastoreItemRequest", ""),
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

  public async updateDatastore(
    datastoreId: string,
    body: UpdateAppsDatastoreRequest,
    _options?: Configuration
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
      encodeURIComponent(String(datastoreId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ActionsDatastoresApi.updateDatastore")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "UpdateAppsDatastoreRequest", ""),
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

export class ActionsDatastoresApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to bulkPutDatastoreItems
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async bulkPutDatastoreItems(
    response: ResponseContext
  ): Promise<PutAppsDatastoreItemResponseArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: PutAppsDatastoreItemResponseArray =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "PutAppsDatastoreItemResponseArray"
        ) as PutAppsDatastoreItemResponseArray;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: PutAppsDatastoreItemResponseArray =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "PutAppsDatastoreItemResponseArray",
          ""
        ) as PutAppsDatastoreItemResponseArray;
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
   * @params response Response returned by the server for a request to createDatastore
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createDatastore(
    response: ResponseContext
  ): Promise<CreateAppsDatastoreResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CreateAppsDatastoreResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CreateAppsDatastoreResponse"
      ) as CreateAppsDatastoreResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 500) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: CreateAppsDatastoreResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CreateAppsDatastoreResponse",
        ""
      ) as CreateAppsDatastoreResponse;
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
   * @params response Response returned by the server for a request to createDatastoreFromImport
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createDatastoreFromImport(
    response: ResponseContext
  ): Promise<CreateAppsDatastoreFromImportResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CreateAppsDatastoreFromImportResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "CreateAppsDatastoreFromImportResponse"
        ) as CreateAppsDatastoreFromImportResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 500) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: CreateAppsDatastoreFromImportResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "CreateAppsDatastoreFromImportResponse",
          ""
        ) as CreateAppsDatastoreFromImportResponse;
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
   * @params response Response returned by the server for a request to deleteDatastore
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteDatastore(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
   * @params response Response returned by the server for a request to deleteDatastoreItem
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteDatastoreItem(
    response: ResponseContext
  ): Promise<DeleteAppsDatastoreItemResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DeleteAppsDatastoreItemResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "DeleteAppsDatastoreItemResponse"
        ) as DeleteAppsDatastoreItemResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: DeleteAppsDatastoreItemResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "DeleteAppsDatastoreItemResponse",
          ""
        ) as DeleteAppsDatastoreItemResponse;
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
   * @params response Response returned by the server for a request to getDatastore
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getDatastore(response: ResponseContext): Promise<Datastore> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: Datastore = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Datastore"
      ) as Datastore;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: Datastore = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Datastore",
        ""
      ) as Datastore;
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
   * @params response Response returned by the server for a request to listDatastoreItems
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listDatastoreItems(
    response: ResponseContext
  ): Promise<ItemApiPayloadArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ItemApiPayloadArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ItemApiPayloadArray"
      ) as ItemApiPayloadArray;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: ItemApiPayloadArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ItemApiPayloadArray",
        ""
      ) as ItemApiPayloadArray;
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
   * @params response Response returned by the server for a request to listDatastores
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listDatastores(
    response: ResponseContext
  ): Promise<DatastoreArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DatastoreArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DatastoreArray"
      ) as DatastoreArray;
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
    if (response.httpStatusCode === 500) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: DatastoreArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DatastoreArray",
        ""
      ) as DatastoreArray;
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
   * @params response Response returned by the server for a request to putDatastoreItem
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async putDatastoreItem(
    response: ResponseContext
  ): Promise<PutAppsDatastoreItemResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: PutAppsDatastoreItemResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PutAppsDatastoreItemResponse"
      ) as PutAppsDatastoreItemResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 500) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: PutAppsDatastoreItemResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PutAppsDatastoreItemResponse",
        ""
      ) as PutAppsDatastoreItemResponse;
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
   * @params response Response returned by the server for a request to updateDatastore
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateDatastore(response: ResponseContext): Promise<Datastore> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: Datastore = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Datastore"
      ) as Datastore;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 500
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: Datastore = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Datastore",
        ""
      ) as Datastore;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface ActionsDatastoresApiBulkPutDatastoreItemsRequest {
  /**
   * The ID of the datastore.
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

export interface ActionsDatastoresApiCreateDatastoreFromImportRequest {
  /**
   * @type CreateAppsDatastoreFromImportRequest
   */
  body: CreateAppsDatastoreFromImportRequest;
}

export interface ActionsDatastoresApiDeleteDatastoreRequest {
  /**
   * The ID of the datastore.
   * @type string
   */
  datastoreId: string;
}

export interface ActionsDatastoresApiDeleteDatastoreItemRequest {
  /**
   * The ID of the datastore.
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
   * The ID of the datastore.
   * @type string
   */
  datastoreId: string;
}

export interface ActionsDatastoresApiListDatastoreItemsRequest {
  /**
   * The ID of the datastore.
   * @type string
   */
  datastoreId: string;
  /**
   * Optional filter to filter the list of items.
   * @type string
   */
  filter?: string;
  /**
   * Optional item key to filter the list of items.
   * @type string
   */
  itemKey?: string;
  /**
   * Optional limit to limit the number of items in the list.
   * @type number
   */
  pageLimit?: number;
  /**
   * Optional offset to offset the list of items.
   * @type number
   */
  pageOffset?: number;
  /**
   * Optional sort to sort the list of items.
   * @type string
   */
  sort?: string;
}

export interface ActionsDatastoresApiPutDatastoreItemRequest {
  /**
   * The ID of the datastore.
   * @type string
   */
  datastoreId: string;
  /**
   * @type PutAppsDatastoreItemRequest
   */
  body: PutAppsDatastoreItemRequest;
}

export interface ActionsDatastoresApiUpdateDatastoreRequest {
  /**
   * The ID of the datastore.
   * @type string
   */
  datastoreId: string;
  /**
   * @type UpdateAppsDatastoreRequest
   */
  body: UpdateAppsDatastoreRequest;
}

export class ActionsDatastoresApi {
  private requestFactory: ActionsDatastoresApiRequestFactory;
  private responseProcessor: ActionsDatastoresApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: ActionsDatastoresApiRequestFactory,
    responseProcessor?: ActionsDatastoresApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new ActionsDatastoresApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new ActionsDatastoresApiResponseProcessor();
  }

  /**
   * Creates or replaces multiple items in a datastore by their keys in a single operation.
   * @param param The request object
   */
  public bulkPutDatastoreItems(
    param: ActionsDatastoresApiBulkPutDatastoreItemsRequest,
    options?: Configuration
  ): Promise<PutAppsDatastoreItemResponseArray> {
    const requestContextPromise = this.requestFactory.bulkPutDatastoreItems(
      param.datastoreId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.bulkPutDatastoreItems(responseContext);
        });
    });
  }

  /**
   * Creates a new datastore.
   * @param param The request object
   */
  public createDatastore(
    param: ActionsDatastoresApiCreateDatastoreRequest,
    options?: Configuration
  ): Promise<CreateAppsDatastoreResponse> {
    const requestContextPromise = this.requestFactory.createDatastore(
      param.body,
      options
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
   * Creates a new datastore and populates it with items from the provided data.
   * @param param The request object
   */
  public createDatastoreFromImport(
    param: ActionsDatastoresApiCreateDatastoreFromImportRequest,
    options?: Configuration
  ): Promise<CreateAppsDatastoreFromImportResponse> {
    const requestContextPromise = this.requestFactory.createDatastoreFromImport(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createDatastoreFromImport(
            responseContext
          );
        });
    });
  }

  /**
   * Deletes a datastore by its ID.
   * @param param The request object
   */
  public deleteDatastore(
    param: ActionsDatastoresApiDeleteDatastoreRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteDatastore(
      param.datastoreId,
      options
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
    options?: Configuration
  ): Promise<DeleteAppsDatastoreItemResponse> {
    const requestContextPromise = this.requestFactory.deleteDatastoreItem(
      param.datastoreId,
      param.body,
      options
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
    options?: Configuration
  ): Promise<Datastore> {
    const requestContextPromise = this.requestFactory.getDatastore(
      param.datastoreId,
      options
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
   * Lists items from a datastore. You can filter the results by specifying either an item key or a filter query parameter, but not both at the same time.
   * @param param The request object
   */
  public listDatastoreItems(
    param: ActionsDatastoresApiListDatastoreItemsRequest,
    options?: Configuration
  ): Promise<ItemApiPayloadArray> {
    const requestContextPromise = this.requestFactory.listDatastoreItems(
      param.datastoreId,
      param.filter,
      param.itemKey,
      param.pageLimit,
      param.pageOffset,
      param.sort,
      options
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
   * Creates or replaces an item in a datastore by its key.
   * @param param The request object
   */
  public putDatastoreItem(
    param: ActionsDatastoresApiPutDatastoreItemRequest,
    options?: Configuration
  ): Promise<PutAppsDatastoreItemResponse> {
    const requestContextPromise = this.requestFactory.putDatastoreItem(
      param.datastoreId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.putDatastoreItem(responseContext);
        });
    });
  }

  /**
   * Updates an existing datastore's attributes.
   * @param param The request object
   */
  public updateDatastore(
    param: ActionsDatastoresApiUpdateDatastoreRequest,
    options?: Configuration
  ): Promise<Datastore> {
    const requestContextPromise = this.requestFactory.updateDatastore(
      param.datastoreId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateDatastore(responseContext);
        });
    });
  }
}
