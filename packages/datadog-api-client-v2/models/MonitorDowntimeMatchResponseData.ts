/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorDowntimeMatchResourceType } from "./MonitorDowntimeMatchResourceType";
import { MonitorDowntimeMatchResponseAttributes } from "./MonitorDowntimeMatchResponseAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A downtime match.
 */
export class MonitorDowntimeMatchResponseData {
  /**
   * Downtime match details.
   */
  "attributes"?: MonitorDowntimeMatchResponseAttributes;
  /**
   * The downtime ID.
   */
  "id"?: string;
  /**
   * Monitor Downtime Match resource type.
   */
  "type"?: MonitorDowntimeMatchResourceType;

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
      type: "MonitorDowntimeMatchResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "MonitorDowntimeMatchResourceType",
    },
  };
}
