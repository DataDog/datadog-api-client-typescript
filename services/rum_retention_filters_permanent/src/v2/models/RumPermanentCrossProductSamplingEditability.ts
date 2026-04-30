import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Flags indicating which `cross_product_sampling` rates can be updated for this filter. Read-only.
 */
export class RumPermanentCrossProductSamplingEditability {
  /**
   * If `true`, `cross_product_sampling.trace_sample_rate` can be updated on this filter.
   */
  "traceSampleRate"?: boolean;
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
    traceSampleRate: {
      baseName: "trace_sample_rate",
      type: "boolean",
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
    return RumPermanentCrossProductSamplingEditability.attributeTypeMap;
  }

  public constructor() {}
}
