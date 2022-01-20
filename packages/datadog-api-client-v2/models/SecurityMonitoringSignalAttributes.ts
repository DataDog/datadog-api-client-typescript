/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * The object containing all signal attributes and their associated values.
 */

export class SecurityMonitoringSignalAttributes {
  /**
   * A JSON object of attributes in the security signal.
   */
  "attributes"?: { [key: string]: any };
  /**
   * The message in the security signal defined by the rule that generated the signal.
   */
  "message"?: string;
  /**
   * An array of tags associated with the security signal.
   */
  "tags"?: Array<string>;
  /**
   * The timestamp of the security signal.
   */
  "timestamp"?: Date;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "{ [key: string]: any; }",
    },
    message: {
      baseName: "message",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    timestamp: {
      baseName: "timestamp",
      type: "Date",
      format: "date-time",
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringSignalAttributes.attributeTypeMap;
  }

  public constructor() {}
}
