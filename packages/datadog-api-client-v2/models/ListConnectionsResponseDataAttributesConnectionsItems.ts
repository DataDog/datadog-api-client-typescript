/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateConnectionRequestDataAttributesFieldsItems } from "./CreateConnectionRequestDataAttributesFieldsItems";
import { ListConnectionsResponseDataAttributesConnectionsItemsJoin } from "./ListConnectionsResponseDataAttributesConnectionsItemsJoin";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Details of a single data source connection, including its fields, join configuration, and audit metadata.
 */
export class ListConnectionsResponseDataAttributesConnectionsItems {
  /**
   * Timestamp indicating when the connection was created.
   */
  "createdAt"?: Date;
  /**
   * Identifier of the user who created the connection.
   */
  "createdBy"?: string;
  /**
   * List of custom attribute fields imported from the data source.
   */
  "fields"?: Array<CreateConnectionRequestDataAttributesFieldsItems>;
  /**
   * Unique identifier of the connection.
   */
  "id"?: string;
  /**
   * The join configuration describing how the data source is linked to the entity.
   */
  "join"?: ListConnectionsResponseDataAttributesConnectionsItemsJoin;
  /**
   * Additional key-value metadata associated with the connection.
   */
  "metadata"?: { [key: string]: string };
  /**
   * The type of data source connection (for example, ref_table).
   */
  "type"?: string;
  /**
   * Timestamp indicating when the connection was last updated.
   */
  "updatedAt"?: Date;
  /**
   * Identifier of the user who last updated the connection.
   */
  "updatedBy"?: string;

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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    createdBy: {
      baseName: "created_by",
      type: "string",
    },
    fields: {
      baseName: "fields",
      type: "Array<CreateConnectionRequestDataAttributesFieldsItems>",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    join: {
      baseName: "join",
      type: "ListConnectionsResponseDataAttributesConnectionsItemsJoin",
    },
    metadata: {
      baseName: "metadata",
      type: "{ [key: string]: string; }",
    },
    type: {
      baseName: "type",
      type: "string",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      format: "date-time",
    },
    updatedBy: {
      baseName: "updated_by",
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
    return ListConnectionsResponseDataAttributesConnectionsItems.attributeTypeMap;
  }

  public constructor() {}
}
