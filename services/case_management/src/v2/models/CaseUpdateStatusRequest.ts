import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseUpdateStatus } from "./CaseUpdateStatus";

/**
 * Case update status request
 */
export class CaseUpdateStatusRequest {
  /**
   * Case update status
   */
  "data": CaseUpdateStatus;
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
      type: "CaseUpdateStatus",
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
    return CaseUpdateStatusRequest.attributeTypeMap;
  }

  public constructor() {}
}
