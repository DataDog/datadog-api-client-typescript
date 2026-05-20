import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseViewCreate } from "./CaseViewCreate";

/**
 * Request payload for creating a case view.
 */
export class CaseViewCreateRequest {
  /**
   * Data object for creating a case view.
   */
  "data": CaseViewCreate;
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
      type: "CaseViewCreate",
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
    return CaseViewCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
