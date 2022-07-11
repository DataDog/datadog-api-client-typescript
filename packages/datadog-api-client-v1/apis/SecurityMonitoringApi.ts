import {
  BaseAPIRequestFactory,
  RequiredError,
} from "../../datadog-api-client-common/baseapi";
import {
  Configuration,
  getServer,
  applySecurityAuthentication,
} from "../../datadog-api-client-common/configuration";
import {
  RequestContext,
  HttpMethod,
  ResponseContext,
} from "../../datadog-api-client-common/http/http";

import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "../../datadog-api-client-common/exception";
import { isCodeInRange } from "../../datadog-api-client-common/util";

import { AddSignalToIncidentRequest } from "../models/AddSignalToIncidentRequest";
import { APIErrorResponse } from "../models/APIErrorResponse";
import { SignalAssigneeUpdateRequest } from "../models/SignalAssigneeUpdateRequest";
import { SignalStateUpdateRequest } from "../models/SignalStateUpdateRequest";
import { SuccessfulSignalUpdateResponse } from "../models/SuccessfulSignalUpdateResponse";

export class SecurityMonitoringApiRequestFactory extends BaseAPIRequestFactory {
  public async addSecurityMonitoringSignalToIncident(
    signalId: string,
    body: AddSignalToIncidentRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'signalId' is not null or undefined
    if (signalId === null || signalId === undefined) {
      throw new RequiredError(
        "Required parameter signalId was null or undefined when calling addSecurityMonitoringSignalToIncident."
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling addSecurityMonitoringSignalToIncident."
      );
    }

    // Path Params
    const localVarPath =
      "/api/v1/security_analytics/signals/{signal_id}/add_to_incident".replace(
        "{" + "signal_id" + "}",
        encodeURIComponent(String(signalId))
      );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v1.SecurityMonitoringApi.addSecurityMonitoringSignalToIncident"
    ).makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "AddSignalToIncidentRequest", ""),
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

  public async editSecurityMonitoringSignalAssignee(
    signalId: string,
    body: SignalAssigneeUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'signalId' is not null or undefined
    if (signalId === null || signalId === undefined) {
      throw new RequiredError(
        "Required parameter signalId was null or undefined when calling editSecurityMonitoringSignalAssignee."
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling editSecurityMonitoringSignalAssignee."
      );
    }

    // Path Params
    const localVarPath =
      "/api/v1/security_analytics/signals/{signal_id}/assignee".replace(
        "{" + "signal_id" + "}",
        encodeURIComponent(String(signalId))
      );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v1.SecurityMonitoringApi.editSecurityMonitoringSignalAssignee"
    ).makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SignalAssigneeUpdateRequest", ""),
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

  public async editSecurityMonitoringSignalState(
    signalId: string,
    body: SignalStateUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'signalId' is not null or undefined
    if (signalId === null || signalId === undefined) {
      throw new RequiredError(
        "Required parameter signalId was null or undefined when calling editSecurityMonitoringSignalState."
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling editSecurityMonitoringSignalState."
      );
    }

    // Path Params
    const localVarPath =
      "/api/v1/security_analytics/signals/{signal_id}/state".replace(
        "{" + "signal_id" + "}",
        encodeURIComponent(String(signalId))
      );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v1.SecurityMonitoringApi.editSecurityMonitoringSignalState"
    ).makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SignalStateUpdateRequest", ""),
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

export class SecurityMonitoringApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to addSecurityMonitoringSignalToIncident
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async addSecurityMonitoringSignalToIncident(
    response: ResponseContext
  ): Promise<SuccessfulSignalUpdateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SuccessfulSignalUpdateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SuccessfulSignalUpdateResponse",
        ""
      ) as SuccessfulSignalUpdateResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SuccessfulSignalUpdateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SuccessfulSignalUpdateResponse",
        ""
      ) as SuccessfulSignalUpdateResponse;
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
   * @params response Response returned by the server for a request to editSecurityMonitoringSignalAssignee
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async editSecurityMonitoringSignalAssignee(
    response: ResponseContext
  ): Promise<SuccessfulSignalUpdateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SuccessfulSignalUpdateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SuccessfulSignalUpdateResponse",
        ""
      ) as SuccessfulSignalUpdateResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SuccessfulSignalUpdateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SuccessfulSignalUpdateResponse",
        ""
      ) as SuccessfulSignalUpdateResponse;
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
   * @params response Response returned by the server for a request to editSecurityMonitoringSignalState
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async editSecurityMonitoringSignalState(
    response: ResponseContext
  ): Promise<SuccessfulSignalUpdateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SuccessfulSignalUpdateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SuccessfulSignalUpdateResponse",
        ""
      ) as SuccessfulSignalUpdateResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }
    if (isCodeInRange("429", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(429, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SuccessfulSignalUpdateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SuccessfulSignalUpdateResponse",
        ""
      ) as SuccessfulSignalUpdateResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface SecurityMonitoringApiAddSecurityMonitoringSignalToIncidentRequest {
  /**
   * The ID of the signal.
   * @type string
   */
  signalId: string;
  /**
   * Attributes describing the signal update.
   * @type AddSignalToIncidentRequest
   */
  body: AddSignalToIncidentRequest;
}

export interface SecurityMonitoringApiEditSecurityMonitoringSignalAssigneeRequest {
  /**
   * The ID of the signal.
   * @type string
   */
  signalId: string;
  /**
   * Attributes describing the signal update.
   * @type SignalAssigneeUpdateRequest
   */
  body: SignalAssigneeUpdateRequest;
}

export interface SecurityMonitoringApiEditSecurityMonitoringSignalStateRequest {
  /**
   * The ID of the signal.
   * @type string
   */
  signalId: string;
  /**
   * Attributes describing the signal update.
   * @type SignalStateUpdateRequest
   */
  body: SignalStateUpdateRequest;
}

export class SecurityMonitoringApi {
  private requestFactory: SecurityMonitoringApiRequestFactory;
  private responseProcessor: SecurityMonitoringApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: SecurityMonitoringApiRequestFactory,
    responseProcessor?: SecurityMonitoringApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new SecurityMonitoringApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new SecurityMonitoringApiResponseProcessor();
  }

  /**
   * Add a security signal to an incident. This makes it possible to search for signals by incident within the signal explorer and to view the signals on the incident timeline.
   * @param param The request object
   */
  public addSecurityMonitoringSignalToIncident(
    param: SecurityMonitoringApiAddSecurityMonitoringSignalToIncidentRequest,
    options?: Configuration
  ): Promise<SuccessfulSignalUpdateResponse> {
    const requestContextPromise =
      this.requestFactory.addSecurityMonitoringSignalToIncident(
        param.signalId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.addSecurityMonitoringSignalToIncident(
            responseContext
          );
        });
    });
  }

  /**
   * Modify the triage assignee of a security signal.
   * @param param The request object
   */
  public editSecurityMonitoringSignalAssignee(
    param: SecurityMonitoringApiEditSecurityMonitoringSignalAssigneeRequest,
    options?: Configuration
  ): Promise<SuccessfulSignalUpdateResponse> {
    const requestContextPromise =
      this.requestFactory.editSecurityMonitoringSignalAssignee(
        param.signalId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.editSecurityMonitoringSignalAssignee(
            responseContext
          );
        });
    });
  }

  /**
   * Change the triage state of a security signal.
   * @param param The request object
   */
  public editSecurityMonitoringSignalState(
    param: SecurityMonitoringApiEditSecurityMonitoringSignalStateRequest,
    options?: Configuration
  ): Promise<SuccessfulSignalUpdateResponse> {
    const requestContextPromise =
      this.requestFactory.editSecurityMonitoringSignalState(
        param.signalId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.editSecurityMonitoringSignalState(
            responseContext
          );
        });
    });
  }
}
