import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SavedFilterConditionOperator } from "./SavedFilterConditionOperator";

/**
 * An inline condition to write in a saved filter. Nested saved-filter references are not supported.
 */
export class SavedFilterConditionRequest {
  /**
   * The attribute evaluated by the condition.
   */
  "attribute": string;
  /**
   * The comparison operator used by a saved filter condition.
   */
  "operator": SavedFilterConditionOperator;
  /**
   * Values used by the condition operator. Values must satisfy the selected operator and the organization targeting limits.
   */
  "value": Array<string>;
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
    attribute: {
      baseName: "attribute",
      type: "string",
      required: true,
    },
    operator: {
      baseName: "operator",
      type: "SavedFilterConditionOperator",
      required: true,
    },
    value: {
      baseName: "value",
      type: "Array<string>",
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
    return SavedFilterConditionRequest.attributeTypeMap;
  }

  public constructor() {}
}
