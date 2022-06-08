/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
   * @ignore
   */
  "unparsedObject"?: any;

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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsSSLCertificateSubject.attributeTypeMap;
  }

  public constructor() {}
}
