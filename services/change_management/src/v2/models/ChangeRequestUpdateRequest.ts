import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChangeRequestDecisionCreateItem } from "./ChangeRequestDecisionCreateItem";
import { ChangeRequestUpdateData } from "./ChangeRequestUpdateData";

/**
 * Request object to update a change request.
 */
export class ChangeRequestUpdateRequest {
  /**
   * Data object to update a change request.
   */
  "data": ChangeRequestUpdateData;
  /**
   * Included resources for the change request update.
   */
  "included"?: Array<ChangeRequestDecisionCreateItem>;
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
      type: "ChangeRequestUpdateData",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<ChangeRequestDecisionCreateItem>",
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
    return ChangeRequestUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
