import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnCallPageLiveCallOver } from "./OnCallPageLiveCallOver";

/**
 * Live call information for a Page triggered by a live call route.
 */
export class OnCallPageLiveCall {
  /**
   * Information about a live call that has ended.
   */
  "callOver"?: OnCallPageLiveCallOver;
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
    callOver: {
      baseName: "call_over",
      type: "OnCallPageLiveCallOver",
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
    return OnCallPageLiveCall.attributeTypeMap;
  }

  public constructor() {}
}
