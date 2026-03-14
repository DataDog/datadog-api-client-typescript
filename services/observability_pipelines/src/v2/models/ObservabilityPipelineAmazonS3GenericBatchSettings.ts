import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Event batching settings
 */
export class ObservabilityPipelineAmazonS3GenericBatchSettings {
  /**
   * Maximum batch size in bytes.
   */
  "batchSize"?: number;
  /**
   * Maximum number of seconds to wait before flushing the batch.
   */
  "timeoutSecs"?: number;
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
    batchSize: {
      baseName: "batch_size",
      type: "number",
      format: "int64",
    },
    timeoutSecs: {
      baseName: "timeout_secs",
      type: "number",
      format: "int64",
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
    return ObservabilityPipelineAmazonS3GenericBatchSettings.attributeTypeMap;
  }

  public constructor() {}
}
