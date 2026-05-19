import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes that can be updated on a case view. All fields are optional; only provided fields are changed.
 */
export class CaseViewUpdateAttributes {
  /**
   * The name of the view.
   */
  "name"?: string;
  /**
   * The identifier of a notification rule linked to this view. When set, users subscribed to the view receive alerts for matching cases.
   */
  "npRuleId"?: string;
  /**
   * The query used to filter cases in this view.
   */
  "query"?: string;
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
    },
    npRuleId: {
      baseName: "np_rule_id",
      type: "string",
    },
    query: {
      baseName: "query",
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
    return CaseViewUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
