import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TableResultV2Data } from "./TableResultV2Data";

/**
 * The definition of `TableResultV2Array` object.
 */
export class TableResultV2Array {
  /**
   * The reference tables.
   */
  "data": Array<TableResultV2Data>;
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
      type: "Array<TableResultV2Data>",
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
    return TableResultV2Array.attributeTypeMap;
  }

  public constructor() {}
}
