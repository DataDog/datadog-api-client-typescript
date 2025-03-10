/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumRetentionFilterSource } from "./RumRetentionFilterSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The object describing metadata of a RUM retention filter.
 */
export class RumRetentionFilterMeta {
  /**
   * The origin source of the retention filter, which may be created or updated through the Datadog UI, terraform, or other channels such as direct API calls.
   */
  "source"?: RumRetentionFilterSource;

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
    source: {
      baseName: "source",
      type: "RumRetentionFilterSource",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RumRetentionFilterMeta.attributeTypeMap;
  }

  public constructor() {}
}
