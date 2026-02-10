import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Configuration for the cache used to detect duplicates.
 */
export class ObservabilityPipelineDedupeProcessorCache {
  /**
   * The number of events to cache for duplicate detection.
   */
  "numEvents": number;
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
    numEvents: {
      baseName: "num_events",
      type: "number",
      required: true,
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
    return ObservabilityPipelineDedupeProcessorCache.attributeTypeMap;
  }

  public constructor() {}
}
