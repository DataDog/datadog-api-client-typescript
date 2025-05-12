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
      throw new RequiredError("body", "submitServiceCheck");
    }

    // Path Params
    const localVarPath = "/api/v1/check_run";

    // Make Request Context
    const requestContext = _config
      .getServer("v1.ServiceChecksApi.submitServiceCheck")
      .makeRequestContext(localVarPath, HttpMethod.POST);
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
    if (response.httpStatusCode === 202) {
      const body: IntakePayloadAccepted = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IntakePayloadAccepted"
      ) as IntakePayloadAccepted;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 408 ||
      response.httpStatusCode === 413 ||
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
