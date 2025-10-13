import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AzureScanOptionsInputUpdateDataAttributes } from "./AzureScanOptionsInputUpdateDataAttributes";
import { AzureScanOptionsInputUpdateDataType } from "./AzureScanOptionsInputUpdateDataType";

/**
 * Data object for updating the scan options of a single Azure subscription.
 */
export class AzureScanOptionsInputUpdateData {
  /**
   * Attributes for updating Azure scan options configuration.
   */
  "attributes"?: AzureScanOptionsInputUpdateDataAttributes;
  /**
   * The Azure subscription ID.
   */
  "id": string;
  /**
   * Azure scan options resource type.
   */
  "type": AzureScanOptionsInputUpdateDataType;
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
    attributes: {
      baseName: "attributes",
      type: "AzureScanOptionsInputUpdateDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AzureScanOptionsInputUpdateDataType",
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
    return AzureScanOptionsInputUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
