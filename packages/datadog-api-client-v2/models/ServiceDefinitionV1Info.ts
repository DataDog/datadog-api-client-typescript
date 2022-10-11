/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Basic information about a service.
 */
export class ServiceDefinitionV1Info {
  /**
   * Unique identifier of the service. Must be unique across all services and is used to match with a service in Datadog.
   */
  "ddService": string;
  /**
   * A short description of the service.
   */
  "description"?: string;
  /**
   * A friendly name of the service.
   */
  "displayName"?: string;
  /**
   * Service tier.
   */
  "serviceTier"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    ddService: {
      baseName: "dd-service",
      type: "string",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
    },
    displayName: {
      baseName: "display-name",
      type: "string",
    },
    serviceTier: {
      baseName: "service-tier",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ServiceDefinitionV1Info.attributeTypeMap;
  }

  public constructor() {}
}
