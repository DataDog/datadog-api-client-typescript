import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetSchedule } from "./FleetSchedule";

/**
 * Response containing a single schedule.
 */
export class FleetScheduleResponse {
  /**
   * A schedule that automatically creates deployments based on a recurrence rule.
   */
  "data"?: FleetSchedule;
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
      type: "FleetSchedule",
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
    return FleetScheduleResponse.attributeTypeMap;
  }

  public constructor() {}
}
