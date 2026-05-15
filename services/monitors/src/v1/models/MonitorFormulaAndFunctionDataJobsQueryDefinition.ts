import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A formula and functions data jobs query.
 */
export class MonitorFormulaAndFunctionDataJobsQueryDefinition {
  /**
   * The type of job being monitored. Valid values include:
   * `databricks.job`, `spark.application`, `airflow.dag`,
   * `dbt.job`, `dbt.model`, `dbt.test`, `glue.job`.
   * Custom job types are supported with the `custom.ol.` prefix.
   */
  "jobType": string;
  /**
   * Filter expression used to select the jobs to monitor.
   */
  "jobsQuery": string;
  /**
   * Name of the query for use in formulas. Must be `run_query`.
   */
  "name": string;
  /**
   * Query dialect for data jobs queries. Currently only `metric` is supported.
   */
  "queryDialect": string;
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
