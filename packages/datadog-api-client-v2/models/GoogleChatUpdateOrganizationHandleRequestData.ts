/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GoogleChatUpdateOrganizationHandleRequestAttributes } from "./GoogleChatUpdateOrganizationHandleRequestAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Organization handle data for an update request.
 */
export class GoogleChatUpdateOrganizationHandleRequestData {
  /**
   * Organization handle attributes for an update request.
   */
  "attributes": GoogleChatUpdateOrganizationHandleRequestAttributes;

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
      type: "GoogleChatUpdateOrganizationHandleRequestAttributes",
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
    return GoogleChatUpdateOrganizationHandleRequestData.attributeTypeMap;
  }

  public constructor() {}
}
