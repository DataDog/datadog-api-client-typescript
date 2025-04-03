import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SensitiveDataScannerGroupType } from "./SensitiveDataScannerGroupType";

/**
 * Data related to a Sensitive Data Scanner Group.
 */
export class SensitiveDataScannerGroupItem {
  /**
   * ID of the group.
   */
  "id"?: string;
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
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SensitiveDataScannerGroupType",
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
    return SensitiveDataScannerGroupItem.attributeTypeMap;
  }

  public constructor() {}
}
