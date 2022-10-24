/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ConfluentResourceResponseAttributes } from "./ConfluentResourceResponseAttributes";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * The attributes of a Confluent account.
 */
export class ConfluentAccountResponseAttributes {
  /**
   * The API key associated with your Confluent account.
   */
  "apiKey": string;
  /**
   * A list of Confluent resources associated with the Confluent account.
   */
  "resources"?: Array<ConfluentResourceResponseAttributes>;
  /**
   * A list of strings representing tags. Can be a single key, or key-value pairs separated by a colon.
   */
  "tags"?: Array<string>;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    apiKey: {
      baseName: "api_key",
      type: "string",
      required: true,
    },
    resources: {
      baseName: "resources",
      type: "Array<ConfluentResourceResponseAttributes>",
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
    return ConfluentAccountResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
