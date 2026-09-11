/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SnowflakeIntegrationAccountAuthenticationRequest } from "./SnowflakeIntegrationAccountAuthenticationRequest";
import { SnowflakeIntegrationAccountSettingsUpdate } from "./SnowflakeIntegrationAccountSettingsUpdate";
import { SnowflakeIntegrationDataflowsRequest } from "./SnowflakeIntegrationDataflowsRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Writable attributes used to update a Snowflake integration account. Every field is optional; only the fields provided are changed. When `dataflows` is provided, only the dataflow ids included in the request are modified; dataflows omitted from the map keep their current configuration, as do the settings of an included dataflow that provides only `enabled`. `authentication` is the exception to partial updates: when provided it is replaced as a whole, so it must carry every field that creating an account requires.
 */
export class SnowflakeIntegrationAccountUpdateAttributes {
  /**
   * RSA key pair authentication, the only method Snowflake integration accounts support. Generate an RSA key pair and assign the public key to the Snowflake user named in `settings.username`. Because an update replaces this object as a whole, every required field must be sent again on each update, even when only one of them is changing.
   */
  "authentication"?: SnowflakeIntegrationAccountAuthenticationRequest;
  /**
   * Data Datadog collects from Snowflake, keyed by dataflow id. Each dataflow turns on a distinct kind of collection: set `enabled` to start or stop it, and use `settings` to configure what it collects. Defaults listed on each dataflow apply when the account is created; on update, omitted fields keep their current values. Every dataflow reads from Snowflake as the user in `settings.username`, so that user's role must be granted access to the underlying views; a dataflow enabled without those grants is stored but collects no data.
   */
  "dataflows"?: SnowflakeIntegrationDataflowsRequest;
  /**
   * Human-readable name of the Snowflake integration account. Must be
   * unique within your Datadog organization.
   */
  "name"?: string;
  /**
   * Settings for updating the Snowflake integration account. Only the fields provided are changed.
   */
  "settings"?: SnowflakeIntegrationAccountSettingsUpdate;

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
    authentication: {
      baseName: "authentication",
      type: "SnowflakeIntegrationAccountAuthenticationRequest",
    },
    dataflows: {
      baseName: "dataflows",
      type: "SnowflakeIntegrationDataflowsRequest",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    settings: {
      baseName: "settings",
      type: "SnowflakeIntegrationAccountSettingsUpdate",
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
    return SnowflakeIntegrationAccountUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
