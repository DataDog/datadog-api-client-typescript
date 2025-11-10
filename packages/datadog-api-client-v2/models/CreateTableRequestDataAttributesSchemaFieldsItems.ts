/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ReferenceTableSchemaFieldType } from "./ReferenceTableSchemaFieldType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single field (column) in the reference table schema to be created.
 */
export class CreateTableRequestDataAttributesSchemaFieldsItems {
  /**
   * The field name.
   */
  "name": string;
  /**
   * The field type for reference table schema fields.
   */
  "type": ReferenceTableSchemaFieldType;

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
      required: true,
    },
    type: {
      baseName: "type",
      type: "ReferenceTableSchemaFieldType",
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
    return CreateTableRequestDataAttributesSchemaFieldsItems.attributeTypeMap;
  }

  public constructor() {}
}
