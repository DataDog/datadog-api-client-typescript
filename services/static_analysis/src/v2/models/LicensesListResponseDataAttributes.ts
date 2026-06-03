import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LicensesListResponseDataAttributesLicensesItems } from "./LicensesListResponseDataAttributesLicensesItems";

/**
 * The attributes of the licenses list response, containing the array of SPDX licenses.
 */
export class LicensesListResponseDataAttributes {
  /**
   * The list of SPDX licenses returned by the API.
   */
  "licenses": Array<LicensesListResponseDataAttributesLicensesItems>;
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
    licenses: {
      baseName: "licenses",
      type: "Array<LicensesListResponseDataAttributesLicensesItems>",
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
    return LicensesListResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
