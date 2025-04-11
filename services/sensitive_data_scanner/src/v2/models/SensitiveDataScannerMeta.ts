import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Meta response containing information about the API.
 */
export class SensitiveDataScannerMeta {
  /**
   * Maximum number of scanning rules allowed for the org.
   */
  "countLimit"?: number;
  /**
   * Maximum number of scanning groups allowed for the org.
   */
  "groupCountLimit"?: number;
  /**
   * (Deprecated) Whether or not scanned events are highlighted in Logs or RUM for the org.
   */
  "hasHighlightEnabled"?: boolean;
  /**
   * (Deprecated) Whether or not scanned events have multi-pass enabled.
   */
  "hasMultiPassEnabled"?: boolean;
  /**
   * Whether or not the org is compliant to the payment card industry standard.
   */
  "isPciCompliant"?: boolean;
  /**
   * Version of the API.
   */
  "version"?: number;
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
    countLimit: {
      baseName: "count_limit",
      type: "number",
      format: "int64",
    },
    groupCountLimit: {
      baseName: "group_count_limit",
      type: "number",
      format: "int64",
    },
    hasHighlightEnabled: {
      baseName: "has_highlight_enabled",
      type: "boolean",
    },
    hasMultiPassEnabled: {
      baseName: "has_multi_pass_enabled",
      type: "boolean",
    },
    isPciCompliant: {
      baseName: "is_pci_compliant",
      type: "boolean",
    },
    version: {
      baseName: "version",
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
    return SensitiveDataScannerMeta.attributeTypeMap;
  }

  public constructor() {}
}
