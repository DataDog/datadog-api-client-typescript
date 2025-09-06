/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ItemApiPayloadMetaSchemaField } from "./ItemApiPayloadMetaSchemaField";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Schema information about the datastore, including its primary key and field definitions.
 */
export class ItemApiPayloadMetaSchema {
  /**
   * An array describing the columns available in this datastore.
   */
  "fields"?: Array<ItemApiPayloadMetaSchemaField>;
  /**
   * The name of the primary key column for this datastore.
   */
  "primaryKey"?: string;

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
      type: "Array<ItemApiPayloadMetaSchemaField>",
    },
    primaryKey: {
      baseName: "primary_key",
      type: "string",
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
    return ItemApiPayloadMetaSchema.attributeTypeMap;
  }

  public constructor() {}
}
