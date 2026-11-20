import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SensitiveDataScannerGroupTargetType } from "./SensitiveDataScannerGroupTargetType";

/**
 * A target the scanning group applies to.
 */
export class SensitiveDataScannerGroupTarget {
  /**
   * Type of target whose scanning groups are served by the target-scoped group routes. `llm_observability` is Agent Observability.
   */
  "type": SensitiveDataScannerGroupTargetType;
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
    type: {
      baseName: "type",
      type: "SensitiveDataScannerGroupTargetType",
      required: true,
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
    return SensitiveDataScannerGroupTarget.attributeTypeMap;
  }

  public constructor() {}
}
