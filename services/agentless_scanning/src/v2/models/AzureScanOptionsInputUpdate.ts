import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AzureScanOptionsInputUpdateData } from "./AzureScanOptionsInputUpdateData";

/**
 * Request object for updating Azure scan options.
 */
export class AzureScanOptionsInputUpdate {
  /**
   * Data object for updating the scan options of a single Azure subscription.
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
