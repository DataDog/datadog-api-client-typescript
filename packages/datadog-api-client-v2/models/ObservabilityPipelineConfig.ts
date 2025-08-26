/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineConfigDestinationItem } from "./ObservabilityPipelineConfigDestinationItem";
import { ObservabilityPipelineConfigProcessorItem } from "./ObservabilityPipelineConfigProcessorItem";
import { ObservabilityPipelineConfigSourceItem } from "./ObservabilityPipelineConfigSourceItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Specifies the pipeline's configuration, including its sources, processors, and destinations.
 */
export class ObservabilityPipelineConfig {
  /**
   * A list of destination components where processed logs are sent.
   */
  "destinations": Array<ObservabilityPipelineConfigDestinationItem>;
  /**
   * A list of processors that transform or enrich log data.
   */
  "processors"?: Array<ObservabilityPipelineConfigProcessorItem>;
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
    processors: {
      baseName: "processors",
      type: "Array<ObservabilityPipelineConfigProcessorItem>",
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
