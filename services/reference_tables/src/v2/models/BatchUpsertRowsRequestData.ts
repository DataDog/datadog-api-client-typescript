import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BatchUpsertRowsRequestDataAttributes } from "./BatchUpsertRowsRequestDataAttributes";
import { TableRowResourceDataType } from "./TableRowResourceDataType";

/**
 * Row resource containing a single row identifier and its column values.
 */
export class BatchUpsertRowsRequestData {
  /**
   * Attributes containing row data values for row creation or update operations.
   */
  "attributes"?: BatchUpsertRowsRequestDataAttributes;
  "id": string;
  /**
   * Row resource type.
   */
  "type": TableRowResourceDataType;
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
    attributes: {
      baseName: "attributes",
      type: "BatchUpsertRowsRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TableRowResourceDataType",
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
    return BatchUpsertRowsRequestData.attributeTypeMap;
  }

  public constructor() {}
}
