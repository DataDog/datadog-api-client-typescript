/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a user who has watched a RUM replay session, including contact information and watch statistics.
 */
export class WatcherDataAttributes {
  /**
   * Email handle of the user who watched the session.
   */
  "handle": string;
  /**
   * URL or identifier of the watcher's avatar icon.
   */
  "icon"?: string;
  /**
   * Timestamp when the watcher last viewed the session.
   */
  "lastWatchedAt": Date;
  /**
   * Display name of the user who watched the session.
   */
  "name"?: string;
  /**
   * Total number of times the user has watched the session.
   */
  "watchCount": number;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    handle: {
      baseName: "handle",
      type: "string",
      required: true,
    },
    icon: {
      baseName: "icon",
      type: "string",
    },
    lastWatchedAt: {
      baseName: "last_watched_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    watchCount: {
      baseName: "watch_count",
      type: "number",
      required: true,
      format: "int32",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WatcherDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
