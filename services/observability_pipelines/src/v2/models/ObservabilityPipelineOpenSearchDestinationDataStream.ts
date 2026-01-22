import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Configuration options for writing to OpenSearch Data Streams instead of a fixed index.
 */
export class ObservabilityPipelineOpenSearchDestinationDataStream {
  /**
   * The data stream dataset for your logs. This groups logs by their source or application.
   */
  "dataset"?: string;
  /**
   * The data stream type for your logs. This determines how logs are categorized within the data stream.
   */
  "dtype"?: string;
  /**
   * The data stream namespace for your logs. This separates logs into different environments or domains.
   */
  "namespace"?: string;
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ObservabilityPipelineOpenSearchDestinationDataStream.attributeTypeMap;
  }

  public constructor() {}
}
