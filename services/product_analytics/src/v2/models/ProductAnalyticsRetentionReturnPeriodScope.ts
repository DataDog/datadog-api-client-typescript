import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsRetentionIndexTarget } from "./ProductAnalyticsRetentionIndexTarget";
import { ProductAnalyticsRetentionReturnPeriodScopeType } from "./ProductAnalyticsRetentionReturnPeriodScopeType";

/**
 * Narrows a retention query to a single return-period column.
 */
export class ProductAnalyticsRetentionReturnPeriodScope {
  /**
   * Selects a cohort or return period by its zero-based position in the grid.
   */
  "target": ProductAnalyticsRetentionIndexTarget;
  /**
   * The discriminator identifying a scope narrowed to one return period.
   */
  "type": ProductAnalyticsRetentionReturnPeriodScopeType;
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
      type: "ProductAnalyticsRetentionIndexTarget",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsRetentionReturnPeriodScopeType",
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
    return ProductAnalyticsRetentionReturnPeriodScope.attributeTypeMap;
  }

  public constructor() {}
}
