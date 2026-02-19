import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChangeRequestBranchCreateData } from "./ChangeRequestBranchCreateData";

/**
 * Request object to create a branch for a change request.
 */
export class ChangeRequestBranchCreateRequest {
  /**
   * Data object to create a change request branch.
   */
  "data": ChangeRequestBranchCreateData;
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
      type: "ChangeRequestBranchCreateData",
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
    return ChangeRequestBranchCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
