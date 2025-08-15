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
    end: {
      baseName: "end",
      type: "number",
      format: "int64",
    },
    id: {
      baseName: "id",
      type: "number",
      required: true,
      format: "int64",
    },
    scope: {
      baseName: "scope",
      type: "Array<string>",
    },
    start: {
      baseName: "start",
      type: "number",
      format: "int64",
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
    return MatchingDowntime.attributeTypeMap;
  }

  public constructor() {}
}
