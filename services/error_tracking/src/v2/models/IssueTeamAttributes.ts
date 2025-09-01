import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Object containing the information of a team.
 */
export class IssueTeamAttributes {
  /**
   * The team's identifier.
   */
  "handle"?: string;
  /**
   * The name of the team.
   */
  "name"?: string;
  /**
   * A brief summary of the team, derived from its description.
   */
  "summary"?: string;
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
    handle: {
      baseName: "handle",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    summary: {
      baseName: "summary",
      type: "string",
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
    return IssueTeamAttributes.attributeTypeMap;
  }

  public constructor() {}
}
