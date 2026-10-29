/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A path expanded to show the events that follow it.
 */
export class JourneyMapExpandedPrefix {
  /**
   * Events of the expanded path, in order.
   */
  "events": Array<string>;
  /**
   * Maximum number of paths shown after the expanded path.
   */
  "pathLimit"?: number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    events: {
      baseName: "events",
      type: "Array<string>",
      required: true,
    },
    pathLimit: {
      baseName: "path_limit",
      type: "number",
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return JourneyMapExpandedPrefix.attributeTypeMap;
  }

  public constructor() {}
}
