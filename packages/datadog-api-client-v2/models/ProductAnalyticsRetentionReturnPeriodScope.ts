/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsRetentionIndexTarget } from "./ProductAnalyticsRetentionIndexTarget";
import { ProductAnalyticsRetentionReturnPeriodScopeType } from "./ProductAnalyticsRetentionReturnPeriodScopeType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
