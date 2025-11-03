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
import { CreateTableRequest } from "../models/CreateTableRequest";
import { CreateUploadRequest } from "../models/CreateUploadRequest";
import { CreateUploadResponse } from "../models/CreateUploadResponse";
import { PatchTableRequest } from "../models/PatchTableRequest";
import { ReferenceTableSortType } from "../models/ReferenceTableSortType";
import { TableResultV2 } from "../models/TableResultV2";
import { TableResultV2Array } from "../models/TableResultV2Array";
import { TableRowResourceArray } from "../models/TableRowResourceArray";

export class ReferenceTablesApiRequestFactory extends BaseAPIRequestFactory {
  public async createReferenceTable(
    body: CreateTableRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createReferenceTable");
    }

    // Path Params
    const localVarPath = "/api/v2/reference-tables/tables";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ReferenceTablesApi.createReferenceTable")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CreateTableRequest", ""),
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

  public async createReferenceTableUpload(
    body: CreateUploadRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createReferenceTableUpload");
    }

    // Path Params
    const localVarPath = "/api/v2/reference-tables/uploads";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ReferenceTablesApi.createReferenceTableUpload")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CreateUploadRequest", ""),
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

  public async deleteTable(
    id: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "deleteTable");
    }

    // Path Params
    const localVarPath = "/api/v2/reference-tables/tables/{id}".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ReferenceTablesApi.deleteTable")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
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

  public async getRowsByID(
    id: string,
    rowId: Array<string>,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getRowsByID");
    }

    // verify required parameter 'rowId' is not null or undefined
    if (rowId === null || rowId === undefined) {
      throw new RequiredError("rowId", "getRowsByID");
    }

    // Path Params
    const localVarPath = "/api/v2/reference-tables/tables/{id}/rows".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ReferenceTablesApi.getRowsByID")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (rowId !== undefined) {
      requestContext.setQueryParam(
        "row_id",
        ObjectSerializer.serialize(rowId, "Array<string>", ""),
        "multi"
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getTable(
    id: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "getTable");
    }

    // Path Params
    const localVarPath = "/api/v2/reference-tables/tables/{id}".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ReferenceTablesApi.getTable")
      .makeRequestContext(localVarPath, HttpMethod.GET);
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

  public async listTables(
    pageLimit?: number,
    pageOffset?: number,
    sort?: ReferenceTableSortType,
    filterStatus?: string,
    filterTableNameExact?: string,
    filterTableNameContains?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/reference-tables/tables";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ReferenceTablesApi.listTables")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
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
        ObjectSerializer.serialize(sort, "ReferenceTableSortType", ""),
        ""
      );
    }
    if (filterStatus !== undefined) {
      requestContext.setQueryParam(
        "filter[status]",
        ObjectSerializer.serialize(filterStatus, "string", ""),
        ""
      );
    }
    if (filterTableNameExact !== undefined) {
      requestContext.setQueryParam(
        "filter[table_name][exact]",
        ObjectSerializer.serialize(filterTableNameExact, "string", ""),
        ""
      );
    }
    if (filterTableNameContains !== undefined) {
      requestContext.setQueryParam(
        "filter[table_name][contains]",
        ObjectSerializer.serialize(filterTableNameContains, "string", ""),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async updateReferenceTable(
    id: string,
    body: PatchTableRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("id", "updateReferenceTable");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateReferenceTable");
    }

    // Path Params
    const localVarPath = "/api/v2/reference-tables/tables/{id}".replace(
      "{id}",
      encodeURIComponent(String(id))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ReferenceTablesApi.updateReferenceTable")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "PatchTableRequest", ""),
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

export class ReferenceTablesApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createReferenceTable
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createReferenceTable(
    response: ResponseContext
  ): Promise<TableResultV2> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: TableResultV2 = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TableResultV2"
      ) as TableResultV2;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
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
      const body: TableResultV2 = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TableResultV2",
        ""
      ) as TableResultV2;
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
   * @params response Response returned by the server for a request to createReferenceTableUpload
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createReferenceTableUpload(
    response: ResponseContext
  ): Promise<CreateUploadResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: CreateUploadResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CreateUploadResponse"
      ) as CreateUploadResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
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
      const body: CreateUploadResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CreateUploadResponse",
        ""
      ) as CreateUploadResponse;
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
   * @params response Response returned by the server for a request to deleteTable
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteTable(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      return;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
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
      return;
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
   * @params response Response returned by the server for a request to getRowsByID
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRowsByID(
    response: ResponseContext
  ): Promise<TableRowResourceArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: TableRowResourceArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TableRowResourceArray"
      ) as TableRowResourceArray;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
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
      const body: TableRowResourceArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TableRowResourceArray",
        ""
      ) as TableRowResourceArray;
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
   * @params response Response returned by the server for a request to getTable
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTable(response: ResponseContext): Promise<TableResultV2> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: TableResultV2 = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TableResultV2"
      ) as TableResultV2;
      return body;
    }
    if (
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
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
      const body: TableResultV2 = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TableResultV2",
        ""
      ) as TableResultV2;
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
   * @params response Response returned by the server for a request to listTables
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTables(
    response: ResponseContext
  ): Promise<TableResultV2Array> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: TableResultV2Array = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TableResultV2Array"
      ) as TableResultV2Array;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
      const body: TableResultV2Array = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "TableResultV2Array",
        ""
      ) as TableResultV2Array;
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
   * @params response Response returned by the server for a request to updateReferenceTable
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateReferenceTable(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
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
      return;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface ReferenceTablesApiCreateReferenceTableRequest {
  /**
   * @type CreateTableRequest
   */
  body: CreateTableRequest;
}

export interface ReferenceTablesApiCreateReferenceTableUploadRequest {
  /**
   * @type CreateUploadRequest
   */
  body: CreateUploadRequest;
}

export interface ReferenceTablesApiDeleteTableRequest {
  /**
   * The ID of the reference table to delete
   * @type string
   */
  id: string;
}

export interface ReferenceTablesApiGetRowsByIDRequest {
  /**
   * The ID of the reference table
   * @type string
   */
  id: string;
  /**
   * List of row IDs (primary key values) to retrieve from the reference table.
   * @type Array<string>
   */
  rowId: Array<string>;
}

export interface ReferenceTablesApiGetTableRequest {
  /**
   * The ID of the reference table to retrieve
   * @type string
   */
  id: string;
}

export interface ReferenceTablesApiListTablesRequest {
  /**
   * Number of tables to return.
   * @type number
   */
  pageLimit?: number;
  /**
   * Number of tables to skip for pagination.
   * @type number
   */
  pageOffset?: number;
  /**
   * Sort field and direction. Use field name for ascending, prefix with "-" for descending.
   * @type ReferenceTableSortType
   */
  sort?: ReferenceTableSortType;
  /**
   * Filter by table status.
   * @type string
   */
  filterStatus?: string;
  /**
   * Filter by exact table name match.
   * @type string
   */
  filterTableNameExact?: string;
  /**
   * Filter by table name containing substring.
   * @type string
   */
  filterTableNameContains?: string;
}

export interface ReferenceTablesApiUpdateReferenceTableRequest {
  /**
   * The ID of the reference table to update
   * @type string
   */
  id: string;
  /**
   * @type PatchTableRequest
   */
  body: PatchTableRequest;
}

export class ReferenceTablesApi {
  private requestFactory: ReferenceTablesApiRequestFactory;
  private responseProcessor: ReferenceTablesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: ReferenceTablesApiRequestFactory,
    responseProcessor?: ReferenceTablesApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new ReferenceTablesApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new ReferenceTablesApiResponseProcessor();
  }

  /**
   * Create a new reference table. You can provide data in two ways: 1) Call POST api/v2/reference-tables/upload first to get an upload ID, then PUT chunks of CSV data to each provided URL, and finally call this POST endpoint with the upload_id in file_metadata, OR 2) Provide access_details in file_metadata pointing to a CSV file in cloud storage (Amazon S3, Azure Blob Storage, or GCP Cloud Storage).
   * @param param The request object
   */
  public createReferenceTable(
    param: ReferenceTablesApiCreateReferenceTableRequest,
    options?: Configuration
  ): Promise<TableResultV2> {
    const requestContextPromise = this.requestFactory.createReferenceTable(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createReferenceTable(responseContext);
        });
    });
  }

  /**
   * Create a reference table upload for bulk data ingestion
   * @param param The request object
   */
  public createReferenceTableUpload(
    param: ReferenceTablesApiCreateReferenceTableUploadRequest,
    options?: Configuration
  ): Promise<CreateUploadResponse> {
    const requestContextPromise =
      this.requestFactory.createReferenceTableUpload(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createReferenceTableUpload(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a reference table by ID
   * @param param The request object
   */
  public deleteTable(
    param: ReferenceTablesApiDeleteTableRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteTable(
      param.id,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteTable(responseContext);
        });
    });
  }

  /**
   * Get reference table rows by their primary key values.
   * @param param The request object
   */
  public getRowsByID(
    param: ReferenceTablesApiGetRowsByIDRequest,
    options?: Configuration
  ): Promise<TableRowResourceArray> {
    const requestContextPromise = this.requestFactory.getRowsByID(
      param.id,
      param.rowId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRowsByID(responseContext);
        });
    });
  }

  /**
   * Get a reference table by ID
   * @param param The request object
   */
  public getTable(
    param: ReferenceTablesApiGetTableRequest,
    options?: Configuration
  ): Promise<TableResultV2> {
    const requestContextPromise = this.requestFactory.getTable(
      param.id,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getTable(responseContext);
        });
    });
  }

  /**
   * List all reference tables in this organization.
   * @param param The request object
   */
  public listTables(
    param: ReferenceTablesApiListTablesRequest = {},
    options?: Configuration
  ): Promise<TableResultV2Array> {
    const requestContextPromise = this.requestFactory.listTables(
      param.pageLimit,
      param.pageOffset,
      param.sort,
      param.filterStatus,
      param.filterTableNameExact,
      param.filterTableNameContains,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listTables(responseContext);
        });
    });
  }

  /**
   * Update a reference table by ID. You can update the table's data, description, and tags. Note: The source type cannot be changed after table creation. For data updates: For existing tables of type `source:LOCAL_FILE`, call POST api/v2/reference-tables/uploads first to get an upload ID, then PUT chunks of CSV data to each provided URL, and finally call this PATCH endpoint with the upload_id in file_metadata. For existing tables with `source:` types of `S3`, `GCS`, or `AZURE`, provide updated access_details in file_metadata pointing to a CSV file in the same type of cloud storage.
   * @param param The request object
   */
  public updateReferenceTable(
    param: ReferenceTablesApiUpdateReferenceTableRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.updateReferenceTable(
      param.id,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateReferenceTable(responseContext);
        });
    });
  }
}
