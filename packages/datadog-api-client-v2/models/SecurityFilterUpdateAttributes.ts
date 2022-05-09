/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityFilterExclusionFilter } from "./SecurityFilterExclusionFilter";
import { SecurityFilterFilteredDataType } from "./SecurityFilterFilteredDataType";

import { AttributeTypeMap } from "../util";

/**
 * The security filters properties to be updated.
 */
export class SecurityFilterUpdateAttributes {
  /**
   * Exclusion filters to exclude some logs from the security filter.
   */
  "exclusionFilters"?: Array<SecurityFilterExclusionFilter>;
  /**
   * The filtered data type.
   */
  "filteredDataType"?: SecurityFilterFilteredDataType;
  /**
   * Whether the security filter is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * The name of the security filter.
   */
  "name"?: string;
  /**
   * The query of the security filter.
   */
  "query"?: string;
  /**
   * The version of the security filter to update.
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
      type: "Array<SecurityFilterExclusionFilter>",
    },
    filteredDataType: {
      baseName: "filtered_data_type",
      type: "SecurityFilterFilteredDataType",
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
    return SecurityFilterUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
