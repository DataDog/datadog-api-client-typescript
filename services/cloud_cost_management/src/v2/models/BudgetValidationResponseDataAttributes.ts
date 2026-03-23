import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The attributes of a budget validation response, including any validation errors and the validity status.
 */
export class BudgetValidationResponseDataAttributes {
  /**
   * A list of validation error messages for the budget.
   */
  "errors"?: Array<string>;
  /**
   * Whether the budget configuration is valid.
   */
  "valid"?: boolean;
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
    errors: {
      baseName: "errors",
      type: "Array<string>",
    },
    valid: {
      baseName: "valid",
      type: "boolean",
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
    return BudgetValidationResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
