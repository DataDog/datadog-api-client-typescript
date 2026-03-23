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

/**
 * Attributes for updating an existing OCI tenancy integration configuration, including optional credentials, region settings, and collection options.
 */
export class UpdateTenancyConfigDataAttributes {
  /**
   * OCI API signing key credentials used to update the Datadog integration's authentication with the OCI tenancy.
   */
  "authCredentials"?: UpdateTenancyConfigDataAttributesAuthCredentials;
  /**
   * Whether cost data collection from OCI is enabled for the tenancy.
   */
  "costCollectionEnabled"?: boolean;
  /**
   * The home region of the OCI tenancy (for example, us-ashburn-1).
   */
  "homeRegion"?: string;
  /**
   * Log collection configuration for updating an OCI tenancy, controlling which compartments and services have log collection enabled.
   */
  "logsConfig"?: UpdateTenancyConfigDataAttributesLogsConfig;
  /**
   * Metrics collection configuration for updating an OCI tenancy, controlling which compartments and services are included or excluded.
   */
  "metricsConfig"?: UpdateTenancyConfigDataAttributesMetricsConfig;
  /**
   * Region configuration for updating an OCI tenancy, specifying which regions are available, enabled, or disabled for data collection.
   */
  "regionsConfig"?: UpdateTenancyConfigDataAttributesRegionsConfig;
  /**
   * Whether resource collection from OCI is enabled for the tenancy.
   */
  "resourceCollectionEnabled"?: boolean;
  /**
   * The OCID of the OCI user used by the Datadog integration for authentication.
   */
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
