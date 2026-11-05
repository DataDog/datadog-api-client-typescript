/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NotionAPIKeyType } from "./NotionAPIKeyType";
import { NotionAPIKeyUpdateApiToken } from "./NotionAPIKeyUpdateApiToken";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of the `NotionAPIKey` object.
 */
export class NotionAPIKeyUpdate {
  /**
   * The `NotionAPIKeyUpdate` `api_token`.
   */
  "apiToken"?: NotionAPIKeyUpdateApiToken;
  /**
   * The definition of the `NotionAPIKey` object.
   */
  "type": NotionAPIKeyType;

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
    apiToken: {
      baseName: "api_token",
      type: "NotionAPIKeyUpdateApiToken",
    },
    type: {
      baseName: "type",
      type: "NotionAPIKeyType",
      required: true,
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
    return NotionAPIKeyUpdate.attributeTypeMap;
  }

  public constructor() {}
}
