/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventPatternGroupBy } from "./EventPatternGroupBy";
import { EventsCalculatedField } from "./EventsCalculatedField";
import { SecurityRuntimePatternStreamQuery20270101Sort } from "./SecurityRuntimePatternStreamQuery20270101Sort";
import { SecurityRuntimePatternStreamQueryDataSource } from "./SecurityRuntimePatternStreamQueryDataSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class SecurityRuntimePatternStreamQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "calculatedFields"?: Array<EventsCalculatedField>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "clusteringPatternFieldPath"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "crossOrgUuids"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": SecurityRuntimePatternStreamQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupBy"?: Array<EventPatternGroupBy>;
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
  "sort"?: SecurityRuntimePatternStreamQuery20270101Sort;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    calculatedFields: {
      baseName: "calculated_fields",
      type: "Array<EventsCalculatedField>",
    },
    clusteringPatternFieldPath: {
      baseName: "clustering_pattern_field_path",
      type: "string",
    },
    crossOrgUuids: {
      baseName: "cross_org_uuids",
      type: "Array<string>",
    },
    dataSource: {
      baseName: "data_source",
      type: "SecurityRuntimePatternStreamQueryDataSource",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<EventPatternGroupBy>",
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
    sort: {
      baseName: "sort",
      type: "SecurityRuntimePatternStreamQuery20270101Sort",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityRuntimePatternStreamQuery.attributeTypeMap;
  }

  public constructor() {}
}
