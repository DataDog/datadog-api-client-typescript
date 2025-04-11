import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CheckCanDeleteSLOResponseData } from "./CheckCanDeleteSLOResponseData";

/**
 * A service level objective response containing the requested object.
 */
export class CheckCanDeleteSLOResponse {
  /**
   * An array of service level objective objects.
   */
  "data"?: CheckCanDeleteSLOResponseData;
  /**
   * A mapping of SLO id to it's current usages.
   */
  "errors"?: { [key: string]: string };
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
      type: "CheckCanDeleteSLOResponseData",
    },
    errors: {
      baseName: "errors",
      type: "{ [key: string]: string; }",
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
    return CheckCanDeleteSLOResponse.attributeTypeMap;
  }

  public constructor() {}
}
