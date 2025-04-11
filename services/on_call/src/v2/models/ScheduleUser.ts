import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleUserAttributes } from "./ScheduleUserAttributes";
import { ScheduleUserType } from "./ScheduleUserType";

/**
 * Represents a user object in the context of a schedule, including their `id`, type, and basic attributes.
 */
export class ScheduleUser {
  /**
   * Provides basic user information for a schedule, including a name and email address.
   */
  "attributes"?: ScheduleUserAttributes;
  /**
   * The unique user identifier.
   */
  "id"?: string;
  /**
   * Users resource type.
   */
  "type"?: ScheduleUserType;
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
      type: "ScheduleUserAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ScheduleUserType",
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
    return ScheduleUser.attributeTypeMap;
  }

  public constructor() {}
}
