/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * The shape of the Sankey diagram: the step it is anchored on and how many steps to show.
 * Set exactly one of `source` or `target` to a step, and send the other one as an empty string.
 * Sending both returns `Invalid Sankey Mode`. Sending both empty starts the diagram from any view.
 * Each column of the diagram lists view names.
 */
export class ProductAnalyticsSankeyDefinition {
  /**
   * Maximum number of nodes to keep in each column. Remaining values are rolled up into an
   * aggregated node. Omit it, or send `0`, to use the default of `5`.
   */
  "entriesPerStep"?: Int64;
  /**
   * Number of intermediate columns between the source and the target.
   * Omit it, or send `0`, to use the default of `5`.
   */
  "numberOfSteps"?: Int64;
  /**
   * The step the diagram starts from. The diagram shows where sessions go after it.
   * It is a value, not a facet name: use a view name such as `/logs`, or a query matching one view
   * such as `@type:view @view.name:"/logs"`. Do not send `@view.name`.
   * Send an empty string when `target` is set.
   */
  "source": string;
  /**
   * The step the diagram ends at. The diagram shows the paths sessions take to reach it.
   * It takes the same values as `source`. Send an empty string when `source` is set.
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
