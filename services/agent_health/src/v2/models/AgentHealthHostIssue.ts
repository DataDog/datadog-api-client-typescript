import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * An active Agent Health issue associated with a resource.
 */
export class AgentHealthHostIssue {
  /**
   * The category used by the Agent to group and reconcile the issue.
   */
  "category": string;
  /**
   * The unique identifier of the issue.
   */
  "issueId": string;
  /**
   * The human-readable name of the issue.
   */
  "issueName": string;
  /**
   * The machine-readable type of the issue.
   */
  "issueType": string;
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
    category: {
      baseName: "category",
      type: "string",
      required: true,
    },
    issueId: {
      baseName: "issue_id",
      type: "string",
      required: true,
    },
    issueName: {
      baseName: "issue_name",
      type: "string",
      required: true,
    },
    issueType: {
      baseName: "issue_type",
      type: "string",
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
    return AgentHealthHostIssue.attributeTypeMap;
  }

  public constructor() {}
}
