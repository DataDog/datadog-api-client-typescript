/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MicrosoftTeamsChannelInfoResponseAttributes } from "./MicrosoftTeamsChannelInfoResponseAttributes";
import { MicrosoftTeamsChannelInfoType } from "./MicrosoftTeamsChannelInfoType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Channel data from a response.
 */
export class MicrosoftTeamsChannelInfoResponseData {
  /**
   * Channel attributes.
   */
  "attributes"?: MicrosoftTeamsChannelInfoResponseAttributes;
  /**
   * The ID of the channel.
   */
  "id"?: string;
  /**
   * Channel info resource type.
   */
  "type"?: MicrosoftTeamsChannelInfoType;

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
    attributes: {
      baseName: "attributes",
      type: "MicrosoftTeamsChannelInfoResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "MicrosoftTeamsChannelInfoType",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MicrosoftTeamsChannelInfoResponseData.attributeTypeMap;
  }

  public constructor() {}
}
