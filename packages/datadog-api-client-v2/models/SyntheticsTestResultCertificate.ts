/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestResultCertificateValidity } from "./SyntheticsTestResultCertificateValidity";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * SSL/TLS certificate information returned from an SSL test.
 */
export class SyntheticsTestResultCertificate {
  /**
   * Cipher used for the TLS connection.
   */
  "cipher"?: string;
  /**
   * RSA exponent of the certificate.
   */
  "exponent"?: number;
  /**
   * Extended key usage extensions for the certificate.
   */
  "extKeyUsage"?: Array<string>;
  /**
   * SHA-1 fingerprint of the certificate.
   */
  "fingerprint"?: string;
  /**
   * SHA-256 fingerprint of the certificate.
   */
  "fingerprint256"?: string;
  /**
   * Certificate issuer details.
   */
  "issuer"?: { [key: string]: string };
  /**
   * RSA modulus of the certificate.
   */
  "modulus"?: string;
  /**
   * TLS protocol used (for example, `TLSv1.2`).
   */
  "protocol"?: string;
  /**
   * Serial number of the certificate.
   */
  "serialNumber"?: string;
  /**
   * Certificate subject details.
   */
  "subject"?: { [key: string]: string };
  /**
   * TLS protocol version.
   */
  "tlsVersion"?: number;
  /**
   * Validity window of a certificate.
   */
  "valid"?: SyntheticsTestResultCertificateValidity;

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
      format: "int64",
    },
    extKeyUsage: {
      baseName: "ext_key_usage",
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
      type: "{ [key: string]: string; }",
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
      baseName: "serial_number",
      type: "string",
    },
    subject: {
      baseName: "subject",
      type: "{ [key: string]: string; }",
    },
    tlsVersion: {
      baseName: "tls_version",
      type: "number",
      format: "double",
    },
    valid: {
      baseName: "valid",
      type: "SyntheticsTestResultCertificateValidity",
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
    return SyntheticsTestResultCertificate.attributeTypeMap;
  }

  public constructor() {}
}
