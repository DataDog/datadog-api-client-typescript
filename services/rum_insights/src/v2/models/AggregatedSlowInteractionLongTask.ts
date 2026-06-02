import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Aggregated slow interaction with long task detection grouped by action and selector.
 */
export class AggregatedSlowInteractionLongTask {
  /**
   * Type of user interaction that triggered the slow response.
   */
  "actionType": string;
  /**
   * Average long task blocking duration in nanoseconds.
   */
  "avgBlockingDuration": number;
  /**
   * Average total interaction duration in nanoseconds.
   */
  "avgDuration": number;
  /**
   * Unique fingerprint identifying this detection group.
   */
  "fingerprint": string;
  /**
   * Impact score combining view frequency and blocking severity.
   */
  "impactScore": number;
  /**
   * Total number of detection instances across sampled views.
   */
  "instanceCount": number;
  /**
   * CSS selector of the element that was interacted with.
   */
  "selector": string | null;
  /**
   * Normalized CSS selector with dynamic parts replaced.
   */
  "selectorNormalized": string | null;
  /**
   * Number of sampled views where this detection occurred.
   */
  "viewOccurrences": number;
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
    actionType: {
      baseName: "action_type",
      type: "string",
      required: true,
    },
    avgBlockingDuration: {
      baseName: "avg_blocking_duration",
      type: "number",
      required: true,
      format: "int64",
    },
    avgDuration: {
      baseName: "avg_duration",
      type: "number",
      required: true,
      format: "int64",
    },
    fingerprint: {
      baseName: "fingerprint",
      type: "string",
      required: true,
    },
    impactScore: {
      baseName: "impact_score",
      type: "number",
      required: true,
      format: "double",
    },
    instanceCount: {
      baseName: "instance_count",
      type: "number",
      required: true,
      format: "int32",
    },
    selector: {
      baseName: "selector",
      type: "string",
      required: true,
    },
    selectorNormalized: {
      baseName: "selector_normalized",
      type: "string",
      required: true,
    },
    viewOccurrences: {
      baseName: "view_occurrences",
      type: "number",
      required: true,
      format: "int32",
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
    return AggregatedSlowInteractionLongTask.attributeTypeMap;
  }

  public constructor() {}
}
