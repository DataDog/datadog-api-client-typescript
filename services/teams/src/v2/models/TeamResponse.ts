import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Team } from "./Team";

/**
 * Response with a team
 */
export class TeamResponse {
  /**
   * A team
   */
  "data"?: Team;
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
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
