/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityFilterExclusionFilterResponse } from "./SecurityFilterExclusionFilterResponse";
import { SecurityFilterFilteredDataType } from "./SecurityFilterFilteredDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The object describing a security filter.
 */
export class SecurityFilterAttributes {
  /**
   * The list of exclusion filters applied in this security filter.
   */
  "exclusionFilters"?: Array<SecurityFilterExclusionFilterResponse>;
  /**
   * The filtered data type.
   */
  "filteredDataType"?: SecurityFilterFilteredDataType;
  /**
   * Whether the security filter is the built-in filter.
   */
  "isBuiltin"?: boolean;
  /**
   * Whether the security filter is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * The security filter name.
   */
  "name"?: string;
  /**
   * The security filter query. Logs accepted by this query will be accepted by this filter.
   */
  "query"?: string;
  /**
   * The version of the security filter.
   */
  "version"?: number;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    exclusionFilters: {
      baseName: "exclusion_filters",
      type: "Array<SecurityFilterExclusionFilterResponse>",
    },
    filteredDataType: {
      baseName: "filtered_data_type",
      type: "SecurityFilterFilteredDataType",
    },
    isBuiltin: {
      baseName: "is_builtin",
      type: "boolean",
    },
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    version: {
      baseName: "version",
      type: "number",
      format: "int32",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityFilterAttributes.attributeTypeMap;
  }

  public constructor() {}
}
