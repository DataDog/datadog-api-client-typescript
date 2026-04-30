import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Partial update of the cross-product sample rates for a permanent retention filter.
 * Only rates with a matching `cross_product_sampling_editability` flag set to `true` can be updated.
 */
export class RumPermanentCrossProductSamplingUpdate {
  /**
   * Percentage (0–100) of retained sessions (with ingested traces) whose traces are indexed.
   * Omit to leave unchanged. Rejected if the filter's `cross_product_sampling_editability.trace_sample_rate` is `false`.
   */
  "traceSampleRate"?: number;
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
      type: "number",
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
    return RumPermanentCrossProductSamplingUpdate.attributeTypeMap;
  }

  public constructor() {}
}
