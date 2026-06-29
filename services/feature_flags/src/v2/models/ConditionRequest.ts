import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConditionOperator } from "./ConditionOperator";

/**
 * Condition request payload for targeting rules. A condition is either an inline
 * predicate with `operator`, `attribute`, and `value`, or a reference to a
 * saved filter with `saved_filter_id`. The two shapes are mutually exclusive.
 */
export class ConditionRequest {
  /**
   * The user or request attribute to evaluate. Required for inline conditions; omit when `saved_filter_id` is set.
   */
  "attribute"?: string;
  /**
   * The operator used in a targeting condition.
   */
  "operator"?: ConditionOperator;
  /**
   * The ID of a saved filter to reference as this condition. Mutually exclusive
   * with `operator`, `attribute`, and `value`. When set, the saved filter's
   * targeting rules are evaluated in place of an inline predicate.
   */
  "savedFilterId"?: string;
  /**
   * Values used by the selected operator. Required for inline conditions; omit when `saved_filter_id` is set.
   */
  "value"?: Array<string>;
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
    },
    operator: {
      baseName: "operator",
      type: "ConditionOperator",
    },
    savedFilterId: {
      baseName: "saved_filter_id",
      type: "string",
      format: "uuid",
    },
    value: {
      baseName: "value",
      type: "Array<string>",
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
    return ConditionRequest.attributeTypeMap;
  }

  public constructor() {}
}
