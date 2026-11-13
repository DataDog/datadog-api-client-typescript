import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorFormulaAndFunctionDataJobsMonitorOptions } from "./MonitorFormulaAndFunctionDataJobsMonitorOptions";

/**
 * A formula and functions data jobs query.
 */
export class MonitorFormulaAndFunctionDataJobsQueryDefinition {
  /**
   * The type of job being monitored. Valid values include:
   * `databricks.job`, `spark.application`, `airflow.dag`, `dbt.job`, `glue.job`, `adf.pipeline`.
   * The `aastra` dialect also accepts `airflow.job`, `dbt.model`, and `dbt.test`.
   * Custom job types are supported with the `custom.ol.` prefix.
   */
  "jobType": string;
  /**
   * Filter expression used to select the jobs to monitor. Its syntax depends on `query_dialect`:
   * a metric tag filter such as `job_name:smoke*` for `metric`, or an Aastra entity search
   * such as ``search for databricks_job where `@team:data-eng` `` for `aastra`.
   */
  "jobsQuery": string;
  /**
   * Monitor configuration options for data jobs queries.
   */
  "monitorOptions"?: MonitorFormulaAndFunctionDataJobsMonitorOptions;
  /**
   * Name of the query for use in formulas. Must be `run_query`.
   */
  "name": string;
  /**
   * Query dialect for data jobs queries. Valid values are `metric` and `aastra`.
   */
  "queryDialect": string;
  /**
   * Optional filter on individual runs, using metrics filter syntax.
   * Only supported with the `aastra` query dialect.
   */
  "runFilter"?: string;
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
    jobType: {
      baseName: "job_type",
      type: "string",
      required: true,
    },
    jobsQuery: {
      baseName: "jobs_query",
      type: "string",
      required: true,
    },
    monitorOptions: {
      baseName: "monitor_options",
      type: "MonitorFormulaAndFunctionDataJobsMonitorOptions",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    queryDialect: {
      baseName: "query_dialect",
      type: "string",
      required: true,
    },
    runFilter: {
      baseName: "run_filter",
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
    return MonitorFormulaAndFunctionDataJobsQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
