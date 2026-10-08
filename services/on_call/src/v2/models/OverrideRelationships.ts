import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OverrideRelationshipsSchedule } from "./OverrideRelationshipsSchedule";
import { OverrideRelationshipsUser } from "./OverrideRelationshipsUser";

/**
 * Relationships for an on-call schedule override.
 */
export class OverrideRelationships {
  /**
   * Defines the relationship between an override and one of its associated users.
   */
  "overriddenUser"?: OverrideRelationshipsUser;
  /**
   * Defines the relationship between an override and the schedule it belongs to.
   */
  "schedule"?: OverrideRelationshipsSchedule;
  /**
   * Defines the relationship between an override and one of its associated users.
   */
  "user"?: OverrideRelationshipsUser;
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
    overriddenUser: {
      baseName: "overridden_user",
      type: "OverrideRelationshipsUser",
    },
    schedule: {
      baseName: "schedule",
      type: "OverrideRelationshipsSchedule",
    },
    user: {
      baseName: "user",
      type: "OverrideRelationshipsUser",
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
    return OverrideRelationships.attributeTypeMap;
  }

  public constructor() {}
}
