import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsRetentionGridResponseAttributes } from "./ProductAnalyticsRetentionGridResponseAttributes";
import { ProductAnalyticsRetentionGridResponseType } from "./ProductAnalyticsRetentionGridResponseType";

/**
 * The single JSON:API resource holding a computed retention grid. Its attributes contain the
 * return periods forming the columns and the cohorts forming the rows.
 */
export class ProductAnalyticsRetentionGridResponseData {
  /**
   * Attributes of a retention grid response, containing the cohort rows and the period columns.
   */
  "attributes": ProductAnalyticsRetentionGridResponseAttributes;
  /**
   * Unique identifier for this response data object.
   */
  "id": string;
  /**
   * The resource type identifier for a retention grid response.
   */
  "type": ProductAnalyticsRetentionGridResponseType;
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
      type: "ProductAnalyticsRetentionGridResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsRetentionGridResponseType",
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
    return ProductAnalyticsRetentionGridResponseData.attributeTypeMap;
  }

  public constructor() {}
}
