import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SeverityOverrideAttributes } from "./SeverityOverrideAttributes";

/**
 * Attributes of the severity override request.
 */
export class SeverityOverrideRequestDataAttributes {
  /**
   * Severity override to apply to the findings.
   * Set `action` to `set` to apply a manual severity override with the given `value`.
   * Set `action` to `clear` to remove a manual severity override.
   */
  "severity": SeverityOverrideAttributes;
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
    severity: {
      baseName: "severity",
      type: "SeverityOverrideAttributes",
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
    return SeverityOverrideRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
