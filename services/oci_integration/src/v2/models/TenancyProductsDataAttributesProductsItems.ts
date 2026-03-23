import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * An individual Datadog product with its enablement status for a tenancy.
 */
export class TenancyProductsDataAttributesProductsItems {
  /**
   * Indicates whether the product is enabled for the tenancy.
   */
  "enabled"?: boolean;
  /**
   * The unique key identifying the Datadog product (for example, CLOUD_SECURITY_POSTURE_MANAGEMENT).
   */
  "productKey"?: string;
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
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    productKey: {
      baseName: "product_key",
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
    return TenancyProductsDataAttributesProductsItems.attributeTypeMap;
  }

  public constructor() {}
}
