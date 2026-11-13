import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A variant's share of traffic under a policy.
 */
export class ExperimentsBanditPolicyVariantV2 {
  /**
   * The variant's ID on the flag.
   */
  "featureFlagVariantId": string;
  /**
   * The share of traffic the variant gets, from 0 to 1.
   */
  "probability": number;
  /**
   * The variant's key. Null when it can't be resolved.
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
    probability: {
      baseName: "probability",
      type: "number",
      required: true,
      format: "double",
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
    return ExperimentsBanditPolicyVariantV2.attributeTypeMap;
  }

  public constructor() {}
}
