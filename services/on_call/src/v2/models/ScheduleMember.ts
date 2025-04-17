import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleMemberRelationships } from "./ScheduleMemberRelationships";
import { ScheduleMemberType } from "./ScheduleMemberType";

/**
 * Represents a single member entry in a schedule, referencing a specific user.
 */
export class ScheduleMember {
  /**
   * The unique identifier for this schedule member.
   */
  "id"?: string;
  /**
   * Defines relationships for a schedule member, primarily referencing a single user.
   */
  "relationships"?: ScheduleMemberRelationships;
  /**
   * Schedule Members resource type.
   */
  "type": ScheduleMemberType;
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
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "ScheduleMemberRelationships",
    },
    type: {
      baseName: "type",
      type: "ScheduleMemberType",
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
    return ScheduleMember.attributeTypeMap;
  }

  public constructor() {}
}
