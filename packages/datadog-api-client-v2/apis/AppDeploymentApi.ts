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
import { AppBuilderError } from "../models/AppBuilderError";
import { DeployAppResponse } from "../models/DeployAppResponse";
import { DisableAppResponse } from "../models/DisableAppResponse";

export class AppDeploymentApiRequestFactory extends BaseAPIRequestFactory {
  public async deployApp(
    appId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deployApp'");
    if (!_config.unstableOperations["v2.deployApp"]) {
      throw new Error("Unstable operation 'deployApp' is disabled");
    }

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "deployApp");
    }

    // Path Params
    const localVarPath = "/api/v2/app-builder/apps/{app_id}/deployment".replace(
      "{app_id}",
      encodeURIComponent(String(appId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AppDeploymentApi.deployApp")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async disableApp(
    appId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'disableApp'");
    if (!_config.unstableOperations["v2.disableApp"]) {
      throw new Error("Unstable operation 'disableApp' is disabled");
    }

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("appId", "disableApp");
    }

    // Path Params
    const localVarPath = "/api/v2/app-builder/apps/{app_id}/deployment".replace(
      "{app_id}",
      encodeURIComponent(String(appId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AppDeploymentApi.disableApp")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class AppDeploymentApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deployApp
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deployApp(
    response: ResponseContext
  ): Promise<DeployAppResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: DeployAppResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DeployAppResponse"
      ) as DeployAppResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: AppBuilderError;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "AppBuilderError"
        ) as AppBuilderError;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<AppBuilderError>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<AppBuilderError>(response.httpStatusCode, body);
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
      const body: DeployAppResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DeployAppResponse",
        ""
      ) as DeployAppResponse;
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
   * @params response Response returned by the server for a request to disableApp
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async disableApp(
    response: ResponseContext
  ): Promise<DisableAppResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DisableAppResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DisableAppResponse"
      ) as DisableAppResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: AppBuilderError;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "AppBuilderError"
        ) as AppBuilderError;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<AppBuilderError>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<AppBuilderError>(response.httpStatusCode, body);
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
      const body: DisableAppResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DisableAppResponse",
        ""
      ) as DisableAppResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface AppDeploymentApiDeployAppRequest {
  /**
   * @type string
   */
  appId: string;
}

export interface AppDeploymentApiDisableAppRequest {
  /**
   * @type string
   */
  appId: string;
}

export class AppDeploymentApi {
  private requestFactory: AppDeploymentApiRequestFactory;
  private responseProcessor: AppDeploymentApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: AppDeploymentApiRequestFactory,
    responseProcessor?: AppDeploymentApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new AppDeploymentApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new AppDeploymentApiResponseProcessor();
  }

  /**
   * Deploy (publish) an app by ID
   * @param param The request object
   */
  public deployApp(
    param: AppDeploymentApiDeployAppRequest,
    options?: Configuration
  ): Promise<DeployAppResponse> {
    const requestContextPromise = this.requestFactory.deployApp(
      param.appId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deployApp(responseContext);
        });
    });
  }

  /**
   * Disable an app by ID
   * @param param The request object
   */
  public disableApp(
    param: AppDeploymentApiDisableAppRequest,
    options?: Configuration
  ): Promise<DisableAppResponse> {
    const requestContextPromise = this.requestFactory.disableApp(
      param.appId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.disableApp(responseContext);
        });
    });
  }
}
