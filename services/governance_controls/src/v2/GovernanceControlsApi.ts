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
import { GovernanceControlResponse } from "./models/GovernanceControlResponse";
import { GovernanceControlsResponse } from "./models/GovernanceControlsResponse";
import { GovernanceControlUpdateRequest } from "./models/GovernanceControlUpdateRequest";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { version } from "../version";

export class GovernanceControlsApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("governance-controls", version);
    }
  }
  public async getGovernanceControl(
    detectionType: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["GovernanceControlsApi.v2.getGovernanceControl"]) {
      throw new Error("Unstable operation 'getGovernanceControl' is disabled. Enable it by setting `configuration.unstableOperations['GovernanceControlsApi.v2.getGovernanceControl'] = true`");
    }

    // verify required parameter 'detectionType' is not null or undefined
    if (detectionType === null || detectionType === undefined) {
      throw new RequiredError("detectionType", "getGovernanceControl");
    }

    // Path Params
    const localVarPath = "/api/v2/governance/control/{detection_type}".replace(
      "{detection_type}",
      encodeURIComponent(String(detectionType)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides("GovernanceControlsApi.v2.getGovernanceControl", GovernanceControlsApi.operationServers);
    const requestContext = server.makeRequestContext(localVarPath, HttpMethod.GET, overrides);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listGovernanceControls(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["GovernanceControlsApi.v2.listGovernanceControls"]) {
      throw new Error("Unstable operation 'listGovernanceControls' is disabled. Enable it by setting `configuration.unstableOperations['GovernanceControlsApi.v2.listGovernanceControls'] = true`");
    }

    // Path Params
    const localVarPath = "/api/v2/governance/control";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides("GovernanceControlsApi.v2.listGovernanceControls", GovernanceControlsApi.operationServers);
    const requestContext = server.makeRequestContext(localVarPath, HttpMethod.GET, overrides);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateGovernanceControl(
    detectionType: string,
    body: GovernanceControlUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (!_config.unstableOperations["GovernanceControlsApi.v2.updateGovernanceControl"]) {
      throw new Error("Unstable operation 'updateGovernanceControl' is disabled. Enable it by setting `configuration.unstableOperations['GovernanceControlsApi.v2.updateGovernanceControl'] = true`");
    }

    // verify required parameter 'detectionType' is not null or undefined
    if (detectionType === null || detectionType === undefined) {
      throw new RequiredError("detectionType", "updateGovernanceControl");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateGovernanceControl");
    }

    // Path Params
    const localVarPath = "/api/v2/governance/control/{detection_type}".replace(
      "{detection_type}",
      encodeURIComponent(String(detectionType)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides("GovernanceControlsApi.v2.updateGovernanceControl", GovernanceControlsApi.operationServers);
    const requestContext = server.makeRequestContext(localVarPath, HttpMethod.PATCH, overrides);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(body, TypingInfo, "GovernanceControlUpdateRequest", ""),
      contentType,
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

export class GovernanceControlsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getGovernanceControl
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getGovernanceControl(
    response: ResponseContext,
  ): Promise<GovernanceControlResponse> {
    const contentType = normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: GovernanceControlResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GovernanceControlResponse",
      ) as GovernanceControlResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = parse(
        await response.body.text(),
        contentType,
      );
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
    if (response.httpStatusCode === 429) {
      const bodyText = parse(
        await response.body.text(),
        contentType,
      );
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
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: GovernanceControlResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GovernanceControlResponse",
        "",
      ) as GovernanceControlResponse;
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
   * @params response Response returned by the server for a request to listGovernanceControls
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listGovernanceControls(
    response: ResponseContext,
  ): Promise<GovernanceControlsResponse> {
    const contentType = normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: GovernanceControlsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GovernanceControlsResponse",
      ) as GovernanceControlsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403
    ) {
      const bodyText = parse(
        await response.body.text(),
        contentType,
      );
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
    if (response.httpStatusCode === 429) {
      const bodyText = parse(
        await response.body.text(),
        contentType,
      );
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
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: GovernanceControlsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GovernanceControlsResponse",
        "",
      ) as GovernanceControlsResponse;
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
   * @params response Response returned by the server for a request to updateGovernanceControl
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateGovernanceControl(
    response: ResponseContext,
  ): Promise<GovernanceControlResponse> {
    const contentType = normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: GovernanceControlResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GovernanceControlResponse",
      ) as GovernanceControlResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = parse(
        await response.body.text(),
        contentType,
      );
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
    if (response.httpStatusCode === 429) {
      const bodyText = parse(
        await response.body.text(),
        contentType,
      );
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
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: GovernanceControlResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "GovernanceControlResponse",
        "",
      ) as GovernanceControlResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface GovernanceControlsApiGetGovernanceControlRequest {
  /**
   * The detection type that identifies the control, for example `unused_api_keys`.
   * @type string
   */
  detectionType: string;
}

export interface GovernanceControlsApiUpdateGovernanceControlRequest {
  /**
   * The detection type that identifies the control, for example `unused_api_keys`.
   * @type string
   */
  detectionType: string;
  /**
   * @type GovernanceControlUpdateRequest
   */
  body: GovernanceControlUpdateRequest;
}

export class GovernanceControlsApi {
  private requestFactory: GovernanceControlsApiRequestFactory;
  private responseProcessor: GovernanceControlsApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {
  };

  public constructor(
    configuration?: Configuration,
    requestFactory?: GovernanceControlsApiRequestFactory,
    responseProcessor?: GovernanceControlsApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new GovernanceControlsApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new GovernanceControlsApiResponseProcessor();
  }

  /**
   * Retrieve a single governance control by its detection type, including the organization's current
   * detection, notification, and mitigation configuration and detection counts.
   * @param param The request object
   */
  public getGovernanceControl(
    param: GovernanceControlsApiGetGovernanceControlRequest,
    options?: Configuration,
  ): Promise<GovernanceControlResponse> {
    const requestContextPromise = this.requestFactory.getGovernanceControl(
      param.detectionType,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getGovernanceControl(responseContext);
        });
    });
  }

  /**
   * Retrieve the list of governance controls configured for the organization. Each control pairs a
   * detection definition with the organization's current detection, notification, and mitigation
   * configuration, along with counts of active and mitigated detections.
   * @param param The request object
   */
  public listGovernanceControls(options?: Configuration,
  ): Promise<GovernanceControlsResponse> {
    const requestContextPromise = this.requestFactory.listGovernanceControls(
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listGovernanceControls(responseContext);
        });
    });
  }

  /**
   * Update the detection, notification, and mitigation configuration of a governance control. Only
   * the attributes present in the request are modified. Changing the mitigation type or its
   * parameters may require additional permissions.
   * @param param The request object
   */
  public updateGovernanceControl(
    param: GovernanceControlsApiUpdateGovernanceControlRequest,
    options?: Configuration,
  ): Promise<GovernanceControlResponse> {
    const requestContextPromise = this.requestFactory.updateGovernanceControl(
      param.detectionType,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateGovernanceControl(responseContext);
        });
    });
  }
}
