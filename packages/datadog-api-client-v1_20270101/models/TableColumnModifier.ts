/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardInlineSchema48 } from "./DashboardInlineSchema48";
import { TableColumnModifierName } from "./TableColumnModifierName";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TableColumnModifier {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "args"?: Array<DashboardInlineSchema48>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": TableColumnModifierName;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    args: {
      baseName: "args",
      type: "Array<DashboardInlineSchema48>",
    },
    name: {
      baseName: "name",
      type: "TableColumnModifierName",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TableColumnModifier.attributeTypeMap;
  }

  public constructor() {}
}
