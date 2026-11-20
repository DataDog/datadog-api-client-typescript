/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScalarAggregator } from "./ScalarAggregator";
import { TableColumnModifier } from "./TableColumnModifier";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ComputeTableColumnCompute {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "aggregation": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "filter"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "modifiers"?: Array<TableColumnModifier>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "property"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "scalarAggregation"?: ScalarAggregator;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aggregation: {
      baseName: "aggregation",
      type: "string",
      required: true,
    },
    filter: {
      baseName: "filter",
      type: "string",
    },
    modifiers: {
      baseName: "modifiers",
      type: "Array<TableColumnModifier>",
    },
    property: {
      baseName: "property",
      type: "string",
    },
    query: {
      baseName: "query",
      type: "string",
      required: true,
    },
    scalarAggregation: {
      baseName: "scalar_aggregation",
      type: "ScalarAggregator",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ComputeTableColumnCompute.attributeTypeMap;
  }

  public constructor() {}
}
