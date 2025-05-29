import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleUpdateRequestData } from "./ScheduleUpdateRequestData";

/**
 * A top-level wrapper for a schedule update request, referring to the `data` object with the new details.
 */
export class ScheduleUpdateRequest {
  /**
   * Contains all data needed to update an existing schedule, including its attributes (such as name and time zone) and any relationships to teams.
   */
  "data": ScheduleUpdateRequestData;
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
      type: "ScheduleUpdateRequestData",
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
    return ScheduleUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
