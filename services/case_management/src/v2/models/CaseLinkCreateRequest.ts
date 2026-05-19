import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseLinkCreate } from "./CaseLinkCreate";

/**
 * Request payload for creating a link between two entities.
 */
export class CaseLinkCreateRequest {
  /**
   * Data object for creating a case link.
   */
  "data": CaseLinkCreate;
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
      type: "CaseLinkCreate",
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
    return CaseLinkCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
