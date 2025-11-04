import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetSchedule } from "./FleetSchedule";

/**
 * Response containing a list of schedules.
 */
export class FleetSchedulesResponse {
  /**
   * Array of schedules.
   */
  "data": Array<FleetSchedule>;
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
      type: "Array<FleetSchedule>",
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
    return FleetSchedulesResponse.attributeTypeMap;
  }

  public constructor() {}
}
