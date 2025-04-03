import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonthlyUsageAttributionPagination } from "./MonthlyUsageAttributionPagination";
import { UsageAttributionAggregatesBody } from "./UsageAttributionAggregatesBody";

/**
 * The object containing document metadata.
 */
export class MonthlyUsageAttributionMetadata {
  /**
   * An array of available aggregates.
   */
  "aggregates"?: Array<UsageAttributionAggregatesBody>;
  /**
   * The metadata for the current pagination.
   */
  "pagination"?: MonthlyUsageAttributionPagination;
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
    aggregates: {
      baseName: "aggregates",
      type: "Array<UsageAttributionAggregatesBody>",
    },
    pagination: {
      baseName: "pagination",
      type: "MonthlyUsageAttributionPagination",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonthlyUsageAttributionMetadata.attributeTypeMap;
  }

  public constructor() {}
}
