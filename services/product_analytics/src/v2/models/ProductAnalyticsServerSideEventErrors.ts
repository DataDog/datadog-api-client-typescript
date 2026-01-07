import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsServerSideEventError } from "./ProductAnalyticsServerSideEventError";

/**
 * Error response.
 */
export class ProductAnalyticsServerSideEventErrors {
  /**
   * Structured errors.
   */
  "errors"?: Array<ProductAnalyticsServerSideEventError>;
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
    errors: {
      baseName: "errors",
      type: "Array<ProductAnalyticsServerSideEventError>",
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
    return ProductAnalyticsServerSideEventErrors.attributeTypeMap;
  }

  public constructor() {}
}
