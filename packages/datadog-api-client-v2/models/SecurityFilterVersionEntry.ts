/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityFilterExclusionFilterResponse } from "./SecurityFilterExclusionFilterResponse";
import { SecurityFilterFilteredDataType } from "./SecurityFilterFilteredDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single security filter as it existed at a given configuration version.
 */
export class SecurityFilterVersionEntry {
  /**
   * The list of exclusion filters applied in this security filter.
   */
  "exclusionFilters": Array<SecurityFilterExclusionFilterResponse>;
  /**
   * The filtered data type.
   */
  "filteredDataType": SecurityFilterFilteredDataType;
  /**
   * The ID of the security filter.
   */
  "id": string;
  /**
   * Whether the security filter is the built-in filter.
   */
  "isBuiltin": boolean;
  /**
   * Whether the security filter is enabled.
   */
  "isEnabled": boolean;
  /**
   * The name of the security filter.
   */
  "name": string;
  /**
   * The query of the security filter.
   */
  "query": string;
  /**
   * The version of this security filter.
   */
  "version": number;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    exclusionFilters: {
      baseName: "exclusion_filters",
      type: "Array<SecurityFilterExclusionFilterResponse>",
      required: true,
    },
    filteredDataType: {
      baseName: "filtered_data_type",
      type: "SecurityFilterFilteredDataType",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    isBuiltin: {
      baseName: "is_builtin",
      type: "boolean",
      required: true,
    },
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    query: {
      baseName: "query",
      type: "string",
      required: true,
    },
    version: {
      baseName: "version",
      type: "number",
      required: true,
      format: "int32",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityFilterVersionEntry.attributeTypeMap;
  }

  public constructor() {}
}
