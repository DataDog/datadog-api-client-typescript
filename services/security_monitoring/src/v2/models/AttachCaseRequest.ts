import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AttachCaseRequestData } from "./AttachCaseRequestData";

/**
 * Request for attaching security findings to a case.
 */
export class AttachCaseRequest {
  /**
   * Data of the case to attach security findings to.
   */
  "data"?: AttachCaseRequestData;
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
      type: "AttachCaseRequestData",
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
    return AttachCaseRequest.attributeTypeMap;
  }

  public constructor() {}
}
