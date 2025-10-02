import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseUpdateDescription } from "./CaseUpdateDescription";

/**
 * Case update description request
 */
export class CaseUpdateDescriptionRequest {
  /**
   * Case update description
   */
  "data": CaseUpdateDescription;
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
      type: "CaseUpdateDescription",
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
    return CaseUpdateDescriptionRequest.attributeTypeMap;
  }

  public constructor() {}
}
