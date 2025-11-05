import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetSchedulePatch } from "./FleetSchedulePatch";

/**
 * Request payload for partially updating a schedule.
 */
export class FleetSchedulePatchRequest {
  /**
   * Data for partially updating a schedule.
   */
  "data": FleetSchedulePatch;
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
      type: "FleetSchedulePatch",
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
    return FleetSchedulePatchRequest.attributeTypeMap;
  }

  public constructor() {}
}
