import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsRetentionGridQuery } from "./ProductAnalyticsRetentionGridQuery";

/**
 * Attributes of a retention grid request.
 */
export class ProductAnalyticsRetentionGridRequestAttributes {
  /**
   * Whether to exclude sessions that are not tied to an identified user.
   */
  "excludeAnonymousTraffic"?: boolean;
  /**
   * Start of the query window, in epoch milliseconds.
   */
  "from": number;
  /**
   * Query definition for a retention grid or retention metadata request.
   */
  "query": ProductAnalyticsRetentionGridQuery;
  /**
   * End of the query window, in epoch milliseconds.
   */
  "to": number;
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
    excludeAnonymousTraffic: {
      baseName: "exclude_anonymous_traffic",
      type: "boolean",
    },
    from: {
      baseName: "from",
      type: "number",
      required: true,
      format: "int64",
    },
    query: {
      baseName: "query",
      type: "ProductAnalyticsRetentionGridQuery",
      required: true,
    },
    to: {
      baseName: "to",
      type: "number",
      required: true,
      format: "int64",
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
    return ProductAnalyticsRetentionGridRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
