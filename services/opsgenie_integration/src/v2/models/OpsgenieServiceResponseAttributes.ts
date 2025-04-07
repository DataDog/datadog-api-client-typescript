import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpsgenieServiceRegionType } from "./OpsgenieServiceRegionType";

/**
 * The attributes from an Opsgenie service response.
 */
export class OpsgenieServiceResponseAttributes {
  /**
   * The custom URL for a custom region.
   */
  "customUrl"?: string;
  /**
   * The name for the Opsgenie service.
   */
  "name"?: string;
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
    customUrl: {
      baseName: "custom_url",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    region: {
      baseName: "region",
      type: "OpsgenieServiceRegionType",
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
    return OpsgenieServiceResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
