/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Filter definition for aggregate filtered queries.
 */
export class MonitorFormulaAndFunctionAggregateQueryFilter {
  /**
   * Attribute from the base query to filter on.
   */
  "baseAttribute": string;
  /**
   * Whether to exclude matching records instead of including them.
   */
  "exclude"?: boolean;
  /**
   * Attribute from the filter query to match against.
   */
  "filterAttribute": string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    baseAttribute: {
      baseName: "base_attribute",
      type: "string",
      required: true,
    },
    exclude: {
      baseName: "exclude",
      type: "boolean",
    },
    filterAttribute: {
      baseName: "filter_attribute",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorFormulaAndFunctionAggregateQueryFilter.attributeTypeMap;
  }

  public constructor() {}
}
