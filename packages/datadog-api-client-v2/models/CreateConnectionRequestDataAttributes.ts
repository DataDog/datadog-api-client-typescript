/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateConnectionRequestDataAttributesFieldsItems } from "./CreateConnectionRequestDataAttributesFieldsItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes defining the data source connection, including join configuration and custom fields.
 */
export class CreateConnectionRequestDataAttributes {
  /**
   * List of custom attribute fields to import from the data source.
   */
  "fields"?: Array<CreateConnectionRequestDataAttributesFieldsItems>;
  /**
   * The attribute in the data source used to join records with the entity.
   */
  "joinAttribute": string;
  /**
   * The type of join key used to link the data source to the entity (for example, email or user_id).
   */
  "joinType": string;
  /**
   * Additional key-value metadata associated with the connection.
   */
  "metadata"?: { [key: string]: string };
  /**
   * The type of data source connection (for example, ref_table).
   */
  "type": string;

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
      type: "Array<CreateConnectionRequestDataAttributesFieldsItems>",
    },
    joinAttribute: {
      baseName: "join_attribute",
      type: "string",
      required: true,
    },
    joinType: {
      baseName: "join_type",
      type: "string",
      required: true,
    },
    metadata: {
      baseName: "metadata",
      type: "{ [key: string]: string; }",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return CreateConnectionRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
