import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsJourneyFunnelQuery } from "./ProductAnalyticsJourneyFunnelQuery";

/**
 * Attributes of a journey funnel request.
 */
export class ProductAnalyticsJourneyFunnelRequestAttributes {
  /**
   * Whether to exclude sessions that are not tied to an identified user.
   */
  "excludeAnonymousTraffic"?: boolean;
  /**
   * Start of the query window, in epoch milliseconds.
   */
  "from": number;
  /**
   * Query definition for a journey funnel request.
   */
  "query": ProductAnalyticsJourneyFunnelQuery;
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
      type: "ProductAnalyticsJourneyFunnelQuery",
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
    return ProductAnalyticsJourneyFunnelRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
