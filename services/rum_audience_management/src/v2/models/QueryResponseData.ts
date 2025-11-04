import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { QueryResponseDataAttributes } from "./QueryResponseDataAttributes";
import { QueryResponseDataType } from "./QueryResponseDataType";

export class QueryResponseData {
  "attributes"?: QueryResponseDataAttributes;
  "id"?: string;
  /**
   * Query response resource type.
   */
  "type": QueryResponseDataType;
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
      type: "QueryResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "QueryResponseDataType",
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
    return QueryResponseData.attributeTypeMap;
  }

  public constructor() {}
}
