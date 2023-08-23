/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceDefinitionV2Opsgenie } from "./ServiceDefinitionV2Opsgenie";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Third party integrations that Datadog supports.
 */
export class ServiceDefinitionV2Integrations {
  /**
   * Opsgenie integration for the service.
   */
  "opsgenie"?: ServiceDefinitionV2Opsgenie;
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
    opsgenie: {
      type: "ServiceDefinitionV2Opsgenie",
    },
    pagerduty: {
      type: "string",
    },
  };
}
