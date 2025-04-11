import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineData } from "./ObservabilityPipelineData";

/**
 * Top-level schema representing a pipeline.
 */
export class ObservabilityPipeline {
  /**
   * Contains the pipeline’s ID, type, and configuration attributes.
   */
  "data": ObservabilityPipelineData;
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
    data: {
      baseName: "data",
      type: "ObservabilityPipelineData",
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
    return ObservabilityPipeline.attributeTypeMap;
  }

  public constructor() {}
}
