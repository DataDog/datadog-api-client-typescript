import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Object describing the SSL certificate used for the test.
 */
export class SyntheticsSSLCertificateSubject {
  /**
   * Country Name associated with the certificate.
   */
  "C"?: string;
  /**
   * Common Name that associated with the certificate.
   */
  "CN"?: string;
  /**
   * Locality associated with the certificate.
   */
  "L"?: string;
  /**
   * Organization associated with the certificate.
   */
  "O"?: string;
  /**
   * Organizational Unit associated with the certificate.
   */
  "OU"?: string;
  /**
   * State Or Province Name associated with the certificate.
   */
  "ST"?: string;
  /**
   * Subject Alternative Name associated with the certificate.
   */
  "altName"?: string;
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
    C: {
      baseName: "C",
      type: "string",
    },
    CN: {
      baseName: "CN",
      type: "string",
    },
    L: {
      baseName: "L",
      type: "string",
    },
    O: {
      baseName: "O",
      type: "string",
    },
    OU: {
      baseName: "OU",
      type: "string",
    },
    ST: {
      baseName: "ST",
      type: "string",
    },
    altName: {
      baseName: "altName",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsSSLCertificateSubject.attributeTypeMap;
  }

  public constructor() {}
}
