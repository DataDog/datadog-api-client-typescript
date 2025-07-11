/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SBOMComponentLicenseLicense } from "./SBOMComponentLicenseLicense";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
      type: "any",
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
