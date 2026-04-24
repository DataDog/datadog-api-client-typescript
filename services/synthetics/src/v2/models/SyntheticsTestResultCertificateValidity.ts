import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Validity window of a certificate.
 */
export class SyntheticsTestResultCertificateValidity {
  /**
   * Unix timestamp (ms) of when the certificate became valid.
   */
  "from"?: number;
  /**
   * Unix timestamp (ms) of when the certificate expires.
   */
  "to"?: number;
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
    from: {
      baseName: "from",
      type: "number",
      format: "int64",
    },
    to: {
      baseName: "to",
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
    return SyntheticsTestResultCertificateValidity.attributeTypeMap;
  }

  public constructor() {}
}
