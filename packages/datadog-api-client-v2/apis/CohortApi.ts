import {
  BaseAPIRequestFactory,
  RequiredError,
} from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import {
  RequestContext,
  HttpMethod,
  ResponseContext,
} from "../../datadog-api-client-common/http/http";

import { logger } from "../../../logger";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "../../datadog-api-client-common/exception";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { GetCohortRequest } from "../models/GetCohortRequest";
import { GetCohortResponse } from "../models/GetCohortResponse";
import { GetCohortUsersRequest } from "../models/GetCohortUsersRequest";
import { GetCohortUsersResponse } from "../models/GetCohortUsersResponse";

export class CohortApiRequestFactory extends BaseAPIRequestFactory {
  public async getRumCohort(
    body: GetCohortRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getRumCohort'");
    if (!_config.unstableOperations["v2.getRumCohort"]) {
      throw new Error("Unstable operation 'getRumCohort' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "getRumCohort");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/cohort";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CohortApi.getRumCohort")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "GetCohortRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    return requestContext;
  }

  public async getRumCohortUsers(
    body: GetCohortUsersRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getRumCohortUsers'");
    if (!_config.unstableOperations["v2.getRumCohortUsers"]) {
      throw new Error("Unstable operation 'getRumCohortUsers' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "getRumCohortUsers");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/cohort/users";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CohortApi.getRumCohortUsers")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "GetCohortUsersRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    return requestContext;
  }
}

export class CohortApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getRumCohort
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRumCohort(
    response: ResponseContext
  ): Promise<GetCohortResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GetCohortResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GetCohortResponse"
      ) as GetCohortResponse;
      return body;
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
      const body: GetCohortResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GetCohortResponse",
        ""
      ) as GetCohortResponse;
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
   * @params response Response returned by the server for a request to getRumCohortUsers
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRumCohortUsers(
    response: ResponseContext
  ): Promise<GetCohortUsersResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GetCohortUsersResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GetCohortUsersResponse"
      ) as GetCohortUsersResponse;
      return body;
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
      const body: GetCohortUsersResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GetCohortUsersResponse",
        ""
      ) as GetCohortUsersResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface CohortApiGetRumCohortRequest {
  /**
   * @type GetCohortRequest
   */
  body: GetCohortRequest;
}

export interface CohortApiGetRumCohortUsersRequest {
  /**
   * @type GetCohortUsersRequest
   */
  body: GetCohortUsersRequest;
}

export class CohortApi {
  private requestFactory: CohortApiRequestFactory;
  private responseProcessor: CohortApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: CohortApiRequestFactory,
    responseProcessor?: CohortApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new CohortApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new CohortApiResponseProcessor();
  }

  /**
   * Analyze user cohorts for retention and conversion analysis
   * @param param The request object
   */
  public getRumCohort(
    param: CohortApiGetRumCohortRequest,
    options?: Configuration
  ): Promise<GetCohortResponse> {
    const requestContextPromise = this.requestFactory.getRumCohort(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRumCohort(responseContext);
        });
    });
  }

  /**
   * Get users within a specific cohort for retention analysis
   * @param param The request object
   */
  public getRumCohortUsers(
    param: CohortApiGetRumCohortUsersRequest,
    options?: Configuration
  ): Promise<GetCohortUsersResponse> {
    const requestContextPromise = this.requestFactory.getRumCohortUsers(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRumCohortUsers(responseContext);
        });
    });
  }
}
