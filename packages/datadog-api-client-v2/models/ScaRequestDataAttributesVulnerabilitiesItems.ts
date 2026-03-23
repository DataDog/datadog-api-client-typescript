/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScaRequestDataAttributesVulnerabilitiesItemsAffectsItems } from "./ScaRequestDataAttributesVulnerabilitiesItemsAffectsItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A vulnerability entry from the Software Bill of Materials (SBOM), describing a known security issue and the components it affects.
 */
export class ScaRequestDataAttributesVulnerabilitiesItems {
  /**
   * The list of components affected by this vulnerability.
   */
  "affects"?: Array<ScaRequestDataAttributesVulnerabilitiesItemsAffectsItems>;
  /**
   * The unique BOM reference identifier for this vulnerability entry.
   */
  "bomRef"?: string;
  /**
   * The vulnerability identifier (e.g., CVE ID or similar).
   */
  "id"?: string;

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
    affects: {
      baseName: "affects",
      type: "Array<ScaRequestDataAttributesVulnerabilitiesItemsAffectsItems>",
    },
    bomRef: {
      baseName: "bom_ref",
      type: "string",
    },
    id: {
      baseName: "id",
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
    return ScaRequestDataAttributesVulnerabilitiesItems.attributeTypeMap;
  }

  public constructor() {}
}
