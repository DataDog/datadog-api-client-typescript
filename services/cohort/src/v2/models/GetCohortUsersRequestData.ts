import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetCohortUsersRequestDataAttributes } from "./GetCohortUsersRequestDataAttributes";
import { GetCohortUsersRequestDataType } from "./GetCohortUsersRequestDataType";

export class GetCohortUsersRequestData {
  "attributes"?: GetCohortUsersRequestDataAttributes;
  "id"?: string;
  "type": GetCohortUsersRequestDataType;
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
      type: "GetCohortUsersRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "GetCohortUsersRequestDataType",
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
    return GetCohortUsersRequestData.attributeTypeMap;
  }

  public constructor() {}
}
