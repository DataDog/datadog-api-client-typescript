import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SensitiveDataScannerStandardPatternAttributes } from "./SensitiveDataScannerStandardPatternAttributes";
import { SensitiveDataScannerStandardPatternType } from "./SensitiveDataScannerStandardPatternType";

/**
 * Standard pattern item.
 */
export class SensitiveDataScannerStandardPatternsResponseItem {
  /**
   * Attributes of the Sensitive Data Scanner standard pattern.
   */
  "attributes"?: SensitiveDataScannerStandardPatternAttributes;
  /**
   * ID of the standard pattern.
   */
  "id"?: string;
  /**
   * Sensitive Data Scanner standard pattern type.
   */
  "type"?: SensitiveDataScannerStandardPatternType;
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
      type: "SensitiveDataScannerStandardPatternAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SensitiveDataScannerStandardPatternType",
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
    return SensitiveDataScannerStandardPatternsResponseItem.attributeTypeMap;
  }

  public constructor() {}
}
