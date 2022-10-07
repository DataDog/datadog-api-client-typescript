/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes from the monitor that triggered the event.
 */
export class MonitorType {
  /**
   * The POSIX timestamp of the monitor's creation in nanoseconds.
   */
  "createdAt"?: number;
  /**
   * Monitor group status used when there is no `result_groups`.
   */
  "groupStatus"?: number;
  /**
   * Groups to which the monitor belongs.
   */
  "groups"?: Array<string>;
  /**
   * The monitor ID.
   */
  "id"?: number;
  /**
   * The monitor message.
   */
  "message"?: string;
  /**
   * The monitor's last-modified timestamp.
   */
  "modified"?: number;
  /**
   * The monitor name.
   */
  "name"?: string;
  /**
   * The query that triggers the alert.
   */
  "query"?: string;
  /**
   * A list of tags attached to the monitor.
   */
  "tags"?: Array<string>;
  /**
   * The templated name of the monitor before resolving any template variables.
   */
  "templatedName"?: string;
  /**
   * The monitor type.
   */
  "type"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    createdAt: {
      baseName: "created_at",
      type: "number",
      format: "int64",
    },
    groupStatus: {
      baseName: "group_status",
      type: "number",
    },
    groups: {
      baseName: "groups",
      type: "Array<string>",
    },
    id: {
      baseName: "id",
      type: "number",
    },
    message: {
      baseName: "message",
      type: "string",
    },
    modified: {
      baseName: "modified",
      type: "number",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    templatedName: {
      baseName: "templated_name",
      type: "string",
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
    return MonitorType.attributeTypeMap;
  }

  public constructor() {}
}
