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
import { RUMRetentionQuotaConfigResponse } from "../models/RUMRetentionQuotaConfigResponse";
import { RUMRetentionQuotaConfigUpdateRequest } from "../models/RUMRetentionQuotaConfigUpdateRequest";
import { RUMRetentionQuotaScopeType } from "../models/RUMRetentionQuotaScopeType";

export class RUMRetentionQuotasApiRequestFactory extends BaseAPIRequestFactory {
  public async deleteRUMQuotaConfig(
    scopeType: RUMRetentionQuotaScopeType,
    scopeId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'scopeType' is not null or undefined
    if (scopeType === null || scopeType === undefined) {
      throw new RequiredError("scopeType", "deleteRUMQuotaConfig");
    }

    // verify required parameter 'scopeId' is not null or undefined
    if (scopeId === null || scopeId === undefined) {
      throw new RequiredError("scopeId", "deleteRUMQuotaConfig");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/config/retention-quota/{scope_type}/{scope_id}"
        .replace("{scope_type}", encodeURIComponent(String(scopeType)))
        .replace("{scope_id}", encodeURIComponent(String(scopeId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMRetentionQuotasApi.deleteRUMQuotaConfig")
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getRUMQuotaConfig(
    scopeType: RUMRetentionQuotaScopeType,
    scopeId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'scopeType' is not null or undefined
    if (scopeType === null || scopeType === undefined) {
      throw new RequiredError("scopeType", "getRUMQuotaConfig");
    }

    // verify required parameter 'scopeId' is not null or undefined
    if (scopeId === null || scopeId === undefined) {
      throw new RequiredError("scopeId", "getRUMQuotaConfig");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/config/retention-quota/{scope_type}/{scope_id}"
        .replace("{scope_type}", encodeURIComponent(String(scopeType)))
        .replace("{scope_id}", encodeURIComponent(String(scopeId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMRetentionQuotasApi.getRUMQuotaConfig")
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
      "AuthZ",
    ]);

    return requestContext;
  }

  public async upsertRUMQuotaConfig(
    scopeType: RUMRetentionQuotaScopeType,
    scopeId: string,
    body: RUMRetentionQuotaConfigUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'scopeType' is not null or undefined
    if (scopeType === null || scopeType === undefined) {
      throw new RequiredError("scopeType", "upsertRUMQuotaConfig");
    }

    // verify required parameter 'scopeId' is not null or undefined
    if (scopeId === null || scopeId === undefined) {
      throw new RequiredError("scopeId", "upsertRUMQuotaConfig");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "upsertRUMQuotaConfig");
    }

    // Path Params
    const localVarPath =
      "/api/v2/rum/config/retention-quota/{scope_type}/{scope_id}"
        .replace("{scope_type}", encodeURIComponent(String(scopeType)))
        .replace("{scope_id}", encodeURIComponent(String(scopeId)));

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RUMRetentionQuotasApi.upsertRUMQuotaConfig")
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
        "RUMRetentionQuotaConfigUpdateRequest",
        ""
      ),
      contentType,
      this.configuration.preserveLargeIntegers
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

export class RUMRetentionQuotasApiResponseProcessor {
  private configuration?: Configuration;

  public constructor(configuration?: Configuration) {
    this.configuration = configuration;
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteRUMQuotaConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteRUMQuotaConfig(response: ResponseContext): Promise<void> {
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
   * @params response Response returned by the server for a request to getRUMQuotaConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRUMQuotaConfig(
    response: ResponseContext
  ): Promise<RUMRetentionQuotaConfigResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RUMRetentionQuotaConfigResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "RUMRetentionQuotaConfigResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as RUMRetentionQuotaConfigResponse;
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: RUMRetentionQuotaConfigResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "RUMRetentionQuotaConfigResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as RUMRetentionQuotaConfigResponse;
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
   * @params response Response returned by the server for a request to upsertRUMQuotaConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async upsertRUMQuotaConfig(
    response: ResponseContext
  ): Promise<RUMRetentionQuotaConfigResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RUMRetentionQuotaConfigResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "RUMRetentionQuotaConfigResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as RUMRetentionQuotaConfigResponse;
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
        contentType,
        this.configuration?.preserveLargeIntegers
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
          "",
          this.configuration?.preserveLargeIntegers
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
      const body: RUMRetentionQuotaConfigResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            await response.body.text(),
            contentType,
            this.configuration?.preserveLargeIntegers
          ),
          "RUMRetentionQuotaConfigResponse",
          "",
          this.configuration?.preserveLargeIntegers
        ) as RUMRetentionQuotaConfigResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface RUMRetentionQuotasApiDeleteRUMQuotaConfigRequest {
  /**
   * The type of scope the retention quota configuration applies to.
   * `application` is the only supported scope type.
   * @type RUMRetentionQuotaScopeType
   */
  scopeType: RUMRetentionQuotaScopeType;
  /**
   * The identifier of the scope the retention quota configuration applies to.
   * For the `application` scope, this is the RUM application ID.
   * @type string
   */
  scopeId: string;
}

export interface RUMRetentionQuotasApiGetRUMQuotaConfigRequest {
  /**
   * The type of scope the retention quota configuration applies to.
   * `application` is the only supported scope type.
   * @type RUMRetentionQuotaScopeType
   */
  scopeType: RUMRetentionQuotaScopeType;
  /**
   * The identifier of the scope the retention quota configuration applies to.
   * For the `application` scope, this is the RUM application ID.
   * @type string
   */
  scopeId: string;
}

export interface RUMRetentionQuotasApiUpsertRUMQuotaConfigRequest {
  /**
   * The type of scope the retention quota configuration applies to.
   * `application` is the only supported scope type.
   * @type RUMRetentionQuotaScopeType
   */
  scopeType: RUMRetentionQuotaScopeType;
  /**
   * The identifier of the scope the retention quota configuration applies to.
   * For the `application` scope, this is the RUM application ID.
   * @type string
   */
  scopeId: string;
  /**
   * The definition of the RUM retention quota configuration to create or update.
   * @type RUMRetentionQuotaConfigUpdateRequest
   */
  body: RUMRetentionQuotaConfigUpdateRequest;
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
      responseProcessor ||
      new RUMRetentionQuotasApiResponseProcessor(configuration);
  }

  /**
   * Delete the RUM retention quota configuration for a given scope.
   * @param param The request object
   */
  public deleteRUMQuotaConfig(
    param: RUMRetentionQuotasApiDeleteRUMQuotaConfigRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteRUMQuotaConfig(
      param.scopeType,
      param.scopeId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteRUMQuotaConfig(responseContext);
        });
    });
  }

  /**
   * Get the RUM retention quota configuration for a given scope.
   * @param param The request object
   */
  public getRUMQuotaConfig(
    param: RUMRetentionQuotasApiGetRUMQuotaConfigRequest,
    options?: Configuration
  ): Promise<RUMRetentionQuotaConfigResponse> {
    const requestContextPromise = this.requestFactory.getRUMQuotaConfig(
      param.scopeType,
      param.scopeId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRUMQuotaConfig(responseContext);
        });
    });
  }

  /**
   * Create or update the RUM retention quota configuration for a given scope.
   * Returns the retention quota configuration object when the request is successful.
   * @param param The request object
   */
  public upsertRUMQuotaConfig(
    param: RUMRetentionQuotasApiUpsertRUMQuotaConfigRequest,
    options?: Configuration
  ): Promise<RUMRetentionQuotaConfigResponse> {
    const requestContextPromise = this.requestFactory.upsertRUMQuotaConfig(
      param.scopeType,
      param.scopeId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.upsertRUMQuotaConfig(responseContext);
        });
    });
  }
}
