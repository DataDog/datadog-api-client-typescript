import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseUpdateResolvedReason } from "./CaseUpdateResolvedReason";

/**
 * Request payload for updating the resolution reason on a closed security case.
 */
export class CaseUpdateResolvedReasonRequest {
  /**
   * Data object for updating a case's resolved reason.
   */
  "data": CaseUpdateResolvedReason;
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
      type: "CaseUpdateResolvedReason",
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
    return CaseUpdateResolvedReasonRequest.attributeTypeMap;
  }

  public constructor() {}
}
