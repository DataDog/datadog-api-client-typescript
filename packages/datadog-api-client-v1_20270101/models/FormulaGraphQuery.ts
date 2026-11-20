/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormulaGraphQueryCompute } from "./FormulaGraphQueryCompute";
import { FormulaGraphQueryDataSource } from "./FormulaGraphQueryDataSource";
import { FormulaGraphQueryGroupByItems } from "./FormulaGraphQueryGroupByItems";
import { FormulaSemanticMode } from "./FormulaSemanticMode";
import { GraphQuerySearch } from "./GraphQuerySearch";
import { StorageType } from "./StorageType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FormulaGraphQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "compute": FormulaGraphQueryCompute;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": FormulaGraphQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupBy"?: Array<FormulaGraphQueryGroupByItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "search": GraphQuerySearch;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "semanticMode"?: FormulaSemanticMode;
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
    compute: {
      baseName: "compute",
      type: "FormulaGraphQueryCompute",
      required: true,
    },
    dataSource: {
      baseName: "data_source",
      type: "FormulaGraphQueryDataSource",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<FormulaGraphQueryGroupByItems>",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    search: {
      baseName: "search",
      type: "GraphQuerySearch",
      required: true,
    },
    semanticMode: {
      baseName: "semantic_mode",
      type: "FormulaSemanticMode",
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
    return FormulaGraphQuery.attributeTypeMap;
  }

  public constructor() {}
}
