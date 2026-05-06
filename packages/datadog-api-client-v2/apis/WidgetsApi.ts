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
import { CreateOrUpdateWidgetRequest } from "../models/CreateOrUpdateWidgetRequest";
import { WidgetExperienceType } from "../models/WidgetExperienceType";
import { WidgetListResponse } from "../models/WidgetListResponse";
import { WidgetResponse } from "../models/WidgetResponse";
import { WidgetType } from "../models/WidgetType";

export class WidgetsApiRequestFactory extends BaseAPIRequestFactory {
  public async createWidget(
    experienceType: WidgetExperienceType,
    body: CreateOrUpdateWidgetRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'experienceType' is not null or undefined
    if (experienceType === null || experienceType === undefined) {
      throw new RequiredError("experienceType", "createWidget");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createWidget");
    }

    // Path Params
    const localVarPath = "/api/v2/widgets/{experience_type}".replace(
      "{experience_type}",
      encodeURIComponent(String(experienceType))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.WidgetsApi.createWidget")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CreateOrUpdateWidgetRequest", ""),
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

  public async deleteWidget(
    experienceType: WidgetExperienceType,
    uuid: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'experienceType' is not null or undefined
    if (experienceType === null || experienceType === undefined) {
      throw new RequiredError("experienceType", "deleteWidget");
    }

    // verify required parameter 'uuid' is not null or undefined
    if (uuid === null || uuid === undefined) {
      throw new RequiredError("uuid", "deleteWidget");
    }

    // Path Params
    const localVarPath = "/api/v2/widgets/{experience_type}/{uuid}"
      .replace("{experience_type}", encodeURIComponent(String(experienceType)))
      .replace("{uuid}", encodeURIComponent(String(uuid)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.WidgetsApi.deleteWidget")
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

  public async getWidget(
    experienceType: WidgetExperienceType,
    uuid: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'experienceType' is not null or undefined
    if (experienceType === null || experienceType === undefined) {
      throw new RequiredError("experienceType", "getWidget");
    }

    // verify required parameter 'uuid' is not null or undefined
    if (uuid === null || uuid === undefined) {
      throw new RequiredError("uuid", "getWidget");
    }

    // Path Params
    const localVarPath = "/api/v2/widgets/{experience_type}/{uuid}"
      .replace("{experience_type}", encodeURIComponent(String(experienceType)))
      .replace("{uuid}", encodeURIComponent(String(uuid)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.WidgetsApi.getWidget")
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

  public async searchWidgets(
    experienceType: WidgetExperienceType,
    filterWidgetType?: WidgetType,
    filterCreatorHandle?: string,
    filterIsFavorited?: boolean,
    filterTitle?: string,
    filterTags?: string,
    sort?: string,
    pageNumber?: number,
    pageSize?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'experienceType' is not null or undefined
    if (experienceType === null || experienceType === undefined) {
      throw new RequiredError("experienceType", "searchWidgets");
    }

    // Path Params
    const localVarPath = "/api/v2/widgets/{experience_type}".replace(
      "{experience_type}",
      encodeURIComponent(String(experienceType))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.WidgetsApi.searchWidgets")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filterWidgetType !== undefined) {
      requestContext.setQueryParam(
        "filter[widgetType]",
        ObjectSerializer.serialize(filterWidgetType, "WidgetType", ""),
        ""
      );
    }
    if (filterCreatorHandle !== undefined) {
      requestContext.setQueryParam(
        "filter[creatorHandle]",
        ObjectSerializer.serialize(filterCreatorHandle, "string", ""),
        ""
      );
    }
    if (filterIsFavorited !== undefined) {
      requestContext.setQueryParam(
        "filter[isFavorited]",
        ObjectSerializer.serialize(filterIsFavorited, "boolean", ""),
        ""
      );
    }
    if (filterTitle !== undefined) {
      requestContext.setQueryParam(
        "filter[title]",
        ObjectSerializer.serialize(filterTitle, "string", ""),
        ""
      );
    }
    if (filterTags !== undefined) {
      requestContext.setQueryParam(
        "filter[tags]",
        ObjectSerializer.serialize(filterTags, "string", ""),
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
    if (pageNumber !== undefined) {
      requestContext.setQueryParam(
        "page[number]",
        ObjectSerializer.serialize(pageNumber, "number", ""),
        ""
      );
    }
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page[size]",
        ObjectSerializer.serialize(pageSize, "number", ""),
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

  public async updateWidget(
    experienceType: WidgetExperienceType,
    uuid: string,
    body: CreateOrUpdateWidgetRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'experienceType' is not null or undefined
    if (experienceType === null || experienceType === undefined) {
      throw new RequiredError("experienceType", "updateWidget");
    }

    // verify required parameter 'uuid' is not null or undefined
    if (uuid === null || uuid === undefined) {
      throw new RequiredError("uuid", "updateWidget");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateWidget");
    }

    // Path Params
    const localVarPath = "/api/v2/widgets/{experience_type}/{uuid}"
      .replace("{experience_type}", encodeURIComponent(String(experienceType)))
      .replace("{uuid}", encodeURIComponent(String(uuid)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.WidgetsApi.updateWidget")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "CreateOrUpdateWidgetRequest", ""),
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

export class WidgetsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createWidget
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createWidget(
    response: ResponseContext
  ): Promise<WidgetResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: WidgetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WidgetResponse"
      ) as WidgetResponse;
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
      const body: WidgetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WidgetResponse",
        ""
      ) as WidgetResponse;
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
   * @params response Response returned by the server for a request to deleteWidget
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteWidget(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to getWidget
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getWidget(response: ResponseContext): Promise<WidgetResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: WidgetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WidgetResponse"
      ) as WidgetResponse;
      return body;
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
      const body: WidgetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WidgetResponse",
        ""
      ) as WidgetResponse;
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
   * @params response Response returned by the server for a request to searchWidgets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchWidgets(
    response: ResponseContext
  ): Promise<WidgetListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: WidgetListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WidgetListResponse"
      ) as WidgetListResponse;
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
      const body: WidgetListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WidgetListResponse",
        ""
      ) as WidgetListResponse;
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
   * @params response Response returned by the server for a request to updateWidget
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateWidget(
    response: ResponseContext
  ): Promise<WidgetResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: WidgetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WidgetResponse"
      ) as WidgetResponse;
      return body;
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
      const body: WidgetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "WidgetResponse",
        ""
      ) as WidgetResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface WidgetsApiCreateWidgetRequest {
  /**
   * The experience type for the widget.
   * @type WidgetExperienceType
   */
  experienceType: WidgetExperienceType;
  /**
   * Widget request body. The `definition` object's required fields vary
   * by `widget.definition.type`: every type requires `requests`, and
   * some types require additional fields (e.g. `cloud_cost_summary`
   * requires `graph_options`, `geomap` requires `style` and `view`).
   * The example below shows a complete `cloud_cost_summary` payload
   * for the `ccm_reports` experience type.
   * @type CreateOrUpdateWidgetRequest
   */
  body: CreateOrUpdateWidgetRequest;
}

export interface WidgetsApiDeleteWidgetRequest {
  /**
   * The experience type for the widget.
   * @type WidgetExperienceType
   */
  experienceType: WidgetExperienceType;
  /**
   * The UUID of the widget.
   * @type string
   */
  uuid: string;
}

export interface WidgetsApiGetWidgetRequest {
  /**
   * The experience type for the widget.
   * @type WidgetExperienceType
   */
  experienceType: WidgetExperienceType;
  /**
   * The UUID of the widget.
   * @type string
   */
  uuid: string;
}

export interface WidgetsApiSearchWidgetsRequest {
  /**
   * The experience type for the widget.
   * @type WidgetExperienceType
   */
  experienceType: WidgetExperienceType;
  /**
   * Filter widgets by widget type.
   * @type WidgetType
   */
  filterWidgetType?: WidgetType;
  /**
   * Filter widgets by the email handle of the creator.
   * @type string
   */
  filterCreatorHandle?: string;
  /**
   * Filter to only widgets favorited by the current user.
   * @type boolean
   */
  filterIsFavorited?: boolean;
  /**
   * Filter widgets by title (substring match).
   * @type string
   */
  filterTitle?: string;
  /**
   * Filter widgets by tags. Format as bracket-delimited CSV, e.g. `[tag1,tag2]`.
   * @type string
   */
  filterTags?: string;
  /**
   * Sort field for the results.
   *
   * **`title`, `created_at`, `modified_at`** — both ascending and descending are
   * supported. Use the bare field name for ascending (e.g. `sort=title`) or prefix
   * with `-` for descending (e.g. `sort=-modified_at`).
   *
   * **`is_favorited`** — returns favorites-first ordering (favorited widgets first,
   * then the rest). Direction is fixed; the `-` prefix is ignored for this field.
   * @type string
   */
  sort?: string;
  /**
   * Page number for pagination (0-indexed).
   * @type number
   */
  pageNumber?: number;
  /**
   * Number of widgets per page.
   * @type number
   */
  pageSize?: number;
}

export interface WidgetsApiUpdateWidgetRequest {
  /**
   * The experience type for the widget.
   * @type WidgetExperienceType
   */
  experienceType: WidgetExperienceType;
  /**
   * The UUID of the widget.
   * @type string
   */
  uuid: string;
  /**
   * Widget request body. The `definition` object's required fields vary
   * by `widget.definition.type`; see `CreateWidget` above for a complete
   * worked payload. Update is a full replacement of the widget definition.
   * @type CreateOrUpdateWidgetRequest
   */
  body: CreateOrUpdateWidgetRequest;
}

export class WidgetsApi {
  private requestFactory: WidgetsApiRequestFactory;
  private responseProcessor: WidgetsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: WidgetsApiRequestFactory,
    responseProcessor?: WidgetsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new WidgetsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new WidgetsApiResponseProcessor();
  }

  /**
   * Create a new widget for a given experience type.
   * @param param The request object
   */
  public createWidget(
    param: WidgetsApiCreateWidgetRequest,
    options?: Configuration
  ): Promise<WidgetResponse> {
    const requestContextPromise = this.requestFactory.createWidget(
      param.experienceType,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createWidget(responseContext);
        });
    });
  }

  /**
   * Soft-delete a widget by its UUID for a given experience type.
   * @param param The request object
   */
  public deleteWidget(
    param: WidgetsApiDeleteWidgetRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteWidget(
      param.experienceType,
      param.uuid,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteWidget(responseContext);
        });
    });
  }

  /**
   * Retrieve a widget by its UUID for a given experience type.
   * @param param The request object
   */
  public getWidget(
    param: WidgetsApiGetWidgetRequest,
    options?: Configuration
  ): Promise<WidgetResponse> {
    const requestContextPromise = this.requestFactory.getWidget(
      param.experienceType,
      param.uuid,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getWidget(responseContext);
        });
    });
  }

  /**
   * Search and list widgets for a given experience type, with filtering, sorting, and pagination.
   *
   * **Response meta** carries totals scoped to the current filter:
   * - `filtered_total` — widgets matching the filter.
   * - `created_by_you_total` — among the matches, how many the current user created.
   * - `favorited_by_you_total` — among the matches, how many the current user has favorited.
   * - `created_by_anyone_total` — total widgets in the experience type, ignoring filters.
   *
   * Each returned widget includes `is_favorited` reflecting the current user's favorite status.
   * Favoriting itself is performed through the shared favorites API, not this endpoint.
   * @param param The request object
   */
  public searchWidgets(
    param: WidgetsApiSearchWidgetsRequest,
    options?: Configuration
  ): Promise<WidgetListResponse> {
    const requestContextPromise = this.requestFactory.searchWidgets(
      param.experienceType,
      param.filterWidgetType,
      param.filterCreatorHandle,
      param.filterIsFavorited,
      param.filterTitle,
      param.filterTags,
      param.sort,
      param.pageNumber,
      param.pageSize,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchWidgets(responseContext);
        });
    });
  }

  /**
   * Update a widget by its UUID for a given experience type. This performs a full replacement of the widget definition.
   * @param param The request object
   */
  public updateWidget(
    param: WidgetsApiUpdateWidgetRequest,
    options?: Configuration
  ): Promise<WidgetResponse> {
    const requestContextPromise = this.requestFactory.updateWidget(
      param.experienceType,
      param.uuid,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateWidget(responseContext);
        });
    });
  }
}
