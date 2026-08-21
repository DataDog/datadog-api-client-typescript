import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsRetentionCohortScopeType } from "./ProductAnalyticsRetentionCohortScopeType";
import { ProductAnalyticsRetentionCohortTarget } from "./ProductAnalyticsRetentionCohortTarget";

/**
 * Narrows a retention query to a single cohort row.
 */
export class ProductAnalyticsRetentionCohortScope {
  /**
   * Selects a cohort, either by index or by the aggregation that rolls all cohorts together.
   */
  "target": ProductAnalyticsRetentionCohortTarget;
  /**
   * The discriminator identifying a scope narrowed to one cohort.
   */
  "type": ProductAnalyticsRetentionCohortScopeType;
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
    target: {
      baseName: "target",
      type: "ProductAnalyticsRetentionCohortTarget",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsRetentionCohortScopeType",
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
    return ProductAnalyticsRetentionCohortScope.attributeTypeMap;
  }

  public constructor() {}
}
