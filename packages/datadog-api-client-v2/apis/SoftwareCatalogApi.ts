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
import { EntityData } from "../models/EntityData";
import { IncludeType } from "../models/IncludeType";
import { ListEntityCatalogResponse } from "../models/ListEntityCatalogResponse";
import { RelationType } from "../models/RelationType";
import { UpsertCatalogEntityRequest } from "../models/UpsertCatalogEntityRequest";
import { UpsertCatalogEntityResponse } from "../models/UpsertCatalogEntityResponse";

export class SoftwareCatalogApiRequestFactory extends BaseAPIRequestFactory {
  public async deleteCatalogEntity(
    entityId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'entityId' is not null or undefined
    if (entityId === null || entityId === undefined) {
      throw new RequiredError("entityId", "deleteCatalogEntity");
    }

    // Path Params
    const localVarPath = "/api/v2/catalog/entity/{entity_id}".replace(
      "{entity_id}",
      encodeURIComponent(String(entityId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SoftwareCatalogApi.deleteCatalogEntity")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listCatalogEntity(
    pageOffset?: number,
    pageLimit?: number,
    filterId?: string,
    filterRef?: string,
    filterName?: string,
    filterKind?: string,
    filterOwner?: string,
    filterRelationType?: RelationType,
    filterExcludeSnapshot?: string,
    include?: IncludeType,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/catalog/entity";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SoftwareCatalogApi.listCatalogEntity")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        ObjectSerializer.serialize(pageOffset, "number", "int64"),
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
    if (filterId !== undefined) {
      requestContext.setQueryParam(
        "filter[id]",
        ObjectSerializer.serialize(filterId, "string", ""),
        ""
      );
    }
    if (filterRef !== undefined) {
      requestContext.setQueryParam(
        "filter[ref]",
        ObjectSerializer.serialize(filterRef, "string", ""),
        ""
      );
    }
    if (filterName !== undefined) {
      requestContext.setQueryParam(
        "filter[name]",
        ObjectSerializer.serialize(filterName, "string", ""),
        ""
      );
    }
    if (filterKind !== undefined) {
      requestContext.setQueryParam(
        "filter[kind]",
        ObjectSerializer.serialize(filterKind, "string", ""),
        ""
      );
    }
    if (filterOwner !== undefined) {
      requestContext.setQueryParam(
        "filter[owner]",
        ObjectSerializer.serialize(filterOwner, "string", ""),
        ""
      );
    }
    if (filterRelationType !== undefined) {
      requestContext.setQueryParam(
        "filter[relation][type]",
        ObjectSerializer.serialize(filterRelationType, "RelationType", ""),
        ""
      );
    }
    if (filterExcludeSnapshot !== undefined) {
      requestContext.setQueryParam(
        "filter[exclude_snapshot]",
        ObjectSerializer.serialize(filterExcludeSnapshot, "string", ""),
        ""
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "IncludeType", ""),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async upsertCatalogEntity(
    body: UpsertCatalogEntityRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "upsertCatalogEntity");
    }

    // Path Params
    const localVarPath = "/api/v2/catalog/entity";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SoftwareCatalogApi.upsertCatalogEntity")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "UpsertCatalogEntityRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class SoftwareCatalogApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteCatalogEntity
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteCatalogEntity(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
   * @params response Response returned by the server for a request to listCatalogEntity
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCatalogEntity(
    response: ResponseContext
  ): Promise<ListEntityCatalogResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ListEntityCatalogResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListEntityCatalogResponse"
      ) as ListEntityCatalogResponse;
      return body;
    }
    if (
      response.httpStatusCode === 401 ||
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
      const body: ListEntityCatalogResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListEntityCatalogResponse",
        ""
      ) as ListEntityCatalogResponse;
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
   * @params response Response returned by the server for a request to upsertCatalogEntity
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async upsertCatalogEntity(
    response: ResponseContext
  ): Promise<UpsertCatalogEntityResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 202) {
      const body: UpsertCatalogEntityResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UpsertCatalogEntityResponse"
      ) as UpsertCatalogEntityResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
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
      const body: UpsertCatalogEntityResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UpsertCatalogEntityResponse",
        ""
      ) as UpsertCatalogEntityResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface SoftwareCatalogApiDeleteCatalogEntityRequest {
  /**
   * UUID or Entity Ref.
   * @type string
   */
  entityId: string;
}

export interface SoftwareCatalogApiListCatalogEntityRequest {
  /**
   * Specific offset to use as the beginning of the returned page.
   * @type number
   */
  pageOffset?: number;
  /**
   * Maximum number of entities in the response.
   * @type number
   */
  pageLimit?: number;
  /**
   * Filter entities by UUID.
   * @type string
   */
  filterId?: string;
  /**
   * Filter entities by reference
   * @type string
   */
  filterRef?: string;
  /**
   * Filter entities by name.
   * @type string
   */
  filterName?: string;
  /**
   * Filter entities by kind.
   * @type string
   */
  filterKind?: string;
  /**
   * Filter entities by owner.
   * @type string
   */
  filterOwner?: string;
  /**
   * Filter entities by relation type.
   * @type RelationType
   */
  filterRelationType?: RelationType;
  /**
   * Filter entities by excluding snapshotted entities.
   * @type string
   */
  filterExcludeSnapshot?: string;
  /**
   * Include relationship data.
   * @type IncludeType
   */
  include?: IncludeType;
}

export interface SoftwareCatalogApiUpsertCatalogEntityRequest {
  /**
   * Entity YAML or JSON.
   * @type UpsertCatalogEntityRequest
   */
  body: UpsertCatalogEntityRequest;
}

export class SoftwareCatalogApi {
  private requestFactory: SoftwareCatalogApiRequestFactory;
  private responseProcessor: SoftwareCatalogApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: SoftwareCatalogApiRequestFactory,
    responseProcessor?: SoftwareCatalogApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new SoftwareCatalogApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new SoftwareCatalogApiResponseProcessor();
  }

  /**
   * Delete a single entity in Software Catalog.
   * @param param The request object
   */
  public deleteCatalogEntity(
    param: SoftwareCatalogApiDeleteCatalogEntityRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteCatalogEntity(
      param.entityId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteCatalogEntity(responseContext);
        });
    });
  }

  /**
   * Get a list of entities from Software Catalog.
   * @param param The request object
   */
  public listCatalogEntity(
    param: SoftwareCatalogApiListCatalogEntityRequest = {},
    options?: Configuration
  ): Promise<ListEntityCatalogResponse> {
    const requestContextPromise = this.requestFactory.listCatalogEntity(
      param.pageOffset,
      param.pageLimit,
      param.filterId,
      param.filterRef,
      param.filterName,
      param.filterKind,
      param.filterOwner,
      param.filterRelationType,
      param.filterExcludeSnapshot,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCatalogEntity(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listCatalogEntity returning a generator with all the items.
   */
  public async *listCatalogEntityWithPagination(
    param: SoftwareCatalogApiListCatalogEntityRequest = {},
    options?: Configuration
  ): AsyncGenerator<EntityData> {
    let pageSize = 100;
    if (param.pageLimit !== undefined) {
      pageSize = param.pageLimit;
    }
    param.pageLimit = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listCatalogEntity(
        param.pageOffset,
        param.pageLimit,
        param.filterId,
        param.filterRef,
        param.filterName,
        param.filterKind,
        param.filterOwner,
        param.filterRelationType,
        param.filterExcludeSnapshot,
        param.include,
        options
      );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

      const response = await this.responseProcessor.listCatalogEntity(
        responseContext
      );
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
      if (param.pageOffset === undefined) {
        param.pageOffset = pageSize;
      } else {
        param.pageOffset = param.pageOffset + pageSize;
      }
    }
  }

  /**
   * Create or update entities in Software Catalog.
   * @param param The request object
   */
  public upsertCatalogEntity(
    param: SoftwareCatalogApiUpsertCatalogEntityRequest,
    options?: Configuration
  ): Promise<UpsertCatalogEntityResponse> {
    const requestContextPromise = this.requestFactory.upsertCatalogEntity(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.upsertCatalogEntity(responseContext);
        });
    });
  }
}
