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
import { EntityResponseArray } from "../models/EntityResponseArray";
import { EntitySchemaVersion } from "../models/EntitySchemaVersion";
import { IDPConfigRequest } from "../models/IDPConfigRequest";
import { IDPConfigResponse } from "../models/IDPConfigResponse";
import { IncludeType } from "../models/IncludeType";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { KindData } from "../models/KindData";
import { ListEntityCatalogResponse } from "../models/ListEntityCatalogResponse";
import { ListKindCatalogResponse } from "../models/ListKindCatalogResponse";
import { ListRelationCatalogResponse } from "../models/ListRelationCatalogResponse";
import { RecommendedEntityID } from "../models/RecommendedEntityID";
import { RecommendedEntityWithSchema } from "../models/RecommendedEntityWithSchema";
import { RelationIncludeType } from "../models/RelationIncludeType";
import { RelationResponse } from "../models/RelationResponse";
import { RelationType } from "../models/RelationType";
import { UpsertCatalogEntityRequest } from "../models/UpsertCatalogEntityRequest";
import { UpsertCatalogEntityResponse } from "../models/UpsertCatalogEntityResponse";
import { UpsertCatalogKindRequest } from "../models/UpsertCatalogKindRequest";
import { UpsertCatalogKindResponse } from "../models/UpsertCatalogKindResponse";

export class SoftwareCatalogApiRequestFactory extends BaseAPIRequestFactory {
  public async acceptRecommendedEntities(
    body: Array<RecommendedEntityWithSchema>,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'acceptRecommendedEntities'");
    if (!_config.unstableOperations["v2.acceptRecommendedEntities"]) {
      throw new Error(
        "Unstable operation 'acceptRecommendedEntities' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "acceptRecommendedEntities");
    }

    // Path Params
    const localVarPath = "/api/v2/catalog/recommended_entity/bulk_accept";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SoftwareCatalogApi.acceptRecommendedEntities")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "Array<RecommendedEntityWithSchema>",
        ""
      ),
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

  public async convertCatalogEntities(
    targetVersion: EntitySchemaVersion,
    body: UpsertCatalogEntityRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'convertCatalogEntities'");
    if (!_config.unstableOperations["v2.convertCatalogEntities"]) {
      throw new Error(
        "Unstable operation 'convertCatalogEntities' is disabled"
      );
    }

    // verify required parameter 'targetVersion' is not null or undefined
    if (targetVersion === null || targetVersion === undefined) {
      throw new RequiredError("targetVersion", "convertCatalogEntities");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "convertCatalogEntities");
    }

    // Path Params
    const localVarPath = "/api/v2/catalog/entity/convert";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SoftwareCatalogApi.convertCatalogEntities")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (targetVersion !== undefined) {
      requestContext.setQueryParam(
        "target_version",
        ObjectSerializer.serialize(targetVersion, "EntitySchemaVersion", ""),
        ""
      );
    }

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
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async declineRecommendedEntities(
    body: Array<RecommendedEntityID>,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'declineRecommendedEntities'");
    if (!_config.unstableOperations["v2.declineRecommendedEntities"]) {
      throw new Error(
        "Unstable operation 'declineRecommendedEntities' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "declineRecommendedEntities");
    }

    // Path Params
    const localVarPath = "/api/v2/catalog/recommended_entity/bulk_decline";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SoftwareCatalogApi.declineRecommendedEntities")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "Array<RecommendedEntityID>", ""),
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
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteCatalogKind(
    kindId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'kindId' is not null or undefined
    if (kindId === null || kindId === undefined) {
      throw new RequiredError("kindId", "deleteCatalogKind");
    }

    // Path Params
    const localVarPath = "/api/v2/catalog/kind/{kind_id}".replace(
      "{kind_id}",
      encodeURIComponent(String(kindId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SoftwareCatalogApi.deleteCatalogKind")
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

  public async getIDPConfigValue(
    configName: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getIDPConfigValue'");
    if (!_config.unstableOperations["v2.getIDPConfigValue"]) {
      throw new Error("Unstable operation 'getIDPConfigValue' is disabled");
    }

    // verify required parameter 'configName' is not null or undefined
    if (configName === null || configName === undefined) {
      throw new RequiredError("configName", "getIDPConfigValue");
    }

    // Path Params
    const localVarPath = "/api/v2/idp/config/{config_name}".replace(
      "{config_name}",
      encodeURIComponent(String(configName))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SoftwareCatalogApi.getIDPConfigValue")
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
    includeDiscovered?: boolean,
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
    if (includeDiscovered !== undefined) {
      requestContext.setQueryParam(
        "includeDiscovered",
        ObjectSerializer.serialize(includeDiscovered, "boolean", ""),
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

  public async listCatalogKind(
    pageOffset?: number,
    pageLimit?: number,
    filterId?: string,
    filterName?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/catalog/kind";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SoftwareCatalogApi.listCatalogKind")
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
    if (filterName !== undefined) {
      requestContext.setQueryParam(
        "filter[name]",
        ObjectSerializer.serialize(filterName, "string", ""),
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

  public async listCatalogRelation(
    pageOffset?: number,
    pageLimit?: number,
    filterType?: RelationType,
    filterFromRef?: string,
    filterToRef?: string,
    include?: RelationIncludeType,
    includeDiscovered?: boolean,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/catalog/relation";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SoftwareCatalogApi.listCatalogRelation")
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
    if (filterType !== undefined) {
      requestContext.setQueryParam(
        "filter[type]",
        ObjectSerializer.serialize(filterType, "RelationType", ""),
        ""
      );
    }
    if (filterFromRef !== undefined) {
      requestContext.setQueryParam(
        "filter[from_ref]",
        ObjectSerializer.serialize(filterFromRef, "string", ""),
        ""
      );
    }
    if (filterToRef !== undefined) {
      requestContext.setQueryParam(
        "filter[to_ref]",
        ObjectSerializer.serialize(filterToRef, "string", ""),
        ""
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "RelationIncludeType", ""),
        ""
      );
    }
    if (includeDiscovered !== undefined) {
      requestContext.setQueryParam(
        "includeDiscovered",
        ObjectSerializer.serialize(includeDiscovered, "boolean", ""),
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

  public async previewCatalogEntities(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/catalog/entity/preview";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SoftwareCatalogApi.previewCatalogEntities")
      .makeRequestContext(localVarPath, HttpMethod.POST);
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

  public async triggerRecommendedEntities(
    body?: any,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'triggerRecommendedEntities'");
    if (!_config.unstableOperations["v2.triggerRecommendedEntities"]) {
      throw new Error(
        "Unstable operation 'triggerRecommendedEntities' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/catalog/recommended_entity/trigger";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SoftwareCatalogApi.triggerRecommendedEntities")
      .makeRequestContext(localVarPath, HttpMethod.POST);
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
      "AuthZ",
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
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async upsertCatalogKind(
    body: UpsertCatalogKindRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "upsertCatalogKind");
    }

    // Path Params
    const localVarPath = "/api/v2/catalog/kind";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SoftwareCatalogApi.upsertCatalogKind")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "UpsertCatalogKindRequest", ""),
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

  public async upsertIDPConfigValue(
    configName: string,
    body: IDPConfigRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'upsertIDPConfigValue'");
    if (!_config.unstableOperations["v2.upsertIDPConfigValue"]) {
      throw new Error("Unstable operation 'upsertIDPConfigValue' is disabled");
    }

    // verify required parameter 'configName' is not null or undefined
    if (configName === null || configName === undefined) {
      throw new RequiredError("configName", "upsertIDPConfigValue");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "upsertIDPConfigValue");
    }

    // Path Params
    const localVarPath = "/api/v2/idp/config/{config_name}".replace(
      "{config_name}",
      encodeURIComponent(String(configName))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SoftwareCatalogApi.upsertIDPConfigValue")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "IDPConfigRequest", ""),
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

export class SoftwareCatalogApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to acceptRecommendedEntities
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async acceptRecommendedEntities(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 202) {
      return;
    }
    if (response.httpStatusCode === 400) {
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
   * @params response Response returned by the server for a request to convertCatalogEntities
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async convertCatalogEntities(
    response: ResponseContext
  ): Promise<string> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: string = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "string"
      ) as string;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: string = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "string",
        ""
      ) as string;
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
   * @params response Response returned by the server for a request to declineRecommendedEntities
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async declineRecommendedEntities(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 400) {
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
   * @params response Response returned by the server for a request to deleteCatalogKind
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteCatalogKind(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
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
   * @params response Response returned by the server for a request to getIDPConfigValue
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIDPConfigValue(
    response: ResponseContext
  ): Promise<IDPConfigResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: IDPConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IDPConfigResponse"
      ) as IDPConfigResponse;
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
      const body: IDPConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IDPConfigResponse",
        ""
      ) as IDPConfigResponse;
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
   * @params response Response returned by the server for a request to listCatalogKind
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCatalogKind(
    response: ResponseContext
  ): Promise<ListKindCatalogResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ListKindCatalogResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListKindCatalogResponse"
      ) as ListKindCatalogResponse;
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
      const body: ListKindCatalogResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListKindCatalogResponse",
        ""
      ) as ListKindCatalogResponse;
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
   * @params response Response returned by the server for a request to listCatalogRelation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCatalogRelation(
    response: ResponseContext
  ): Promise<ListRelationCatalogResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ListRelationCatalogResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListRelationCatalogResponse"
      ) as ListRelationCatalogResponse;
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
      const body: ListRelationCatalogResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListRelationCatalogResponse",
        ""
      ) as ListRelationCatalogResponse;
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
   * @params response Response returned by the server for a request to previewCatalogEntities
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async previewCatalogEntities(
    response: ResponseContext
  ): Promise<EntityResponseArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 202) {
      const body: EntityResponseArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "EntityResponseArray"
      ) as EntityResponseArray;
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

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: EntityResponseArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "EntityResponseArray",
        ""
      ) as EntityResponseArray;
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
   * @params response Response returned by the server for a request to triggerRecommendedEntities
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async triggerRecommendedEntities(
    response: ResponseContext
  ): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 202) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any"
      ) as any;
      return body;
    }
    if (response.httpStatusCode === 400) {
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
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any;
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

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to upsertCatalogKind
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async upsertCatalogKind(
    response: ResponseContext
  ): Promise<UpsertCatalogKindResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 202) {
      const body: UpsertCatalogKindResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UpsertCatalogKindResponse"
      ) as UpsertCatalogKindResponse;
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
      const body: UpsertCatalogKindResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "UpsertCatalogKindResponse",
        ""
      ) as UpsertCatalogKindResponse;
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
   * @params response Response returned by the server for a request to upsertIDPConfigValue
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async upsertIDPConfigValue(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
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
      return;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface SoftwareCatalogApiAcceptRecommendedEntitiesRequest {
  /**
   * List of recommended entities to accept with their schemas.
   * @type Array<RecommendedEntityWithSchema>
   */
  body: Array<RecommendedEntityWithSchema>;
}

export interface SoftwareCatalogApiConvertCatalogEntitiesRequest {
  /**
   * The target schema version to convert entities to.
   * @type EntitySchemaVersion
   */
  targetVersion: EntitySchemaVersion;
  /**
   * Entity YAML or JSON to convert.
   * @type UpsertCatalogEntityRequest
   */
  body: UpsertCatalogEntityRequest;
}

export interface SoftwareCatalogApiDeclineRecommendedEntitiesRequest {
  /**
   * List of recommended entity IDs to decline.
   * @type Array<RecommendedEntityID>
   */
  body: Array<RecommendedEntityID>;
}

export interface SoftwareCatalogApiDeleteCatalogEntityRequest {
  /**
   * UUID or Entity Ref.
   * @type string
   */
  entityId: string;
}

export interface SoftwareCatalogApiDeleteCatalogKindRequest {
  /**
   * Entity kind.
   * @type string
   */
  kindId: string;
}

export interface SoftwareCatalogApiGetIDPConfigValueRequest {
  /**
   * The configuration key to retrieve.
   * @type string
   */
  configName: string;
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
  /**
   * If true, includes discovered services from APM and USM that do not have entity definitions.
   * @type boolean
   */
  includeDiscovered?: boolean;
}

export interface SoftwareCatalogApiListCatalogKindRequest {
  /**
   * Specific offset to use as the beginning of the returned page.
   * @type number
   */
  pageOffset?: number;
  /**
   * Maximum number of kinds in the response.
   * @type number
   */
  pageLimit?: number;
  /**
   * Filter entities by UUID.
   * @type string
   */
  filterId?: string;
  /**
   * Filter entities by name.
   * @type string
   */
  filterName?: string;
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
  /**
   * If true, includes relationships discovered by APM and USM.
   * @type boolean
   */
  includeDiscovered?: boolean;
}

export interface SoftwareCatalogApiTriggerRecommendedEntitiesRequest {
  /**
   * Optional request body for triggering recommended entity discovery.
   * @type any
   */
  body?: any;
}

export interface SoftwareCatalogApiUpsertCatalogEntityRequest {
  /**
   * Entity YAML or JSON.
   * @type UpsertCatalogEntityRequest
   */
  body: UpsertCatalogEntityRequest;
}

export interface SoftwareCatalogApiUpsertCatalogKindRequest {
  /**
   * Kind YAML or JSON.
   * @type UpsertCatalogKindRequest
   */
  body: UpsertCatalogKindRequest;
}

export interface SoftwareCatalogApiUpsertIDPConfigValueRequest {
  /**
   * The configuration key to create or update.
   * @type string
   */
  configName: string;
  /**
   * Configuration value to set.
   * @type IDPConfigRequest
   */
  body: IDPConfigRequest;
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
   * Accept multiple recommended entities in Software Catalog in a single request.
   * @param param The request object
   */
  public acceptRecommendedEntities(
    param: SoftwareCatalogApiAcceptRecommendedEntitiesRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.acceptRecommendedEntities(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.acceptRecommendedEntities(
            responseContext
          );
        });
    });
  }

  /**
   * Convert entities from one schema version to another in Software Catalog.
   * @param param The request object
   */
  public convertCatalogEntities(
    param: SoftwareCatalogApiConvertCatalogEntitiesRequest,
    options?: Configuration
  ): Promise<string> {
    const requestContextPromise = this.requestFactory.convertCatalogEntities(
      param.targetVersion,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.convertCatalogEntities(responseContext);
        });
    });
  }

  /**
   * Decline multiple recommended entities in Software Catalog in a single request.
   * @param param The request object
   */
  public declineRecommendedEntities(
    param: SoftwareCatalogApiDeclineRecommendedEntitiesRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.declineRecommendedEntities(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.declineRecommendedEntities(
            responseContext
          );
        });
    });
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
   * Delete a single kind in Software Catalog.
   * @param param The request object
   */
  public deleteCatalogKind(
    param: SoftwareCatalogApiDeleteCatalogKindRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteCatalogKind(
      param.kindId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteCatalogKind(responseContext);
        });
    });
  }

  /**
   * Get a configuration value for the Internal Developer Portal (IDP).
   * @param param The request object
   */
  public getIDPConfigValue(
    param: SoftwareCatalogApiGetIDPConfigValueRequest,
    options?: Configuration
  ): Promise<IDPConfigResponse> {
    const requestContextPromise = this.requestFactory.getIDPConfigValue(
      param.configName,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIDPConfigValue(responseContext);
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
      param.includeDiscovered,
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
        param.includeDiscovered,
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
   * Get a list of entity kinds from Software Catalog.
   * @param param The request object
   */
  public listCatalogKind(
    param: SoftwareCatalogApiListCatalogKindRequest = {},
    options?: Configuration
  ): Promise<ListKindCatalogResponse> {
    const requestContextPromise = this.requestFactory.listCatalogKind(
      param.pageOffset,
      param.pageLimit,
      param.filterId,
      param.filterName,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCatalogKind(responseContext);
        });
    });
  }

  /**
   * Provide a paginated version of listCatalogKind returning a generator with all the items.
   */
  public async *listCatalogKindWithPagination(
    param: SoftwareCatalogApiListCatalogKindRequest = {},
    options?: Configuration
  ): AsyncGenerator<KindData> {
    let pageSize = 100;
    if (param.pageLimit !== undefined) {
      pageSize = param.pageLimit;
    }
    param.pageLimit = pageSize;
    while (true) {
      const requestContext = await this.requestFactory.listCatalogKind(
        param.pageOffset,
        param.pageLimit,
        param.filterId,
        param.filterName,
        options
      );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

      const response = await this.responseProcessor.listCatalogKind(
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
   * Get a list of entity relations from Software Catalog.
   * @param param The request object
   */
  public listCatalogRelation(
    param: SoftwareCatalogApiListCatalogRelationRequest = {},
    options?: Configuration
  ): Promise<ListRelationCatalogResponse> {
    const requestContextPromise = this.requestFactory.listCatalogRelation(
      param.pageOffset,
      param.pageLimit,
      param.filterType,
      param.filterFromRef,
      param.filterToRef,
      param.include,
      param.includeDiscovered,
      options
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
    options?: Configuration
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
        param.includeDiscovered,
        options
      );
      const responseContext = await this.configuration.httpApi.send(
        requestContext
      );

      const response = await this.responseProcessor.listCatalogRelation(
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
   * @param param The request object
   */
  public previewCatalogEntities(
    options?: Configuration
  ): Promise<EntityResponseArray> {
    const requestContextPromise =
      this.requestFactory.previewCatalogEntities(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.previewCatalogEntities(responseContext);
        });
    });
  }

  /**
   * Trigger the discovery of recommended entities in Software Catalog.
   * @param param The request object
   */
  public triggerRecommendedEntities(
    param: SoftwareCatalogApiTriggerRecommendedEntitiesRequest = {},
    options?: Configuration
  ): Promise<any> {
    const requestContextPromise =
      this.requestFactory.triggerRecommendedEntities(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.triggerRecommendedEntities(
            responseContext
          );
        });
    });
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

  /**
   * Create or update kinds in Software Catalog.
   * @param param The request object
   */
  public upsertCatalogKind(
    param: SoftwareCatalogApiUpsertCatalogKindRequest,
    options?: Configuration
  ): Promise<UpsertCatalogKindResponse> {
    const requestContextPromise = this.requestFactory.upsertCatalogKind(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.upsertCatalogKind(responseContext);
        });
    });
  }

  /**
   * Create or update a configuration value for the Internal Developer Portal (IDP).
   * @param param The request object
   */
  public upsertIDPConfigValue(
    param: SoftwareCatalogApiUpsertIDPConfigValueRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.upsertIDPConfigValue(
      param.configName,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.upsertIDPConfigValue(responseContext);
        });
    });
  }
}
