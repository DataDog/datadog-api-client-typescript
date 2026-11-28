/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ProcessQueryDefinition {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "filterBy"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "isNormalizedCpu"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "limit": number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "metric": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "queryFilter"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "searchBy"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    filterBy: {
      baseName: "filter_by",
      type: "Array<string>",
    },
    isNormalizedCpu: {
      baseName: "is_normalized_cpu",
      type: "boolean",
    },
    limit: {
      baseName: "limit",
      type: "number",
      required: true,
      format: "double",
    },
    metric: {
      baseName: "metric",
      type: "string",
      required: true,
    },
    queryFilter: {
      baseName: "query_filter",
      type: "string",
    },
    searchBy: {
      baseName: "search_by",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ProcessQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
