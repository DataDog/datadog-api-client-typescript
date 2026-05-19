import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for setting the resolution reason on a security case.
 */
export class CaseUpdateResolvedReasonAttributes {
  /**
   * The reason the security case was resolved (for example, `FALSE_POSITIVE`, `TRUE_POSITIVE`, `BENIGN_POSITIVE`).
   */
  "securityResolvedReason": string;
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
    securityResolvedReason: {
      baseName: "security_resolved_reason",
      type: "string",
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
    return CaseUpdateResolvedReasonAttributes.attributeTypeMap;
  }

  public constructor() {}
}
