import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineCreateRequestData } from "./ObservabilityPipelineCreateRequestData";

/**
 * Top-level schema representing a pipeline.
 */
export class ObservabilityPipelineCreateRequest {
  /**
   * Contains the pipeline’s ID, type, and configuration attributes.
   */
  "data": ObservabilityPipelineCreateRequestData;
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
      type: "ObservabilityPipelineCreateRequestData",
      required: true,
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
    return ObservabilityPipelineCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
