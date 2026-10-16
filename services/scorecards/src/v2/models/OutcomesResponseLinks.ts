import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Pagination links for rule outcomes.
 */
export class OutcomesResponseLinks {
  /**
   * Link for the first set of results.
   */
  "first"?: string;
  /**
   * Link for the last set of results.
   */
  "last"?: string;
  /**
   * Link for the next set of results.
   */
  "next"?: string;
  /**
   * Link for the previous set of results.
   */
  "previous"?: string;
  /**
   * Link for the current set of results.
   */
  "self"?: string;
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
    },
    last: {
      baseName: "last",
      type: "string",
    },
    next: {
      baseName: "next",
      type: "string",
    },
    previous: {
      baseName: "previous",
      type: "string",
    },
    self: {
      baseName: "self",
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
    return OutcomesResponseLinks.attributeTypeMap;
  }

  public constructor() {}
}
