/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Used to specify user-related information when the payload does not have Git information.
 * For example, if Git information is missing for manually triggered pipelines, this field can be used instead.
 */
export class CIAppUserInfo {
  /**
   * Email of the user.
   */
  "email"?: string;
  /**
   * Name of the user.
   */
  "name"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    email: {
      baseName: "email",
      type: "string",
      format: "email",
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
    return CIAppUserInfo.attributeTypeMap;
  }

  public constructor() {}
}
