import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Pagination links for the list of automation rules.
 */
export class SecurityAutomationRulesLinks {
  /**
   * Link to the first page of results.
   */
  "first": string;
  /**
   * Link to the last page of results.
   */
  "last": string;
  /**
   * Link to the next page of results.
   */
  "next"?: string;
  /**
   * Link to the previous page of results.
   */
  "prev"?: string;
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
    first: {
      baseName: "first",
      type: "string",
      required: true,
    },
    last: {
      baseName: "last",
      type: "string",
      required: true,
    },
    next: {
      baseName: "next",
      type: "string",
    },
    prev: {
      baseName: "prev",
      type: "string",
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
    return SecurityAutomationRulesLinks.attributeTypeMap;
  }

  public constructor() {}
}
