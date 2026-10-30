import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { VariantResponseData } from "./VariantResponseData";

/**
 * Response containing a variant.
 */
export class VariantResponse {
  /**
   * A variant resource.
   */
  "data": VariantResponseData;
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
    data: {
      baseName: "data",
      type: "VariantResponseData",
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
    return VariantResponse.attributeTypeMap;
  }

  public constructor() {}
}
