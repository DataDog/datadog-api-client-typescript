/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScalarColumnTypeGroup } from "./ScalarColumnTypeGroup";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A column containing the tag keys and values in a group.
 */
export class GroupScalarColumn {
  /**
   * The name of the tag key or group.
   */
  "name"?: string;
  /**
   * The type of column present for groups.
   */
  "type"?: ScalarColumnTypeGroup;
  /**
   * The array of tag values for each group found for the results of the formulas or queries.
   */
  "values"?: Array<Array<string>>;

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
    name: {
      baseName: "name",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ScalarColumnTypeGroup",
    },
    values: {
      baseName: "values",
      type: "Array<Array<string>>",
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
    return GroupScalarColumn.attributeTypeMap;
  }

  public constructor() {}
}
