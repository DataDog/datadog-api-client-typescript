import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Variant weight request payload.
 */
export class VariantWeightRequest {
  /**
   * The percentage weight for this variant.
   */
  "value": number;
  /**
   * The variant ID to assign weight to.
   */
  "variantId"?: string;
  /**
   * The variant key to assign weight to.
   */
  "variantKey"?: string;
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
    value: {
      baseName: "value",
      type: "number",
      required: true,
      format: "double",
    },
    variantId: {
      baseName: "variant_id",
      type: "string",
      format: "uuid",
    },
    variantKey: {
      baseName: "variant_key",
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
    return VariantWeightRequest.attributeTypeMap;
  }

  public constructor() {}
}
