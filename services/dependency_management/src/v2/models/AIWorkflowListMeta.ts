import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metadata for the list AI workflows response.
 */
export class AIWorkflowListMeta {
  /**
   * Total number of AI workflows matching the filter criteria.
   */
  "total": number;
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
    total: {
      baseName: "total",
      type: "number",
      required: true,
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
    return AIWorkflowListMeta.attributeTypeMap;
  }

  public constructor() {}
}
