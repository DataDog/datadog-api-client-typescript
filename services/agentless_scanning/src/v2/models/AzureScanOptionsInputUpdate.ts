import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AzureScanOptionsInputUpdateData } from "./AzureScanOptionsInputUpdateData";

/**
 * The definition of `AzureScanOptionsInputUpdate` object.
 */
export class AzureScanOptionsInputUpdate {
  /**
   * The definition of `AzureScanOptionsInputUpdateData` object.
   */
  "data"?: AzureScanOptionsInputUpdateData;
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
      type: "AzureScanOptionsInputUpdateData",
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
    return AzureScanOptionsInputUpdate.attributeTypeMap;
  }

  public constructor() {}
}
