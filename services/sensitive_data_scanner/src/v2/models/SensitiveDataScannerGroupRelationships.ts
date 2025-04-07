import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SensitiveDataScannerConfigurationData } from "./SensitiveDataScannerConfigurationData";
import { SensitiveDataScannerRuleData } from "./SensitiveDataScannerRuleData";

/**
 * Relationships of the group.
 */
export class SensitiveDataScannerGroupRelationships {
  /**
   * A Sensitive Data Scanner configuration data.
   */
  "configuration"?: SensitiveDataScannerConfigurationData;
  /**
   * Rules included in the group.
   */
  "rules"?: SensitiveDataScannerRuleData;
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
    configuration: {
      baseName: "configuration",
      type: "SensitiveDataScannerConfigurationData",
    },
    rules: {
      baseName: "rules",
      type: "SensitiveDataScannerRuleData",
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
    return SensitiveDataScannerGroupRelationships.attributeTypeMap;
  }

  public constructor() {}
}
