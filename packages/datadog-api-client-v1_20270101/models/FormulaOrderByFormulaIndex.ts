/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormulaOrderByFormulaIndexType } from "./FormulaOrderByFormulaIndexType";
import { QuerySortOrder } from "./QuerySortOrder";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FormulaOrderByFormulaIndex {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "index": number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "order": QuerySortOrder;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": FormulaOrderByFormulaIndexType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    index: {
      baseName: "index",
      type: "number",
      required: true,
      format: "double",
    },
    order: {
      baseName: "order",
      type: "QuerySortOrder",
      required: true,
    },
    type: {
      baseName: "type",
      type: "FormulaOrderByFormulaIndexType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FormulaOrderByFormulaIndex.attributeTypeMap;
  }

  public constructor() {}
}
