import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsRetentionListResponseAttributes } from "./ProductAnalyticsRetentionListResponseAttributes";
import { ProductAnalyticsRetentionListResponseType } from "./ProductAnalyticsRetentionListResponseType";

/**
 * The single JSON:API resource holding the entities behind one retention cell. Its attributes
 * contain the entity whose retention was measured and one row per matching entity.
 */
export class ProductAnalyticsRetentionListResponseData {
  /**
   * Attributes of a retention list response, containing the matching entity rows.
   */
  "attributes": ProductAnalyticsRetentionListResponseAttributes;
  /**
   * Unique identifier for this response data object.
   */
  "id": string;
  /**
   * The resource type identifier for a retention list response.
   */
  "type": ProductAnalyticsRetentionListResponseType;
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
      type: "ProductAnalyticsRetentionListResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsRetentionListResponseType",
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
    return ProductAnalyticsRetentionListResponseData.attributeTypeMap;
  }

  public constructor() {}
}
