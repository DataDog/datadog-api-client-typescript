import {
  BaseAPIRequestFactory,
  Configuration,
  applySecurityAuthentication,
  RequestContext,
  HttpMethod,
  ResponseContext,
  logger,
  RequiredError,
  ApiException,
  createConfiguration,
  getPreferredMediaType,
  stringify,
  serialize,
  deserialize,
  parse,
  normalizeMediaType,
} from "@datadog/datadog-api-client";

import { TypingInfo } from "./models/TypingInfo";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { DORADeploymentRequest } from "./models/DORADeploymentRequest";
import { DORADeploymentResponse } from "./models/DORADeploymentResponse";
import { DORAIncidentRequest } from "./models/DORAIncidentRequest";
import { DORAIncidentResponse } from "./models/DORAIncidentResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";

export class DORAMetricsApiRequestFactory extends BaseAPIRequestFactory {
  public async createDORADeployment(
    body: DORADeploymentRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createDORADeployment'");
    if (!_config.unstableOperations["v2.createDORADeployment"]) {
      throw new Error("Unstable operation 'createDORADeployment' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createDORADeployment");
    }

    // Path Params
    const localVarPath = "/api/v2/dora/deployment";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DORAMetricsApi.createDORADeployment")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "DORADeploymentRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth"]);

    return requestContext;
  }

  public async createDORAIncident(
    body: DORAIncidentRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createDORAIncident'");
    if (!_config.unstableOperations["v2.createDORAIncident"]) {
      throw new Error("Unstable operation 'createDORAIncident' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createDORAIncident");
    }

    // Path Params
    const localVarPath = "/api/v2/dora/incident";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DORAMetricsApi.createDORAIncident")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "DORAIncidentRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth"]);

    return requestContext;
  }
}

export class DORAMetricsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createDORADeployment
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createDORADeployment(
    response: ResponseContext,
  ): Promise<DORADeploymentResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200 || response.httpStatusCode === 202) {
      const body: DORADeploymentResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DORADeploymentResponse",
      ) as DORADeploymentResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
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
      const body: DORADeploymentResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DORADeploymentResponse",
        "",
      ) as DORADeploymentResponse;
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
   * @params response Response returned by the server for a request to createDORAIncident
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createDORAIncident(
    response: ResponseContext,
  ): Promise<DORAIncidentResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200 || response.httpStatusCode === 202) {
      const body: DORAIncidentResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DORAIncidentResponse",
      ) as DORAIncidentResponse;
      return body;
    }
    if (response.httpStatusCode === 400) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
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
      const body: DORAIncidentResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "DORAIncidentResponse",
        "",
      ) as DORAIncidentResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface DORAMetricsApiCreateDORADeploymentRequest {
  /**
   * @type DORADeploymentRequest
   */
  body: DORADeploymentRequest;
}

export interface DORAMetricsApiCreateDORAIncidentRequest {
  /**
   * @type DORAIncidentRequest
   */
  body: DORAIncidentRequest;
}

export class DORAMetricsApi {
  private requestFactory: DORAMetricsApiRequestFactory;
  private responseProcessor: DORAMetricsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: DORAMetricsApiRequestFactory,
    responseProcessor?: DORAMetricsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new DORAMetricsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new DORAMetricsApiResponseProcessor();
  }

  /**
   * Use this API endpoint to provide data about deployments for DORA metrics.
   *
   * This is necessary for:
   * - Deployment Frequency
   * - Change Lead Time
   * - Change Failure Rate
   * @param param The request object
   */
  public createDORADeployment(
    param: DORAMetricsApiCreateDORADeploymentRequest,
    options?: Configuration,
  ): Promise<DORADeploymentResponse> {
    const requestContextPromise = this.requestFactory.createDORADeployment(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createDORADeployment(responseContext);
        });
    });
  }

  /**
   * Use this API endpoint to provide data about incidents for DORA metrics.
   *
   * This is necessary for:
   * - Change Failure Rate
   * - Time to Restore
   * @param param The request object
   */
  public createDORAIncident(
    param: DORAMetricsApiCreateDORAIncidentRequest,
    options?: Configuration,
  ): Promise<DORAIncidentResponse> {
    const requestContextPromise = this.requestFactory.createDORAIncident(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createDORAIncident(responseContext);
        });
    });
  }
}
