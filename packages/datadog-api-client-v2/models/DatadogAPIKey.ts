/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DatadogAPIKeyType } from "./DatadogAPIKeyType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of the `DatadogAPIKey` object.
 */
export class DatadogAPIKey {
  /**
   * The `DatadogAPIKey` `api_key`.
   */
  "apiKey": string;
  /**
   * The `DatadogAPIKey` `app_key`.
   */
  "appKey": string;
  /**
   * The `DatadogAPIKey` `datacenter`.
   */
  "datacenter": string;
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
      required: true,
    },
    appKey: {
      baseName: "app_key",
      type: "string",
      required: true,
    },
    datacenter: {
      baseName: "datacenter",
      type: "string",
      required: true,
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
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DatadogAPIKey.attributeTypeMap;
  }

  public constructor() {}
}
