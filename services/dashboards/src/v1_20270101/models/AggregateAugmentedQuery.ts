import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AggregateAugmentedQueryDataSource } from "./AggregateAugmentedQueryDataSource";
import { AggregateAugmentedQueryJoinCondition } from "./AggregateAugmentedQueryJoinCondition";
import { CompositeCompute } from "./CompositeCompute";
import { CompositeGroupBy } from "./CompositeGroupBy";
import { CompositeSourceBaseQuery } from "./CompositeSourceBaseQuery";
import { CompositeSourceSubQuery } from "./CompositeSourceSubQuery";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class AggregateAugmentedQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "augmentQuery": CompositeSourceSubQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "baseQuery": CompositeSourceBaseQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "compute": Array<CompositeCompute>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": AggregateAugmentedQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupBy"?: Array<CompositeGroupBy>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "joinCondition": AggregateAugmentedQueryJoinCondition;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    augmentQuery: {
      baseName: "augment_query",
      type: "CompositeSourceSubQuery",
      required: true,
    },
    baseQuery: {
      baseName: "base_query",
      type: "CompositeSourceBaseQuery",
      required: true,
    },
    compute: {
      baseName: "compute",
      type: "Array<CompositeCompute>",
      required: true,
    },
    dataSource: {
      baseName: "data_source",
      type: "AggregateAugmentedQueryDataSource",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<CompositeGroupBy>",
    },
    joinCondition: {
      baseName: "join_condition",
      type: "AggregateAugmentedQueryJoinCondition",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AggregateAugmentedQuery.attributeTypeMap;
  }

  public constructor() {}
}
