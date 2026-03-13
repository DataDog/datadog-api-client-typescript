import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TableRowResourceIdentifier } from "./TableRowResourceIdentifier";

export class BatchRowsQueryResponseDataRelationshipsRows {
  "data"?: Array<TableRowResourceIdentifier>;
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
    data: {
      baseName: "data",
      type: "Array<TableRowResourceIdentifier>",
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
    return BatchRowsQueryResponseDataRelationshipsRows.attributeTypeMap;
  }

  public constructor() {}
}
