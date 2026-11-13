import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A flag variant the bandit uses.
 */
export class ExperimentsBanditVariantV2 {
  /**
   * The variant's ID on the flag.
   */
  "featureFlagVariantId": string;
  /**
   * Whether the variant is one of the arms the bandit chooses between.
   */
  "isActive": boolean;
  /**
   * Whether the variant is served when the bandit reaches its scheduled end. At most one variant is the fallback.
   */
  "isFallback": boolean;
  /**
   * The variant's key. An arm keeps the key it had when it was added, because exposures are matched on it. Null only for a fallback deleted from the flag.
   */
  "key": string | null;
  /**
   * The variant's name on the flag. Null when it is no longer on the flag.
   */
  "name": string | null;
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
    isActive: {
      baseName: "is_active",
      type: "boolean",
      required: true,
    },
    isFallback: {
      baseName: "is_fallback",
      type: "boolean",
      required: true,
    },
    key: {
      baseName: "key",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
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
    return ExperimentsBanditVariantV2.attributeTypeMap;
  }

  public constructor() {}
}
