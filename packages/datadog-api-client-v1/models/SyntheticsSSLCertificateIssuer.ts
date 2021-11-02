/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
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

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
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
  };

  static getAttributeTypeMap() {
    return SyntheticsSSLCertificateIssuer.attributeTypeMap;
  }

  public constructor() {}
}
