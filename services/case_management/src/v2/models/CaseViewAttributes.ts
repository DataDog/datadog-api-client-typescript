import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a case view, including the filter query and optional notification rule.
 */
export class CaseViewAttributes {
  /**
   * Timestamp when the view was created.
   */
  "createdAt": Date;
  /**
   * Timestamp when the view was last modified.
   */
  "modifiedAt"?: Date;
  /**
   * A human-readable name for the view, displayed in the Case Management UI.
   */
  "name": string;
  /**
   * The identifier of a notification rule linked to this view. When set, users subscribed to the view receive alerts for matching cases.
   */
  "npRuleId"?: string;
  /**
   * The search query that determines which cases appear in this view. Uses the same syntax as the Case Management search bar (for example, `status:open priority:P1`).
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    npRuleId: {
      baseName: "np_rule_id",
      type: "string",
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
    return CaseViewAttributes.attributeTypeMap;
  }

  public constructor() {}
}
