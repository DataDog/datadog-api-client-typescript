import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineTagCardinalityLimitProcessorOverrideType } from "./ObservabilityPipelineTagCardinalityLimitProcessorOverrideType";

/**
 * A cardinality override for a specific tag key within a per-metric limit.
 */
export class ObservabilityPipelineTagCardinalityLimitProcessorPerTagLimit {
  /**
   * How the override is applied. `limit_override` enforces a custom limit; `excluded` omits the metric or tag from cardinality tracking.
   */
  "overrideType": ObservabilityPipelineTagCardinalityLimitProcessorOverrideType;
  /**
   * The tag key this override applies to.
   */
  "tagKey": string;
  /**
   * The maximum number of distinct values allowed for this tag. Required when `override_type` is `limit_override`. Must be omitted when `override_type` is `excluded`.
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
    overrideType: {
      baseName: "override_type",
      type: "ObservabilityPipelineTagCardinalityLimitProcessorOverrideType",
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
