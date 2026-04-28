import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsDowntimeData } from "./SyntheticsDowntimeData";

/**
 * Response containing a single Synthetics downtime.
 */
export class SyntheticsDowntimeResponse {
  /**
   * A Synthetics downtime object.
   */
  "data": SyntheticsDowntimeData;
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
      type: "SyntheticsDowntimeData",
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
    return SyntheticsDowntimeResponse.attributeTypeMap;
  }

  public constructor() {}
}
