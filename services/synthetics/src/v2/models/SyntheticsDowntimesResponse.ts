import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsDowntimeData } from "./SyntheticsDowntimeData";

/**
 * Response containing a list of Synthetics downtimes.
 */
export class SyntheticsDowntimesResponse {
  /**
   * List of Synthetics downtime objects.
   */
  "data": Array<SyntheticsDowntimeData>;
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
      type: "Array<SyntheticsDowntimeData>",
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
    return SyntheticsDowntimesResponse.attributeTypeMap;
  }

  public constructor() {}
}
