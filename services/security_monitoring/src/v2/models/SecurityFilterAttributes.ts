import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityFilterExclusionFilterResponse } from "./SecurityFilterExclusionFilterResponse";
import { SecurityFilterFilteredDataType } from "./SecurityFilterFilteredDataType";

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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
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
