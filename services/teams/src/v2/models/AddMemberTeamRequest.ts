import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MemberTeam } from "./MemberTeam";

/**
 * Request to add a member team to super team's hierarchy
 */
export class AddMemberTeamRequest {
  /**
   * A member team
   */
  "data": MemberTeam;
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
      type: "MemberTeam",
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
    return AddMemberTeamRequest.attributeTypeMap;
  }

  public constructor() {}
}
