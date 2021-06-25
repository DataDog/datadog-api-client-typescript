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
 * Description of errors.
 */

export class AWSLogsAsyncError {
  /**
   * Code properties
   */
  "code"?: string;
  /**
   * Message content.
   */
  "message"?: string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    code: {
      baseName: "code",
      type: "string",
      format: "",
    },
    message: {
      baseName: "message",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return AWSLogsAsyncError.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): AWSLogsAsyncError {
    const res = new AWSLogsAsyncError();

    res.code = ObjectSerializer.deserialize(data.code, "string", "");

    res.message = ObjectSerializer.deserialize(data.message, "string", "");

    return res;
  }

  static serialize(data: AWSLogsAsyncError): { [key: string]: any } {
    const attributeTypes = AWSLogsAsyncError.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    res.code = ObjectSerializer.serialize(data.code, "string", "");

    res.message = ObjectSerializer.serialize(data.message, "string", "");

    return res;
  }

  public constructor() {}
}
