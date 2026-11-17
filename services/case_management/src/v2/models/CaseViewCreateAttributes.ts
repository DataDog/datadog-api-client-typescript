import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes required to create a work item view.
 */
export class CaseViewCreateAttributes {
  /**
   * The name of the view.
   */
  "name": string;
  /**
   * Deprecated. This field is ignored. Use `POST /api/v2/cases/projects/{project_id}/notification_rules` to manage project notifications.
   */
  "npRuleId"?: string;
  /**
   * The UUID of the project this view belongs to. Views are scoped to a single project.
   */
  "projectId": string;
  /**
   * The query used to filter work items in this view.
   */
  "query": string;
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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    npRuleId: {
      baseName: "np_rule_id",
      type: "string",
    },
    projectId: {
      baseName: "project_id",
      type: "string",
      required: true,
    },
    query: {
      baseName: "query",
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
    return CaseViewCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
