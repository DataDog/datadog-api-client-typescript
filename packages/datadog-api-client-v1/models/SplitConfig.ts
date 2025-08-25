/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SplitDimension } from "./SplitDimension";
import { SplitSort } from "./SplitSort";
import { SplitVectorEntryItem } from "./SplitVectorEntryItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Encapsulates all user choices about how to split a graph.
 */
export class SplitConfig {
  /**
   * Maximum number of graphs to display in the widget.
   */
  "limit": number;
  /**
   * Controls the order in which graphs appear in the split.
   */
  "sort": SplitSort;
  /**
   * The dimension(s) on which to split the graph
   */
  "splitDimensions": [SplitDimension];
  /**
   * Manual selection of tags making split graph widget static
   */
  "staticSplits"?: Array<Array<SplitVectorEntryItem>>;

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
    limit: {
      baseName: "limit",
      type: "number",
      required: true,
      format: "int64",
    },
    sort: {
      baseName: "sort",
      type: "SplitSort",
      required: true,
    },
    splitDimensions: {
      baseName: "split_dimensions",
      type: "[SplitDimension]",
      required: true,
    },
    staticSplits: {
      baseName: "static_splits",
      type: "Array<Array<SplitVectorEntryItem>>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SplitConfig.attributeTypeMap;
  }

  public constructor() {}
}
