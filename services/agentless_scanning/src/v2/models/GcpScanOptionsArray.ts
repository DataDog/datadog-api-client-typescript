import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GcpScanOptionsData } from "./GcpScanOptionsData";

/**
 * The definition of `GcpScanOptionsArray` object.
 */
export class GcpScanOptionsArray {
  /**
   * The `GcpScanOptionsArray` `data`.
   */
  "data": Array<GcpScanOptionsData>;
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
      type: "Array<GcpScanOptionsData>",
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
    return GcpScanOptionsArray.attributeTypeMap;
  }

  public constructor() {}
}
