import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Team } from "./Team";
import { TeamIncluded } from "./TeamIncluded";

/**
 * Response with a team
 */
export class TeamResponse {
  /**
   * A team
   */
  "data"?: Team;
  /**
   * Resources related to the team.
   */
  "included"?: Array<TeamIncluded>;
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
      type: "Team",
    },
    included: {
      baseName: "included",
      type: "Array<TeamIncluded>",
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
    return TeamResponse.attributeTypeMap;
  }

  public constructor() {}
}
