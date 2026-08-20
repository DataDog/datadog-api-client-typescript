/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The shape of the Sankey diagram, expressed as the facets to flow between and how many steps to show.
 */
export class ProductAnalyticsSankeyDefinition {
  /**
   * Maximum number of nodes to keep in each column. Remaining values are rolled up into an
   * aggregated node. Omit it, or send `0`, to use the default of `5`.
   */
  "entriesPerStep"?: number;
  /**
   * Number of intermediate columns between the source and the target.
   * Omit it, or send `0`, to use the default of `5`.
   */
  "numberOfSteps"?: number;
  /**
   * Facet forming the first column of the diagram.
   */
  "source": string;
  /**
   * Facet forming the last column of the diagram.
   */
  "target": string;

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
    entriesPerStep: {
      baseName: "entries_per_step",
      type: "number",
      format: "int64",
    },
    numberOfSteps: {
      baseName: "number_of_steps",
      type: "number",
      format: "int64",
    },
    source: {
      baseName: "source",
      type: "string",
      required: true,
    },
    target: {
      baseName: "target",
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
    return ProductAnalyticsSankeyDefinition.attributeTypeMap;
  }

  public constructor() {}
}
