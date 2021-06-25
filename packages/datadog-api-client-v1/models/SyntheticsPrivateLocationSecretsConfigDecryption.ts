/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Private key for the private location.
 */

export class SyntheticsPrivateLocationSecretsConfigDecryption {
  /**
   * Private key for the private location.
   */
  "key"?: string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    key: {
      baseName: "key",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsPrivateLocationSecretsConfigDecryption.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): SyntheticsPrivateLocationSecretsConfigDecryption {
    const res = new SyntheticsPrivateLocationSecretsConfigDecryption();

    res.key = ObjectSerializer.deserialize(data.key, "string", "");

    return res;
  }

  static serialize(
    data: SyntheticsPrivateLocationSecretsConfigDecryption
  ): { [key: string]: any } {
    const attributeTypes = SyntheticsPrivateLocationSecretsConfigDecryption.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    res.key = ObjectSerializer.serialize(data.key, "string", "");

    return res;
  }

  public constructor() {}
}
