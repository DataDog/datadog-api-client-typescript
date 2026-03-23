/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsTimeseriesResponseAttributes } from "./ProductAnalyticsTimeseriesResponseAttributes";
import { ProductAnalyticsTimeseriesResponseType } from "./ProductAnalyticsTimeseriesResponseType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for a timeseries analytics response.
 */
export class ProductAnalyticsTimeseriesResponseData {
  /**
   * Attributes of a timeseries analytics response, containing series data, timestamps, and interval definitions.
   */
  "attributes"?: ProductAnalyticsTimeseriesResponseAttributes;
  /**
   * Unique identifier for this response data object.
   */
  "id"?: string;
  /**
   * The resource type identifier for a timeseries analytics response.
   */
  "type"?: ProductAnalyticsTimeseriesResponseType;

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
    attributes: {
      baseName: "attributes",
      type: "ProductAnalyticsTimeseriesResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsTimeseriesResponseType",
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
    return ProductAnalyticsTimeseriesResponseData.attributeTypeMap;
  }

  public constructor() {}
}
