import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetCohortRequestDataAttributes } from "./GetCohortRequestDataAttributes";
import { GetCohortRequestDataType } from "./GetCohortRequestDataType";

export class GetCohortRequestData {
  "attributes"?: GetCohortRequestDataAttributes;
  "id"?: string;
  "type": GetCohortRequestDataType;
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
      type: "GetCohortRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "GetCohortRequestDataType",
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
    return GetCohortRequestData.attributeTypeMap;
  }

  public constructor() {}
}
