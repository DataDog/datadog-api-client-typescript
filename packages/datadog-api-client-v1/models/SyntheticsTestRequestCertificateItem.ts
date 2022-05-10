/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../util";

/**
 * Define a request certificate.
 */
export class SyntheticsTestRequestCertificateItem {
  /**
   * Content of the certificate or key.
   */
  "content"?: string;
  /**
   * File name for the certificate or key.
   */
  "filename"?: string;
  /**
   * Date of update of the certificate or key, ISO format.
   */
  "updatedAt"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    content: {
      baseName: "content",
      type: "string",
    },
    filename: {
      baseName: "filename",
      type: "string",
    },
    updatedAt: {
      baseName: "updatedAt",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsTestRequestCertificateItem.attributeTypeMap;
  }

  public constructor() {}
}
