/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TenancyConfigDataAttributesLogsConfig } from "./TenancyConfigDataAttributesLogsConfig";
import { TenancyConfigDataAttributesMetricsConfig } from "./TenancyConfigDataAttributesMetricsConfig";
import { TenancyConfigDataAttributesRegionsConfig } from "./TenancyConfigDataAttributesRegionsConfig";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an OCI tenancy integration configuration, including authentication details, region settings, and collection options.
 */
export class TenancyConfigDataAttributes {
  /**
   * The identifier of the billing plan associated with the OCI tenancy.
   */
  "billingPlanId"?: number;
  /**
   * Version number of the integration the tenancy is integrated with
   */
  "configVersion"?: number;
  /**
   * Whether cost data collection from OCI is enabled for the tenancy.
   */
  "costCollectionEnabled"?: boolean;
  /**
   * The OCID of the OCI compartment used by the Datadog integration stack.
   */
  "ddCompartmentId"?: string;
  /**
   * The OCID of the OCI Resource Manager stack used by the Datadog integration.
   */
  "ddStackId"?: string;
  /**
   * The home region of the OCI tenancy (for example, us-ashburn-1).
   */
  "homeRegion"?: string;
  /**
   * Log collection configuration for an OCI tenancy, indicating which compartments and services have log collection enabled.
   */
  "logsConfig"?: TenancyConfigDataAttributesLogsConfig;
  /**
   * Metrics collection configuration for an OCI tenancy, indicating which compartments and services are included or excluded.
   */
  "metricsConfig"?: TenancyConfigDataAttributesMetricsConfig;
  /**
   * The name of the parent OCI tenancy, if applicable.
   */
  "parentTenancyName"?: string;
  /**
   * Region configuration for an OCI tenancy, indicating which regions are available, enabled, or disabled for data collection.
   */
  "regionsConfig"?: TenancyConfigDataAttributesRegionsConfig;
  /**
   * Whether resource collection from OCI is enabled for the tenancy.
   */
  "resourceCollectionEnabled"?: boolean;
  /**
   * The human-readable name of the OCI tenancy.
   */
  "tenancyName"?: string;
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
    billingPlanId: {
      baseName: "billing_plan_id",
      type: "number",
      format: "int32",
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
    },
    logsConfig: {
      baseName: "logs_config",
      type: "TenancyConfigDataAttributesLogsConfig",
    },
    metricsConfig: {
      baseName: "metrics_config",
      type: "TenancyConfigDataAttributesMetricsConfig",
    },
    parentTenancyName: {
      baseName: "parent_tenancy_name",
      type: "string",
    },
    regionsConfig: {
      baseName: "regions_config",
      type: "TenancyConfigDataAttributesRegionsConfig",
    },
    resourceCollectionEnabled: {
      baseName: "resource_collection_enabled",
      type: "boolean",
    },
    tenancyName: {
      baseName: "tenancy_name",
      type: "string",
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
    return TenancyConfigDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
