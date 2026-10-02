import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Decision to record when concluding the experiment.
 */
export class ExperimentsConcludeExperimentV2RequestDataAttributes {
  /**
   * Key of the winning variant. Must match a variant on the experiment and must not be blank.
   */
  "decisionVariantKey": string;
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
    decisionVariantKey: {
      baseName: "decision_variant_key",
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
    return ExperimentsConcludeExperimentV2RequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
