/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TableRowResourceDataAttributes } from "./TableRowResourceDataAttributes";
import { TableRowResourceDataType } from "./TableRowResourceDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The data object containing the row column names and values.
 */
export class TableRowResourceData {
  /**
   * Column values for this row in the reference table.
   */
  "attributes"?: TableRowResourceDataAttributes;
  /**
   * Row identifier, corresponding to the primary key value.
   */
  "id"?: string;
  /**
   * Row resource type.
   */
  "type": TableRowResourceDataType;

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
      type: "TableRowResourceDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "TableRowResourceDataType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TableRowResourceData.attributeTypeMap;
  }

  public constructor() {}
}
