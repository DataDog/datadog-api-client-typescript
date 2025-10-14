import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AzureScanOptionsDataAttributes } from "./AzureScanOptionsDataAttributes";
import { AzureScanOptionsDataType } from "./AzureScanOptionsDataType";

/**
 * Single Azure scan options entry.
 */
export class AzureScanOptionsData {
  /**
   * Attributes for Azure scan options configuration.
   */
  "attributes"?: AzureScanOptionsDataAttributes;
  /**
   * The Azure subscription ID.
   */
  "id": string;
  /**
   * The type of the resource. The value should always be `azure_scan_options`.
   */
  "type": AzureScanOptionsDataType;
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
      type: "AzureScanOptionsDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AzureScanOptionsDataType",
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
    return AzureScanOptionsData.attributeTypeMap;
  }

  public constructor() {}
}
