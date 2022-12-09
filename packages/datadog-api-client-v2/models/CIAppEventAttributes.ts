/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * JSON object containing all event attributes and their associated values.
 */
export class CIAppEventAttributes {
  /**
   * JSON object of attributes from CI Visibility events.
   */
  "attributes"?: { [key: string]: any };
  /**
   * The name of the application or service generating CI Visibility events.
   * It is used to switch from CI Visibility to APM, so make sure you define the same
   * value when you use both products.
   */
  "service"?: string;
  /**
   * Array of tags associated with your event.
   */
  "tags"?: Array<string>;
  /**
   * Timestamp of your event.
   */
  "timestamp"?: Date;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "{ [key: string]: any; }",
    },
    service: {
      baseName: "service",
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

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CIAppEventAttributes.attributeTypeMap;
  }

  public constructor() {}
}
