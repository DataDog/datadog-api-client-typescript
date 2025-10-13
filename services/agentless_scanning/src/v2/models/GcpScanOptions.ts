import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GcpScanOptionsData } from "./GcpScanOptionsData";

/**
 * Response object containing GCP scan options for a single project.
 */
export class GcpScanOptions {
  /**
   * Single GCP scan options entry.
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
