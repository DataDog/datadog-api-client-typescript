/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringEntraIdAzureAppRegistrationsData } from "./SecurityMonitoringEntraIdAzureAppRegistrationsData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing the Azure App Registration prerequisites for the Entra ID integration.
 */
export class SecurityMonitoringEntraIdAzureAppRegistrationsResponse {
  /**
   * The Azure App Registration prerequisites for the Entra ID integration.
   */
  "data": SecurityMonitoringEntraIdAzureAppRegistrationsData;

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
    data: {
      baseName: "data",
      type: "SecurityMonitoringEntraIdAzureAppRegistrationsData",
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
    return SecurityMonitoringEntraIdAzureAppRegistrationsResponse.attributeTypeMap;
  }

  public constructor() {}
}
