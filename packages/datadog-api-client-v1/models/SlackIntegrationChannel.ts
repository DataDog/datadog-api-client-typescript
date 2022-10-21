/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SlackIntegrationChannelDisplay } from "./SlackIntegrationChannelDisplay";

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The Slack channel configuration.
 */
export class SlackIntegrationChannel {
  /**
   * Configuration options for what is shown in an alert event message.
   */
  "display"?: SlackIntegrationChannelDisplay;
  /**
   * Your channel name.
   */
  "name"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    display: {
      baseName: "display",
      type: "SlackIntegrationChannelDisplay",
    },
    name: {
      baseName: "name",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SlackIntegrationChannel.attributeTypeMap;
  }

  public constructor() {}
}
