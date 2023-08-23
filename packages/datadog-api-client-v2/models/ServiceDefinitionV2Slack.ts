/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceDefinitionV2SlackType } from "./ServiceDefinitionV2SlackType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Service owner's Slack channel.
 */
export class ServiceDefinitionV2Slack {
  /**
   * Slack Channel.
   */
  "contact": string;
  /**
   * Contact Slack.
   */
  "name"?: string;
  /**
   * Contact type.
   */
  "type": ServiceDefinitionV2SlackType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    contact: {
      type: "string",
      required: true,
    },
    name: {
      type: "string",
    },
    type: {
      type: "ServiceDefinitionV2SlackType",
      required: true,
    },
  };
}
