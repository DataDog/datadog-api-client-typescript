/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DatadogAPIKeySubdomain } from "./DatadogAPIKeySubdomain";
import { DatadogAPIKeyType } from "./DatadogAPIKeyType";
import { DatadogAPIKeyUpdateApiKey } from "./DatadogAPIKeyUpdateApiKey";
import { DatadogAPIKeyUpdateAppKey } from "./DatadogAPIKeyUpdateAppKey";
import { DatadogAPIKeyUpdateDatacenter } from "./DatadogAPIKeyUpdateDatacenter";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of the `DatadogAPIKey` object.
 */
export class DatadogAPIKeyUpdate {
  /**
   * The `DatadogAPIKeyUpdate` `api_key`.
   */
  "apiKey"?: DatadogAPIKeyUpdateApiKey;
  /**
   * The `DatadogAPIKeyUpdate` `app_key`.
   */
  "appKey"?: DatadogAPIKeyUpdateAppKey;
  /**
   * The `DatadogAPIKeyUpdate` `datacenter`.
   */
  "datacenter"?: DatadogAPIKeyUpdateDatacenter;
  /**
   * Custom subdomain used for Datadog URLs generated with this Connection. For example, if this org uses `https://acme.datadoghq.com` to access Datadog, set this field to `acme`. If this field is omitted, generated URLs will use the default site URL for its datacenter (see [https://docs.datadoghq.com/getting_started/site](https://docs.datadoghq.com/getting_started/site)).
   */
  "subdomain"?: DatadogAPIKeySubdomain;
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
      type: "DatadogAPIKeyUpdateApiKey",
    },
    appKey: {
      baseName: "app_key",
      type: "DatadogAPIKeyUpdateAppKey",
    },
    datacenter: {
      baseName: "datacenter",
      type: "DatadogAPIKeyUpdateDatacenter",
    },
    subdomain: {
      baseName: "subdomain",
      type: "DatadogAPIKeySubdomain",
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
