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
import { CreateComponentRequest } from "../models/CreateComponentRequest";
import { CreateDegradationRequest } from "../models/CreateDegradationRequest";
import { CreateStatusPageRequest } from "../models/CreateStatusPageRequest";
import { Degradation } from "../models/Degradation";
import { DegradationArray } from "../models/DegradationArray";
import { PatchComponentRequest } from "../models/PatchComponentRequest";
import { PatchDegradationRequest } from "../models/PatchDegradationRequest";
import { PatchStatusPageRequest } from "../models/PatchStatusPageRequest";
import { StatusPage } from "../models/StatusPage";
import { StatusPageArray } from "../models/StatusPageArray";
import { StatusPagesComponent } from "../models/StatusPagesComponent";
import { StatusPagesComponentArray } from "../models/StatusPagesComponentArray";

export class StatusPagesApiRequestFactory extends BaseAPIRequestFactory {
  public async createComponent(
    pageId: string,
    body: CreateComponentRequest,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "createComponent");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createComponent");
    }

    // Path Params
    const localVarPath = "/api/v2/statuspages/{page_id}/components".replace(
      "{page_id}",
      encodeURIComponent(String(pageId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.createComponent")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CreateComponentRequest", ""),
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

  public async createDegradation(
    pageId: string,
    body: CreateDegradationRequest,
    notifySubscribers?: boolean,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "createDegradation");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createDegradation");
    }

    // Path Params
    const localVarPath = "/api/v2/statuspages/{page_id}/degradations".replace(
      "{page_id}",
      encodeURIComponent(String(pageId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.createDegradation")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (notifySubscribers !== undefined) {
      requestContext.setQueryParam(
        "notify_subscribers",
        ObjectSerializer.serialize(notifySubscribers, "boolean", ""),
        ""
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CreateDegradationRequest", ""),
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

  public async createStatusPage(
    body: CreateStatusPageRequest,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createStatusPage");
    }

    // Path Params
    const localVarPath = "/api/v2/statuspages";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.createStatusPage")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CreateStatusPageRequest", ""),
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

  public async deleteComponent(
    pageId: string,
    componentId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "deleteComponent");
    }

    // verify required parameter 'componentId' is not null or undefined
    if (componentId === null || componentId === undefined) {
      throw new RequiredError("componentId", "deleteComponent");
    }

    // Path Params
    const localVarPath =
      "/api/v2/statuspages/{page_id}/components/{component_id}"
        .replace("{page_id}", encodeURIComponent(String(pageId)))
        .replace("{component_id}", encodeURIComponent(String(componentId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.deleteComponent")
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

  public async deleteDegradation(
    pageId: string,
    degradationId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "deleteDegradation");
    }

    // verify required parameter 'degradationId' is not null or undefined
    if (degradationId === null || degradationId === undefined) {
      throw new RequiredError("degradationId", "deleteDegradation");
    }

    // Path Params
    const localVarPath =
      "/api/v2/statuspages/{page_id}/degradations/{degradation_id}"
        .replace("{page_id}", encodeURIComponent(String(pageId)))
        .replace("{degradation_id}", encodeURIComponent(String(degradationId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.deleteDegradation")
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

  public async deleteStatusPage(
    pageId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "deleteStatusPage");
    }

    // Path Params
    const localVarPath = "/api/v2/statuspages/{page_id}".replace(
      "{page_id}",
      encodeURIComponent(String(pageId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.deleteStatusPage")
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

  public async getComponent(
    pageId: string,
    componentId: string,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "getComponent");
    }

    // verify required parameter 'componentId' is not null or undefined
    if (componentId === null || componentId === undefined) {
      throw new RequiredError("componentId", "getComponent");
    }

    // Path Params
    const localVarPath =
      "/api/v2/statuspages/{page_id}/components/{component_id}"
        .replace("{page_id}", encodeURIComponent(String(pageId)))
        .replace("{component_id}", encodeURIComponent(String(componentId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.getComponent")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
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

  public async getDegradation(
    pageId: string,
    degradationId: string,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "getDegradation");
    }

    // verify required parameter 'degradationId' is not null or undefined
    if (degradationId === null || degradationId === undefined) {
      throw new RequiredError("degradationId", "getDegradation");
    }

    // Path Params
    const localVarPath =
      "/api/v2/statuspages/{page_id}/degradations/{degradation_id}"
        .replace("{page_id}", encodeURIComponent(String(pageId)))
        .replace("{degradation_id}", encodeURIComponent(String(degradationId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.getDegradation")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
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

  public async getStatusPage(
    pageId: string,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "getStatusPage");
    }

    // Path Params
    const localVarPath = "/api/v2/statuspages/{page_id}".replace(
      "{page_id}",
      encodeURIComponent(String(pageId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.getStatusPage")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
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

  public async listComponents(
    pageId: string,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "listComponents");
    }

    // Path Params
    const localVarPath = "/api/v2/statuspages/{page_id}/components".replace(
      "{page_id}",
      encodeURIComponent(String(pageId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.listComponents")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
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

  public async listDegradations(
    filterPageId?: string,
    pageOffset?: number,
    pageLimit?: number,
    include?: string,
    filterStatus?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/statuspages/degradations";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.listDegradations")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filterPageId !== undefined) {
      requestContext.setQueryParam(
        "filter[page_id]",
        ObjectSerializer.serialize(filterPageId, "string", ""),
        ""
      );
    }
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        ObjectSerializer.serialize(pageOffset, "number", ""),
        ""
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        ObjectSerializer.serialize(pageLimit, "number", ""),
        ""
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listStatusPages(
    pageOffset?: number,
    pageLimit?: number,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/statuspages";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.listStatusPages")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        ObjectSerializer.serialize(pageOffset, "number", ""),
        ""
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        ObjectSerializer.serialize(pageLimit, "number", ""),
        ""
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
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

  public async updateComponent(
    pageId: string,
    componentId: string,
    body: PatchComponentRequest,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "updateComponent");
    }

    // verify required parameter 'componentId' is not null or undefined
    if (componentId === null || componentId === undefined) {
      throw new RequiredError("componentId", "updateComponent");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateComponent");
    }

    // Path Params
    const localVarPath =
      "/api/v2/statuspages/{page_id}/components/{component_id}"
        .replace("{page_id}", encodeURIComponent(String(pageId)))
        .replace("{component_id}", encodeURIComponent(String(componentId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.updateComponent")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "PatchComponentRequest", ""),
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

  public async updateDegradation(
    pageId: string,
    degradationId: string,
    body: PatchDegradationRequest,
    notifySubscribers?: boolean,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "updateDegradation");
    }

    // verify required parameter 'degradationId' is not null or undefined
    if (degradationId === null || degradationId === undefined) {
      throw new RequiredError("degradationId", "updateDegradation");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateDegradation");
    }

    // Path Params
    const localVarPath =
      "/api/v2/statuspages/{page_id}/degradations/{degradation_id}"
        .replace("{page_id}", encodeURIComponent(String(pageId)))
        .replace("{degradation_id}", encodeURIComponent(String(degradationId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.updateDegradation")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (notifySubscribers !== undefined) {
      requestContext.setQueryParam(
        "notify_subscribers",
        ObjectSerializer.serialize(notifySubscribers, "boolean", ""),
        ""
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "PatchDegradationRequest", ""),
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

  public async updateStatusPage(
    pageId: string,
    body: PatchStatusPageRequest,
    deleteSubscribers?: boolean,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'pageId' is not null or undefined
    if (pageId === null || pageId === undefined) {
      throw new RequiredError("pageId", "updateStatusPage");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateStatusPage");
    }

    // Path Params
    const localVarPath = "/api/v2/statuspages/{page_id}".replace(
      "{page_id}",
      encodeURIComponent(String(pageId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.StatusPagesApi.updateStatusPage")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (deleteSubscribers !== undefined) {
      requestContext.setQueryParam(
        "delete_subscribers",
        ObjectSerializer.serialize(deleteSubscribers, "boolean", ""),
        ""
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "PatchStatusPageRequest", ""),
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

export class StatusPagesApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createComponent
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createComponent(
    response: ResponseContext
  ): Promise<StatusPagesComponent> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: StatusPagesComponent = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "StatusPagesComponent"
      ) as StatusPagesComponent;
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
      const body: StatusPagesComponent = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "StatusPagesComponent",
        ""
      ) as StatusPagesComponent;
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
   * @params response Response returned by the server for a request to createDegradation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createDegradation(
    response: ResponseContext
  ): Promise<Degradation> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: Degradation = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Degradation"
      ) as Degradation;
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
      const body: Degradation = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Degradation",
        ""
      ) as Degradation;
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
   * @params response Response returned by the server for a request to createStatusPage
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createStatusPage(
    response: ResponseContext
  ): Promise<StatusPage> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: StatusPage = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "StatusPage"
      ) as StatusPage;
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
      const body: StatusPage = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "StatusPage",
        ""
      ) as StatusPage;
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
   * @params response Response returned by the server for a request to deleteComponent
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteComponent(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
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
   * @params response Response returned by the server for a request to deleteDegradation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteDegradation(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
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
   * @params response Response returned by the server for a request to deleteStatusPage
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteStatusPage(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
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
   * @params response Response returned by the server for a request to getComponent
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getComponent(
    response: ResponseContext
  ): Promise<StatusPagesComponent> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: StatusPagesComponent = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "StatusPagesComponent"
      ) as StatusPagesComponent;
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
      const body: StatusPagesComponent = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "StatusPagesComponent",
        ""
      ) as StatusPagesComponent;
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
   * @params response Response returned by the server for a request to getDegradation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getDegradation(response: ResponseContext): Promise<Degradation> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: Degradation = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Degradation"
      ) as Degradation;
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
      const body: Degradation = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Degradation",
        ""
      ) as Degradation;
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
   * @params response Response returned by the server for a request to getStatusPage
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getStatusPage(response: ResponseContext): Promise<StatusPage> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: StatusPage = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "StatusPage"
      ) as StatusPage;
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
      const body: StatusPage = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "StatusPage",
        ""
      ) as StatusPage;
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
   * @params response Response returned by the server for a request to listComponents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listComponents(
    response: ResponseContext
  ): Promise<StatusPagesComponentArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: StatusPagesComponentArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "StatusPagesComponentArray"
      ) as StatusPagesComponentArray;
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
      const body: StatusPagesComponentArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "StatusPagesComponentArray",
        ""
      ) as StatusPagesComponentArray;
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
   * @params response Response returned by the server for a request to listDegradations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listDegradations(
    response: ResponseContext
  ): Promise<DegradationArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DegradationArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DegradationArray"
      ) as DegradationArray;
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
      const body: DegradationArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DegradationArray",
        ""
      ) as DegradationArray;
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
   * @params response Response returned by the server for a request to listStatusPages
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listStatusPages(
    response: ResponseContext
  ): Promise<StatusPageArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: StatusPageArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "StatusPageArray"
      ) as StatusPageArray;
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
      const body: StatusPageArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "StatusPageArray",
        ""
      ) as StatusPageArray;
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
   * @params response Response returned by the server for a request to updateComponent
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateComponent(
    response: ResponseContext
  ): Promise<StatusPagesComponent> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: StatusPagesComponent = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "StatusPagesComponent"
      ) as StatusPagesComponent;
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
      const body: StatusPagesComponent = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "StatusPagesComponent",
        ""
      ) as StatusPagesComponent;
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
   * @params response Response returned by the server for a request to updateDegradation
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateDegradation(
    response: ResponseContext
  ): Promise<Degradation> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: Degradation = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Degradation"
      ) as Degradation;
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
      const body: Degradation = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Degradation",
        ""
      ) as Degradation;
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
   * @params response Response returned by the server for a request to updateStatusPage
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateStatusPage(
    response: ResponseContext
  ): Promise<StatusPage> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: StatusPage = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "StatusPage"
      ) as StatusPage;
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
      const body: StatusPage = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "StatusPage",
        ""
      ) as StatusPage;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface StatusPagesApiCreateComponentRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * @type CreateComponentRequest
   */
  body: CreateComponentRequest;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page, group.
   * @type string
   */
  include?: string;
}

export interface StatusPagesApiCreateDegradationRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * @type CreateDegradationRequest
   */
  body: CreateDegradationRequest;
  /**
   * Whether to notify page subscribers of the degradation.
   * @type boolean
   */
  notifySubscribers?: boolean;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
   * @type string
   */
  include?: string;
}

export interface StatusPagesApiCreateStatusPageRequest {
  /**
   * @type CreateStatusPageRequest
   */
  body: CreateStatusPageRequest;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user.
   * @type string
   */
  include?: string;
}

export interface StatusPagesApiDeleteComponentRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * The ID of the component.
   * @type string
   */
  componentId: string;
}

export interface StatusPagesApiDeleteDegradationRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * The ID of the degradation.
   * @type string
   */
  degradationId: string;
}

export interface StatusPagesApiDeleteStatusPageRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
}

export interface StatusPagesApiGetComponentRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * The ID of the component.
   * @type string
   */
  componentId: string;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page, group.
   * @type string
   */
  include?: string;
}

export interface StatusPagesApiGetDegradationRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * The ID of the degradation.
   * @type string
   */
  degradationId: string;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
   * @type string
   */
  include?: string;
}

export interface StatusPagesApiGetStatusPageRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user.
   * @type string
   */
  include?: string;
}

export interface StatusPagesApiListComponentsRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page, group.
   * @type string
   */
  include?: string;
}

export interface StatusPagesApiListDegradationsRequest {
  /**
   * Optional page id filter.
   * @type string
   */
  filterPageId?: string;
  /**
   * Offset to use as the start of the page.
   * @type number
   */
  pageOffset?: number;
  /**
   * The number of degradations to return per page.
   * @type number
   */
  pageLimit?: number;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
   * @type string
   */
  include?: string;
  /**
   * Optional degradation status filter. Supported values: investigating, identified, monitoring, resolved.
   * @type string
   */
  filterStatus?: string;
}

export interface StatusPagesApiListStatusPagesRequest {
  /**
   * Offset to use as the start of the page.
   * @type number
   */
  pageOffset?: number;
  /**
   * The number of status pages to return per page.
   * @type number
   */
  pageLimit?: number;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user.
   * @type string
   */
  include?: string;
}

export interface StatusPagesApiUpdateComponentRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * The ID of the component.
   * @type string
   */
  componentId: string;
  /**
   * @type PatchComponentRequest
   */
  body: PatchComponentRequest;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page, group.
   * @type string
   */
  include?: string;
}

export interface StatusPagesApiUpdateDegradationRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * The ID of the degradation.
   * @type string
   */
  degradationId: string;
  /**
   * @type PatchDegradationRequest
   */
  body: PatchDegradationRequest;
  /**
   * Whether to notify page subscribers of the degradation.
   * @type boolean
   */
  notifySubscribers?: boolean;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
   * @type string
   */
  include?: string;
}

export interface StatusPagesApiUpdateStatusPageRequest {
  /**
   * The ID of the status page.
   * @type string
   */
  pageId: string;
  /**
   * @type PatchStatusPageRequest
   */
  body: PatchStatusPageRequest;
  /**
   * Whether to delete existing subscribers when updating a status page's type.
   * @type boolean
   */
  deleteSubscribers?: boolean;
  /**
   * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user.
   * @type string
   */
  include?: string;
}

export class StatusPagesApi {
  private requestFactory: StatusPagesApiRequestFactory;
  private responseProcessor: StatusPagesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: StatusPagesApiRequestFactory,
    responseProcessor?: StatusPagesApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new StatusPagesApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new StatusPagesApiResponseProcessor();
  }

  /**
   * Creates a new component.
   * @param param The request object
   */
  public createComponent(
    param: StatusPagesApiCreateComponentRequest,
    options?: Configuration
  ): Promise<StatusPagesComponent> {
    const requestContextPromise = this.requestFactory.createComponent(
      param.pageId,
      param.body,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createComponent(responseContext);
        });
    });
  }

  /**
   * Creates a new degradation.
   * @param param The request object
   */
  public createDegradation(
    param: StatusPagesApiCreateDegradationRequest,
    options?: Configuration
  ): Promise<Degradation> {
    const requestContextPromise = this.requestFactory.createDegradation(
      param.pageId,
      param.body,
      param.notifySubscribers,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createDegradation(responseContext);
        });
    });
  }

  /**
   * Creates a new status page.
   * @param param The request object
   */
  public createStatusPage(
    param: StatusPagesApiCreateStatusPageRequest,
    options?: Configuration
  ): Promise<StatusPage> {
    const requestContextPromise = this.requestFactory.createStatusPage(
      param.body,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createStatusPage(responseContext);
        });
    });
  }

  /**
   * Deletes a component by its ID.
   * @param param The request object
   */
  public deleteComponent(
    param: StatusPagesApiDeleteComponentRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteComponent(
      param.pageId,
      param.componentId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteComponent(responseContext);
        });
    });
  }

  /**
   * Deletes a degradation by its ID.
   * @param param The request object
   */
  public deleteDegradation(
    param: StatusPagesApiDeleteDegradationRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteDegradation(
      param.pageId,
      param.degradationId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteDegradation(responseContext);
        });
    });
  }

  /**
   * Deletes a status page by its ID.
   * @param param The request object
   */
  public deleteStatusPage(
    param: StatusPagesApiDeleteStatusPageRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteStatusPage(
      param.pageId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteStatusPage(responseContext);
        });
    });
  }

  /**
   * Retrieves a specific component by its ID.
   * @param param The request object
   */
  public getComponent(
    param: StatusPagesApiGetComponentRequest,
    options?: Configuration
  ): Promise<StatusPagesComponent> {
    const requestContextPromise = this.requestFactory.getComponent(
      param.pageId,
      param.componentId,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getComponent(responseContext);
        });
    });
  }

  /**
   * Retrieves a specific degradation by its ID.
   * @param param The request object
   */
  public getDegradation(
    param: StatusPagesApiGetDegradationRequest,
    options?: Configuration
  ): Promise<Degradation> {
    const requestContextPromise = this.requestFactory.getDegradation(
      param.pageId,
      param.degradationId,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getDegradation(responseContext);
        });
    });
  }

  /**
   * Retrieves a specific status page by its ID.
   * @param param The request object
   */
  public getStatusPage(
    param: StatusPagesApiGetStatusPageRequest,
    options?: Configuration
  ): Promise<StatusPage> {
    const requestContextPromise = this.requestFactory.getStatusPage(
      param.pageId,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getStatusPage(responseContext);
        });
    });
  }

  /**
   * Lists all components for a status page.
   * @param param The request object
   */
  public listComponents(
    param: StatusPagesApiListComponentsRequest,
    options?: Configuration
  ): Promise<StatusPagesComponentArray> {
    const requestContextPromise = this.requestFactory.listComponents(
      param.pageId,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listComponents(responseContext);
        });
    });
  }

  /**
   * Lists all degradations for the organization. Optionally filter by status and page.
   * @param param The request object
   */
  public listDegradations(
    param: StatusPagesApiListDegradationsRequest = {},
    options?: Configuration
  ): Promise<DegradationArray> {
    const requestContextPromise = this.requestFactory.listDegradations(
      param.filterPageId,
      param.pageOffset,
      param.pageLimit,
      param.include,
      param.filterStatus,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listDegradations(responseContext);
        });
    });
  }

  /**
   * Lists all status pages for the organization.
   * @param param The request object
   */
  public listStatusPages(
    param: StatusPagesApiListStatusPagesRequest = {},
    options?: Configuration
  ): Promise<StatusPageArray> {
    const requestContextPromise = this.requestFactory.listStatusPages(
      param.pageOffset,
      param.pageLimit,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listStatusPages(responseContext);
        });
    });
  }

  /**
   * Updates an existing component's attributes.
   * @param param The request object
   */
  public updateComponent(
    param: StatusPagesApiUpdateComponentRequest,
    options?: Configuration
  ): Promise<StatusPagesComponent> {
    const requestContextPromise = this.requestFactory.updateComponent(
      param.pageId,
      param.componentId,
      param.body,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateComponent(responseContext);
        });
    });
  }

  /**
   * Updates an existing degradation's attributes.
   * @param param The request object
   */
  public updateDegradation(
    param: StatusPagesApiUpdateDegradationRequest,
    options?: Configuration
  ): Promise<Degradation> {
    const requestContextPromise = this.requestFactory.updateDegradation(
      param.pageId,
      param.degradationId,
      param.body,
      param.notifySubscribers,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateDegradation(responseContext);
        });
    });
  }

  /**
   * Updates an existing status page's attributes.
   * @param param The request object
   */
  public updateStatusPage(
    param: StatusPagesApiUpdateStatusPageRequest,
    options?: Configuration
  ): Promise<StatusPage> {
    const requestContextPromise = this.requestFactory.updateStatusPage(
      param.pageId,
      param.body,
      param.deleteSubscribers,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateStatusPage(responseContext);
        });
    });
  }
}
