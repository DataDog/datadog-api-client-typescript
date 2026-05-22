/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringIntegrationConfigAttributes } from "./SecurityMonitoringIntegrationConfigAttributes";
import { SecurityMonitoringIntegrationConfigResourceType } from "./SecurityMonitoringIntegrationConfigResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An entity context sync configuration.
 */
export class SecurityMonitoringIntegrationConfigData {
  /**
   * The attributes of an entity context sync configuration as returned by the API.
   */
  "attributes": SecurityMonitoringIntegrationConfigAttributes;
  /**
   * The unique identifier of the integration configuration.
   */
  "id": string;
  /**
   * The type of the resource. The value should always be `integration_config`.
   */
  "type": SecurityMonitoringIntegrationConfigResourceType;

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
      type: "SecurityMonitoringIntegrationConfigAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringIntegrationConfigResourceType",
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
    return SecurityMonitoringIntegrationConfigData.attributeTypeMap;
  }

  public constructor() {}
}
