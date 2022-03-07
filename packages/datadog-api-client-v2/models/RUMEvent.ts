/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RUMEventAttributes } from "./RUMEventAttributes";
import { RUMEventType } from "./RUMEventType";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Object description of a RUM event after being processed and stored by Datadog.
 */

export class RUMEvent {
  "attributes"?: RUMEventAttributes;
  /**
   * Unique ID of the event.
   */
  "id"?: string;
  "type"?: RUMEventType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "RUMEventAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "RUMEventType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RUMEvent.attributeTypeMap;
  }

  public constructor() {}
}
