import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AzureScanOptionsData } from "./AzureScanOptionsData";

/**
 * The definition of `AzureScanOptionsArray` object.
 */
export class AzureScanOptionsArray {
  /**
   * The `AzureScanOptionsArray` `data`.
   */
  "data": Array<AzureScanOptionsData>;
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
      type: "Array<AzureScanOptionsData>",
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
    return AzureScanOptionsArray.attributeTypeMap;
  }

  public constructor() {}
}
