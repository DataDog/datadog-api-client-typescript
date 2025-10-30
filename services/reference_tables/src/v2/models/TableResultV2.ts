import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TableResultV2Data } from "./TableResultV2Data";

/**
 * The definition of a reference table object.
 */
export class TableResultV2 {
  /**
   * The definition of the table result data object.
   */
  "data"?: TableResultV2Data;
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
      type: "TableResultV2Data",
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
    return TableResultV2.attributeTypeMap;
  }

  public constructor() {}
}
