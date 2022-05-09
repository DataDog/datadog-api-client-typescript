/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../util";

/**
 * Object describing the SSL certificate used for the test.
 */
export class SyntheticsSSLCertificateSubject {
  /**
   * Country Name associated with the certificate.
   */
  "c"?: string;
  /**
   * Common Name that associated with the certificate.
   */
  "cn"?: string;
  /**
   * Locality associated with the certificate.
   */
  "l"?: string;
  /**
   * Organization associated with the certificate.
   */
  "o"?: string;
  /**
   * Organizational Unit associated with the certificate.
   */
  "ou"?: string;
  /**
   * State Or Province Name associated with the certificate.
   */
  "st"?: string;
  /**
   * Subject Alternative Name associated with the certificate.
   */
  "altName"?: string;

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
    altName: {
      baseName: "altName",
      type: "string",
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
