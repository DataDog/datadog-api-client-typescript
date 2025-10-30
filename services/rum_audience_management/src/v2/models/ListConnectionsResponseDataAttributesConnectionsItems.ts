import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateConnectionRequestDataAttributesFieldsItems } from "./CreateConnectionRequestDataAttributesFieldsItems";
import { ListConnectionsResponseDataAttributesConnectionsItemsJoin } from "./ListConnectionsResponseDataAttributesConnectionsItemsJoin";

export class ListConnectionsResponseDataAttributesConnectionsItems {
  "createdAt"?: Date;
  "createdBy"?: string;
  "fields"?: Array<CreateConnectionRequestDataAttributesFieldsItems>;
  "id"?: string;
  "join"?: ListConnectionsResponseDataAttributesConnectionsItemsJoin;
  "metadata"?: { [key: string]: string };
  "type"?: string;
  "updatedAt"?: Date;
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
