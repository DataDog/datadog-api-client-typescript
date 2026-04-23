import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Certificate details returned in an OCSP response.
 */
export class SyntheticsTestResultOCSPCertificate {
  /**
   * Reason code for the revocation, when applicable.
   */
  "revocationReason"?: string;
  /**
   * Unix timestamp (ms) of the revocation.
   */
  "revocationTime"?: number;
  /**
   * Serial number of the certificate.
   */
  "serialNumber"?: string;
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
    revocationReason: {
      baseName: "revocation_reason",
      type: "string",
    },
    revocationTime: {
      baseName: "revocation_time",
      type: "number",
      format: "int64",
    },
    serialNumber: {
      baseName: "serial_number",
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
    return SyntheticsTestResultOCSPCertificate.attributeTypeMap;
  }

  public constructor() {}
}
