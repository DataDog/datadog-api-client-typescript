import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Object describing the issuer of a SSL certificate.
 */
export class SyntheticsSSLCertificateIssuer {
  /**
   * Country Name that issued the certificate.
   */
  "C"?: string;
  /**
   * Common Name that issued certificate.
   */
  "CN"?: string;
  /**
   * Locality that issued the certificate.
   */
  "L"?: string;
  /**
   * Organization that issued the certificate.
   */
  "O"?: string;
  /**
   * Organizational Unit that issued the certificate.
   */
  "OU"?: string;
  /**
   * State Or Province Name that issued the certificate.
   */
  "ST"?: string;
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsSSLCertificateIssuer.attributeTypeMap;
  }

  public constructor() {}
}
