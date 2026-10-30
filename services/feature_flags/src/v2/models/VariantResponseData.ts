import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { VariantDataType } from "./VariantDataType";
import { VariantResponseAttributes } from "./VariantResponseAttributes";

/**
 * A variant resource.
 */
export class VariantResponseData {
  /**
   * Attributes of a variant.
   */
  "attributes": VariantResponseAttributes;
  /**
   * The unique identifier of the variant.
   */
  "id": string;
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
      type: "VariantResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
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
    return VariantResponseData.attributeTypeMap;
  }

  public constructor() {}
}
