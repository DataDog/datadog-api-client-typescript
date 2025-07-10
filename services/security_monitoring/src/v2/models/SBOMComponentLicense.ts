import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SBOMComponentLicenseLicense } from "./SBOMComponentLicenseLicense";

/**
 * The software license of the component of the SBOM.
 */
export class SBOMComponentLicense {
  /**
   * The software license of the component of the SBOM.
   */
  "license": SBOMComponentLicenseLicense;
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
    license: {
      baseName: "license",
      type: "SBOMComponentLicenseLicense",
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
    return SBOMComponentLicense.attributeTypeMap;
  }

  public constructor() {}
}
