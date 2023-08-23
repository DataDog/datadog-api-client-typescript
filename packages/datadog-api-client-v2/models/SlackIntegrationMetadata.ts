/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SlackIntegrationMetadataChannelItem } from "./SlackIntegrationMetadataChannelItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Incident integration metadata for the Slack integration.
 */
export class SlackIntegrationMetadata {
  /**
   * Array of Slack channels in this integration metadata.
   */
  "channels": Array<SlackIntegrationMetadataChannelItem>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    channels: {
      type: "Array<SlackIntegrationMetadataChannelItem>",
      required: true,
    },
  };
}
