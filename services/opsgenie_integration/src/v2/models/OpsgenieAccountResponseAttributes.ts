import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpsgenieServiceRegionType } from "./OpsgenieServiceRegionType";

/**
 * The attributes from an Opsgenie account response.
 */
export class OpsgenieAccountResponseAttributes {
  /**
   * The region for the Opsgenie service.
   */
  "region"?: OpsgenieServiceRegionType;
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
    region: {
      baseName: "region",
      type: "OpsgenieServiceRegionType",
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
    return OpsgenieAccountResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
