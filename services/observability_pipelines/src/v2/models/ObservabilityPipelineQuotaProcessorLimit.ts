import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineQuotaProcessorLimitEnforceType } from "./ObservabilityPipelineQuotaProcessorLimitEnforceType";

/**
 * The maximum amount of data or number of events allowed before the quota is enforced. Can be specified in bytes or events.
 */
export class ObservabilityPipelineQuotaProcessorLimit {
  /**
   * Unit for quota enforcement in bytes for data size or events for count.
   */
  "enforce": ObservabilityPipelineQuotaProcessorLimitEnforceType;
  /**
   * The limit for quota enforcement.
   */
  "limit": number;
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
    enforce: {
      baseName: "enforce",
      type: "ObservabilityPipelineQuotaProcessorLimitEnforceType",
      required: true,
    },
    limit: {
      baseName: "limit",
      type: "number",
      required: true,
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
    return ObservabilityPipelineQuotaProcessorLimit.attributeTypeMap;
  }

  public constructor() {}
}
