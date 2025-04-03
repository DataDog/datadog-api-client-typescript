import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SensitiveDataScannerStandardPattern } from "./SensitiveDataScannerStandardPattern";

/**
 * A standard pattern.
 */
export class SensitiveDataScannerStandardPatternData {
  /**
   * Data containing the standard pattern id.
   */
  "data"?: SensitiveDataScannerStandardPattern;
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
      type: "SensitiveDataScannerStandardPattern",
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
    return SensitiveDataScannerStandardPatternData.attributeTypeMap;
  }

  public constructor() {}
}
