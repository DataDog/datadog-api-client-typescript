/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NotebookSearchAggregationBucketKey } from "./NotebookSearchAggregationBucketKey";
import { NotebookSearchAggregationBucketMultiKey } from "./NotebookSearchAggregationBucketMultiKey";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Aggregations of notebook search results.
 */
export class NotebookSearchAggregations {
  /**
   * Aggregation by author.
   */
  "author"?: Array<NotebookSearchAggregationBucketMultiKey>;
  /**
   * Aggregation by tags.
   */
  "tags"?: Array<NotebookSearchAggregationBucketKey>;
  /**
   * Aggregation by template variable names.
   */
  "templateVariablesName"?: Array<NotebookSearchAggregationBucketKey>;
  /**
   * Aggregation by notebook type.
   */
  "type"?: Array<NotebookSearchAggregationBucketKey>;

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
    author: {
      baseName: "author",
      type: "Array<NotebookSearchAggregationBucketMultiKey>",
    },
    tags: {
      baseName: "tags",
      type: "Array<NotebookSearchAggregationBucketKey>",
    },
    templateVariablesName: {
      baseName: "template_variables.name",
      type: "Array<NotebookSearchAggregationBucketKey>",
    },
    type: {
      baseName: "type",
      type: "Array<NotebookSearchAggregationBucketKey>",
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
    return NotebookSearchAggregations.attributeTypeMap;
  }

  public constructor() {}
}
