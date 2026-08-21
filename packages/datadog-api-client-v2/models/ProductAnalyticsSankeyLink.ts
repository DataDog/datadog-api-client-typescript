/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A link of the Sankey diagram, representing the sessions flowing between two nodes.
 */
export class ProductAnalyticsSankeyLink {
  /**
   * Zero-based index of the column the link starts from.
   */
  "column"?: number;
  /**
   * Unique identifier for the link.
   */
  "id"?: string;
  /**
   * Identifier of the node the link starts at.
   */
  "source"?: string;
  /**
   * Identifier of the node the link ends at.
   */
  "target"?: string;
  /**
   * Number of sessions flowing along the link.
   */
  "value"?: number;

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
    column: {
      baseName: "column",
      type: "number",
      format: "int64",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    source: {
      baseName: "source",
      type: "string",
    },
    target: {
      baseName: "target",
      type: "string",
    },
    value: {
      baseName: "value",
      type: "number",
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
    return ProductAnalyticsSankeyLink.attributeTypeMap;
  }

  public constructor() {}
}
