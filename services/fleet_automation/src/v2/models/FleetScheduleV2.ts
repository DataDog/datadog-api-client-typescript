import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetScheduleResourceType } from "./FleetScheduleResourceType";
import { FleetScheduleV2Attributes } from "./FleetScheduleV2Attributes";

/**
 * A fleet upgrade schedule resource in the v2 API response.
 */
export class FleetScheduleV2 {
  /**
   * Attributes of a fleet schedule in the v2 API response.
   */
  "attributes": FleetScheduleV2Attributes;
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
      type: "FleetScheduleV2Attributes",
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
    return FleetScheduleV2.attributeTypeMap;
  }

  public constructor() {}
}
