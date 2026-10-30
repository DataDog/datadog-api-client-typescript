import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateVariant } from "./CreateVariant";
import { VariantDataType } from "./VariantDataType";

/**
 * Data for adding a variant to a feature flag.
 */
export class CreateVariantData {
  /**
   * Attributes for creating a variant.
   */
  "attributes": CreateVariant;
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
      type: "CreateVariant",
      required: true,
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
    return CreateVariantData.attributeTypeMap;
  }

  public constructor() {}
}
