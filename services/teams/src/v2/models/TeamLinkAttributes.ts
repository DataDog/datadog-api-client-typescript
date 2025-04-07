import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Team link attributes
 */
export class TeamLinkAttributes {
  /**
   * The link's label
   */
  "label": string;
  /**
   * The link's position, used to sort links for the team
   */
  "position"?: number;
  /**
   * ID of the team the link is associated with
   */
  "teamId"?: string;
  /**
   * The URL for the link
   */
  "url": string;
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
    label: {
      baseName: "label",
      type: "string",
      required: true,
    },
    position: {
      baseName: "position",
      type: "number",
      format: "int32",
    },
    teamId: {
      baseName: "team_id",
      type: "string",
    },
    url: {
      baseName: "url",
      type: "string",
      required: true,
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
    return TeamLinkAttributes.attributeTypeMap;
  }

  public constructor() {}
}
