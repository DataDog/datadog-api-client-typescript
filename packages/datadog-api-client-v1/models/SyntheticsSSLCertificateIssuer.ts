/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../util";

/**
 * Object describing the issuer of a SSL certificate.
 */
export class SyntheticsSSLCertificateIssuer {
  /**
   * Country Name that issued the certificate.
   */
  "c"?: string;
  /**
   * Common Name that issued certificate.
   */
  "cn"?: string;
  /**
   * Locality that issued the certificate.
   */
  "l"?: string;
  /**
   * Organization that issued the certificate.
   */
  "o"?: string;
  /**
   * Organizational Unit that issued the certificate.
   */
  "ou"?: string;
  /**
   * State Or Province Name that issued the certificate.
   */
  "st"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    c: {
      baseName: "C",
      type: "string",
    },
    cn: {
      baseName: "CN",
      type: "string",
    },
    l: {
      baseName: "L",
      type: "string",
    },
    o: {
      baseName: "O",
      type: "string",
    },
    ou: {
      baseName: "OU",
      type: "string",
    },
    st: {
      baseName: "ST",
      type: "string",
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
