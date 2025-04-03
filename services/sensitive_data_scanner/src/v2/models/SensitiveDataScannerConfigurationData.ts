import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SensitiveDataScannerConfiguration } from "./SensitiveDataScannerConfiguration";

/**
 * A Sensitive Data Scanner configuration data.
 */
export class SensitiveDataScannerConfigurationData {
  /**
   * A Sensitive Data Scanner configuration.
   */
  "data"?: SensitiveDataScannerConfiguration;
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
      type: "SensitiveDataScannerConfiguration",
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
    return SensitiveDataScannerConfigurationData.attributeTypeMap;
  }

  public constructor() {}
}
