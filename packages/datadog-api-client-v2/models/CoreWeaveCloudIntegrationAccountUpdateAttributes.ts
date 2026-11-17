/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CoreWeaveCloudIntegrationAccountAuthenticationUpdate } from "./CoreWeaveCloudIntegrationAccountAuthenticationUpdate";
import { CoreWeaveCloudIntegrationAccountSettingsUpdate } from "./CoreWeaveCloudIntegrationAccountSettingsUpdate";
import { CoreWeaveCloudIntegrationDataflowsRequest } from "./CoreWeaveCloudIntegrationDataflowsRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Writable attributes used to update a CoreWeave integration account. Every field is optional; only the fields provided are changed. When `dataflows` is provided, only the dataflow ids included in the request are modified; dataflows omitted from the map keep their current configuration.
 */
export class CoreWeaveCloudIntegrationAccountUpdateAttributes {
  /**
   * Authentication for updating the CoreWeave integration account. Exactly one method is set.
   */
  "authentication"?: CoreWeaveCloudIntegrationAccountAuthenticationUpdate;
  /**
   * Data Datadog collects from CoreWeave, keyed by dataflow id. Each dataflow turns on a distinct kind of collection: set `enabled` to start or stop it. Defaults listed on each dataflow apply when the account is created; on update, omitted dataflow ids keep their current values. Collection runs with the API access token in `authentication`, whose user must have the Observability Viewer role; a dataflow enabled without that role is stored but collects no data.
   */
  "dataflows"?: CoreWeaveCloudIntegrationDataflowsRequest;
  /**
   * Human-readable name of the CoreWeave integration account.
   */
  "name"?: string;
  /**
   * Settings for updating the CoreWeave integration account. Only the fields provided are changed.
   */
  "settings"?: CoreWeaveCloudIntegrationAccountSettingsUpdate;

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
      type: "CoreWeaveCloudIntegrationAccountAuthenticationUpdate",
    },
    dataflows: {
      baseName: "dataflows",
      type: "CoreWeaveCloudIntegrationDataflowsRequest",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    settings: {
      baseName: "settings",
      type: "CoreWeaveCloudIntegrationAccountSettingsUpdate",
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
    return CoreWeaveCloudIntegrationAccountUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
