import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AudienceFiltersAccountsItems } from "./AudienceFiltersAccountsItems";
import { AudienceFiltersSegmentsItems } from "./AudienceFiltersSegmentsItems";
import { AudienceFiltersUsersItems } from "./AudienceFiltersUsersItems";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class AudienceFilters {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "accounts"?: Array<AudienceFiltersAccountsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "segments"?: Array<AudienceFiltersSegmentsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "users"?: Array<AudienceFiltersUsersItems>;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    accounts: {
      baseName: "accounts",
      type: "Array<AudienceFiltersAccountsItems>",
    },
    segments: {
      baseName: "segments",
      type: "Array<AudienceFiltersSegmentsItems>",
    },
    users: {
      baseName: "users",
      type: "Array<AudienceFiltersUsersItems>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AudienceFilters.attributeTypeMap;
  }

  public constructor() {}
}
