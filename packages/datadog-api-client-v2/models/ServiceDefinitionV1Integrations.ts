/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Third party integrations that Datadog supports.
 */
export class ServiceDefinitionV1Integrations {
  /**
   * PagerDuty service URL for the service.
   */
  "pagerduty"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    pagerduty: {
      type: "string",
    },
  };
}
