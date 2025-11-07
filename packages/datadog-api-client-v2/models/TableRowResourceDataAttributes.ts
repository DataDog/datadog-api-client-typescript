/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Column values for this row in the reference table.
 */
export class TableRowResourceDataAttributes {
  /**
   * Key-value pairs representing the row data, where keys are field names from the schema.
   */
  "values"?: any;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    values: {
      baseName: "values",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TableRowResourceDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
