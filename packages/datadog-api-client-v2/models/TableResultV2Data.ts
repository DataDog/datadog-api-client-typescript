/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TableResultV2DataAttributes } from "./TableResultV2DataAttributes";
import { TableResultV2DataType } from "./TableResultV2DataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The data object containing the reference table configuration and state.
 */
export class TableResultV2Data {
  /**
   * Attributes that define the reference table's configuration and properties.
   */
  "attributes"?: TableResultV2DataAttributes;
  /**
   * Unique identifier for the reference table.
   */
  "id"?: string;
  /**
   * Reference table resource type.
   */
  "type": TableResultV2DataType;

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
      type: "TableResultV2DataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "TableResultV2DataType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TableResultV2Data.attributeTypeMap;
  }

  public constructor() {}
}
