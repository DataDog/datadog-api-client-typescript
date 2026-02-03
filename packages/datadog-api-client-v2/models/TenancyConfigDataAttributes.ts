/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TenancyConfigDataAttributesLogsConfig } from "./TenancyConfigDataAttributesLogsConfig";
import { TenancyConfigDataAttributesMetricsConfig } from "./TenancyConfigDataAttributesMetricsConfig";
import { TenancyConfigDataAttributesRegionsConfig } from "./TenancyConfigDataAttributesRegionsConfig";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class TenancyConfigDataAttributes {
  "billingPlanId"?: number;
  "configVersion"?: number;
  "costCollectionEnabled"?: boolean;
  "ddCompartmentId"?: string;
  "ddStackId"?: string;
  "homeRegion"?: string;
  "logsConfig"?: TenancyConfigDataAttributesLogsConfig;
  "metricsConfig"?: TenancyConfigDataAttributesMetricsConfig;
  "parentTenancyName"?: string;
  "regionsConfig"?: TenancyConfigDataAttributesRegionsConfig;
  "resourceCollectionEnabled"?: boolean;
  "tenancyName"?: string;
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
