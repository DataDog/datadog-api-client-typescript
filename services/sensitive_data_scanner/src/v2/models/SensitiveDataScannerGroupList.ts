import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SensitiveDataScannerGroupItem } from "./SensitiveDataScannerGroupItem";

/**
 * List of groups, ordered.
 */
export class SensitiveDataScannerGroupList {
  /**
   * List of groups. The order is important.
   */
  "data"?: Array<SensitiveDataScannerGroupItem>;
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
      type: "Array<SensitiveDataScannerGroupItem>",
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
    return SensitiveDataScannerGroupList.attributeTypeMap;
  }

  public constructor() {}
}
