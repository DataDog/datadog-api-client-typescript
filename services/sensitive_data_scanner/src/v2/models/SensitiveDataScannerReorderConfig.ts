import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SensitiveDataScannerConfigurationRelationships } from "./SensitiveDataScannerConfigurationRelationships";
import { SensitiveDataScannerConfigurationType } from "./SensitiveDataScannerConfigurationType";

/**
 * Data related to the reordering of scanning groups.
 */
export class SensitiveDataScannerReorderConfig {
  /**
   * ID of the configuration.
   */
  "id"?: string;
  /**
   * Relationships of the configuration.
   */
  "relationships"?: SensitiveDataScannerConfigurationRelationships;
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
    relationships: {
      baseName: "relationships",
      type: "SensitiveDataScannerConfigurationRelationships",
    },
    type: {
      baseName: "type",
      type: "SensitiveDataScannerConfigurationType",
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
    return SensitiveDataScannerReorderConfig.attributeTypeMap;
  }

  public constructor() {}
}
