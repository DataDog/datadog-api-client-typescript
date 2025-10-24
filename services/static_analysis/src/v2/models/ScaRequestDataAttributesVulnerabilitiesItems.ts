import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScaRequestDataAttributesVulnerabilitiesItemsAffectsItems } from "./ScaRequestDataAttributesVulnerabilitiesItemsAffectsItems";

export class ScaRequestDataAttributesVulnerabilitiesItems {
  "affects"?: Array<ScaRequestDataAttributesVulnerabilitiesItemsAffectsItems>;
  "bomRef"?: string;
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
