import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GcpScanOptionsData } from "./GcpScanOptionsData";

/**
 * The definition of `GcpScanOptions` object.
 */
export class GcpScanOptions {
  /**
   * The definition of `GcpScanOptionsData` object.
   */
  "data"?: GcpScanOptionsData;
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
      type: "GcpScanOptionsData",
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
    return GcpScanOptions.attributeTypeMap;
  }

  public constructor() {}
}
