/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CompositeAudienceFiltersQueryAccountsItems } from "./CompositeAudienceFiltersQueryAccountsItems";
import { CompositeAudienceFiltersQueryDataSource } from "./CompositeAudienceFiltersQueryDataSource";
import { CompositeAudienceFiltersQuerySegmentsItems } from "./CompositeAudienceFiltersQuerySegmentsItems";
import { CompositeAudienceFiltersQueryUsersItems } from "./CompositeAudienceFiltersQueryUsersItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CompositeAudienceFiltersQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "accounts"?: Array<CompositeAudienceFiltersQueryAccountsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": CompositeAudienceFiltersQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "segments"?: Array<CompositeAudienceFiltersQuerySegmentsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "users"?: Array<CompositeAudienceFiltersQueryUsersItems>;

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
      type: "Array<CompositeAudienceFiltersQueryAccountsItems>",
    },
    dataSource: {
      baseName: "data_source",
      type: "CompositeAudienceFiltersQueryDataSource",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    segments: {
      baseName: "segments",
      type: "Array<CompositeAudienceFiltersQuerySegmentsItems>",
    },
    users: {
      baseName: "users",
      type: "Array<CompositeAudienceFiltersQueryUsersItems>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CompositeAudienceFiltersQuery.attributeTypeMap;
  }

  public constructor() {}
}
