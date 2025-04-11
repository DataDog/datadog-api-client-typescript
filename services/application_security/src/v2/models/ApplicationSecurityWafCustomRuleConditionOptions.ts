import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Options for the operator of this condition.
 */
export class ApplicationSecurityWafCustomRuleConditionOptions {
  /**
   * Evaluate the value as case sensitive.
   */
  "caseSensitive"?: boolean;
  /**
   * Only evaluate this condition if the value has a minimum amount of characters.
   */
  "minLength"?: number;
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
    caseSensitive: {
      baseName: "case_sensitive",
      type: "boolean",
    },
    minLength: {
      baseName: "min_length",
      type: "number",
      format: "int64",
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
    return ApplicationSecurityWafCustomRuleConditionOptions.attributeTypeMap;
  }

  public constructor() {}
}
