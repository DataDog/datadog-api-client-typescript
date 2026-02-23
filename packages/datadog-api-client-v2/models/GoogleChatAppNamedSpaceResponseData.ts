/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GoogleChatAppNamedSpaceResponseAttributes } from "./GoogleChatAppNamedSpaceResponseAttributes";
import { GoogleChatAppNamedSpaceType } from "./GoogleChatAppNamedSpaceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Google Chat space data from a response.
 */
export class GoogleChatAppNamedSpaceResponseData {
  /**
   * Google Chat space attributes.
   */
  "attributes"?: GoogleChatAppNamedSpaceResponseAttributes;
  /**
   * The ID of the Google Chat space.
   */
  "id"?: string;
  /**
   * Google Chat space resource type.
   */
  "type"?: GoogleChatAppNamedSpaceType;

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
      type: "GoogleChatAppNamedSpaceResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "GoogleChatAppNamedSpaceType",
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
    return GoogleChatAppNamedSpaceResponseData.attributeTypeMap;
  }

  public constructor() {}
}
