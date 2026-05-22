import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineTagCardinalityLimitProcessorPerTagMode } from "./ObservabilityPipelineTagCardinalityLimitProcessorPerTagMode";

/**
 * A cardinality override for a specific tag key within a per-metric limit.
 */
export class ObservabilityPipelineTagCardinalityLimitProcessorPerTagLimit {
  /**
   * How the per-tag override is applied. `limit_override` enforces a custom limit on the tag; `excluded` skips the tag from cardinality tracking.
   */
  "mode": ObservabilityPipelineTagCardinalityLimitProcessorPerTagMode;
  /**
   * The tag key this override applies to.
   */
  "tagKey": string;
  /**
   * The maximum number of distinct values allowed for this tag. Required when `mode` is `limit_override`. Must be omitted when `mode` is `excluded`.
   */
  "valueLimit"?: number;
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
    mode: {
      baseName: "mode",
      type: "ObservabilityPipelineTagCardinalityLimitProcessorPerTagMode",
      required: true,
    },
    tagKey: {
      baseName: "tag_key",
      type: "string",
      required: true,
    },
    valueLimit: {
      baseName: "value_limit",
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
    return ObservabilityPipelineTagCardinalityLimitProcessorPerTagLimit.attributeTypeMap;
  }

  public constructor() {}
}
