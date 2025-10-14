import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AzureScanOptionsData } from "./AzureScanOptionsData";

/**
 * Response object containing a list of Azure scan options.
 */
export class AzureScanOptionsArray {
  /**
   * A list of Azure scan options.
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
