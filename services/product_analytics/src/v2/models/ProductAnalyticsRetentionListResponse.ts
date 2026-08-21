import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsRetentionListResponseData } from "./ProductAnalyticsRetentionListResponseData";

/**
 * Response for a retention list query.
 */
export class ProductAnalyticsRetentionListResponse {
  /**
   * The single JSON:API resource holding the entities behind one retention cell. Its attributes
   * contain the entity whose retention was measured and one row per matching entity.
   */
  "data": ProductAnalyticsRetentionListResponseData;
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
      type: "ProductAnalyticsRetentionListResponseData",
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
    return ProductAnalyticsRetentionListResponse.attributeTypeMap;
  }

  public constructor() {}
}
