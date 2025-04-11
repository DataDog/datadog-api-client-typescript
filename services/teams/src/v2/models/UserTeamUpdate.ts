import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserTeamAttributes } from "./UserTeamAttributes";
import { UserTeamType } from "./UserTeamType";

/**
 * A user's relationship with a team
 */
export class UserTeamUpdate {
  /**
   * Team membership attributes
   */
  "attributes"?: UserTeamAttributes;
  /**
   * Team membership type
   */
  "type": UserTeamType;
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
      type: "UserTeamAttributes",
    },
    type: {
      baseName: "type",
      type: "UserTeamType",
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
    return UserTeamUpdate.attributeTypeMap;
  }

  public constructor() {}
}
