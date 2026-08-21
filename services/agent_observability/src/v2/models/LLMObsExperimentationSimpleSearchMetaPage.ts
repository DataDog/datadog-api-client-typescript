import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Page metadata.
 */
export class LLMObsExperimentationSimpleSearchMetaPage {
  /**
   * Current page number.
   */
  "current"?: number;
  /**
   * Page size used for this response.
   */
  "limit"?: number;
  /**
   * Total number of matching results (capped at the maximum search limit).
   */
  "totalCount"?: number;
  /**
   * Total number of pages available.
   */
  "totalPages"?: number;
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
    current: {
      baseName: "current",
      type: "number",
      format: "int32",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int32",
    },
    totalCount: {
      baseName: "total_count",
      type: "number",
      format: "int32",
    },
    totalPages: {
      baseName: "total_pages",
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
    return LLMObsExperimentationSimpleSearchMetaPage.attributeTypeMap;
  }

  public constructor() {}
}
