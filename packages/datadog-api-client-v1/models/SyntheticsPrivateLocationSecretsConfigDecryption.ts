/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../util";

/**
 * Private key for the private location.
 */
export class SyntheticsPrivateLocationSecretsConfigDecryption {
  /**
   * Private key for the private location.
   */
  "key"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    key: {
      baseName: "key",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsPrivateLocationSecretsConfigDecryption.attributeTypeMap;
  }

  public constructor() {}
}
