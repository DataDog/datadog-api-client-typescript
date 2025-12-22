import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineConfigDestinationItem } from "./ObservabilityPipelineConfigDestinationItem";
import { ObservabilityPipelineConfigPipelineType } from "./ObservabilityPipelineConfigPipelineType";
import { ObservabilityPipelineConfigProcessorGroup } from "./ObservabilityPipelineConfigProcessorGroup";
import { ObservabilityPipelineConfigSourceItem } from "./ObservabilityPipelineConfigSourceItem";

/**
 * Specifies the pipeline's configuration, including its sources, processors, and destinations.
 */
export class ObservabilityPipelineConfig {
  /**
   * A list of destination components where processed logs are sent.
   */
  "destinations": Array<ObservabilityPipelineConfigDestinationItem>;
  /**
   * The type of data being ingested. Defaults to `logs` if not specified.
   */
  "pipelineType"?: ObservabilityPipelineConfigPipelineType;
  /**
   * A list of processor groups that transform or enrich log data.
   */
  "processors"?: Array<ObservabilityPipelineConfigProcessorGroup>;
  /**
   * A list of configured data sources for the pipeline.
   */
  "sources": Array<ObservabilityPipelineConfigSourceItem>;
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
    destinations: {
      baseName: "destinations",
      type: "Array<ObservabilityPipelineConfigDestinationItem>",
      required: true,
    },
    pipelineType: {
      baseName: "pipeline_type",
      type: "ObservabilityPipelineConfigPipelineType",
    },
    processors: {
      baseName: "processors",
      type: "Array<ObservabilityPipelineConfigProcessorGroup>",
    },
    sources: {
      baseName: "sources",
      type: "Array<ObservabilityPipelineConfigSourceItem>",
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
    return ObservabilityPipelineConfig.attributeTypeMap;
  }

  public constructor() {}
}
