import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LicensesListRequestLicense } from "./LicensesListRequestLicense";

export class LicensesListRequestDataAttributes {
  /**
   * List of available licenses
   */
  "licenses"?: Array<LicensesListRequestLicense>;
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
      type: "Array<LicensesListRequestLicense>",
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
    return LicensesListRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
