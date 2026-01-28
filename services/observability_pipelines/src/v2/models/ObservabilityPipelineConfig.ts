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
  "processorGroups"?: Array<ObservabilityPipelineConfigProcessorGroup>;
  /**
   * A list of processor groups that transform or enrich log data.
   *
   * **Deprecated:** This field is deprecated, you should now use the processor_groups field.
   */
  "processors"?: Array<ObservabilityPipelineConfigProcessorGroup>;
  /**
   * A list of configured data sources for the pipeline.
   */
  "sources": Array<ObservabilityPipelineConfigSourceItem>;
  /**
   * Set to `true` to continue using the legacy search syntax while migrating filter queries. After migrating all queries to the new syntax, set to `false`.
   * The legacy syntax is deprecated and will eventually be removed.
   * Requires Observability Pipelines Worker 2.11 or later.
   * See [Upgrade Your Filter Queries to the New Search Syntax](https://docs.datadoghq.com/observability_pipelines/guide/upgrade_your_filter_queries_to_the_new_search_syntax/) for more information.
   */
  "useLegacySearchSyntax"?: boolean;
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
    processorGroups: {
      baseName: "processor_groups",
      type: "Array<ObservabilityPipelineConfigProcessorGroup>",
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
    useLegacySearchSyntax: {
      baseName: "use_legacy_search_syntax",
      type: "boolean",
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
