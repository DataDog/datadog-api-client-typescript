import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetCohortResponseDataAttributes } from "./GetCohortResponseDataAttributes";
import { GetCohortResponseDataType } from "./GetCohortResponseDataType";

export class GetCohortResponseData {
  "attributes"?: GetCohortResponseDataAttributes;
  "id"?: string;
  "type": GetCohortResponseDataType;
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
      type: "GetCohortResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "GetCohortResponseDataType",
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
    return GetCohortResponseData.attributeTypeMap;
  }

  public constructor() {}
}
