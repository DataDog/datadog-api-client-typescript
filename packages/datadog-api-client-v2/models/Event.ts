/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The metadata associated with a request.
 */
export class Event {
  /**
   * Event ID.
   */
  "id"?: string;
  /**
   * The event name.
   */
  "name"?: string;
  /**
   * Event source ID.
   */
  "sourceId"?: number;
  /**
   * Event type.
   */
  "type"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    id: {
      baseName: "id",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    sourceId: {
      baseName: "source_id",
      type: "number",
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return Event.attributeTypeMap;
  }

  public constructor() {}
}
