import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentResponseMeta } from "./IncidentResponseMeta";
import { IncidentTodoResponseData } from "./IncidentTodoResponseData";
import { IncidentTodoResponseIncludedItem } from "./IncidentTodoResponseIncludedItem";

/**
 * Response with a list of incident todos.
 */
export class IncidentTodoListResponse {
  /**
   * An array of incident todos.
   */
  "data": Array<IncidentTodoResponseData>;
  /**
   * Included related resources that the user requested.
   */
  "included"?: Array<IncidentTodoResponseIncludedItem>;
  /**
   * The metadata object containing pagination metadata.
   */
  "meta"?: IncidentResponseMeta;
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
      type: "Array<IncidentTodoResponseData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentTodoResponseIncludedItem>",
    },
    meta: {
      baseName: "meta",
      type: "IncidentResponseMeta",
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
    return IncidentTodoListResponse.attributeTypeMap;
  }

  public constructor() {}
}
