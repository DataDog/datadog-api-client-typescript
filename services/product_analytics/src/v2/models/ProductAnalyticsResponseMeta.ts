import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsResponseMetaStatus } from "./ProductAnalyticsResponseMetaStatus";

/**
 * Metadata for a Product Analytics query response.
 */
export class ProductAnalyticsResponseMeta {
  "requestId"?: string;
  "status"?: ProductAnalyticsResponseMetaStatus;
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
    requestId: {
      baseName: "request_id",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "ProductAnalyticsResponseMetaStatus",
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
    return ProductAnalyticsResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
