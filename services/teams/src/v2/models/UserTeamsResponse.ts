import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamsResponseLinks } from "./TeamsResponseLinks";
import { TeamsResponseMeta } from "./TeamsResponseMeta";
import { UserTeam } from "./UserTeam";
import { UserTeamIncluded } from "./UserTeamIncluded";

/**
 * Team memberships response
 */
export class UserTeamsResponse {
  /**
   * Team memberships response data
   */
  "data"?: Array<UserTeam>;
  /**
   * Resources related to the team memberships
   */
  "included"?: Array<UserTeamIncluded>;
  /**
   * Teams response links.
   */
  "links"?: TeamsResponseLinks;
  /**
   * Teams response metadata.
   */
  "meta"?: TeamsResponseMeta;
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
      type: "Array<UserTeam>",
    },
    included: {
      baseName: "included",
      type: "Array<UserTeamIncluded>",
    },
    links: {
      baseName: "links",
      type: "TeamsResponseLinks",
    },
    meta: {
      baseName: "meta",
      type: "TeamsResponseMeta",
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
    return UserTeamsResponse.attributeTypeMap;
  }

  public constructor() {}
}
