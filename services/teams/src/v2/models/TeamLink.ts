import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamLinkAttributes } from "./TeamLinkAttributes";
import { TeamLinkType } from "./TeamLinkType";

/**
 * Team link
 */
export class TeamLink {
  /**
   * Team link attributes
   */
  "attributes": TeamLinkAttributes;
  /**
   * The team link's identifier
   */
  "id": string;
  /**
   * Team link type
   */
  "type": TeamLinkType;
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
      type: "TeamLinkAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TeamLinkType",
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
    return TeamLink.attributeTypeMap;
  }

  public constructor() {}
}
