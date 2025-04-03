import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AuthNMappingTeamAttributes } from "./AuthNMappingTeamAttributes";
import { TeamType } from "./TeamType";

/**
 * Team.
 */
export class AuthNMappingTeam {
  /**
   * Team attributes.
   */
  "attributes"?: AuthNMappingTeamAttributes;
  /**
   * The ID of the Team.
   */
  "id"?: string;
  /**
   * Team type
   */
  "type"?: TeamType;
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
      type: "AuthNMappingTeamAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "TeamType",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AuthNMappingTeam.attributeTypeMap;
  }

  public constructor() {}
}
