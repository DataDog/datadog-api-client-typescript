import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamLink } from "./TeamLink";

/**
 * Team link response
 */
export class TeamLinkResponse {
  /**
   * Team link
   */
  "data"?: TeamLink;
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
      type: "TeamLink",
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
    return TeamLinkResponse.attributeTypeMap;
  }

  public constructor() {}
}
