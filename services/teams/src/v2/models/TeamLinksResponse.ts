import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamLink } from "./TeamLink";

/**
 * Team links response
 */
export class TeamLinksResponse {
  /**
   * Team links response data
   */
  "data"?: Array<TeamLink>;
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
      type: "Array<TeamLink>",
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
    return TeamLinksResponse.attributeTypeMap;
  }

  public constructor() {}
}
