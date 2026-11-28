/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventsContext } from "./EventsContext";
import { FormulaSemanticMode } from "./FormulaSemanticMode";
import { TraceStreamQuery20270101Sort } from "./TraceStreamQuery20270101Sort";
import { TraceStreamQueryDataSource } from "./TraceStreamQueryDataSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TraceStreamQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "context"?: EventsContext;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "crossOrgUuids"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": TraceStreamQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "indexes"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "queryString": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "semanticMode"?: FormulaSemanticMode;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sort"?: TraceStreamQuery20270101Sort;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    context: {
      baseName: "context",
      type: "EventsContext",
    },
    crossOrgUuids: {
      baseName: "cross_org_uuids",
      type: "Array<string>",
    },
    dataSource: {
      baseName: "data_source",
      type: "TraceStreamQueryDataSource",
      required: true,
    },
    indexes: {
      baseName: "indexes",
      type: "Array<string>",
    },
    queryString: {
      baseName: "query_string",
      type: "string",
      required: true,
    },
    semanticMode: {
      baseName: "semantic_mode",
      type: "FormulaSemanticMode",
    },
    sort: {
      baseName: "sort",
      type: "TraceStreamQuery20270101Sort",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TraceStreamQuery.attributeTypeMap;
  }

  public constructor() {}
}
