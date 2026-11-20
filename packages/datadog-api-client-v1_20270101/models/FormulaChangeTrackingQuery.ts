/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormulaAndFunctionEventQueryDefinitionCompute } from "./FormulaAndFunctionEventQueryDefinitionCompute";
import { FormulaAndFunctionEventQueryGroupBy } from "./FormulaAndFunctionEventQueryGroupBy";
import { FormulaChangeTrackingQueryDataSource } from "./FormulaChangeTrackingQueryDataSource";
import { FormulaChangeTrackingQuerySearch } from "./FormulaChangeTrackingQuerySearch";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FormulaChangeTrackingQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "compute": FormulaAndFunctionEventQueryDefinitionCompute;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": FormulaChangeTrackingQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupBy"?: Array<FormulaAndFunctionEventQueryGroupBy>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "search": FormulaChangeTrackingQuerySearch;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    compute: {
      baseName: "compute",
      type: "FormulaAndFunctionEventQueryDefinitionCompute",
      required: true,
    },
    dataSource: {
      baseName: "data_source",
      type: "FormulaChangeTrackingQueryDataSource",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<FormulaAndFunctionEventQueryGroupBy>",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    search: {
      baseName: "search",
      type: "FormulaChangeTrackingQuerySearch",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FormulaChangeTrackingQuery.attributeTypeMap;
  }

  public constructor() {}
}
