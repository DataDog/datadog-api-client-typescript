/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NebiusCloudIntegrationAccountAuthenticationUpdate } from "./NebiusCloudIntegrationAccountAuthenticationUpdate";
import { NebiusCloudIntegrationAccountSettingsUpdate } from "./NebiusCloudIntegrationAccountSettingsUpdate";
import { NebiusCloudIntegrationDataflowsRequest } from "./NebiusCloudIntegrationDataflowsRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Writable attributes used to update a Nebius Cloud integration account. Every field is optional; only the fields provided are changed. When `dataflows` is provided, only the dataflow ids included in the request are modified; dataflows omitted from the map keep their current configuration, as do the settings of an included dataflow that provides only `enabled`.
 */
export class NebiusCloudIntegrationAccountUpdateAttributes {
  /**
   * Authentication for updating the Nebius Cloud integration account. Exactly one method is set.
   */
  "authentication"?: NebiusCloudIntegrationAccountAuthenticationUpdate;
  /**
   * Data Datadog collects from Nebius Cloud, keyed by dataflow id. Each dataflow turns on a distinct kind of collection: set `enabled` to stop or start it, and use `settings` to configure what it collects. Defaults listed on each dataflow apply when the account is created; on update, omitted fields keep their current values. Every dataflow except `nebius-cloud-cost-collection` runs as the service account in `authentication`, using its authorized key pair and the static API key; enabling one of them without those keys is rejected with a `422` response, and one enabled with keys that later expire is stored but collects no data.
   */
  "dataflows"?: NebiusCloudIntegrationDataflowsRequest;
  /**
   * Human-readable name of the Nebius Cloud integration account.
   */
  "name"?: string;
  /**
   * Settings for updating the Nebius Cloud integration account. Only the fields provided are changed.
   */
  "settings"?: NebiusCloudIntegrationAccountSettingsUpdate;

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
      type: "NebiusCloudIntegrationAccountAuthenticationUpdate",
    },
    dataflows: {
      baseName: "dataflows",
      type: "NebiusCloudIntegrationDataflowsRequest",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    settings: {
      baseName: "settings",
      type: "NebiusCloudIntegrationAccountSettingsUpdate",
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
    return NebiusCloudIntegrationAccountUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
