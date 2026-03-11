import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class LicensesListRequestLicense {
  /**
   * The display name of the license
   */
  "displayName"?: string;
  /**
   * The SPDX identifier of the license
   */
  "identifier"?: string;
  /**
   * The short name of the license
   */
  "shortName"?: string;
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
    displayName: {
      baseName: "display_name",
      type: "string",
    },
    identifier: {
      baseName: "identifier",
      type: "string",
    },
    shortName: {
      baseName: "short_name",
      type: "string",
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
    return LicensesListRequestLicense.attributeTypeMap;
  }

  public constructor() {}
}
