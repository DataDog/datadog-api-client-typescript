/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsRetentionFixedTimeIntervalType } from "./ProductAnalyticsRetentionFixedTimeIntervalType";
import { ProductAnalyticsRetentionFixedTimeIntervalUnit } from "./ProductAnalyticsRetentionFixedTimeIntervalUnit";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A retention interval of fixed length, such as "7 days".
 */
export class ProductAnalyticsRetentionFixedTimeInterval {
  /**
   * The discriminator identifying a fixed-length retention interval.
   */
  "type": ProductAnalyticsRetentionFixedTimeIntervalType;
  /**
   * Time unit for a fixed-length retention interval.
   */
  "unit": ProductAnalyticsRetentionFixedTimeIntervalUnit;
  /**
   * Length of the interval, expressed in `unit`.
   */
  "value": number;

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
    type: {
      baseName: "type",
      type: "ProductAnalyticsRetentionFixedTimeIntervalType",
      required: true,
    },
    unit: {
      baseName: "unit",
      type: "ProductAnalyticsRetentionFixedTimeIntervalUnit",
      required: true,
    },
    value: {
      baseName: "value",
      type: "number",
      required: true,
      format: "double",
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
    return ProductAnalyticsRetentionFixedTimeInterval.attributeTypeMap;
  }

  public constructor() {}
}
