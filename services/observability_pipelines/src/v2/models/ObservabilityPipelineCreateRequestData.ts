import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineDataAttributes } from "./ObservabilityPipelineDataAttributes";

/**
 * Contains the pipeline’s ID, type, and configuration attributes.
 */
export class ObservabilityPipelineCreateRequestData {
  /**
   * Defines the pipeline’s name and its components (sources, processors, and destinations).
   */
  "attributes": ObservabilityPipelineDataAttributes;
  /**
   * The resource type identifier. For pipeline resources, this should always be set to `pipelines`.
   */
  "type": string;
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
    attributes: {
      baseName: "attributes",
      type: "ObservabilityPipelineDataAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "string",
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
    return ObservabilityPipelineCreateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
