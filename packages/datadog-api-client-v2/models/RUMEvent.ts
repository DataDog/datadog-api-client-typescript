/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMEventAttributes } from "./RUMEventAttributes";
import { RUMEventType } from "./RUMEventType";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Object description of a RUM event after being processed and stored by Datadog.
 */
export class RUMEvent {
  /**
   * JSON object containing all event attributes and their associated values.
   */
  "attributes"?: RUMEventAttributes;
  /**
   * Unique ID of the event.
   */
  "id"?: string;
  /**
   * Type of the event.
   */
  "type"?: RUMEventType;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

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
