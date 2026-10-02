import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Exposure count and identity of one experiment variant.
 */
export class ExperimentsTrafficSummaryV2DTODataAttributesVariantsItems {
  /**
   * Number of recorded exposures for this variant.
   */
  "exposureCount"?: number;
  /**
   * Key that identifies the experiment variant.
   */
  "variantKey"?: string;
  /**
   * Display name of the experiment variant.
   */
  "variantName"?: string;
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
    exposureCount: {
      baseName: "exposure_count",
      type: "number",
      format: "int64",
    },
    variantKey: {
      baseName: "variant_key",
      type: "string",
    },
    variantName: {
      baseName: "variant_name",
      type: "string",
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
    return ExperimentsTrafficSummaryV2DTODataAttributesVariantsItems.attributeTypeMap;
  }

  public constructor() {}
}
