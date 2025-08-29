import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueAttributes } from "./IssueAttributes";
import { IssueRelationships } from "./IssueRelationships";
import { IssueType } from "./IssueType";

/**
 * The issue matching the request.
 */
export class Issue {
  /**
   * Object containing the information of an issue.
   */
  "attributes": IssueAttributes;
  /**
   * Issue identifier.
   */
  "id": string;
  /**
   * Relationship between the issue and an assignee, case and/or teams.
   */
  "relationships"?: IssueRelationships;
  /**
   * Type of the object.
   */
  "type": IssueType;
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
      type: "IssueAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "IssueRelationships",
    },
    type: {
      baseName: "type",
      type: "IssueType",
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
    return Issue.attributeTypeMap;
  }

  public constructor() {}
}
