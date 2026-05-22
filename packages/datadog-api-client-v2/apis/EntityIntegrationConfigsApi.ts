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
import { EntityIntegrationConfigRequest } from "../models/EntityIntegrationConfigRequest";
import { EntityIntegrationConfigResponse } from "../models/EntityIntegrationConfigResponse";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";

export class EntityIntegrationConfigsApiRequestFactory extends BaseAPIRequestFactory {
  public async deleteEntityIntegrationConfig(
    integrationId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteEntityIntegrationConfig'");
    if (!_config.unstableOperations["v2.deleteEntityIntegrationConfig"]) {
      throw new Error(
        "Unstable operation 'deleteEntityIntegrationConfig' is disabled"
      );
    }

    // verify required parameter 'integrationId' is not null or undefined
    if (integrationId === null || integrationId === undefined) {
      throw new RequiredError("integrationId", "deleteEntityIntegrationConfig");
    }

    // Path Params
    const localVarPath =
      "/api/v2/idp/entity_integrations/{integration_id}".replace(
        "{integration_id}",
        encodeURIComponent(String(integrationId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.EntityIntegrationConfigsApi.deleteEntityIntegrationConfig")
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

  public async getEntityIntegrationConfig(
    integrationId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getEntityIntegrationConfig'");
    if (!_config.unstableOperations["v2.getEntityIntegrationConfig"]) {
      throw new Error(
        "Unstable operation 'getEntityIntegrationConfig' is disabled"
      );
    }

    // verify required parameter 'integrationId' is not null or undefined
    if (integrationId === null || integrationId === undefined) {
      throw new RequiredError("integrationId", "getEntityIntegrationConfig");
    }

    // Path Params
    const localVarPath =
      "/api/v2/idp/entity_integrations/{integration_id}".replace(
        "{integration_id}",
        encodeURIComponent(String(integrationId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.EntityIntegrationConfigsApi.getEntityIntegrationConfig")
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

  public async updateEntityIntegrationConfig(
    integrationId: string,
    body: EntityIntegrationConfigRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateEntityIntegrationConfig'");
    if (!_config.unstableOperations["v2.updateEntityIntegrationConfig"]) {
      throw new Error(
        "Unstable operation 'updateEntityIntegrationConfig' is disabled"
      );
    }

    // verify required parameter 'integrationId' is not null or undefined
    if (integrationId === null || integrationId === undefined) {
      throw new RequiredError("integrationId", "updateEntityIntegrationConfig");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateEntityIntegrationConfig");
    }

    // Path Params
    const localVarPath =
      "/api/v2/idp/entity_integrations/{integration_id}".replace(
        "{integration_id}",
        encodeURIComponent(String(integrationId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.EntityIntegrationConfigsApi.updateEntityIntegrationConfig")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "EntityIntegrationConfigRequest", ""),
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

export class EntityIntegrationConfigsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteEntityIntegrationConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteEntityIntegrationConfig(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
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
   * @params response Response returned by the server for a request to getEntityIntegrationConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getEntityIntegrationConfig(
    response: ResponseContext
  ): Promise<EntityIntegrationConfigResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: EntityIntegrationConfigResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "EntityIntegrationConfigResponse"
        ) as EntityIntegrationConfigResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
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
      const body: EntityIntegrationConfigResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "EntityIntegrationConfigResponse",
          ""
        ) as EntityIntegrationConfigResponse;
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
   * @params response Response returned by the server for a request to updateEntityIntegrationConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateEntityIntegrationConfig(
    response: ResponseContext
  ): Promise<EntityIntegrationConfigResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: EntityIntegrationConfigResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "EntityIntegrationConfigResponse"
        ) as EntityIntegrationConfigResponse;
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
      const body: EntityIntegrationConfigResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "EntityIntegrationConfigResponse",
          ""
        ) as EntityIntegrationConfigResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface EntityIntegrationConfigsApiDeleteEntityIntegrationConfigRequest {
  /**
   * The identifier of the integration whose configuration is being managed. Supported values are `github`, `jira`, and `pagerduty`.
   * @type string
   */
  integrationId: string;
}

export interface EntityIntegrationConfigsApiGetEntityIntegrationConfigRequest {
  /**
   * The identifier of the integration whose configuration is being managed. Supported values are `github`, `jira`, and `pagerduty`.
   * @type string
   */
  integrationId: string;
}

export interface EntityIntegrationConfigsApiUpdateEntityIntegrationConfigRequest {
  /**
   * The identifier of the integration whose configuration is being managed. Supported values are `github`, `jira`, and `pagerduty`.
   * @type string
   */
  integrationId: string;
  /**
   * @type EntityIntegrationConfigRequest
   */
  body: EntityIntegrationConfigRequest;
}

export class EntityIntegrationConfigsApi {
  private requestFactory: EntityIntegrationConfigsApiRequestFactory;
  private responseProcessor: EntityIntegrationConfigsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: EntityIntegrationConfigsApiRequestFactory,
    responseProcessor?: EntityIntegrationConfigsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory ||
      new EntityIntegrationConfigsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new EntityIntegrationConfigsApiResponseProcessor();
  }

  /**
   * Delete the configuration stored for a given integration in the caller's organization.
   * @param param The request object
   */
  public deleteEntityIntegrationConfig(
    param: EntityIntegrationConfigsApiDeleteEntityIntegrationConfigRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteEntityIntegrationConfig(
        param.integrationId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteEntityIntegrationConfig(
            responseContext
          );
        });
    });
  }

  /**
   * Retrieve the configuration currently stored for a given integration in the caller's organization.
   * @param param The request object
   */
  public getEntityIntegrationConfig(
    param: EntityIntegrationConfigsApiGetEntityIntegrationConfigRequest,
    options?: Configuration
  ): Promise<EntityIntegrationConfigResponse> {
    const requestContextPromise =
      this.requestFactory.getEntityIntegrationConfig(
        param.integrationId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getEntityIntegrationConfig(
            responseContext
          );
        });
    });
  }

  /**
   * Create or replace the configuration for a given integration in the caller's organization. The shape of `data.attributes.config` depends on the integration:
   *
   * - For `github`: `config` must contain an `enabled_repos` array of objects with `hostname`, `github_org_name`, and `repo_name`.
   * - For `jira`: `config` must contain an `enabled_projects` array of objects with `hostname`, `account_id`, and `project_key`.
   * - For `pagerduty`: `config` must contain an `accounts` array of objects with a required `enabled` boolean and an optional `subdomain` string.
   * @param param The request object
   */
  public updateEntityIntegrationConfig(
    param: EntityIntegrationConfigsApiUpdateEntityIntegrationConfigRequest,
    options?: Configuration
  ): Promise<EntityIntegrationConfigResponse> {
    const requestContextPromise =
      this.requestFactory.updateEntityIntegrationConfig(
        param.integrationId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateEntityIntegrationConfig(
            responseContext
          );
        });
    });
  }
}
