import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleDataRelationshipsLayersDataItems } from "./ScheduleDataRelationshipsLayersDataItems";

/**
 * Associates layers with this schedule in a data structure.
 */
export class ScheduleDataRelationshipsLayers {
  /**
   * An array of layer references for this schedule.
   */
  "data"?: Array<ScheduleDataRelationshipsLayersDataItems>;
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
      type: "Array<ScheduleDataRelationshipsLayersDataItems>",
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
    return ScheduleDataRelationshipsLayers.attributeTypeMap;
  }

  public constructor() {}
}
