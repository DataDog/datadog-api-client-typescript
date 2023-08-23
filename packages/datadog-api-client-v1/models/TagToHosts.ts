/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * In this object, the key is the tag, the value is a list of host names that are reporting that tag.
 */
export class TagToHosts {
  /**
   * A list of tags to apply to the host.
   */
  "tags"?: { [key: string]: Array<string> };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    tags: {
      type: "{ [key: string]: Array<string>; }",
    },
  };
}
