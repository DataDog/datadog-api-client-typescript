/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * PagerDuty integration for the service.
 */
export class ServiceDefinitionV2Dot1Pagerduty {
  /**
   * PagerDuty service url.
   */
  "serviceUrl"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    serviceUrl: {
      baseName: "service-url",
      type: "string",
    },
  };
}
