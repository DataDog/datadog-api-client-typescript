import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Cursor-based pagination parameters.
 */
export class LLMObsExperimentationCursorPage {
  /**
   * Opaque cursor returned from a previous response to fetch the next page.
   */
  "cursor"?: string;
  /**
   * Maximum number of results per page.
   */
  "limit"?: number;
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
    cursor: {
      baseName: "cursor",
      type: "string",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int64",
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
    return LLMObsExperimentationCursorPage.attributeTypeMap;
  }

  public constructor() {}
}
