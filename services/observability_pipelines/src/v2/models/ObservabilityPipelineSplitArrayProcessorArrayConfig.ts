import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Configuration for a single array split operation.
 */
export class ObservabilityPipelineSplitArrayProcessorArrayConfig {
  /**
   * The path to the array field to split.
   */
  "field": string;
  /**
   * A Datadog search query used to determine which logs this array split operation targets.
   */
  "include": string;
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
    field: {
      baseName: "field",
      type: "string",
      required: true,
    },
    include: {
      baseName: "include",
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
    return ObservabilityPipelineSplitArrayProcessorArrayConfig.attributeTypeMap;
  }

  public constructor() {}
}
