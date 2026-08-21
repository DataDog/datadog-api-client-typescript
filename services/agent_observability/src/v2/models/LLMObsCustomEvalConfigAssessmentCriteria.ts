import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Criteria used to assess the pass/fail result of a custom evaluator.
 */
export class LLMObsCustomEvalConfigAssessmentCriteria {
  /**
   * Maximum numeric threshold for a passing result.
   */
  "maxThreshold"?: number;
  /**
   * Minimum numeric threshold for a passing result.
   */
  "minThreshold"?: number;
  /**
   * Specific output values considered as a passing result.
   */
  "passValues"?: Array<string>;
  /**
   * When true, a boolean output of true is treated as passing.
   */
  "passWhen"?: boolean;
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
    maxThreshold: {
      baseName: "max_threshold",
      type: "number",
      format: "double",
    },
    minThreshold: {
      baseName: "min_threshold",
      type: "number",
      format: "double",
    },
    passValues: {
      baseName: "pass_values",
      type: "Array<string>",
    },
    passWhen: {
      baseName: "pass_when",
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
    return LLMObsCustomEvalConfigAssessmentCriteria.attributeTypeMap;
  }

  public constructor() {}
}
