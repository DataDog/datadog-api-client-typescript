import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetScheduleCreate } from "./FleetScheduleCreate";

/**
 * Request payload for creating a new schedule.
 */
export class FleetScheduleCreateRequest {
  /**
   * Data for creating a new schedule.
   */
  "data": FleetScheduleCreate;
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
      type: "FleetScheduleCreate",
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
    return FleetScheduleCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
