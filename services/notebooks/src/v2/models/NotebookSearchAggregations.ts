import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotebookSearchAggregationBucketKey } from "./NotebookSearchAggregationBucketKey";
import { NotebookSearchAggregationBucketMultiKey } from "./NotebookSearchAggregationBucketMultiKey";

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
