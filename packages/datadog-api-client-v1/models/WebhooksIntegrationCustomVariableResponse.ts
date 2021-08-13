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
 * Custom variable for Webhook integration.
 */

export class WebhooksIntegrationCustomVariableResponse {
  /**
   * Make custom variable is secret or not. If the custom variable is secret, the value is not returned in the response payload.
   */
  "isSecret": boolean;
  /**
   * The name of the variable. It corresponds with `<CUSTOM_VARIABLE_NAME>`. It must only contains upper-case characters, integers or underscores.
   */
  "name": string;
  /**
   * Value of the custom variable. It won't be returned if the variable is secret.
   */
  "value"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    isSecret: {
      baseName: "is_secret",
      type: "boolean",
      format: "",
    },
    name: {
      baseName: "name",
      type: "string",
      format: "",
    },
    value: {
      baseName: "value",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return WebhooksIntegrationCustomVariableResponse.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): WebhooksIntegrationCustomVariableResponse {
    const res = new WebhooksIntegrationCustomVariableResponse();

    if (data.is_secret === undefined) {
      throw new TypeError(
        "missing required attribute 'is_secret' on 'WebhooksIntegrationCustomVariableResponse' object"
      );
    }
    res.isSecret = ObjectSerializer.deserialize(data.is_secret, "boolean", "");

    if (data.name === undefined) {
      throw new TypeError(
        "missing required attribute 'name' on 'WebhooksIntegrationCustomVariableResponse' object"
      );
    }
    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    res.value = ObjectSerializer.deserialize(data.value, "string", "");

    return res;
  }

  static serialize(
    data: WebhooksIntegrationCustomVariableResponse
  ): { [key: string]: any } {
    const attributeTypes = WebhooksIntegrationCustomVariableResponse.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.isSecret === undefined) {
      throw new TypeError(
        "missing required attribute 'is_secret' on 'WebhooksIntegrationCustomVariableResponse' object"
      );
    }
    res.is_secret = ObjectSerializer.serialize(data.isSecret, "boolean", "");

    if (data.name === undefined) {
      throw new TypeError(
        "missing required attribute 'name' on 'WebhooksIntegrationCustomVariableResponse' object"
      );
    }
    res.name = ObjectSerializer.serialize(data.name, "string", "");

    res.value = ObjectSerializer.serialize(data.value, "string", "");

    return res;
  }

  public constructor() {}
}
