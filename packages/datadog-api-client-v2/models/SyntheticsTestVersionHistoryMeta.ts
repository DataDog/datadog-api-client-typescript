/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Pagination metadata for a version history response.
 */
export class SyntheticsTestVersionHistoryMeta {
  /**
   * The version number to use as the `last_version_number` query parameter
   * to fetch the next page. `null` indicates there are no more pages.
   */
  "nextLastVersionNumber"?: number;
  /**
   * The number of days that version history is retained.
   */
  "retentionPeriodInDays"?: number;

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
    nextLastVersionNumber: {
      baseName: "next_last_version_number",
      type: "number",
      format: "int64",
    },
    retentionPeriodInDays: {
      baseName: "retention_period_in_days",
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
    return SyntheticsTestVersionHistoryMeta.attributeTypeMap;
  }

  public constructor() {}
}
