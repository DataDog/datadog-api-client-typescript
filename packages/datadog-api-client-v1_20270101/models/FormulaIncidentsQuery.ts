/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormulaAndFunctionEventQueryDefinitionCompute } from "./FormulaAndFunctionEventQueryDefinitionCompute";
import { FormulaAndFunctionEventQueryGroupBy } from "./FormulaAndFunctionEventQueryGroupBy";
import { FormulaIncidentsQueryDataSource } from "./FormulaIncidentsQueryDataSource";
import { FormulaIncidentsQuerySearch } from "./FormulaIncidentsQuerySearch";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FormulaIncidentsQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "compute": FormulaAndFunctionEventQueryDefinitionCompute;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": FormulaIncidentsQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupBy"?: Array<FormulaAndFunctionEventQueryGroupBy>;
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
  "search"?: FormulaIncidentsQuerySearch;

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
      type: "FormulaIncidentsQueryDataSource",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<FormulaAndFunctionEventQueryGroupBy>",
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
      type: "FormulaIncidentsQuerySearch",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FormulaIncidentsQuery.attributeTypeMap;
  }

  public constructor() {}
}
