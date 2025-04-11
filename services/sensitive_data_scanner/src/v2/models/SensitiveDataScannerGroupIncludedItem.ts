import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SensitiveDataScannerGroupAttributes } from "./SensitiveDataScannerGroupAttributes";
import { SensitiveDataScannerGroupRelationships } from "./SensitiveDataScannerGroupRelationships";
import { SensitiveDataScannerGroupType } from "./SensitiveDataScannerGroupType";

/**
 * A Scanning Group included item.
 */
export class SensitiveDataScannerGroupIncludedItem {
  /**
   * Attributes of the Sensitive Data Scanner group.
   */
  "attributes"?: SensitiveDataScannerGroupAttributes;
  /**
   * ID of the group.
   */
  "id"?: string;
  /**
   * Relationships of the group.
   */
  "relationships"?: SensitiveDataScannerGroupRelationships;
  /**
   * Sensitive Data Scanner group type.
   */
  "type"?: SensitiveDataScannerGroupType;
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
      type: "SensitiveDataScannerGroupAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "SensitiveDataScannerGroupRelationships",
    },
    type: {
      baseName: "type",
      type: "SensitiveDataScannerGroupType",
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
    return SensitiveDataScannerGroupIncludedItem.attributeTypeMap;
  }

  public constructor() {}
}
