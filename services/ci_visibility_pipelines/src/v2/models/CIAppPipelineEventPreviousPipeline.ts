import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * If the pipeline is a retry, this should contain the details of the previous attempt.
 */
export class CIAppPipelineEventPreviousPipeline {
  /**
   * UUID of a pipeline.
   */
  "id": string;
  /**
   * The URL to look at the pipeline in the CI provider UI.
   */
  "url"?: string;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    url: {
      baseName: "url",
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
    return CIAppPipelineEventPreviousPipeline.attributeTypeMap;
  }

  public constructor() {}
}
