/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AggregateCompute } from "./AggregateCompute";
import { CompositeEventsPlatformSubQueryDefinitionSearch } from "./CompositeEventsPlatformSubQueryDefinitionSearch";
import { FormulaAndFunctionEventQueryGroupBy } from "./FormulaAndFunctionEventQueryGroupBy";
import { FormulaAndFunctionEventsDataSource } from "./FormulaAndFunctionEventsDataSource";
import { ListColumn } from "./ListColumn";
import { StorageType } from "./StorageType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CompositeEventsPlatformSubQueryDefinition {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns"?: Array<ListColumn>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "compute": Array<AggregateCompute>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "computeCount"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": FormulaAndFunctionEventsDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupBy": Array<FormulaAndFunctionEventQueryGroupBy>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "indexes"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "search"?: CompositeEventsPlatformSubQueryDefinitionSearch;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "storage"?: StorageType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    columns: {
      baseName: "columns",
      type: "Array<ListColumn>",
    },
    compute: {
      baseName: "compute",
      type: "Array<AggregateCompute>",
      required: true,
    },
    computeCount: {
      baseName: "compute_count",
      type: "boolean",
    },
    dataSource: {
      baseName: "data_source",
      type: "FormulaAndFunctionEventsDataSource",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<FormulaAndFunctionEventQueryGroupBy>",
      required: true,
    },
    indexes: {
      baseName: "indexes",
      type: "Array<string>",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    search: {
      baseName: "search",
      type: "CompositeEventsPlatformSubQueryDefinitionSearch",
    },
    storage: {
      baseName: "storage",
      type: "StorageType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CompositeEventsPlatformSubQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
