import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsAnalyticsListResponseAttributes } from "./ProductAnalyticsAnalyticsListResponseAttributes";
import { ProductAnalyticsAnalyticsListResponseType } from "./ProductAnalyticsAnalyticsListResponseType";

/**
 * Data object for an analytics list response.
 */
export class ProductAnalyticsAnalyticsListResponseData {
  /**
   * Attributes of an analytics list response, containing the matching event rows.
   */
  "attributes": ProductAnalyticsAnalyticsListResponseAttributes;
  /**
   * Unique identifier for this response data object.
   */
  "id": string;
  /**
   * The resource type identifier for an analytics list response.
   */
  "type": ProductAnalyticsAnalyticsListResponseType;
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
      type: "ProductAnalyticsAnalyticsListResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsAnalyticsListResponseType",
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
    return ProductAnalyticsAnalyticsListResponseData.attributeTypeMap;
  }

  public constructor() {}
}
