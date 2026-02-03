import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TenancyProductsDataAttributes } from "./TenancyProductsDataAttributes";
import { TenancyProductsDataType } from "./TenancyProductsDataType";

export class TenancyProductsData {
  "attributes"?: TenancyProductsDataAttributes;
  "id"?: string;
  /**
   * OCI tenancy product resource type.
   */
  "type": TenancyProductsDataType;
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
      type: "TenancyProductsDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "TenancyProductsDataType",
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
    return TenancyProductsData.attributeTypeMap;
  }

  public constructor() {}
}
