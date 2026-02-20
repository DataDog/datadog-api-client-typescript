/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GoogleChatOrganizationHandleResponseAttributes } from "./GoogleChatOrganizationHandleResponseAttributes";
import { GoogleChatOrganizationHandleType } from "./GoogleChatOrganizationHandleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Organization handle data from a response.
 */
export class GoogleChatOrganizationHandleResponseData {
  /**
   * Organization handle attributes.
   */
  "attributes"?: GoogleChatOrganizationHandleResponseAttributes;
  /**
   * The ID of the organization handle.
   */
  "id"?: string;
  /**
   * Organization handle resource type.
   */
  "type"?: GoogleChatOrganizationHandleType;

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
      type: "GoogleChatOrganizationHandleResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "GoogleChatOrganizationHandleType",
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
    return GoogleChatOrganizationHandleResponseData.attributeTypeMap;
  }

  public constructor() {}
}
