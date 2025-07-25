import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Product-specific filters for the dataset.
 */
export class FiltersPerProduct {
  /**
   * Defines the list of tag-based filters used to restrict access to telemetry data for a specific product.
   * These filters act as access control rules. Each filter must follow the tag query syntax used by
   * Datadog (such as `@tag.key:value`), and only one tag or attribute may be used to define the access strategy
   * per telemetry type.
   */
  "filters": Array<string>;
  /**
   * Name of the product the dataset is for. Possible values are 'apm', 'rum',
   * 'metrics', 'logs', 'error_tracking', and 'cloud_cost'.
   */
  "product": string;
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
    filters: {
      baseName: "filters",
      type: "Array<string>",
      required: true,
    },
    product: {
      baseName: "product",
      type: "string",
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
    return FiltersPerProduct.attributeTypeMap;
  }

  public constructor() {}
}
