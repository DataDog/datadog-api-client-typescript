/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single history entry representing a status change for a flaky test.
 */
export class FlakyTestHistory {
  /**
   * The commit SHA associated with this status change. Will be an empty string if the commit SHA is not available.
   */
  "commitSha": string;
  /**
   * The test status at this point in history.
   */
  "status": string;
  /**
   * Unix timestamp in milliseconds when this status change occurred.
   */
  "timestamp": number;

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
    commitSha: {
      baseName: "commit_sha",
      type: "string",
      required: true,
    },
    status: {
      baseName: "status",
      type: "string",
      required: true,
    },
    timestamp: {
      baseName: "timestamp",
      type: "number",
      required: true,
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
    return FlakyTestHistory.attributeTypeMap;
  }

  public constructor() {}
}
