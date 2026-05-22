import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Defines how to rename a tag on metric events.
 */
export class ObservabilityPipelineRenameMetricTagsProcessorTag {
  /**
   * The new tag key to assign in place of the original.
   */
  "renameTo": string;
  /**
   * The original tag key on the metric event.
   */
  "tag": string;
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
    renameTo: {
      baseName: "rename_to",
      type: "string",
      required: true,
    },
    tag: {
      baseName: "tag",
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
    return ObservabilityPipelineRenameMetricTagsProcessorTag.attributeTypeMap;
  }

  public constructor() {}
}
