import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TenancyProductsDataAttributes } from "./TenancyProductsDataAttributes";
import { TenancyProductsDataType } from "./TenancyProductsDataType";

/**
 * A single OCI tenancy product resource object containing the tenancy ID, type, and product attributes.
 */
export class TenancyProductsData {
  /**
   * Attributes of an OCI tenancy product resource, containing the list of available products and their enablement status.
   */
  "attributes"?: TenancyProductsDataAttributes;
  /**
   * The OCID of the OCI tenancy.
   */
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
