import {
  dateFromRFC3339String,
  dateToRFC3339String,
  UnparsedObject,
  logger,
} from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ApmStatsQueryColumnType } from "./ApmStatsQueryColumnType";
import { ApmStatsQueryDefinition } from "./ApmStatsQueryDefinition";
import { DistributionWidgetDefinition } from "./DistributionWidgetDefinition";
import { DistributionWidgetRequest } from "./DistributionWidgetRequest";
import { DistributionWidgetXAxis } from "./DistributionWidgetXAxis";
import { DistributionWidgetYAxis } from "./DistributionWidgetYAxis";
import { EventQueryDefinition } from "./EventQueryDefinition";
import { FormulaAndFunctionApmDependencyStatsQueryDefinition } from "./FormulaAndFunctionApmDependencyStatsQueryDefinition";
import { FormulaAndFunctionApmResourceStatsQueryDefinition } from "./FormulaAndFunctionApmResourceStatsQueryDefinition";
import { FormulaAndFunctionCloudCostQueryDefinition } from "./FormulaAndFunctionCloudCostQueryDefinition";
import { FormulaAndFunctionEventQueryDefinition } from "./FormulaAndFunctionEventQueryDefinition";
import { FormulaAndFunctionEventQueryDefinitionCompute } from "./FormulaAndFunctionEventQueryDefinitionCompute";
import { FormulaAndFunctionEventQueryDefinitionSearch } from "./FormulaAndFunctionEventQueryDefinitionSearch";
import { FormulaAndFunctionEventQueryGroupBy } from "./FormulaAndFunctionEventQueryGroupBy";
import { FormulaAndFunctionEventQueryGroupBySort } from "./FormulaAndFunctionEventQueryGroupBySort";
import { FormulaAndFunctionMetricQueryDefinition } from "./FormulaAndFunctionMetricQueryDefinition";
import { FormulaAndFunctionProcessQueryDefinition } from "./FormulaAndFunctionProcessQueryDefinition";
import { FormulaAndFunctionSLOQueryDefinition } from "./FormulaAndFunctionSLOQueryDefinition";
import { HeatMapWidgetDefinition } from "./HeatMapWidgetDefinition";
import { HeatMapWidgetRequest } from "./HeatMapWidgetRequest";
import { LogQueryDefinition } from "./LogQueryDefinition";
import { LogQueryDefinitionGroupBy } from "./LogQueryDefinitionGroupBy";
import { LogQueryDefinitionGroupBySort } from "./LogQueryDefinitionGroupBySort";
import { LogQueryDefinitionSearch } from "./LogQueryDefinitionSearch";
import { LogStreamWidgetDefinition } from "./LogStreamWidgetDefinition";
import { LogsQueryCompute } from "./LogsQueryCompute";
import { NotebookAbsoluteTime } from "./NotebookAbsoluteTime";
import { NotebookAuthor } from "./NotebookAuthor";
import { NotebookCellCreateRequest } from "./NotebookCellCreateRequest";
import { NotebookCellResponse } from "./NotebookCellResponse";
import { NotebookCellUpdateRequest } from "./NotebookCellUpdateRequest";
import { NotebookCreateData } from "./NotebookCreateData";
import { NotebookCreateDataAttributes } from "./NotebookCreateDataAttributes";
import { NotebookCreateRequest } from "./NotebookCreateRequest";
import { NotebookDistributionCellAttributes } from "./NotebookDistributionCellAttributes";
import { NotebookHeatMapCellAttributes } from "./NotebookHeatMapCellAttributes";
import { NotebookLogStreamCellAttributes } from "./NotebookLogStreamCellAttributes";
import { NotebookMarkdownCellAttributes } from "./NotebookMarkdownCellAttributes";
import { NotebookMarkdownCellDefinition } from "./NotebookMarkdownCellDefinition";
import { NotebookMetadata } from "./NotebookMetadata";
import { NotebookRelativeTime } from "./NotebookRelativeTime";
import { NotebookResponse } from "./NotebookResponse";
import { NotebookResponseData } from "./NotebookResponseData";
import { NotebookResponseDataAttributes } from "./NotebookResponseDataAttributes";
import { NotebookSplitBy } from "./NotebookSplitBy";
import { NotebookTimeseriesCellAttributes } from "./NotebookTimeseriesCellAttributes";
import { NotebookToplistCellAttributes } from "./NotebookToplistCellAttributes";
import { NotebookUpdateData } from "./NotebookUpdateData";
import { NotebookUpdateDataAttributes } from "./NotebookUpdateDataAttributes";
import { NotebookUpdateRequest } from "./NotebookUpdateRequest";
import { NotebooksResponse } from "./NotebooksResponse";
import { NotebooksResponseData } from "./NotebooksResponseData";
import { NotebooksResponseDataAttributes } from "./NotebooksResponseDataAttributes";
import { NotebooksResponseMeta } from "./NotebooksResponseMeta";
import { NotebooksResponsePage } from "./NotebooksResponsePage";
import { NumberFormatUnitCanonical } from "./NumberFormatUnitCanonical";
import { NumberFormatUnitCustom } from "./NumberFormatUnitCustom";
import { NumberFormatUnitScale } from "./NumberFormatUnitScale";
import { ProcessQueryDefinition } from "./ProcessQueryDefinition";
import { TimeseriesWidgetDefinition } from "./TimeseriesWidgetDefinition";
import { TimeseriesWidgetExpressionAlias } from "./TimeseriesWidgetExpressionAlias";
import { TimeseriesWidgetRequest } from "./TimeseriesWidgetRequest";
import { ToplistWidgetDefinition } from "./ToplistWidgetDefinition";
import { ToplistWidgetFlat } from "./ToplistWidgetFlat";
import { ToplistWidgetRequest } from "./ToplistWidgetRequest";
import { ToplistWidgetStacked } from "./ToplistWidgetStacked";
import { ToplistWidgetStyle } from "./ToplistWidgetStyle";
import { WidgetAxis } from "./WidgetAxis";
import { WidgetConditionalFormat } from "./WidgetConditionalFormat";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetEvent } from "./WidgetEvent";
import { WidgetFieldSort } from "./WidgetFieldSort";
import { WidgetFormula } from "./WidgetFormula";
import { WidgetFormulaCellDisplayModeOptions } from "./WidgetFormulaCellDisplayModeOptions";
import { WidgetFormulaLimit } from "./WidgetFormulaLimit";
import { WidgetFormulaSort } from "./WidgetFormulaSort";
import { WidgetFormulaStyle } from "./WidgetFormulaStyle";
import { WidgetGroupSort } from "./WidgetGroupSort";
import { WidgetLegacyLiveSpan } from "./WidgetLegacyLiveSpan";
import { WidgetMarker } from "./WidgetMarker";
import { WidgetNewFixedSpan } from "./WidgetNewFixedSpan";
import { WidgetNewLiveSpan } from "./WidgetNewLiveSpan";
import { WidgetNumberFormat } from "./WidgetNumberFormat";
import { WidgetRequestStyle } from "./WidgetRequestStyle";
import { WidgetSortBy } from "./WidgetSortBy";
import { WidgetStyle } from "./WidgetStyle";

const primitives = [
  "string",
  "boolean",
  "double",
  "integer",
  "long",
  "float",
  "number",
];

const ARRAY_PREFIX = "Array<";
const MAP_PREFIX = "{ [key: string]: ";
const TUPLE_PREFIX = "[";

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "text/json": 100,
  "application/octet-stream": 0,
};

const enumsMap: { [key: string]: any[] } = {
  ApmStatsQueryRowType: ["service", "resource", "span"],
  DistributionWidgetDefinitionType: ["distribution"],
  DistributionWidgetHistogramRequestType: ["histogram"],
  FormulaAndFunctionApmDependencyStatName: ["avg_duration", "avg_root_duration", "avg_spans_per_trace", "error_rate", "pct_exec_time", "pct_of_traces", "total_traces_count"],
  FormulaAndFunctionApmDependencyStatsDataSource: ["apm_dependency_stats"],
  FormulaAndFunctionApmResourceStatName: ["errors", "error_rate", "hits", "latency_avg", "latency_distribution", "latency_max", "latency_p50", "latency_p75", "latency_p90", "latency_p95", "latency_p99"],
  FormulaAndFunctionApmResourceStatsDataSource: ["apm_resource_stats"],
  FormulaAndFunctionCloudCostDataSource: ["cloud_cost"],
  FormulaAndFunctionEventAggregation: ["count", "cardinality", "median", "pc75", "pc90", "pc95", "pc98", "pc99", "sum", "min", "max", "avg"],
  FormulaAndFunctionEventsDataSource: ["logs", "spans", "network", "rum", "security_signals", "profiles", "audit", "events", "ci_tests", "ci_pipelines", "incident_analytics"],
  FormulaAndFunctionMetricAggregation: ["avg", "min", "max", "sum", "last", "area", "l2norm", "percentile"],
  FormulaAndFunctionMetricDataSource: ["metrics"],
  FormulaAndFunctionProcessQueryDataSource: ["process", "container"],
  FormulaAndFunctionResponseFormat: ["timeseries", "scalar", "event_list"],
  FormulaAndFunctionSLODataSource: ["slo"],
  FormulaAndFunctionSLOGroupMode: ["overall", "components"],
  FormulaAndFunctionSLOMeasure: ["good_events", "bad_events", "good_minutes", "bad_minutes", "slo_status", "error_budget_remaining", "burn_rate", "error_budget_burndown"],
  FormulaAndFunctionSLOQueryType: ["metric", "time_slice"],
  FormulaType: ["formula"],
  GroupType: ["group"],
  HeatMapWidgetDefinitionType: ["heatmap"],
  LogStreamWidgetDefinitionType: ["log_stream"],
  NotebookCellResourceType: ["notebook_cells"],
  NotebookGraphSize: ["xs", "s", "m", "l", "xl"],
  NotebookMarkdownCellDefinitionType: ["markdown"],
  NotebookMetadataType: ["postmortem", "runbook", "investigation", "documentation", "report"],
  NotebookResourceType: ["notebooks"],
  NotebookStatus: ["published"],
  NumberFormatUnitCustomType: ["custom_unit_label"],
  NumberFormatUnitScaleType: ["canonical_unit"],
  QuerySortOrder: ["asc", "desc"],
  TableWidgetCellDisplayMode: ["number", "bar", "trend"],
  TimeseriesWidgetDefinitionType: ["timeseries"],
  TimeseriesWidgetLegendColumn: ["value", "avg", "sum", "min", "max"],
  TimeseriesWidgetLegendLayout: ["auto", "horizontal", "vertical"],
  ToplistWidgetDefinitionType: ["toplist"],
  ToplistWidgetFlatType: ["flat"],
  ToplistWidgetLegend: ["automatic", "inline", "none"],
  ToplistWidgetScaling: ["absolute", "relative"],
  ToplistWidgetStackedType: ["stacked"],
  WidgetAggregator: ["avg", "last", "max", "min", "sum", "percentile"],
  WidgetComparator: ["=", ">", ">=", "<", "<="],
  WidgetDisplayType: ["area", "bars", "line", "overlay"],
  WidgetFormulaCellDisplayModeOptionsTrendType: ["area", "line", "bars"],
  WidgetFormulaCellDisplayModeOptionsYScale: ["shared", "independent"],
  WidgetLineType: ["dashed", "dotted", "solid"],
  WidgetLineWidth: ["normal", "thick", "thin"],
  WidgetLiveSpan: ["1m", "5m", "10m", "15m", "30m", "1h", "4h", "1d", "2d", "1w", "1mo", "3mo", "6mo", "week_to_date", "month_to_date", "1y", "alert"],
  WidgetLiveSpanUnit: ["minute", "hour", "day", "week", "month", "year"],
  WidgetMessageDisplay: ["inline", "expanded-md", "expanded-lg"],
  WidgetNewFixedSpanType: ["fixed"],
  WidgetNewLiveSpanType: ["live"],
  WidgetPalette: ["blue", "custom_bg", "custom_image", "custom_text", "gray_on_white", "grey", "green", "orange", "red", "red_on_white", "white_on_gray", "white_on_green", "green_on_white", "white_on_red", "white_on_yellow", "yellow_on_white", "black_on_light_yellow", "black_on_light_green", "black_on_light_red"],
  WidgetSort: ["asc", "desc"],
  WidgetTextAlign: ["center", "left", "right"],
};

const typeMap: { [index: string]: any } = {
  APIErrorResponse: APIErrorResponse,
  ApmStatsQueryColumnType: ApmStatsQueryColumnType,
  ApmStatsQueryDefinition: ApmStatsQueryDefinition,
  DistributionWidgetDefinition: DistributionWidgetDefinition,
  DistributionWidgetRequest: DistributionWidgetRequest,
  DistributionWidgetXAxis: DistributionWidgetXAxis,
  DistributionWidgetYAxis: DistributionWidgetYAxis,
  EventQueryDefinition: EventQueryDefinition,
  FormulaAndFunctionApmDependencyStatsQueryDefinition: FormulaAndFunctionApmDependencyStatsQueryDefinition,
  FormulaAndFunctionApmResourceStatsQueryDefinition: FormulaAndFunctionApmResourceStatsQueryDefinition,
  FormulaAndFunctionCloudCostQueryDefinition: FormulaAndFunctionCloudCostQueryDefinition,
  FormulaAndFunctionEventQueryDefinition: FormulaAndFunctionEventQueryDefinition,
  FormulaAndFunctionEventQueryDefinitionCompute: FormulaAndFunctionEventQueryDefinitionCompute,
  FormulaAndFunctionEventQueryDefinitionSearch: FormulaAndFunctionEventQueryDefinitionSearch,
  FormulaAndFunctionEventQueryGroupBy: FormulaAndFunctionEventQueryGroupBy,
  FormulaAndFunctionEventQueryGroupBySort: FormulaAndFunctionEventQueryGroupBySort,
  FormulaAndFunctionMetricQueryDefinition: FormulaAndFunctionMetricQueryDefinition,
  FormulaAndFunctionProcessQueryDefinition: FormulaAndFunctionProcessQueryDefinition,
  FormulaAndFunctionSLOQueryDefinition: FormulaAndFunctionSLOQueryDefinition,
  HeatMapWidgetDefinition: HeatMapWidgetDefinition,
  HeatMapWidgetRequest: HeatMapWidgetRequest,
  LogQueryDefinition: LogQueryDefinition,
  LogQueryDefinitionGroupBy: LogQueryDefinitionGroupBy,
  LogQueryDefinitionGroupBySort: LogQueryDefinitionGroupBySort,
  LogQueryDefinitionSearch: LogQueryDefinitionSearch,
  LogStreamWidgetDefinition: LogStreamWidgetDefinition,
  LogsQueryCompute: LogsQueryCompute,
  NotebookAbsoluteTime: NotebookAbsoluteTime,
  NotebookAuthor: NotebookAuthor,
  NotebookCellCreateRequest: NotebookCellCreateRequest,
  NotebookCellResponse: NotebookCellResponse,
  NotebookCellUpdateRequest: NotebookCellUpdateRequest,
  NotebookCreateData: NotebookCreateData,
  NotebookCreateDataAttributes: NotebookCreateDataAttributes,
  NotebookCreateRequest: NotebookCreateRequest,
  NotebookDistributionCellAttributes: NotebookDistributionCellAttributes,
  NotebookHeatMapCellAttributes: NotebookHeatMapCellAttributes,
  NotebookLogStreamCellAttributes: NotebookLogStreamCellAttributes,
  NotebookMarkdownCellAttributes: NotebookMarkdownCellAttributes,
  NotebookMarkdownCellDefinition: NotebookMarkdownCellDefinition,
  NotebookMetadata: NotebookMetadata,
  NotebookRelativeTime: NotebookRelativeTime,
  NotebookResponse: NotebookResponse,
  NotebookResponseData: NotebookResponseData,
  NotebookResponseDataAttributes: NotebookResponseDataAttributes,
  NotebookSplitBy: NotebookSplitBy,
  NotebookTimeseriesCellAttributes: NotebookTimeseriesCellAttributes,
  NotebookToplistCellAttributes: NotebookToplistCellAttributes,
  NotebookUpdateData: NotebookUpdateData,
  NotebookUpdateDataAttributes: NotebookUpdateDataAttributes,
  NotebookUpdateRequest: NotebookUpdateRequest,
  NotebooksResponse: NotebooksResponse,
  NotebooksResponseData: NotebooksResponseData,
  NotebooksResponseDataAttributes: NotebooksResponseDataAttributes,
  NotebooksResponseMeta: NotebooksResponseMeta,
  NotebooksResponsePage: NotebooksResponsePage,
  NumberFormatUnitCanonical: NumberFormatUnitCanonical,
  NumberFormatUnitCustom: NumberFormatUnitCustom,
  NumberFormatUnitScale: NumberFormatUnitScale,
  ProcessQueryDefinition: ProcessQueryDefinition,
  TimeseriesWidgetDefinition: TimeseriesWidgetDefinition,
  TimeseriesWidgetExpressionAlias: TimeseriesWidgetExpressionAlias,
  TimeseriesWidgetRequest: TimeseriesWidgetRequest,
  ToplistWidgetDefinition: ToplistWidgetDefinition,
  ToplistWidgetFlat: ToplistWidgetFlat,
  ToplistWidgetRequest: ToplistWidgetRequest,
  ToplistWidgetStacked: ToplistWidgetStacked,
  ToplistWidgetStyle: ToplistWidgetStyle,
  WidgetAxis: WidgetAxis,
  WidgetConditionalFormat: WidgetConditionalFormat,
  WidgetCustomLink: WidgetCustomLink,
  WidgetEvent: WidgetEvent,
  WidgetFieldSort: WidgetFieldSort,
  WidgetFormula: WidgetFormula,
  WidgetFormulaCellDisplayModeOptions: WidgetFormulaCellDisplayModeOptions,
  WidgetFormulaLimit: WidgetFormulaLimit,
  WidgetFormulaSort: WidgetFormulaSort,
  WidgetFormulaStyle: WidgetFormulaStyle,
  WidgetGroupSort: WidgetGroupSort,
  WidgetLegacyLiveSpan: WidgetLegacyLiveSpan,
  WidgetMarker: WidgetMarker,
  WidgetNewFixedSpan: WidgetNewFixedSpan,
  WidgetNewLiveSpan: WidgetNewLiveSpan,
  WidgetNumberFormat: WidgetNumberFormat,
  WidgetRequestStyle: WidgetRequestStyle,
  WidgetSortBy: WidgetSortBy,
  WidgetStyle: WidgetStyle,
};

const oneOfMap: { [index: string]: string[] } = {
  DistributionWidgetHistogramRequestQuery: [
    "FormulaAndFunctionMetricQueryDefinition",
    "FormulaAndFunctionEventQueryDefinition",
    "FormulaAndFunctionApmResourceStatsQueryDefinition",
  ],
  FormulaAndFunctionQueryDefinition: [
    "FormulaAndFunctionMetricQueryDefinition",
    "FormulaAndFunctionEventQueryDefinition",
    "FormulaAndFunctionProcessQueryDefinition",
    "FormulaAndFunctionApmDependencyStatsQueryDefinition",
    "FormulaAndFunctionApmResourceStatsQueryDefinition",
    "FormulaAndFunctionSLOQueryDefinition",
    "FormulaAndFunctionCloudCostQueryDefinition",
  ],
  NotebookCellCreateRequestAttributes: [
    "NotebookMarkdownCellAttributes",
    "NotebookTimeseriesCellAttributes",
    "NotebookToplistCellAttributes",
    "NotebookHeatMapCellAttributes",
    "NotebookDistributionCellAttributes",
    "NotebookLogStreamCellAttributes",
  ],
  NotebookCellResponseAttributes: [
    "NotebookMarkdownCellAttributes",
    "NotebookTimeseriesCellAttributes",
    "NotebookToplistCellAttributes",
    "NotebookHeatMapCellAttributes",
    "NotebookDistributionCellAttributes",
    "NotebookLogStreamCellAttributes",
  ],
  NotebookCellTime: ["NotebookRelativeTime", "NotebookAbsoluteTime"],
  NotebookCellUpdateRequestAttributes: [
    "NotebookMarkdownCellAttributes",
    "NotebookTimeseriesCellAttributes",
    "NotebookToplistCellAttributes",
    "NotebookHeatMapCellAttributes",
    "NotebookDistributionCellAttributes",
    "NotebookLogStreamCellAttributes",
  ],
  NotebookGlobalTime: ["NotebookRelativeTime", "NotebookAbsoluteTime"],
  NotebookUpdateCell: ["NotebookCellCreateRequest", "NotebookCellUpdateRequest"],
  NumberFormatUnit: ["NumberFormatUnitCanonical", "NumberFormatUnitCustom"],
  ToplistWidgetDisplay: ["ToplistWidgetStacked", "ToplistWidgetFlat"],
  WidgetSortOrderBy: ["WidgetFormulaSort", "WidgetGroupSort"],
  WidgetTime: ["WidgetLegacyLiveSpan", "WidgetNewLiveSpan", "WidgetNewFixedSpan"],
};

export class ObjectSerializer {
  public static serialize(data: any, type: string, format: string): any {
    if (data == undefined || type == "any") {
      return data;
    } else if (data instanceof UnparsedObject) {
      return data._data;
    } else if (
      primitives.includes(type.toLowerCase()) &&
      typeof data == type.toLowerCase()
    ) {
      return data;
    } else if (type.startsWith(ARRAY_PREFIX)) {
      if (!Array.isArray(data)) {
        throw new TypeError(`mismatch types '${data}' and '${type}'`);
      }
      // Array<Type> => Type
      const subType: string = type.substring(
        ARRAY_PREFIX.length,
        type.length - 1,
      );
      const transformedData: any[] = [];
      for (const element of data) {
        transformedData.push(
          ObjectSerializer.serialize(element, subType, format),
        );
      }
      return transformedData;
    } else if (type.startsWith(TUPLE_PREFIX)) {
      // We only support homegeneus tuples
      const subType: string = type
        .substring(TUPLE_PREFIX.length, type.length - 1)
        .split(", ")[0];
      const transformedData: any[] = [];
      for (const element of data) {
        transformedData.push(
          ObjectSerializer.serialize(element, subType, format),
        );
      }
      return transformedData;
    } else if (type.startsWith(MAP_PREFIX)) {
      // { [key: string]: Type; } => Type
      const subType: string = type.substring(
        MAP_PREFIX.length,
        type.length - 3,
      );
      const transformedData: { [key: string]: any } = {};
      for (const key in data) {
        transformedData[key] = ObjectSerializer.serialize(
          data[key],
          subType,
          format,
        );
      }
      return transformedData;
    } else if (type === "Date") {
      if ("string" == typeof data) {
        return data;
      }
      if (format == "date" || format == "date-time") {
        return dateToRFC3339String(data);
      } else {
        return data.toISOString();
      }
    } else {
      if (enumsMap[type]) {
        if (enumsMap[type].includes(data)) {
          return data;
        }
        throw new TypeError(`unknown enum value '${data}'`);
      }
      if (oneOfMap[type]) {
        const oneOfs: any[] = [];
        for (const oneOf of oneOfMap[type]) {
          try {
            oneOfs.push(ObjectSerializer.serialize(data, oneOf, format));
          } catch (e) {
            logger.debug(`could not serialize ${oneOf} (${e})`);
          }
        }
        if (oneOfs.length > 1) {
          throw new TypeError(
            `${data} matches multiple types from ${oneOfMap[type]} ${oneOfs}`,
          );
        }
        if (oneOfs.length == 0) {
          throw new TypeError(
            `${data} doesn't match any type from ${oneOfMap[type]} ${oneOfs}`,
          );
        }
        return oneOfs[0];
      }

      if (!typeMap[type]) {
        // dont know the type
        throw new TypeError(`unknown type '${type}'`);
      }

      // get the map for the correct type.
      const attributesMap = typeMap[type].getAttributeTypeMap();
      const instance: { [index: string]: any } = {};

      for (const attributeName in data) {
        const attributeObj = attributesMap[attributeName];
        if (
          attributeName === "_unparsed" ||
          attributeName === "additionalProperties"
        ) {
          continue;
        } else if (
          attributeObj === undefined &&
          !("additionalProperties" in attributesMap)
        ) {
          throw new Error(
            "unexpected attribute " + attributeName + " of type " + type,
          );
        } else if (attributeObj) {
          instance[attributeObj.baseName] = ObjectSerializer.serialize(
            data[attributeName],
            attributeObj.type,
            attributeObj.format,
          );
        }
      }

      if (data.additionalProperties) {
        const additionalPropertiesMap = attributesMap["additionalProperties"];
        if (additionalPropertiesMap) {
          for (const key in data.additionalProperties) {
            instance[key] = ObjectSerializer.serialize(
              data.additionalProperties[key],
              additionalPropertiesMap.type,
              additionalPropertiesMap.format,
            );
          }
        } else {
          throw new Error(`additionalProperties found in ${type}`);
        }
      }

      // check for required properties
      for (const attributeName in attributesMap) {
        const attributeObj = attributesMap[attributeName];
        if (
          attributeObj?.required &&
          instance[attributeObj.baseName] === undefined
        ) {
          throw new Error(
            `missing required property '${attributeObj.baseName}'`,
          );
        }
      }

      return instance;
    }
  }

  public static deserialize(data: any, type: string, format: string = ""): any {
    if (data == undefined || type == "any") {
      return data;
    } else if (
      primitives.includes(type.toLowerCase()) &&
      typeof data == type.toLowerCase()
    ) {
      return data;
    } else if (type.startsWith(ARRAY_PREFIX)) {
      // Assert the passed data is Array type
      if (!Array.isArray(data)) {
        throw new TypeError(`mismatch types '${data}' and '${type}'`);
      }
      // Array<Type> => Type
      const subType: string = type.substring(
        ARRAY_PREFIX.length,
        type.length - 1,
      );
      const transformedData: any[] = [];
      for (const element of data) {
        transformedData.push(
          ObjectSerializer.deserialize(element, subType, format),
        );
      }
      return transformedData;
    } else if (type.startsWith(TUPLE_PREFIX)) {
      // [Type,...] => Type
      const subType: string = type
        .substring(TUPLE_PREFIX.length, type.length - 1)
        .split(", ")[0];
      const transformedData: any[] = [];
      for (const element of data) {
        transformedData.push(
          ObjectSerializer.deserialize(element, subType, format),
        );
      }
      return transformedData;
    } else if (type.startsWith(MAP_PREFIX)) {
      // { [key: string]: Type; } => Type
      const subType: string = type.substring(
        MAP_PREFIX.length,
        type.length - 3,
      );
      const transformedData: { [key: string]: any } = {};
      for (const key in data) {
        transformedData[key] = ObjectSerializer.deserialize(
          data[key],
          subType,
          format,
        );
      }
      return transformedData;
    } else if (type === "Date") {
      try {
        return dateFromRFC3339String(data);
      } catch {
        return new Date(data);
      }
    } else {
      if (enumsMap[type]) {
        if (enumsMap[type].includes(data)) {
          return data;
        }
        return new UnparsedObject(data);
      }
      if (oneOfMap[type]) {
        const oneOfs: any[] = [];
        for (const oneOf of oneOfMap[type]) {
          try {
            const d = ObjectSerializer.deserialize(data, oneOf, format);
            if (!d?._unparsed) {
              oneOfs.push(d);
            }
          } catch (e) {
            logger.debug(`could not deserialize ${oneOf} (${e})`);
          }
        }
        if (oneOfs.length != 1) {
          return new UnparsedObject(data);
        }
        return oneOfs[0];
      }

      if (!typeMap[type]) {
        // dont know the type
        throw new TypeError(`unknown type '${type}'`);
      }

      const instance = new typeMap[type]();
      const attributesMap = typeMap[type].getAttributeTypeMap();
      const attributesBaseNames = Object.keys(attributesMap).reduce(
        (o, key) => Object.assign(o, { [attributesMap[key].baseName]: "" }),
        {},
      );
      const extraAttributes = Object.keys(data).filter(
        (key) =>
          !Object.prototype.hasOwnProperty.call(attributesBaseNames, key),
      );

      if (extraAttributes.length > 0) {
        if ("additionalProperties" in attributesMap) {
          if (!instance.additionalProperties) {
            instance.additionalProperties = {};
          }

          const attributeObj = attributesMap["additionalProperties"];
          for (const key in extraAttributes) {
            instance.additionalProperties[extraAttributes[key]] =
              ObjectSerializer.deserialize(
                data[extraAttributes[key]],
                attributeObj.type,
                attributeObj.format,
              );
          }
        } else {
          throw new Error(
            `found extra attributes '${extraAttributes}' in ${type}`,
          );
        }
      }

      for (const attributeName in attributesMap) {
        const attributeObj = attributesMap[attributeName];
        if (attributeName === "additionalProperties") {
          continue;
        }

        instance[attributeName] = ObjectSerializer.deserialize(
          data[attributeObj.baseName],
          attributeObj.type,
          attributeObj.format,
        );

        // check for required properties
        if (attributeObj?.required && instance[attributeName] === undefined) {
          throw new Error(`missing required property '${attributeName}'`);
        }

        if (
          instance[attributeName] instanceof UnparsedObject ||
          instance[attributeName]?._unparsed
        ) {
          instance._unparsed = true;
        }

        if (Array.isArray(instance[attributeName])) {
          for (const d of instance[attributeName]) {
            if (d instanceof UnparsedObject || d?._unparsed) {
              instance._unparsed = true;
              break;
            }
          }
        }
      }

      return instance;
    }
  }

  /**
   * Normalize media type
   *
   * We currently do not handle any media types attributes, i.e. anything
   * after a semicolon. All content is assumed to be UTF-8 compatible.
   */
  public static normalizeMediaType(
    mediaType: string | undefined,
  ): string | undefined {
    if (mediaType === undefined) {
      return undefined;
    }
    return mediaType.split(";")[0].trim().toLowerCase();
  }

  /**
   * From a list of possible media types, choose the one we can handle best.
   *
   * The order of the given media types does not have any impact on the choice
   * made.
   */
  public static getPreferredMediaType(mediaTypes: Array<string>): string {
    /** According to OAS 3 we should default to json */
    if (!mediaTypes) {
      return "application/json";
    }

    const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
    let selectedMediaType: string | undefined = undefined;
    let selectedRank: number = -Infinity;
    for (const mediaType of normalMediaTypes) {
      if (mediaType === undefined) {
        continue;
      }
      const supported = supportedMediaTypes[mediaType];
      if (supported !== undefined && supported > selectedRank) {
        selectedMediaType = mediaType;
        selectedRank = supported;
      }
    }

    if (selectedMediaType === undefined) {
      throw new Error(
        "None of the given media types are supported: " + mediaTypes.join(", "),
      );
    }

    return selectedMediaType;
  }

  /**
   * Convert data to a string according the given media type
   */
  public static stringify(data: any, mediaType: string): string {
    if (mediaType === "application/json" || mediaType === "text/json") {
      return JSON.stringify(data);
    }

    throw new Error(
      "The mediaType " +
        mediaType +
        " is not supported by ObjectSerializer.stringify.",
    );
  }

  /**
   * Parse data from a string according to the given media type
   */
  public static parse(rawData: string, mediaType: string | undefined): any {
    try {
      return JSON.parse(rawData);
    } catch (error) {
      logger.debug(`could not parse ${mediaType}: ${error}`);
      return rawData;
    }
  }
}
