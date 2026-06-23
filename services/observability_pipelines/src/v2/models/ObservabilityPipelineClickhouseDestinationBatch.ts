import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Batching configuration for ClickHouse inserts.
 */
export class ObservabilityPipelineClickhouseDestinationBatch {
  /**
   * Maximum number of events per batch before it is flushed.
   */
  "maxEvents"?: number;
  /**
   * Maximum number of seconds to wait before flushing a partial batch.
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
    maxEvents: {
      baseName: "max_events",
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
    return ObservabilityPipelineClickhouseDestinationBatch.attributeTypeMap;
  }

  public constructor() {}
}
