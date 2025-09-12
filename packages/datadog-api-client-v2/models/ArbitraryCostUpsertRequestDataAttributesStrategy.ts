/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByFiltersItems } from "./ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByFiltersItems";
import { ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItems } from "./ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItems";
import { ArbitraryCostUpsertRequestDataAttributesStrategyBasedOnCostsItems } from "./ArbitraryCostUpsertRequestDataAttributesStrategyBasedOnCostsItems";
import { ArbitraryCostUpsertRequestDataAttributesStrategyEvaluateGroupedByFiltersItems } from "./ArbitraryCostUpsertRequestDataAttributesStrategyEvaluateGroupedByFiltersItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `ArbitraryCostUpsertRequestDataAttributesStrategy` object.
 */
export class ArbitraryCostUpsertRequestDataAttributesStrategy {
  /**
   * The `strategy` `allocated_by`.
   */
  "allocatedBy"?: Array<ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItems>;
  /**
   * The `strategy` `allocated_by_filters`.
   */
  "allocatedByFilters"?: Array<ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByFiltersItems>;
  /**
   * The `strategy` `allocated_by_tag_keys`.
   */
  "allocatedByTagKeys"?: Array<string>;
  /**
   * The `strategy` `based_on_costs`.
   */
  "basedOnCosts"?: Array<ArbitraryCostUpsertRequestDataAttributesStrategyBasedOnCostsItems>;
  /**
   * The `strategy` `based_on_timeseries`.
   */
  "basedOnTimeseries"?: { [key: string]: any };
  /**
   * The `strategy` `evaluate_grouped_by_filters`.
   */
  "evaluateGroupedByFilters"?: Array<ArbitraryCostUpsertRequestDataAttributesStrategyEvaluateGroupedByFiltersItems>;
  /**
   * The `strategy` `evaluate_grouped_by_tag_keys`.
   */
  "evaluateGroupedByTagKeys"?: Array<string>;
  /**
   * The `strategy` `granularity`.
   */
  "granularity"?: string;
  /**
   * The `strategy` `method`.
   */
  "method": string;

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
    allocatedBy: {
      baseName: "allocated_by",
      type: "Array<ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItems>",
    },
    allocatedByFilters: {
      baseName: "allocated_by_filters",
      type: "Array<ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByFiltersItems>",
    },
    allocatedByTagKeys: {
      baseName: "allocated_by_tag_keys",
      type: "Array<string>",
    },
    basedOnCosts: {
      baseName: "based_on_costs",
      type: "Array<ArbitraryCostUpsertRequestDataAttributesStrategyBasedOnCostsItems>",
    },
    basedOnTimeseries: {
      baseName: "based_on_timeseries",
      type: "{ [key: string]: any; }",
    },
    evaluateGroupedByFilters: {
      baseName: "evaluate_grouped_by_filters",
      type: "Array<ArbitraryCostUpsertRequestDataAttributesStrategyEvaluateGroupedByFiltersItems>",
    },
    evaluateGroupedByTagKeys: {
      baseName: "evaluate_grouped_by_tag_keys",
      type: "Array<string>",
    },
    granularity: {
      baseName: "granularity",
      type: "string",
    },
    method: {
      baseName: "method",
      type: "string",
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
    return ArbitraryCostUpsertRequestDataAttributesStrategy.attributeTypeMap;
  }

  public constructor() {}
}
