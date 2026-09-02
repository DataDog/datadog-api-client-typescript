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
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { ProductCatalogSKUsAPIVersion } from "../models/ProductCatalogSKUsAPIVersion";
import { ProductCatalogSKUsResponse } from "../models/ProductCatalogSKUsResponse";

export class ProductCatalogApiRequestFactory extends BaseAPIRequestFactory {
  public async listProductCatalogSKUs(
    version: ProductCatalogSKUsAPIVersion,
    asOfDate?: Date,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listProductCatalogSKUs'");
    if (!_config.unstableOperations["v2.listProductCatalogSKUs"]) {
      throw new Error(
        "Unstable operation 'listProductCatalogSKUs' is disabled"
      );
    }

    // verify required parameter 'version' is not null or undefined
    if (version === null || version === undefined) {
      throw new RequiredError("version", "listProductCatalogSKUs");
    }

    // Path Params
    const localVarPath = "/api/v2/product-catalog/skus";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ProductCatalogApi.listProductCatalogSKUs")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (version !== undefined) {
      requestContext.setQueryParam(
        "version",
        ObjectSerializer.serialize(version, "ProductCatalogSKUsAPIVersion", ""),
        ""
      );
    }
    if (asOfDate !== undefined) {
      requestContext.setQueryParam(
        "as_of_date",
        ObjectSerializer.serialize(asOfDate, "Date", "date"),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }
}

export class ProductCatalogApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listProductCatalogSKUs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listProductCatalogSKUs(
    response: ResponseContext
  ): Promise<ProductCatalogSKUsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: ProductCatalogSKUsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ProductCatalogSKUsResponse"
      ) as ProductCatalogSKUsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: ProductCatalogSKUsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ProductCatalogSKUsResponse",
        ""
      ) as ProductCatalogSKUsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface ProductCatalogApiListProductCatalogSKUsRequest {
  /**
   * The version of the product catalog contract to return. `v1` is the latest.
   * @type ProductCatalogSKUsAPIVersion
   */
  version: ProductCatalogSKUsAPIVersion;
  /**
   * The date the returned prices, allotments, and pricing tiers are effective as of, in
   * `YYYY-MM-DD` format. Defaults to the date of the request, and must not be later
   * than it.
   * @type Date
   */
  asOfDate?: Date;
}

export class ProductCatalogApi {
  private requestFactory: ProductCatalogApiRequestFactory;
  private responseProcessor: ProductCatalogApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: ProductCatalogApiRequestFactory,
    responseProcessor?: ProductCatalogApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new ProductCatalogApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new ProductCatalogApiResponseProcessor();
  }

  /**
   * Get every generally available Datadog SKU, with the pricing and allotment metadata that
   * applies to it, for the Datadog site serving the request. A SKU is generally available
   * when it is billed through a metered commitment or through automatic billing; SKUs in any
   * other phase are not returned.
   *
   * Prices, allotments, and pricing tiers are returned as they were in effect on
   * `as_of_date`, which defaults to the date of the request. Prices are public list prices:
   * they do not reflect discounts, commitments, or negotiated rates on an account.
   *
   * Each SKU is a separate resource in `data`, identified by its SKU code, and sorted by
   * that code in ascending order. The whole catalog is returned in a single response, so
   * this endpoint is not paginated.
   * @param param The request object
   */
  public listProductCatalogSKUs(
    param: ProductCatalogApiListProductCatalogSKUsRequest,
    options?: Configuration
  ): Promise<ProductCatalogSKUsResponse> {
    const requestContextPromise = this.requestFactory.listProductCatalogSKUs(
      param.version,
      param.asOfDate,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listProductCatalogSKUs(responseContext);
        });
    });
  }
}
