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
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { RumRetentionQuotaConfigResponse } from "../models/RumRetentionQuotaConfigResponse";
import { RumRetentionQuotaConfigUpdateRequest } from "../models/RumRetentionQuotaConfigUpdateRequest";
import { RumRetentionQuotaScopeType } from "../models/RumRetentionQuotaScopeType";

export class RUMRetentionQuotasApiRequestFactory extends BaseAPIRequestFactory {
  public async deleteRumQuotaConfig(
    scopeType: RumRetentionQuotaScopeType,
    scopeId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'scopeType' is not null or undefined
    if (scopeType === null || scopeType === undefined) {
      throw new RequiredError("scopeType", "deleteRumQuotaConfig");
    }

    // verify required parameter 'scopeId' is not null or undefined
    if (scopeId === null || scopeId === undefined) {
      throw new RequiredError("scopeId", "deleteRumQuotaConfig");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/config/retention-quota/{scope_type}/{scope_id}"
        .replace("{scope_type}", encodeURIComponent(String(scopeType)))
        .replace("{scope_id}", encodeURIComponent(String(scopeId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMRetentionQuotasApi.deleteRumQuotaConfig")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getRumQuotaConfig(
    scopeType: RumRetentionQuotaScopeType,
    scopeId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'scopeType' is not null or undefined
    if (scopeType === null || scopeType === undefined) {
      throw new RequiredError("scopeType", "getRumQuotaConfig");
    }

    // verify required parameter 'scopeId' is not null or undefined
    if (scopeId === null || scopeId === undefined) {
      throw new RequiredError("scopeId", "getRumQuotaConfig");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/config/retention-quota/{scope_type}/{scope_id}"
        .replace("{scope_type}", encodeURIComponent(String(scopeType)))
        .replace("{scope_id}", encodeURIComponent(String(scopeId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMRetentionQuotasApi.getRumQuotaConfig")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async upsertRumQuotaConfig(
    scopeType: RumRetentionQuotaScopeType,
    scopeId: string,
    body: RumRetentionQuotaConfigUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'scopeType' is not null or undefined
    if (scopeType === null || scopeType === undefined) {
      throw new RequiredError("scopeType", "upsertRumQuotaConfig");
    }

    // verify required parameter 'scopeId' is not null or undefined
    if (scopeId === null || scopeId === undefined) {
      throw new RequiredError("scopeId", "upsertRumQuotaConfig");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "upsertRumQuotaConfig");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/config/retention-quota/{scope_type}/{scope_id}"
        .replace("{scope_type}", encodeURIComponent(String(scopeType)))
        .replace("{scope_id}", encodeURIComponent(String(scopeId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMRetentionQuotasApi.upsertRumQuotaConfig")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "RumRetentionQuotaConfigUpdateRequest",
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
}

export class RUMRetentionQuotasApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteRumQuotaConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteRumQuotaConfig(response: ResponseContext): Promise<void> {
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
      response.httpStatusCode === 404
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
   * @params response Response returned by the server for a request to getRumQuotaConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRumQuotaConfig(
    response: ResponseContext
  ): Promise<RumRetentionQuotaConfigResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RumRetentionQuotaConfigResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "RumRetentionQuotaConfigResponse"
        ) as RumRetentionQuotaConfigResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
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
      const body: RumRetentionQuotaConfigResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "RumRetentionQuotaConfigResponse",
          ""
        ) as RumRetentionQuotaConfigResponse;
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
   * @params response Response returned by the server for a request to upsertRumQuotaConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async upsertRumQuotaConfig(
    response: ResponseContext
  ): Promise<RumRetentionQuotaConfigResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RumRetentionQuotaConfigResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "RumRetentionQuotaConfigResponse"
        ) as RumRetentionQuotaConfigResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
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
      const body: RumRetentionQuotaConfigResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "RumRetentionQuotaConfigResponse",
          ""
        ) as RumRetentionQuotaConfigResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface RUMRetentionQuotasApiDeleteRumQuotaConfigRequest {
  /**
   * The type of scope the retention quota configuration applies to.
   * `application` is the only supported scope type.
   * @type RumRetentionQuotaScopeType
   */
  scopeType: RumRetentionQuotaScopeType;
  /**
   * The identifier of the scope the retention quota configuration applies to.
   * For the `application` scope, this is the RUM application ID.
   * @type string
   */
  scopeId: string;
}

export interface RUMRetentionQuotasApiGetRumQuotaConfigRequest {
  /**
   * The type of scope the retention quota configuration applies to.
   * `application` is the only supported scope type.
   * @type RumRetentionQuotaScopeType
   */
  scopeType: RumRetentionQuotaScopeType;
  /**
   * The identifier of the scope the retention quota configuration applies to.
   * For the `application` scope, this is the RUM application ID.
   * @type string
   */
  scopeId: string;
}

export interface RUMRetentionQuotasApiUpsertRumQuotaConfigRequest {
  /**
   * The type of scope the retention quota configuration applies to.
   * `application` is the only supported scope type.
   * @type RumRetentionQuotaScopeType
   */
  scopeType: RumRetentionQuotaScopeType;
  /**
   * The identifier of the scope the retention quota configuration applies to.
   * For the `application` scope, this is the RUM application ID.
   * @type string
   */
  scopeId: string;
  /**
   * The definition of the RUM retention quota configuration to create or update.
   * @type RumRetentionQuotaConfigUpdateRequest
   */
  body: RumRetentionQuotaConfigUpdateRequest;
}

export class RUMRetentionQuotasApi {
  private requestFactory: RUMRetentionQuotasApiRequestFactory;
  private responseProcessor: RUMRetentionQuotasApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: RUMRetentionQuotasApiRequestFactory,
    responseProcessor?: RUMRetentionQuotasApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new RUMRetentionQuotasApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new RUMRetentionQuotasApiResponseProcessor();
  }

  /**
   * Delete the RUM retention quota configuration for a given scope.
   * @param param The request object
   */
  public deleteRumQuotaConfig(
    param: RUMRetentionQuotasApiDeleteRumQuotaConfigRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteRumQuotaConfig(
      param.scopeType,
      param.scopeId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteRumQuotaConfig(responseContext);
        });
    });
  }

  /**
   * Get the RUM retention quota configuration for a given scope.
   * @param param The request object
   */
  public getRumQuotaConfig(
    param: RUMRetentionQuotasApiGetRumQuotaConfigRequest,
    options?: Configuration
  ): Promise<RumRetentionQuotaConfigResponse> {
    const requestContextPromise = this.requestFactory.getRumQuotaConfig(
      param.scopeType,
      param.scopeId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRumQuotaConfig(responseContext);
        });
    });
  }

  /**
   * Create or update the RUM retention quota configuration for a given scope.
   * Returns the retention quota configuration object when the request is successful.
   * @param param The request object
   */
  public upsertRumQuotaConfig(
    param: RUMRetentionQuotasApiUpsertRumQuotaConfigRequest,
    options?: Configuration
  ): Promise<RumRetentionQuotaConfigResponse> {
    const requestContextPromise = this.requestFactory.upsertRumQuotaConfig(
      param.scopeType,
      param.scopeId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.upsertRumQuotaConfig(responseContext);
        });
    });
  }
}
