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
import { SankeyRequest } from "../models/SankeyRequest";
import { SankeyResponse } from "../models/SankeyResponse";

export class UserFlowApiRequestFactory extends BaseAPIRequestFactory {
  public async getRumSankey(
    body: SankeyRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getRumSankey'");
    if (!_config.unstableOperations["v2.getRumSankey"]) {
      throw new Error("Unstable operation 'getRumSankey' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "getRumSankey");
    }

    // Path Params
    const localVarPath = "/api/v2/rum/sankey";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.UserFlowApi.getRumSankey")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "SankeyRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    return requestContext;
  }
}

export class UserFlowApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getRumSankey
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRumSankey(
    response: ResponseContext
  ): Promise<SankeyResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SankeyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SankeyResponse"
      ) as SankeyResponse;
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
      const body: SankeyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SankeyResponse",
        ""
      ) as SankeyResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface UserFlowApiGetRumSankeyRequest {
  /**
   * @type SankeyRequest
   */
  body: SankeyRequest;
}

export class UserFlowApi {
  private requestFactory: UserFlowApiRequestFactory;
  private responseProcessor: UserFlowApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: UserFlowApiRequestFactory,
    responseProcessor?: UserFlowApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new UserFlowApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new UserFlowApiResponseProcessor();
  }

  /**
   * Generate Sankey diagrams to visualize user flow paths and drop-off points
   * @param param The request object
   */
  public getRumSankey(
    param: UserFlowApiGetRumSankeyRequest,
    options?: Configuration
  ): Promise<SankeyResponse> {
    const requestContextPromise = this.requestFactory.getRumSankey(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRumSankey(responseContext);
        });
    });
  }
}
