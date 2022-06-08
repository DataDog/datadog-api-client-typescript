import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import {
  Configuration,
  getServer,
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
import { IPRanges } from "../models/IPRanges";

export class IPRangesApiRequestFactory extends BaseAPIRequestFactory {
  public async getIPRanges(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v1.IPRangesApi.getIPRanges"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    return requestContext;
  }
}

export class IPRangesApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getIPRanges
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getIPRanges(response: ResponseContext): Promise<IPRanges> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IPRanges = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IPRanges",
        ""
      ) as IPRanges;
      return body;
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
      const body: IPRanges = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IPRanges",
        ""
      ) as IPRanges;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export class IPRangesApi {
  private requestFactory: IPRangesApiRequestFactory;
  private responseProcessor: IPRangesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: IPRangesApiRequestFactory,
    responseProcessor?: IPRangesApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new IPRangesApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new IPRangesApiResponseProcessor();
  }

  /**
   * Get information about Datadog IP ranges.
   * @param param The request object
   */
  public getIPRanges(options?: Configuration): Promise<IPRanges> {
    const requestContextPromise = this.requestFactory.getIPRanges(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIPRanges(responseContext);
        });
    });
  }
}
