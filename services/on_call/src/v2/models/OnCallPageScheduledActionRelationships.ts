import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnCallPageScheduledActionRelationshipsSchedules } from "./OnCallPageScheduledActionRelationshipsSchedules";
import { OnCallPageScheduledActionRelationshipsUsers } from "./OnCallPageScheduledActionRelationshipsUsers";

/**
 * The relationships of a scheduled action.
 */
export class OnCallPageScheduledActionRelationships {
  /**
   * The schedules the action escalates to.
   */
  "schedules"?: OnCallPageScheduledActionRelationshipsSchedules;
  /**
   * The users the action escalates to.
   */
  "users"?: OnCallPageScheduledActionRelationshipsUsers;
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
    schedules: {
      baseName: "schedules",
      type: "OnCallPageScheduledActionRelationshipsSchedules",
    },
    users: {
      baseName: "users",
      type: "OnCallPageScheduledActionRelationshipsUsers",
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
    return OnCallPageScheduledActionRelationships.attributeTypeMap;
  }

  public constructor() {}
}
