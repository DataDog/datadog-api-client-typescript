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

import { APIErrorResponse } from "../models/APIErrorResponse";
import { IntakePayloadAccepted } from "../models/IntakePayloadAccepted";
import { ServiceCheck } from "../models/ServiceCheck";

export class ServiceChecksApiRequestFactory extends BaseAPIRequestFactory {
  public async submitServiceCheck(
    body: Array<ServiceCheck>,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling submitServiceCheck."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/check_run";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "ServiceChecksApi.submitServiceCheck"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "text/json, application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "Array<ServiceCheck>", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth"]);

    return requestContext;
  }
}

export class ServiceChecksApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to submitServiceCheck
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async submitServiceCheck(
    response: ResponseContext
  ): Promise<IntakePayloadAccepted> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("202", response.httpStatusCode)) {
      const body: IntakePayloadAccepted = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IntakePayloadAccepted",
        ""
      ) as IntakePayloadAccepted;
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
    if (isCodeInRange("408", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(408, body);
    }
    if (isCodeInRange("413", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(413, body);
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
      const body: IntakePayloadAccepted = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IntakePayloadAccepted",
        ""
      ) as IntakePayloadAccepted;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface ServiceChecksApiSubmitServiceCheckRequest {
  /**
   * Service Check request body.
   * @type Array<ServiceCheck>
   */
  body: Array<ServiceCheck>;
}

export class ServiceChecksApi {
  private requestFactory: ServiceChecksApiRequestFactory;
  private responseProcessor: ServiceChecksApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: ServiceChecksApiRequestFactory,
    responseProcessor?: ServiceChecksApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new ServiceChecksApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new ServiceChecksApiResponseProcessor();
  }

  /**
   * Submit a list of Service Checks.
   *
   * **Notes**:
   * - A valid API key is required.
   * - Service checks can be submitted up to 10 minutes in the past.
   * @param param The request object
   */
  public submitServiceCheck(
    param: ServiceChecksApiSubmitServiceCheckRequest,
    options?: Configuration
  ): Promise<IntakePayloadAccepted> {
    const requestContextPromise = this.requestFactory.submitServiceCheck(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.submitServiceCheck(responseContext);
        });
    });
  }
}
