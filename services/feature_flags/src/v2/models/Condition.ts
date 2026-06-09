import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConditionOperator } from "./ConditionOperator";

/**
 * Targeting condition details. A condition is either an inline
 * predicate with `operator`, `attribute`, and `value`, or a reference to a
 * saved filter with `saved_filter_id`. The inline fields are omitted for saved-filter
 * references.
 */
export class Condition {
  /**
   * The user or request attribute to evaluate. Omitted for saved-filter references.
   */
  "attribute"?: string;
  /**
   * The timestamp when the condition was created.
   */
  "createdAt": Date;
  /**
   * The unique identifier of the condition.
   */
  "id": string;
  /**
   * The operator used in a targeting condition.
   */
  "operator"?: ConditionOperator;
  /**
   * The ID of the saved filter referenced by this condition, or null for inline conditions.
   */
  "savedFilterId"?: string;
  /**
   * The timestamp when the condition was last updated.
   */
  "updatedAt": Date;
  /**
   * Values used by the selected operator. Omitted for saved-filter references.
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
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
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      required: true,
      format: "date-time",
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
    return Condition.attributeTypeMap;
  }

  public constructor() {}
}
