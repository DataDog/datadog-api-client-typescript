import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsJourneyListQuery } from "./ProductAnalyticsJourneyListQuery";

/**
 * Attributes of a journey list request.
 */
export class ProductAnalyticsJourneyListRequestAttributes {
  /**
   * Start of the query window, in epoch milliseconds.
   */
  "from": number;
  /**
   * Query definition for a journey list request.
   */
  "query": ProductAnalyticsJourneyListQuery;
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
    from: {
      baseName: "from",
      type: "number",
      required: true,
      format: "int64",
    },
    query: {
      baseName: "query",
      type: "ProductAnalyticsJourneyListQuery",
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
    return ProductAnalyticsJourneyListRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
