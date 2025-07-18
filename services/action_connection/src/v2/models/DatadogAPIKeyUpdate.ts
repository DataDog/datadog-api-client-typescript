import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatadogAPIKeyType } from "./DatadogAPIKeyType";

/**
 * The definition of the `DatadogAPIKey` object.
 */
export class DatadogAPIKeyUpdate {
  /**
   * The `DatadogAPIKeyUpdate` `api_key`.
   */
  "apiKey"?: string;
  /**
   * The `DatadogAPIKeyUpdate` `app_key`.
   */
  "appKey"?: string;
  /**
   * The `DatadogAPIKeyUpdate` `datacenter`.
   */
  "datacenter"?: string;
  /**
   * Custom subdomain used for Datadog URLs generated with this Connection. For example, if this org uses `https://acme.datadoghq.com` to access Datadog, set this field to `acme`. If this field is omitted, generated URLs will use the default site URL for its datacenter (see [https://docs.datadoghq.com/getting_started/site](https://docs.datadoghq.com/getting_started/site)).
   */
  "subdomain"?: string;
  /**
   * The definition of the `DatadogAPIKey` object.
   */
  "type": DatadogAPIKeyType;
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
    appKey: {
      baseName: "app_key",
      type: "string",
    },
    datacenter: {
      baseName: "datacenter",
      type: "string",
    },
    subdomain: {
      baseName: "subdomain",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "DatadogAPIKeyType",
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
    return DatadogAPIKeyUpdate.attributeTypeMap;
  }

  public constructor() {}
}
