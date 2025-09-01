import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueState } from "./IssueState";

/**
 * Object describing an issue state update request.
 */
export class IssueUpdateStateRequestDataAttributes {
  /**
   * State of the issue
   */
  "state": IssueState;
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
    state: {
      baseName: "state",
      type: "IssueState",
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
    return IssueUpdateStateRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
