import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * An arm's observations and subjects in total.
 */
export class ExperimentsBanditTrafficVariantV2 {
  /**
   * The arm's variant ID on the flag.
   */
  "featureFlagVariantId": string;
  /**
   * The arm's valid observations, mature or not.
   */
  "observations": number;
  /**
   * Subjects whose first valid observation is on this arm. A subject counts once, on the arm its reward goes to.
   */
  "subjects": number;
  /**
   * The arm's variant key.
   */
  "variantKey": string | null;
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
    featureFlagVariantId: {
      baseName: "feature_flag_variant_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    observations: {
      baseName: "observations",
      type: "number",
      required: true,
      format: "int64",
    },
    subjects: {
      baseName: "subjects",
      type: "number",
      required: true,
      format: "int64",
    },
    variantKey: {
      baseName: "variant_key",
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
    return ExperimentsBanditTrafficVariantV2.attributeTypeMap;
  }

  public constructor() {}
}
