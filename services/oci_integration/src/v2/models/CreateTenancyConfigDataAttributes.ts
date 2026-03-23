import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateTenancyConfigDataAttributesAuthCredentials } from "./CreateTenancyConfigDataAttributesAuthCredentials";
import { CreateTenancyConfigDataAttributesLogsConfig } from "./CreateTenancyConfigDataAttributesLogsConfig";
import { CreateTenancyConfigDataAttributesMetricsConfig } from "./CreateTenancyConfigDataAttributesMetricsConfig";
import { CreateTenancyConfigDataAttributesRegionsConfig } from "./CreateTenancyConfigDataAttributesRegionsConfig";

/**
 * Attributes for creating a new OCI tenancy integration configuration, including credentials, region settings, and collection options.
 */
export class CreateTenancyConfigDataAttributes {
  /**
   * OCI API signing key credentials used to authenticate the Datadog integration with the OCI tenancy.
   */
  "authCredentials": CreateTenancyConfigDataAttributesAuthCredentials;
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
  "homeRegion": string;
  /**
   * Log collection configuration for an OCI tenancy, controlling which compartments and services have log collection enabled.
   */
  "logsConfig"?: CreateTenancyConfigDataAttributesLogsConfig;
  /**
   * Metrics collection configuration for an OCI tenancy, controlling which compartments and services are included or excluded.
   */
  "metricsConfig"?: CreateTenancyConfigDataAttributesMetricsConfig;
  /**
   * Region configuration for an OCI tenancy, specifying which regions are available, enabled, or disabled for data collection.
   */
  "regionsConfig"?: CreateTenancyConfigDataAttributesRegionsConfig;
  /**
   * Whether resource collection from OCI is enabled for the tenancy.
   */
  "resourceCollectionEnabled"?: boolean;
  /**
   * The OCID of the OCI user used by the Datadog integration for authentication.
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
