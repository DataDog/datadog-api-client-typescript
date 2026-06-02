import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpsgenieServiceRegionType } from "./OpsgenieServiceRegionType";

/**
 * The Opsgenie account attributes for an update request.
 */
export class OpsgenieAccountUpdateAttributes {
  /**
   * The Opsgenie API key for your Opsgenie account.
   */
  "apiKey"?: string;
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
    apiKey: {
      baseName: "api_key",
      type: "string",
    },
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
    return OpsgenieAccountUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
