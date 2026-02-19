import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChangeRequestDecisionStatusType } from "./ChangeRequestDecisionStatusType";

/**
 * Attributes for creating a change request decision.
 */
export class ChangeRequestDecisionCreateAttributes {
  /**
   * The status of a change request decision.
   */
  "changeRequestStatus"?: ChangeRequestDecisionStatusType;
  /**
   * The reason for requesting the decision.
   */
  "requestReason"?: string;
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
    changeRequestStatus: {
      baseName: "change_request_status",
      type: "ChangeRequestDecisionStatusType",
    },
    requestReason: {
      baseName: "request_reason",
      type: "string",
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
    return ChangeRequestDecisionCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
