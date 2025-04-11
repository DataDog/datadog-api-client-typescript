import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpsgenieServiceRegionType } from "./OpsgenieServiceRegionType";

/**
 * The Opsgenie service attributes for a create request.
 */
export class OpsgenieServiceCreateAttributes {
  /**
   * The custom URL for a custom region.
   */
  "customUrl"?: string;
  /**
   * The name for the Opsgenie service.
   */
  "name": string;
  /**
   * The Opsgenie API key for your Opsgenie service.
   */
  "opsgenieApiKey": string;
  /**
   * The region for the Opsgenie service.
   */
  "region": OpsgenieServiceRegionType;
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
      required: true,
    },
    opsgenieApiKey: {
      baseName: "opsgenie_api_key",
      type: "string",
      required: true,
    },
    region: {
      baseName: "region",
      type: "OpsgenieServiceRegionType",
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
    return OpsgenieServiceCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
