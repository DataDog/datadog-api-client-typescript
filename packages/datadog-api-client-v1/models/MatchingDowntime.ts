/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object describing a downtime that matches this monitor.
 */
export class MatchingDowntime {
  /**
   * POSIX timestamp to end the downtime.
   */
  "end"?: number;
  /**
   * The downtime ID.
   */
  "id": number;
  /**
   * The scope(s) to which the downtime applies. Must be in `key:value` format. For example, `host:app2`.
   * Provide multiple scopes as a comma-separated list like `env:dev,env:prod`.
   * The resulting downtime applies to sources that matches ALL provided scopes (`env:dev` **AND** `env:prod`).
   */
  "scope"?: Array<string>;
  /**
   * POSIX timestamp to start the downtime.
   */
  "start"?: number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    end: {
      type: "number",
      format: "int64",
    },
    id: {
      type: "number",
      required: true,
      format: "int64",
    },
    scope: {
      type: "Array<string>",
    },
    start: {
      type: "number",
      format: "int64",
    },
  };
}
