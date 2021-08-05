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
 * Attributes of the created user.
 */

export class ServiceAccountCreateAttributes {
  /**
   * The email of the user.
   */
  "email": string;
  /**
   * The name of the user.
   */
  "name"?: string;
  /**
   * Whether the user is a service account. Must be true.
   */
  "serviceAccount": boolean;
  /**
   * The title of the user.
   */
  "title"?: string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    email: {
      baseName: "email",
      type: "string",
      format: "",
    },
    name: {
      baseName: "name",
      type: "string",
      format: "",
    },
    serviceAccount: {
      baseName: "service_account",
      type: "boolean",
      format: "",
    },
    title: {
      baseName: "title",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return ServiceAccountCreateAttributes.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): ServiceAccountCreateAttributes {
    const res = new ServiceAccountCreateAttributes();

    if (data.email === undefined) {
      throw new TypeError(
        "missing required attribute 'email' on 'ServiceAccountCreateAttributes' object"
      );
    }
    res.email = ObjectSerializer.deserialize(data.email, "string", "");

    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    if (data.service_account === undefined) {
      throw new TypeError(
        "missing required attribute 'service_account' on 'ServiceAccountCreateAttributes' object"
      );
    }
    res.serviceAccount = ObjectSerializer.deserialize(
      data.service_account,
      "boolean",
      ""
    );

    res.title = ObjectSerializer.deserialize(data.title, "string", "");

    return res;
  }

  static serialize(
    data: ServiceAccountCreateAttributes
  ): { [key: string]: any } {
    const attributeTypes = ServiceAccountCreateAttributes.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data.email === undefined) {
      throw new TypeError(
        "missing required attribute 'email' on 'ServiceAccountCreateAttributes' object"
      );
    }
    res.email = ObjectSerializer.serialize(data.email, "string", "");

    res.name = ObjectSerializer.serialize(data.name, "string", "");

    if (data.serviceAccount === undefined) {
      throw new TypeError(
        "missing required attribute 'service_account' on 'ServiceAccountCreateAttributes' object"
      );
    }
    res.service_account = ObjectSerializer.serialize(
      data.serviceAccount,
      "boolean",
      ""
    );

    res.title = ObjectSerializer.serialize(data.title, "string", "");

    return res;
  }

  public constructor() {}
}
