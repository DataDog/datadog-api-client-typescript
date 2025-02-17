/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ColumnOrderObject } from "./ColumnOrderObject";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Sort object
 */
export class ColumnSortObject {
  /**
   * Limit number of items displayed
   */
  "count"?: number;
  /**
   * Order criteria
   */
  "orderBy"?: Array<ColumnOrderObject>;

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
    count: {
      baseName: "count",
      type: "number",
      format: "double",
    },
    orderBy: {
      baseName: "order_by",
      type: "Array<ColumnOrderObject>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ColumnSortObject.attributeTypeMap;
  }

  public constructor() {}
}
