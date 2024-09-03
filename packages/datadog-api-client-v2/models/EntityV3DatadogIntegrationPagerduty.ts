/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An PagerDuty integration schema
 */
export class EntityV3DatadogIntegrationPagerduty {
  /**
   * The service url for the PagerDuty integration.
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
    return EntityV3DatadogIntegrationPagerduty.attributeTypeMap;
  }

  public constructor() {}
}
