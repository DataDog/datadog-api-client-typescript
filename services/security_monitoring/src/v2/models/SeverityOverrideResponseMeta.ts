import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SeverityOverrideResult } from "./SeverityOverrideResult";

/**
 * Security findings skipped while processing the severity override request.
 */
export class SeverityOverrideResponseMeta {
  /**
   * Findings skipped because an automation rule set their severity.
   */
  "warnings"?: Array<SeverityOverrideResult>;
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
    warnings: {
      baseName: "warnings",
      type: "Array<SeverityOverrideResult>",
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
    return SeverityOverrideResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
