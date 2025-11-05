import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetSchedulePatchAttributes } from "./FleetSchedulePatchAttributes";
import { FleetScheduleResourceType } from "./FleetScheduleResourceType";

/**
 * Data for partially updating a schedule.
 */
export class FleetSchedulePatch {
  /**
   * Attributes for partially updating a schedule. All fields are optional.
   */
  "attributes"?: FleetSchedulePatchAttributes;
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
      type: "FleetSchedulePatchAttributes",
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
    return FleetSchedulePatch.attributeTypeMap;
  }

  public constructor() {}
}
