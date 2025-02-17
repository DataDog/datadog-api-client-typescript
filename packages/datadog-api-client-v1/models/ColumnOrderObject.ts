/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ColumnOrderObjectOrder } from "./ColumnOrderObjectOrder";
import { ColumnOrderObjectType } from "./ColumnOrderObjectType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Order criteria
 */
export class ColumnOrderObject {
  /**
   * Index of the sorted column
   */
  "index"?: number;
  /**
   * Name of the sorted column
   */
  "name"?: string;
  /**
   * Order object
   */
  "order": ColumnOrderObjectOrder;
  /**
   * type of column
   */
  "type": ColumnOrderObjectType;

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
    index: {
      baseName: "index",
      type: "number",
      format: "double",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    order: {
      baseName: "order",
      type: "ColumnOrderObjectOrder",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ColumnOrderObjectType",
      required: true,
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
    return ColumnOrderObject.attributeTypeMap;
  }

  public constructor() {}
}
