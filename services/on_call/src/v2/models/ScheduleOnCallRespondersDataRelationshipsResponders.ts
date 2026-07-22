import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleOnCallRespondersDataRelationshipsRespondersDataItems } from "./ScheduleOnCallRespondersDataRelationshipsRespondersDataItems";

/**
 * Defines the list of per-position (previous, current, next) responder groups for the schedule.
 */
export class ScheduleOnCallRespondersDataRelationshipsResponders {
  /**
   * Array of references to the responder groups included in the response.
   */
  "data"?: Array<ScheduleOnCallRespondersDataRelationshipsRespondersDataItems>;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "Array<ScheduleOnCallRespondersDataRelationshipsRespondersDataItems>",
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
    return ScheduleOnCallRespondersDataRelationshipsResponders.attributeTypeMap;
  }

  public constructor() {}
}
