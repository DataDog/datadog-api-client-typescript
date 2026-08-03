import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetScheduleV2 } from "./FleetScheduleV2";

/**
 * Response containing a single fleet schedule.
 */
export class FleetScheduleV2Response {
  /**
   * A fleet upgrade schedule resource in the v2 API response.
   */
  "data": FleetScheduleV2;
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
      type: "FleetScheduleV2",
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
    return FleetScheduleV2Response.attributeTypeMap;
  }

  public constructor() {}
}
