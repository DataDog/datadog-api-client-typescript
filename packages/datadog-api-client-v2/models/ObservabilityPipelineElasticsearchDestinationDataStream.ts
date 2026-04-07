/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Configuration options for writing to Elasticsearch Data Streams instead of a fixed index.
 */
export class ObservabilityPipelineElasticsearchDestinationDataStream {
  /**
   * When `true`, automatically routes events to the appropriate data stream based on the event content.
   */
  "autoRouting"?: boolean;
  /**
   * The data stream dataset. This groups events by their source or application.
   */
  "dataset"?: string;
  /**
   * The data stream type. This determines how events are categorized within the data stream.
   */
  "dtype"?: string;
  /**
   * The data stream namespace. This separates events into different environments or domains.
   */
  "namespace"?: string;
  /**
   * When `true`, synchronizes data stream fields with the Elasticsearch index mapping.
   */
  "syncFields"?: boolean;

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
    autoRouting: {
      baseName: "auto_routing",
      type: "boolean",
    },
    dataset: {
      baseName: "dataset",
      type: "string",
    },
    dtype: {
      baseName: "dtype",
      type: "string",
    },
    namespace: {
      baseName: "namespace",
      type: "string",
    },
    syncFields: {
      baseName: "sync_fields",
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
    return ObservabilityPipelineElasticsearchDestinationDataStream.attributeTypeMap;
  }

  public constructor() {}
}
