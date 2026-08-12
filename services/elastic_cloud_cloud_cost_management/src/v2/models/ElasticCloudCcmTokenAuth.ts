import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ElasticCloudCcmTokenAuthType } from "./ElasticCloudCcmTokenAuthType";

/**
 * Encrypted token (bearer token) authentication for Elastic Cloud CCM.
 */
export class ElasticCloudCcmTokenAuth {
  /**
   * Billing API key. An Elastic Cloud API key with read access to both Billing and Deployments. Create one under Organization settings > API Keys. This field is not returned by the API.
   */
  "apiKey": string;
  /**
   * Authentication method discriminator.
   */
  "type": ElasticCloudCcmTokenAuthType;
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
      required: true,
    },
    type: {
      baseName: "type",
      type: "ElasticCloudCcmTokenAuthType",
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
    return ElasticCloudCcmTokenAuth.attributeTypeMap;
  }

  public constructor() {}
}
