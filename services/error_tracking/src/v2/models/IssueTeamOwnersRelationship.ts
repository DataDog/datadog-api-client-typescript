import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueTeamReference } from "./IssueTeamReference";

/**
 * Relationship between the issue and teams.
 */
export class IssueTeamOwnersRelationship {
  /**
   * Array of teams that are owners of the issue.
   */
  "data": Array<IssueTeamReference>;
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
      type: "Array<IssueTeamReference>",
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
    return IssueTeamOwnersRelationship.attributeTypeMap;
  }

  public constructor() {}
}
