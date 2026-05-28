/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Count of devices for a single value of the grouping column in the End User Device Monitoring graph.
 */
export class GraphItemDataAttributesCountsItems {
  /**
   * Value of the grouping column for this bucket (for example, an operating system
   * name or a device type).
   */
  "columnName"?: string;
  /**
   * Number of devices that fall into this bucket.
   */
  "count"?: number;

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
    columnName: {
      baseName: "columnName",
      type: "string",
    },
    count: {
      baseName: "count",
      type: "number",
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
    return GraphItemDataAttributesCountsItems.attributeTypeMap;
  }

  public constructor() {}
}
