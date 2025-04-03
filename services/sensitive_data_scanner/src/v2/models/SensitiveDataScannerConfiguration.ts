import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SensitiveDataScannerConfigurationType } from "./SensitiveDataScannerConfigurationType";

/**
 * A Sensitive Data Scanner configuration.
 */
export class SensitiveDataScannerConfiguration {
  /**
   * ID of the configuration.
   */
  "id"?: string;
  /**
   * Sensitive Data Scanner configuration type.
   */
  "type"?: SensitiveDataScannerConfigurationType;
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
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SensitiveDataScannerConfigurationType",
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
    return SensitiveDataScannerConfiguration.attributeTypeMap;
  }

  public constructor() {}
}
