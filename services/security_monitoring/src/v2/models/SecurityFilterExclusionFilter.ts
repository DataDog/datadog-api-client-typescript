import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Exclusion filter for the security filter.
 */
export class SecurityFilterExclusionFilter {
  /**
   * Exclusion filter name.
   */
  "name": string;
  /**
   * Exclusion filter query. Logs that match this query are excluded from the security filter.
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
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityFilterExclusionFilter.attributeTypeMap;
  }

  public constructor() {}
}
