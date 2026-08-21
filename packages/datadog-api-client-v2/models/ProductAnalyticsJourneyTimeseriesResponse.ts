/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsJourneyTimeseriesResponseData } from "./ProductAnalyticsJourneyTimeseriesResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response for a journey timeseries query.
 */
export class ProductAnalyticsJourneyTimeseriesResponse {
  /**
   * The single JSON:API resource holding journey timeseries results. Its attributes contain one
   * series per group along with the timestamps the points fall on.
   */
  "data": ProductAnalyticsJourneyTimeseriesResponseData;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "ProductAnalyticsJourneyTimeseriesResponseData",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ProductAnalyticsJourneyTimeseriesResponse.attributeTypeMap;
  }

  public constructor() {}
}
