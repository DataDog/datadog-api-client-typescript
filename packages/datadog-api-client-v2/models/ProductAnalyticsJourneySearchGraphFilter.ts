/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsJourneySearchGraphFilterName } from "./ProductAnalyticsJourneySearchGraphFilterName";
import { ProductAnalyticsJourneySearchGraphFilterOperator } from "./ProductAnalyticsJourneySearchGraphFilterOperator";
import { ProductAnalyticsJourneyTarget } from "./ProductAnalyticsJourneyTarget";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A filter applied to a step, or a range of steps, of the journey graph.
 */
export class ProductAnalyticsJourneySearchGraphFilter {
  /**
   * The journey-level metric the graph filter applies to.
   */
  "name": ProductAnalyticsJourneySearchGraphFilterName;
  /**
   * Comparison operator applied to the graph filter value.
   */
  "operator": ProductAnalyticsJourneySearchGraphFilterOperator;
  /**
   * A reference to a step, or a range of steps, in the journey.
   * Use a `node` target to name a single step, or a `path` target to name the range
   * between two steps.
   */
  "target"?: ProductAnalyticsJourneyTarget;
  /**
   * Value compared against the metric. Durations are expressed in milliseconds.
   */
  "value": number;

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
    name: {
      baseName: "name",
      type: "ProductAnalyticsJourneySearchGraphFilterName",
      required: true,
    },
    operator: {
      baseName: "operator",
      type: "ProductAnalyticsJourneySearchGraphFilterOperator",
      required: true,
    },
    target: {
      baseName: "target",
      type: "ProductAnalyticsJourneyTarget",
    },
    value: {
      baseName: "value",
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
    return ProductAnalyticsJourneySearchGraphFilter.attributeTypeMap;
  }

  public constructor() {}
}
