/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityFilterExclusionFilter } from "./SecurityFilterExclusionFilter";
import { SecurityFilterFilteredDataType } from "./SecurityFilterFilteredDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object containing the attributes of the security filter to be created.
 */
export class SecurityFilterCreateAttributes {
  /**
   * Exclusion filters to exclude some logs from the security filter.
   */
  "exclusionFilters": Array<SecurityFilterExclusionFilter>;
  /**
   * The filtered data type.
   */
  "filteredDataType": SecurityFilterFilteredDataType;
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
      type: "Array<SecurityFilterExclusionFilter>",
      required: true,
    },
    filteredDataType: {
      baseName: "filtered_data_type",
      type: "SecurityFilterFilteredDataType",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityFilterCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
