import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineSpecData } from "./ObservabilityPipelineSpecData";

/**
 * Input schema representing an observability pipeline configuration. Used in create and validate requests.
 */
export class ObservabilityPipelineSpec {
  /**
   * Contains the the pipeline configuration.
   */
  "data": ObservabilityPipelineSpecData;
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
      type: "ObservabilityPipelineSpecData",
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
    return ObservabilityPipelineSpec.attributeTypeMap;
  }

  public constructor() {}
}
