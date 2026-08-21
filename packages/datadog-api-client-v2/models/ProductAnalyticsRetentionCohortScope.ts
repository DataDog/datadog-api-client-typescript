/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsRetentionCohortScopeType } from "./ProductAnalyticsRetentionCohortScopeType";
import { ProductAnalyticsRetentionCohortTarget } from "./ProductAnalyticsRetentionCohortTarget";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
