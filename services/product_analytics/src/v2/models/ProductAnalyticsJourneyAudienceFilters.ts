import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsJourneyAudienceAccountQuery } from "./ProductAnalyticsJourneyAudienceAccountQuery";
import { ProductAnalyticsJourneyAudienceSegmentQuery } from "./ProductAnalyticsJourneyAudienceSegmentQuery";
import { ProductAnalyticsJourneyAudienceUserQuery } from "./ProductAnalyticsJourneyAudienceUserQuery";

/**
 * Restricts the journey to an audience built from named sub-queries.
 * Sub-query names must be unique across `users`, `segments`, and `accounts`.
 */
export class ProductAnalyticsJourneyAudienceFilters {
  /**
   * Named account sub-queries.
   */
  "accounts"?: Array<ProductAnalyticsJourneyAudienceAccountQuery>;
  /**
   * Boolean expression combining the sub-query names with `AND`, `OR`, and `NOT`.
   * When empty, all sub-queries are combined with `AND`.
   */
  "formula"?: string;
  /**
   * Named segment sub-queries.
   */
  "segments"?: Array<ProductAnalyticsJourneyAudienceSegmentQuery>;
  /**
   * Named user sub-queries.
   */
  "users"?: Array<ProductAnalyticsJourneyAudienceUserQuery>;
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
    accounts: {
      baseName: "accounts",
      type: "Array<ProductAnalyticsJourneyAudienceAccountQuery>",
    },
    formula: {
      baseName: "formula",
      type: "string",
    },
    segments: {
      baseName: "segments",
      type: "Array<ProductAnalyticsJourneyAudienceSegmentQuery>",
    },
    users: {
      baseName: "users",
      type: "Array<ProductAnalyticsJourneyAudienceUserQuery>",
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
    return ProductAnalyticsJourneyAudienceFilters.attributeTypeMap;
  }

  public constructor() {}
}
