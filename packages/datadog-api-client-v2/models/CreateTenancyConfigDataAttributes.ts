/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AuthCredentials } from "./AuthCredentials";
import { OCILogsConfig } from "./OCILogsConfig";
import { OCIMetricsConfig } from "./OCIMetricsConfig";
import { RegionsConfig } from "./RegionsConfig";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `CreateTenancyConfigDataAttributes` object.
 */
export class CreateTenancyConfigDataAttributes {
  /**
   * The auth credentials of the user. Consists of a public key fingerprint and private key.
   */
  "authCredentials": AuthCredentials;
  /**
   * The config version. It is not recommended to add or change this value, as it is determined internally.
   */
  "configVersion"?: number;
  /**
   * The OCID of the compartment containing Datadog managed resources.
   */
  "ddCompartmentId"?: string;
  /**
   * The OCID of the resource manager stack for creating Datadog managed resources.
   */
  "ddStackId"?: string;
  /**
   * The home region of the tenancy to be integrated.
   */
  "homeRegion": string;
  /**
   * The definition of `OCILogsConfig` object.
   */
  "logsConfig"?: OCILogsConfig;
  /**
   * The definition of `OCIMetricsConfig` object.
   */
  "metricsConfig"?: OCIMetricsConfig;
  /**
   * The definition of `RegionsConfig` object.
   */
  "regionsConfig"?: RegionsConfig;
  /**
   * Enable or disable resource collection.
   */
  "resourceCollectionEnabled"?: boolean;
  /**
   * The OCID of the user needed to authenticate and collect data.
   */
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
      type: "AuthCredentials",
      required: true,
    },
    configVersion: {
      baseName: "config_version",
      type: "number",
      format: "int64",
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
      type: "OCILogsConfig",
    },
    metricsConfig: {
      baseName: "metrics_config",
      type: "OCIMetricsConfig",
    },
    regionsConfig: {
      baseName: "regions_config",
      type: "RegionsConfig",
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
      type: "any",
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
