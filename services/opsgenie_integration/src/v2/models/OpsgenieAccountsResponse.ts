import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpsgenieAccountResponseData } from "./OpsgenieAccountResponseData";

/**
 * Response with a list of Opsgenie accounts.
 */
export class OpsgenieAccountsResponse {
  /**
   * An array of Opsgenie accounts.
   */
  "data": Array<OpsgenieAccountResponseData>;
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
      type: "Array<OpsgenieAccountResponseData>",
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
    return OpsgenieAccountsResponse.attributeTypeMap;
  }

  public constructor() {}
}
