import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A single exclusion filter.
 */
export class SecurityFilterExclusionFilterResponse {
  /**
   * The exclusion filter name.
   */
  "name"?: string;
  /**
   * The exclusion filter query.
   */
  "query"?: string;
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
    name: {
      baseName: "name",
      type: "string",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityFilterExclusionFilterResponse.attributeTypeMap;
  }

  public constructor() {}
}
