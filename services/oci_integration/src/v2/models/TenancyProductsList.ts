import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TenancyProductsData } from "./TenancyProductsData";

/**
 * Response containing a list of OCI tenancy product resources with their product enablement status.
 */
export class TenancyProductsList {
  /**
   * List of OCI tenancy product resource objects.
   */
  "data": Array<TenancyProductsData>;
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
      type: "Array<TenancyProductsData>",
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
    return TenancyProductsList.attributeTypeMap;
  }

  public constructor() {}
}
