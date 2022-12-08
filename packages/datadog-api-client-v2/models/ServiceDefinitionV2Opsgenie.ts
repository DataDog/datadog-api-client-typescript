/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceDefinitionV2OpsgenieRegion } from "./ServiceDefinitionV2OpsgenieRegion";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Opsgenie integration for the service.
 */
export class ServiceDefinitionV2Opsgenie {
  /**
   * Opsgenie instance region.
   */
  "region"?: ServiceDefinitionV2OpsgenieRegion | UnparsedObject;
  /**
   * Opsgenie service url.
   */
  "serviceUrl": string;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    region: {
      baseName: "region",
      type: "ServiceDefinitionV2OpsgenieRegion",
    },
    serviceUrl: {
      baseName: "service-url",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ServiceDefinitionV2Opsgenie.attributeTypeMap;
  }

  public constructor() {}
}
