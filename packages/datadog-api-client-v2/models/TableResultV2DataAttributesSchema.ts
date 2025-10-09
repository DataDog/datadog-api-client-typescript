/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TableResultV2DataAttributesSchemaFieldsItems } from "./TableResultV2DataAttributesSchemaFieldsItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `TableResultV2DataAttributesSchema` object.
 */
export class TableResultV2DataAttributesSchema {
  /**
   * The `schema` `fields`.
   */
  "fields": Array<TableResultV2DataAttributesSchemaFieldsItems>;
  /**
   * List of field names that serve as primary keys for the table. Only one primary key is supported, and it is used as an ID to retrieve rows.
   */
  "primaryKeys": Array<string>;

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
    fields: {
      baseName: "fields",
      type: "Array<TableResultV2DataAttributesSchemaFieldsItems>",
      required: true,
    },
    primaryKeys: {
      baseName: "primary_keys",
      type: "Array<string>",
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
    return TableResultV2DataAttributesSchema.attributeTypeMap;
  }

  public constructor() {}
}
