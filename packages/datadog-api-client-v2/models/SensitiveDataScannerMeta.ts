/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
   * Whether or not scanned events are highlighted in Logs or RUM for the org.
   */
  "hasHighlightEnabled"?: boolean;
  /**
   * Whether or not scanned events have multi-pass enabled.
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
  };
}
