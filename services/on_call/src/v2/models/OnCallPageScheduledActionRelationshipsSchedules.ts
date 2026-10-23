import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnCallPageScheduledActionRelationshipsSchedulesData } from "./OnCallPageScheduledActionRelationshipsSchedulesData";

/**
 * The schedules the action escalates to.
 */
export class OnCallPageScheduledActionRelationshipsSchedules {
  /**
   * The list of schedules.
   */
  "data"?: Array<OnCallPageScheduledActionRelationshipsSchedulesData>;
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
      type: "Array<OnCallPageScheduledActionRelationshipsSchedulesData>",
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
    return OnCallPageScheduledActionRelationshipsSchedules.attributeTypeMap;
  }

  public constructor() {}
}
