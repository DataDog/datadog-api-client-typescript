/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CompositeSourceBaseQuery } from "./CompositeSourceBaseQuery";
import { CompositeSourceSubQuery } from "./CompositeSourceSubQuery";
import { EventsContext } from "./EventsContext";
import { ListAugmentedQueryDataSource } from "./ListAugmentedQueryDataSource";
import { ListAugmentedQueryJoinCondition } from "./ListAugmentedQueryJoinCondition";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ListAugmentedQuery {
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
  "context"?: EventsContext;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": ListAugmentedQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "joinCondition": ListAugmentedQueryJoinCondition;
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
    context: {
      baseName: "context",
      type: "EventsContext",
    },
    dataSource: {
      baseName: "data_source",
      type: "ListAugmentedQueryDataSource",
      required: true,
    },
    joinCondition: {
      baseName: "join_condition",
      type: "ListAugmentedQueryJoinCondition",
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
    return ListAugmentedQuery.attributeTypeMap;
  }

  public constructor() {}
}
