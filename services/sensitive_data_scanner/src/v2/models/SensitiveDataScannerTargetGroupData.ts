import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SensitiveDataScannerGroupType } from "./SensitiveDataScannerGroupType";
import { SensitiveDataScannerTargetGroupAttributes } from "./SensitiveDataScannerTargetGroupAttributes";
import { SensitiveDataScannerTargetGroupRelationships } from "./SensitiveDataScannerTargetGroupRelationships";

/**
 * A scanning group of a target.
 */
export class SensitiveDataScannerTargetGroupData {
  /**
   * Attributes of a scanning group of a target.
   */
  "attributes": SensitiveDataScannerTargetGroupAttributes;
  /**
   * ID of the group.
   */
  "id": string;
  /**
   * Relationships of a scanning group of a target.
   */
  "relationships": SensitiveDataScannerTargetGroupRelationships;
  /**
   * Sensitive Data Scanner group type.
   */
  "type": SensitiveDataScannerGroupType;
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
      type: "SensitiveDataScannerTargetGroupAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "SensitiveDataScannerTargetGroupRelationships",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SensitiveDataScannerGroupType",
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
    return SensitiveDataScannerTargetGroupData.attributeTypeMap;
  }

  public constructor() {}
}
