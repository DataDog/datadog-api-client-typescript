import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SensitiveDataScannerConfigurationRelationships } from "./SensitiveDataScannerConfigurationRelationships";
import { SensitiveDataScannerConfigurationType } from "./SensitiveDataScannerConfigurationType";

/**
 * Response data related to the scanning groups.
 */
export class SensitiveDataScannerGetConfigResponseData {
  /**
   * Attributes of the Sensitive Data configuration.
   */
  "attributes"?: any;
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
    attributes: {
      baseName: "attributes",
      type: "any",
    },
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
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SensitiveDataScannerGetConfigResponseData.attributeTypeMap;
  }

  public constructor() {}
}
