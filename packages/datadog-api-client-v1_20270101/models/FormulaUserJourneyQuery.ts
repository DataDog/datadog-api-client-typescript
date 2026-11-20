/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormulaUserJourneyQuery20270101Search } from "./FormulaUserJourneyQuery20270101Search";
import { FormulaUserJourneyQueryCompute } from "./FormulaUserJourneyQueryCompute";
import { FormulaUserJourneyQueryDataSource } from "./FormulaUserJourneyQueryDataSource";
import { StorageType } from "./StorageType";
import { UserJourneyGroupBy } from "./UserJourneyGroupBy";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FormulaUserJourneyQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "compute": FormulaUserJourneyQueryCompute;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": FormulaUserJourneyQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "excludeAnonymousTraffic"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupBy"?: Array<UserJourneyGroupBy>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "search": FormulaUserJourneyQuery20270101Search;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "storage"?: StorageType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    compute: {
      baseName: "compute",
      type: "FormulaUserJourneyQueryCompute",
      required: true,
    },
    dataSource: {
      baseName: "data_source",
      type: "FormulaUserJourneyQueryDataSource",
      required: true,
    },
    excludeAnonymousTraffic: {
      baseName: "exclude_anonymous_traffic",
      type: "boolean",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<UserJourneyGroupBy>",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    search: {
      baseName: "search",
      type: "FormulaUserJourneyQuery20270101Search",
      required: true,
    },
    storage: {
      baseName: "storage",
      type: "StorageType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FormulaUserJourneyQuery.attributeTypeMap;
  }

  public constructor() {}
}
