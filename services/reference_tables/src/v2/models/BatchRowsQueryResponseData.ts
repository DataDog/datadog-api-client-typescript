import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BatchRowsQueryDataType } from "./BatchRowsQueryDataType";
import { BatchRowsQueryResponseDataRelationships } from "./BatchRowsQueryResponseDataRelationships";

export class BatchRowsQueryResponseData {
  "id"?: string;
  "relationships"?: BatchRowsQueryResponseDataRelationships;
  /**
   * Resource type identifier for batch queries of reference table rows.
   */
  "type": BatchRowsQueryDataType;
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
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "BatchRowsQueryResponseDataRelationships",
    },
    type: {
      baseName: "type",
      type: "BatchRowsQueryDataType",
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
    return BatchRowsQueryResponseData.attributeTypeMap;
  }

  public constructor() {}
}
