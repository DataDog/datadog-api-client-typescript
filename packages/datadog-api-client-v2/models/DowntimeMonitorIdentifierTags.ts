/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object of the monitor tags.
 */
export class DowntimeMonitorIdentifierTags {
  /**
   * A list of monitor tags. For example, tags that are applied directly to monitors,
   * not tags that are used in monitor queries (which are filtered by the scope parameter), to which the downtime applies.
   * The resulting downtime applies to monitors that match **all** provided monitor tags. Setting `monitor_tags`
   * to `[*]` configures the downtime to mute all monitors for the given scope.
   */
  "monitorTags": Array<string>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    monitorTags: {
      baseName: "monitor_tags",
      type: "Array<string>",
      required: true,
    },
  };
}
