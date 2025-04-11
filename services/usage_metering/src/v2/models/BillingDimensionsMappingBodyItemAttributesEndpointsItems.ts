import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BillingDimensionsMappingBodyItemAttributesEndpointsItemsStatus } from "./BillingDimensionsMappingBodyItemAttributesEndpointsItemsStatus";

/**
 * An endpoint's keys mapped to the billing_dimension.
 */
export class BillingDimensionsMappingBodyItemAttributesEndpointsItems {
  /**
   * The URL for the endpoint.
   */
  "id"?: string;
  /**
   * The billing dimension.
   */
  "keys"?: Array<string>;
  /**
   * Denotes whether mapping keys were available for this endpoint.
   */
  "status"?: BillingDimensionsMappingBodyItemAttributesEndpointsItemsStatus;
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
    id: {
      baseName: "id",
      type: "string",
    },
    keys: {
      baseName: "keys",
      type: "Array<string>",
    },
    status: {
      baseName: "status",
      type: "BillingDimensionsMappingBodyItemAttributesEndpointsItemsStatus",
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
    return BillingDimensionsMappingBodyItemAttributesEndpointsItems.attributeTypeMap;
  }

  public constructor() {}
}
