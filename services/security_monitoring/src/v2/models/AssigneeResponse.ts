import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AssigneeResponseData } from "./AssigneeResponseData";
import { AssigneeResponseMeta } from "./AssigneeResponseMeta";

/**
 * Response for the assign or unassign request.
 */
export class AssigneeResponse {
  /**
   * Data of the assignee response.
   */
  "data": AssigneeResponseData;
  /**
   * Per-finding warnings and failures produced while processing the bulk assignee request.
   */
  "meta"?: AssigneeResponseMeta;
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
      type: "AssigneeResponseData",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "AssigneeResponseMeta",
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
    return AssigneeResponse.attributeTypeMap;
  }

  public constructor() {}
}
