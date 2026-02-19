import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DORAListFailuresRequestData } from "./DORAListFailuresRequestData";

/**
 * Request to get a list of incidents.
 */
export class DORAListFailuresRequest {
  /**
   * The JSON:API data.
   */
  "data": DORAListFailuresRequestData;
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
      type: "DORAListFailuresRequestData",
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
    return DORAListFailuresRequest.attributeTypeMap;
  }

  public constructor() {}
}
