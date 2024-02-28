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
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    channels: {
      baseName: "channels",
      type: "Array<SlackIntegrationMetadataChannelItem>",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SlackIntegrationMetadata.attributeTypeMap;
  }

  public constructor() {}
}
