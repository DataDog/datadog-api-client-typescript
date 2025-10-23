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
import { FleetDeploymentConfigureCreateRequest } from "../models/FleetDeploymentConfigureCreateRequest";
import { FleetDeploymentResponse } from "../models/FleetDeploymentResponse";
import { FleetDeploymentsResponse } from "../models/FleetDeploymentsResponse";

export class FleetAutomationApiRequestFactory extends BaseAPIRequestFactory {
  public async cancelFleetDeployment(
    deploymentId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'cancelFleetDeployment'");
    if (!_config.unstableOperations["v2.cancelFleetDeployment"]) {
      throw new Error("Unstable operation 'cancelFleetDeployment' is disabled");
    }

    // verify required parameter 'deploymentId' is not null or undefined
    if (deploymentId === null || deploymentId === undefined) {
      throw new RequiredError("deploymentId", "cancelFleetDeployment");
    }

    // Path Params
    const localVarPath =
      "/api/unstable/fleet/deployments/{deployment_id}/cancel".replace(
        "{deployment_id}",
        encodeURIComponent(String(deploymentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FleetAutomationApi.cancelFleetDeployment")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async createFleetDeploymentConfigure(
    body: FleetDeploymentConfigureCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createFleetDeploymentConfigure'");
    if (!_config.unstableOperations["v2.createFleetDeploymentConfigure"]) {
      throw new Error(
        "Unstable operation 'createFleetDeploymentConfigure' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createFleetDeploymentConfigure");
    }

    // Path Params
    const localVarPath = "/api/unstable/fleet/deployments/configure";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FleetAutomationApi.createFleetDeploymentConfigure")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "FleetDeploymentConfigureCreateRequest",
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

  public async getFleetDeployment(
    deploymentId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getFleetDeployment'");
    if (!_config.unstableOperations["v2.getFleetDeployment"]) {
      throw new Error("Unstable operation 'getFleetDeployment' is disabled");
    }

    // verify required parameter 'deploymentId' is not null or undefined
    if (deploymentId === null || deploymentId === undefined) {
      throw new RequiredError("deploymentId", "getFleetDeployment");
    }

    // Path Params
    const localVarPath =
      "/api/unstable/fleet/deployments/{deployment_id}".replace(
        "{deployment_id}",
        encodeURIComponent(String(deploymentId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FleetAutomationApi.getFleetDeployment")
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

  public async listFleetDeployments(
    pageSize?: number,
    pageOffset?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listFleetDeployments'");
    if (!_config.unstableOperations["v2.listFleetDeployments"]) {
      throw new Error("Unstable operation 'listFleetDeployments' is disabled");
    }

    // Path Params
    const localVarPath = "/api/unstable/fleet/deployments";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.FleetAutomationApi.listFleetDeployments")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (pageSize !== undefined) {
      requestContext.setQueryParam(
        "page_size",
        ObjectSerializer.serialize(pageSize, "number", "int64"),
        ""
      );
    }
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page_offset",
        ObjectSerializer.serialize(pageOffset, "number", "int64"),
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
}

export class FleetAutomationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to cancelFleetDeployment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async cancelFleetDeployment(response: ResponseContext): Promise<void> {
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
   * @params response Response returned by the server for a request to createFleetDeploymentConfigure
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createFleetDeploymentConfigure(
    response: ResponseContext
  ): Promise<FleetDeploymentResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: FleetDeploymentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetDeploymentResponse"
      ) as FleetDeploymentResponse;
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
      const body: FleetDeploymentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetDeploymentResponse",
        ""
      ) as FleetDeploymentResponse;
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
   * @params response Response returned by the server for a request to getFleetDeployment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getFleetDeployment(
    response: ResponseContext
  ): Promise<FleetDeploymentResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: FleetDeploymentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetDeploymentResponse"
      ) as FleetDeploymentResponse;
      return body;
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
      const body: FleetDeploymentResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetDeploymentResponse",
        ""
      ) as FleetDeploymentResponse;
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
   * @params response Response returned by the server for a request to listFleetDeployments
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listFleetDeployments(
    response: ResponseContext
  ): Promise<FleetDeploymentsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: FleetDeploymentsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetDeploymentsResponse"
      ) as FleetDeploymentsResponse;
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
      const body: FleetDeploymentsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FleetDeploymentsResponse",
        ""
      ) as FleetDeploymentsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface FleetAutomationApiCancelFleetDeploymentRequest {
  /**
   * The unique identifier of the deployment to cancel.
   * @type string
   */
  deploymentId: string;
}

export interface FleetAutomationApiCreateFleetDeploymentConfigureRequest {
  /**
   * Request payload containing the deployment details.
   * @type FleetDeploymentConfigureCreateRequest
   */
  body: FleetDeploymentConfigureCreateRequest;
}

export interface FleetAutomationApiGetFleetDeploymentRequest {
  /**
   * The unique identifier of the deployment to retrieve.
   * @type string
   */
  deploymentId: string;
}

export interface FleetAutomationApiListFleetDeploymentsRequest {
  /**
   * Number of deployments to return per page. Maximum value is 100.
   * @type number
   */
  pageSize?: number;
  /**
   * Index of the first deployment to return. Use this with `page_size` to paginate through results.
   * @type number
   */
  pageOffset?: number;
}

export class FleetAutomationApi {
  private requestFactory: FleetAutomationApiRequestFactory;
  private responseProcessor: FleetAutomationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: FleetAutomationApiRequestFactory,
    responseProcessor?: FleetAutomationApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new FleetAutomationApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new FleetAutomationApiResponseProcessor();
  }

  /**
   * Cancel this deployment and stop all associated operations.
   * If a workflow is currently running for this deployment, it is canceled immediately.
   * Changes already applied to hosts are not rolled back.
   * @param param The request object
   */
  public cancelFleetDeployment(
    param: FleetAutomationApiCancelFleetDeploymentRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.cancelFleetDeployment(
      param.deploymentId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.cancelFleetDeployment(responseContext);
        });
    });
  }

  /**
   * Create a new deployment to apply configuration changes
   * to a fleet of hosts matching the specified filter query.
   * @param param The request object
   */
  public createFleetDeploymentConfigure(
    param: FleetAutomationApiCreateFleetDeploymentConfigureRequest,
    options?: Configuration
  ): Promise<FleetDeploymentResponse> {
    const requestContextPromise =
      this.requestFactory.createFleetDeploymentConfigure(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createFleetDeploymentConfigure(
            responseContext
          );
        });
    });
  }

  /**
   * Retrieve the details of a specific deployment using its unique identifier.
   * @param param The request object
   */
  public getFleetDeployment(
    param: FleetAutomationApiGetFleetDeploymentRequest,
    options?: Configuration
  ): Promise<FleetDeploymentResponse> {
    const requestContextPromise = this.requestFactory.getFleetDeployment(
      param.deploymentId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getFleetDeployment(responseContext);
        });
    });
  }

  /**
   * Retrieve a list of all deployments for fleet automation.
   * Use the `page_size` and `page_offset` parameters to paginate results.
   * @param param The request object
   */
  public listFleetDeployments(
    param: FleetAutomationApiListFleetDeploymentsRequest = {},
    options?: Configuration
  ): Promise<FleetDeploymentsResponse> {
    const requestContextPromise = this.requestFactory.listFleetDeployments(
      param.pageSize,
      param.pageOffset,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listFleetDeployments(responseContext);
        });
    });
  }
}
