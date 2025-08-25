/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The number of indexed logs for each hour for a given organization broken down by retention period.
 */
export class UsageLogsByRetentionHour {
  /**
   * Total logs indexed with this retention period during a given hour.
   */
  "indexedEventsCount"?: number;
  /**
   * Live logs indexed with this retention period during a given hour.
   */
  "liveIndexedEventsCount"?: number;
  /**
   * The organization name.
   */
  "orgName"?: string;
  /**
   * The organization public ID.
   */
  "publicId"?: string;
  /**
   * Rehydrated logs indexed with this retention period during a given hour.
   */
  "rehydratedIndexedEventsCount"?: number;
  /**
   * The retention period in days or "custom" for all custom retention usage.
   */
  "retention"?: string;

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
    indexedEventsCount: {
      baseName: "indexed_events_count",
      type: "number",
      format: "int64",
    },
    liveIndexedEventsCount: {
      baseName: "live_indexed_events_count",
      type: "number",
      format: "int64",
    },
    orgName: {
      baseName: "org_name",
      type: "string",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
    },
    rehydratedIndexedEventsCount: {
      baseName: "rehydrated_indexed_events_count",
      type: "number",
      format: "int64",
    },
    retention: {
      baseName: "retention",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageLogsByRetentionHour.attributeTypeMap;
  }

  public constructor() {}
}
