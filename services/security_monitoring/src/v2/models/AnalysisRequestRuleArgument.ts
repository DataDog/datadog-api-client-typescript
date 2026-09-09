import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A configurable argument of a forwarded static analysis rule.
 */
export class AnalysisRequestRuleArgument {
  /**
   * An explanation of the argument's purpose and accepted values.
   */
  "description"?: string;
  /**
   * The name of the rule argument.
   */
  "name"?: string;
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
    description: {
      baseName: "description",
      type: "string",
    },
    name: {
      baseName: "name",
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
    return AnalysisRequestRuleArgument.attributeTypeMap;
  }

  public constructor() {}
}
