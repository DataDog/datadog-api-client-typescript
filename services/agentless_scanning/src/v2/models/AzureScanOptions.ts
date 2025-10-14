import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AzureScanOptionsData } from "./AzureScanOptionsData";

/**
 * Response object containing Azure scan options for a single subscription.
 */
export class AzureScanOptions {
  /**
   * Single Azure scan options entry.
   */
  "data"?: AzureScanOptionsData;
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
      type: "AzureScanOptionsData",
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
    return AzureScanOptions.attributeTypeMap;
  }

  public constructor() {}
}
