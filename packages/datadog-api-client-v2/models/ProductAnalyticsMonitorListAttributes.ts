/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsMonitorListItem } from "./ProductAnalyticsMonitorListItem";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * A list of Product Analytics monitors.
 */
export class ProductAnalyticsMonitorListAttributes {
  /**
   * The monitors.
   */
  "monitors": Array<ProductAnalyticsMonitorListItem>;
  /**
   * Total number of monitors that match, across all pages.
   */
  "total": Int64;

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
    monitors: {
      baseName: "monitors",
      type: "Array<ProductAnalyticsMonitorListItem>",
      required: true,
    },
    total: {
      baseName: "total",
      type: "number",
      required: true,
      format: "int64",
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
    return ProductAnalyticsMonitorListAttributes.attributeTypeMap;
  }

  public constructor() {}
}
