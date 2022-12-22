/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { QueryFormula } from "./QueryFormula";
import { TimeseriesQuery } from "./TimeseriesQuery";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The object describing a timeseries formula request.
 */
export class TimeseriesFormulaRequestAttributes {
  /**
   * List of formulas to be calculated and returned as responses.
   */
  "formulas"?: Array<QueryFormula>;
  /**
   * Start date (inclusive) of the query in milliseconds since the Unix epoch.
   */
  "from": number;
  /**
   * A time interval in milliseconds.
   * May be overridden by a larger interval if the query would result in
   * too many points for the specified timeframe.
   * Defaults to a reasonable interval for the given timeframe.
   */
  "interval"?: number;
  /**
   * List of queries to be run and used as inputs to the formulas.
   */
  "queries": Array<TimeseriesQuery>;
  /**
   * End date (exclusive) of the query in milliseconds since the Unix epoch.
   */
  "to": number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    formulas: {
      baseName: "formulas",
      type: "Array<QueryFormula>",
    },
    from: {
      baseName: "from",
      type: "number",
      required: true,
      format: "int64",
    },
    interval: {
      baseName: "interval",
      type: "number",
      format: "int64",
    },
    queries: {
      baseName: "queries",
      type: "Array<TimeseriesQuery>",
      required: true,
    },
    to: {
      baseName: "to",
      type: "number",
      required: true,
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TimeseriesFormulaRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
