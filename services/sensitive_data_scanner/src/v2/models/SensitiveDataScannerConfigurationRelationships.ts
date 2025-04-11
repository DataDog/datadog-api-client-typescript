import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SensitiveDataScannerGroupList } from "./SensitiveDataScannerGroupList";

/**
 * Relationships of the configuration.
 */
export class SensitiveDataScannerConfigurationRelationships {
  /**
   * List of groups, ordered.
   */
  "groups"?: SensitiveDataScannerGroupList;
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
    groups: {
      baseName: "groups",
      type: "SensitiveDataScannerGroupList",
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
    return SensitiveDataScannerConfigurationRelationships.attributeTypeMap;
  }

  public constructor() {}
}
