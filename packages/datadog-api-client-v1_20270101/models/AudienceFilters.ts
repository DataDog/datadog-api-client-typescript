/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AudienceFiltersAccountsItems } from "./AudienceFiltersAccountsItems";
import { AudienceFiltersSegmentsItems } from "./AudienceFiltersSegmentsItems";
import { AudienceFiltersUsersItems } from "./AudienceFiltersUsersItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
