import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A single analytics result bucket.
 */
export class LLMObsExperimentationAnalyticsValue {
  /**
   * The group-by field values for this bucket.
   */
  "by"?: { [key: string]: any };
  /**
   * Computed metric values for this bucket.
   */
  "metrics": { [key: string]: any };
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
    by: {
      baseName: "by",
      type: "{ [key: string]: any; }",
    },
    metrics: {
      baseName: "metrics",
      type: "{ [key: string]: any; }",
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
    return LLMObsExperimentationAnalyticsValue.attributeTypeMap;
  }

  public constructor() {}
}
