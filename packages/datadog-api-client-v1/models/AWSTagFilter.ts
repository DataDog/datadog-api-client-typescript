/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSNamespace } from "./AWSNamespace";

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A tag filter.
 */
export class AWSTagFilter {
  /**
   * The namespace associated with the tag filter entry.
   */
  "namespace"?: AWSNamespace;
  /**
   * The tag filter string.
   */
  "tagFilterStr"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    namespace: {
      baseName: "namespace",
      type: "AWSNamespace",
    },
    tagFilterStr: {
      baseName: "tag_filter_str",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AWSTagFilter.attributeTypeMap;
  }

  public constructor() {}
}
