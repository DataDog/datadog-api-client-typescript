/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ConfluentAccountResourceAttributes } from "./ConfluentAccountResourceAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes associated with the account creation request.
 */
export class ConfluentAccountCreateRequestAttributes {
  /**
   * The API key associated with your Confluent account.
   */
  "apiKey": string;
  /**
   * The API secret associated with your Confluent account.
   */
  "apiSecret": string;
  /**
   * A list of Confluent resources associated with the Confluent account.
   */
  "resources"?: Array<ConfluentAccountResourceAttributes>;
  /**
   * A list of strings representing tags. Can be a single key, or key-value pairs separated by a colon.
   */
  "tags"?: Array<string>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

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
    resources: {
      baseName: "resources",
      type: "Array<ConfluentAccountResourceAttributes>",
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
    return ConfluentAccountCreateRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
