import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumRetentionFilterEventType } from "./RumRetentionFilterEventType";

/**
 * The object describing attributes of a RUM retention filter.
 */
export class RumRetentionFilterAttributes {
  /**
   * Whether the retention filter is enabled.
   */
  "enabled"?: boolean;
  /**
   * The type of RUM events to filter on.
   */
  "eventType"?: RumRetentionFilterEventType;
  /**
   * The name of a RUM retention filter.
   */
  "name"?: string;
  /**
   * The query string for a RUM retention filter.
   */
  "query"?: string;
  /**
   * The sample rate for a RUM retention filter, between 0 and 100.
   */
  "sampleRate"?: number;
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
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    eventType: {
      baseName: "event_type",
      type: "RumRetentionFilterEventType",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    sampleRate: {
      baseName: "sample_rate",
      type: "number",
      format: "int64",
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
    return RumRetentionFilterAttributes.attributeTypeMap;
  }

  public constructor() {}
}
