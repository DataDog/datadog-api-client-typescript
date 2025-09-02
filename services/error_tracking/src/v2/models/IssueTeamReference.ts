import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueTeamType } from "./IssueTeamType";

/**
 * A team that owns the issue.
 */
export class IssueTeamReference {
  /**
   * Team identifier.
   */
  "id": string;
  /**
   * Type of the object.
   */
  "type": IssueTeamType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IssueTeamType",
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
    return IssueTeamReference.attributeTypeMap;
  }

  public constructor() {}
}
