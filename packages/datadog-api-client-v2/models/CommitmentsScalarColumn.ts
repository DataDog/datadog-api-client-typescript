/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CommitmentsScalarColumnMeta } from "./CommitmentsScalarColumnMeta";
import { CommitmentsScalarColumnType } from "./CommitmentsScalarColumnType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A column in a scalar response. When type is "group", values contains arrays of strings. When type is "number", values contains numeric values.
 */
export class CommitmentsScalarColumn {
  /**
   * Metadata for a scalar column, including unit information.
   */
  "meta"?: CommitmentsScalarColumnMeta;
  /**
   * The column name.
   */
  "name": string;
  /**
   * The column type. "group" for dimension columns, "number" for metric columns.
   */
  "type": CommitmentsScalarColumnType;
  /**
   * Values for a scalar column. Arrays of strings for group columns, numbers for value columns.
   */
  "values": Array<any>;

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
    meta: {
      baseName: "meta",
      type: "CommitmentsScalarColumnMeta",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CommitmentsScalarColumnType",
      required: true,
    },
    values: {
      baseName: "values",
      type: "Array<any>",
      required: true,
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
    return CommitmentsScalarColumn.attributeTypeMap;
  }

  public constructor() {}
}
