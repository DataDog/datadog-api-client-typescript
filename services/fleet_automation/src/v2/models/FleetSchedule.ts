import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetScheduleAttributes } from "./FleetScheduleAttributes";
import { FleetScheduleResourceType } from "./FleetScheduleResourceType";

/**
 * A schedule that automatically creates deployments based on a recurrence rule.
 */
export class FleetSchedule {
  /**
   * Attributes of a schedule in the response.
   */
  "attributes": FleetScheduleAttributes;
  /**
   * Unique identifier for the schedule.
   */
  "id": string;
  /**
   * The type of schedule resource.
   */
  "type": FleetScheduleResourceType;
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
    attributes: {
      baseName: "attributes",
      type: "FleetScheduleAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "FleetScheduleResourceType",
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
    return FleetSchedule.attributeTypeMap;
  }

  public constructor() {}
}
