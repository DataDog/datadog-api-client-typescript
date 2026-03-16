/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Sankey visualization definition. Set either `source` or `target`, not both.
 * Use `source` for forward flow (where do users go after this page?) or
 * `target` for backward flow (where did users come from?).
 */
export class ProductAnalyticsSankeyDefinition {
  /**
   * Number of page entries per step. Default 5, max 10.
   */
  "entriesPerStep"?: number;
  /**
   * Number of steps in the flow. Default 5, max 10.
   */
  "numberOfSteps"?: number;
  /**
   * The source page for forward flow analysis. Use "*" for all pages.
   */
  "source"?: string;
  /**
   * The target page for backward flow analysis.
   */
  "target"?: string;

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
    },
    target: {
      baseName: "target",
      type: "string",
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
