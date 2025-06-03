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
import { EntityData } from "./models/EntityData";
import { IncludeType } from "./models/IncludeType";
import { ListEntityCatalogResponse } from "./models/ListEntityCatalogResponse";
import { ListRelationCatalogResponse } from "./models/ListRelationCatalogResponse";
import { RelationIncludeType } from "./models/RelationIncludeType";
import { RelationResponse } from "./models/RelationResponse";
import { RelationType } from "./models/RelationType";
import { UpsertCatalogEntityRequest } from "./models/UpsertCatalogEntityRequest";
import { UpsertCatalogEntityResponse } from "./models/UpsertCatalogEntityResponse";
import { version } from "../version";

export class SoftwareCatalogApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("software-catalog", version);
    }
  }
  public async deleteCatalogEntity(
    entityId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'entityId' is not null or undefined
    if (entityId === null || entityId === undefined) {
      throw new RequiredError("entityId", "deleteCatalogEntity");
    }

    // Path Params
    const localVarPath = "/api/v2/catalog/entity/{entity_id}".replace(
      "{entity_id}",
      encodeURIComponent(String(entityId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SoftwareCatalogApi.v2.deleteCatalogEntity",
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
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/catalog/entity";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SoftwareCatalogApi.v2.listCatalogEntity",
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
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        serialize(pageOffset, TypingInfo, "number", "int64"),
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
    if (filterId !== undefined) {
      requestContext.setQueryParam(
        "filter[id]",
        serialize(filterId, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterRef !== undefined) {
      requestContext.setQueryParam(
        "filter[ref]",
        serialize(filterRef, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterName !== undefined) {
      requestContext.setQueryParam(
        "filter[name]",
        serialize(filterName, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterKind !== undefined) {
      requestContext.setQueryParam(
        "filter[kind]",
        serialize(filterKind, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterOwner !== undefined) {
      requestContext.setQueryParam(
        "filter[owner]",
        serialize(filterOwner, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterRelationType !== undefined) {
      requestContext.setQueryParam(
        "filter[relation][type]",
        serialize(filterRelationType, TypingInfo, "RelationType", ""),
        "",
      );
    }
    if (filterExcludeSnapshot !== undefined) {
      requestContext.setQueryParam(
        "filter[exclude_snapshot]",
        serialize(filterExcludeSnapshot, TypingInfo, "string", ""),
        "",
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "IncludeType", ""),
        "",
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

  public async listCatalogRelation(
    pageOffset?: number,
    pageLimit?: number,
    filterType?: RelationType,
    filterFromRef?: string,
    filterToRef?: string,
    include?: RelationIncludeType,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/catalog/relation";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SoftwareCatalogApi.v2.listCatalogRelation",
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
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        serialize(pageOffset, TypingInfo, "number", "int64"),
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
    if (filterType !== undefined) {
      requestContext.setQueryParam(
        "filter[type]",
        serialize(filterType, TypingInfo, "RelationType", ""),
        "",
      );
    }
    if (filterFromRef !== undefined) {
      requestContext.setQueryParam(
        "filter[from_ref]",
        serialize(filterFromRef, TypingInfo, "string", ""),
        "",
      );
    }
    if (filterToRef !== undefined) {
      requestContext.setQueryParam(
        "filter[to_ref]",
        serialize(filterToRef, TypingInfo, "string", ""),
        "",
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        serialize(include, TypingInfo, "RelationIncludeType", ""),
        "",
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
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "upsertCatalogEntity");
    }

    // Path Params
    const localVarPath = "/api/v2/catalog/entity";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "SoftwareCatalogApi.v2.upsertCatalogEntity",
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
      serialize(body, TypingInfo, "UpsertCatalogEntityRequest", ""),
      contentType,
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
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
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
   * @params response Response returned by the server for a request to listCatalogEntity
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCatalogEntity(
    response: ResponseContext,
  ): Promise<ListEntityCatalogResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListEntityCatalogResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListEntityCatalogResponse",
      ) as ListEntityCatalogResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
      const body: ListEntityCatalogResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListEntityCatalogResponse",
        "",
      ) as ListEntityCatalogResponse;
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
   * @params response Response returned by the server for a request to listCatalogRelation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCatalogRelation(
    response: ResponseContext,
  ): Promise<ListRelationCatalogResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: ListRelationCatalogResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListRelationCatalogResponse",
      ) as ListRelationCatalogResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
      const body: ListRelationCatalogResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "ListRelationCatalogResponse",
        "",
      ) as ListRelationCatalogResponse;
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
   * @params response Response returned by the server for a request to upsertCatalogEntity
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async upsertCatalogEntity(
    response: ResponseContext,
  ): Promise<UpsertCatalogEntityResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 202) {
      const body: UpsertCatalogEntityResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UpsertCatalogEntityResponse",
      ) as UpsertCatalogEntityResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
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
      const body: UpsertCatalogEntityResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "UpsertCatalogEntityResponse",
        "",
      ) as UpsertCatalogEntityResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
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

export interface SoftwareCatalogApiListCatalogRelationRequest {
  /**
   * Specific offset to use as the beginning of the returned page.
   * @type number
   */
  pageOffset?: number;
  /**
   * Maximum number of relations in the response.
   * @type number
   */
  pageLimit?: number;
  /**
   * Filter relations by type.
   * @type RelationType
   */
  filterType?: RelationType;
  /**
   * Filter relations by the reference of the first entity in the relation.
   * @type string
   */
  filterFromRef?: string;
  /**
   * Filter relations by the reference of the second entity in the relation.
   * @type string
   */
  filterToRef?: string;
  /**
   * Include relationship data.
   * @type RelationIncludeType
   */
  include?: RelationIncludeType;
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

  private operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: SoftwareCatalogApiRequestFactory,
    responseProcessor?: SoftwareCatalogApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new SoftwareCatalogApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new SoftwareCatalogApiResponseProcessor();

    // Add operation servers to the configuration
    if (Object.keys(this.operationServers).length > 0) {
      this.configuration.addOperationServers(this.operationServers);
    }
  }

  /**
   * Delete a single entity in Software Catalog.
   * @param param The request object
   */
  public deleteCatalogEntity(
    param: SoftwareCatalogApiDeleteCatalogEntityRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteCatalogEntity(
      param.entityId,
      options,
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
    options?: Configuration,
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
      options,
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
    options?: Configuration,
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
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.listCatalogEntity(responseContext);
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
   * Get a list of entity relations from Software Catalog.
   * @param param The request object
   */
  public listCatalogRelation(
    param: SoftwareCatalogApiListCatalogRelationRequest = {},
    options?: Configuration,
  ): Promise<ListRelationCatalogResponse> {
    const requestContextPromise = this.requestFactory.listCatalogRelation(
      param.pageOffset,
      param.pageLimit,
      param.filterType,
      param.filterFromRef,
      param.filterToRef,
      param.include,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCatalogRelation(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listCatalogRelation returning a generator with all the items.
   */
  public async *listCatalogRelationWithPagination(
    param: SoftwareCatalogApiListCatalogRelationRequest = {},
    options?: Configuration,
  ): AsyncGenerator<RelationResponse> {
    let pageSize = 100;
    if (param.pageLimit !== undefined) {
      pageSize = param.pageLimit;
    }
    param.pageLimit = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listCatalogRelation(
        param.pageOffset,
        param.pageLimit,
        param.filterType,
        param.filterFromRef,
        param.filterToRef,
        param.include,
        options,
      );
      const responseContext =
        await this.configuration.httpApi.send(requestContext);

      const response =
        await this.responseProcessor.listCatalogRelation(responseContext);
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
    options?: Configuration,
  ): Promise<UpsertCatalogEntityResponse> {
    const requestContextPromise = this.requestFactory.upsertCatalogEntity(
      param.body,
      options,
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
