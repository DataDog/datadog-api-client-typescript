import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineElasticsearchDestinationApiVersion } from "./ObservabilityPipelineElasticsearchDestinationApiVersion";
import { ObservabilityPipelineElasticsearchDestinationType } from "./ObservabilityPipelineElasticsearchDestinationType";

/**
 * The `elasticsearch` destination writes logs to an Elasticsearch cluster.
 */
export class ObservabilityPipelineElasticsearchDestination {
  /**
   * The Elasticsearch API version to use. Set to `auto` to auto-detect.
   */
  "apiVersion"?: ObservabilityPipelineElasticsearchDestinationApiVersion;
  /**
   * The index to write logs to in Elasticsearch.
   */
  "bulkIndex"?: string;
  /**
   * The unique identifier for this component.
   */
  "id": string;
  /**
   * A list of component IDs whose output is used as the `input` for this component.
   */
  "inputs": Array<string>;
  /**
   * The destination type. The value should always be `elasticsearch`.
   */
  "type": ObservabilityPipelineElasticsearchDestinationType;
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
    apiVersion: {
      baseName: "api_version",
      type: "ObservabilityPipelineElasticsearchDestinationApiVersion",
    },
    bulkIndex: {
      baseName: "bulk_index",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    inputs: {
      baseName: "inputs",
      type: "Array<string>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineElasticsearchDestinationType",
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
    return ObservabilityPipelineElasticsearchDestination.attributeTypeMap;
  }

  public constructor() {}
}
