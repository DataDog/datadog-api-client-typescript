import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTodoResponseData } from "./IncidentTodoResponseData";
import { IncidentTodoResponseIncludedItem } from "./IncidentTodoResponseIncludedItem";

/**
 * Response with an incident todo.
 */
export class IncidentTodoResponse {
  /**
   * Incident todo response data.
   */
  "data": IncidentTodoResponseData;
  /**
   * Included related resources that the user requested.
   */
  "included"?: Array<IncidentTodoResponseIncludedItem>;
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
      type: "IncidentTodoResponseData",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentTodoResponseIncludedItem>",
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
    return IncidentTodoResponse.attributeTypeMap;
  }

  public constructor() {}
}
