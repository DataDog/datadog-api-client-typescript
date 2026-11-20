/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TableColumnComparisonWithOtherColumnPercentDiffFromType } from "./TableColumnComparisonWithOtherColumnPercentDiffFromType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TableColumnComparisonWithOtherColumnPercentDiffFrom {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "column": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": TableColumnComparisonWithOtherColumnPercentDiffFromType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    column: {
      baseName: "column",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TableColumnComparisonWithOtherColumnPercentDiffFromType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TableColumnComparisonWithOtherColumnPercentDiffFrom.attributeTypeMap;
  }

  public constructor() {}
}
