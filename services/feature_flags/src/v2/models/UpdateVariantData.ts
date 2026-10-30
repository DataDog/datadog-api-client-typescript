import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateVariantAttributes } from "./UpdateVariantAttributes";
import { VariantDataType } from "./VariantDataType";

/**
 * Data for updating a variant.
 */
export class UpdateVariantData {
  /**
   * Attributes for updating a variant.
   */
  "attributes": UpdateVariantAttributes;
  /**
   * The ID of the variant. If you include it, use the same value as the `variant_id` path parameter.
   */
  "id"?: string;
  /**
   * The resource type for variants.
   */
  "type": VariantDataType;
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
    attributes: {
      baseName: "attributes",
      type: "UpdateVariantAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "VariantDataType",
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
    return UpdateVariantData.attributeTypeMap;
  }

  public constructor() {}
}
