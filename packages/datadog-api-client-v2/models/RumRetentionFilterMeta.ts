/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumRetentionFilterMetaEditionMode } from "./RumRetentionFilterMetaEditionMode";
import { RumRetentionFilterMetaSource } from "./RumRetentionFilterMetaSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metadata about a RUM retention filter.
 */
export class RumRetentionFilterMeta {
  /**
   * Which attributes of the retention filter can be edited. `complete`: all attributes can be edited. `limited`: only the sample rates can be edited; the name, event type, and query are fixed and the filter cannot be reordered (for example, default filters). `unknown`: the edition mode is not set.
   */
  "editionMode"?: RumRetentionFilterMetaEditionMode;
  /**
   * The source of the last change to a RUM retention filter.
   */
  "source"?: RumRetentionFilterMetaSource;
  /**
   * The timestamp of the last update to the retention filter, in milliseconds since the Unix epoch.
   */
  "updatedAt"?: number;
  /**
   * The handle of the user who last updated the retention filter.
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
    editionMode: {
      baseName: "edition_mode",
      type: "RumRetentionFilterMetaEditionMode",
    },
    source: {
      baseName: "source",
      type: "RumRetentionFilterMetaSource",
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
    return RumRetentionFilterMeta.attributeTypeMap;
  }

  public constructor() {}
}
