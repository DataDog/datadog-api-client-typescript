/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringEntraIdAzureAppRegistrationsAttributes } from "./SecurityMonitoringEntraIdAzureAppRegistrationsAttributes";
import { SecurityMonitoringEntraIdAzureAppRegistrationsResourceType } from "./SecurityMonitoringEntraIdAzureAppRegistrationsResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The Azure App Registration prerequisites for the Entra ID integration.
 */
export class SecurityMonitoringEntraIdAzureAppRegistrationsData {
  /**
   * The attributes of the Entra ID Azure App Registration prerequisites.
   */
  "attributes": SecurityMonitoringEntraIdAzureAppRegistrationsAttributes;
  /**
   * The ID of the organization the Azure App Registrations belong to.
   */
  "id": string;
  /**
   * The type of the resource. The value should always be `entra_id_azure_app_registrations`.
   */
  "type": SecurityMonitoringEntraIdAzureAppRegistrationsResourceType;

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
    attributes: {
      baseName: "attributes",
      type: "SecurityMonitoringEntraIdAzureAppRegistrationsAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringEntraIdAzureAppRegistrationsResourceType",
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
    return SecurityMonitoringEntraIdAzureAppRegistrationsData.attributeTypeMap;
  }

  public constructor() {}
}
