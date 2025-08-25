/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An Opsgenie integration schema.
 */
export class EntityV3DatadogIntegrationOpsgenie {
  /**
   * The region for the Opsgenie integration.
   */
  "region"?: string;
  /**
   * The service URL for the Opsgenie integration.
   */
  "serviceUrl": string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    region: {
      baseName: "region",
      type: "string",
    },
    serviceUrl: {
      baseName: "serviceURL",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EntityV3DatadogIntegrationOpsgenie.attributeTypeMap;
  }

  public constructor() {}
}
