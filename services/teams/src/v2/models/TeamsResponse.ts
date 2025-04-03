import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Team } from "./Team";
import { TeamIncluded } from "./TeamIncluded";
import { TeamsResponseLinks } from "./TeamsResponseLinks";
import { TeamsResponseMeta } from "./TeamsResponseMeta";

/**
 * Response with multiple teams
 */
export class TeamsResponse {
  /**
   * Teams response data
   */
  "data"?: Array<Team>;
  /**
   * Resources related to the team
   */
  "included"?: Array<TeamIncluded>;
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
      type: "Array<Team>",
    },
    included: {
      baseName: "included",
      type: "Array<TeamIncluded>",
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
    return TeamsResponse.attributeTypeMap;
  }

  public constructor() {}
}
