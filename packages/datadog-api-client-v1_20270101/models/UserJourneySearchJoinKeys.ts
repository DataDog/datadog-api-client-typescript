/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class UserJourneySearchJoinKeys {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "primary": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "secondary"?: Array<string>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    primary: {
      baseName: "primary",
      type: "string",
      required: true,
    },
    secondary: {
      baseName: "secondary",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UserJourneySearchJoinKeys.attributeTypeMap;
  }

  public constructor() {}
}
