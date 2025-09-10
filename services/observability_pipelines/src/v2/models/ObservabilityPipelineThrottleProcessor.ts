import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineThrottleProcessorType } from "./ObservabilityPipelineThrottleProcessorType";

/**
 * The `throttle` processor limits the number of events that pass through over a given time window.
 */
export class ObservabilityPipelineThrottleProcessor {
  /**
   * The processor passes through all events if it is set to `false`. Defaults to `true`.
   */
  "enabled"?: boolean;
  /**
   * Optional list of fields used to group events before the threshold has been reached.
   */
  "groupBy"?: Array<string>;
  /**
   * The unique identifier for this processor.
   */
  "id": string;
  /**
   * A Datadog search query used to determine which logs this processor targets.
   */
  "include": string;
  /**
   * A list of component IDs whose output is used as the input for this processor.
   */
  "inputs": Array<string>;
  /**
   * the number of events allowed in a given time window. Events sent after the threshold has been reached, are dropped.
   */
  "threshold": number;
  /**
   * The processor type. The value should always be `throttle`.
   */
  "type": ObservabilityPipelineThrottleProcessorType;
  /**
   * The time window in seconds over which the threshold applies.
   */
  "window": number;
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
    groupBy: {
      baseName: "group_by",
      type: "Array<string>",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    include: {
      baseName: "include",
      type: "string",
      required: true,
    },
    inputs: {
      baseName: "inputs",
      type: "Array<string>",
      required: true,
    },
    threshold: {
      baseName: "threshold",
      type: "number",
      required: true,
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineThrottleProcessorType",
      required: true,
    },
    window: {
      baseName: "window",
      type: "number",
      required: true,
      format: "double",
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
    return ObservabilityPipelineThrottleProcessor.attributeTypeMap;
  }

  public constructor() {}
}
