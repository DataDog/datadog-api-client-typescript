/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes object for updating a Confluent account.
 */
export class ConfluentAccountUpdateRequestAttributes {
  /**
   * The API key associated with your Confluent account.
   */
  "apiKey": string;
  /**
   * The API secret associated with your Confluent account.
   */
  "apiSecret": string;
  /**
   * A list of strings representing tags. Can be a single key, or key-value pairs separated by a colon.
   */
  "tags"?: Array<string>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    apiKey: {
      baseName: "api_key",
      type: "string",
      required: true,
    },
    apiSecret: {
      baseName: "api_secret",
      type: "string",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ConfluentAccountUpdateRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
