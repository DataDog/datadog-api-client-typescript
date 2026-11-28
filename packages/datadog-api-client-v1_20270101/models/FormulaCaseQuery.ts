/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseCompute } from "./CaseCompute";
import { CaseGroupBy } from "./CaseGroupBy";
import { FormulaCaseQueryDataSource } from "./FormulaCaseQueryDataSource";
import { QuerySortOrder } from "./QuerySortOrder";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FormulaCaseQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "compute": CaseCompute;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": FormulaCaseQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupBy"?: Array<CaseGroupBy>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "limit"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "queryFilter": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sort"?: QuerySortOrder;

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
      type: "CaseCompute",
      required: true,
    },
    dataSource: {
      baseName: "data_source",
      type: "FormulaCaseQueryDataSource",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<CaseGroupBy>",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "double",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    queryFilter: {
      baseName: "query_filter",
      type: "string",
      required: true,
    },
    sort: {
      baseName: "sort",
      type: "QuerySortOrder",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FormulaCaseQuery.attributeTypeMap;
  }

  public constructor() {}
}
