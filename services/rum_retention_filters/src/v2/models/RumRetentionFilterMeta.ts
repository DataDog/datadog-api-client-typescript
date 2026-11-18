import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumRetentionFilterEditionMode } from "./RumRetentionFilterEditionMode";
import { RumRetentionFilterMetaSource } from "./RumRetentionFilterMetaSource";

/**
 * Metadata about the retention filter.
 */
export class RumRetentionFilterMeta {
  /**
   * The types of changes the retention filter accepts. `complete` filters can be updated and deleted.
   * `limited` filters are default retention filters that can't be deleted.
   */
  "editionMode"?: RumRetentionFilterEditionMode;
  /**
   * The source of the last update to the retention filter. The value is `unknown` if the request doesn't specify a source.
   */
  "source"?: RumRetentionFilterMetaSource;
  /**
   * The time of the last update, as a Unix timestamp in milliseconds.
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
      type: "RumRetentionFilterEditionMode",
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
