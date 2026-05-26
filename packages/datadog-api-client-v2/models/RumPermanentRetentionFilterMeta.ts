/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumPermanentRetentionFilterMetaSource } from "./RumPermanentRetentionFilterMetaSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metadata about the permanent retention filter.
 */
export class RumPermanentRetentionFilterMeta {
  /**
   * The source of the last update to a permanent retention filter.
   */
  "source"?: RumPermanentRetentionFilterMetaSource;
  /**
   * Unix epoch (in milliseconds) of the last update.
   */
  "updatedAt"?: number;
  /**
   * Handle of the user who last updated the filter.
   */
  "updatedByHandle"?: string;

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
      type: "RumPermanentRetentionFilterMetaSource",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "number",
      format: "int64",
    },
    updatedByHandle: {
      baseName: "updated_by_handle",
      type: "string",
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
    return RumPermanentRetentionFilterMeta.attributeTypeMap;
  }

  public constructor() {}
}
