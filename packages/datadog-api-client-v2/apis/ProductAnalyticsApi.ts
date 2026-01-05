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

import { ProductAnalyticsServerSideEventErrors } from "../models/ProductAnalyticsServerSideEventErrors";
import { ProductAnalyticsServerSideEventItem } from "../models/ProductAnalyticsServerSideEventItem";

export class ProductAnalyticsApiRequestFactory extends BaseAPIRequestFactory {
  public async submitProductAnalyticsEvent(
    body: ProductAnalyticsServerSideEventItem,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "submitProductAnalyticsEvent");
    }

    // Path Params
    const localVarPath = "/api/v2/prodlytics";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ProductAnalyticsApi.submitProductAnalyticsEvent")
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
        "ProductAnalyticsServerSideEventItem",
        ""
      ),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth"]);

    return requestContext;
  }
}

export class ProductAnalyticsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to submitProductAnalyticsEvent
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async submitProductAnalyticsEvent(
    response: ResponseContext
  ): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 202) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any"
      ) as any;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 408 ||
      response.httpStatusCode === 413 ||
      response.httpStatusCode === 429 ||
      response.httpStatusCode === 500 ||
      response.httpStatusCode === 503
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: ProductAnalyticsServerSideEventErrors;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "ProductAnalyticsServerSideEventErrors"
        ) as ProductAnalyticsServerSideEventErrors;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<ProductAnalyticsServerSideEventErrors>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<ProductAnalyticsServerSideEventErrors>(
        response.httpStatusCode,
        body
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface ProductAnalyticsApiSubmitProductAnalyticsEventRequest {
  /**
   * Server-side event to send (JSON format).
   * @type ProductAnalyticsServerSideEventItem
   */
  body: ProductAnalyticsServerSideEventItem;
}

export class ProductAnalyticsApi {
  private requestFactory: ProductAnalyticsApiRequestFactory;
  private responseProcessor: ProductAnalyticsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: ProductAnalyticsApiRequestFactory,
    responseProcessor?: ProductAnalyticsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new ProductAnalyticsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new ProductAnalyticsApiResponseProcessor();
  }

  /**
   * Send server-side events to Product Analytics. Server-side events are retained for 15 months.
   *
   * Server-Side events in Product Analytics are helpful for tracking events that occur on the server,
   * as opposed to client-side events, which are captured by Real User Monitoring (RUM) SDKs.
   * This allows for a more comprehensive view of the user journey by including actions that happen on the server.
   * Typical examples could be `checkout.completed` or `payment.processed`.
   *
   * Ingested server-side events are integrated into Product Analytics to allow users to select and filter
   * these events in the event picker, similar to how views or actions are handled.
   *
   * **Requirements:**
   * - At least one of `usr`, `account`, or `session` must be provided with a valid ID.
   * - The `application.id` must reference a Product Analytics-enabled application.
   *
   * **Custom Attributes:**
   * Any additional fields in the payload are flattened and searchable as facets.
   * For example, a payload with `{"customer": {"tier": "premium"}}` is searchable with
   * the syntax `@customer.tier:premium` in Datadog.
   *
   * The status codes answered by the HTTP API are:
   * - 202: Accepted: The request has been accepted for processing
   * - 400: Bad request (likely an issue in the payload formatting)
   * - 401: Unauthorized (likely a missing API Key)
   * - 403: Permission issue (likely using an invalid API Key)
   * - 408: Request Timeout, request should be retried after some time
   * - 413: Payload too large (batch is above 5MB uncompressed)
   * - 429: Too Many Requests, request should be retried after some time
   * - 500: Internal Server Error, the server encountered an unexpected condition that prevented it from fulfilling the request, request should be retried after some time
   * - 503: Service Unavailable, the server is not ready to handle the request probably because it is overloaded, request should be retried after some time
   * @param param The request object
   */
  public submitProductAnalyticsEvent(
    param: ProductAnalyticsApiSubmitProductAnalyticsEventRequest,
    options?: Configuration
  ): Promise<any> {
    const requestContextPromise =
      this.requestFactory.submitProductAnalyticsEvent(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.submitProductAnalyticsEvent(
            responseContext
          );
        });
    });
  }
}
