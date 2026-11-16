import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Client-settable metadata for a suggestion.
 */
export class FeatureFlagSuggestionMetadataRequest {
  /**
   * The ID of the variant targeted by the suggestion.
   */
  "variantId"?: string;
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
    variantId: {
      baseName: "variant_id",
      type: "string",
      format: "uuid",
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
    return FeatureFlagSuggestionMetadataRequest.attributeTypeMap;
  }

  public constructor() {}
}
