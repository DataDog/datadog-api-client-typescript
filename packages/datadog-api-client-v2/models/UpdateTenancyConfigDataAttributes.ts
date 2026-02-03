/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UpdateTenancyConfigDataAttributesAuthCredentials } from "./UpdateTenancyConfigDataAttributesAuthCredentials";
import { UpdateTenancyConfigDataAttributesLogsConfig } from "./UpdateTenancyConfigDataAttributesLogsConfig";
import { UpdateTenancyConfigDataAttributesMetricsConfig } from "./UpdateTenancyConfigDataAttributesMetricsConfig";
import { UpdateTenancyConfigDataAttributesRegionsConfig } from "./UpdateTenancyConfigDataAttributesRegionsConfig";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class UpdateTenancyConfigDataAttributes {
  "authCredentials"?: UpdateTenancyConfigDataAttributesAuthCredentials;
  "costCollectionEnabled"?: boolean;
  "homeRegion"?: string;
  "logsConfig"?: UpdateTenancyConfigDataAttributesLogsConfig;
  "metricsConfig"?: UpdateTenancyConfigDataAttributesMetricsConfig;
  "regionsConfig"?: UpdateTenancyConfigDataAttributesRegionsConfig;
  "resourceCollectionEnabled"?: boolean;
  "userOcid"?: string;

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
    authCredentials: {
      baseName: "auth_credentials",
      type: "UpdateTenancyConfigDataAttributesAuthCredentials",
    },
    costCollectionEnabled: {
      baseName: "cost_collection_enabled",
      type: "boolean",
    },
    homeRegion: {
      baseName: "home_region",
      type: "string",
    },
    logsConfig: {
      baseName: "logs_config",
      type: "UpdateTenancyConfigDataAttributesLogsConfig",
    },
    metricsConfig: {
      baseName: "metrics_config",
      type: "UpdateTenancyConfigDataAttributesMetricsConfig",
    },
    regionsConfig: {
      baseName: "regions_config",
      type: "UpdateTenancyConfigDataAttributesRegionsConfig",
    },
    resourceCollectionEnabled: {
      baseName: "resource_collection_enabled",
      type: "boolean",
    },
    userOcid: {
      baseName: "user_ocid",
      type: "string",
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
    return UpdateTenancyConfigDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
