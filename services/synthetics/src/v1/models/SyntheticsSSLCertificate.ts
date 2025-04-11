import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsSSLCertificateIssuer } from "./SyntheticsSSLCertificateIssuer";
import { SyntheticsSSLCertificateSubject } from "./SyntheticsSSLCertificateSubject";

/**
 * Object describing the SSL certificate used for a Synthetic test.
 */
export class SyntheticsSSLCertificate {
  /**
   * Cipher used for the connection.
   */
  "cipher"?: string;
  /**
   * Exponent associated to the certificate.
   */
  "exponent"?: number;
  /**
   * Array of extensions and details used for the certificate.
   */
  "extKeyUsage"?: Array<string>;
  /**
   * MD5 digest of the DER-encoded Certificate information.
   */
  "fingerprint"?: string;
  /**
   * SHA-1 digest of the DER-encoded Certificate information.
   */
  "fingerprint256"?: string;
  /**
   * Object describing the issuer of a SSL certificate.
   */
  "issuer"?: SyntheticsSSLCertificateIssuer;
  /**
   * Modulus associated to the SSL certificate private key.
   */
  "modulus"?: string;
  /**
   * TLS protocol used for the test.
   */
  "protocol"?: string;
  /**
   * Serial Number assigned by Symantec to the SSL certificate.
   */
  "serialNumber"?: string;
  /**
   * Object describing the SSL certificate used for the test.
   */
  "subject"?: SyntheticsSSLCertificateSubject;
  /**
   * Date from which the SSL certificate is valid.
   */
  "validFrom"?: Date;
  /**
   * Date until which the SSL certificate is valid.
   */
  "validTo"?: Date;
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
    cipher: {
      baseName: "cipher",
      type: "string",
    },
    exponent: {
      baseName: "exponent",
      type: "number",
      format: "double",
    },
    extKeyUsage: {
      baseName: "extKeyUsage",
      type: "Array<string>",
    },
    fingerprint: {
      baseName: "fingerprint",
      type: "string",
    },
    fingerprint256: {
      baseName: "fingerprint256",
      type: "string",
    },
    issuer: {
      baseName: "issuer",
      type: "SyntheticsSSLCertificateIssuer",
    },
    modulus: {
      baseName: "modulus",
      type: "string",
    },
    protocol: {
      baseName: "protocol",
      type: "string",
    },
    serialNumber: {
      baseName: "serialNumber",
      type: "string",
    },
    subject: {
      baseName: "subject",
      type: "SyntheticsSSLCertificateSubject",
    },
    validFrom: {
      baseName: "validFrom",
      type: "Date",
      format: "date-time",
    },
    validTo: {
      baseName: "validTo",
      type: "Date",
      format: "date-time",
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
    return SyntheticsSSLCertificate.attributeTypeMap;
  }

  public constructor() {}
}
