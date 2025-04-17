import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamTargetType } from "./TeamTargetType";

/**
 * Represents a team target for an escalation policy step, including the team's ID and resource type.
 */
export class TeamTarget {
  /**
   * Specifies the unique identifier of the team resource.
   */
  "id": string;
  /**
   * Indicates that the resource is of type `teams`.
   */
  "type": TeamTargetType;
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
      required: true,
    },
    type: {
      baseName: "type",
      type: "TeamTargetType",
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
    return TeamTarget.attributeTypeMap;
  }

  public constructor() {}
}
