/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateTenancyConfigDataAttributesAuthCredentials } from "./CreateTenancyConfigDataAttributesAuthCredentials";
import { CreateTenancyConfigDataAttributesLogsConfig } from "./CreateTenancyConfigDataAttributesLogsConfig";
import { CreateTenancyConfigDataAttributesMetricsConfig } from "./CreateTenancyConfigDataAttributesMetricsConfig";
import { CreateTenancyConfigDataAttributesRegionsConfig } from "./CreateTenancyConfigDataAttributesRegionsConfig";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class CreateTenancyConfigDataAttributes {
  "authCredentials": CreateTenancyConfigDataAttributesAuthCredentials;
  "configVersion"?: number;
  "costCollectionEnabled"?: boolean;
  "ddCompartmentId"?: string;
  "ddStackId"?: string;
  "homeRegion": string;
  "logsConfig"?: CreateTenancyConfigDataAttributesLogsConfig;
  "metricsConfig"?: CreateTenancyConfigDataAttributesMetricsConfig;
  "regionsConfig"?: CreateTenancyConfigDataAttributesRegionsConfig;
  "resourceCollectionEnabled"?: boolean;
  "userOcid": string;

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
      type: "CreateTenancyConfigDataAttributesAuthCredentials",
      required: true,
    },
    configVersion: {
      baseName: "config_version",
      type: "number",
      format: "int64",
    },
    costCollectionEnabled: {
      baseName: "cost_collection_enabled",
      type: "boolean",
    },
    ddCompartmentId: {
      baseName: "dd_compartment_id",
      type: "string",
    },
    ddStackId: {
      baseName: "dd_stack_id",
      type: "string",
    },
    homeRegion: {
      baseName: "home_region",
      type: "string",
      required: true,
    },
    logsConfig: {
      baseName: "logs_config",
      type: "CreateTenancyConfigDataAttributesLogsConfig",
    },
    metricsConfig: {
      baseName: "metrics_config",
      type: "CreateTenancyConfigDataAttributesMetricsConfig",
    },
    regionsConfig: {
      baseName: "regions_config",
      type: "CreateTenancyConfigDataAttributesRegionsConfig",
    },
    resourceCollectionEnabled: {
      baseName: "resource_collection_enabled",
      type: "boolean",
    },
    userOcid: {
      baseName: "user_ocid",
      type: "string",
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
    return CreateTenancyConfigDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
