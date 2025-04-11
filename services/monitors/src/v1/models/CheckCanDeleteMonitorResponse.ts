import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CheckCanDeleteMonitorResponseData } from "./CheckCanDeleteMonitorResponseData";

/**
 * Response of monitor IDs that can or can't be safely deleted.
 */
export class CheckCanDeleteMonitorResponse {
  /**
   * Wrapper object with the list of monitor IDs.
   */
  "data": CheckCanDeleteMonitorResponseData;
  /**
   * A mapping of Monitor ID to strings denoting where it's used.
   */
  "errors"?: { [key: string]: Array<string> };
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
      type: "CheckCanDeleteMonitorResponseData",
      required: true,
    },
    errors: {
      baseName: "errors",
      type: "{ [key: string]: Array<string>; }",
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
    return CheckCanDeleteMonitorResponse.attributeTypeMap;
  }

  public constructor() {}
}
