import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseDataType } from "./CaseDataType";

/**
 * Case linked to the Jira issue.
 */
export class CreateJiraIssueRequestDataRelationshipsCaseData {
  "id": string;
  /**
   * Cases resource type.
   */
  "type": CaseDataType;
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
      type: "CaseDataType",
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
    return CreateJiraIssueRequestDataRelationshipsCaseData.attributeTypeMap;
  }

  public constructor() {}
}
