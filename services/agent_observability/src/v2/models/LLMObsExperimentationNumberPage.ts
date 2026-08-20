import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Offset-based pagination parameters for simple search.
 */
export class LLMObsExperimentationNumberPage {
  /**
   * Maximum number of results per page.
   */
  "limit"?: number;
  /**
   * Page number to retrieve (1-indexed).
   */
  "number"?: number;
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
    limit: {
      baseName: "limit",
      type: "number",
      format: "int32",
    },
    number: {
      baseName: "number",
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
    return LLMObsExperimentationNumberPage.attributeTypeMap;
  }

  public constructor() {}
}
