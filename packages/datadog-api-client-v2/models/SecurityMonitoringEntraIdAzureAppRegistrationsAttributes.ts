/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringAzureAppRegistration } from "./SecurityMonitoringAzureAppRegistration";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of the Entra ID Azure App Registration prerequisites.
 */
export class SecurityMonitoringEntraIdAzureAppRegistrationsAttributes {
  /**
   * The Azure App Registrations discovered for the organization.
   */
  "azureAppRegistrations": Array<SecurityMonitoringAzureAppRegistration>;
  /**
   * Whether at least one Azure App Registration has resource collection enabled.
   */
  "hasValidPrerequisite": boolean;
  /**
   * The ID of the Entra ID integration configuration, if one exists.
   */
  "integrationId"?: string;
  /**
   * Whether the Entra ID integration configuration is enabled, if one exists.
   */
  "isEnabled"?: boolean;
  /**
   * The time at which the Entra ID integration configuration was created, if one exists.
   */
  "subscribedAt"?: Date;

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
    azureAppRegistrations: {
      baseName: "azure_app_registrations",
      type: "Array<SecurityMonitoringAzureAppRegistration>",
      required: true,
    },
    hasValidPrerequisite: {
      baseName: "has_valid_prerequisite",
      type: "boolean",
      required: true,
    },
    integrationId: {
      baseName: "integration_id",
      type: "string",
    },
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
    },
    subscribedAt: {
      baseName: "subscribed_at",
      type: "Date",
      format: "date-time",
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
    return SecurityMonitoringEntraIdAzureAppRegistrationsAttributes.attributeTypeMap;
  }

  public constructor() {}
}
