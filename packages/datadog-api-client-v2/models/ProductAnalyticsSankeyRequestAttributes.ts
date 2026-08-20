/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsSankeyDefinition } from "./ProductAnalyticsSankeyDefinition";
import { ProductAnalyticsSankeySearch } from "./ProductAnalyticsSankeySearch";
import { ProductAnalyticsSankeyTime } from "./ProductAnalyticsSankeyTime";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a Sankey request.
 */
export class ProductAnalyticsSankeyRequestAttributes {
  /**
   * The shape of the Sankey diagram, expressed as the facets to flow between and how many steps to show.
   */
  "definition": ProductAnalyticsSankeyDefinition;
  /**
   * Selects the sessions a Sankey diagram is built from.
   */
  "search": ProductAnalyticsSankeySearch;
  /**
   * The time window a Sankey query covers.
   */
  "time": ProductAnalyticsSankeyTime;

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
    definition: {
      baseName: "definition",
      type: "ProductAnalyticsSankeyDefinition",
      required: true,
    },
    search: {
      baseName: "search",
      type: "ProductAnalyticsSankeySearch",
      required: true,
    },
    time: {
      baseName: "time",
      type: "ProductAnalyticsSankeyTime",
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
    return ProductAnalyticsSankeyRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
