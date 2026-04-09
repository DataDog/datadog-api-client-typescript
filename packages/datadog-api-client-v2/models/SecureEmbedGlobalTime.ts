/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecureEmbedGlobalTimeLiveSpan } from "./SecureEmbedGlobalTimeLiveSpan";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Default time range configuration for the secure embed.
 */
export class SecureEmbedGlobalTime {
  /**
   * Dashboard global time live_span selection.
   */
  "liveSpan"?: SecureEmbedGlobalTimeLiveSpan;

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
    liveSpan: {
      baseName: "live_span",
      type: "SecureEmbedGlobalTimeLiveSpan",
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
    return SecureEmbedGlobalTime.attributeTypeMap;
  }

  public constructor() {}
}
