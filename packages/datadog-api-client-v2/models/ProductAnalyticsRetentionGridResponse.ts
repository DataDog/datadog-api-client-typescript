/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsRetentionGridResponseData } from "./ProductAnalyticsRetentionGridResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response for a retention grid query.
 */
export class ProductAnalyticsRetentionGridResponse {
  /**
   * The single JSON:API resource holding a computed retention grid. Its attributes contain the
   * return periods forming the columns and the cohorts forming the rows.
   */
  "data": ProductAnalyticsRetentionGridResponseData;

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
      type: "ProductAnalyticsRetentionGridResponseData",
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
    return ProductAnalyticsRetentionGridResponse.attributeTypeMap;
  }

  public constructor() {}
}
