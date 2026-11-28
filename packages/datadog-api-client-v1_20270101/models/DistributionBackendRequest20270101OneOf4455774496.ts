/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DistributionBackendRequestAnyOfAnyOfItemRequestType4445470944 } from "./DistributionBackendRequestAnyOfAnyOfItemRequestType4445470944";
import { FormulaApmStatsQuery } from "./FormulaApmStatsQuery";
import { RequestStyle } from "./RequestStyle";
import { WidgetNumberFormat } from "./WidgetNumberFormat";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class DistributionBackendRequest20270101OneOf4455774496 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "numberFormat"?: WidgetNumberFormat;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": FormulaApmStatsQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": DistributionBackendRequestAnyOfAnyOfItemRequestType4445470944;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "style"?: RequestStyle;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    numberFormat: {
      baseName: "number_format",
      type: "WidgetNumberFormat",
    },
    query: {
      baseName: "query",
      type: "FormulaApmStatsQuery",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "DistributionBackendRequestAnyOfAnyOfItemRequestType4445470944",
      required: true,
    },
    style: {
      baseName: "style",
      type: "RequestStyle",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DistributionBackendRequest20270101OneOf4455774496.attributeTypeMap;
  }

  public constructor() {}
}
